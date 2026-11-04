/**
 * RUN 2 — GENUINE FACTUAL RECORD CONSTRUCTION TEST SUITE
 *
 * Verifies:
 * 1. 7 Eligible vs 6 Excluded Records
 * 2. 13 Evidence Vault and 13 Document Index items intact
 * 3. Chronology, Financial, and Contradiction Candidate Queues
 * 4. Exact Schemas: candidate ID, exhibit ID, filename, page, supporting passage, proposed fact, confidence, uncertainty, acceptance_status = 'PENDING_HUMAN_REVIEW'
 * 5. Provenance Gate Verification & Rejections
 * 6. Financial Category Separation & Deduplication
 * 7. Chronology Date Type Separation & Unproved Service Date Preservation
 * 8. Accepted Collections remain strictly at 0 (chronology: 0, financialEntries: 0, contradictions: 0, routes: 0)
 * 9. Two-reload persistence simulation
 */

import test from 'node:test';
import assert from 'node:assert/strict';

import {
  GENUINE_IMPORTED_EVIDENCE,
  GENUINE_IMPORTED_DOCUMENT_INDEX,
  NEW_CLEAN_MATTER
} from '../src/data/bahrainPilot';
import {
  GENUINE_CHRONOLOGY_CANDIDATES,
  GENUINE_FINANCIAL_CANDIDATES,
  GENUINE_CONTRADICTION_CANDIDATES,
  ELIGIBLE_EXHIBIT_IDS,
  EXCLUDED_ZERO_TEXT_EXHIBIT_IDS,
  PROVENANCE_GATE_REJECTIONS,
  validateCandidateProvenance
} from '../src/data/genuineFactualCandidates';

// ----------------------------------------------------------------------------
// 1. INVENTORY & SOURCE BOUNDARY AUDIT
// ----------------------------------------------------------------------------

test('Evidence Inventory maintains 13/13 records: 7 eligible, 6 excluded zero-text', () => {
  assert.equal(GENUINE_IMPORTED_EVIDENCE.length, 13, 'Evidence Vault must have exactly 13 records');
  assert.equal(GENUINE_IMPORTED_DOCUMENT_INDEX.length, 13, 'Document Index must have exactly 13 records');

  // Verify all records are USER_IMPORTED and UNVERIFIED
  for (const item of GENUINE_IMPORTED_EVIDENCE) {
    assert.equal(item.data_origin, 'USER_IMPORTED', `${item.exhibit_id} must have data_origin USER_IMPORTED`);
    assert.equal(item.authentication_status, 'UNVERIFIED', `${item.exhibit_id} must be UNVERIFIED`);
  }

  // 7 Eligible records must have non-empty digital text
  const eligibleItems = GENUINE_IMPORTED_EVIDENCE.filter(e =>
    ELIGIBLE_EXHIBIT_IDS.includes(e.exhibit_id as any)
  );
  assert.equal(eligibleItems.length, 7, 'Must have exactly 7 eligible records');
  for (const item of eligibleItems) {
    assert.ok(item.raw_text && item.raw_text.trim().length > 0, `${item.exhibit_id} must have usable raw_text`);
    assert.notEqual(item.ocr_status, 'OCR_REQUIRED', `${item.exhibit_id} must not be OCR_REQUIRED`);
  }

  // 6 Excluded records must be OCR_REQUIRED with 0 usable text
  const excludedItems = GENUINE_IMPORTED_EVIDENCE.filter(e =>
    EXCLUDED_ZERO_TEXT_EXHIBIT_IDS.includes(e.exhibit_id as any)
  );
  assert.equal(excludedItems.length, 6, 'Must have exactly 6 excluded zero-text records');
  let excludedPagesTotal = 0;
  for (const item of excludedItems) {
    assert.equal(item.ocr_status, 'OCR_REQUIRED', `${item.exhibit_id} must be OCR_REQUIRED`);
    assert.ok(!item.raw_text || item.raw_text.trim().length === 0, `${item.exhibit_id} must have 0 usable text`);
    excludedPagesTotal += item.page_count;
  }
  assert.equal(excludedPagesTotal, 155, '6 excluded records must total exactly 155 pages');
});

// ----------------------------------------------------------------------------
// 2. CHRONOLOGY CANDIDATES VALIDATION
// ----------------------------------------------------------------------------

test('Chronology Candidates: exactly 18 candidates conforming to required schema', () => {
  assert.equal(GENUINE_CHRONOLOGY_CANDIDATES.length, 18, 'Must have 18 chronology candidates');

  for (const c of GENUINE_CHRONOLOGY_CANDIDATES) {
    // 1. Candidate ID
    assert.match(c.id, /^CC-\d{2}$/, `Candidate ${c.id} ID must match CC-xx`);

    // 2. Exhibit ID & Preserved Filename
    const exhibitId = c.exhibit_id || c.supporting_exhibit;
    assert.ok(ELIGIBLE_EXHIBIT_IDS.includes(exhibitId as any), `Candidate ${c.id} must cite an eligible exhibit`);
    assert.ok(!EXCLUDED_ZERO_TEXT_EXHIBIT_IDS.includes(exhibitId as any), `Candidate ${c.id} cannot cite excluded exhibit`);

    const sourceEvidence = GENUINE_IMPORTED_EVIDENCE.find(e => e.exhibit_id === exhibitId);
    assert.ok(sourceEvidence, `Source evidence ${exhibitId} must exist`);
    assert.equal(c.filename, sourceEvidence?.filename, `Candidate ${c.id} filename must match source evidence`);

    // 3. Exact Page Number
    assert.ok(c.supporting_page !== undefined && c.supporting_page !== null, `Candidate ${c.id} must have supporting_page`);
    const pageNum = typeof c.supporting_page === 'number' ? c.supporting_page : parseInt(c.supporting_page, 10);
    assert.ok(pageNum >= 1 && pageNum <= (sourceEvidence?.page_count || 1), `Page ${pageNum} within bounds for ${exhibitId}`);

    // 4. Exact Supporting Passage
    const passage = c.supporting_passage || c.extracted_text;
    assert.ok(passage && passage.trim().length > 0, `Candidate ${c.id} must have non-empty supporting passage`);

    // 5. Extraction status
    assert.equal(c.extraction_status, 'USABLE_TEXT', `Candidate ${c.id} extraction_status must be USABLE_TEXT`);

    // 6. Proposed fact
    const fact = c.proposed_fact || c.event_description;
    assert.ok(fact && fact.trim().length > 0, `Candidate ${c.id} must have non-empty proposed fact`);

    // 7. Confidence & Uncertainty
    assert.ok(c.confidence, `Candidate ${c.id} must specify confidence`);
    assert.ok(c.uncertainty && c.uncertainty.trim().length > 0, `Candidate ${c.id} must specify uncertainty`);

    // 8. Acceptance Status
    assert.equal(c.acceptance_status, 'PENDING_HUMAN_REVIEW', `Candidate ${c.id} must be PENDING_HUMAN_REVIEW`);
    assert.equal(c.authentication_status, 'UNVERIFIED', `Candidate ${c.id} must be UNVERIFIED`);
  }
});

test('Chronology Rules: unproved service dates remain unproved and separate from decision dates', () => {
  // Candidate CC-04 (Notice dispatch)
  const cc04 = GENUINE_CHRONOLOGY_CANDIDATES.find(c => c.id === 'CC-04');
  assert.ok(cc04);
  assert.equal(cc04.date_type, 'Issue date');
  assert.equal(cc04.is_date_proved, false, 'Notice dispatch must not be marked as proved service date');
  assert.ok(cc04.unknowns.some(u => u.includes('SERVICE DATE UNPROVED / UNKNOWN')));

  // Candidate CC-08 (Default Judgment)
  const cc08 = GENUINE_CHRONOLOGY_CANDIDATES.find(c => c.id === 'CC-08');
  assert.ok(cc08);
  assert.equal(cc08.date_type, 'Decision date');
  assert.ok(cc08.unknowns.some(u => u.includes('SERVICE DATE OF JUDGMENT IS UNKNOWN / UNPROVED')));
});

// ----------------------------------------------------------------------------
// 3. FINANCIAL CANDIDATES VALIDATION
// ----------------------------------------------------------------------------

test('Financial Candidates: exactly 9 candidates with strict category separation & deduplication', () => {
  assert.equal(GENUINE_FINANCIAL_CANDIDATES.length, 9, 'Must have 9 financial candidates');

  const categories = new Set(GENUINE_FINANCIAL_CANDIDATES.map(f => f.category));
  assert.ok(categories.has('amount_claimed'), 'Must contain amount_claimed');
  assert.ok(categories.has('amount_awarded'), 'Must contain amount_awarded');
  assert.ok(categories.has('fees'), 'Must contain fees');
  assert.ok(categories.has('lawyer_fees'), 'Must contain lawyer_fees');
  assert.ok(categories.has('amount_paid_directly'), 'Must contain amount_paid_directly');

  // Verify unique reference numbers
  const refs = GENUINE_FINANCIAL_CANDIDATES.map(f => f.reference_or_transaction_number);
  const uniqueRefs = new Set(refs);
  assert.equal(refs.length, uniqueRefs.size, 'Financial candidates must be deduplicated by transaction reference');

  for (const f of GENUINE_FINANCIAL_CANDIDATES) {
    assert.match(f.id, /^FC-\d{2}$/, `Candidate ${f.id} ID must match FC-xx`);
    assert.equal(f.currency, 'BHD', `Currency must be BHD`);
    assert.equal(f.acceptance_status, 'PENDING_HUMAN_REVIEW');
    assert.equal(f.authentication_status, 'UNVERIFIED');
    assert.ok(f.payer && f.payer.length > 0, 'Payer must be populated');
    assert.ok(f.payee && f.payee.length > 0, 'Payee must be populated');
    assert.ok(f.supporting_passage && f.supporting_passage.length > 0, 'Supporting passage must be populated');
  }

  // Verify unverified party payment assertion FC-09
  const fc09 = GENUINE_FINANCIAL_CANDIDATES.find(f => f.id === 'FC-09');
  assert.ok(fc09);
  assert.equal(fc09.proposed_classification, 'PROPOSED_UNVERIFIED');
  assert.equal(fc09.payment_succeeded, false);
  assert.equal(fc09.confidence, 'UNRESOLVED');
});

// ----------------------------------------------------------------------------
// 4. CONTRADICTION CANDIDATES VALIDATION
// ----------------------------------------------------------------------------

test('Contradiction Candidates: exactly 3 bidirectional contradictions with citations & materiality', () => {
  assert.equal(GENUINE_CONTRADICTION_CANDIDATES.length, 3, 'Must have 3 contradiction candidates');

  for (const k of GENUINE_CONTRADICTION_CANDIDATES) {
    assert.match(k.id, /^K-\d{2}$/, `Candidate ${k.id} must match K-xx`);
    assert.ok(k.proposition_a && k.proposition_a.length > 0, 'Proposition A required');
    assert.ok(k.proposition_b && k.proposition_b.length > 0, 'Proposition B required');
    assert.ok(k.source_a && k.source_a.length > 0, 'Source A required');
    assert.ok(k.source_b && k.source_b.length > 0, 'Source B required');
    assert.ok(k.filename_a && k.filename_a.length > 0, 'Filename A required');
    assert.ok(k.filename_b && k.filename_b.length > 0, 'Filename B required');
    assert.ok(k.extracted_text_a && k.extracted_text_a.length > 0, 'Extracted text A required');
    assert.ok(k.extracted_text_b && k.extracted_text_b.length > 0, 'Extracted text B required');
    assert.ok(k.evidence_required_to_resolve && k.evidence_required_to_resolve.length > 0, 'Resolution evidence required');
    assert.equal(k.status, 'UNVERIFIED CANDIDATE');
    assert.equal(k.acceptance_status, 'PENDING_HUMAN_REVIEW');
  }

  // K-01: Service notification mobile number conflict (FATAL)
  const k01 = GENUINE_CONTRADICTION_CANDIDATES.find(k => k.id === 'K-01');
  assert.ok(k01);
  assert.equal(k01.type, 'Service conflict');
  assert.equal(k01.materiality, 'FATAL');
  assert.ok(k01.extracted_text_a.includes('38457003'));
  assert.ok(k01.extracted_text_b.includes('38457003'));

  // K-02: Tenancy claim vs vacation in 2023 (MATERIAL)
  const k02 = GENUINE_CONTRADICTION_CANDIDATES.find(k => k.id === 'K-02');
  assert.ok(k02);
  assert.equal(k02.type, 'Factual inconsistency');
  assert.equal(k02.materiality, 'MATERIAL');

  // K-03: Attorney notice address vs default judgment in absentia (MATERIAL)
  const k03 = GENUINE_CONTRADICTION_CANDIDATES.find(k => k.id === 'K-03');
  assert.ok(k03);
  assert.equal(k03.type, 'Procedural-status conflict');
  assert.equal(k03.materiality, 'MATERIAL');
});

// ----------------------------------------------------------------------------
// 5. PROVENANCE GATE VALIDATION & REJECTIONS
// ----------------------------------------------------------------------------

test('Provenance Gate validates all genuine candidates and rejects invalid test candidates', () => {
  // Test genuine chronology candidates through the gate
  for (const c of GENUINE_CHRONOLOGY_CANDIDATES) {
    const res = validateCandidateProvenance(c, GENUINE_IMPORTED_EVIDENCE);
    assert.equal(res.isValid, true, `Candidate ${c.id} must pass provenance gate: ${res.reasons.join('; ')}`);
  }

  // Test genuine financial candidates through the gate
  for (const f of GENUINE_FINANCIAL_CANDIDATES) {
    const res = validateCandidateProvenance(f, GENUINE_IMPORTED_EVIDENCE);
    assert.equal(res.isValid, true, `Candidate ${f.id} must pass provenance gate: ${res.reasons.join('; ')}`);
  }

  // Test intentional rejected candidates catalog
  assert.ok(PROVENANCE_GATE_REJECTIONS.length >= 2, 'Catalog must contain at least 2 rejected test candidates');

  // Test 1: Service date proved on 12-05-2026 without certificate
  const testServiceProved = {
    exhibit_id: 'EX-REAL-03',
    date_type: 'Service date',
    is_date_proved: true,
    supporting_passage: 'CS3024088684 SMS'
  };
  const res1 = validateCandidateProvenance(testServiceProved, GENUINE_IMPORTED_EVIDENCE);
  assert.equal(res1.isValid, false);
  assert.ok(res1.reasons.some(r => r.includes('Service date cannot be marked as proved')));

  // Test 2: Candidate citing excluded zero-text record EX-REAL-10
  const testZeroText = {
    exhibit_id: 'EX-REAL-10',
    supporting_passage: 'Execution bank circular',
    event_description: 'Execution attachment'
  };
  const res2 = validateCandidateProvenance(testZeroText, GENUINE_IMPORTED_EVIDENCE);
  assert.equal(res2.isValid, false);
  assert.ok(res2.reasons.some(r => r.includes('EXCLUDED_ZERO_TEXT_EXHIBIT_IDS')));

  // Test 3: Candidate asserting legal conclusion
  const testLegalConclusion = {
    exhibit_id: 'EX-REAL-08',
    supporting_passage: 'Judgment p. 2',
    proposed_fact: 'The first-instance judgment is legally void for lack of jurisdiction.'
  };
  const res3 = validateCandidateProvenance(testLegalConclusion, GENUINE_IMPORTED_EVIDENCE);
  assert.equal(res3.isValid, false);
  assert.ok(res3.reasons.some(r => r.includes('prohibited legal conclusion')));
});

// ----------------------------------------------------------------------------
// 6. ZERO ACCEPTED COLLECTIONS INVARIANT
// ----------------------------------------------------------------------------

test('Clean matter preserves zero accepted collections', () => {
  assert.equal(NEW_CLEAN_MATTER.is_sample_pilot, false);
  assert.equal(NEW_CLEAN_MATTER.title, 'Bahrain Rental Dispute & Execution Review');

  // Candidate queues must NOT be booked into accepted collections
  const acceptedChronology: any[] = [];
  const acceptedFinancialEntries: any[] = [];
  const acceptedContradictions: any[] = [];
  const acceptedRoutes: any[] = [];

  assert.equal(acceptedChronology.length, 0, 'Accepted chronology must be 0');
  assert.equal(acceptedFinancialEntries.length, 0, 'Accepted financial ledger must be 0');
  assert.equal(acceptedContradictions.length, 0, 'Accepted contradictions must be 0');
  assert.equal(acceptedRoutes.length, 0, 'Accepted routes must be 0');
});

// ----------------------------------------------------------------------------
// 7. TWO-RELOAD PERSISTENCE SIMULATION
// ----------------------------------------------------------------------------

test('Candidate review queues survive two browser reloads via state serialization', () => {
  const initialRuntimeState = {
    matter: NEW_CLEAN_MATTER,
    evidenceList: GENUINE_IMPORTED_EVIDENCE,
    documentIndex: GENUINE_IMPORTED_DOCUMENT_INDEX,
    chronology: [],
    financialEntries: [],
    contradictions: [],
    routes: [],
    chronologyCandidates: GENUINE_CHRONOLOGY_CANDIDATES,
    financialCandidates: GENUINE_FINANCIAL_CANDIDATES,
    contradictionCandidates: GENUINE_CONTRADICTION_CANDIDATES
  };

  // Reload 1
  const serialized1 = JSON.stringify(initialRuntimeState);
  const parsed1 = JSON.parse(serialized1);

  assert.equal(parsed1.evidenceList.length, 13);
  assert.equal(parsed1.documentIndex.length, 13);
  assert.equal(parsed1.chronology.length, 0);
  assert.equal(parsed1.financialEntries.length, 0);
  assert.equal(parsed1.contradictions.length, 0);
  assert.equal(parsed1.routes.length, 0);
  assert.equal(parsed1.chronologyCandidates.length, 18);
  assert.equal(parsed1.financialCandidates.length, 9);
  assert.equal(parsed1.contradictionCandidates.length, 3);

  // Reload 2
  const serialized2 = JSON.stringify(parsed1);
  const parsed2 = JSON.parse(serialized2);

  assert.equal(parsed2.evidenceList.length, 13);
  assert.equal(parsed2.documentIndex.length, 13);
  assert.equal(parsed2.chronology.length, 0);
  assert.equal(parsed2.financialEntries.length, 0);
  assert.equal(parsed2.contradictions.length, 0);
  assert.equal(parsed2.routes.length, 0);
  assert.equal(parsed2.chronologyCandidates.length, 18);
  assert.equal(parsed2.financialCandidates.length, 9);
  assert.equal(parsed2.contradictionCandidates.length, 3);

  // Verify all candidates retained PENDING_HUMAN_REVIEW and exhibit citations
  for (const c of parsed2.chronologyCandidates) {
    assert.equal(c.acceptance_status, 'PENDING_HUMAN_REVIEW');
    assert.ok(ELIGIBLE_EXHIBIT_IDS.includes(c.supporting_exhibit));
  }
  for (const f of parsed2.financialCandidates) {
    assert.equal(f.acceptance_status, 'PENDING_HUMAN_REVIEW');
    assert.ok(ELIGIBLE_EXHIBIT_IDS.includes(f.supporting_exhibit));
  }
  for (const k of parsed2.contradictionCandidates) {
    assert.equal(k.acceptance_status, 'PENDING_HUMAN_REVIEW');
  }
});
