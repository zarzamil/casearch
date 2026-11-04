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

  await t.test('3. Exactly the 5 zero-text scanned PDFs have ocr_status = OCR_REQUIRED', () => {
    const scannedFilenames = [
      'MOJ-E-WKVDIXSJHBBFQONHYHPO.pdf',
      'execution full file.pdf',
      'execution payment distribution.pdf',
      'execution.pdf',
      'print.pdf'
    ];

    const ocrRequiredItems = GENUINE_IMPORTED_EVIDENCE.filter(e => e.ocr_status === 'OCR_REQUIRED');
    assert.equal(ocrRequiredItems.length, 5);
    assert.deepEqual(
      ocrRequiredItems.map(e => e.filename).sort(),
      scannedFilenames.sort()
    );

    for (const item of ocrRequiredItems) {
      assert.equal(item.completeness_status, 'PARTIAL');
      assert.equal(item.raw_text, undefined);
    }

    const ocrRequiredDocs = GENUINE_IMPORTED_DOCUMENT_INDEX.filter(d => d.ocr_required === true);
    assert.equal(ocrRequiredDocs.length, 5);
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

  await t.test('5. Readable PDFs and completed OCR documents have is_readable = true with full coverage', () => {
    const completedCourtRecords = [
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
      completedCourtRecords.sort()
    );

    for (const item of completedItems) {
      assert.equal(item.completeness_status, 'COMPLETE');
      assert.ok((item.raw_text?.length || 0) > 0);
    }

    // contract.pdf has ocr_status = OCR_COMPLETE with 100% coverage across 5 pages
    const contractItem = GENUINE_IMPORTED_EVIDENCE.find(e => e.exhibit_id === 'EX-REAL-13')!;
    assert.equal(contractItem.filename, 'contract.pdf');
    assert.equal(contractItem.ocr_status, 'OCR_COMPLETE');
    assert.equal(contractItem.coverage, 100);
    assert.equal(contractItem.usable_pages, 5);
    assert.deepEqual(contractItem.failed_pages, []);

    const readableDocs = GENUINE_IMPORTED_DOCUMENT_INDEX.filter(d => d.is_readable === true);
    assert.equal(readableDocs.length, 8);
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
    assert.equal(restoredCycle1.evidenceList.filter((e: EvidenceItem) => e.ocr_status === 'OCR_REQUIRED').length, 5);

    // Cycle 2: Serialize and restore again
    const serializedCycle2 = JSON.stringify(restoredCycle1);
    const restoredCycle2 = JSON.parse(serializedCycle2);
    assert.equal(restoredCycle2.evidenceList.length, 13);
    assert.equal(restoredCycle2.documentIndex.length, 13);
    assert.equal(restoredCycle2.evidenceList.filter((e: EvidenceItem) => e.ocr_status === 'OCR_REQUIRED').length, 5);
    assert.equal(restoredCycle2.evidenceList.filter((e: EvidenceItem) => e.data_origin === 'USER_IMPORTED').length, 13);
  });

  await t.test('8. EX-REAL-13 metadata identity is isolated from MOJ-E-WKVDIXSJHBBFQONHYHPO', () => {
    const ex13 = GENUINE_IMPORTED_EVIDENCE.find(e => e.exhibit_id === 'EX-REAL-13')!;
    const ex07 = GENUINE_IMPORTED_EVIDENCE.find(e => e.exhibit_id === 'EX-REAL-07')!;

    // EX-REAL-13 identity
    assert.equal(ex13.filename, 'contract.pdf');
    assert.equal(ex13.document_type, 'Property Lease Agreement');
    assert.equal(ex13.date, '2026-01-01');
    assert.equal(ex13.author_or_issuer, 'Lessor: Mubarak Ali Jowder / Lessee: Alina Alekseeva');
    assert.equal(ex13.source, 'User-provided local lease document');
    assert.equal(ex13.page_count, 5);
    assert.equal(ex13.ocr_status, 'OCR_COMPLETE');
    assert.equal(ex13.completeness_status, 'COMPLETE');
    assert.equal(ex13.usable_pages, 5);
    assert.deepEqual(ex13.failed_pages, []);
    assert.equal(ex13.coverage, 100);
    assert.equal(ex13.data_origin, 'USER_IMPORTED');
    assert.equal(ex13.authentication_status, 'UNVERIFIED');
    assert.equal(ex13.source_citation_identifier, 'contract.pdf (p. 1-5)');
    assert.ok(ex13.file_hash, 'Must have dedicated file hash');
    assert.notEqual(ex13.file_hash, ex07.file_hash, 'Hash must not be inherited from EX-07');
    assert.ok(ex13.raw_text?.includes('عقد إيجار عقار سكني موحد'));
    assert.ok(ex13.raw_text?.includes('LEASE-2026-01-01'));
    assert.ok(ex13.raw_text?.includes('p.5:'));

    // Strictly no inherited MOJ metadata
    assert.equal(ex13.filename.includes('MOJ-E-WKVDIXSJHBBFQONHYHPO'), false);
    assert.equal(ex13.document_type.includes('Court Record and Pleadings'), false);
    assert.equal(ex13.notes.includes('Commercial Appeal Chamber'), false);
    assert.equal(ex13.notes.includes('Page 77'), false);

    // EX-REAL-07 remains separate 77-page record
    assert.equal(ex07.filename, 'MOJ-E-WKVDIXSJHBBFQONHYHPO.pdf');
    assert.equal(ex07.page_count, 77);
    assert.equal(ex07.ocr_status, 'OCR_REQUIRED');
    assert.equal(ex07.data_origin, 'USER_IMPORTED');
    assert.equal(ex07.authentication_status, 'UNVERIFIED');

    // Document index isolation
    const doc13 = GENUINE_IMPORTED_DOCUMENT_INDEX.find(d => d.exhibit_id === 'EX-REAL-13')!;
    const doc07 = GENUINE_IMPORTED_DOCUMENT_INDEX.find(d => d.exhibit_id === 'EX-REAL-07')!;
    assert.equal(doc13.document_title, 'contract.pdf');
    assert.equal(doc13.page_range, '1-5');
    assert.equal(doc13.is_readable, true);
    assert.equal(doc13.ocr_required, false);
    assert.equal(doc07.document_title, 'MOJ-E-WKVDIXSJHBBFQONHYHPO.pdf');
    assert.equal(doc07.page_range, '1-77');
    assert.equal(doc07.is_readable, false);
    assert.equal(doc07.ocr_required, true);

    // Total counts remain 13/13
    assert.equal(GENUINE_IMPORTED_EVIDENCE.length, 13);
    assert.equal(GENUINE_IMPORTED_DOCUMENT_INDEX.length, 13);
  });
});
