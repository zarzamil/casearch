/**
 * GENUINE FACTUAL CANDIDATES & PROVENANCE GATE
 *
 * Case Architect — Run 2 Factual Record Construction
 *
 * Strict Compliance Boundary:
 * - data_origin = 'USER_IMPORTED'
 * - authentication_status = 'UNVERIFIED'
 * - Usable page-linked digital text only (7 eligible records; 6 zero-text OCR_REQUIRED excluded)
 * - Exact exhibit IDs, preserved filenames, exact page numbers, and exact extracted passages
 * - Acceptance status = 'PENDING_HUMAN_REVIEW'
 * - Separate financial categories (claimed, awarded, fees, direct payments, unallocated)
 * - Separate chronology date types (filing, registration, payment, event, decision, issue, knowledge, service=UNKNOWN)
 * - Bidirectional contradiction pairs with exact citations and materiality classifications
 * - Zero accepted collections (chronology: 0, financialEntries: 0, contradictions: 0, routes: 0)
 */

import {
  ChronologyCandidate,
  FinancialCandidate,
  ContradictionCandidate,
  EvidenceItem
} from '../types';

export const ELIGIBLE_EXHIBIT_IDS = [
  'EX-REAL-01',
  'EX-REAL-02',
  'EX-REAL-03',
  'EX-REAL-04',
  'EX-REAL-05',
  'EX-REAL-06',
  'EX-REAL-08'
] as const;

export const EXCLUDED_ZERO_TEXT_EXHIBIT_IDS = [
  'EX-REAL-07',
  'EX-REAL-09',
  'EX-REAL-10',
  'EX-REAL-11',
  'EX-REAL-12',
  'EX-REAL-13'
] as const;

// ============================================================================
// 1. CHRONOLOGY CANDIDATES (18 Candidates from 7 Eligible Records)
// ============================================================================

export const GENUINE_CHRONOLOGY_CANDIDATES: ChronologyCandidate[] = [
  {
    id: 'CC-01',
    exhibit_id: 'EX-REAL-02',
    supporting_exhibit: 'EX-REAL-02',
    supporting_page: 1,
    page_number: 1,
    filename: 'MOJ-E-JHYGSZADGRMSNPC.pdf',
    date_and_time: '2026-05-12',
    date_type: 'Registration date',
    proposed_fact: 'Mubarak Ali Mubarak Al-Dossary registered rental dispute Case 25/2026/00738/4 against Elena Belikovskaya before the High Civil Court, 8th Chamber under Bahrain Tenancy Law (Law 27 of 2014).',
    event_description: 'Case 25/2026/00738/4 registered before High Civil Court 8th Chamber under Bahrain Tenancy Law (Law 27 of 2014) by claimant Mubarak Ali Mubarak Al-Dossary against Elena Belikovskaya.',
    supporting_passage: '25 2026 00738 4 : ﺐﻠﻄﻟﺍ ﻢﻗﺭ ... 12/05/2026 : ﻞﻴﺠﺴﺘﻟﺍ ﺦﻳﺭﺎﺗ ... ﺎﻔﻴﺴﻜﺒﻟﺍ ﺎﻨﻴﻟﺍ ﺪﺿ ﺭﺩﻮﺠﻟﺍ ﻰﻠﻋ ﻙﺭﺎﺒﻣ ... ﺔﻴﻧﺪﻤﻟﺍ - ﺔﻨﻣﺎﺜﻟﺍ ﺓﺮﺋﺍﺪﻟﺍ ﻯﺮﺒﻜﻟﺍ ﺔﻤﻜﺤﻤﻟﺍ',
    extracted_text: '25 2026 00738 4 : ﺐﻠﻄﻟﺍ ﻢﻗﺭ ... 12/05/2026 : ﻞﻴﺠﺴﺘﻟﺍ ﺦﻳﺭﺎﺗ ... ﺎﻔﻴﺴﻜﺒﻟﺍ ﺎﻨﻴﻟﺍ ﺪﺿ ﺭﺩﻮﺠﻟﺍ ﻰﻠﻋ ﻙﺭﺎﺒﻣ ... ﺔﻴﻧﺪﻤﻟﺍ - ﺔﻨﻣﺎﺜﻟﺍ ﺓﺮﺋﺍﺪﻟﺍ ﻯﺮﺒﻜﻟﺍ ﺔﻤﻜﺤﻤﻟﺍ',
    extraction_status: 'USABLE_TEXT',
    contradicting_evidence: [],
    is_date_proved: true,
    confidence: 'HIGH CONFIDENCE',
    unknowns: ['Underlying lease contract provisions pending OCR of EX-REAL-13.'],
    possible_procedural_significance: 'Commencement of legal proceedings in High Civil Court 8th Chamber.',
    uncertainty: 'None as to registration date; merits of tenancy claim remain unproved.',
    authentication_status: 'UNVERIFIED',
    acceptance_status: 'PENDING_HUMAN_REVIEW'
  },
  {
    id: 'CC-02',
    exhibit_id: 'EX-REAL-04',
    supporting_exhibit: 'EX-REAL-04',
    supporting_page: 1,
    page_number: 1,
    filename: 'MOJ-E-SEJBZJEWJMIOXXA.pdf',
    date_and_time: '2026-05-12',
    date_type: 'Payment date',
    proposed_fact: 'Claimant paid court filing and pleading fees totaling 91.800 BHD under receipt RC65002977952 for rental claim of 1,440.000 BHD.',
    event_description: 'Court claim fee (89.800 BHD) and pleading fee (2.000 BHD) totaling 91.800 BHD assessed and paid under receipt RC65002977952.',
    supporting_passage: '12-05-2026 : ﻡﻮﺳﺮﻟﺍ ﺪﻴﺻﺭ ﺦﻳﺭﺎﺗ ... 91.800 : ﻡﻮﺳﺮﻟﺍ ﺪﻴﺻﺭ ﻎﻠﺒﻣ ... RC65002977952 : ﻡﻮﺳﺮﻟﺍ ﺪﻴﺻﺭ ﻢﻗﺭ ... 1,440.000 : ﺎﻬﺑ ﺐﻟﺎﻄﻤﻟﺍ ﻎﻟﺎﺒﻤﻟﺍ ﻉﻮﻤﺠﻣ',
    extracted_text: '12-05-2026 : ﻡﻮﺳﺮﻟﺍ ﺪﻴﺻﺭ ﺦﻳﺭﺎﺗ ... 91.800 : ﻡﻮﺳﺮﻟﺍ ﺪﻴﺻﺭ ﻎﻠﺒﻣ ... RC65002977952 : ﻡﻮﺳﺮﻟﺍ ﺪﻴﺻﺭ ﻢﻗﺭ ... 1,440.000 : ﺎﻬﺑ ﺐﻟﺎﻄﻤﻟﺍ ﻎﻟﺎﺒﻤﻟﺍ ﻉﻮﻤﺠﻣ',
    extraction_status: 'USABLE_TEXT',
    contradicting_evidence: [],
    is_date_proved: true,
    confidence: 'HIGH CONFIDENCE',
    unknowns: [],
    possible_procedural_significance: 'Satisfies statutory filing fee requirements for commercial/tenancy claim.',
    uncertainty: 'None as to payment of court fees; does not prove defendant liability.',
    authentication_status: 'UNVERIFIED',
    acceptance_status: 'PENDING_HUMAN_REVIEW'
  },
  {
    id: 'CC-03',
    exhibit_id: 'EX-REAL-05',
    supporting_exhibit: 'EX-REAL-05',
    supporting_page: 3,
    page_number: 3,
    filename: 'MOJ-E-TBITWKVQPAILYIR.pdf',
    date_and_time: '2026-05-12 13:09:45',
    date_type: 'Filing date',
    proposed_fact: 'Urgent ex parte motion LW745888 filed requesting a travel ban against Elena Belikovskaya, with 30.000 BHD motion fee paid under receipt RC65002978011.',
    event_description: 'Urgent application LW745888 for travel ban submitted to court; 30.000 BHD fee paid under receipt RC65002978011.',
    supporting_passage: 'LW745888 : ﺐﻠﻄﻟﺍ ﻢﻗﺭ ... 12-05-2026 13:09:45 : ﺐﻠﻄﻟﺍ ﺦﻳﺭﺎﺗ ... 30.000 : ﺐﻠﻄﻟﺍ ﻡﻮﺳﺭ ... RC65002978011 : ﺪﻴﺻﺮﻟﺍ ﻢﻗﺭ ... ﺮﻔﺴﻟﺍ ﻦﻣ ﻊﻨﻤﻟﺍ : ﺐﻠﻄﻟﺍ ﻒﺻﻭ',
    extracted_text: 'LW745888 : ﺐﻠﻄﻟﺍ ﻢﻗﺭ ... 12-05-2026 13:09:45 : ﺐﻠﻄﻟﺍ ﺦﻳﺭﺎﺗ ... 30.000 : ﺐﻠﻄﻟﺍ ﻡﻮﺳﺭ ... RC65002978011 : ﺪﻴﺻﺮﻟﺍ ﻢﻗﺭ ... ﺮﻔﺴﻟﺍ ﻦﻣ ﻊﻨﻤﻟﺍ : ﺐﻠﻄﻟﺍ ﻒﺻﻭ',
    extraction_status: 'USABLE_TEXT',
    contradicting_evidence: [],
    is_date_proved: true,
    confidence: 'HIGH CONFIDENCE',
    unknowns: ['Affidavit or supporting evidence submitted with urgent application.'],
    possible_procedural_significance: 'Initiated pre-judgment precautionary travel restriction proceedings.',
    uncertainty: 'None as to filing.',
    authentication_status: 'UNVERIFIED',
    acceptance_status: 'PENDING_HUMAN_REVIEW'
  },
  {
    id: 'CC-04',
    exhibit_id: 'EX-REAL-03',
    supporting_exhibit: 'EX-REAL-03',
    supporting_page: 2,
    page_number: 2,
    filename: 'MOJ-E-QMSVKSLTLYDNFEF.pdf',
    date_and_time: '2026-05-12',
    date_type: 'Issue date',
    proposed_fact: 'Ministry portal generated notice dispatch records: letter CS3024088684 sent via SMS to mobile number 38457003; letters CS3024088683 and CS3024088685 sent via SMS to 38378260 and email to info@osamaanwarlawfirm.com.',
    event_description: 'Electronic hearing notice dispatch generated for Case 252026007384; dispatch attempt via SMS to 38457003 and legal counsel channels.',
    supporting_passage: 'CS3024088684 ... 12-05-2026 ... 38457003 ﻢﻗﺮﻟﺍ ﻰﻠﻋ ﺔﻴﺼﻧ ﺔﻟﺎﺳﺭ ﻝﺎﺳﺭﺍ ﻖﻳﺮﻃ ﻦﻋ ﻎﻴﻠﺒﺘﻟﺍ ﻢﺗ',
    extracted_text: 'CS3024088684 ... 12-05-2026 ... 38457003 ﻢﻗﺮﻟﺍ ﻰﻠﻋ ﺔﻴﺼﻧ ﺔﻟﺎﺳﺭ ﻝﺎﺳﺭﺍ ﻖﻳﺮﻃ ﻦﻋ ﻎﻴﻠﺒﺘﻟﺍ ﻢﺗ',
    extraction_status: 'USABLE_TEXT',
    contradicting_evidence: ['EX-REAL-05, Page 1: Elena Belikovskaya sworn motion statement LW776870 that no notice was received and number 38457003 was not registered in her name.'],
    is_date_proved: false,
    confidence: 'HIGH CONFIDENCE',
    unknowns: ['SERVICE DATE UNPROVED / UNKNOWN. Legal delivery and receipt unverified; mobile ownership disputed.'],
    possible_procedural_significance: 'Alleged initial service of statement of claim and hearing schedule.',
    uncertainty: 'Dispatch is not receipt. Service date remains UNKNOWN under procedural rules.',
    authentication_status: 'UNVERIFIED',
    acceptance_status: 'PENDING_HUMAN_REVIEW'
  },
  {
    id: 'CC-05',
    exhibit_id: 'EX-REAL-01',
    supporting_exhibit: 'EX-REAL-01',
    supporting_page: 1,
    page_number: 1,
    filename: 'MOJ-E-BKPZAUXTMOHLMMX.pdf',
    date_and_time: '2026-05-13',
    date_type: 'Decision date',
    proposed_fact: 'Urgent travel ban order EN3024097245 issued against Elena Belikovskaya (CPR 800694392) for total demand with fees of 1,531.800 BHD, executed by Passports/Immigration (NPRA) on 13-05-2026.',
    event_description: 'Precautionary travel ban order issued against Elena Belikovskaya for claim sum and fees totaling 1,531.800 BHD; executed by Passports on 13-05-2026.',
    supporting_passage: '2026/05/13 : ﺭﺍﺮﻘﻟﺍ ﺦﻳﺭﺎﺗ ... ﺮﻔﺴﻟﺍ ﻦﻣ ﻊﻨﻤﻟﺍ : ﺭﺍﺮﻘﻟﺍ ... EN3024097245 ... 2026/05/13 ﺦﻳﺭﺎﺘﺑ ﺕﺍﺯﻮﺠﻟﺍ ﻦﻣ ﺀﺍﺮﺟﻻﺍ ﻢﺗ ... ﺭﺎﻨﻳﺩ 1531.8 ﻩﺭﺪﻗﻭ ﻎﻠﺒﻣ',
    extracted_text: '2026/05/13 : ﺭﺍﺮﻘﻟﺍ ﺦﻳﺭﺎﺗ ... ﺮﻔﺴﻟﺍ ﻦﻣ ﻊﻨﻤﻟﺍ : ﺭﺍﺮﻘﻟﺍ ... EN3024097245 ... 2026/05/13 ﺦﻳﺭﺎﺘﺑ ﺕﺍﺯﻮﺠﻟﺍ ﻦﻣ ﺀﺍﺮﺟﻻﺍ ﻢﺗ ... ﺭﺎﻨﻳﺩ 1531.8 ﻩﺭﺪﻗﻭ ﻎﻠﺒﻣ',
    extraction_status: 'USABLE_TEXT',
    contradicting_evidence: [],
    is_date_proved: true,
    confidence: 'HIGH CONFIDENCE',
    unknowns: ['Notice of travel ban service on defendant unproved.'],
    possible_procedural_significance: 'Imposed active travel restriction preventing defendant from exiting Bahrain.',
    uncertainty: 'Order issued ex parte without defendant appearance.',
    authentication_status: 'UNVERIFIED',
    acceptance_status: 'PENDING_HUMAN_REVIEW'
  },
  {
    id: 'CC-06',
    exhibit_id: 'EX-REAL-08',
    supporting_exhibit: 'EX-REAL-08',
    supporting_page: 1,
    page_number: 1,
    filename: 'MOJ-E-YCAWMQVCCTRFVFG.pdf',
    date_and_time: '2026-06-02',
    date_type: 'Event date',
    proposed_fact: 'High Civil Court 8th Chamber held session; neither plaintiff nor defendant attended ("ﻑﺍﺮﻃﻻﺍ ﺮﻀﺤﻳ ﻢﻟ"); court decided to postpone to 03-06-2026 for judgment.',
    event_description: 'Court session held in Case 25/2026/00738/4. Neither party attended; court postponed proceedings to 03-06-2026 for judgment.',
    supporting_passage: '2026 / 06 / 02 :ﺦﻳﺭﺎﺘﻟﺍ ... ﺔﻨﻣﺎﺜﻟﺍ ﺔﻴﻧﺪﻤﻟﺍ ﻯﺮﺒﻜﻟﺍ ﺔﻤﻜﺤﻤﻟﺎﺑ ... ﻑﺍﺮﻃﻻﺍ ﺮﻀﺤﻳ ﻢﻟ ... ﻢﻜﺤﻠﻟ 2026/06/03 ﺔﺴﻠﺠﻟ ﻞﻴﺟﺄﺘﻟﺍ ﺔﻤﻜﺤﻤﻟﺍ ﺭﺮﻘﺗ',
    extracted_text: '2026 / 06 / 02 :ﺦﻳﺭﺎﺘﻟﺍ ... ﺔﻨﻣﺎﺜﻟﺍ ﺔﻴﻧﺪﻤﻟﺍ ﻯﺮﺒﻜﻟﺍ ﺔﻤﻜﺤﻤﻟﺎﺑ ... ﻑﺍﺮﻃﻻﺍ ﺮﻀﺤﻳ ﻢﻟ ... ﻢﻜﺤﻠﻟ 2026/06/03 ﺔﺴﻠﺠﻟ ﻞﻴﺟﺄﺘﻟﺍ ﺔﻤﻜﺤﻤﻟﺍ ﺭﺮﻘﺗ',
    extraction_status: 'USABLE_TEXT',
    contradicting_evidence: [],
    is_date_proved: true,
    confidence: 'HIGH CONFIDENCE',
    unknowns: ['Reason for absence of both parties.'],
    possible_procedural_significance: 'Pre-judgment session confirming absence of representation and defense.',
    uncertainty: 'None as to session occurrence; service of postponement on parties unverified.',
    authentication_status: 'UNVERIFIED',
    acceptance_status: 'PENDING_HUMAN_REVIEW'
  },
  {
    id: 'CC-07',
    exhibit_id: 'EX-REAL-03',
    supporting_exhibit: 'EX-REAL-03',
    supporting_page: 1,
    page_number: 1,
    filename: 'MOJ-E-QMSVKSLTLYDNFEF.pdf',
    date_and_time: '2026-06-02',
    date_type: 'Issue date',
    proposed_fact: 'Ministry portal generated second notice dispatch: letter CS3024255406 sent via SMS to 38457003; letters CS3024255405 and CS3024255407 sent to 38378260 and info@osamaanwarlawfirm.com on same date as hearing postponement.',
    event_description: 'Second electronic hearing notice dispatched on date of court session postponement; SMS to 38457003 and law firm contacts.',
    supporting_passage: 'CS3024255406 ... 02-06-2026 ... 38457003 ﻢﻗﺮﻟﺍ ﻰﻠﻋ ﺔﻴﺼﻧ ﺔﻟﺎﺳﺭ ﻝﺎﺳﺭﺍ ﻖﻳﺮﻃ ﻦﻋ ﻎﻴﻠﺒﺘﻟﺍ ﻢﺗ',
    extracted_text: 'CS3024255406 ... 02-06-2026 ... 38457003 ﻢﻗﺮﻟﺍ ﻰﻠﻋ ﺔﻴﺼﻧ ﺔﻟﺎﺳﺭ ﻝﺎﺳﺭﺍ ﻖﻳﺮﻃ ﻦﻋ ﻎﻴﻠﺒﺘﻟﺍ ﻢﺗ',
    extraction_status: 'USABLE_TEXT',
    contradicting_evidence: ['EX-REAL-05, Page 1: Inquiry LW776870 stating mobile number 38457003 was not registered in defendant name.'],
    is_date_proved: false,
    confidence: 'HIGH CONFIDENCE',
    unknowns: ['SERVICE DATE UNPROVED / UNKNOWN. Notice dispatched on session date; delivery unproved.'],
    possible_procedural_significance: 'Attempted notification of hearing/judgment date.',
    uncertainty: 'Dispatch on session date cannot constitute prior legal notice.',
    authentication_status: 'UNVERIFIED',
    acceptance_status: 'PENDING_HUMAN_REVIEW'
  },
  {
    id: 'CC-08',
    exhibit_id: 'EX-REAL-08',
    supporting_exhibit: 'EX-REAL-08',
    supporting_page: 2,
    page_number: 2,
    filename: 'MOJ-E-YCAWMQVCCTRFVFG.pdf',
    date_and_time: '2026-06-03',
    date_type: 'Decision date',
    proposed_fact: 'High Civil Court 8th Chamber rendered default judgment ordering Elena Belikovskaya to pay Mubarak Ali Mubarak Al-Dossary 1,440.000 BHD plus court expenses and 50.000 BHD attorney fees; neither party attended ("ﻑﺍﺮﻃﻻﺍ ﺮﻀﺤﻳ ﻢﻟ").',
    event_description: 'First-instance judgment rendered in absentia against Elena Belikovskaya for 1,440.000 BHD principal, expenses, and 50.000 BHD attorney fees.',
    supporting_passage: '2026 / 06 / 03 :ﺦﻳﺭﺎﺘﻟﺍ ... ﻑﺍﺮﻃﻻﺍ ﺮﻀﺤﻳ ﻢﻟ ... ﺎﻬﻣﺍﺰﻟﺇﻭ ،ﺭﺎﻨﻳﺩ 1440 ﻎﻠﺒﻣ ﻲﻋﺪﻤﻠﻟ ﻱﺩﺆﺗ ﻥﺄﺑ ﺎﻬﻴﻠﻋ ﻰﻋﺪﻤﻟﺍ ﻡﺍﺰﻟﺈﺑ ﺔﻤﻜﺤﻤﻟﺍ ﺖﻤﻜﺣ . ﺓﺎﻣﺎﺤﻤﻟﺍ ﺏﺎﻌﺗﺃ ﻞﺑﺎﻘﻣ ﺭﺎﻨﻳﺩ 50 ﻎﻠﺒﻣﻭ ﻒﻳﺭﺎﺼﻤﻟﺎﺑ',
    extracted_text: '2026 / 06 / 03 :ﺦﻳﺭﺎﺘﻟﺍ ... ﻑﺍﺮﻃﻻﺍ ﺮﻀﺤﻳ ﻢﻟ ... ﺎﻬﻣﺍﺰﻟﺇﻭ ،ﺭﺎﻨﻳﺩ 1440 ﻎﻠﺒﻣ ﻲﻋﺪﻤﻠﻟ ﻱﺩﺆﺗ ﻥﺄﺑ ﺎﻬﻴﻠﻋ ﻰﻋﺪﻤﻟﺍ ﻡﺍﺰﻟﺈﺑ ﺔﻤﻜﺤﻤﻟﺍ ﺖﻤﻜﺣ . ﺓﺎﻣﺎﺤﻤﻟﺍ ﺏﺎﻌﺗﺃ ﻞﺑﺎﻘﻣ ﺭﺎﻨﻳﺩ 50 ﻎﻠﺒﻣﻭ ﻒﻳﺭﺎﺼﻤﻟﺎﺑ',
    extraction_status: 'USABLE_TEXT',
    contradicting_evidence: [],
    is_date_proved: true,
    confidence: 'HIGH CONFIDENCE',
    unknowns: ['SERVICE DATE OF JUDGMENT IS UNKNOWN / UNPROVED. Judgment date cannot be substituted for service date.'],
    possible_procedural_significance: 'Substantive judgment establishing debt liability in absentia; triggers appeal/reconsideration considerations upon lawful service.',
    uncertainty: 'Judgment rendered without defendant appearance; appeal limitation period does not run without valid service.',
    authentication_status: 'UNVERIFIED',
    acceptance_status: 'PENDING_HUMAN_REVIEW'
  },
  {
    id: 'CC-09',
    exhibit_id: 'EX-REAL-05',
    supporting_exhibit: 'EX-REAL-05',
    supporting_page: 2,
    page_number: 2,
    filename: 'MOJ-E-TBITWKVQPAILYIR.pdf',
    date_and_time: '2026-06-03 18:39:35',
    date_type: 'Filing date',
    proposed_fact: 'Elena Belikovskaya submitted application LW752510 to lift travel ban, stating judgment was rendered in absentia, full rent for February, March, and April was paid via bank transfers, and premises were vacated.',
    event_description: 'Urgent application LW752510 filed by Elena Belikovskaya requesting travel ban removal citing vacating property and rent payments via bank transfer.',
    supporting_passage: 'LW752510 ... 03-06-2026 18:39:35 ... ﺮﻔﺴﻟﺍ ﻊﻨﻣ ﻊﻓﺭ ﺐﻠﻃ ﻯﻮﻋﺩ 252026007384 ﻢﻜﺤﻟﺍ ﻲﺑﺎﻴﻏ ﺎﻧﺩﺪﺳﻭ ﻞﻣﺎﻛ ﺭﺎﺠﻳﺇ ﺮﻳﺍﺮﺒﻓ ﺱﺭﺎﻣﻭ ﻞﻳﺮﺑﺃﻭ ﺕﻼﻳﻮﺤﺘﺑ ﺔﻴﻜﻨﺑ ﺔﻘﻓﺮﻣ ﺎﻨﻴﻠﺧﺃﻭ ﺔﻘﺸﻟﺍ ﺲﻤﺘﻠﻧ ﻊﻓﺭ ﻊﻨﻤﻟﺍ',
    extracted_text: 'LW752510 ... 03-06-2026 18:39:35 ... ﺮﻔﺴﻟﺍ ﻊﻨﻣ ﻊﻓﺭ ﺐﻠﻃ ﻯﻮﻋﺩ 252026007384 ﻢﻜﺤﻟﺍ ﻲﺑﺎﻴﻏ ﺎﻧﺩﺪﺳﻭ ﻞﻣﺎﻛ ﺭﺎﺠﻳﺇ ﺮﻳﺍﺮﺒﻓ ﺱﺭﺎﻣﻭ ﻞﻳﺮﺑﺃﻭ ﺕﻼﻳﻮﺤﺘﺑ ﺔﻴﻜﻨﺑ ﺔﻘﻓﺮﻣ ﺎﻨﻴﻠﺧﺃﻭ ﺔﻘﺸﻟﺍ ﺲﻤﺘﻠﻧ ﻊﻓﺭ ﻊﻨﻤﻟﺍ',
    extraction_status: 'USABLE_TEXT',
    contradicting_evidence: [],
    is_date_proved: true,
    confidence: 'HIGH CONFIDENCE',
    unknowns: ['Bank transfer vouchers and handover protocol referenced in motion text are not in eligible text records.'],
    possible_procedural_significance: 'First recorded defense action and earliest evidence of knowledge of judgment/ban.',
    uncertainty: 'None as to filing; factual assertions within motion require corroborating bank evidence.',
    authentication_status: 'UNVERIFIED',
    acceptance_status: 'PENDING_HUMAN_REVIEW'
  },
  {
    id: 'CC-10',
    exhibit_id: 'EX-REAL-05',
    supporting_exhibit: 'EX-REAL-05',
    supporting_page: 2,
    page_number: 2,
    filename: 'MOJ-E-TBITWKVQPAILYIR.pdf',
    date_and_time: '2026-06-05',
    date_type: 'Decision date',
    proposed_fact: 'Court rejected Elena Belikovskaya application LW752510 to lift the travel ban ("ﺽﻮﻓﺮﻣ").',
    event_description: 'Judicial order refusing defendant application LW752510 to lift travel ban.',
    supporting_passage: '05-06-2026: ﺀﺍﺮﺟﻻﺍ ﺦﻳﺭﺎﺗ ... ﺽﻮﻓﺮﻣ : ﺔﻟﺎﺤﻟﺍ',
    extracted_text: '05-06-2026: ﺀﺍﺮﺟﻻﺍ ﺦﻳﺭﺎﺗ ... ﺽﻮﻓﺮﻣ : ﺔﻟﺎﺤﻟﺍ',
    extraction_status: 'USABLE_TEXT',
    contradicting_evidence: [],
    is_date_proved: true,
    confidence: 'HIGH CONFIDENCE',
    unknowns: ['Substantive reasoning for refusal.'],
    possible_procedural_significance: 'Maintenance of active travel ban following judgment.',
    uncertainty: 'None as to order date and status.',
    authentication_status: 'UNVERIFIED',
    acceptance_status: 'PENDING_HUMAN_REVIEW'
  },
  {
    id: 'CC-11',
    exhibit_id: 'EX-REAL-05',
    supporting_exhibit: 'EX-REAL-05',
    supporting_page: 2,
    page_number: 2,
    filename: 'MOJ-E-TBITWKVQPAILYIR.pdf',
    date_and_time: '2026-06-11 08:53:22',
    date_type: 'Decision date',
    proposed_fact: 'Motion LW754884 to reopen pleadings was rejected on 11-06-2026 because the matter had already been adjudicated and judgment rendered ("ﺔﻣﻮﺴﺤﻣ ﻯﻮﻋﺪﻟﺍ ﺪﻗﻭ ﺭﺍﺪﺻﺍ ﻢﺗ ﻢﻜﺣ ﺎﻬﻴﻓ").',
    event_description: 'Motion LW754884 to reopen pleadings rejected on ground that case had already been concluded by judgment.',
    supporting_passage: 'LW754884 ... 11-06-2026 08:53:22 ... ﺔﻌﻓﺍﺮﻤﻟﺍ ﺏﺎﺑ ﺢﺘﻓ ... 11-06-2026: ﺀﺍﺮﺟﻻﺍ ﺦﻳﺭﺎﺗ ... ﺽﻮﻓﺮﻣ ... ﻯﻮﻋﺪﻟﺍ ﺔﻣﻮﺴﺤﻣ ﺪﻗﻭ ﺭﺍﺪﺻﺍ ﻢﺗ ﻢﻜﺣ ﺎﻬﻴﻓ',
    extracted_text: 'LW754884 ... 11-06-2026 08:53:22 ... ﺔﻌﻓﺍﺮﻤﻟﺍ ﺏﺎﺑ ﺢﺘﻓ ... 11-06-2026: ﺀﺍﺮﺟﻻﺍ ﺦﻳﺭﺎﺗ ... ﺽﻮﻓﺮﻣ ... ﻯﻮﻋﺪﻟﺍ ﺔﻣﻮﺴﺤﻣ ﺪﻗﻭ ﺭﺍﺪﺻﺍ ﻢﺗ ﻢﻜﺣ ﺎﻬﻴﻓ',
    extraction_status: 'USABLE_TEXT',
    contradicting_evidence: [],
    is_date_proved: true,
    confidence: 'HIGH CONFIDENCE',
    unknowns: [],
    possible_procedural_significance: 'Confirms first-instance trial court considered its jurisdiction exhausted post-judgment.',
    uncertainty: 'None.',
    authentication_status: 'UNVERIFIED',
    acceptance_status: 'PENDING_HUMAN_REVIEW'
  },
  {
    id: 'CC-12',
    exhibit_id: 'EX-REAL-05',
    supporting_exhibit: 'EX-REAL-05',
    supporting_page: 2,
    page_number: 2,
    filename: 'MOJ-E-TBITWKVQPAILYIR.pdf',
    date_and_time: '2026-06-24 15:31:06',
    date_type: 'Decision date',
    proposed_fact: 'Elena Belikovskaya application LW758978 to lift travel ban stating judgment was in absentia without lawful service and property was vacated in April was rejected on 24-06-2026.',
    event_description: 'Second application LW758978 to lift travel ban filed asserting lack of lawful service and vacating property; rejected by court on 24-06-2026.',
    supporting_passage: 'LW758978 ... 24-06-2026 15:31:06 ... ﺎﻴﻧﻮﻧﺎﻗ ﻲﻧﻼﻋﺇ ﻥﻭﺩ ﺎﻴﺑﺎﻴﻏ ﺭﺪﺻ ﻢﻜﺤﻟﺍ ... 24-06-2026: ﺀﺍﺮﺟﻻﺍ ﺦﻳﺭﺎﺗ ... ﺽﻮﻓﺮﻣ',
    extracted_text: 'LW758978 ... 24-06-2026 15:31:06 ... ﺎﻴﻧﻮﻧﺎﻗ ﻲﻧﻼﻋﺇ ﻥﻭﺩ ﺎﻴﺑﺎﻴﻏ ﺭﺪﺻ ﻢﻜﺤﻟﺍ ... 24-06-2026: ﺀﺍﺮﺟﻻﺍ ﺦﻳﺭﺎﺗ ... ﺽﻮﻓﺮﻣ',
    extraction_status: 'USABLE_TEXT',
    contradicting_evidence: [],
    is_date_proved: true,
    confidence: 'HIGH CONFIDENCE',
    unknowns: [],
    possible_procedural_significance: 'Repeated challenge to travel ban based on service defect; rejected summarily.',
    uncertainty: 'None as to filing and refusal.',
    authentication_status: 'UNVERIFIED',
    acceptance_status: 'PENDING_HUMAN_REVIEW'
  },
  {
    id: 'CC-13',
    exhibit_id: 'EX-REAL-05',
    supporting_exhibit: 'EX-REAL-05',
    supporting_page: 1,
    page_number: 1,
    filename: 'MOJ-E-TBITWKVQPAILYIR.pdf',
    date_and_time: '2026-07-19 09:01:52',
    date_type: 'Event date',
    proposed_fact: 'Claimant counsel Osama Anwar Mohamed filed motion LW765685 to obtain the execution formula (enforceable copy of judgment), paying 10.000 BHD under receipt RC65003062873; approved on 19-07-2026.',
    event_description: 'Application LW765685 to obtain enforceable execution formula approved; 10.000 BHD fee paid under receipt RC65003062873.',
    supporting_passage: 'LW765685 ... 19-07-2026 09:01:52 ... ﺪﻤﺤﻣ ﺭﻮﻧﺍ ﺔﻣﺎﺳﺍ ... 10.000 : ﺐﻠﻄﻟﺍ ﻡﻮﺳﺭ ... RC65003062873 ... ﺔﻳﺬﻴﻔﻨﺘﻟﺍ ﺔﻐﻴﺼﻟﺍ ﻡﻼﺘﺳﺍ ... 19-07-2026: ﺀﺍﺮﺟﻻﺍ ﺦﻳﺭﺎﺗ ... ﻝﻮﺒﻘﻣ',
    extracted_text: 'LW765685 ... 19-07-2026 09:01:52 ... ﺪﻤﺤﻣ ﺭﻮﻧﺍ ﺔﻣﺎﺳﺍ ... 10.000 : ﺐﻠﻄﻟﺍ ﻡﻮﺳﺭ ... RC65003062873 ... ﺔﻳﺬﻴﻔﻨﺘﻟﺍ ﺔﻐﻴﺼﻟﺍ ﻡﻼﺘﺳﺍ ... 19-07-2026: ﺀﺍﺮﺟﻻﺍ ﺦﻳﺭﺎﺗ ... ﻝﻮﺒﻘﻣ',
    extraction_status: 'USABLE_TEXT',
    contradicting_evidence: [],
    is_date_proved: true,
    confidence: 'HIGH CONFIDENCE',
    unknowns: ['Proof of whether enforceable judgment was served prior to execution commencement.'],
    possible_procedural_significance: 'Enables creditor to initiate enforcement proceedings before Execution Directorate.',
    uncertainty: 'None as to issuance of execution formula.',
    authentication_status: 'UNVERIFIED',
    acceptance_status: 'PENDING_HUMAN_REVIEW'
  },
  {
    id: 'CC-14',
    exhibit_id: 'EX-REAL-05',
    supporting_exhibit: 'EX-REAL-05',
    supporting_page: 1,
    page_number: 1,
    filename: 'MOJ-E-TBITWKVQPAILYIR.pdf',
    date_and_time: '2026-08-01 06:38:58',
    date_type: 'Filing date',
    proposed_fact: 'Elena Belikovskaya registered petition for reconsideration LW770277 paying 30.000 BHD under receipt RC65003082647, requesting stay of Execution File 042026162064, lifting of bank freeze, and removal of travel ban.',
    event_description: 'Petition for reconsideration LW770277 registered; 30.000 BHD fee paid under receipt RC65003082647; requested stay of Execution File 042026162064.',
    supporting_passage: 'LW770277 ... 01-08-2026 06:38:58 ... 30.000 : ﺐﻠﻄﻟﺍ ﻡﻮﺳﺭ ... RC65003082647 ... ﻢﻜﺤﻟﺍ ﻲﻓ ﺮﻈﻨﻟﺍ ﺓﺩﺎﻋﺍ ﺔﺤﺋﻻ ﻞﻴﺠﺴﺗ ... 042026162064 ﺬﻴﻔﻨﺘﻟﺍ ﻒﻠﻣ ﻒﻗﻭ ... 01-08-2026: ﺀﺍﺮﺟﻻﺍ ﺦﻳﺭﺎﺗ ... ﻝﻮﺒﻘﻣ',
    extracted_text: 'LW770277 ... 01-08-2026 06:38:58 ... 30.000 : ﺐﻠﻄﻟﺍ ﻡﻮﺳﺭ ... RC65003082647 ... ﻢﻜﺤﻟﺍ ﻲﻓ ﺮﻈﻨﻟﺍ ﺓﺩﺎﻋﺍ ﺔﺤﺋﻻ ﻞﻴﺠﺴﺗ ... 042026162064 ﺬﻴﻔﻨﺘﻟﺍ ﻒﻠﻣ ﻒﻗﻭ ... 01-08-2026: ﺀﺍﺮﺟﻻﺍ ﺦﻳﺭﺎﺗ ... ﻝﻮﺒﻘﻣ',
    extraction_status: 'USABLE_TEXT',
    contradicting_evidence: [],
    is_date_proved: true,
    confidence: 'HIGH CONFIDENCE',
    unknowns: ['Contents of attached reconsideration memorial.'],
    possible_procedural_significance: 'Formal registration of extraordinary petition for reconsideration before High Civil Court.',
    uncertainty: 'None as to registration.',
    authentication_status: 'UNVERIFIED',
    acceptance_status: 'PENDING_HUMAN_REVIEW'
  },
  {
    id: 'CC-15',
    exhibit_id: 'EX-REAL-05',
    supporting_exhibit: 'EX-REAL-05',
    supporting_page: 1,
    page_number: 1,
    filename: 'MOJ-E-TBITWKVQPAILYIR.pdf',
    date_and_time: '2026-08-05 11:19:56',
    date_type: 'Decision date',
    proposed_fact: 'Elena Belikovskaya motion LW771768 to lift bank freeze based on pending reconsideration petition was rejected on 05-08-2026.',
    event_description: 'Application LW771768 to unfreeze bank accounts rejected by court on 05-08-2026.',
    supporting_passage: 'LW771768 ... 05-08-2026 11:19:56 ... ﺔﻴﻜﻨﺒﻟﺍ ﺕﺎﺑﺎﺴﺤﻟﺍ ﻰﻠﻋ ﻢﻴﻤﻌﺘﻟﺍ ﻊﻓﺭ ... 05-08-2026: ﺀﺍﺮﺟﻻﺍ ﺦﻳﺭﺎﺗ ... ﺽﻮﻓﺮﻣ',
    extracted_text: 'LW771768 ... 05-08-2026 11:19:56 ... ﺔﻴﻜﻨﺒﻟﺍ ﺕﺎﺑﺎﺴﺤﻟﺍ ﻰﻠﻋ ﻢﻴﻤﻌﺘﻟﺍ ﻊﻓﺭ ... 05-08-2026: ﺀﺍﺮﺟﻻﺍ ﺦﻳﺭﺎﺗ ... ﺽﻮﻓﺮﻣ',
    extraction_status: 'USABLE_TEXT',
    contradicting_evidence: [],
    is_date_proved: true,
    confidence: 'HIGH CONFIDENCE',
    unknowns: ['Details of bank attachment amounts.'],
    possible_procedural_significance: 'Affirms that registration of reconsideration did not automatically stay execution.',
    uncertainty: 'None.',
    authentication_status: 'UNVERIFIED',
    acceptance_status: 'PENDING_HUMAN_REVIEW'
  },
  {
    id: 'CC-16',
    exhibit_id: 'EX-REAL-08',
    supporting_exhibit: 'EX-REAL-08',
    supporting_page: 4,
    page_number: 4,
    filename: 'MOJ-E-YCAWMQVCCTRFVFG.pdf',
    date_and_time: '2026-08-16',
    date_type: 'Decision date',
    proposed_fact: 'High Civil Court 8th Chamber rendered judgment dismissing Elena Belikovskaya petition for reconsideration in form with costs against petitioner ("ﻼﻜﺷ ﺱﺎﻤﺘﻟﻻﺍ ﻝﻮﺒﻗ ﻡﺪﻌﺑ ﺔﻤﻜﺤﻤﻟﺍ ﺖﻤﻜﺣ ﺕﺎﻓﻭﺮﺼﻤﻟﺎﺑ ﺔﺴﻤﺘﻠﻤﻟﺍ ﺖﻣﺰﻟﺃﻭ"); neither party attended.',
    event_description: 'Judgment rendered dismissing petition for reconsideration in form with costs; neither party attended session.',
    supporting_passage: '2026 / 08 / 16 ... ﻑﺍﺮﻃﻷﺍ ﺮﻀﺤﻳ ﻢﻟ ... ﻼﻜﺷ ﺱﺎﻤﺘﻟﻻﺍ ﻝﻮﺒﻗ ﻡﺪﻌﺑ ﺔﻤﻜﺤﻤﻟﺍ ﺖﻤﻜﺣ ﺕﺎﻓﻭﺮﺼﻤﻟﺎﺑ ﺔﺴﻤﺘﻠﻤﻟﺍ ﺖﻣﺰﻟﺃﻭ',
    extracted_text: '2026 / 08 / 16 ... ﻑﺍﺮﻃﻷﺍ ﺮﻀﺤﻳ ﻢﻟ ... ﻼﻜﺷ ﺱﺎﻤﺘﻟﻻﺍ ﻝﻮﺒﻗ ﻡﺪﻌﺑ ﺔﻤﻜﺤﻤﻟﺍ ﺖﻤﻜﺣ ﺕﺎﻓﻭﺮﺼﻤﻟﺎﺑ ﺔﺴﻤﺘﻠﻤﻟﺍ ﺖﻣﺰﻟﺃﻭ',
    extraction_status: 'USABLE_TEXT',
    contradicting_evidence: [],
    is_date_proved: true,
    confidence: 'HIGH CONFIDENCE',
    unknowns: ['Detailed legal rationale for formal dismissal ("ﻼﻜﺷ") - e.g. statutory grounds under Article 214 vs deposit requirement.'],
    possible_procedural_significance: 'Terminated extraordinary reconsideration route before High Civil Court.',
    uncertainty: 'Formal dismissal without addressing fraud or payment merits.',
    authentication_status: 'UNVERIFIED',
    acceptance_status: 'PENDING_HUMAN_REVIEW'
  },
  {
    id: 'CC-17',
    exhibit_id: 'EX-REAL-05',
    supporting_exhibit: 'EX-REAL-05',
    supporting_page: 1,
    page_number: 1,
    filename: 'MOJ-E-TBITWKVQPAILYIR.pdf',
    date_and_time: '2026-08-21 23:00:40',
    date_type: 'Event date',
    proposed_fact: 'Elena Belikovskaya submitted inquiry LW776870 regarding notification method, stating that no notice was received for the 16-08-2026 session and mobile number 38457003 used for service was never registered in her name; accepted on 21-08-2026.',
    event_description: 'Inquiry LW776870 submitted questioning notification method and stating mobile number 38457003 was not registered in defendant name; accepted by court portal.',
    supporting_passage: 'LW776870 ... 21-08-2026 23:00:40 ... ﻥﻼﻋﻻﺍ ﻪﻠﻴﺳﻭ ﻦﻋ ﻡﻼﻌﺘﺳﻻﺍ ... ﻢﻟ ﻞﺼﻳ ﻱﺍ ﺭﺎﻄﺧﺍ ﺔﺴﻤﺘﻠﻤﻠﻟ ﻩﺬﻬﺑ ﺔﺴﻠﺠﻟﺍ ﻢﻟﻭ ﻦﻜﻳ ﻼﺠﺴﻣ ﺎﻬﻤﺳﺎﺑ ﻢﻗﺮﻟﺍ ﻡﺪﺨﺘﺴﻤﻟﺍ ﻎﻴﻠﺒﺘﻠﻟ 38457003 ... 21-08-2026: ﺀﺍﺮﺟﻻﺍ ﺦﻳﺭﺎﺗ ... ﻝﻮﺒﻘﻣ',
    extracted_text: 'LW776870 ... 21-08-2026 23:00:40 ... ﻥﻼﻋﻻﺍ ﻪﻠﻴﺳﻭ ﻦﻋ ﻡﻼﻌﺘﺳﻻﺍ ... ﻢﻟ ﻞﺼﻳ ﻱﺍ ﺭﺎﻄﺧﺍ ﺔﺴﻤﺘﻠﻤﻠﻟ ﻩﺬﻬﺑ ﺔﺴﻠﺠﻟﺍ ﻢﻟﻭ ﻦﻜﻳ ﻼﺠﺴﻣ ﺎﻬﻤﺳﺎﺑ ﻢﻗﺮﻟﺍ ﻡﺪﺨﺘﺴﻤﻟﺍ ﻎﻴﻠﺒﺘﻠﻟ 38457003 ... 21-08-2026: ﺀﺍﺮﺟﻻﺍ ﺦﻳﺭﺎﺗ ... ﻝﻮﺒﻘﻣ',
    extraction_status: 'USABLE_TEXT',
    contradicting_evidence: ['EX-REAL-03, Page 2: Portal notice dispatch records listing 38457003 as service destination.'],
    is_date_proved: true,
    confidence: 'HIGH CONFIDENCE',
    unknowns: ['Official telecom subscriber certificate for 38457003.'],
    possible_procedural_significance: 'Formal recorded challenge to service validity and process integrity.',
    uncertainty: 'Party inquiry accepted on portal; telecom subscriber certification required.',
    authentication_status: 'UNVERIFIED',
    acceptance_status: 'PENDING_HUMAN_REVIEW'
  },
  {
    id: 'CC-18',
    exhibit_id: 'EX-REAL-03',
    supporting_exhibit: 'EX-REAL-03',
    supporting_page: 1,
    page_number: 1,
    filename: 'MOJ-E-QMSVKSLTLYDNFEF.pdf',
    date_and_time: '2026-09-28',
    date_type: 'Issue date',
    proposed_fact: 'Notice CS3025349532 marked unraised ("ﺔﻋﻮﻓﺮﻣ ﺮﻴﻏ") dispatched via SMS to 35330541 and email lawyer.ahmedaldoseri@gmail.com for Party ID 900803452.',
    event_description: 'Notice CS3025349532 dispatched to contact credentials of attorney Ahmed Al-Doseri in relation to Case 252026007384.',
    supporting_passage: 'CS3025349532 ... 28-09-2026 ... 35330541 ﻢﻗﺮﻟﺍ ﻰﻠﻋ ﺔﻴﺼﻧ ﺔﻟﺎﺳﺭ ﻝﺎﺳﺭﺍ ﻖﻳﺮﻃ ﻦﻋ ﻎﻴﻠﺒﺘﻟﺍ ﻢﺗ ... lawyer.ahmedaldoseri@gmail.com',
    extracted_text: 'CS3025349532 ... 28-09-2026 ... 35330541 ﻢﻗﺮﻟﺍ ﻰﻠﻋ ﺔﻴﺼﻧ ﺔﻟﺎﺳﺭ ﻝﺎﺳﺭﺍ ﻖﻳﺮﻃ ﻦﻋ ﻎﻴﻠﺒﺘﻟﺍ ﻢﺗ ... lawyer.ahmedaldoseri@gmail.com',
    extraction_status: 'USABLE_TEXT',
    contradicting_evidence: [],
    is_date_proved: false,
    confidence: 'HIGH CONFIDENCE',
    unknowns: ['Procedural status and representation capacity of attorney Ahmed Al-Doseri.'],
    possible_procedural_significance: 'Post-judgment notification dispatch attempt.',
    uncertainty: 'Delivery and receipt unproved.',
    authentication_status: 'UNVERIFIED',
    acceptance_status: 'PENDING_HUMAN_REVIEW'
  }
];

// ============================================================================
// 2. FINANCIAL CANDIDATES (9 Candidates from 7 Eligible Records)
// ============================================================================

export const GENUINE_FINANCIAL_CANDIDATES: FinancialCandidate[] = [
  {
    id: 'FC-01',
    exhibit_id: 'EX-REAL-04',
    supporting_exhibit: 'EX-REAL-04',
    supporting_page: 1,
    page_number: 1,
    filename: 'MOJ-E-SEJBZJEWJMIOXXA.pdf',
    category: 'amount_claimed',
    amount: 1440.0,
    currency: 'BHD',
    date: '2026-05-12',
    payer: 'Elena Belikovskaya',
    payee: 'Mubarak Ali Mubarak Al-Dossary',
    reference_or_transaction_number: 'CLAIM-252026007384',
    allocation_status: 'DISPUTED',
    payment_succeeded: false,
    proposed_classification: 'PROPOSED_DISPUTED',
    proposed_fact: 'Claimant Mubarak Ali Mubarak Al-Dossary claimed 1,440.000 BHD as rent arrears under Bahrain Tenancy Law in Case 252026007384.',
    source_text: '1,440.000 : ﺎﻬﺑ ﺐﻟﺎﻄﻤﻟﺍ ﻎﻟﺎﺒﻤﻟﺍ ﻉﻮﻤﺠﻣ ... 2014 ﺔﻨﺴﻟ 27 ﺕﺍﺭﺎﻘﻌﻟﺍ ﺭﺎﺠﻳﺍ ﻥﻮﻧﺎﻗ ﺔﻳﺭﺎﺠﻳﻻﺍ ﺕﺎﻋﺯﺎﻨﻤﻟﺍ ﺕﺎﺒﻟﺎﻄﻣ',
    supporting_passage: '1,440.000 : ﺎﻬﺑ ﺐﻟﺎﻄﻤﻟﺍ ﻎﻟﺎﺒﻤﻟﺍ ﻉﻮﻤﺠﻣ ... 2014 ﺔﻨﺴﻟ 27 ﺕﺍﺭﺎﻘﻌﻟﺍ ﺭﺎﺠﻳﺍ ﻥﻮﻧﺎﻗ ﺔﻳﺭﺎﺠﻳﻻﺍ ﺕﺎﻋﺯﺎﻨﻤﻟﺍ ﺕﺎﺒﻟﺎﻄﻣ',
    extraction_status: 'USABLE_TEXT',
    confidence: 'HIGH CONFIDENCE',
    uncertainty: 'Substantive liability disputed by defendant alleging lease ended in 2023.',
    authentication_status: 'UNVERIFIED',
    acceptance_status: 'PENDING_HUMAN_REVIEW'
  },
  {
    id: 'FC-02',
    exhibit_id: 'EX-REAL-04',
    supporting_exhibit: 'EX-REAL-04',
    supporting_page: 1,
    page_number: 1,
    filename: 'MOJ-E-SEJBZJEWJMIOXXA.pdf',
    category: 'fees',
    amount: 91.8,
    currency: 'BHD',
    date: '2026-05-12',
    payer: 'Mubarak Ali Mubarak Al-Dossary',
    payee: 'Ministry of Justice, Islamic Affairs and Waqf',
    reference_or_transaction_number: 'RC65002977952',
    allocation_status: 'ALLOCATED',
    payment_succeeded: true,
    proposed_classification: 'PROPOSED_SUCCESSFUL',
    proposed_fact: 'Court fees totaling 91.800 BHD (claim fee 89.800 + pleading fee 2.000) paid by claimant under receipt RC65002977952.',
    source_text: '12-05-2026 ... 91.800 ... RC65002977952 ... (ﺢﺋﺍﻮﻠﻟﺍ ﻡﻮﺳﺭ ﻊﻣ) ﺓﺭﺮﻘﻤﻟﺍ ﻡﻮﺳﺮﻟﺍ ﻉﻮﻤﺠﻣ : 91.800',
    supporting_passage: '12-05-2026 ... 91.800 ... RC65002977952 ... (ﺢﺋﺍﻮﻠﻟﺍ ﻡﻮﺳﺭ ﻊﻣ) ﺓﺭﺮﻘﻤﻟﺍ ﻡﻮﺳﺮﻟﺍ ﻉﻮﻤﺠﻣ : 91.800',
    extraction_status: 'USABLE_TEXT',
    confidence: 'HIGH CONFIDENCE',
    uncertainty: 'None as to payment of official court fee.',
    authentication_status: 'UNVERIFIED',
    acceptance_status: 'PENDING_HUMAN_REVIEW'
  },
  {
    id: 'FC-03',
    exhibit_id: 'EX-REAL-05',
    supporting_exhibit: 'EX-REAL-05',
    supporting_page: 3,
    page_number: 3,
    filename: 'MOJ-E-TBITWKVQPAILYIR.pdf',
    category: 'fees',
    amount: 30.0,
    currency: 'BHD',
    date: '2026-05-12',
    payer: 'Mubarak Ali Mubarak Al-Dossary',
    payee: 'Ministry of Justice, Islamic Affairs and Waqf',
    reference_or_transaction_number: 'RC65002978011',
    allocation_status: 'ALLOCATED',
    payment_succeeded: true,
    proposed_classification: 'PROPOSED_SUCCESSFUL',
    proposed_fact: 'Application fee of 30.000 BHD paid under receipt RC65002978011 for urgent travel ban application LW745888.',
    source_text: '12-05-2026 13:09:45 ... 30.000 : ﺐﻠﻄﻟﺍ ﻡﻮﺳﺭ ... RC65002978011 : ﺪﻴﺻﺮﻟﺍ ﻢﻗﺭ ... LW745888',
    supporting_passage: '12-05-2026 13:09:45 ... 30.000 : ﺐﻠﻄﻟﺍ ﻡﻮﺳﺭ ... RC65002978011 : ﺪﻴﺻﺮﻟﺍ ﻢﻗﺭ ... LW745888',
    extraction_status: 'USABLE_TEXT',
    confidence: 'HIGH CONFIDENCE',
    uncertainty: 'None as to payment of motion fee.',
    authentication_status: 'UNVERIFIED',
    acceptance_status: 'PENDING_HUMAN_REVIEW'
  },
  {
    id: 'FC-04',
    exhibit_id: 'EX-REAL-03',
    supporting_exhibit: 'EX-REAL-03',
    supporting_page: 2,
    page_number: 2,
    filename: 'MOJ-E-QMSVKSLTLYDNFEF.pdf',
    category: 'amount_claimed',
    amount: 1531.8,
    currency: 'BHD',
    date: '2026-05-13',
    payer: 'Elena Belikovskaya',
    payee: 'Mubarak Ali Mubarak Al-Dossary',
    reference_or_transaction_number: 'EN3024097245',
    allocation_status: 'DISPUTED',
    payment_succeeded: false,
    proposed_classification: 'PROPOSED_DISPUTED',
    proposed_fact: 'Travel ban order EN3024097245 demanded payment of 1,531.800 BHD (principal 1,440.000 + 91.800 court fees) to lift the ban automatically.',
    source_text: 'EN3024097245 ... 13-05-2026 ... ﺭﺎﻨﻳﺩ 1531.8 ﻩﺭﺪﻗﻭ ﻎﻠﺒﻣ : ﻡﻮﺳﺮﻟﺍ ﻊﻣ ﻪﺑ ﻢﻜﺤﻟﺍ ﺏﻮﻠﻄﻤﻟﺍ ﻎﻠﺒﻤﻠﻟ',
    supporting_passage: 'EN3024097245 ... 13-05-2026 ... ﺭﺎﻨﻳﺩ 1531.8 ﻩﺭﺪﻗﻭ ﻎﻠﺒﻣ : ﻡﻮﺳﺮﻟﺍ ﻊﻣ ﻪﺑ ﻢﻜﺤﻟﺍ ﺏﻮﻠﻄﻤﻟﺍ ﻎﻠﺒﻤﻠﻟ',
    extraction_status: 'USABLE_TEXT',
    confidence: 'HIGH CONFIDENCE',
    uncertainty: 'Precautionary demand sum; substantive liability contested.',
    authentication_status: 'UNVERIFIED',
    acceptance_status: 'PENDING_HUMAN_REVIEW'
  },
  {
    id: 'FC-05',
    exhibit_id: 'EX-REAL-08',
    supporting_exhibit: 'EX-REAL-08',
    supporting_page: 2,
    page_number: 2,
    filename: 'MOJ-E-YCAWMQVCCTRFVFG.pdf',
    category: 'amount_awarded',
    amount: 1440.0,
    currency: 'BHD',
    date: '2026-06-03',
    payer: 'Elena Belikovskaya',
    payee: 'Mubarak Ali Mubarak Al-Dossary',
    reference_or_transaction_number: 'JUDG-25/2026/00738/4',
    allocation_status: 'DISPUTED',
    payment_succeeded: false,
    proposed_classification: 'PROPOSED_DISPUTED',
    proposed_fact: 'First-instance judgment awarded 1,440.000 BHD principal against Elena Belikovskaya in absentia.',
    source_text: '2026/06/03 : ﺭﺍﺮﻘﻟﺍ ﺦﻳﺭﺎﺗ ... ﺎﻬﻣﺍﺰﻟﺇﻭ ،ﺭﺎﻨﻳﺩ 1440 ﻎﻠﺒﻣ ﻲﻋﺪﻤﻠﻟ ﻱﺩﺆﺗ ﻥﺄﺑ ﺎﻬﻴﻠﻋ ﻰﻋﺪﻤﻟﺍ ﻡﺍﺰﻟﺈﺑ ﺔﻤﻜﺤﻤﻟﺍ ﺖﻤﻜﺣ',
    supporting_passage: '2026/06/03 : ﺭﺍﺮﻘﻟﺍ ﺦﻳﺭﺎﺗ ... ﺎﻬﻣﺍﺰﻟﺇﻭ ،ﺭﺎﻨﻳﺩ 1440 ﻎﻠﺒﻣ ﻲﻋﺪﻤﻠﻟ ﻱﺩﺆﺗ ﻥﺄﺑ ﺎﻬﻴﻠﻋ ﻰﻋﺪﻤﻟﺍ ﻡﺍﺰﻟﺈﺑ ﺔﻤﻜﺤﻤﻟﺍ ﺖﻤﻜﺣ',
    extraction_status: 'USABLE_TEXT',
    confidence: 'HIGH CONFIDENCE',
    uncertainty: 'Judgment rendered without defendant appearance; service date unproved.',
    authentication_status: 'UNVERIFIED',
    acceptance_status: 'PENDING_HUMAN_REVIEW'
  },
  {
    id: 'FC-06',
    exhibit_id: 'EX-REAL-08',
    supporting_exhibit: 'EX-REAL-08',
    supporting_page: 2,
    page_number: 2,
    filename: 'MOJ-E-YCAWMQVCCTRFVFG.pdf',
    category: 'lawyer_fees',
    amount: 50.0,
    currency: 'BHD',
    date: '2026-06-03',
    payer: 'Elena Belikovskaya',
    payee: 'Osama Anwar Mohamed (Claimant Attorney)',
    reference_or_transaction_number: 'JUDG-25/2026/00738/4-ATTY',
    allocation_status: 'DISPUTED',
    payment_succeeded: false,
    proposed_classification: 'PROPOSED_DISPUTED',
    proposed_fact: 'First-instance judgment awarded 50.000 BHD for attorney fees against defendant Elena Belikovskaya.',
    source_text: 'ﺓﺎﻣﺎﺤﻤﻟﺍ ﺏﺎﻌﺗﺃ ﻞﺑﺎﻘﻣ ﺭﺎﻨﻳﺩ 50 ﻎﻠﺒﻣﻭ ﻒﻳﺭﺎﺼﻤﻟﺎﺑ ﺎﻬﻣﺍﺰﻟﺇﻭ',
    supporting_passage: 'ﺓﺎﻣﺎﺤﻤﻟﺍ ﺏﺎﻌﺗﺃ ﻞﺑﺎﻘﻣ ﺭﺎﻨﻳﺩ 50 ﻎﻠﺒﻣﻭ ﻒﻳﺭﺎﺼﻤﻟﺎﺑ ﺎﻬﻣﺍﺰﻟﺇﻭ',
    extraction_status: 'USABLE_TEXT',
    confidence: 'HIGH CONFIDENCE',
    uncertainty: 'Ancillary award in default judgment.',
    authentication_status: 'UNVERIFIED',
    acceptance_status: 'PENDING_HUMAN_REVIEW'
  },
  {
    id: 'FC-07',
    exhibit_id: 'EX-REAL-05',
    supporting_exhibit: 'EX-REAL-05',
    supporting_page: 1,
    page_number: 1,
    filename: 'MOJ-E-TBITWKVQPAILYIR.pdf',
    category: 'fees',
    amount: 10.0,
    currency: 'BHD',
    date: '2026-07-19',
    payer: 'Osama Anwar Mohamed',
    payee: 'Ministry of Justice, Islamic Affairs and Waqf',
    reference_or_transaction_number: 'RC65003062873',
    allocation_status: 'ALLOCATED',
    payment_succeeded: true,
    proposed_classification: 'PROPOSED_SUCCESSFUL',
    proposed_fact: 'Procedural fee of 10.000 BHD paid under receipt RC65003062873 to obtain execution formula for the judgment.',
    source_text: '19-07-2026 09:01:52 ... 10.000 : ﺐﻠﻄﻟﺍ ﻡﻮﺳﺭ ... RC65003062873 ... ﺔﻳﺬﻴﻔﻨﺘﻟﺍ ﺔﻐﻴﺼﻟﺍ ﻡﻼﺘﺳﺍ',
    supporting_passage: '19-07-2026 09:01:52 ... 10.000 : ﺐﻠﻄﻟﺍ ﻡﻮﺳﺭ ... RC65003062873 ... ﺔﻳﺬﻴﻔﻨﺘﻟﺍ ﺔﻐﻴﺼﻟﺍ ﻡﻼﺘﺳﺍ',
    extraction_status: 'USABLE_TEXT',
    confidence: 'HIGH CONFIDENCE',
    uncertainty: 'None as to receipt payment.',
    authentication_status: 'UNVERIFIED',
    acceptance_status: 'PENDING_HUMAN_REVIEW'
  },
  {
    id: 'FC-08',
    exhibit_id: 'EX-REAL-05',
    supporting_exhibit: 'EX-REAL-05',
    supporting_page: 1,
    page_number: 1,
    filename: 'MOJ-E-TBITWKVQPAILYIR.pdf',
    category: 'fees',
    amount: 30.0,
    currency: 'BHD',
    date: '2026-08-01',
    payer: 'Elena Belikovskaya',
    payee: 'Ministry of Justice, Islamic Affairs and Waqf',
    reference_or_transaction_number: 'RC65003082647',
    allocation_status: 'ALLOCATED',
    payment_succeeded: true,
    proposed_classification: 'PROPOSED_SUCCESSFUL',
    proposed_fact: 'Application fee of 30.000 BHD paid under receipt RC65003082647 by Elena Belikovskaya to register petition for reconsideration LW770277.',
    source_text: '01-08-2026 06:38:58 ... 30.000 : ﺐﻠﻄﻟﺍ ﻡﻮﺳﺭ ... RC65003082647 ... ﻢﻜﺤﻟﺍ ﻲﻓ ﺮﻈﻨﻟﺍ ﺓﺩﺎﻋﺍ ﺔﺤﺋﻻ ﻞﻴﺠﺴﺗ',
    supporting_passage: '01-08-2026 06:38:58 ... 30.000 : ﺐﻠﻄﻟﺍ ﻡﻮﺳﺭ ... RC65003082647 ... ﻢﻜﺤﻟﺍ ﻲﻓ ﺮﻈﻨﻟﺍ ﺓﺩﺎﻋﺍ ﺔﺤﺋﻻ ﻞﻴﺠﺴﺗ',
    extraction_status: 'USABLE_TEXT',
    confidence: 'HIGH CONFIDENCE',
    uncertainty: 'None as to receipt payment; petition was dismissed in form.',
    authentication_status: 'UNVERIFIED',
    acceptance_status: 'PENDING_HUMAN_REVIEW'
  },
  {
    id: 'FC-09',
    exhibit_id: 'EX-REAL-05',
    supporting_exhibit: 'EX-REAL-05',
    supporting_page: 2,
    page_number: 2,
    filename: 'MOJ-E-TBITWKVQPAILYIR.pdf',
    category: 'amount_paid_directly',
    amount: 0.0,
    currency: 'BHD',
    date: '2026-06-03',
    payer: 'Elena Belikovskaya',
    payee: 'Mubarak Ali Mubarak Al-Dossary',
    reference_or_transaction_number: 'UNVERIFIED-ASSERTION-LW752510',
    allocation_status: 'DISPUTED',
    payment_succeeded: false,
    proposed_classification: 'PROPOSED_UNVERIFIED',
    proposed_fact: 'Elena Belikovskaya asserted in motion LW752510 that full rent for February, March, and April was paid via bank transfers, but underlying bank transaction slips are not in eligible text records.',
    source_text: 'ﺎﻧﺩﺪﺳﻭ ﻞﻣﺎﻛ ﺭﺎﺠﻳﺇ ﺮﻳﺍﺮﺒﻓ ﺱﺭﺎﻣﻭ ﻞﻳﺮﺑﺃﻭ ﺕﻼﻳﻮﺤﺘﺑ ﺔﻴﻜﻨﺑ ﺔﻘﻓﺮﻣ',
    supporting_passage: 'ﺎﻧﺩﺪﺳﻭ ﻞﻣﺎﻛ ﺭﺎﺠﻳﺇ ﺮﻳﺍﺮﺒﻓ ﺱﺭﺎﻣﻭ ﻞﻳﺮﺑﺃﻭ ﺕﻼﻳﻮﺤﺘﺑ ﺔﻴﻜﻨﺑ ﺔﻘﻓﺮﻣ',
    extraction_status: 'USABLE_TEXT',
    confidence: 'UNRESOLVED',
    uncertainty: 'Party assertion in motion narrative only; specific bank transaction amount and proof missing. Must remain UNVERIFIED.',
    authentication_status: 'UNVERIFIED',
    acceptance_status: 'PENDING_HUMAN_REVIEW'
  }
];

// ============================================================================
// 3. CONTRADICTION CANDIDATES (3 Candidates from Eligible Records)
// ============================================================================

export const GENUINE_CONTRADICTION_CANDIDATES: ContradictionCandidate[] = [
  {
    id: 'K-01',
    exhibit_id: 'EX-REAL-03',
    page_number: 2,
    filename: 'MOJ-E-QMSVKSLTLYDNFEF.pdf',
    supporting_passage: 'CS3024088684 ... 38457003 ﻢﻗﺮﻟﺍ ﻰﻠﻋ ﺔﻴﺼﻧ ﺔﻟﺎﺳﺭ ﻝﺎﺳﺭﺍ ﻖﻳﺮﻃ ﻦﻋ ﻎﻴﻠﺒﺘﻟﺍ ﻢﺗ vs LW776870 ... ﻢﻟ ﻦﻜﻳ ﻼﺠﺴﻣ ﺎﻬﻤﺳﺎﺑ ﻢﻗﺮﻟﺍ ﻡﺪﺨﺘﺴﻤﻟﺍ ﻎﻴﻠﺒﺘﻠﻟ 38457003',
    proposed_fact: 'Conflict between ministry electronic dispatch to mobile number 38457003 and defendant formal statement that 38457003 was not registered in her name and no notice was received.',
    extraction_status: 'USABLE_TEXT',
    proposition_a: 'Ministry portal generated notice dispatch records (CS3024088684 and CS3024255406) directing hearing notices via SMS to mobile number 38457003 as service on defendant Elena Belikovskaya (CPR 800694392).',
    source_a: 'EX-REAL-03, Page 2 / EX-REAL-06, Page 2',
    proposition_b: 'Defendant Elena Belikovskaya formally stated in official motion inquiry LW776870 that no notice reached her and mobile number 38457003 was never registered in her name.',
    source_b: 'EX-REAL-05, Page 1',
    type: 'Service conflict',
    materiality: 'FATAL',
    status: 'UNVERIFIED CANDIDATE',
    evidence_required_to_resolve: 'Official Bahrain Telecommunications Regulatory Authority (TRA) / telecom provider subscriber verification for mobile number 38457003 during May-August 2026, and court process server delivery receipt.',
    filename_a: 'MOJ-E-QMSVKSLTLYDNFEF.pdf',
    filename_b: 'MOJ-E-TBITWKVQPAILYIR.pdf',
    extracted_text_a: 'CS3024088684 ... 12-05-2026 ... 38457003 ﻢﻗﺮﻟﺍ ﻰﻠﻋ ﺔﻴﺼﻧ ﺔﻟﺎﺳﺭ ﻝﺎﺳﺭﺍ ﻖﻳﺮﻃ ﻦﻋ ﻎﻴﻠﺒﺘﻟﺍ ﻢﺗ',
    extracted_text_b: 'ﻢﻟ ﻞﺼﻳ ﻱﺍ ﺭﺎﻄﺧﺍ ﺔﺴﻤﺘﻠﻤﻠﻟ ﻩﺬﻬﺑ ﺔﺴﻠﺠﻟﺍ ﻢﻟﻭ ﻦﻜﻳ ﻼﺠﺴﻣ ﺎﻬﻤﺳﺎﺑ ﻢﻗﺮﻟﺍ ﻡﺪﺨﺘﺴﻤﻟﺍ ﻎﻴﻠﺒﺘﻠﻟ 38457003',
    confidence: 'HIGH CONFIDENCE',
    uncertainty: 'Primary telecommunications ownership certificate not yet produced.',
    acceptance_status: 'PENDING_HUMAN_REVIEW'
  },
  {
    id: 'K-02',
    exhibit_id: 'EX-REAL-04',
    page_number: 1,
    filename: 'MOJ-E-SEJBZJEWJMIOXXA.pdf',
    supporting_passage: '1,440.000 : ﺎﻬﺑ ﺐﻟﺎﻄﻤﻟﺍ ﻎﻟﺎﺒﻤﻟﺍ ﻉﻮﻤﺠﻣ vs ﺮﺧﺁ ﺺﺨﺸﻟ ﺔﻘﺸﻟﺍ ﺮﺟﺃﻭ 2023 ﻲﻓ ﺪﻘﻌﻟﺍ ﺀﺎﻬﻧﺈﺑ ﻲﻋﺪﻤﻟﺍ ﺮﻗﺃ',
    proposed_fact: 'Conflict between claimant assertion of 1,440.000 BHD accrued rent arrears under ongoing tenancy vs defendant assertion of lease termination in 2023 and re-letting to third party.',
    extraction_status: 'USABLE_TEXT',
    proposition_a: 'Claimant registered tenancy dispute claim on 12-05-2026 demanding 1,440.000 BHD in unpaid rent arrears under Bahrain Tenancy Law (Law 27 of 2014) implying ongoing tenancy obligations.',
    source_a: 'EX-REAL-04, Page 1 / EX-REAL-02, Page 1',
    proposition_b: 'Defendant asserted in official court filings LW752510 and LW770277 that the premises were vacated, the contract was terminated in 2023, and the landlord re-let the apartment to another party.',
    source_b: 'EX-REAL-05, Pages 1-2',
    type: 'Factual inconsistency',
    materiality: 'MATERIAL',
    status: 'UNVERIFIED CANDIDATE',
    evidence_required_to_resolve: 'Move-out handover protocol, EWA utility final clearance / transfer record, and third-party registered lease agreement for the same premises during the disputed period.',
    filename_a: 'MOJ-E-SEJBZJEWJMIOXXA.pdf',
    filename_b: 'MOJ-E-TBITWKVQPAILYIR.pdf',
    extracted_text_a: '1,440.000 : ﺎﻬﺑ ﺐﻟﺎﻄﻤﻟﺍ ﻎﻟﺎﺒﻤﻟﺍ ﻉﻮﻤﺠﻣ ... 2014 ﺔﻨﺴﻟ 27 ﺕﺍﺭﺎﻘﻌﻟﺍ ﺭﺎﺠﻳﺍ ﻥﻮﻧﺎﻗ ﺔﻳﺭﺎﺠﻳﻻﺍ ﺕﺎﻋﺯﺎﻨﻤﻟﺍ ﺕﺎﺒﻟﺎﻄﻣ',
    extracted_text_b: 'ﺮﺧﺁ ﺺﺨﺸﻟ ﺔﻘﺸﻟﺍ ﺮﺟﺃﻭ 2023 ﻲﻓ ﺪﻘﻌﻟﺍ ﺀﺎﻬﻧﺈﺑ ﻲﻋﺪﻤﻟﺍ ﺮﻗﺃ ... ﺔﻘﺸﻟﺍ ﺎﻨﻴﻠﺧﺃﻭ ... ﺔﻴﻟﺎﻤﻟﺍ ﻲﺘﻣﺫ ﺓﺀﺍﺮﺑ ﻰﻠﻋ ﺔﻌﻃﺎﻗ ﺔﻟﺩﺃ ﻖﻓﺭﺃﻭ',
    confidence: 'HIGH CONFIDENCE',
    uncertainty: 'Primary lease contract (EX-REAL-13) and handover protocol are unextracted pending OCR.',
    acceptance_status: 'PENDING_HUMAN_REVIEW'
  },
  {
    id: 'K-03',
    exhibit_id: 'EX-REAL-03',
    page_number: 1,
    filename: 'MOJ-E-QMSVKSLTLYDNFEF.pdf',
    supporting_passage: 'CS3024255405 ... info@osamaanwarlawfirm.com vs ﻑﺍﺮﻃﻻﺍ ﺮﻀﺤﻳ ﻢﻟ ... ﺎﻬﻣﺍﺰﻟﺇﻭ ،ﺭﺎﻨﻳﺩ 1440 ﻎﻠﺒﻣ ﻲﻋﺪﻤﻠﻟ ﻱﺩﺆﺗ ﻥﺄﺑ ﺎﻬﻴﻠﻋ ﻰﻋﺪﻤﻟﺍ ﻡﺍﺰﻟﺈﺑ ﺔﻤﻜﺤﻤﻟﺍ ﺖﻤﻜﺣ',
    proposed_fact: 'Conflict between hearing notices addressed to attorney Osama Anwar Law Firm vs official court session minutes recording absence of all parties and rendering default judgment in absentia.',
    extraction_status: 'USABLE_TEXT',
    proposition_a: 'Ministry electronic notices CS3024088683, CS3024088685, CS3024255405, and CS3024255407 were addressed to counsel Osama Anwar Law Firm (info@osamaanwarlawfirm.com / 38378260).',
    source_a: 'EX-REAL-03, Pages 1-2 / EX-REAL-06, Pages 1-2',
    proposition_b: 'Court session minutes of 02-06-2026 and 03-06-2026 record that neither party attended the hearings ("ﻑﺍﺮﻃﻻﺍ ﺮﻀﺤﻳ ﻢﻟ"), resulting in judgment in absentia without representation or defense.',
    source_b: 'EX-REAL-08, Pages 1-2',
    type: 'Procedural-status conflict',
    materiality: 'MATERIAL',
    status: 'UNVERIFIED CANDIDATE',
    evidence_required_to_resolve: 'Clarification of attorney Osama Anwar Mohamed representation capacity (attorney filed for execution formula in LW765685, indicating representation of plaintiff) and verification of whether defendant ever authorized legal representation.',
    filename_a: 'MOJ-E-QMSVKSLTLYDNFEF.pdf',
    filename_b: 'MOJ-E-YCAWMQVCCTRFVFG.pdf',
    extracted_text_a: 'CS3024255405 ... info@osamaanwarlawfirm.com ... 38378260 ... CS3024088685 ... osama@osamaanwarlawfirm.com',
    extracted_text_b: 'ﻑﺍﺮﻃﻻﺍ ﺮﻀﺤﻳ ﻢﻟ ... ﺎﻬﻣﺍﺰﻟﺇﻭ ،ﺭﺎﻨﻳﺩ 1440 ﻎﻠﺒﻣ ﻲﻋﺪﻤﻠﻟ ﻱﺩﺆﺗ ﻥﺄﺑ ﺎﻬﻴﻠﻋ ﻰﻋﺪﻤﻟﺍ ﻡﺍﺰﻟﺈﺑ ﺔﻤﻜﺤﻤﻟﺍ ﺖﻤﻜﺣ',
    confidence: 'HIGH CONFIDENCE',
    uncertainty: 'Powers of attorney filed in trial proceedings are unverified in docket extracts.',
    acceptance_status: 'PENDING_HUMAN_REVIEW'
  }
];

// ============================================================================
// 4. PROVENANCE GATE REJECTIONS (Catalog of Tested & Rejected Candidates)
// ============================================================================

export interface ProvenanceGateRejection {
  rejected_candidate_id: string;
  candidate_type: 'CHRONOLOGY' | 'FINANCIAL' | 'CONTRADICTION';
  proposed_statement: string;
  cited_source: string;
  rule_violated: string;
  gate_verdict: 'REJECTED_BY_PROVENANCE_GATE';
  exact_rejection_reason: string;
}

export const PROVENANCE_GATE_REJECTIONS: ProvenanceGateRejection[] = [
  {
    rejected_candidate_id: 'REJ-01',
    candidate_type: 'CHRONOLOGY',
    proposed_statement: 'Defendant was legally served with the statement of claim and hearing schedule on 12-05-2026.',
    cited_source: 'MOJ-E-QMSVKSLTLYDNFEF.pdf (EX-REAL-03, Page 2)',
    rule_violated: 'PROHIBITED_REASONING_JUMP / UNPROVED_SERVICE_DATE',
    gate_verdict: 'REJECTED_BY_PROVENANCE_GATE',
    exact_rejection_reason: 'Treating electronic SMS dispatch attempt as legal proof of service is prohibited. Receipt is unverified, and defendant expressly disputed ownership of the destination phone number.'
  },
  {
    rejected_candidate_id: 'REJ-02',
    candidate_type: 'FINANCIAL',
    proposed_statement: 'Elena Belikovskaya verified payment of full rent for February, March, and April via bank transfers.',
    cited_source: 'MOJ-E-TBITWKVQPAILYIR.pdf (EX-REAL-05, Page 2)',
    rule_violated: 'UNSUPPORTED_PARTY_ASSERTION / MISSING_PRIMARY_EVIDENCE',
    gate_verdict: 'REJECTED_BY_PROVENANCE_GATE',
    exact_rejection_reason: 'Party assertion in motion narrative cannot be booked as verified direct payment without primary bank account statements, debit notices, or transaction vouchers.'
  },
  {
    rejected_candidate_id: 'REJ-03',
    candidate_type: 'CHRONOLOGY',
    proposed_statement: 'Execution attachment of bank accounts occurred on 15-06-2026.',
    cited_source: 'execution full file.pdf (EX-REAL-10)',
    rule_violated: 'EXCLUDED_ZERO_TEXT_RECORD',
    gate_verdict: 'REJECTED_BY_PROVENANCE_GATE',
    exact_rejection_reason: 'Exhibit EX-REAL-10 is an unextracted scanned image file with ocr_status OCR_REQUIRED and 0 usable text characters. Generating candidates from zero-text records is strictly forbidden.'
  },
  {
    rejected_candidate_id: 'REJ-04',
    candidate_type: 'CHRONOLOGY',
    proposed_statement: 'First-instance judgment became final and unappealable after expiry of statutory appeal deadline calculated from 03-06-2026.',
    cited_source: 'MOJ-E-YCAWMQVCCTRFVFG.pdf (EX-REAL-08, Page 2)',
    rule_violated: 'PROHIBITED_LEGAL_CONCLUSION / SERVICE_PRECONDITION_VIOLATION',
    gate_verdict: 'REJECTED_BY_PROVENANCE_GATE',
    exact_rejection_reason: 'Factual candidates must not assert legal conclusions or calculate deadline expirations. Under Bahrain civil procedure, appeal periods run from proved service of default judgments, not decision date.'
  }
];

// ============================================================================
// 5. PROVENANCE GATE VALIDATOR FUNCTION
// ============================================================================

export interface ProvenanceValidationResult {
  isValid: boolean;
  reasons: string[];
}

export function validateCandidateProvenance(
  candidate: {
    exhibit_id?: string;
    supporting_exhibit?: string;
    page_number?: number | string;
    supporting_page?: number | string;
    filename?: string;
    supporting_passage?: string;
    extracted_text?: string;
    source_text?: string;
    proposed_fact?: string;
    event_description?: string;
    date_type?: string;
    is_date_proved?: boolean;
    acceptance_status?: string;
  },
  availableEvidence: EvidenceItem[]
): ProvenanceValidationResult {
  const reasons: string[] = [];

  const exhibitId = candidate.exhibit_id || candidate.supporting_exhibit;
  if (!exhibitId) {
    reasons.push('Candidate lacks exhibit ID reference.');
  } else {
    // Check if exhibit is in excluded zero-text list
    if (EXCLUDED_ZERO_TEXT_EXHIBIT_IDS.includes(exhibitId as any)) {
      reasons.push(`Exhibit ${exhibitId} is in EXCLUDED_ZERO_TEXT_EXHIBIT_IDS (OCR_REQUIRED with 0 usable text).`);
    }

    // Verify evidence item in vault
    const evidenceItem = availableEvidence.find(e => e.exhibit_id === exhibitId);
    if (!evidenceItem) {
      reasons.push(`Exhibit ${exhibitId} not found in active Evidence Vault.`);
    } else {
      if (evidenceItem.data_origin !== 'USER_IMPORTED') {
        reasons.push(`Exhibit ${exhibitId} data_origin is ${evidenceItem.data_origin}, expected USER_IMPORTED.`);
      }
      if (!evidenceItem.raw_text || evidenceItem.raw_text.trim().length === 0) {
        reasons.push(`Exhibit ${exhibitId} has 0 usable digital text characters.`);
      }
      if (evidenceItem.ocr_status === 'OCR_REQUIRED' || evidenceItem.ocr_status === 'OCR_FAILED') {
        reasons.push(`Exhibit ${exhibitId} has ocr_status ${evidenceItem.ocr_status}.`);
      }
    }
  }

  // Supporting passage check
  const passage = candidate.supporting_passage || candidate.extracted_text || candidate.source_text;
  if (!passage || passage.trim().length === 0) {
    reasons.push('Candidate lacks exact supporting passage from record.');
  }

  // Service date rule
  if (candidate.date_type === 'Service date' && candidate.is_date_proved) {
    reasons.push('Service date cannot be marked as proved without certificate of personal delivery.');
  }

  // Legal conclusion rule
  const text = (candidate.proposed_fact || candidate.event_description || '').toLowerCase();
  if (text.includes('legally void') || text.includes('deadline expired') || text.includes('conclusively guilty')) {
    reasons.push('Candidate asserts a prohibited legal conclusion rather than an evidentiary fact.');
  }

  return {
    isValid: reasons.length === 0,
    reasons
  };
}
