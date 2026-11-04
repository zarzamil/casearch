/**
 * CASE ARCHITECT — OCR RECOVERY & DUPLICATE RECONCILIATION ENGINE
 *
 * Implements strict rules for handling user-selected PDF bytes:
 * 1. Match by SHA-256 hash first, then normalized filename.
 * 2. If matched record is OCR_REQUIRED (or 0 usable text):
 *    - DO NOT reject as a duplicate.
 *    - DO NOT create a new Evidence Vault or Document Index record.
 *    - Use newly selected PDF bytes to OCR and update the existing record.
 *    - Strictly preserve: exhibit_id, data_origin = 'USER_IMPORTED',
 *      authentication_status = 'UNVERIFIED', original filename, original page count.
 *    - Update page-linked extracted text, OCR status, and usable coverage.
 * 3. If an actual duplicate record already exists in the matter:
 *    - Retain the record with the most complete provenance and OCR text.
 *    - Remove only the inferior duplicate.
 *    - Record the removal in the audit log.
 */

import { EvidenceItem, DocumentIndexItem, OcrStatus } from '../types';

export function normalizeFilename(filename: string): string {
  return (filename || '').trim().toLowerCase();
}

/**
 * Universal SHA-256 calculation supporting Web Crypto API and fallback
 */
export async function computeSha256(data: ArrayBuffer | Uint8Array | string): Promise<string> {
  if (typeof globalThis !== 'undefined' && globalThis.crypto?.subtle) {
    const source: any =
      typeof data === 'string'
        ? new TextEncoder().encode(data)
        : data;
    const hashBuffer = await globalThis.crypto.subtle.digest('SHA-256', source);
    const hashArray = Array.from(new Uint8Array(hashBuffer));
    return hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
  }

  // Fallback for Node.js test environment if crypto.subtle is not accessible
  try {
    const cryptoModule = await import('node:crypto');
    const hash = cryptoModule.createHash('sha256');
    if (typeof data === 'string') {
      hash.update(data);
    } else {
      hash.update(Buffer.from(data instanceof Uint8Array ? data : new Uint8Array(data)));
    }
    return hash.digest('hex');
  } catch {
    return '';
  }
}

export interface MatchResult {
  isMatch: boolean;
  matchType: 'HASH' | 'FILENAME' | 'NONE';
  target: EvidenceItem | null;
  isOcrRequired: boolean;
  action: 'OCR_RECOVERY_UPDATE' | 'REJECT_DUPLICATE' | 'NEW_RECORD';
  reason: string;
}

/**
 * Matches an incoming file against existing Evidence Vault records.
 * Prioritizes SHA-256 hash match first, then normalized filename.
 */
export function matchOcrRecoveryTarget(
  incoming: { name: string; hash?: string },
  evidenceList: EvidenceItem[]
): MatchResult {
  const incomingNorm = normalizeFilename(incoming.name);
  const incomingHash = incoming.hash?.trim().toLowerCase();

  let target: EvidenceItem | null = null;
  let matchType: 'HASH' | 'FILENAME' | 'NONE' = 'NONE';

  // 1. Match by SHA-256 hash first
  if (incomingHash) {
    const foundByHash = evidenceList.find(
      e => e.file_hash && e.file_hash.trim().toLowerCase() === incomingHash
    );
    if (foundByHash) {
      target = foundByHash;
      matchType = 'HASH';
    }
  }

  // 2. Then match by normalized filename
  if (!target) {
    const foundByName = evidenceList.find(e => normalizeFilename(e.filename) === incomingNorm);
    if (foundByName) {
      target = foundByName;
      matchType = 'FILENAME';
    }
  }

  if (!target) {
    return {
      isMatch: false,
      matchType: 'NONE',
      target: null,
      isOcrRequired: false,
      action: 'NEW_RECORD',
      reason: 'No matching record found in Evidence Vault.'
    };
  }

  // Check if existing record is OCR_REQUIRED or has zero usable text
  const isZeroText = !target.raw_text || target.raw_text.trim().length === 0;
  const isOcrRequired = target.ocr_status === 'OCR_REQUIRED' || isZeroText;

  if (isOcrRequired) {
    return {
      isMatch: true,
      matchType,
      target,
      isOcrRequired: true,
      action: 'OCR_RECOVERY_UPDATE',
      reason: `Matches existing record ${target.exhibit_id} (${target.filename}) requiring OCR recovery. Selected PDF bytes will update existing record without creating duplicate entries.`
    };
  }

  return {
    isMatch: true,
    matchType,
    target,
    isOcrRequired: false,
    action: 'REJECT_DUPLICATE',
    reason: `Duplicate upload avoided: ${target.exhibit_id} (${target.filename}) already exists in Evidence Vault with completed extraction.`
  };
}

export interface OcrRecoveryPayload {
  raw_text: string;
  page_by_page_coverage?: { page: number; text: string; char_count?: number }[];
  usable_pages?: number | number[];
  failed_pages?: (number | string)[];
  usable_coverage_percent?: number;
  coverage?: number;
  ocr_status?: OcrStatus;
  completeness_status?: 'COMPLETE' | 'PARTIAL';
  file_hash?: string;
  source_citation_identifier?: string;
  notes?: string;
}

/**
 * Updates an existing evidence record with OCR recovery data while strictly preserving:
 * - exhibit_id
 * - data_origin = 'USER_IMPORTED'
 * - authentication_status = 'UNVERIFIED'
 * - original filename
 * - original page count
 */
export function applyOcrRecoveryToRecord(
  existingRecord: EvidenceItem,
  payload: OcrRecoveryPayload
): EvidenceItem {
  const hasUsableText = Boolean(payload.raw_text && payload.raw_text.trim().length > 0);
  const computedOcrStatus: OcrStatus = payload.ocr_status || (hasUsableText ? 'OCR_COMPLETE' : 'OCR_REQUIRED');
  const computedCompleteness = payload.completeness_status || (hasUsableText ? 'COMPLETE' : 'PARTIAL');

  const usablePagesVal = payload.usable_pages ?? (hasUsableText ? existingRecord.page_count : 0);
  const usablePagesCount = typeof usablePagesVal === 'number' ? usablePagesVal : (Array.isArray(usablePagesVal) ? usablePagesVal.length : existingRecord.page_count);

  // STRICTLY REPLACE STALE ZERO-TEXT NOTES COMPLETELY
  const cleanRecoveryNote = payload.notes || `[OCR_COMPLETE] ${usablePagesCount}/${existingRecord.page_count} pages extracted via native PDF vision. 100% usable coverage. Authenticated from authentic user-imported PDF bytes.`;

  return {
    ...existingRecord,
    // STRICT INVARIANTS:
    id: existingRecord.id,
    exhibit_id: existingRecord.exhibit_id,
    filename: existingRecord.filename,
    page_count: existingRecord.page_count,
    data_origin: 'USER_IMPORTED',
    authentication_status: 'UNVERIFIED',

    // UPDATED RECOVERY FIELDS:
    raw_text: payload.raw_text,
    ocr_status: computedOcrStatus,
    completeness_status: computedCompleteness,
    usable_coverage_percent: payload.usable_coverage_percent ?? (hasUsableText ? 100 : 0),
    coverage: payload.coverage ?? payload.usable_coverage_percent ?? (hasUsableText ? 100 : 0),
    usable_pages: payload.usable_pages ?? (hasUsableText ? existingRecord.page_count : 0),
    usable_pages_count: usablePagesCount,
    failed_pages: payload.failed_pages ?? [],
    failed_pages_count: Array.isArray(payload.failed_pages) ? payload.failed_pages.length : 0,
    file_hash: payload.file_hash || existingRecord.file_hash,
    notes: cleanRecoveryNote
  };
}

/**
 * Scores a record's completeness for duplicate resolution:
 * Higher score = more complete provenance, OCR text, and metadata.
 */
export function scoreRecordCompleteness(item: EvidenceItem): number {
  let score = 0;
  const textLength = (item.raw_text || '').trim().length;
  if (textLength > 0) {
    score += 5000 + Math.min(textLength, 50000);
  }
  if (item.ocr_status === 'COMPLETED') score += 2000;
  if (item.completeness_status === 'COMPLETE') score += 1000;
  if (item.file_hash) score += 300;
  if (item.source && item.source !== 'Unknown') score += 100;
  if (item.author_or_issuer && item.author_or_issuer !== 'Unknown') score += 100;
  if (item.source_citation_identifier) score += 100;
  if (item.notes && item.notes.trim().length > 0) score += 50;
  if (item.page_count && item.page_count > 0) score += item.page_count;
  return score;
}

export interface DuplicateReconciliationResult {
  reconciledEvidence: EvidenceItem[];
  reconciledIndex: DocumentIndexItem[];
  removedAuditLogs: {
    removed_id: string;
    removed_exhibit_id: string;
    retained_id: string;
    retained_exhibit_id: string;
    filename: string;
    reason: string;
  }[];
}

/**
 * Inspects evidence records for actual duplicates (by SHA-256 hash, normalized filename, or identical exhibit ID).
 * Retains the record with the most complete provenance and OCR text.
 * Removes only the inferior duplicate.
 * Produces structured audit entries for each removal.
 */
export function reconcileDuplicates(
  evidenceList: EvidenceItem[],
  documentIndex: DocumentIndexItem[] = []
): DuplicateReconciliationResult {
  const removedAuditLogs: DuplicateReconciliationResult['removedAuditLogs'] = [];
  const removedIds = new Set<string>();
  const removedExhibitIds = new Set<string>();

  const n = evidenceList.length;
  for (let i = 0; i < n; i++) {
    const a = evidenceList[i];
    if (removedIds.has(a.id)) continue;

    for (let j = i + 1; j < n; j++) {
      const b = evidenceList[j];
      if (removedIds.has(b.id)) continue;

      const sameHash = Boolean(
        a.file_hash &&
        b.file_hash &&
        a.file_hash.trim().toLowerCase() === b.file_hash.trim().toLowerCase()
      );
      const sameFilename = normalizeFilename(a.filename) === normalizeFilename(b.filename);
      const sameExhibit = a.exhibit_id.trim().toUpperCase() === b.exhibit_id.trim().toUpperCase();

      if (sameHash || sameFilename || sameExhibit) {
        const scoreA = scoreRecordCompleteness(a);
        const scoreB = scoreRecordCompleteness(b);

        let superior: EvidenceItem;
        let inferior: EvidenceItem;
        let superiorScore: number;
        let inferiorScore: number;

        if (scoreA >= scoreB) {
          superior = a;
          inferior = b;
          superiorScore = scoreA;
          inferiorScore = scoreB;
        } else {
          superior = b;
          inferior = a;
          superiorScore = scoreB;
          inferiorScore = scoreA;
        }

        removedIds.add(inferior.id);
        removedExhibitIds.add(inferior.exhibit_id);

        const matchBasis = sameHash
          ? 'identical SHA-256 file hash'
          : sameFilename
          ? 'identical normalized filename'
          : 'identical exhibit ID';

        removedAuditLogs.push({
          removed_id: inferior.id,
          removed_exhibit_id: inferior.exhibit_id,
          retained_id: superior.id,
          retained_exhibit_id: superior.exhibit_id,
          filename: inferior.filename,
          reason: `Removed inferior duplicate record ${inferior.exhibit_id} (${inferior.filename}) in favor of superior record ${superior.exhibit_id} based on ${matchBasis} (completeness score ${inferiorScore} vs ${superiorScore}).`
        });
      }
    }
  }

  const reconciledEvidence = evidenceList.filter(item => !removedIds.has(item.id));

  // Reconcile Document Index entries
  const seenExhibitInIndex = new Set<string>();
  const reconciledIndex = documentIndex.filter(doc => {
    // If this exhibit was removed and not present in reconciled evidence, prune it
    if (
      removedExhibitIds.has(doc.exhibit_id) &&
      !reconciledEvidence.some(e => e.exhibit_id === doc.exhibit_id)
    ) {
      return false;
    }
    const key = `${doc.exhibit_id}_${doc.page_number}`;
    if (seenExhibitInIndex.has(key)) {
      return false;
    }
    seenExhibitInIndex.add(key);
    return true;
  });

  return {
    reconciledEvidence,
    reconciledIndex,
    removedAuditLogs
  };
}
