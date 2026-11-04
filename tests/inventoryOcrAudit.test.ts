import test from 'node:test';
import assert from 'node:assert/strict';
import { GENUINE_IMPORTED_EVIDENCE, GENUINE_IMPORTED_DOCUMENT_INDEX, NEW_CLEAN_MATTER } from '../src/data/bahrainPilot';
import { EvidenceItem, DocumentIndexItem } from '../src/types';

test('Inventory Audit & Stage 2 OCR Recovery Verification', async (t) => {
  await t.test('1. Total genuine imported records count is 13 in both Evidence Vault and Document Index', () => {
    assert.equal(GENUINE_IMPORTED_EVIDENCE.length, 13);
    assert.equal(GENUINE_IMPORTED_DOCUMENT_INDEX.length, 13);
  });

  await t.test('2. All 13 records have data_origin = USER_IMPORTED and authentication_status = UNVERIFIED', () => {
    for (const item of GENUINE_IMPORTED_EVIDENCE) {
      assert.equal(item.data_origin, 'USER_IMPORTED', `${item.filename} must have data_origin USER_IMPORTED`);
      assert.equal(item.authentication_status, 'UNVERIFIED', `${item.filename} must be UNVERIFIED`);
    }
    for (const doc of GENUINE_IMPORTED_DOCUMENT_INDEX) {
      assert.equal(doc.data_origin, 'USER_IMPORTED', `${doc.document_title} must have data_origin USER_IMPORTED`);
    }
  });

  await t.test('3. Exactly the 6 zero-text scanned PDFs have ocr_status = OCR_REQUIRED', () => {
    const scannedFilenames = [
      'MOJ-E-WKVDIXSJHBBFQONHYHPO.pdf',
      'contract.pdf',
      'execution full file.pdf',
      'execution payment distribution.pdf',
      'execution.pdf',
      'print.pdf'
    ];

    const ocrRequiredItems = GENUINE_IMPORTED_EVIDENCE.filter(e => e.ocr_status === 'OCR_REQUIRED');
    assert.equal(ocrRequiredItems.length, 6);
    assert.deepEqual(
      ocrRequiredItems.map(e => e.filename).sort(),
      scannedFilenames.sort()
    );

    for (const item of ocrRequiredItems) {
      assert.equal(item.completeness_status, 'PARTIAL');
      assert.equal(item.raw_text, undefined);
    }

    const ocrRequiredDocs = GENUINE_IMPORTED_DOCUMENT_INDEX.filter(d => d.ocr_required === true);
    assert.equal(ocrRequiredDocs.length, 6);
    for (const doc of ocrRequiredDocs) {
      assert.equal(doc.is_readable, false);
    }
  });

  await t.test('4. All 4 execution documents are retained without deletion', () => {
    const executionFiles = [
      'MOJ-E-WKVDIXSJHBBFQONHYHPO.pdf',
      'execution full file.pdf',
      'execution payment distribution.pdf',
      'execution.pdf'
    ];

    for (const filename of executionFiles) {
      const inEvidence = GENUINE_IMPORTED_EVIDENCE.some(e => e.filename === filename);
      const inIndex = GENUINE_IMPORTED_DOCUMENT_INDEX.some(d => d.document_title === filename);
      assert.ok(inEvidence, `Execution document ${filename} must be retained in Evidence Vault`);
      assert.ok(inIndex, `Execution document ${filename} must be retained in Document Index`);
    }
  });

  await t.test('5. Exactly the 7 readable PDFs have ocr_status = COMPLETED and is_readable = true', () => {
    const readableFilenames = [
      'MOJ-E-BKPZAUXTMOHLMMX.pdf',
      'MOJ-E-JHYGSZADGRMSNPC.pdf',
      'MOJ-E-QMSVKSLTLYDNFEF.pdf',
      'MOJ-E-SEJBZJEWJMIOXXA.pdf',
      'MOJ-E-TBITWKVQPAILYIR.pdf',
      'MOJ-E-TNCIQZVUXLYNTDF.pdf',
      'MOJ-E-YCAWMQVCCTRFVFG.pdf'
    ];

    const completedItems = GENUINE_IMPORTED_EVIDENCE.filter(e => e.ocr_status === 'COMPLETED');
    assert.equal(completedItems.length, 7);
    assert.deepEqual(
      completedItems.map(e => e.filename).sort(),
      readableFilenames.sort()
    );

    for (const item of completedItems) {
      assert.equal(item.completeness_status, 'COMPLETE');
      assert.ok((item.raw_text?.length || 0) > 0);
    }

    const readableDocs = GENUINE_IMPORTED_DOCUMENT_INDEX.filter(d => d.is_readable === true);
    assert.equal(readableDocs.length, 7);
    for (const doc of readableDocs) {
      assert.equal(doc.ocr_required, false);
    }
  });

  await t.test('6. Matter metadata adheres to clean non-pilot specification', () => {
    assert.equal(NEW_CLEAN_MATTER.id, 'MATTER_BAHRAIN_REVIEW');
    assert.equal(NEW_CLEAN_MATTER.title, 'Bahrain Rental Dispute & Execution Review');
    assert.equal(NEW_CLEAN_MATTER.matter_type, 'Rental Dispute / Execution / Appeal Review');
    assert.equal(NEW_CLEAN_MATTER.analysis_cutoff_date, '2026-10-11');
    assert.equal(NEW_CLEAN_MATTER.is_sample_pilot, false);
  });

  await t.test('7. Persistence simulation across two reload cycles preserves state', () => {
    // Cycle 1: Serialize and restore
    const serializedCycle1 = JSON.stringify({
      evidenceList: GENUINE_IMPORTED_EVIDENCE,
      documentIndex: GENUINE_IMPORTED_DOCUMENT_INDEX,
      matter: NEW_CLEAN_MATTER
    });
    const restoredCycle1 = JSON.parse(serializedCycle1);
    assert.equal(restoredCycle1.evidenceList.length, 13);
    assert.equal(restoredCycle1.documentIndex.length, 13);
    assert.equal(restoredCycle1.evidenceList.filter((e: EvidenceItem) => e.ocr_status === 'OCR_REQUIRED').length, 6);

    // Cycle 2: Serialize and restore again
    const serializedCycle2 = JSON.stringify(restoredCycle1);
    const restoredCycle2 = JSON.parse(serializedCycle2);
    assert.equal(restoredCycle2.evidenceList.length, 13);
    assert.equal(restoredCycle2.documentIndex.length, 13);
    assert.equal(restoredCycle2.evidenceList.filter((e: EvidenceItem) => e.ocr_status === 'OCR_REQUIRED').length, 6);
    assert.equal(restoredCycle2.evidenceList.filter((e: EvidenceItem) => e.data_origin === 'USER_IMPORTED').length, 13);
  });
});
