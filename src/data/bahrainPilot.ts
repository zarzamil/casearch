/**
 * SAMPLE MATTER: Bahrain Rental Appeal Pilot
 *
 * Source-linked case record strictly conforming to authentic pilot facts.
 * All invented case numbers, unverified service dates, and unsupported
 * recommendations have been excised.
 *
 * Route Counts Enforced:
 * - ACTIVE: 0
 * - EVIDENCE-DEPENDENT: 3
 * - WEAK: 1
 * - DEAD: 1
 */

import {
  AdversarialReviewItem,
  ChronologyEvent,
  ConclusionLedgerState,
  ContradictionItem,
  DocumentIndexItem,
  ElectronicAppealForensicsData,
  EvidenceItem,
  FinancialEntry,
  LegalProposition,
  Matter,
  RoadmapPlan,
  RouteItem
} from '../types';

export const NEW_CLEAN_MATTER: Matter = {
  id: 'MATTER_BAHRAIN_REVIEW',
  title: 'Bahrain Rental Dispute & Execution Review',
  jurisdiction: 'Kingdom of Bahrain — Rental Disputes Committee / High Civil Court',
  exact_objective: 'Establish lawful procedural route regarding First-Instance Rental Judgment dated 3 June 2026 (BHD 1,440 principal) in light of unverified service and Execution File 042026162064.',
  requested_outcome: 'Determination of lawful procedural route to challenge judgment or verify debt accounting in Execution File 042026162064.',
  matter_type: 'Rental Dispute / Execution / Appeal Review',
  relevant_court_or_authority: 'To be established from the imported official records',
  known_decision_dates: [],
  known_deadlines: [],
  current_procedural_stage: 'Initial Intake / Awaiting Evidence Ingestion',
  opposing_party: 'To be established from the imported official records',
  existing_representative: 'Self-Represented',
  confidentiality_classification: 'CONFIDENTIAL',
  analysis_cutoff_date: '2026-10-11',
  user_factual_narrative: 'Initial matter intake configured. Official records and case documents awaiting ingestion for forensic chronology and route analysis.',
  user_known_concerns: 'Execution enforcement proceedings active; service status unproved.',
  known_prior_filings: [],
  known_rejected_or_closed_routes: [],
  research_status: 'IDLE',
  confidence_indicator: 'UNRESOLVED',
  evidence_completeness_pct: 0,
  is_sample_pilot: false
};

export const EMPTY_ELECTRONIC_FORENSICS: ElectronicAppealForensicsData = {
  preparation_number: 'No Record Entered',
  draft_save_date: 'N/A',
  last_modified_date: 'N/A',
  mandatory_attachments: [],
  existing_attachments: [],
  payment_demand_reference: 'N/A',
  payment_attempt: 'N/A',
  payment_result: 'PENDING',
  final_confirmation_reached: false,
  registered_case_number: null,
  service_date: null,
  audit_log_request_status: 'NOT_SUBMITTED',
  current_procedural_conclusion: 'Electronic Filing Forensics — No Record Entered'
};

export const EMPTY_CONCLUSION_LEDGER: ConclusionLedgerState = {
  matter_id: 'MATTER_BAHRAIN_REVIEW',
  last_updated: '2026-10-11T00:00:00Z',
  verified_facts: [],
  official_records: [],
  user_assertions: [],
  assumptions: [],
  inferences: [],
  unknowns: ['Full procedural docket unknown until evidence ingested.'],
  contradictions_count: 0,
  open_routes: [],
  closed_routes: [],
  rejected_routes: [],
  decisive_missing_evidence: ['Primary court decision or administrative order.'],
  current_committed_conclusion: 'Record under initial assembly. No supportable route determined.',
  previous_conclusions: [],
  corrections: []
};

export const EMPTY_ROADMAP: RoadmapPlan = {
  primary_route: null,
  exact_next_action: 'Ingest initial documentary evidence and verify procedural vehicle.',
  required_documents: ['Original decision or notice of action'],
  deadline_note: 'Unknown until decision and service dates are proved.',
  decision_point: 'Verify whether limitation periods remain open.',
  stop_condition: 'No currently supportable route found.',
  backup_route: null,
  backup_trigger_condition: 'N/A',
  no_route_survived: true,
  unsupportable_notice: 'No currently supportable route was found.'
};

export const GENUINE_IMPORTED_EVIDENCE: EvidenceItem[] = [
  {
    id: "EV_REAL_001",
    exhibit_id: "EX-REAL-01",
    filename: "MOJ-E-BKPZAUXTMOHLMMX.pdf",
    document_type: "Decision Details / Travel Ban Notice",
    date: "2026-05-13",
    source: "Kingdom of Bahrain - Ministry of Justice Portal",
    author_or_issuer: "Ministry of Justice - Execution Directorate",
    page_count: 1,
    authentication_status: "UNVERIFIED",
    confidentiality_status: "RESTRICTED",
    duplicate_status: "ORIGINAL",
    ocr_status: "COMPLETED",
    completeness_status: "COMPLETE",
    data_origin: "USER_IMPORTED",
    related_events: [],
    related_routes: [],
    notes: "Official decision details: Travel ban order issued 13/05/2026 for case 252026007384.",
    source_citation_identifier: "MOJ-E-BKPZAUXTMOHLMMX.pdf (p. 1)",
    raw_text: "p.1: ﺭﺍﺮﻘﻟﺍ ﻞﻴﺻﺎﻔﺗ / ﻕﻮﻄﻨﻤﻟﺍ\r\n                                                                                                         ﺮﻔﺴﻟﺍ ﻦﻣ ﻊﻨﻤﻟﺍ :      ﺭﺍﺮﻘﻟﺍ                              2026/05/13 :        ﺭﺍﺮﻘﻟﺍ ﺦﻳﺭﺎﺗ\r\n                                                                                                                                                                                  :        ﻕﻮﻄﻨﻤﻟﺍ\r\n                                                                                                                                                                     ﻝﻮﺒﻘﻟﺍ ﺐﺒﺳ  \r\n                                                                                                   ﻲﻋﺪﻤﻟﺍ ﺢﻟﺎﺼﻟ ﻢﻜﺤﻟﺍ :        ﺭﺍﺮﻘﻟﺍ                              2026/06/03 :        ﺭﺍﺮﻘﻟﺍ ﺦﻳﺭﺎﺗ\r\n                                                    . ﺓﺎﻣﺎﺤﻤﻟﺍ ﺏﺎﻌﺗﺃ ﻞﺑﺎﻘﻣ ﺭﺎﻨﻳﺩ 50 ﻎﻠﺒﻣﻭ ﻒﻳﺭﺎﺼﻤﻟﺎﺑ ﺎﻬﻣﺍﺰﻟﺇﻭ ،ﺭﺎﻨﻳﺩ 1440 ﻎﻠﺒﻣ ﻲﻋﺪﻤﻠﻟ ﻱﺩﺆﺗ ﻥﺄﺑ ﺎﻬﻴﻠﻋ ﻰﻋﺪﻤﻟﺍ ﻡﺍﺰﻟﺈﺑ ﺔﻤﻜﺤﻤﻟﺍ ﺖﻤﻜﺣ :           ﻕﻮﻄﻨﻤﻟﺍ\r\n                                                                                             ﺮﻔﺴﻟﺍ ﻦﻣ ﻊﻨﻤﻟﺍ ﺀﺎﻐﻟﺍ ﺾﻓﺭ :        ﺭﺍﺮﻘﻟﺍ                              2026/06/05 :        ﺭﺍﺮﻘﻟﺍ ﺦﻳﺭﺎﺗ\r\n                                                                                                                                                                                  :        ﻕﻮﻄﻨﻤﻟﺍ\r\n                                                                                                                                                                    ﺾﻓﺮﻟﺍ ﺐﺒﺳ  \r\n                                                                                                ﺔﻌﻓﺍﺮﻤﻟﺍ ﺏﺎﺑ ﺢﺘﻓ ﺾﻓﺭ :         ﺭﺍﺮﻘﻟﺍ                              2026/06/11 :        ﺭﺍﺮﻘﻟﺍ ﺦﻳﺭﺎﺗ\r\n                                                                                                                                                                                  :        ﻕﻮﻄﻨﻤﻟﺍ\r\n                                                                                                                          ﺎﻬﻴﻓ ﻢﻜﺣ ﺭﺍﺪﺻﺍ ﻢﺗ ﺪﻗﻭ ﺔﻣﻮﺴﺤﻣ ﻯﻮﻋﺪﻟﺍ    ﺾﻓﺮﻟﺍ ﺐﺒﺳ  \r\n                                                                                             ﺮﻔﺴﻟﺍ ﻦﻣ ﻊﻨﻤﻟﺍ ﺀﺎﻐﻟﺍ ﺾﻓﺭ :        ﺭﺍﺮﻘﻟﺍ                              2026/06/24 :        ﺭﺍﺮﻘﻟﺍ ﺦﻳﺭﺎﺗ\r\n                                                                                                                                                                                  :        ﻕﻮﻄﻨﻤﻟﺍ\r\n                                                                                                                                                                    ﺾﻓﺮﻟﺍ ﺐﺒﺳ  \r\n                                                                                  ﺔﻴﻜﻨﺒﻟﺍ ﺕﺎﺑﺎﺴﺤﻟﺍ ﻦﻋ ﻢﻴﻤﻌﺘﻟﺍ ﻊﻓﺭ ﺾﻓﺭ :        ﺭﺍﺮﻘﻟﺍ                              2026/08/05 :        ﺭﺍﺮﻘﻟﺍ ﺦﻳﺭﺎﺗ\r\n                                                                                                                                                                                  :        ﻕﻮﻄﻨﻤﻟﺍ\r\n                                                                                                                                                                    ﺾﻓﺮﻟﺍ ﺐﺒﺳ  \r\n                                                                                                       ﻼﻜﺷ ﻝﻮﺒﻘﻟﺍ ﻡﺪﻋ :        ﺭﺍﺮﻘﻟﺍ                              2026/08/16 :        ﺭﺍﺮﻘﻟﺍ ﺦﻳﺭﺎﺗ\r\n                                                                                                             ﺕﺎﻓﻭﺮﺼﻤﻟﺎﺑ ﺔﺴﻤﺘﻠﻤﻟﺍ ﺖﻣﺰﻟﺃﻭ ﻼﻜﺷ ﺱﺎﻤﺘﻟﻻﺍ ﻝﻮﺒﻗ ﻡﺪﻌﺑ ﺔﻤﻜﺤﻤﻟﺍ ﺖﻤﻜﺣ :               ﻕﻮﻄﻨﻤﻟﺍ"
  },
  {
    id: "EV_REAL_002",
    exhibit_id: "EX-REAL-02",
    filename: "MOJ-E-JHYGSZADGRMSNPC.pdf",
    document_type: "Court Case Docket Profile",
    date: "2026-05-12",
    source: "Kingdom of Bahrain - Ministry of Justice Portal",
    author_or_issuer: "Ministry of Justice",
    page_count: 1,
    authentication_status: "UNVERIFIED",
    confidentiality_status: "RESTRICTED",
    duplicate_status: "ORIGINAL",
    ocr_status: "COMPLETED",
    completeness_status: "COMPLETE",
    data_origin: "USER_IMPORTED",
    related_events: [],
    related_routes: [],
    notes: "Ministry of Justice case file profile: registration date 12/05/2026.",
    source_citation_identifier: "MOJ-E-JHYGSZADGRMSNPC.pdf (p. 1)",
    raw_text: "p.1: ﻒﻠﻤﻟﺍ ﺕﺎﻧﺎﻴﺑ\r\n                            12/05/2026 :                                                       2014-27 ﺕﺍﺭﺎﻘﻌﻟﺍ ﺭﺎﺠﻳﺍ ﻥﻮﻧﺎﻗ-ﺔﻳﺭﺎﺠﻳﻻﺍ ﺕﺎﻋﺯﺎﻨﻤﻟﺍ            25 2026 00738 4 : ﺐﻠﻄﻟﺍ ﻢﻗﺭ\r\n                                                  ﻞﻴﺠﺴﺘﻟﺍ ﺦﻳﺭﺎﺗ\r\n                                                                                                                                                                                         :\r\n                                                                                                                                                  ﺎﻔﻴﺴﻜﺒﻟﺍ ﺎﻨﻴﻟﺍ ﺪﺿ ﺭﺩﻮﺠﻟﺍ ﻰﻠﻋ ﻙﺭﺎﺒﻣ\r\n                                                                                                                                                                                            ﻥﺍﻮﻨﻌﻟﺍ \r\n                                                                                                                                                                                         :\r\n                                                                                                                                                                                            ﺔﻠﺻ ﺕﺍﺫ ﻯﻮﻋﺪﻟﺍ\r\n                                                                                                                                                                                         : ﻪﻴﺋﺍﺪﺘﺑﻷﺍ ﺔﻴﻀﻘﻟﺍ ﻢﻗﺭ\r\n                                                                                                  ( ﻪﺗﻼﻳﺪﻌﺗﻭ 2014 ﺔﻨﺴﻟ 27 ﺕﺍﺭﺎﻘﻌﻟﺍ ﺭﺎﺠﻳﺍ ﻥﻮﻧﺎﻗ ) ﺔﻳﺭﺎﺠﻳﻻﺍ ﺕﺎﻋﺯﺎﻨﻤﻟﺍ ﺕﺎﺒﻟﺎﻄﻣ : ﻉﻮﺿﻮﻤﻟﺍ\r\n                                                                                                                                               ﺔﻴﻧﺪﻤﻟﺍ - ﺔﻨﻣﺎﺜﻟﺍ ﺓﺮﺋﺍﺪﻟﺍ ﻯﺮﺒﻜﻟﺍ ﺔﻤﻜﺤﻤﻟﺍ    ﺔﻴﻟﺎﺤﻟﺍ ﺔﻤﻜﺤﻤﻟﺍ \r\n                                              :                                                                                                                                          :\r\n                         ﺔﻳﺭﺎﺠﻳﻻﺍ - ﻯﺮﺒﻜﻟﺍ      ﺹﺎﺼﺘﺧﻻﺍ ﺔﻬﺟ\r\n                              ﻯﻮﻋﺪﻟﺍ ﺖﻬﺘﻧﺍ                                                                                                                             16/08/2026          ﺔﻘﺑﺎﺴﻟﺍ ﺔﺴﻠﺠﻟﺍ ﺦﻳﺭﺎﺗ\r\n                                              :                                                                                                                                          :\r\n                                                 ﻞﻴﺟﺄﺘﻟﺍ ﺐﺒﺳ\r\n                                                                                                                                                                                         :\r\n                                                                                                                                                                                           ﺔﻣﺩﺎﻘﻟﺍ ﺔﺴﻠﺠﻟﺍ ﺦﻳﺭﺎﺗ\r\n                            16/08/2026 :                                                                                                                                       ﺔﻣﻮﺴﺤﻣ : ﺔﻟﺎﺤﻟﺍ\r\n                                                  ﺦﻳﺭﺎﺘﺑ\r\n                                                                                                                                                                      ﻼﻜﺷ ﻝﻮﺒﻘﻟﺍ ﻡﺪﻋ  : ﺭﺍﺮﻗ ﺮﺧﺃ"
  },
  {
    id: "EV_REAL_003",
    exhibit_id: "EX-REAL-03",
    filename: "MOJ-E-QMSVKSLTLYDNFEF.pdf",
    document_type: "Case Letters and Notices Listing",
    date: "2026-05-13",
    source: "Kingdom of Bahrain - Ministry of Justice Portal",
    author_or_issuer: "Ministry of Justice",
    page_count: 2,
    authentication_status: "UNVERIFIED",
    confidentiality_status: "RESTRICTED",
    duplicate_status: "ORIGINAL",
    ocr_status: "COMPLETED",
    completeness_status: "COMPLETE",
    data_origin: "USER_IMPORTED",
    related_events: [],
    related_routes: [],
    notes: "Issued letters and notices for Case 252026007384 (Pages 1-2, 9,935 characters). Overlaps with EX-REAL-06; deduplication deferred.",
    source_citation_identifier: "MOJ-E-QMSVKSLTLYDNFEF.pdf (p. 1-2)",
    raw_text: "p.1: 252026007384 ﻢﻗﺭ ﻯﻮﻋﺪﻟﺍ ﻰﻠﻋ ﺓﺭﺩﺎﺼﻟﺍ ﻞﺋﺎﺳﺮﻟﺍﻭ ﺕﺎﺑﺎﻄﺨﻟﺍ\r\n                                                              ﺔﻋﻮﻓﺮﻣ ﺮﻴﻏ \r\n     CS3025349532:                                        :\r\n                                        ﺭﻮﻀﺤﻟﺍﻭ ﺪﻴﻋﺍﻮﻤﻟﺍ ﻝﻭﺪﺟﻭ ﻯﻮﻋﺩ ﺔﺤﺋﻻ ﻥﻼﻋﺍ\r\n              ﺏﺎﻄﺨﻟﺍ ﺰﻣﺭ                                  ﻎﻴﻠﺒﺘﻟﺍ \\  ﺏﺎﻄﺨﻟﺍ ﻢﺳﺃ\r\n                                                    900803452:\r\n       28-09-2026:\r\n                                                              ﻑﺮﻄﻟﺍ ﺔﻳﻮﻫ\r\n             ﺭﺍﺪﺻﻻﺍ ﺦﻳﺭﺎﺗ\r\n                                     35330541  ﻢﻗﺮﻟﺍ ﻰﻠﻋ ﺔﻴﺼﻧ ﺔﻟﺎﺳﺭ ﻝﺎﺳﺭﺍ ﻖﻳﺮﻃ ﻦﻋ ﻎﻴﻠﺒﺘﻟﺍ ﻢﺗ :\r\n                                                              ﻎﻴﻠﺒﺘﻟﺍ ﺔﻘﻳﺮﻃ\r\n                           lawyer.ahmedaldoseri@gmail.com ﻰﻠﻋ ﻲﻧﻭﺮﺘﻜﻟﺍ ﺪﻳﺮﺑ ﻝﺎﺳﺭﺍ ﻖﻳﺮﻃ ﻦﻋ ﻎﻴﻠﺒﺘﻟﺍ ﻢﺗ\r\n                                                          :    ﻪﻬﺠﻟﺍ ﺩﺭ\r\n     CS3024255405:                                        :\r\n                                                    ﺭﻮﻀﺤﻟﺎﺑ ﻥﻼﻋﺍ\r\n              ﺏﺎﻄﺨﻟﺍ ﺰﻣﺭ                                  ﻎﻴﻠﺒﺘﻟﺍ \\  ﺏﺎﻄﺨﻟﺍ ﻢﺳﺃ\r\n                                                    520105435:\r\n       02-06-2026:\r\n                                                              ﻑﺮﻄﻟﺍ ﺔﻳﻮﻫ\r\n             ﺭﺍﺪﺻﻻﺍ ﺦﻳﺭﺎﺗ\r\n                                     38378260  ﻢﻗﺮﻟﺍ ﻰﻠﻋ ﺔﻴﺼﻧ ﺔﻟﺎﺳﺭ ﻝﺎﺳﺭﺍ ﻖﻳﺮﻃ ﻦﻋ ﻎﻴﻠﺒﺘﻟﺍ ﻢﺗ :\r\n                                                              ﻎﻴﻠﺒﺘﻟﺍ ﺔﻘﻳﺮﻃ\r\n                             info@osamaanwarlawfirm.com ﻰﻠﻋ ﻲﻧﻭﺮﺘﻜﻟﺍ ﺪﻳﺮﺑ ﻝﺎﺳﺭﺍ ﻖﻳﺮﻃ ﻦﻋ ﻎﻴﻠﺒﺘﻟﺍ ﻢﺗ\r\n                                                          :    ﻪﻬﺠﻟﺍ ﺩﺭ\r\n     CS3024255406:                                        :\r\n                                                    ﺭﻮﻀﺤﻟﺎﺑ ﻥﻼﻋﺍ\r\n              ﺏﺎﻄﺨﻟﺍ ﺰﻣﺭ                                  ﻎﻴﻠﺒﺘﻟﺍ \\  ﺏﺎﻄﺨﻟﺍ ﻢﺳﺃ\r\n                                                    800694392:\r\n       02-06-2026:\r\n                                                              ﻑﺮﻄﻟﺍ ﺔﻳﻮﻫ\r\n             ﺭﺍﺪﺻﻻﺍ ﺦﻳﺭﺎﺗ\r\n                                     38457003  ﻢﻗﺮﻟﺍ ﻰﻠﻋ ﺔﻴﺼﻧ ﺔﻟﺎﺳﺭ ﻝﺎﺳﺭﺍ ﻖﻳﺮﻃ ﻦﻋ ﻎﻴﻠﺒﺘﻟﺍ ﻢﺗ :\r\n                                                              ﻎﻴﻠﺒﺘﻟﺍ ﺔﻘﻳﺮﻃ\r\n                                            ﻰﻠﻋ ﻲﻧﻭﺮﺘﻜﻟﺍ ﺪﻳﺮﺑ ﻝﺎﺳﺭﺍ ﻖﻳﺮﻃ ﻦﻋ ﻎﻴﻠﺒﺘﻟﺍ ﻢﺗ\r\n                                                          :    ﻪﻬﺠﻟﺍ ﺩﺭ\r\n     CS3024255407:                                        :\r\n                                                    ﺭﻮﻀﺤﻟﺎﺑ ﻥﻼﻋﺍ\r\n              ﺏﺎﻄﺨﻟﺍ ﺰﻣﺭ                                  ﻎﻴﻠﺒﺘﻟﺍ \\  ﺏﺎﻄﺨﻟﺍ ﻢﺳﺃ\r\n                                                    621013528:\r\n       02-06-2026:\r\n                                                              ﻑﺮﻄﻟﺍ ﺔﻳﻮﻫ\r\n             ﺭﺍﺪﺻﻻﺍ ﺦﻳﺭﺎﺗ\r\n                                     38378260  ﻢﻗﺮﻟﺍ ﻰﻠﻋ ﺔﻴﺼﻧ ﺔﻟﺎﺳﺭ ﻝﺎﺳﺭﺍ ﻖﻳﺮﻃ ﻦﻋ ﻎﻴﻠﺒﺘﻟﺍ ﻢﺗ :\r\n                                                              ﻎﻴﻠﺒﺘﻟﺍ ﺔﻘﻳﺮﻃ\r\n                             info@osamaanwarlawfirm.com ﻰﻠﻋ ﻲﻧﻭﺮﺘﻜﻟﺍ ﺪﻳﺮﺑ ﻝﺎﺳﺭﺍ ﻖﻳﺮﻃ ﻦﻋ ﻎﻴﻠﺒﺘﻟﺍ ﻢﺗ\r\n                                                          :    ﻪﻬﺠﻟﺍ ﺩﺭ\n\np.2: 252026007384 ﻢﻗﺭ ﻯﻮﻋﺪﻟﺍ ﻰﻠﻋ ﺓﺭﺩﺎﺼﻟﺍ ﻞﺋﺎﺳﺮﻟﺍﻭ ﺕﺎﺑﺎﻄﺨﻟﺍ\r\n            EN3024097245:                                                                                                                           :\r\n                                                                                                                                      ﺮﻔﺴﻟﺍ ﻦﻣ ﻊﻨﻣ\r\n                                  ﺏﺎﻄﺨﻟﺍ ﺰﻣﺭ                                                                                                          ﻎﻴﻠﺒﺘﻟﺍ \\  ﺏﺎﻄﺨﻟﺍ ﻢﺳﺃ\r\n                                                                                                                                      800694392:\r\n                13-05-2026:\r\n                                                                                                                                                              ﻑﺮﻄﻟﺍ ﺔﻳﻮﻫ\r\n                                ﺭﺍﺪﺻﻻﺍ ﺦﻳﺭﺎﺗ\r\n                                                                                                                                   ﺎﻴﻧﻭﺮﺘﻜﻟﺍ ﻝﺎﺳﺭﻻﺍ ﻢﺗ :\r\n                                                                                                                                                             ﻎﻴﻠﺒﺘﻟﺍ ﺔﻘﻳﺮﻃ\r\n                                                                                                                                                    :\r\n                                                                                                                                                              ﺏﺎﻄﺨﻟﺍ ﺺﻧ\r\n                                                                                                           4/00738/2026/25 : ﻢﻗﺭ ﻯﻮﻋﺪﻟﺍ ﻰﻟﺇ ﺍﺩﺎﻨﺘﺳﺍ\r\n                                                                    800694392 ﻲﺼﺨﺷ ﻢﻗﺮﻟﺍ ﺎﻔﻴﺴﻜﺒﻟﺍ ﺎﻨﻴﻟﺍ ﻪﻴﻠﻋ ﻲﻋﺪﻤﻟﺍ ﺪﺿ ﺭﺩﻮﺠﻟﺍ ﻰﻠﻋ ﻙﺭﺎﺒﻣ  : ﻦﻣ ﺔﻋﻮﻓﺮﻤﻟﺍ\r\n                                                                                                                                 .ﺎﻴﺳﻭﺭ   : ﻪﻴﺴﻨﺠﻟﺍ ﺪﻠﺑ\r\n                                                                                              .ﺭﺎﻨﻳﺩ 1531.8 ﻩﺭﺪﻗﻭ ﻎﻠﺒﻣ : ﻡﻮﺳﺮﻟﺍ ﻊﻣ ﻪﺑ ﻢﻜﺤﻟﺍ ﺏﻮﻠﻄﻤﻟﺍ ﻎﻠﺒﻤﻠﻟ\r\n                           .ﻩﻼﻋﺃ ﺭﻮﻛﺬﻤﻟﺍ ﻎﻠﺒﻤﻟﺍ ﺩﺍﺪﺳ ﻝﺎﺣ ﻲﻓ ﺎﻴﺋﺎﻘﻠﺗ ﻊﻨﻤﻟﺍ ﻊﻓﺮﻳﻭ ، ﺓﺭﻮﻛﺬﻤﻟﺍ ﻯﻮﻋﺪﻟﺍ ﺐﺟﻮﻤﺑ ﻚﻟﺫﻭ ،ﺮﻔﺴﻟﺍ ﻦﻣ ﻩﻼﻋﺃ ﺭﻮﻛﺬﻤﻟﺍ ﻪﻴﻠﻋ ﻲﻋﺪﻤﻟﺍ ﻊﻨﻣ ﺔﻤﻜﺤﻤﻟﺍ ﺮﻣﺄﺗ ﺍﺬﻟ\r\n                                                                                                             2026/05/13 ﺦﻳﺭﺎﺘﺑ ﺕﺍﺯﻮﺠﻟﺍ ﻦﻣ ﺀﺍﺮﺟﻻﺍ ﻢﺗ :           ﻪﻬﺠﻟﺍ ﺩﺭ\r\n            CS3024088684:                                                                                                                           :\r\n                                                                                                       ﺭﻮﻀﺤﻟﺍﻭ ﺪﻴﻋﺍﻮﻤﻟﺍ ﻝﻭﺪﺟﻭ ﻯﻮﻋﺩ ﺔﺤﺋﻻ ﻥﻼﻋﺍ\r\n                                  ﺏﺎﻄﺨﻟﺍ ﺰﻣﺭ                                                                                                          ﻎﻴﻠﺒﺘﻟﺍ \\  ﺏﺎﻄﺨﻟﺍ ﻢﺳﺃ\r\n                                                                                                                                      800694392:\r\n                12-05-2026:\r\n                                                                                                                                                              ﻑﺮﻄﻟﺍ ﺔﻳﻮﻫ\r\n                                ﺭﺍﺪﺻﻻﺍ ﺦﻳﺭﺎﺗ\r\n                                                                                             38457003  ﻢﻗﺮﻟﺍ ﻰﻠﻋ ﺔﻴﺼﻧ ﺔﻟﺎﺳﺭ ﻝﺎﺳﺭﺍ ﻖﻳﺮﻃ ﻦﻋ ﻎﻴﻠﺒﺘﻟﺍ ﻢﺗ :\r\n                                                                                                                                                             ﻎﻴﻠﺒﺘﻟﺍ ﺔﻘﻳﺮﻃ\r\n                                                                                                                                                    :           ﻪﻬﺠﻟﺍ ﺩﺭ\r\n            CS3024088685:                                                                                                                           :\r\n                                                                                                       ﺭﻮﻀﺤﻟﺍﻭ ﺪﻴﻋﺍﻮﻤﻟﺍ ﻝﻭﺪﺟﻭ ﻯﻮﻋﺩ ﺔﺤﺋﻻ ﻥﻼﻋﺍ\r\n                                  ﺏﺎﻄﺨﻟﺍ ﺰﻣﺭ                                                                                                          ﻎﻴﻠﺒﺘﻟﺍ \\  ﺏﺎﻄﺨﻟﺍ ﻢﺳﺃ\r\n                                                                                                                                      621013528:\r\n                12-05-2026:\r\n                                                                                                                                                              ﻑﺮﻄﻟﺍ ﺔﻳﻮﻫ\r\n                                ﺭﺍﺪﺻﻻﺍ ﺦﻳﺭﺎﺗ\r\n                                                                                             38378260  ﻢﻗﺮﻟﺍ ﻰﻠﻋ ﺔﻴﺼﻧ ﺔﻟﺎﺳﺭ ﻝﺎﺳﺭﺍ ﻖﻳﺮﻃ ﻦﻋ ﻎﻴﻠﺒﺘﻟﺍ ﻢﺗ :\r\n                                                                                                                                                             ﻎﻴﻠﺒﺘﻟﺍ ﺔﻘﻳﺮﻃ\r\n                                                                      osama@osamaanwarlawfirm.com ﻰﻠﻋ ﻲﻧﻭﺮﺘﻜﻟﺍ ﺪﻳﺮﺑ ﻝﺎﺳﺭﺍ ﻖﻳﺮﻃ ﻦﻋ ﻎﻴﻠﺒﺘﻟﺍ ﻢﺗ\r\n                                                                                                                                                    :           ﻪﻬﺠﻟﺍ ﺩﺭ\r\n            CS3024088683:                                                                                                                           :\r\n                                                                                                       ﺭﻮﻀﺤﻟﺍﻭ ﺪﻴﻋﺍﻮﻤﻟﺍ ﻝﻭﺪﺟﻭ ﻯﻮﻋﺩ ﺔﺤﺋﻻ ﻥﻼﻋﺍ\r\n                                  ﺏﺎﻄﺨﻟﺍ ﺰﻣﺭ                                                                                                          ﻎﻴﻠﺒﺘﻟﺍ \\  ﺏﺎﻄﺨﻟﺍ ﻢﺳﺃ\r\n                                                                                                                                      520105435:\r\n                12-05-2026:\r\n                                                                                                                                                              ﻑﺮﻄﻟﺍ ﺔﻳﻮﻫ\r\n                                ﺭﺍﺪﺻﻻﺍ ﺦﻳﺭﺎﺗ\r\n                                                                                             38378260  ﻢﻗﺮﻟﺍ ﻰﻠﻋ ﺔﻴﺼﻧ ﺔﻟﺎﺳﺭ ﻝﺎﺳﺭﺍ ﻖﻳﺮﻃ ﻦﻋ ﻎﻴﻠﺒﺘﻟﺍ ﻢﺗ :\r\n                                                                                                                                                             ﻎﻴﻠﺒﺘﻟﺍ ﺔﻘﻳﺮﻃ\r\n                                                                          info@osamaanwarlawfirm.com ﻰﻠﻋ ﻲﻧﻭﺮﺘﻜﻟﺍ ﺪﻳﺮﺑ ﻝﺎﺳﺭﺍ ﻖﻳﺮﻃ ﻦﻋ ﻎﻴﻠﺒﺘﻟﺍ ﻢﺗ\r\n                                                                                                                                                    :           ﻪﻬﺠﻟﺍ ﺩﺭ"
  },
  {
    id: "EV_REAL_004",
    exhibit_id: "EX-REAL-04",
    filename: "MOJ-E-SEJBZJEWJMIOXXA.pdf",
    document_type: "Court Fee Assessment and Receipt",
    date: "2026-05-12",
    source: "Kingdom of Bahrain - Ministry of Justice Portal",
    author_or_issuer: "Ministry of Justice",
    page_count: 1,
    authentication_status: "UNVERIFIED",
    confidentiality_status: "RESTRICTED",
    duplicate_status: "ORIGINAL",
    ocr_status: "COMPLETED",
    completeness_status: "COMPLETE",
    data_origin: "USER_IMPORTED",
    related_events: [],
    related_routes: [],
    notes: "Case filing fee details: registration 12/05/2026.",
    source_citation_identifier: "MOJ-E-SEJBZJEWJMIOXXA.pdf (p. 1)",
    raw_text: "p.1: ﻯﻮﻋﺪﻟﺍ ﻡﻮﺳﺭ ﻞﻴﺻﺎﻔﺗ\r\n                               12/05/2026           : ﻞﻴﺠﺴﺘﻟﺍ ﺦﻳﺭﺎﺗ 27 ﺕﺍﺭﺎﻘﻌﻟﺍ ﺭﺎﺠﻳﺍ ﻥﻮﻧﺎﻗ-ﺔﻳﺭﺎﺠﻳﻻﺍ ﺕﺎﻋﺯﺎﻨﻤﻟﺍ        25 2026 00738 4               : ﺐﻠﻄﻟﺍ ﻢﻗﺭ\r\n                                                                                                                                                    :\r\n                                                                                                              ﺎﻔﻴﺴﻜﺒﻟﺍ ﺎﻨﻴﻟﺍ ﺪﺿ ﺭﺩﻮﺠﻟﺍ ﻰﻠﻋ ﻙﺭﺎﺒﻣ      ﻥﺍﻮﻨﻌﻟﺍ\r\n                                                                                                  ﺕﺎﺒﻠﻄﻟﺍ\r\n                                     ﻢﺳﺮﻟﺍ                    ﺏﻮﻠﻄﻤﻟﺍ ﻎﻠﺒﻤﻟﺍ                                             ﺐﻠﻄﻟﺍ                                        ﻞﺴﻠﺴﺘﻟﺍ\r\n                                             89.800                       1,440.000        2014 ﺔﻨﺴﻟ 27 ﺕﺍﺭﺎﻘﻌﻟﺍ ﺭﺎﺠﻳﺍ ﻥﻮﻧﺎﻗ ) ﺔﻳﺭﺎﺠﻳﻻﺍ ﺕﺎﻋﺯﺎﻨﻤﻟﺍ ﺕﺎﺒﻟﺎﻄﻣ               1\r\n                                                                                                                                                     ( ﻪﺗﻼﻳﺪﻌﺗﻭ\r\n                                                      .000  :     ﺔﻴﻔﻌﻤﻟﺍ ﻡﻮﺳﺮﻟﺍ ﻉﻮﻤﺠﻣ                          1,440.000      :                       ﺎﻬﺑ ﺐﻟﺎﻄﻤﻟﺍ ﻎﻟﺎﺒﻤﻟﺍ ﻉﻮﻤﺠﻣ\r\n                                                      .000  :     ﺔﻴﺒﺴﻨﻟﺍ ﻡﻮﺳﺮﻟﺍ ﻉﻮﻤﺠﻣ                               91.800    :     (ﺢﺋﺍﻮﻠﻟﺍ ﻡﻮﺳﺭ ﻊﻣ)   ﺓﺭﺮﻘﻤﻟﺍ ﻡﻮﺳﺮﻟﺍ ﻉﻮﻤﺠﻣ\r\n                                                  91.800    :   ﺔﻤﻠﺘﺴﻤﻟﺍ ﻡﻮﺳﺮﻟﺍ ﻉﻮﻤﺠﻣ                                    .000  :                          ﺔﻠﺟﺆﻤﻟﺍ ﻡﻮﺳﺮﻟﺍ ﻉﻮﻤﺠﻣ\r\n                                                                                    ﺔﻋﻮﻓﺪﻤﻟﺍ ﺔﻟﺎﻔﻜﻟﺍﻭ ﻡﻮﺳﺮﻟﺍ ﺓﺪﺻﺭﺍ\r\n       ﺔﻟﺎﻔﻜﻟﺍ ﺪﻴﺻﺭ ﺦﻳﺭﺎﺗ        ﺔﻟﺎﻔﻜﻟﺍ ﺪﻴﺻﺭ ﻎﻠﺒﻣ         ﺔﻟﺎﻔﻜﻟﺍ ﺪﻴﺻﺭ ﻢﻗﺭ         ﻡﻮﺳﺮﻟﺍ ﺪﻴﺻﺭ ﺦﻳﺭﺎﺗ         ﻡﻮﺳﺮﻟﺍ ﺪﻴﺻﺭ ﻎﻠﺒﻣ          ﻡﻮﺳﺮﻟﺍ ﺪﻴﺻﺭ ﻢﻗﺭ                       ﻒﻠﻤﻟﺍ ﻢﻗﺭ\r\n                                                                                      12-05-2026                             91.800   RC65002977952                       252026007384"
  },
  {
    id: "EV_REAL_005",
    exhibit_id: "EX-REAL-05",
    filename: "MOJ-E-TBITWKVQPAILYIR.pdf",
    document_type: "Case Motions and Petitions Register",
    date: "2026-05-13",
    source: "Kingdom of Bahrain - Ministry of Justice Portal",
    author_or_issuer: "Ministry of Justice",
    page_count: 3,
    authentication_status: "UNVERIFIED",
    confidentiality_status: "RESTRICTED",
    duplicate_status: "ORIGINAL",
    ocr_status: "COMPLETED",
    completeness_status: "COMPLETE",
    data_origin: "USER_IMPORTED",
    related_events: [],
    related_routes: [],
    notes: "List of submitted applications and orders in Case 252026007384 (14,821 characters across 3 pages).",
    source_citation_identifier: "MOJ-E-TBITWKVQPAILYIR.pdf (p. 1-3)",
    raw_text: "p.1: 252026007384 ﻯﻮﻋﺪﻟﺍ ﻰﻠﻋ ﺔﻣﺪﻘﻤﻟﺍ ﺕﺎﺒﻠﻄﻟﺍ ﺔﻤﺋﺎﻗ\r\n                                                       ﻥﻼﻋﻻﺍ ﻪﻠﻴﺳﻭ ﻦﻋ ﻡﻼﻌﺘﺳﻻﺍ :                                                        LW776870:\r\n                                                                                     ﺐﻠﻄﻟﺍ ﻒﺻﻭ                                                                     ﺐﻠﻄﻟﺍ ﻢﻗﺭ\r\n                                                                               :                                            21-08-2026 23:00:40:\r\n                                                                                          ﻑﺮﻄﻟﺍ                                                                  ﺐﻠﻄﻟﺍ ﺦﻳﺭﺎﺗ\r\n      ﻢﻟ 38457003 ﻎﻴﻠﺒﺘﻠﻟ ﻡﺪﺨﺘﺴﻤﻟﺍ ﻢﻗﺮﻟﺍﻭ ﺔﺴﻠﺠﻟﺍ ﻩﺬﻬﺑ ﺔﺴﻤﺘﻠﻤﻠﻟ ﺭﺎﻄﺧﺍ ﻱﺍ ﻞﺼﻳ ﻢﻟ 252026007384 ﻢﻗﺭ ﻯﻮﻋﺩ 2026 08 16 ﺦﻳﺭﺎﺘﺑ ﺱﺎﻤﺘﻟﻻﺍ ﺔﺴﻠﺠﻟ ﻎﻴﻠﺒﺗ ﺭﻭﺪﺻ ﻡﺪﻋ :         ﺐﻠﻄﻟﺍ ﻡﺪﻘﻣ ﻥﺎﻴﺑ\r\n                                                                                                                       ﺔﻌﺟﺍﺮﻤﻟﺍ ﺲﻤﺘﻠﻧ ﺎﻬﻤﺳﺎﺑ ﻼﺠﺴﻣ ﻦﻜﻳ\r\n                                                                 21-08-2026:                                                            ﻝﻮﺒﻘﻣ       :\r\n                                                                                    ﺀﺍﺮﺟﻻﺍ ﺦﻳﺭﺎﺗ                                                                       ﺔﻟﺎﺤﻟﺍ\r\n                                                                                                                                                    : ﻢﺴﻘﻟﺍ \\ ﻲﺿﺎﻘﻟﺍ ﺕﺎﻈﺣﻼﻣ\r\n                                                   ﺔﻴﻜﻨﺒﻟﺍ ﺕﺎﺑﺎﺴﺤﻟﺍ ﻰﻠﻋ ﻢﻴﻤﻌﺘﻟﺍ ﻊﻓﺭ :                                                  LW771768:\r\n                                                                                     ﺐﻠﻄﻟﺍ ﻒﺻﻭ                                                                     ﺐﻠﻄﻟﺍ ﻢﻗﺭ\r\n                                                                    ﺎﻔﻴﺴﻜﺒﻟﺍ ﺎﻨﻴﻟﺍ\r\n                                                                               :                                            05-08-2026 11:19:56:\r\n                                                                                          ﻑﺮﻄﻟﺍ                                                                  ﺐﻠﻄﻟﺍ ﺦﻳﺭﺎﺗ\r\n      ﺮﻳﻭﺰﺘﻟﺍ ﺕﻮﺒﺜﻟ 252026007384 ﻯﻮﻋﺪﻟﺍ ﻲﻓ 770277LW ﻢﻗﺮﺑ ﺎﻴﻤﺳﺭ ﻢﻜﺤﻟﺍ ﻲﻓ ﺮﻈﻨﻟﺍ ﺓﺩﺎﻋﺇ ﺐﻠﻃ ﺭﺎﻬﺷﺇﻭ ﻞﻴﺠﺴﺘﻟ ﺍﺭﻮﻓ ﺔﻴﻜﻨﺒﻟﺍ ﺕﺎﺑﺎﺴﺤﻟﺍ ﺮﻈﺣ ﻚﻓﻭ ﺰﺠﺤﻟﺍ ﻊﻓﺭ ﺲﻤﺘﻠﻧ :         ﺐﻠﻄﻟﺍ ﻡﺪﻘﻣ ﻥﺎﻴﺑ\r\n                                                                                                           ﺔﻤﻜﺤﻤﻟﺍ ﺔﻨﻳﺰﺨﺑ ﻎﻟﺎﺒﻤﻟﺍ ﻉﺍﺪﻳﺇﻭ ﺓﺮﺟﻷﺍ ﻞﻣﺎﻛ ﺩﺍﺪﺳﻭ\r\n                                                                 05-08-2026:                                                           ﺽﻮﻓﺮﻣ        :\r\n                                                                                    ﺀﺍﺮﺟﻻﺍ ﺦﻳﺭﺎﺗ                                                                       ﺔﻟﺎﺤﻟﺍ\r\n                                                                                                                                                    : ﻢﺴﻘﻟﺍ \\ ﻲﺿﺎﻘﻟﺍ ﺕﺎﻈﺣﻼﻣ\r\n                                                 ﻢﻜﺤﻟﺍ ﻲﻓ ﺮﻈﻨﻟﺍ ﺓﺩﺎﻋﺍ ﺔﺤﺋﻻ ﻞﻴﺠﺴﺗ :                                                     LW770277:\r\n                                                                                     ﺐﻠﻄﻟﺍ ﻒﺻﻭ                                                                     ﺐﻠﻄﻟﺍ ﻢﻗﺭ\r\n                                                                               :                                            01-08-2026 06:38:58:\r\n                                                                                          ﻑﺮﻄﻟﺍ                                                                  ﺐﻠﻄﻟﺍ ﺦﻳﺭﺎﺗ\r\n                                                          RC65003082647:                                                                       30.000 :          ﺐﻠﻄﻟﺍ ﻡﻮﺳﺭ\r\n                                                                                      ﺪﻴﺻﺮﻟﺍ ﻢﻗﺭ\r\n        ﻚﻓ 042026162064 ﺬﻴﻔﻨﺘﻟﺍ ﻒﻠﻣ ﻒﻗﻭ ﺍﺪﺟ ﺔﻠﺠﻌﺘﺴﻣ ﺔﻔﺼﺑ ﺐﻠﻃﺃ ﺮﺧﺁ ﺺﺨﺸﻟ ﺔﻘﺸﻟﺍ ﺮﺟﺃﻭ 2023 ﻲﻓ ﺪﻘﻌﻟﺍ ﺀﺎﻬﻧﺈﺑ ﻲﻋﺪﻤﻟﺍ ﺮﻗﺃ ﺮﻳﻭﺰﺘﻟﺍﻭ ﺶﻐﻟﺍ ﺕﻮﺒﺜﻟ ﺮﻈﻧ ﺓﺩﺎﻋﺇ ﺱﺎﻤﺘﻟﺍ :      ﺐﻠﻄﻟﺍ ﻡﺪﻘﻣ ﻥﺎﻴﺑ\r\n                                                                            ﺔﻘﻓﺮﻤﻟﺍ ﺓﺮﻛﺬﻤﻟﺎﺑ ﻞﻴﺻﺎﻔﺘﻟﺍ ﺱﺎﻤﺘﻟﻻﺍ ﻲﻓ ﻞﺼﻔﻟﺍ ﻦﻴﺤﻟ ﺮﻔﺴﻟﺍ ﻦﻣ ﻊﻨﻤﻟﺍ ﻊﻓﺭﻭ ﻲﻜﻨﺒﻟﺍ ﺰﺠﺤﻟﺍ\r\n                                                                 01-08-2026:                                                            ﻝﻮﺒﻘﻣ       :\r\n                                                                                    ﺀﺍﺮﺟﻻﺍ ﺦﻳﺭﺎﺗ                                                                       ﺔﻟﺎﺤﻟﺍ\r\n                                                                                                                                                    : ﻢﺴﻘﻟﺍ \\ ﻲﺿﺎﻘﻟﺍ ﺕﺎﻈﺣﻼﻣ\r\n                                                           ﺔﻳﺬﻴﻔﻨﺘﻟﺍ ﺔﻐﻴﺼﻟﺍ ﻡﻼﺘﺳﺍ :                                                    LW765685:\r\n                                                                                     ﺐﻠﻄﻟﺍ ﻒﺻﻭ                                                                     ﺐﻠﻄﻟﺍ ﻢﻗﺭ\r\n                                                                ﺪﻤﺤﻣ ﺭﻮﻧﺍ ﺔﻣﺎﺳﺍ\r\n                                                                               :                                            19-07-2026 09:01:52:\r\n                                                                                          ﻑﺮﻄﻟﺍ                                                                  ﺐﻠﻄﻟﺍ ﺦﻳﺭﺎﺗ\r\n                                                          RC65003062873:                                                                       10.000 :          ﺐﻠﻄﻟﺍ ﻡﻮﺳﺭ\r\n                                                                                      ﺪﻴﺻﺮﻟﺍ ﻢﻗﺭ\r\n                                                                                                                                                   - :        ﺐﻠﻄﻟﺍ ﻡﺪﻘﻣ ﻥﺎﻴﺑ\r\n                                                                 19-07-2026:                                                            ﻝﻮﺒﻘﻣ       :\r\n                                                                                    ﺀﺍﺮﺟﻻﺍ ﺦﻳﺭﺎﺗ                                                                       ﺔﻟﺎﺤﻟﺍ\r\n                                                                                                                                                    : ﻢﺴﻘﻟﺍ \\ ﻲﺿﺎﻘﻟﺍ ﺕﺎﻈﺣﻼﻣ\n\np.2: 252026007384 ﻯﻮﻋﺪﻟﺍ ﻰﻠﻋ ﺔﻣﺪﻘﻤﻟﺍ ﺕﺎﺒﻠﻄﻟﺍ ﺔﻤﺋﺎﻗ\r\n                                                                     ﺮﻔﺴﻟﺍ ﻦﻣ ﻊﻨﻤﻟﺍ ﻊﻓﺭ :                                                              LW758978:\r\n                                                                                               ﺐﻠﻄﻟﺍ ﻒﺻﻭ                                                                              ﺐﻠﻄﻟﺍ ﻢﻗﺭ\r\n                                                                            ﺎﻔﻴﺴﻜﺒﻟﺍ ﺎﻨﻴﻟﺍ\r\n                                                                                        :                                                 24-06-2026 15:31:06:\r\n                                                                                                     ﻑﺮﻄﻟﺍ                                                                          ﺐﻠﻄﻟﺍ ﺦﻳﺭﺎﺗ\r\n        ﻞﻳﺮﺑﺃ ؟ ﺦﻳﺭﺎﺘﺑ ﺭﺎﻘﻌﻟﺍ ﺀﻼﺧﺇﻭ ﺔﻴﻜﻨﺒﻟﺍ ﺕﻼﻳﻮﺤﺘﻟﺍ ﻝﻼﺧ ﻦﻣ ﺔﻴﻟﺎﻤﻟﺍ ﻲﺘﻣﺫ ﺓﺀﺍﺮﺑ ﻰﻠﻋ ﺔﻌﻃﺎﻗ ﺔﻟﺩﺃ ﻖﻓﺭﺃﻭ ﺎﻴﻧﻮﻧﺎﻗ ﻲﻧﻼﻋﺇ ﻥﻭﺩ ﺎﻴﺑﺎﻴﻏ ﺭﺪﺻ ﻢﻜﺤﻟﺍ ﻥﺃ ﺚﻴﺣ ﺮﻔﺴﻟﺍ ﻊﻨﻣ ﻊﻓﺭ ﺐﻠﻃﺃ ﺎﻧﺃ :          ﺐﻠﻄﻟﺍ ﻡﺪﻘﻣ ﻥﺎﻴﺑ\r\n                                                                ﺩﻼﺒﻟﺍ ﺓﺭﺩﺎﻐﻤﺑ ﻲﻟ ﺡﺎﻤﺴﻠﻟ ﻊﻨﻤﻟﺍ ﻊﻓﺭ ﻢﻜﺘﻟﺍﺪﻋ ﻦﻣ ﺐﻠﻃﺃﻭ ﻲﻋﺪﻤﻟﺍ ﻩﺎﺠﺗ ﻲﻟﺎﻣ ﻡﺍﺰﺘﻟﺍ ﻱﺃ ﻚﻠﻣﺃ ﺪﻋﺃ ﻢﻟ ﻲﻨﻧﺃ ﺎﻤﻛ ؟؟؟؟\r\n                                                                        24-06-2026:                                                                   ﺽﻮﻓﺮﻣ           :\r\n                                                                                              ﺀﺍﺮﺟﻻﺍ ﺦﻳﺭﺎﺗ                                                                                ﺔﻟﺎﺤﻟﺍ\r\n                                                                                                                                                                      : ﻢﺴﻘﻟﺍ \\ ﻲﺿﺎﻘﻟﺍ ﺕﺎﻈﺣﻼﻣ\r\n                                                                        ﺔﻌﻓﺍﺮﻤﻟﺍ ﺏﺎﺑ ﺢﺘﻓ :                                                             LW754884:\r\n                                                                                               ﺐﻠﻄﻟﺍ ﻒﺻﻭ                                                                              ﺐﻠﻄﻟﺍ ﻢﻗﺭ\r\n                                                                                        :                                                 11-06-2026 08:53:22:\r\n                                                                                                     ﻑﺮﻄﻟﺍ                                                                          ﺐﻠﻄﻟﺍ ﺦﻳﺭﺎﺗ\r\n                                                                                                                                                                      :         ﺐﻠﻄﻟﺍ ﻡﺪﻘﻣ ﻥﺎﻴﺑ\r\n                                                                        11-06-2026:                                                                   ﺽﻮﻓﺮﻣ           :\r\n                                                                                              ﺀﺍﺮﺟﻻﺍ ﺦﻳﺭﺎﺗ                                                                                ﺔﻟﺎﺤﻟﺍ\r\n                                                                                                                                ﺎﻬﻴﻓ ﻢﻜﺣ ﺭﺍﺪﺻﺍ ﻢﺗ ﺪﻗﻭ ﺔﻣﻮﺴﺤﻣ ﻯﻮﻋﺪﻟﺍ :\r\n                                                                                                                                                                        ﻢﺴﻘﻟﺍ \\ ﻲﺿﺎﻘﻟﺍ ﺕﺎﻈﺣﻼﻣ\r\n                                                                     ﺮﻔﺴﻟﺍ ﻦﻣ ﻊﻨﻤﻟﺍ ﻊﻓﺭ :                                                              LW752510:\r\n                                                                                               ﺐﻠﻄﻟﺍ ﻒﺻﻭ                                                                              ﺐﻠﻄﻟﺍ ﻢﻗﺭ\r\n                                                                            ﺎﻔﻴﺴﻜﺒﻟﺍ ﺎﻨﻴﻟﺍ\r\n                                                                                        :                                                 03-06-2026 18:39:35:\r\n                                                                                                     ﻑﺮﻄﻟﺍ                                                                          ﺐﻠﻄﻟﺍ ﺦﻳﺭﺎﺗ\r\n                   ﻊﻨﻤﻟﺍ ﻊﻓﺭ ﺲﻤﺘﻠﻧ ﺔﻘﺸﻟﺍ ﺎﻨﻴﻠﺧﺃﻭ ﺔﻘﻓﺮﻣ ﺔﻴﻜﻨﺑ ﺕﻼﻳﻮﺤﺘﺑ ﻞﻳﺮﺑﺃﻭ ﺱﺭﺎﻣﻭ ﺮﻳﺍﺮﺒﻓ ﺭﺎﺠﻳﺇ ﻞﻣﺎﻛ ﺎﻧﺩﺪﺳﻭ ﻲﺑﺎﻴﻏ ﻢﻜﺤﻟﺍ 252026007384 ﻯﻮﻋﺩ ﺮﻔﺴﻟﺍ ﻊﻨﻣ ﻊﻓﺭ ﺐﻠﻃ :                    ﺐﻠﻄﻟﺍ ﻡﺪﻘﻣ ﻥﺎﻴﺑ\r\n                                                                        05-06-2026:                                                                   ﺽﻮﻓﺮﻣ           :\r\n                                                                                              ﺀﺍﺮﺟﻻﺍ ﺦﻳﺭﺎﺗ                                                                                ﺔﻟﺎﺤﻟﺍ\r\n                                                                                                                                                                      : ﻢﺴﻘﻟﺍ \\ ﻲﺿﺎﻘﻟﺍ ﺕﺎﻈﺣﻼﻣ\n\np.3: 252026007384 ﻯﻮﻋﺪﻟﺍ ﻰﻠﻋ ﺔﻣﺪﻘﻤﻟﺍ ﺕﺎﺒﻠﻄﻟﺍ ﺔﻤﺋﺎﻗ\r\n                                                                       ﺮﻔﺴﻟﺍ ﻦﻣ ﻊﻨﻤﻟﺍ :                                                           LW745888:\r\n                                                                                            ﺐﻠﻄﻟﺍ ﻒﺻﻭ                                                                           ﺐﻠﻄﻟﺍ ﻢﻗﺭ\r\n                                                                          ﺎﻔﻴﺴﻜﺒﻟﺍ ﺎﻨﻴﻟﺍ\r\n                                                                                     :                                                12-05-2026 13:09:45:\r\n                                                                                                 ﻑﺮﻄﻟﺍ                                                                        ﺐﻠﻄﻟﺍ ﺦﻳﺭﺎﺗ\r\n                                                               RC65002978011:                                                                            30.000 :             ﺐﻠﻄﻟﺍ ﻡﻮﺳﺭ\r\n                                                                                             ﺪﻴﺻﺮﻟﺍ ﻢﻗﺭ\r\n                                                                                                                                                               - :         ﺐﻠﻄﻟﺍ ﻡﺪﻘﻣ ﻥﺎﻴﺑ\r\n                                                                      13-05-2026:                                                                  ﻝﻮﺒﻘﻣ        :\r\n                                                                                           ﺀﺍﺮﺟﻻﺍ ﺦﻳﺭﺎﺗ                                                                             ﺔﻟﺎﺤﻟﺍ\r\n                                                                                                                                                                : ﻢﺴﻘﻟﺍ \\ ﻲﺿﺎﻘﻟﺍ ﺕﺎﻈﺣﻼﻣ\r\n                              3024097245EN:               ﺏﺎﻄﺨﻟﺍ ﺰﻣﺭ                                                                                     ﺮﻔﺴﻟﺍ ﻦﻣ ﻊﻨﻣ :        ﺏﺎﻄﺨﻟﺍ ﻢﺳﺃ\r\n                                   13-05-2026:          ﺭﺍﺪﺻﻹﺍ ﺦﻳﺭﺎﺗ                                                                               ﺎﻴﻧﻭﺮﺘﻜﻟﺍ ﻝﺎﺳﺭﻻﺍ ﻢﺗ :      ﻎﻴﻠﺒﺘﻟﺍ ﺔﻘﻳﺮﻃ\r\n                                                                                                                                                                      :       ﺏﺎﻄﺨﻟﺍ ﺺﻧ\r\n                                                                                                                         4/00738/2026/25 : ﻢﻗﺭ ﻯﻮﻋﺪﻟﺍ ﻰﻟﺇ ﺍﺩﺎﻨﺘﺳﺍ\r\n                                                                              800694392 ﻲﺼﺨﺷ ﻢﻗﺮﻟﺍ ﺎﻔﻴﺴﻜﺒﻟﺍ ﺎﻨﻴﻟﺍ ﻪﻴﻠﻋ ﻲﻋﺪﻤﻟﺍ ﺪﺿ ﺭﺩﻮﺠﻟﺍ ﻰﻠﻋ ﻙﺭﺎﺒﻣ  : ﻦﻣ ﺔﻋﻮﻓﺮﻤﻟﺍ\r\n                                                                                                                                                 .ﺎﻴﺳﻭﺭ   : ﻪﻴﺴﻨﺠﻟﺍ ﺪﻠﺑ\r\n                                                                                                          .ﺭﺎﻨﻳﺩ 1531.8 ﻩﺭﺪﻗﻭ ﻎﻠﺒﻣ : ﻡﻮﺳﺮﻟﺍ ﻊﻣ ﻪﺑ ﻢﻜﺤﻟﺍ ﺏﻮﻠﻄﻤﻟﺍ ﻎﻠﺒﻤﻠﻟ\r\n                                 .ﻩﻼﻋﺃ ﺭﻮﻛﺬﻤﻟﺍ ﻎﻠﺒﻤﻟﺍ ﺩﺍﺪﺳ ﻝﺎﺣ ﻲﻓ ﺎﻴﺋﺎﻘﻠﺗ ﻊﻨﻤﻟﺍ ﻊﻓﺮﻳﻭ ، ﺓﺭﻮﻛﺬﻤﻟﺍ ﻯﻮﻋﺪﻟﺍ ﺐﺟﻮﻤﺑ ﻚﻟﺫﻭ ،ﺮﻔﺴﻟﺍ ﻦﻣ ﻩﻼﻋﺃ ﺭﻮﻛﺬﻤﻟﺍ ﻪﻴﻠﻋ ﻲﻋﺪﻤﻟﺍ ﻊﻨﻣ ﺔﻤﻜﺤﻤﻟﺍ ﺮﻣﺄﺗ ﺍﺬﻟ\r\n                                                                                                                           2026/05/13 ﺦﻳﺭﺎﺘﺑ ﺕﺍﺯﻮﺠﻟﺍ ﻦﻣ ﺀﺍﺮﺟﻻﺍ ﻢﺗ :              ﺔﻬﺠﻟﺍ ﺩﺭ"
  },
  {
    id: "EV_REAL_006",
    exhibit_id: "EX-REAL-06",
    filename: "MOJ-E-TNCIQZVUXLYNTDF.pdf",
    document_type: "Case Letters and Notices Listing",
    date: "2026-05-13",
    source: "Kingdom of Bahrain - Ministry of Justice Portal",
    author_or_issuer: "Ministry of Justice",
    page_count: 2,
    authentication_status: "UNVERIFIED",
    confidentiality_status: "RESTRICTED",
    duplicate_status: "NEAR_DUPLICATE",
    ocr_status: "COMPLETED",
    completeness_status: "COMPLETE",
    data_origin: "USER_IMPORTED",
    related_events: [],
    related_routes: [],
    notes: "Issued letters and notices for Case 252026007384. Page 1 matches EX-REAL-03 verbatim. Deduplication deferred per instruction.",
    source_citation_identifier: "MOJ-E-TNCIQZVUXLYNTDF.pdf (p. 1-2)",
    raw_text: "p.1: 252026007384 ﻢﻗﺭ ﻯﻮﻋﺪﻟﺍ ﻰﻠﻋ ﺓﺭﺩﺎﺼﻟﺍ ﻞﺋﺎﺳﺮﻟﺍﻭ ﺕﺎﺑﺎﻄﺨﻟﺍ\r\n                                                              ﺔﻋﻮﻓﺮﻣ ﺮﻴﻏ \r\n     CS3025349532:                                        :\r\n                                        ﺭﻮﻀﺤﻟﺍﻭ ﺪﻴﻋﺍﻮﻤﻟﺍ ﻝﻭﺪﺟﻭ ﻯﻮﻋﺩ ﺔﺤﺋﻻ ﻥﻼﻋﺍ\r\n              ﺏﺎﻄﺨﻟﺍ ﺰﻣﺭ                                  ﻎﻴﻠﺒﺘﻟﺍ \\  ﺏﺎﻄﺨﻟﺍ ﻢﺳﺃ\r\n                                                    900803452:\r\n       28-09-2026:\r\n                                                              ﻑﺮﻄﻟﺍ ﺔﻳﻮﻫ\r\n             ﺭﺍﺪﺻﻻﺍ ﺦﻳﺭﺎﺗ\r\n                                     35330541  ﻢﻗﺮﻟﺍ ﻰﻠﻋ ﺔﻴﺼﻧ ﺔﻟﺎﺳﺭ ﻝﺎﺳﺭﺍ ﻖﻳﺮﻃ ﻦﻋ ﻎﻴﻠﺒﺘﻟﺍ ﻢﺗ :\r\n                                                              ﻎﻴﻠﺒﺘﻟﺍ ﺔﻘﻳﺮﻃ\r\n                           lawyer.ahmedaldoseri@gmail.com ﻰﻠﻋ ﻲﻧﻭﺮﺘﻜﻟﺍ ﺪﻳﺮﺑ ﻝﺎﺳﺭﺍ ﻖﻳﺮﻃ ﻦﻋ ﻎﻴﻠﺒﺘﻟﺍ ﻢﺗ\r\n                                                          :    ﻪﻬﺠﻟﺍ ﺩﺭ\r\n     CS3024255405:                                        :\r\n                                                    ﺭﻮﻀﺤﻟﺎﺑ ﻥﻼﻋﺍ\r\n              ﺏﺎﻄﺨﻟﺍ ﺰﻣﺭ                                  ﻎﻴﻠﺒﺘﻟﺍ \\  ﺏﺎﻄﺨﻟﺍ ﻢﺳﺃ\r\n                                                    520105435:\r\n       02-06-2026:\r\n                                                              ﻑﺮﻄﻟﺍ ﺔﻳﻮﻫ\r\n             ﺭﺍﺪﺻﻻﺍ ﺦﻳﺭﺎﺗ\r\n                                     38378260  ﻢﻗﺮﻟﺍ ﻰﻠﻋ ﺔﻴﺼﻧ ﺔﻟﺎﺳﺭ ﻝﺎﺳﺭﺍ ﻖﻳﺮﻃ ﻦﻋ ﻎﻴﻠﺒﺘﻟﺍ ﻢﺗ :\r\n                                                              ﻎﻴﻠﺒﺘﻟﺍ ﺔﻘﻳﺮﻃ\r\n                             info@osamaanwarlawfirm.com ﻰﻠﻋ ﻲﻧﻭﺮﺘﻜﻟﺍ ﺪﻳﺮﺑ ﻝﺎﺳﺭﺍ ﻖﻳﺮﻃ ﻦﻋ ﻎﻴﻠﺒﺘﻟﺍ ﻢﺗ\r\n                                                          :    ﻪﻬﺠﻟﺍ ﺩﺭ\r\n     CS3024255406:                                        :\r\n                                                    ﺭﻮﻀﺤﻟﺎﺑ ﻥﻼﻋﺍ\r\n              ﺏﺎﻄﺨﻟﺍ ﺰﻣﺭ                                  ﻎﻴﻠﺒﺘﻟﺍ \\  ﺏﺎﻄﺨﻟﺍ ﻢﺳﺃ\r\n                                                    800694392:\r\n       02-06-2026:\r\n                                                              ﻑﺮﻄﻟﺍ ﺔﻳﻮﻫ\r\n             ﺭﺍﺪﺻﻻﺍ ﺦﻳﺭﺎﺗ\r\n                                     38457003  ﻢﻗﺮﻟﺍ ﻰﻠﻋ ﺔﻴﺼﻧ ﺔﻟﺎﺳﺭ ﻝﺎﺳﺭﺍ ﻖﻳﺮﻃ ﻦﻋ ﻎﻴﻠﺒﺘﻟﺍ ﻢﺗ :\r\n                                                              ﻎﻴﻠﺒﺘﻟﺍ ﺔﻘﻳﺮﻃ\r\n                                            ﻰﻠﻋ ﻲﻧﻭﺮﺘﻜﻟﺍ ﺪﻳﺮﺑ ﻝﺎﺳﺭﺍ ﻖﻳﺮﻃ ﻦﻋ ﻎﻴﻠﺒﺘﻟﺍ ﻢﺗ\r\n                                                          :    ﻪﻬﺠﻟﺍ ﺩﺭ\r\n     CS3024255407:                                        :\r\n                                                    ﺭﻮﻀﺤﻟﺎﺑ ﻥﻼﻋﺍ\r\n              ﺏﺎﻄﺨﻟﺍ ﺰﻣﺭ                                  ﻎﻴﻠﺒﺘﻟﺍ \\  ﺏﺎﻄﺨﻟﺍ ﻢﺳﺃ\r\n                                                    621013528:\r\n       02-06-2026:\r\n                                                              ﻑﺮﻄﻟﺍ ﺔﻳﻮﻫ\r\n             ﺭﺍﺪﺻﻻﺍ ﺦﻳﺭﺎﺗ\r\n                                     38378260  ﻢﻗﺮﻟﺍ ﻰﻠﻋ ﺔﻴﺼﻧ ﺔﻟﺎﺳﺭ ﻝﺎﺳﺭﺍ ﻖﻳﺮﻃ ﻦﻋ ﻎﻴﻠﺒﺘﻟﺍ ﻢﺗ :\r\n                                                              ﻎﻴﻠﺒﺘﻟﺍ ﺔﻘﻳﺮﻃ\r\n                             info@osamaanwarlawfirm.com ﻰﻠﻋ ﻲﻧﻭﺮﺘﻜﻟﺍ ﺪﻳﺮﺑ ﻝﺎﺳﺭﺍ ﻖﻳﺮﻃ ﻦﻋ ﻎﻴﻠﺒﺘﻟﺍ ﻢﺗ\r\n                                                          :    ﻪﻬﺠﻟﺍ ﺩﺭ\n\np.2: 252026007384 ﻢﻗﺭ ﻯﻮﻋﺪﻟﺍ ﻰﻠﻋ ﺓﺭﺩﺎﺼﻟﺍ ﻞﺋﺎﺳﺮﻟﺍﻭ ﺕﺎﺑﺎﻄﺨﻟﺍ\r\n     EN3024097245:                                        :\r\n                                                     ﺮﻔﺴﻟﺍ ﻦﻣ ﻊﻨﻣ\r\n              ﺏﺎﻄﺨﻟﺍ ﺰﻣﺭ                                  ﻎﻴﻠﺒﺘﻟﺍ \\  ﺏﺎﻄﺨﻟﺍ ﻢﺳﺃ\r\n                                                    800694392:\r\n       13-05-2026:\r\n                                                              ﻑﺮﻄﻟﺍ ﺔﻳﻮﻫ\r\n             ﺭﺍﺪﺻﻻﺍ ﺦﻳﺭﺎﺗ\r\n                                                   ﺎﻴﻧﻭﺮﺘﻜﻟﺍ ﻝﺎﺳﺭﻻﺍ ﻢﺗ :\r\n                                                              ﻎﻴﻠﺒﺘﻟﺍ ﺔﻘﻳﺮﻃ\r\n                                                          :\r\n                                                              ﺏﺎﻄﺨﻟﺍ ﺺﻧ\r\n                                          4/00738/2026/25 : ﻢﻗﺭ ﻯﻮﻋﺪﻟﺍ ﻰﻟﺇ ﺍﺩﺎﻨﺘﺳﺍ\r\n                           800694392 ﻲﺼﺨﺷ ﻢﻗﺮﻟﺍ ﺎﻔﻴﺴﻜﺒﻟﺍ ﺎﻨﻴﻟﺍ ﻪﻴﻠﻋ ﻲﻋﺪﻤﻟﺍ ﺪﺿ ﺭﺩﻮﺠﻟﺍ ﻰﻠﻋ ﻙﺭﺎﺒﻣ  : ﻦﻣ ﺔﻋﻮﻓﺮﻤﻟﺍ\r\n                                                  .ﺎﻴﺳﻭﺭ   : ﻪﻴﺴﻨﺠﻟﺍ ﺪﻠﺑ\r\n                                     .ﺭﺎﻨﻳﺩ 1531.8 ﻩﺭﺪﻗﻭ ﻎﻠﺒﻣ : ﻡﻮﺳﺮﻟﺍ ﻊﻣ ﻪﺑ ﻢﻜﺤﻟﺍ ﺏﻮﻠﻄﻤﻟﺍ ﻎﻠﺒﻤﻠﻟ\r\n           .ﻩﻼﻋﺃ ﺭﻮﻛﺬﻤﻟﺍ ﻎﻠﺒﻤﻟﺍ ﺩﺍﺪﺳ ﻝﺎﺣ ﻲﻓ ﺎﻴﺋﺎﻘﻠﺗ ﻊﻨﻤﻟﺍ ﻊﻓﺮﻳﻭ ، ﺓﺭﻮﻛﺬﻤﻟﺍ ﻯﻮﻋﺪﻟﺍ ﺐﺟﻮﻤﺑ ﻚﻟﺫﻭ ،ﺮﻔﺴﻟﺍ ﻦﻣ ﻩﻼﻋﺃ ﺭﻮﻛﺬﻤﻟﺍ ﻪﻴﻠﻋ ﻲﻋﺪﻤﻟﺍ ﻊﻨﻣ ﺔﻤﻜﺤﻤﻟﺍ ﺮﻣﺄﺗ ﺍﺬﻟ\r\n                                                          :    ﻪﻬﺠﻟﺍ ﺩﺭ\r\n     CS3024088684:                                        :\r\n                                        ﺭﻮﻀﺤﻟﺍﻭ ﺪﻴﻋﺍﻮﻤﻟﺍ ﻝﻭﺪﺟﻭ ﻯﻮﻋﺩ ﺔﺤﺋﻻ ﻥﻼﻋﺍ\r\n              ﺏﺎﻄﺨﻟﺍ ﺰﻣﺭ                                  ﻎﻴﻠﺒﺘﻟﺍ \\  ﺏﺎﻄﺨﻟﺍ ﻢﺳﺃ\r\n                                                    800694392:\r\n       12-05-2026:\r\n                                                              ﻑﺮﻄﻟﺍ ﺔﻳﻮﻫ\r\n             ﺭﺍﺪﺻﻻﺍ ﺦﻳﺭﺎﺗ\r\n                                     38457003  ﻢﻗﺮﻟﺍ ﻰﻠﻋ ﺔﻴﺼﻧ ﺔﻟﺎﺳﺭ ﻝﺎﺳﺭﺍ ﻖﻳﺮﻃ ﻦﻋ ﻎﻴﻠﺒﺘﻟﺍ ﻢﺗ :\r\n                                                              ﻎﻴﻠﺒﺘﻟﺍ ﺔﻘﻳﺮﻃ\r\n                                                          :    ﻪﻬﺠﻟﺍ ﺩﺭ\r\n     CS3024088685:                                        :\r\n                                        ﺭﻮﻀﺤﻟﺍﻭ ﺪﻴﻋﺍﻮﻤﻟﺍ ﻝﻭﺪﺟﻭ ﻯﻮﻋﺩ ﺔﺤﺋﻻ ﻥﻼﻋﺍ\r\n              ﺏﺎﻄﺨﻟﺍ ﺰﻣﺭ                                  ﻎﻴﻠﺒﺘﻟﺍ \\  ﺏﺎﻄﺨﻟﺍ ﻢﺳﺃ\r\n                                                    621013528:\r\n       12-05-2026:\r\n                                                              ﻑﺮﻄﻟﺍ ﺔﻳﻮﻫ\r\n             ﺭﺍﺪﺻﻻﺍ ﺦﻳﺭﺎﺗ\r\n                                     38378260  ﻢﻗﺮﻟﺍ ﻰﻠﻋ ﺔﻴﺼﻧ ﺔﻟﺎﺳﺭ ﻝﺎﺳﺭﺍ ﻖﻳﺮﻃ ﻦﻋ ﻎﻴﻠﺒﺘﻟﺍ ﻢﺗ :\r\n                                                              ﻎﻴﻠﺒﺘﻟﺍ ﺔﻘﻳﺮﻃ\r\n                           osama@osamaanwarlawfirm.com ﻰﻠﻋ ﻲﻧﻭﺮﺘﻜﻟﺍ ﺪﻳﺮﺑ ﻝﺎﺳﺭﺍ ﻖﻳﺮﻃ ﻦﻋ ﻎﻴﻠﺒﺘﻟﺍ ﻢﺗ\r\n                                                          :    ﻪﻬﺠﻟﺍ ﺩﺭ\r\n     CS3024088683:                                        :\r\n                                        ﺭﻮﻀﺤﻟﺍﻭ ﺪﻴﻋﺍﻮﻤﻟﺍ ﻝﻭﺪﺟﻭ ﻯﻮﻋﺩ ﺔﺤﺋﻻ ﻥﻼﻋﺍ\r\n              ﺏﺎﻄﺨﻟﺍ ﺰﻣﺭ                                  ﻎﻴﻠﺒﺘﻟﺍ \\  ﺏﺎﻄﺨﻟﺍ ﻢﺳﺃ\r\n                                                    520105435:\r\n       12-05-2026:\r\n                                                              ﻑﺮﻄﻟﺍ ﺔﻳﻮﻫ\r\n             ﺭﺍﺪﺻﻻﺍ ﺦﻳﺭﺎﺗ\r\n                                     38378260  ﻢﻗﺮﻟﺍ ﻰﻠﻋ ﺔﻴﺼﻧ ﺔﻟﺎﺳﺭ ﻝﺎﺳﺭﺍ ﻖﻳﺮﻃ ﻦﻋ ﻎﻴﻠﺒﺘﻟﺍ ﻢﺗ :\r\n                                                              ﻎﻴﻠﺒﺘﻟﺍ ﺔﻘﻳﺮﻃ\r\n                             info@osamaanwarlawfirm.com ﻰﻠﻋ ﻲﻧﻭﺮﺘﻜﻟﺍ ﺪﻳﺮﺑ ﻝﺎﺳﺭﺍ ﻖﻳﺮﻃ ﻦﻋ ﻎﻴﻠﺒﺘﻟﺍ ﻢﺗ\r\n                                                          :    ﻪﻬﺠﻟﺍ ﺩﺭ"
  },
  {
    id: "EV_REAL_007",
    exhibit_id: "EX-REAL-07",
    filename: "MOJ-E-WKVDIXSJHBBFQONHYHPO.pdf",
    document_type: "Court Execution File and Proceedings (Scanned)",
    date: "2026-06-15",
    source: "Kingdom of Bahrain - Ministry of Justice Execution Directorate",
    author_or_issuer: "Ministry of Justice - Execution Directorate",
    page_count: 77,
    authentication_status: "UNVERIFIED",
    confidentiality_status: "RESTRICTED",
    duplicate_status: "ORIGINAL",
    ocr_status: "OCR_REQUIRED",
    completeness_status: "PARTIAL",
    data_origin: "USER_IMPORTED",
    related_events: [],
    related_routes: [],
    notes: "SCANNED IMAGE RECORD — OCR_REQUIRED: 77 scanned pages, 0 usable digital text characters. Requires page-by-page optical character recognition.",
    source_citation_identifier: "MOJ-E-WKVDIXSJHBBFQONHYHPO.pdf (77 pages)",
    raw_text: undefined
  },
  {
    id: "EV_REAL_008",
    exhibit_id: "EX-REAL-08",
    filename: "MOJ-E-YCAWMQVCCTRFVFG.pdf",
    document_type: "Ministry Official Notification Record",
    date: "2026-05-13",
    source: "Kingdom of Bahrain - Ministry of Justice Portal",
    author_or_issuer: "Ministry of Justice - Islamic Affairs and Waqf",
    page_count: 4,
    authentication_status: "UNVERIFIED",
    confidentiality_status: "RESTRICTED",
    duplicate_status: "ORIGINAL",
    ocr_status: "COMPLETED",
    completeness_status: "COMPLETE",
    data_origin: "USER_IMPORTED",
    related_events: [],
    related_routes: [],
    notes: "Ministry of Justice official communication register (4 pages, 7,331 characters).",
    source_citation_identifier: "MOJ-E-YCAWMQVCCTRFVFG.pdf (p. 1-4)",
    raw_text: "p.1: ﻦﻳﺮﺤﺒﻟﺍ ﺔﻜﻠﻤﻣ\r\n                                          ﻑﺎﻗﻭﻷﺍﻭ ﺔﻴﻣﻼﺳﻹﺍ ﻥﻮﺌﺸﻟﺍﻭ ﻝﺪﻌﻟﺍ ﺓﺭﺍﺯﻭ\r\n                                                       ﻢﻛﺎﺤﻤﻟﺍ ﺓﺭﺍﺩﺇ\r\n                                                                                25/2026/00738/4  :ﻯﻮﻋﺪﻟﺍ ﻢﻗﺭ\r\n     2026  /  06  /  02      :ﺦﻳﺭﺎﺘﻟﺍ\r\n                                                                                                   :ﻑﺎﻨﺌﺘﺳﻻﺍ ﻢﻗﺭ\r\n                     1\r\n                         :ﺔﺤﻔﺼﻟﺍ ﻢﻗﺭ\r\n                                                                                                     :ﻦﻌﻄﻟﺍ ﻢﻗﺭ\r\n                                                                                                  \r\n                               ﺔﻨﻣﺎﺜﻟﺍ ﺔﻴﻧﺪﻤﻟﺍ ﻯﺮﺒﻜﻟﺍ ﺔﻤﻜﺤﻤﻟﺎﺑ ﺓﺪﻘﻌﻨﻤﻟﺍ ﺔﻴﻨﻠﻌﻟﺍ ﺔﺴﻠﺠﻟﺎﺑ\r\n                                        ﺮﻣﻷﺍ ﻲﻠﻋ ﺱﺎﺒﻋ ﻦﻴﺴﺣ ﻲﺿﺎﻘﻟﺍ  ﺔﺳﺎﺋﺮﺑ\r\n                           ﻲﻤﻴﻤﺘﻟﺍ ﻪﻠﻟﺍﺪﺒﻋ ﻦﻤﺣﺮﻟﺍﺪﺒﻋ ﻪﻠﻟﺍﺪﺒﻋ ﻲﺿﺎﻘﻟﺍ ﺔﻳﻮﻀﻋ\r\n                                             ﺭﺩﻮﺠﻟﺍ ﺐﻴﺠﻧ ﺪﺷﺍﺭ ﻲﺿﺎﻘﻟﺍ ﺔﻳﻮﻀﻋ\r\n                                                              ﺮﺴﻟﺍ ﻦﻴﻣﺃ ﺭﻮﻀﺤﺑ\r\n                                       ﻱﺩﺎﻴﺳ ﺪﻟﺎﺧ ﺪﻤﺤﻣ\r\n                                                                                  ﻑﺍﺮﻃﻻﺍ ﺮﻀﺤﻳ ﻢﻟ\r\n                                                    ﺭﺍﺮﻘﻟﺍ\r\n                                               ﻢﻜﺤﻠﻟ 2026/06/03 ﺔﺴﻠﺠﻟ ﻞﻴﺟﺄﺘﻟﺍ ﺔﻤﻜﺤﻤﻟﺍ ﺭﺮﻘﺗ\r\n      ﻲﻠﻋ ﺱﺎﺒﻋ ﻦﻴﺴﺣ ﻲﺿﺎﻘﻟﺍ                                                                              \r\n                  ﺮﻣﻷﺍ\r\n          ﺎﻴﻧﻭﺮﺘﻜﻟﺍ ﻊﻴﻗﻮﺘﻟﺍ ﻢﺗ\n\np.2: ﻦﻳﺮﺤﺒﻟﺍ ﺔﻜﻠﻤﻣ\r\n                                                      ﻑﺎﻗﻭﻷﺍﻭ ﺔﻴﻣﻼﺳﻹﺍ ﻥﻮﺌﺸﻟﺍﻭ ﻝﺪﻌﻟﺍ ﺓﺭﺍﺯﻭ\r\n                                                                      ﻢﻛﺎﺤﻤﻟﺍ ﺓﺭﺍﺩﺇ\r\n                                                                                                      25/2026/00738/4  :ﻯﻮﻋﺪﻟﺍ ﻢﻗﺭ\r\n      2026  /  06  /  03             :ﺦﻳﺭﺎﺘﻟﺍ\r\n                                                                                                                                :ﻑﺎﻨﺌﺘﺳﻻﺍ ﻢﻗﺭ\r\n                           2\r\n                                :ﺔﺤﻔﺼﻟﺍ ﻢﻗﺭ\r\n                                                                                                                                   :ﻦﻌﻄﻟﺍ ﻢﻗﺭ\r\n                                                                                                                               \r\n                                        ﺔﻨﻣﺎﺜﻟﺍ ﺔﻴﻧﺪﻤﻟﺍ ﻯﺮﺒﻜﻟﺍ ﺔﻤﻜﺤﻤﻟﺎﺑ ﺓﺪﻘﻌﻨﻤﻟﺍ ﺔﻴﻨﻠﻌﻟﺍ ﺔﺴﻠﺠﻟﺎﺑ\r\n                                                    ﺮﻣﻷﺍ ﻲﻠﻋ ﺱﺎﺒﻋ ﻦﻴﺴﺣ ﻲﺿﺎﻘﻟﺍ  ﺔﺳﺎﺋﺮﺑ\r\n                                   ﻲﻤﻴﻤﺘﻟﺍ ﻪﻠﻟﺍﺪﺒﻋ ﻦﻤﺣﺮﻟﺍﺪﺒﻋ ﻪﻠﻟﺍﺪﺒﻋ ﻲﺿﺎﻘﻟﺍ ﺔﻳﻮﻀﻋ\r\n                                                  ﻦﺴﺣ ﺪﻤﺤﻣ ﻒﺳﻮﻳ ﺪﻤﺤﻣ ﻲﺿﺎﻘﻟﺍ ﺔﻳﻮﻀﻋ\r\n                                                          ﺭﺩﻮﺠﻟﺍ ﺐﻴﺠﻧ ﺪﺷﺍﺭ ﻲﺿﺎﻘﻟﺍ ﺔﻳﻮﻀﻋ\r\n                                                                               ﺮﺴﻟﺍ ﻦﻴﻣﺃ ﺭﻮﻀﺤﺑ\r\n                                                    ﺶﻴﻋ ﺪﻤﺣﺍ ﺭﺎﻤﻋ\r\n                                                                                                          ﻑﺍﺮﻃﻻﺍ ﺮﻀﺤﻳ ﻢﻟ\r\n                                                                   ﻢﻜﺤﻟﺍ\r\n             ﺎﻬﻣﺍﺰﻟﺇﻭ ،ﺭﺎﻨﻳﺩ 1440 ﻎﻠﺒﻣ ﻲﻋﺪﻤﻠﻟ ﻱﺩﺆﺗ ﻥﺄﺑ ﺎﻬﻴﻠﻋ ﻰﻋﺪﻤﻟﺍ ﻡﺍﺰﻟﺈﺑ ﺔﻤﻜﺤﻤﻟﺍ ﺖﻤﻜﺣ  \r\n                                                            . ﺓﺎﻣﺎﺤﻤﻟﺍ ﺏﺎﻌﺗﺃ ﻞﺑﺎﻘﻣ ﺭﺎﻨﻳﺩ 50 ﻎﻠﺒﻣﻭ ﻒﻳﺭﺎﺼﻤﻟﺎﺑ\r\n       ﻲﻠﻋ ﺱﺎﺒﻋ ﻦﻴﺴﺣ ﻲﺿﺎﻘﻟﺍ      ﻦﻤﺣﺮﻟﺍﺪﺒﻋ ﻪﻠﻟﺍﺪﺒﻋ ﻲﺿﺎﻘﻟﺍ  ﺭﺩﻮﺠﻟﺍ ﺐﻴﺠﻧ ﺪﺷﺍﺭ ﻲﺿﺎﻘﻟﺍ                               ﺪﻤﺤﻣ ﻒﺳﻮﻳ ﺪﻤﺤﻣ ﻲﺿﺎﻘﻟﺍ\r\n                       ﺮﻣﻷﺍ               ﻲﻤﻴﻤﺘﻟﺍ ﻪﻠﻟﺍﺪﺒﻋ         ﺎﻴﻧﻭﺮﺘﻜﻟﺍ ﻊﻴﻗﻮﺘﻟﺍ ﻢﺗ                                            ﻦﺴﺣ\r\n             ﺎﻴﻧﻭﺮﺘﻜﻟﺍ ﻊﻴﻗﻮﺘﻟﺍ ﻢﺗ      ﺎﻴﻧﻭﺮﺘﻜﻟﺍ ﻊﻴﻗﻮﺘﻟﺍ ﻢﺗ                                                             ﺎﻴﻧﻭﺮﺘﻜﻟﺍ ﻊﻴﻗﻮﺘﻟﺍ ﻢﺗ\n\np.3: ﻦﻳﺮﺤﺒﻟﺍ ﺔﻜﻠﻤﻣ\r\n                                          ﻑﺎﻗﻭﻷﺍﻭ ﺔﻴﻣﻼﺳﻹﺍ ﻥﻮﺌﺸﻟﺍﻭ ﻝﺪﻌﻟﺍ ﺓﺭﺍﺯﻭ\r\n                                                       ﻢﻛﺎﺤﻤﻟﺍ ﺓﺭﺍﺩﺇ\r\n                                                                                25/2026/00738/4  :ﻯﻮﻋﺪﻟﺍ ﻢﻗﺭ\r\n     2026  /  08  /  16      :ﺦﻳﺭﺎﺘﻟﺍ\r\n                                                                                                   :ﻑﺎﻨﺌﺘﺳﻻﺍ ﻢﻗﺭ\r\n                     3\r\n                         :ﺔﺤﻔﺼﻟﺍ ﻢﻗﺭ\r\n                                                                                                     :ﻦﻌﻄﻟﺍ ﻢﻗﺭ\r\n                                                                                                  \r\n                               ﺔﻨﻣﺎﺜﻟﺍ ﺔﻴﻧﺪﻤﻟﺍ ﻯﺮﺒﻜﻟﺍ ﺔﻤﻜﺤﻤﻟﺎﺑ ﺓﺪﻘﻌﻨﻤﻟﺍ ﺔﻴﻨﻠﻌﻟﺍ ﺔﺴﻠﺠﻟﺎﺑ\r\n                                        ﺮﻣﻷﺍ ﻲﻠﻋ ﺱﺎﺒﻋ ﻦﻴﺴﺣ ﻲﺿﺎﻘﻟﺍ  ﺔﺳﺎﺋﺮﺑ\r\n                                          ﻊﻓﺪﻤﻟﺍ ﺪﻤﺣﺃ ﺪﻟﺎﺧ ﺓﺭﻮﻧ ﻲﺿﺎﻘﻟﺍ ﺔﻳﻮﻀﻋ\r\n                                             ﺭﺩﻮﺠﻟﺍ ﺐﻴﺠﻧ ﺪﺷﺍﺭ ﻲﺿﺎﻘﻟﺍ ﺔﻳﻮﻀﻋ\r\n                                                              ﺮﺴﻟﺍ ﻦﻴﻣﺃ ﺭﻮﻀﺤﺑ\r\n                                   ﻱﺮﺳﻭﺪﻟﺍ ﻙﺭﺎﺒﻣ ﺪﻟﺎﺧ\r\n                                                                                  ﻑﺍﺮﻃﻷﺍ ﺮﻀﺤﻳ ﻢﻟ\r\n                                                    ﺭﺍﺮﻘﻟﺍ\r\n                                                     ﻡﻮﻴﻟﺍ ﺔﺴﻠﺠﻟ ﻢﻜﺤﻠﻟ ﻯﻮﻋﺪﻟﺍ ﺰﺠﺣ ﺔﻤﻜﺤﻤﻟﺍ ﺭﺮﻘﺗ\r\n      ﻲﻠﻋ ﺱﺎﺒﻋ ﻦﻴﺴﺣ ﻲﺿﺎﻘﻟﺍ                                                                              \r\n                  ﺮﻣﻷﺍ\r\n          ﺎﻴﻧﻭﺮﺘﻜﻟﺍ ﻊﻴﻗﻮﺘﻟﺍ ﻢﺗ\n\np.4: ﻦﻳﺮﺤﺒﻟﺍ ﺔﻜﻠﻤﻣ\r\n                                                      ﻑﺎﻗﻭﻷﺍﻭ ﺔﻴﻣﻼﺳﻹﺍ ﻥﻮﺌﺸﻟﺍﻭ ﻝﺪﻌﻟﺍ ﺓﺭﺍﺯﻭ\r\n                                                                      ﻢﻛﺎﺤﻤﻟﺍ ﺓﺭﺍﺩﺇ\r\n                                                                                                      25/2026/00738/4  :ﻯﻮﻋﺪﻟﺍ ﻢﻗﺭ\r\n      2026  /  08  /  16             :ﺦﻳﺭﺎﺘﻟﺍ\r\n                                                                                                                                :ﻑﺎﻨﺌﺘﺳﻻﺍ ﻢﻗﺭ\r\n                           4\r\n                                :ﺔﺤﻔﺼﻟﺍ ﻢﻗﺭ\r\n                                                                                                                                   :ﻦﻌﻄﻟﺍ ﻢﻗﺭ\r\n                                                                                                                               \r\n                                        ﺔﻨﻣﺎﺜﻟﺍ ﺔﻴﻧﺪﻤﻟﺍ ﻯﺮﺒﻜﻟﺍ ﺔﻤﻜﺤﻤﻟﺎﺑ ﺓﺪﻘﻌﻨﻤﻟﺍ ﺔﻴﻨﻠﻌﻟﺍ ﺔﺴﻠﺠﻟﺎﺑ\r\n                                                      ﻊﻓﺪﻤﻟﺍ ﺪﻤﺣﺃ ﺪﻟﺎﺧ ﺓﺭﻮﻧ ﻲﺿﺎﻘﻟﺍ  ﺔﺳﺎﺋﺮﺑ\r\n                                                          ﺭﺩﻮﺠﻟﺍ ﺐﻴﺠﻧ ﺪﺷﺍﺭ ﻲﺿﺎﻘﻟﺍ ﺔﻳﻮﻀﻋ\r\n                                                   ﺮﻣﻷﺍ ﻲﻠﻋ ﺱﺎﺒﻋ ﻦﻴﺴﺣ ﻲﺿﺎﻘﻟﺍ ﺔﻳﻮﻀﻋ\r\n                                                                               ﺮﺴﻟﺍ ﻦﻴﻣﺃ ﺭﻮﻀﺤﺑ\r\n                                             ﻱﺮﺳﻭﺪﻟﺍ ﻙﺭﺎﺒﻣ ﺪﻟﺎﺧ\r\n                                                                                                          ﻑﺍﺮﻃﻷﺍ ﺮﻀﺤﻳ ﻢﻟ\r\n                                                                   ﻢﻜﺤﻟﺍ\r\n                            ﺕﺎﻓﻭﺮﺼﻤﻟﺎﺑ ﺔﺴﻤﺘﻠﻤﻟﺍ ﺖﻣﺰﻟﺃﻭ ﻼﻜﺷ ﺱﺎﻤﺘﻟﻻﺍ ﻝﻮﺒﻗ ﻡﺪﻌﺑ ﺔﻤﻜﺤﻤﻟﺍ ﺖﻤﻜﺣ  \r\n       ﻲﻠﻋ ﺱﺎﺒﻋ ﻦﻴﺴﺣ ﻲﺿﺎﻘﻟﺍ   ﻊﻓﺪﻤﻟﺍ ﺪﻤﺣﺃ ﺪﻟﺎﺧ ﺓﺭﻮﻧ ﻲﺿﺎﻘﻟﺍ ﺭﺩﻮﺠﻟﺍ ﺐﻴﺠﻧ ﺪﺷﺍﺭ ﻲﺿﺎﻘﻟﺍ                                                     \r\n                       ﺮﻣﻷﺍ            ﺎﻴﻧﻭﺮﺘﻜﻟﺍ ﻊﻴﻗﻮﺘﻟﺍ ﻢﺗ       ﺎﻴﻧﻭﺮﺘﻜﻟﺍ ﻊﻴﻗﻮﺘﻟﺍ ﻢﺗ\r\n             ﺎﻴﻧﻭﺮﺘﻜﻟﺍ ﻊﻴﻗﻮﺘﻟﺍ ﻢﺗ"
  },
  {
    id: "EV_REAL_009",
    exhibit_id: "EX-REAL-09",
    filename: "print.pdf",
    document_type: "Portal Printing Record (Scanned)",
    date: "2026-06-15",
    source: "Ministry of Justice Portal",
    author_or_issuer: "Ministry of Justice",
    page_count: 3,
    authentication_status: "UNVERIFIED",
    confidentiality_status: "RESTRICTED",
    duplicate_status: "ORIGINAL",
    ocr_status: "OCR_REQUIRED",
    completeness_status: "PARTIAL",
    data_origin: "USER_IMPORTED",
    related_events: [],
    related_routes: [],
    notes: "SCANNED IMAGE RECORD — OCR_REQUIRED: 3 scanned pages, 0 usable digital text characters. Requires optical character recognition.",
    source_citation_identifier: "print.pdf (3 pages)",
    raw_text: undefined
  },
  {
    id: "EV_REAL_010",
    exhibit_id: "EX-REAL-10",
    filename: "execution full file.pdf",
    document_type: "Execution Enforcement Full Docket (Scanned)",
    date: "2026-06-15",
    source: "Ministry of Justice Execution Directorate",
    author_or_issuer: "Execution Directorate",
    page_count: 65,
    authentication_status: "UNVERIFIED",
    confidentiality_status: "RESTRICTED",
    duplicate_status: "ORIGINAL",
    ocr_status: "OCR_REQUIRED",
    completeness_status: "PARTIAL",
    data_origin: "USER_IMPORTED",
    related_events: [],
    related_routes: [],
    notes: "SCANNED IMAGE RECORD — OCR_REQUIRED: 65 scanned pages, 0 usable digital text characters. Preserved without deletion pending OCR.",
    source_citation_identifier: "execution full file.pdf (65 pages)",
    raw_text: undefined
  },
  {
    id: "EV_REAL_011",
    exhibit_id: "EX-REAL-11",
    filename: "execution payment distribution.pdf",
    document_type: "Execution Payment Distribution Order (Scanned)",
    date: "2026-06-15",
    source: "Ministry of Justice Execution Directorate",
    author_or_issuer: "Execution Directorate",
    page_count: 1,
    authentication_status: "UNVERIFIED",
    confidentiality_status: "RESTRICTED",
    duplicate_status: "ORIGINAL",
    ocr_status: "OCR_REQUIRED",
    completeness_status: "PARTIAL",
    data_origin: "USER_IMPORTED",
    related_events: [],
    related_routes: [],
    notes: "SCANNED IMAGE RECORD — OCR_REQUIRED: 1 scanned page, 0 usable digital text characters. Preserved without deletion pending OCR.",
    source_citation_identifier: "execution payment distribution.pdf (1 page)",
    raw_text: undefined
  },
  {
    id: "EV_REAL_012",
    exhibit_id: "EX-REAL-12",
    filename: "execution.pdf",
    document_type: "Execution Enforcement Notice (Scanned)",
    date: "2026-06-15",
    source: "Ministry of Justice Execution Directorate",
    author_or_issuer: "Execution Directorate",
    page_count: 4,
    authentication_status: "UNVERIFIED",
    confidentiality_status: "RESTRICTED",
    duplicate_status: "ORIGINAL",
    ocr_status: "OCR_REQUIRED",
    completeness_status: "PARTIAL",
    data_origin: "USER_IMPORTED",
    related_events: [],
    related_routes: [],
    notes: "SCANNED IMAGE RECORD — OCR_REQUIRED: 4 scanned pages, 0 usable digital text characters. Preserved without deletion pending OCR.",
    source_citation_identifier: "execution.pdf (4 pages)",
    raw_text: undefined
  },
  {
    id: "EV_REAL_013",
    exhibit_id: "EX-REAL-13",
    filename: "contract.pdf",
    document_type: "Property Lease Agreement",
    date: "2026-01-01",
    source: "User-provided local lease document",
    author_or_issuer: "Lessor: Mubarak Ali Jowder / Lessee: Alina Alekseeva",
    page_count: 5,
    authentication_status: "UNVERIFIED",
    confidentiality_status: "RESTRICTED",
    duplicate_status: "ORIGINAL",
    ocr_status: "OCR_COMPLETE",
    completeness_status: "COMPLETE",
    data_origin: "USER_IMPORTED",
    related_events: [],
    related_routes: [],
    notes: "[OCR_COMPLETE] 5/5 pages extracted via native PDF vision. 100% usable coverage. Authenticated from authentic user-imported PDF bytes.",
    source_citation_identifier: "contract.pdf (p. 1-5)",
    file_hash: "7d89b14298fa4c329afbf4c8996fb92427ae41e4649b934ca495991b7852c013",
    usable_pages: 5,
    usable_pages_count: 5,
    failed_pages: [],
    failed_pages_count: 0,
    coverage: 100,
    usable_coverage_percent: 100,
    raw_text: `p.1: عقد إيجار عقار سكني موحد - مملكة البحرين
رقم العقد المرجعي: LEASE-2026-01-01
تاريخ تحرير العقد: 01/01/2026
الطرف الأول (المؤجر): مبارك علي جودر - الرقم الشخصي: 520105435
الطرف الثاني (المستأجر): ألينا أليكسيفا (Alina Alekseeva) - الرقم الشخصي: 800694392 - الجنسية: روسيا
العين المؤجرة: شقة سكنية - مملكة البحرين
الغرض من الإيجار: سكن عائلي
مدة الإيجار: سنة ميلادية واحدة تبدأ من 01/01/2026 وتتجدد تلقائياً ما لم يخطر أحد الطرفين الآخر كتابة بعدم الرغبة في التجديد
الأجرة المتفق عليها: 360 دينار بحريني شهرياً تدفع مقدماً في بداية كل شهر ميلادي

p.2: البند الثاني: شروط سداد الأجرة والتزامات المستأجر
يلتزم المستأجر بسداد القيمة الإيجارية الشهرية ومقدارها 360 د.ب عن طريق التحويل البنكي أو الإيداع المباشر في حساب المؤجر
يلتزم المستأجر باستخدام العين المؤجرة للغرض السكني فقط وعدم تأجيرها من الباطن أو التنازل عنها للغير دون موافقة خطية من المؤجر
تسليم العين المؤجرة بحالة صالحة للاستخدام وسليمة من أية عيوب إنشائية وظاهرية

p.3: البند الثالث: فواتير الخدمات ومسؤوليات الصيانة
يتحمل المستأجر استهلاك الكهرباء والماء ورسوم البلدية طوال فترة إشغاله للعين المؤجرة
يلتزم المؤجر بالصيانة الهيكلية والأساسية للعقار بينما يتحمل المستأجر الصيانة الاستهلاكية والتشغيلية المعتادة الناتجة عن الاستعمال
يحق للمؤجر أو من ينوب عنه معاينة العين المؤجرة بعد إخطار مسبق في أوقات مناسبة

p.4: البند الرابع: إنهاء العقد والإخلاء والنزاعات
في حالة الرغبة في إنهاء العقد قبل انتهاء مدته، يلتزم الطرف الراغب بإخطار الطرف الآخر كتابياً بمدة لا تقل عن شهر
عند الإخلاء يلتزم المستأجر بتسليم العين المؤجرة خالية من الشواغل وبحالة جيدة وبراءة ذمة من فواتير الكهرباء والماء
يخضع هذا العقد لأحكام قانون إيجار العقارات رقم 27 لسنة 2014 في مملكة البحرين وتختص المحكمة المختصة بالفصل في أي نزاع ينشأ بشأنه

p.5: البند الخامس: توقيعات الطرفين وإثبات الصفة
توقيع المؤجر: مبارك علي جودر (Mubarak Ali Jowder)
توقيع المستأجر: ألينا أليكسيفا (Alina Alekseeva)
المحرر والمطابق لأحكام تسجيل عقود الإيجار السكنية والتجارية بمملكة البحرين
عدد النسخ: نسختان أصليتان بيد كل طرف نسخة للعمل بموجبها عند الاقتضاء`
  }
];

export const GENUINE_IMPORTED_DOCUMENT_INDEX: DocumentIndexItem[] = [
  {
    id: "DOC_REAL_01",
    exhibit_id: "EX-REAL-01",
    page_number: 1,
    page_range: "1-1",
    document_title: "MOJ-E-BKPZAUXTMOHLMMX.pdf",
    document_category: "Official record",
    is_original: false,
    is_readable: true,
    ocr_required: false,
    data_origin: "USER_IMPORTED",
    evidentiary_significance: "Verified readable digital court record; text extracted directly from official Ministry of Justice document."
  },
  {
    id: "DOC_REAL_02",
    exhibit_id: "EX-REAL-02",
    page_number: 1,
    page_range: "1-1",
    document_title: "MOJ-E-JHYGSZADGRMSNPC.pdf",
    document_category: "Official record",
    is_original: false,
    is_readable: true,
    ocr_required: false,
    data_origin: "USER_IMPORTED",
    evidentiary_significance: "Verified readable digital court record; text extracted directly from official Ministry of Justice document."
  },
  {
    id: "DOC_REAL_03",
    exhibit_id: "EX-REAL-03",
    page_number: 1,
    page_range: "1-2",
    document_title: "MOJ-E-QMSVKSLTLYDNFEF.pdf",
    document_category: "Official record",
    is_original: false,
    is_readable: true,
    ocr_required: false,
    data_origin: "USER_IMPORTED",
    evidentiary_significance: "Verified readable digital court record; text extracted directly from official Ministry of Justice document."
  },
  {
    id: "DOC_REAL_04",
    exhibit_id: "EX-REAL-04",
    page_number: 1,
    page_range: "1-1",
    document_title: "MOJ-E-SEJBZJEWJMIOXXA.pdf",
    document_category: "Official record",
    is_original: false,
    is_readable: true,
    ocr_required: false,
    data_origin: "USER_IMPORTED",
    evidentiary_significance: "Verified readable digital court record; text extracted directly from official Ministry of Justice document."
  },
  {
    id: "DOC_REAL_05",
    exhibit_id: "EX-REAL-05",
    page_number: 1,
    page_range: "1-3",
    document_title: "MOJ-E-TBITWKVQPAILYIR.pdf",
    document_category: "Official record",
    is_original: false,
    is_readable: true,
    ocr_required: false,
    data_origin: "USER_IMPORTED",
    evidentiary_significance: "Verified readable digital court record; text extracted directly from official Ministry of Justice document."
  },
  {
    id: "DOC_REAL_06",
    exhibit_id: "EX-REAL-06",
    page_number: 1,
    page_range: "1-2",
    document_title: "MOJ-E-TNCIQZVUXLYNTDF.pdf",
    document_category: "Official record",
    is_original: false,
    is_readable: true,
    ocr_required: false,
    data_origin: "USER_IMPORTED",
    evidentiary_significance: "Verified readable digital court record; text extracted directly from official Ministry of Justice document."
  },
  {
    id: "DOC_REAL_07",
    exhibit_id: "EX-REAL-07",
    page_number: 1,
    page_range: "1-77",
    document_title: "MOJ-E-WKVDIXSJHBBFQONHYHPO.pdf",
    document_category: "Unverified copy",
    is_original: false,
    is_readable: false,
    ocr_required: true,
    data_origin: "USER_IMPORTED",
    evidentiary_significance: "Pending OCR recovery; scanned document images require optical character recognition to extract evidentiary propositions."
  },
  {
    id: "DOC_REAL_08",
    exhibit_id: "EX-REAL-08",
    page_number: 1,
    page_range: "1-4",
    document_title: "MOJ-E-YCAWMQVCCTRFVFG.pdf",
    document_category: "Official record",
    is_original: false,
    is_readable: true,
    ocr_required: false,
    data_origin: "USER_IMPORTED",
    evidentiary_significance: "Verified readable digital court record; text extracted directly from official Ministry of Justice document."
  },
  {
    id: "DOC_REAL_09",
    exhibit_id: "EX-REAL-09",
    page_number: 1,
    page_range: "1-3",
    document_title: "print.pdf",
    document_category: "Unverified copy",
    is_original: false,
    is_readable: false,
    ocr_required: true,
    data_origin: "USER_IMPORTED",
    evidentiary_significance: "Pending OCR recovery; scanned document images require optical character recognition to extract evidentiary propositions."
  },
  {
    id: "DOC_REAL_10",
    exhibit_id: "EX-REAL-10",
    page_number: 1,
    page_range: "1-65",
    document_title: "execution full file.pdf",
    document_category: "Unverified copy",
    is_original: false,
    is_readable: false,
    ocr_required: true,
    data_origin: "USER_IMPORTED",
    evidentiary_significance: "Pending OCR recovery; scanned document images require optical character recognition to extract evidentiary propositions."
  },
  {
    id: "DOC_REAL_11",
    exhibit_id: "EX-REAL-11",
    page_number: 1,
    page_range: "1-1",
    document_title: "execution payment distribution.pdf",
    document_category: "Unverified copy",
    is_original: false,
    is_readable: false,
    ocr_required: true,
    data_origin: "USER_IMPORTED",
    evidentiary_significance: "Pending OCR recovery; scanned document images require optical character recognition to extract evidentiary propositions."
  },
  {
    id: "DOC_REAL_12",
    exhibit_id: "EX-REAL-12",
    page_number: 1,
    page_range: "1-4",
    document_title: "execution.pdf",
    document_category: "Unverified copy",
    is_original: false,
    is_readable: false,
    ocr_required: true,
    data_origin: "USER_IMPORTED",
    evidentiary_significance: "Pending OCR recovery; scanned document images require optical character recognition to extract evidentiary propositions."
  },
  {
    id: "DOC_REAL_13",
    exhibit_id: "EX-REAL-13",
    page_number: 1,
    page_range: "1-5",
    document_title: "contract.pdf",
    document_category: "Property Lease Agreement" as any,
    is_original: false,
    is_readable: true,
    ocr_required: false,
    data_origin: "USER_IMPORTED",
    evidentiary_significance: "Residential Tenancy Agreement dated 01/01/2026 between Mubarak Ali Jowder (lessor) and Alina Alekseeva (tenant) for BHD 360/month. 5/5 pages extracted via native PDF vision with 100% usable coverage.",
    file_hash: "7d89b14298fa4c329afbf4c8996fb92427ae41e4649b934ca495991b7852c013"
  }
];


export const PILOT_MATTER: Matter = {
  id: 'MATTER_BAHRAIN_PILOT',
  title: 'Bahrain Rental Appeal Pilot',
  jurisdiction: 'Kingdom of Bahrain — Rental Disputes Committee / High Civil Court',
  exact_objective: 'Establish lawful procedural route regarding First-Instance Rental Judgment dated 3 June 2026 (BHD 1,440 principal) in light of unverified service and Execution File 042026162064.',
  requested_outcome: 'Determination of lawful procedural route to challenge judgment or verify debt accounting in Execution File 042026162064.',
  matter_type: 'Rental Dispute / Electronic Appeal Forensics',
  relevant_court_or_authority: 'Rental Disputes Committee & High Civil Court (Appellate Division)',
  known_decision_dates: ['2026-06-03'],
  known_deadlines: ['15 days from formal statutory service under Rent Law No. 27/2014 Article 28 (Service date UNKNOWN; deadline cannot be calculated)'],
  current_procedural_stage: 'Execution File 042026162064 Active; Appeal Unsubmitted / Service Unknown',
  opposing_party: 'Lessor Commercial Realty Entity',
  existing_representative: 'Self-Represented',
  confidentiality_classification: 'CONFIDENTIAL',
  analysis_cutoff_date: '2026-10-29',
  user_factual_narrative:
    'Tenant received notice of an enforcement order under Execution File 042026162064. Tenant saved draft R88736 on 16 June 2026. BHD 30 payment attempt failed on 5 July 2026. Rent transfers show BHD 792. Formal judgment service is unverified in available records.',
  user_known_concerns:
    'Tenant assumes portal draft save stopped appeal deadline. Opposing party has opened Execution File 042026162064.',
  known_prior_filings: [
    'RDC First-Instance Judgment (03 June 2026)',
    'Electronic Appeal Preparation R88736 (Saved 16 June 2026)',
    'Reconsideration Petition to RDC (Refused 12 June 2026)',
    'Execution File 042026162064 (Opened 18 July 2026)'
  ],
  known_rejected_or_closed_routes: [
    'Route R-05: Reconsideration Petition to Original Rental Committee (Rejected on 12 June 2026 for lack of statutory jurisdiction)'
  ],
  research_status: 'ANALYSIS IN PROGRESS',
  confidence_indicator: 'MODERATE CONFIDENCE',
  evidence_completeness_pct: 68,
  is_sample_pilot: true
};

export const PILOT_ELECTRONIC_FORENSICS: ElectronicAppealForensicsData = {
  preparation_number: 'R88736',
  draft_save_date: '2026-06-16T14:22:10Z',
  last_modified_date: '2026-06-16T15:04:45Z',
  mandatory_attachments: [
    'Original Judgment Copy',
    'Signed Appeal Memorandum of Legal Grounds',
    'Power of Attorney or Valid Identity Evidence',
    'Proof of Deposit or Security Fee'
  ],
  existing_attachments: [
    'Original Judgment Copy (Uploaded)',
    'Identity Card Copy (Uploaded)'
  ],
  payment_demand_reference: 'BD-PAY-99201',
  payment_attempt: '2026-07-05T09:12:44Z',
  payment_result: 'FAILED',
  final_confirmation_reached: false,
  registered_case_number: null,
  service_date: null,
  audit_log_request_status: 'NOT_SUBMITTED',
  current_procedural_conclusion:
    'The record proves an incomplete appeal preparation saved shortly after judgment, but does not prove submission, successful payment, registration, or preservation of the save date as the legal filing date. Formal service of the judgment has not been established from the available correspondence record.'
};

export const PILOT_EVIDENCE_ITEMS: EvidenceItem[] = [
  {
    id: 'EV_001',
    exhibit_id: 'EX-01',
    filename: 'RDC_Judgment_2026_06_03.pdf',
    document_type: 'Court Judgment / Official Order',
    date: '2026-06-03',
    source: 'Rental Disputes Committee Records',
    author_or_issuer: 'Rental Disputes Committee',
    page_count: 4,
    authentication_status: 'AUTHENTICATED',
    confidentiality_status: 'CONFIDENTIAL',
    duplicate_status: 'ORIGINAL',
    ocr_status: 'COMPLETED',
    completeness_status: 'COMPLETE',
    related_events: ['EVT_001'],
    related_routes: ['R-01', 'R-04', 'R-05'],
    notes: 'Orders tenant to pay BHD 1,440 arrears and vacate leasehold premises.',
    source_citation_identifier: 'RDC First-Instance Judgment p. 1-4',
    raw_text: 'Rental Disputes Committee. Decided in absence of respondent on 03 June 2026. Respondent ordered to pay BHD 1,440.00 and surrender property within 30 days.'
  },
  {
    id: 'EV_002',
    exhibit_id: 'EX-02',
    filename: 'Electronic_Portal_Draft_Screenshot_R88736.png',
    document_type: 'Screenshot / Portal Extract',
    date: '2026-06-16',
    source: 'Ministry of Justice eServices Portal User Session',
    author_or_issuer: 'eGovernment Court Gateway System',
    page_count: 1,
    authentication_status: 'UNVERIFIED',
    confidentiality_status: 'CONFIDENTIAL',
    duplicate_status: 'EXCERPT',
    ocr_status: 'COMPLETED',
    completeness_status: 'PARTIAL',
    related_events: ['EVT_003'],
    related_routes: ['R-01', 'R-02'],
    notes: 'Shows preparation number R88736 with status "Draft Saved - Unsubmitted". Appeal memo attachment is empty.',
    source_citation_identifier: 'Portal Snapshot Screen R88736',
    raw_text: 'Portal Service: Appeal Registration. Prep No: R88736. Saved: 16-Jun-2026 14:22. Status: Draft - Unsubmitted. Button: "Continue to Payment" active.'
  },
  {
    id: 'EV_003',
    exhibit_id: 'EX-03',
    filename: 'Payment_Gateway_Decline_Advice_2026_07_05.pdf',
    document_type: 'Bank / Gateway Electronic Receipt',
    date: '2026-07-05',
    source: 'BenefitPay / Credit Gateway Notification',
    author_or_issuer: 'Payment Gateway Processor',
    page_count: 1,
    authentication_status: 'AUTHENTICATED',
    confidentiality_status: 'CONFIDENTIAL',
    duplicate_status: 'ORIGINAL',
    ocr_status: 'COMPLETED',
    completeness_status: 'COMPLETE',
    related_events: ['EVT_005'],
    related_routes: ['R-01', 'R-02'],
    notes: 'Payment attempt of BHD 30 for Reference BD-PAY-99201 returned STATUS: FAILED (Code 91 - Card Issuer Decline).',
    source_citation_identifier: 'Gateway Log BD-PAY-99201',
    raw_text: 'Transaction Reference: BD-PAY-99201. Amount: 30.00 BHD. Date: 05-Jul-2026 09:12. Response: Transaction Declined by Issuer. Status: FAILED.'
  },
  {
    id: 'EV_004',
    exhibit_id: 'EX-04',
    filename: 'Bank_Statement_Rent_Transfers_2026.pdf',
    document_type: 'Bank Account Statement',
    date: '2026-06-01',
    source: 'Commercial Bank of Bahrain Account Statement',
    author_or_issuer: 'Commercial Bank of Bahrain',
    page_count: 3,
    authentication_status: 'AUTHENTICATED',
    confidentiality_status: 'PRIVILEGED',
    duplicate_status: 'ORIGINAL',
    ocr_status: 'COMPLETED',
    completeness_status: 'COMPLETE',
    related_events: ['EVT_000'],
    related_routes: ['R-03', 'R-04'],
    notes: 'Bank transfers to lessor IBAN showing 3 payments totaling BHD 792.00 (Jan, Feb, Mar 2026). Shortfall against BHD 1,440.',
    source_citation_identifier: 'CBB Statement p. 2',
    raw_text: 'Transfer 15-Jan-2026: BHD 264. Transfer 18-Feb-2026: BHD 264. Transfer 20-Mar-2026: BHD 264. Total Rent Credited: BHD 792.00.'
  },
  {
    id: 'EV_005',
    exhibit_id: 'EX-05',
    filename: 'Execution_Notice_042026162064.pdf',
    document_type: 'Enforcement Order / Official Notice',
    date: '2026-07-18',
    source: 'Ministry of Justice Execution Directorate',
    author_or_issuer: 'Execution Directorate',
    page_count: 2,
    authentication_status: 'AUTHENTICATED',
    confidentiality_status: 'CONFIDENTIAL',
    duplicate_status: 'ORIGINAL',
    ocr_status: 'COMPLETED',
    completeness_status: 'COMPLETE',
    related_events: ['EVT_006'],
    related_routes: ['R-03'],
    notes: 'Notifies active enforcement in Execution File 042026162064 for judgment debt of BHD 1,440.',
    source_citation_identifier: 'Exec. File 042026162064 Notice p. 1',
    raw_text: 'Execution File 042026162064. Enforcement notice based on Rental Disputes Committee judgment of 03 June 2026.'
  },
  {
    id: 'EV_006',
    exhibit_id: 'EX-06',
    filename: 'Reconsideration_Dismissal_Order_2026_06_12.pdf',
    document_type: 'Administrative / Judicial Order',
    date: '2026-06-12',
    source: 'Rental Disputes Committee Secretariat',
    author_or_issuer: 'Rental Disputes Committee Secretary',
    page_count: 1,
    authentication_status: 'AUTHENTICATED',
    confidentiality_status: 'CONFIDENTIAL',
    duplicate_status: 'ORIGINAL',
    ocr_status: 'COMPLETED',
    completeness_status: 'COMPLETE',
    related_events: ['EVT_002'],
    related_routes: ['R-05'],
    notes: 'Formally dismisses tenant petition for reconsideration as non-cognizable under Rent Law procedural code.',
    source_citation_identifier: 'RDC Secretariat Order 12 June 2026',
    raw_text: 'Committee Decision: The Rental Law provides no administrative reconsideration against committee judgments. Remedy lies exclusively by appeal to High Court.'
  }
];

export const PILOT_DOCUMENT_INDEX: DocumentIndexItem[] = [
  {
    id: 'IDX_001',
    exhibit_id: 'EX-01',
    page_number: 1,
    page_range: '1-4',
    document_title: 'First-Instance Rental Judgment',
    document_category: 'Official record',
    is_original: true,
    is_readable: true,
    ocr_required: false,
    evidentiary_significance: 'Primary enforceable title ordering BHD 1,440.00 payment and eviction.',
    related_event: 'EVT_001',
    related_authority: 'Rent Law No. 27/2014 Art. 28'
  },
  {
    id: 'IDX_002',
    exhibit_id: 'EX-02',
    page_number: 1,
    page_range: '1',
    document_title: 'Portal Draft Appeal Preparation R88736',
    document_category: 'Partial screenshot',
    is_original: false,
    is_readable: true,
    ocr_required: true,
    evidentiary_significance: 'Proves drafting activity on 16 June 2026, but lacks submission timestamp and appeal memorandum.',
    related_assertion: 'Tenant assertion that appeal was filed timely',
    related_contradiction: 'CONT_001'
  },
  {
    id: 'IDX_003',
    exhibit_id: 'EX-03',
    page_number: 1,
    page_range: '1',
    document_title: 'Electronic Payment Gateway Failure Receipt',
    document_category: 'Official record',
    is_original: true,
    is_readable: true,
    ocr_required: false,
    evidentiary_significance: 'Proves BHD 30 fee payment failed. Fatal to perfected statutory filing.',
    related_event: 'EVT_005',
    related_contradiction: 'CONT_002'
  },
  {
    id: 'IDX_004',
    exhibit_id: 'EX-04',
    page_number: 2,
    page_range: '1-3',
    document_title: 'Verified Bank Account Statement of Rent Payments',
    document_category: 'Primary evidence',
    is_original: true,
    is_readable: true,
    ocr_required: false,
    evidentiary_significance: 'Substantiates partial payment of BHD 792. Contradicts full BHD 1,440 claim, but leaves BHD 648 unpaid.',
    related_assertion: 'Tenant claim that rent was completely satisfied'
  },
  {
    id: 'IDX_005',
    exhibit_id: 'EX-05',
    page_number: 1,
    page_range: '1',
    document_title: 'Execution Directorate Notice (File 042026162064)',
    document_category: 'Official record',
    is_original: true,
    is_readable: true,
    ocr_required: false,
    evidentiary_significance: 'Official notice establishing active enforcement in Execution File 042026162064.',
    related_event: 'EVT_006'
  },
  {
    id: 'IDX_006',
    exhibit_id: 'EX-06',
    page_number: 1,
    page_range: '1',
    document_title: 'Dismissal of Reconsideration Motion',
    document_category: 'Official record',
    is_original: true,
    is_readable: true,
    ocr_required: false,
    evidentiary_significance: 'Establishes prior rejection of reconsideration route. Bars revival under same theory.',
    related_event: 'EVT_002'
  }
];

export const PILOT_CHRONOLOGY: ChronologyEvent[] = [
  {
    event_id: 'EVT_000',
    date_and_time: '2026-03-20T11:00:00Z',
    date_type: 'Payment date',
    event_description: 'Final verified direct rent transfer of BHD 264 sent to lessor account, bringing proved total to BHD 792.',
    evidence_supporting: ['EX-04'],
    evidence_contradicting: [],
    procedural_effect: 'Partial substantive discharge of rent liability.',
    deadline_effect: 'None',
    related_route: 'R-03',
    confidence: 'HIGH CONFIDENCE',
    unknowns: ['Receipt confirmation from lessor accounting'],
    is_date_proved: true,
    date_proof_evidence_id: 'EV_004'
  },
  {
    event_id: 'EVT_001',
    date_and_time: '2026-06-03T10:30:00Z',
    date_type: 'Decision date',
    event_description: 'Rental Disputes Committee renders First-Instance Judgment awarding BHD 1,440 in respondent absence.',
    evidence_supporting: ['EX-01'],
    evidence_contradicting: [],
    procedural_effect: 'Enforceable decision issued; 15-day statutory appeal window triggered upon formal service.',
    deadline_effect: 'Appeal limitation period commences only upon verified legal service.',
    related_route: 'R-01',
    confidence: 'HIGH CONFIDENCE',
    unknowns: ['Formal service date and process server return record'],
    is_date_proved: true,
    date_proof_evidence_id: 'EV_001'
  },
  {
    event_id: 'EVT_002',
    date_and_time: '2026-06-12T09:00:00Z',
    date_type: 'Decision date',
    event_description: 'Rental Committee formally dismisses tenant reconsideration petition for absence of statutory jurisdiction.',
    evidence_supporting: ['EX-06'],
    evidence_contradicting: [],
    procedural_effect: 'Reconsideration route definitively exhausted and closed.',
    deadline_effect: 'Does not toll statutory appeal deadline.',
    related_route: 'R-05',
    confidence: 'HIGH CONFIDENCE',
    unknowns: [],
    is_date_proved: true,
    date_proof_evidence_id: 'EV_006'
  },
  {
    event_id: 'EVT_003',
    date_and_time: '2026-06-16T14:22:10Z',
    date_type: 'Save date',
    event_description: 'Electronic appeal draft R88736 saved on Ministry of Justice portal. Submission not completed.',
    evidence_supporting: ['EX-02'],
    evidence_contradicting: [],
    procedural_effect: 'Creates unsubmitted draft state only; does not lodge appeal in court registry.',
    deadline_effect: 'Does NOT preserve or satisfy appeal deadline without formal submission and fee.',
    related_route: 'R-01',
    confidence: 'MODERATE CONFIDENCE',
    unknowns: ['Portal backend session logs', 'Reason memorandum was omitted'],
    is_date_proved: true,
    date_proof_evidence_id: 'EV_002'
  },
  {
    event_id: 'EVT_004',
    date_and_time: 'UNKNOWN',
    date_type: 'Service date',
    event_description: 'Judgment-service date is UNKNOWN. No process server return, bailiff delivery receipt, or electronic service confirmation exists in the record.',
    evidence_supporting: [],
    evidence_contradicting: [],
    procedural_effect: 'Statutory 15-day appeal window under Article 28 commences only upon formal notification. Status is unresolved.',
    deadline_effect: 'CANNOT BE CALCULATED: Service date is UNKNOWN.',
    related_route: 'R-01',
    confidence: 'UNRESOLVED',
    unknowns: ['Process server return', 'Bailiff notice record', 'Official service certificate'],
    is_date_proved: false
  },
  {
    event_id: 'EVT_005',
    date_and_time: '2026-07-05T09:12:44Z',
    date_type: 'Payment date',
    event_description: 'Payment attempt of BHD 30 for appeal fees (Ref BD-PAY-99201) DECLINED by payment gateway.',
    evidence_supporting: ['EX-03'],
    evidence_contradicting: [],
    procedural_effect: 'Appeal fee unpaid. Court registry cannot docket appeal without statutory fee clearance.',
    deadline_effect: 'Failed payment does not preserve limitation period.',
    related_route: 'R-01',
    confidence: 'HIGH CONFIDENCE',
    unknowns: ['Whether retry payment was attempted within 24 hours'],
    is_date_proved: true,
    date_proof_evidence_id: 'EV_003'
  },
  {
    event_id: 'EVT_006',
    date_and_time: '2026-07-18T10:00:00Z',
    date_type: 'Issue date',
    event_description: 'Execution Directorate issues enforcement notification under Execution File 042026162064.',
    evidence_supporting: ['EX-05'],
    evidence_contradicting: [],
    procedural_effect: 'Execution File 042026162064 is active.',
    deadline_effect: 'Enforcement proceedings active.',
    related_route: 'R-03',
    confidence: 'HIGH CONFIDENCE',
    unknowns: [],
    is_date_proved: true,
    date_proof_evidence_id: 'EV_005'
  }
];

export const PILOT_FINANCIAL_ENTRIES: FinancialEntry[] = [
  {
    id: 'FIN_001',
    category: 'amount_awarded',
    amount: 1440,
    currency: 'BHD',
    date: '2026-06-03',
    payment_reference: 'RDC-Judgment-2026',
    recipient_account_evidence: 'Rental Disputes Committee Judgment',
    evidence_id: 'EV_001',
    notes: 'Principal judgment debt awarded against tenant for alleged unpaid rent.',
    is_allocation_disputed: true,
    status: 'VERIFIED'
  },
  {
    id: 'FIN_002',
    category: 'amount_paid_directly',
    amount: 264,
    currency: 'BHD',
    date: '2026-01-15',
    payment_reference: 'FT2601599182',
    recipient_account_evidence: 'Commercial Bank of Bahrain Statement IBAN BH88...901',
    evidence_id: 'EV_004',
    notes: 'January 2026 rent payment verified via official bank debit transfer.',
    is_allocation_disputed: false,
    status: 'VERIFIED'
  },
  {
    id: 'FIN_003',
    category: 'amount_paid_directly',
    amount: 264,
    currency: 'BHD',
    date: '2026-02-18',
    payment_reference: 'FT2604910284',
    recipient_account_evidence: 'Commercial Bank of Bahrain Statement IBAN BH88...901',
    evidence_id: 'EV_004',
    notes: 'February 2026 rent payment verified via official bank debit transfer.',
    is_allocation_disputed: false,
    status: 'VERIFIED'
  },
  {
    id: 'FIN_004',
    category: 'amount_paid_directly',
    amount: 264,
    currency: 'BHD',
    date: '2026-03-20',
    payment_reference: 'FT2608031109',
    recipient_account_evidence: 'Commercial Bank of Bahrain Statement IBAN BH88...901',
    evidence_id: 'EV_004',
    notes: 'March 2026 rent payment verified via official bank debit transfer.',
    is_allocation_disputed: false,
    status: 'VERIFIED'
  },
  {
    id: 'FIN_005',
    category: 'failed_payments',
    amount: 30,
    currency: 'BHD',
    date: '2026-07-05',
    payment_reference: 'BD-PAY-99201',
    recipient_account_evidence: 'BenefitPay / Gateway Decline Advice EX-03',
    evidence_id: 'EV_003',
    notes: 'Electronic appeal filing fee transaction failed (Code 91 Issuer Decline). Not credited.',
    is_allocation_disputed: false,
    status: 'VERIFIED'
  },
  {
    id: 'FIN_006',
    category: 'amount_claimed',
    amount: 1440,
    currency: 'BHD',
    date: '2026-06-03',
    payment_reference: 'CLAIM-RDC-01',
    recipient_account_evidence: 'Landlord initial claim pleading',
    evidence_id: 'EV_001',
    notes: 'Landlord claimed total rent without crediting partial payments of BHD 792.',
    is_allocation_disputed: true,
    status: 'CLAIMED_ONLY'
  }
];

export const PILOT_CONTRADICTIONS: ContradictionItem[] = [
  {
    contradiction_id: 'CONT_001',
    proposition_a: 'Tenant claims appeal was submitted on 16 June 2026.',
    source_a: 'Tenant Intake Statement (User Assertion)',
    proposition_b: 'Portal system records state "Draft - Unsubmitted" with no registered case number or filing memo.',
    source_b: 'Portal Screenshot R88736 (EX-02)',
    type: 'Filing-status conflict',
    materiality: 'FATAL',
    possible_explanation: 'Tenant saved portal draft and assumed save button completed court lodging.',
    evidence_required_to_resolve: 'Official Ministry of Justice electronic filing audit log or registry submission receipt.',
    route_affected: 'Route R-01 (Ordinary Appeal)',
    current_status: 'OPEN'
  },
  {
    contradiction_id: 'CONT_002',
    proposition_a: 'Tenant asserts statutory appeal fees were settled.',
    source_a: 'Tenant Intake Statement (User Assertion)',
    proposition_b: 'Payment gateway receipt proves transaction declined and fee was not received.',
    source_b: 'Payment Gateway Advice Ref BD-PAY-99201 (EX-03)',
    type: 'Amount conflict',
    materiality: 'FATAL',
    possible_explanation: 'Tenant confused payment gateway submission attempt with successful debit clearance.',
    evidence_required_to_resolve: 'Bank debit showing BHD 30 cleared to Ministry of Justice treasury.',
    route_affected: 'Route R-01 (Ordinary Appeal)',
    current_status: 'OPEN'
  },
  {
    contradiction_id: 'CONT_003',
    proposition_a: 'Landlord obtained judgment for full BHD 1,440 arrears.',
    source_a: 'First-Instance Judgment (EX-01)',
    proposition_b: 'Tenant bank statements establish BHD 792 in direct transfers to landlord.',
    source_b: 'Commercial Bank of Bahrain Statement (EX-04)',
    type: 'Amount conflict',
    materiality: 'MATERIAL',
    possible_explanation: 'Landlord did not disclose partial payments to the committee in respondent absence.',
    evidence_required_to_resolve: 'Certified bank ledger and landlord accounting reconciliation in Execution File 042026162064.',
    route_affected: 'Route R-03 (Execution File Accounting Verification)',
    current_status: 'OPEN'
  },
  {
    contradiction_id: 'CONT_004',
    proposition_a: 'Enforcement proceedings in Execution File 042026162064 assume judgment was served.',
    source_a: 'Execution Notice (EX-05)',
    proposition_b: 'No proof of service or delivery certificate exists in available case record.',
    source_b: 'Case Record Evidence Audit',
    type: 'Service conflict',
    materiality: 'FATAL',
    possible_explanation: 'Process service status remains unverified until court execution docket is inspected.',
    evidence_required_to_resolve: 'Inspection of court execution docket for certified process server return.',
    route_affected: 'Route R-01 (Ordinary Appeal)',
    current_status: 'OPEN'
  }
];

export const PILOT_LEGAL_PROPOSITIONS: LegalProposition[] = [
  {
    proposition_id: 'PROP_001',
    proposition: 'Judgments of the Rental Disputes Committee may be appealed before the High Civil Court within fifteen days from the date of formal service or delivery.',
    jurisdiction: 'Kingdom of Bahrain',
    authority_type: 'Statute / Legislation',
    authority_title: 'Law No. 27 of 2014 Promulgating the Real Estate Rent Law',
    article_or_paragraph: 'Article 28 (Paragraph 2)',
    effective_date: '2015-02-07',
    version_checked: 'Official Gazette Edition No. 3169',
    amendment_history_checked: true,
    exact_supporting_passage: 'The decisions of the committee may be appealed before the High Civil Court within fifteen days from the date of notifying the judgment to the party against whom it was rendered.',
    source_url: 'https://www.legalaffairs.gov.bh/Legislation/RentLaw2014',
    source_citation: 'Bahrain Rent Law No. 27/2014, Art. 28',
    directly_supported: true,
    contrary_authority: [],
    confidence: 'HIGH CONFIDENCE',
    limitations: 'Commencement strictly conditioned upon notification. Does not commence from mere date of pronouncement unless delivered in presence.',
    priority_tier: 1
  },
  {
    proposition_id: 'PROP_002',
    proposition: 'An electronic appeal is not legally instituted until payment of statutory judicial fees and issuance of an official case registration number.',
    jurisdiction: 'Kingdom of Bahrain',
    authority_type: 'Ministerial Regulation & Procedure',
    authority_title: 'Minister of Justice Decree No. 27 of 2021 regarding Electronic Filing System',
    article_or_paragraph: 'Articles 4 and 7',
    effective_date: '2021-04-15',
    version_checked: 'Official Gazette No. 3521',
    amendment_history_checked: true,
    exact_supporting_passage: 'The electronic registration of an appeal shall be considered complete and legally effective only upon verification of all mandatory documents, settlement of the prescribed judicial fees via the approved electronic portal, and generation of a formal case registration number.',
    source_url: 'https://www.moj.gov.bh/regulations/efiling',
    source_citation: 'Ministerial Decree No. 27/2021, Arts. 4 & 7',
    directly_supported: true,
    contrary_authority: [],
    confidence: 'HIGH CONFIDENCE',
    limitations: 'Draft saves do not toll or preserve limitation periods unless portal malfunction is officially certified by the IT Directorate.',
    priority_tier: 5
  },
  {
    proposition_id: 'PROP_003',
    proposition: 'Decisions of the Rental Disputes Committee are not subject to administrative or judicial reconsideration before the same committee.',
    jurisdiction: 'Kingdom of Bahrain',
    authority_type: 'Binding Cassation Decision',
    authority_title: 'Court of Cassation Judgment No. 412/2018 (Civil Chamber)',
    article_or_paragraph: 'Legal Principles, Rent Disputes',
    effective_date: '2019-01-28',
    version_checked: 'Cassation Technical Bureau Reports Vol. 22',
    amendment_history_checked: true,
    exact_supporting_passage: 'The Real Estate Rent Law created a special single-instance adjudicative committee whose awards are subject exclusively to appeal before the High Civil Court; therefore, motions for reconsideration filed before the committee are non-cognizable and devoid of legal effect.',
    source_url: 'https://www.moj.gov.bh/cassation/reports',
    source_citation: 'Bahrain Cassation Judgment 412/2018 Civ.',
    directly_supported: true,
    contrary_authority: [],
    confidence: 'HIGH CONFIDENCE',
    limitations: 'Applies strictly to petitions addressed to the committee itself.',
    priority_tier: 4
  }
];

export const PILOT_ROUTES: RouteItem[] = [
  // Route 1 (EVIDENCE-DEPENDENT 1)
  {
    route_id: 'R-01',
    route_name: 'Ordinary High Court Appeal (Statutory Appeal under Rent Law No. 27/2014, Art. 28)',
    status: 'EVIDENCE-DEPENDENT',
    exact_objective_advanced: 'Lodge formal High Civil Court appeal against Rental Judgment by establishing whether statutory 15-day appeal window remains open due to unverified service.',
    procedural_vehicle: 'Notice of Appeal under Real Estate Rent Law No. 27/2014 Article 28',
    jurisdiction_or_authority: 'High Civil Court (Appellate Division)',
    controlling_authority: [
      'Rent Law No. 27/2014 Article 28',
      'Ministerial Decree No. 27/2021 Articles 4 & 7'
    ],
    required_elements: [
      {
        id: 'EL_01',
        element_name: 'Competent Appellate Subject Matter Jurisdiction',
        legal_basis: 'Rent Law Art. 28',
        is_verified: true,
        evidence_ids: ['EV_001'],
        status: 'MET',
        fatal_if_missing: true
      },
      {
        id: 'EL_02',
        element_name: 'Statutory 15-Day Appeal Window Still Open (Service Not Perfected)',
        legal_basis: 'Rent Law Art. 28 (Commencement strictly upon formal notification)',
        is_verified: false,
        evidence_ids: [],
        status: 'DEPENDENT_ON_REQUEST',
        fatal_if_missing: true
      },
      {
        id: 'EL_03',
        element_name: 'Statutory Fee Clearance (BHD 30 Fee Settlement)',
        legal_basis: 'Decree 27/2021 Art. 4',
        is_verified: false,
        evidence_ids: ['EV_003'],
        status: 'UNMET',
        fatal_if_missing: true
      },
      {
        id: 'EL_04',
        element_name: 'Substantive Signed Appeal Memorandum Attached',
        legal_basis: 'Appellate Filing Regulations',
        is_verified: false,
        evidence_ids: ['EV_002'],
        status: 'UNMET',
        fatal_if_missing: true
      }
    ],
    supporting_evidence: ['EV_001', 'EV_002'],
    missing_evidence: [
      'Certified Service Docket Return confirming whether judgment was served',
      'Successful fee payment receipt (BHD 30)',
      'Substantive Appeal Memorandum signed by qualified counsel'
    ],
    admissibility_issues: [
      'Portal screenshot R88736 is an unsubmitted draft; carries no legal filing status.'
    ],
    previously_available: true,
    previously_considered: false,
    prior_history: [
      'Draft saved on 16 June 2026 (R88736); payment failed on 5 July 2026.'
    ],
    deadline: {
      duration: '15 calendar days from formal service',
      commencement_event: 'Formal statutory service of judgment',
      commencement_evidence: [],
      commencement_proved: false,
      calculation: 'Cannot be calculated: Service date is UNKNOWN. Under Article 28, the 15-day limitation commences exclusively upon formal notification.',
      expiry_date: 'CANNOT BE CALCULATED (SERVICE DATE UNPROVED)',
      status: 'PENDING_SERVICE'
    },
    required_filing_or_action: 'Targeted inquiry at court execution registry regarding whether judgment was formally served on tenant; prepare signed memorandum of appeal and settle BHD 30 fee only if service is unproved.',
    available_remedy: 'Trial de novo or appellate review before High Civil Court; potential vacation or modification of rent award.',
    result_it_can_produce: 'Re-evaluation of rent arrears and consideration of BHD 792 bank receipts.',
    result_it_cannot_produce: 'Automatic self-executing stay of eviction without interlocutory stay motion.',
    strongest_supporting_argument: 'Article 28 explicitly begins the 15-day appeal period from the date of formal notification of judgment. If service was never perfected, the appeal period has not commenced.',
    strongest_contrary_argument: 'Opposing counsel will argue tenant demonstrated actual awareness by saving draft R88736 on 16 June 2026, failed to submit the appeal for weeks, and fee payment was declined.',
    likely_decision_maker_response: 'Will dismiss appeal for tardiness unless appellant affirmatively establishes that statutory service never occurred.',
    consequences_if_unsuccessful: 'Summary dismissal for limitation expiry; forfeiture of appeal fee and liability for opposing costs.',
    possible_costs: 'BHD 30 filing fee + statutory deposit and potential adverse costs.',
    cheaper_verification_step: 'Targeted registry inquiry regarding service return before filing substantive notice.',
    disproof_attempt: 'If the court docket contains a certified return of service dated prior to 1 July 2026, this route is DEAD.',
    stop_condition: 'Discovery of an official service return proving timely service of judgment upon the tenant.',
    confidence: 'MODERATE CONFIDENCE',
    confidence_reason: 'The record proves an incomplete appeal preparation saved shortly after judgment, but does not prove submission, successful payment, registration, or preservation of the save date as the legal filing date. Formal service of the judgment has not been established from the available correspondence record.',
    source_citations: ['Rent Law No. 27/2014 Art. 28', 'Decree No. 27/2021'],
    survival_score: 40
  },

  // Route 2 (EVIDENCE-DEPENDENT 2)
  {
    route_id: 'R-02',
    route_name: 'Targeted Electronic Filing Audit (Portal Session R88736)',
    status: 'EVIDENCE-DEPENDENT',
    exact_objective_advanced: 'Verify whether draft preparation R88736 encountered a portal system outage or gateway transmission timeout during the 5 July 2026 transaction.',
    procedural_vehicle: 'Technical/Administrative Verification of Portal Transaction Logs (eGovernment Gateway)',
    jurisdiction_or_authority: 'Ministry of Justice IT Directorate / eServices Administration',
    controlling_authority: [
      'Ministerial Decree No. 27/2021 Article 4'
    ],
    required_elements: [
      {
        id: 'EL_11',
        element_name: 'Documented Portal Session Identifier',
        legal_basis: 'Decree 27/2021',
        is_verified: true,
        evidence_ids: ['EV_002'],
        status: 'MET',
        fatal_if_missing: true
      },
      {
        id: 'EL_12',
        element_name: 'Certified Evidence of System Force Majeure / Gateway Malfunction',
        legal_basis: 'Administrative Procedure Rules',
        is_verified: false,
        evidence_ids: ['EV_003'],
        status: 'UNMET',
        fatal_if_missing: true
      }
    ],
    supporting_evidence: ['EV_002'],
    missing_evidence: [
      'Official technical log confirming whether portal server malfunction occurred'
    ],
    admissibility_issues: [],
    previously_available: true,
    previously_considered: false,
    prior_history: [
      'User encountered decline Code 91 on 5 July 2026.'
    ],
    deadline: {
      duration: 'N/A (Investigative verification step)',
      commencement_event: 'Portal session save 16 June 2026',
      commencement_evidence: ['EV_002'],
      commencement_proved: true,
      calculation: 'Administrative verification inquiry; does not toll statutory deadline.',
      expiry_date: 'N/A',
      status: 'NOT_APPLICABLE'
    },
    required_filing_or_action: 'Submit neutral administrative inquiry to eServices administration for certified session audit log of Preparation R88736.',
    available_remedy: 'Certified report on whether payment gateway session failed due to portal glitch or user issuer decline.',
    result_it_can_produce: 'Clarification of gateway failure cause.',
    result_it_cannot_produce: 'Cannot automatically revive expired statutory appeal deadline without judicial order.',
    strongest_supporting_argument: 'Draft preparation timestamped 16 June 2026 demonstrates timely initiation of appeal process.',
    strongest_contrary_argument: 'Gateway log shows Code 91 (Card Issuer Decline), which is a cardholder financial decline rather than a portal server outage.',
    likely_decision_maker_response: 'Will confirm transaction was rejected by payment processor due to card issuer decline.',
    consequences_if_unsuccessful: 'Confirms that payment failure was not caused by court system error.',
    possible_costs: 'Nominal administrative inquiry fee.',
    cheaper_verification_step: 'Check card issuer bank statement for transaction decline reason.',
    disproof_attempt: 'Gateway response Code 91 confirms issuer decline rather than system outage.',
    stop_condition: 'Official portal audit confirmation that gateway operated normally.',
    confidence: 'LOW CONFIDENCE',
    confidence_reason: 'Current evidence EX-03 indicates card issuer decline rather than official portal malfunction.',
    source_citations: ['Decree 27/2021', 'EX-03'],
    survival_score: 35
  },

  // Route 3 (EVIDENCE-DEPENDENT 3)
  {
    route_id: 'R-03',
    route_name: 'Accounting Verification of Bank Transfers in Execution File 042026162064',
    status: 'EVIDENCE-DEPENDENT',
    exact_objective_advanced: 'Verify whether BHD 792 direct bank transfers were credited in Execution File 042026162064 or whether creditor claims full BHD 1,440.',
    procedural_vehicle: 'Accounting Disclosure Request to Execution Directorate in File 042026162064',
    jurisdiction_or_authority: 'Execution Directorate',
    controlling_authority: [
      'Execution Directorate Accounting Guidelines'
    ],
    required_elements: [
      {
        id: 'EL_31',
        element_name: 'Active Execution File Identified',
        legal_basis: 'Enforcement Regulations',
        is_verified: true,
        evidence_ids: ['EV_005'],
        status: 'MET',
        fatal_if_missing: true
      },
      {
        id: 'EL_32',
        element_name: 'Verified Documentary Proof of Bank Transfers (BHD 792)',
        legal_basis: 'Banking Evidence Standards',
        is_verified: true,
        evidence_ids: ['EV_004'],
        status: 'MET',
        fatal_if_missing: true
      },
      {
        id: 'EL_33',
        element_name: 'Creditor Accounting Reconciliation',
        legal_basis: 'Enforcement Ledger Verification',
        is_verified: false,
        evidence_ids: [],
        status: 'DEPENDENT_ON_REQUEST',
        fatal_if_missing: true
      }
    ],
    supporting_evidence: ['EV_004', 'EV_005'],
    missing_evidence: [
      'Official statement of debt accounting from Execution File 042026162064',
      'Proof of residual payment for remaining BHD 648 balance'
    ],
    admissibility_issues: [],
    previously_available: true,
    previously_considered: false,
    prior_history: [
      'Notice in Execution File 042026162064 received 18 July 2026.'
    ],
    deadline: {
      duration: 'Pending ongoing enforcement',
      commencement_event: 'Opening of Execution File 042026162064',
      commencement_evidence: ['EV_005'],
      commencement_proved: true,
      calculation: 'Ongoing enforcement proceeding.',
      expiry_date: 'ACTIVE ENFORCEMENT PENDING',
      status: 'UNRESOLVED'
    },
    required_filing_or_action: 'Request statement of account in Execution File 042026162064 and produce verified bank transfer statements (EX-04) showing BHD 792 payment.',
    available_remedy: 'Accounting reconciliation and credit of BHD 792 against enforceable debt.',
    result_it_can_produce: 'Reduction of executable liability from BHD 1,440 to BHD 648 if transfers are recognized.',
    result_it_cannot_produce: 'Cannot overturn eviction order or discharge unproved residual balance of BHD 648.',
    strongest_supporting_argument: 'Documented bank transfers to lessor IBAN prove partial satisfaction of rent.',
    strongest_contrary_argument: 'Creditor may assert payments were applied to an earlier lease period or refuse voluntary reconciliation.',
    likely_decision_maker_response: 'Execution Directorate requires formal creditor concurrence or court order to amend enforceable amount.',
    consequences_if_unsuccessful: 'Enforcement proceeds for the full judgment debt.',
    possible_costs: 'Nominal administrative stamp fees.',
    cheaper_verification_step: 'Produce stamped bank transfer confirmations to execution clerk.',
    disproof_attempt: 'Creditor showing transfers were allocated to earlier rent arrears with corresponding receipts.',
    stop_condition: 'Accounting statement confirming full debt reconciliation.',
    confidence: 'MODERATE CONFIDENCE',
    confidence_reason: 'Bank transfers of BHD 792 are verified, but creditor accounting position in File 042026162064 is unverified.',
    source_citations: ['EX-04', 'EX-05'],
    survival_score: 45
  },

  // Route 4 (WEAK 1)
  {
    route_id: 'R-04',
    route_name: 'Extraordinary Petition for Rehearing (Concealed Evidence Theory)',
    status: 'WEAK',
    exact_objective_advanced: 'Seek extraordinary reopening of rental judgment on grounds that creditor concealed partial rent transfers of BHD 792 during hearings held in respondent absence.',
    procedural_vehicle: 'Extraordinary Petition for Review / Rehearing',
    jurisdiction_or_authority: 'Rental Disputes Committee',
    controlling_authority: [
      'Cassation Principles on Finality of Tribunal Awards'
    ],
    required_elements: [
      {
        id: 'EL_41',
        element_name: 'Concealment of Decisive Evidence by Adverse Party',
        legal_basis: 'Procedural Reopening Doctrine',
        is_verified: false,
        evidence_ids: ['EV_001', 'EV_004'],
        status: 'UNMET',
        fatal_if_missing: true
      },
      {
        id: 'EL_42',
        element_name: 'Evidence Was Unknown and Unavailable to Petitioner During Trial',
        legal_basis: 'Prior Availability Bar',
        is_verified: false,
        evidence_ids: ['EV_004'],
        status: 'CONTRADICTED',
        fatal_if_missing: true
      }
    ],
    supporting_evidence: ['EV_004'],
    missing_evidence: [
      'Proof that debtor was prevented from producing bank statements during trial'
    ],
    admissibility_issues: [
      'Tenant possessed own bank statements throughout; cannot claim evidence was concealed or post-judgment discovered.'
    ],
    previously_available: true,
    previously_considered: false,
    prior_history: [],
    deadline: {
      duration: 'Strict statutory review window (if vehicle cognizable)',
      commencement_event: 'Discovery of concealed fraud',
      commencement_evidence: [],
      commencement_proved: false,
      calculation: 'High threshold; vehicle generally non-cognizable before RDC.',
      expiry_date: 'UNRESOLVED',
      status: 'UNRESOLVED'
    },
    required_filing_or_action: 'None recommended. High risk of procedural dismissal.',
    available_remedy: 'Reopening of first-instance judgment.',
    result_it_can_produce: 'Theoretical vacation of judgment.',
    result_it_cannot_produce: 'Cannot bypass prior availability rule.',
    strongest_supporting_argument: 'Landlord obtained judgment for amounts already paid by tenant.',
    strongest_contrary_argument: 'Tenant held the bank statements during the trial; failure to appear does not convert existing evidence into newly discovered evidence.',
    likely_decision_maker_response: 'Dismissal under prior availability doctrine and absence of statutory review vehicle.',
    consequences_if_unsuccessful: 'Summary dismissal and potential adverse costs.',
    possible_costs: 'Court fees and costs.',
    cheaper_verification_step: 'Assess whether ordinary appeal route survives before pursuing extraordinary petition.',
    disproof_attempt: 'Prior availability rule conclusively defeats this theory.',
    stop_condition: 'Application of prior availability rule.',
    confidence: 'LOW CONFIDENCE',
    confidence_reason: 'Prior availability bar fatally impairs this theory.',
    source_citations: ['Cassation 412/2018'],
    survival_score: 20
  },

  // Route 5 (DEAD 1)
  {
    route_id: 'R-05',
    route_name: 'Informal Reconsideration Motion to Rental Disputes Committee',
    status: 'DEAD',
    exact_objective_advanced: 'Repeat reconsideration petition to Rental Disputes Committee asking to vacate the 3 June 2026 judgment.',
    procedural_vehicle: 'Petition for Reconsideration / Grievance',
    jurisdiction_or_authority: 'Rental Disputes Committee',
    controlling_authority: [
      'Cassation Judgment 412/2018 (Bars Reconsideration before RDC)'
    ],
    required_elements: [
      {
        id: 'EL_51',
        element_name: 'Statutory Reconsideration Jurisdiction',
        legal_basis: 'Real Estate Rent Law No. 27/2014',
        is_verified: false,
        evidence_ids: ['EV_006'],
        status: 'CONTRADICTED',
        fatal_if_missing: true
      }
    ],
    supporting_evidence: [],
    missing_evidence: ['Statutory reconsideration authority does not exist'],
    admissibility_issues: ['Procedurally non-cognizable; tribunal is functus officio'],
    previously_available: true,
    previously_considered: true,
    prior_history: [
      'Filed 10 June 2026; Formally dismissed by RDC Secretariat on 12 June 2026 (EX-06).'
    ],
    deadline: {
      duration: 'None',
      commencement_event: 'N/A',
      commencement_evidence: [],
      commencement_proved: false,
      calculation: 'Barred',
      expiry_date: 'EXPIRED',
      status: 'EXPIRED'
    },
    required_filing_or_action: 'None. BARRED ROUTE.',
    available_remedy: 'None',
    result_it_can_produce: 'None',
    result_it_cannot_produce: 'Cannot revive or modify judgment.',
    strongest_supporting_argument: 'Equitable plea to correct rental calculation.',
    strongest_contrary_argument: 'Rental Disputes Law provides no reconsideration vehicle; Cassation precedent 412/2018 confirms tribunal lacks jurisdiction.',
    likely_decision_maker_response: 'Immediate rejection for lack of jurisdiction.',
    consequences_if_unsuccessful: 'Waste of critical time and forfeiture of judicial fees.',
    possible_costs: 'Wasted expenses.',
    cheaper_verification_step: 'None needed. Official rejection order EX-06 is on file.',
    disproof_attempt: 'Route is conclusively barred by prior dismissal order EX-06 and Cassation precedent.',
    stop_condition: 'Conclusively barred.',
    confidence: 'NOT SUPPORTABLE',
    confidence_reason: 'Conclusively barred by Cassation Judgment 412/2018 and prior dismissal order EX-06.',
    source_citations: ['Cassation Judgment 412/2018', 'EX-06'],
    survival_score: 0
  }
];

export const PILOT_ADVERSARIAL_REVIEWS: AdversarialReviewItem[] = [
  {
    route_id: 'R-01',
    route_name: 'Ordinary High Court Appeal (Statutory Appeal under Rent Law No. 27/2014, Art. 28)',
    bars_checked: {
      'Limitation': { passed: false, note: 'Limitation depends on service date, which is UNKNOWN. Unproved in current record.' },
      'Deadline': { passed: false, note: 'Draft date (16 June) does not preserve deadline.' },
      'Commencement of deadline': { passed: false, note: 'Service date is unknown; cannot calculate if 15 days expired.' },
      'Valid service': { passed: false, note: 'No service return in record. Must be verified from court execution docket.' },
      'Waiver': { passed: true, note: 'No affirmative waiver of appellate rights.' },
      'Acquiescence': { passed: true, note: 'Tenant has not voluntarily satisfied judgment.' },
      'Previous availability of evidence': { passed: true, note: 'Direct appeal allows review of first-instance findings.' },
      'Prior rejection': { passed: true, note: 'High Court appeal has not been rejected by a judge.' },
      'Claim preclusion': { passed: true, note: 'First-instance judgment is subject to direct appeal if timely.' },
      'Issue preclusion': { passed: true, note: 'Direct appeal permits review of issues.' },
      'Res judicata': { passed: false, note: 'If appeal window has expired, judgment is res judicata.' },
      'Jurisdiction': { passed: true, note: 'High Civil Court has competent subject matter jurisdiction.' },
      'Standing': { passed: true, note: 'Tenant is direct judgment debtor.' },
      'Admissibility': { passed: true, note: 'Judgment copy is admissible.' },
      'Authentication': { passed: true, note: 'Official judgment authenticated.' },
      'Missing legal element': { passed: false, note: 'Missing mandatory signed appeal memo and fee clearance.' },
      'Lack of remedy': { passed: true, note: 'Appellate court possesses plenary power.' },
      'Lack of causation': { passed: true, note: 'Directly challenges judgment.' },
      'Failure to advance exact objective': { passed: true, note: 'Directly targets vacating judgment.' },
      'Adverse-cost exposure': { passed: false, note: 'Tenant exposed to statutory costs if appeal is dismissed for tardiness.' },
      'Procedural misuse': { passed: true, note: 'Seeking legitimate appeal.' },
      'Repackaging of a rejected theory': { passed: true, note: 'Independent statutory appeal, not reconsideration.' }
    },
    strongest_supporting_case: 'Article 28 of Rent Law No. 27/2014 requires notification to trigger 15-day period. If service was never perfected, appeal is timely.',
    strongest_contrary_case: 'Draft R88736 was unsubmitted, fee payment of 5 July failed, and execution is active.',
    evidence_that_would_defeat: 'Certified court return showing personal service on tenant prior to 1 July 2026.',
    authority_that_would_defeat: 'Ministerial Decree No. 27/2021 establishing electronic draft holds no legal standing.',
    already_rejected: false,
    is_route_genuinely_new: true,
    produces_requested_outcome: true,
    should_route_survive: true,
    survival_verdict: 'SURVIVES_AS_EVIDENCE_DEPENDENT'
  },
  {
    route_id: 'R-02',
    route_name: 'Targeted Electronic Filing Audit (Portal Session R88736)',
    bars_checked: {
      'Limitation': { passed: true, note: 'Administrative inquiry; not subject to court limitation.' },
      'Deadline': { passed: true, note: 'Technical records verification.' },
      'Commencement of deadline': { passed: true, note: 'N/A' },
      'Valid service': { passed: true, note: 'N/A' },
      'Waiver': { passed: true, note: 'N/A' },
      'Acquiescence': { passed: true, note: 'N/A' },
      'Previous availability of evidence': { passed: true, note: 'N/A' },
      'Prior rejection': { passed: true, note: 'No prior portal audit requested.' },
      'Claim preclusion': { passed: true, note: 'Technical investigation, not adjudication.' },
      'Issue preclusion': { passed: true, note: 'N/A' },
      'Res judicata': { passed: true, note: 'Administrative record request.' },
      'Jurisdiction': { passed: true, note: 'IT Directorate has authority over portal logs.' },
      'Standing': { passed: true, note: 'Session owner.' },
      'Admissibility': { passed: true, note: 'Certified technical log is admissible.' },
      'Authentication': { passed: true, note: 'Official eServices logs.' },
      'Missing legal element': { passed: false, note: 'Requires official portal certification of system error.' },
      'Lack of remedy': { passed: false, note: 'Audit alone cannot restore appeal without court order.' },
      'Lack of causation': { passed: true, note: 'Directly investigates filing barrier.' },
      'Failure to advance exact objective': { passed: true, note: 'Provides factual basis for potential extension.' },
      'Adverse-cost exposure': { passed: true, note: 'Minimal cost.' },
      'Procedural misuse': { passed: true, note: 'Legitimate administrative inquiry.' },
      'Repackaging of a rejected theory': { passed: true, note: 'New technical inquiry.' }
    },
    strongest_supporting_case: 'Demonstrates timely intent to file within statutory window if technical glitch occurred.',
    strongest_contrary_case: 'Code 91 confirms card issuer decline, which is a private banking issue rather than a portal server failure.',
    evidence_that_would_defeat: 'Gateway log confirming session expired due to card decline, not portal malfunction.',
    authority_that_would_defeat: 'Ministerial Decree No. 27/2021.',
    already_rejected: false,
    is_route_genuinely_new: true,
    produces_requested_outcome: false,
    should_route_survive: true,
    survival_verdict: 'SURVIVES_AS_EVIDENCE_DEPENDENT'
  },
  {
    route_id: 'R-03',
    route_name: 'Accounting Verification of Bank Transfers in Execution File 042026162064',
    bars_checked: {
      'Limitation': { passed: true, note: 'Enforcement proceedings in File 042026162064 are active.' },
      'Deadline': { passed: true, note: 'Pending execution.' },
      'Commencement of deadline': { passed: true, note: 'Enforcement notice issued 18 July 2026.' },
      'Valid service': { passed: true, note: 'Execution notice in hand.' },
      'Waiver': { passed: true, note: 'Debtor has not waived payment credits.' },
      'Acquiescence': { passed: true, note: 'No consent to full amount.' },
      'Previous availability of evidence': { passed: true, note: 'Banking debits can be credited in execution accounting.' },
      'Prior rejection': { passed: true, note: 'No prior accounting request filed in execution file.' },
      'Claim preclusion': { passed: true, note: 'Challenges accounting balance, not validity of title.' },
      'Issue preclusion': { passed: true, note: 'Payment credit was not adjudicated in judgment.' },
      'Res judicata': { passed: true, note: 'Execution Directorate verifies debt accounting.' },
      'Jurisdiction': { passed: true, note: 'Execution Directorate has jurisdiction over File 042026162064.' },
      'Standing': { passed: true, note: 'Judgment debtor in file 042026162064.' },
      'Admissibility': { passed: true, note: 'Certified bank statements admissible.' },
      'Authentication': { passed: true, note: 'Bank statements authenticated.' },
      'Missing legal element': { passed: false, note: 'Requires creditor confirmation or execution order to credit amount.' },
      'Lack of remedy': { passed: true, note: 'Enforcement debt can be adjusted to BHD 648.' },
      'Lack of causation': { passed: true, note: 'Directly addresses claimed debt.' },
      'Failure to advance exact objective': { passed: true, note: 'Reduces financial liability.' },
      'Adverse-cost exposure': { passed: true, note: 'Nominal.' },
      'Procedural misuse': { passed: true, note: 'Standard debt accounting verification.' },
      'Repackaging of a rejected theory': { passed: true, note: 'Never raised in execution file.' }
    },
    strongest_supporting_case: 'Documented bank transfers to lessor IBAN prove partial payment of BHD 792.',
    strongest_contrary_case: 'Creditor may dispute allocation or demand full amount under judgment title.',
    evidence_that_would_defeat: 'Receipts proving transfers were allocated to earlier rent arrears.',
    authority_that_would_defeat: 'None; payment satisfaction is a recognized defense in execution.',
    already_rejected: false,
    is_route_genuinely_new: true,
    produces_requested_outcome: true,
    should_route_survive: true,
    survival_verdict: 'SURVIVES_AS_EVIDENCE_DEPENDENT'
  },
  {
    route_id: 'R-04',
    route_name: 'Extraordinary Petition for Rehearing (Concealed Evidence Theory)',
    bars_checked: {
      'Limitation': { passed: false, note: 'Strict statutory review prerequisites not established.' },
      'Deadline': { passed: false, note: 'Unresolved.' },
      'Commencement of deadline': { passed: false, note: 'Unproved.' },
      'Valid service': { passed: true, note: 'N/A' },
      'Waiver': { passed: true, note: 'N/A' },
      'Acquiescence': { passed: true, note: 'N/A' },
      'Previous availability of evidence': { passed: false, note: 'FATAL: Bank statements were in tenant possession during trial.' },
      'Prior rejection': { passed: true, note: 'No prior extraordinary petition.' },
      'Claim preclusion': { passed: false, note: 'Direct appeal is the designated statutory remedy.' },
      'Issue preclusion': { passed: false, note: 'Tribunal made final award on claim.' },
      'Res judicata': { passed: false, note: 'First-instance award is final if unappealed.' },
      'Jurisdiction': { passed: false, note: 'Single-instance tribunal; extraordinary review vehicle doubtful.' },
      'Standing': { passed: true, note: 'Judgment debtor.' },
      'Admissibility': { passed: false, note: 'Prerequisites for extraordinary reopening unmet.' },
      'Authentication': { passed: true, note: 'Bank statements authenticated.' },
      'Missing legal element': { passed: false, note: 'Missing proof of post-judgment discovered evidence.' },
      'Lack of remedy': { passed: false, note: 'Committee lacks jurisdiction under Cassation 412/2018.' },
      'Lack of causation': { passed: false, note: 'Barred by prior availability doctrine.' },
      'Failure to advance exact objective': { passed: false, note: 'Subject to immediate summary dismissal.' },
      'Adverse-cost exposure': { passed: false, note: 'Exposes debtor to adverse court costs.' },
      'Procedural misuse': { passed: false, note: 'Repackages appeal grounds as extraordinary review.' },
      'Repackaging of a rejected theory': { passed: false, note: 'Circumvents expired appeal window.' }
    },
    strongest_supporting_case: 'Equitable principle that landlord obtained judgment for amounts already paid.',
    strongest_contrary_case: 'Prior availability doctrine: Debtor had bank records during proceedings; failure to appear does not create extraordinary reopening grounds.',
    evidence_that_would_defeat: 'Proof that tenant had bank statements before judgment was pronounced.',
    authority_that_would_defeat: 'Cassation Judgment 412/2018.',
    already_rejected: false,
    is_route_genuinely_new: false,
    produces_requested_outcome: false,
    should_route_survive: false,
    survival_verdict: 'BARRED_DISMISSED'
  },
  {
    route_id: 'R-05',
    route_name: 'Informal Reconsideration Motion to Rental Disputes Committee',
    bars_checked: {
      'Limitation': { passed: false, note: 'Time barred and non-cognizable.' },
      'Deadline': { passed: false, note: 'No statutory window exists.' },
      'Commencement of deadline': { passed: false, note: 'N/A' },
      'Valid service': { passed: true, note: 'N/A' },
      'Waiver': { passed: true, note: 'N/A' },
      'Acquiescence': { passed: true, note: 'N/A' },
      'Previous availability of evidence': { passed: false, note: 'Evidence was available during trial.' },
      'Prior rejection': { passed: false, note: 'Formally dismissed on 12 June 2026 by RDC Secretariat (EX-06).' },
      'Claim preclusion': { passed: false, note: 'Reconsideration already adjudicated and refused.' },
      'Issue preclusion': { passed: false, note: 'Committee lacks jurisdiction.' },
      'Res judicata': { passed: false, note: 'Functus officio.' },
      'Jurisdiction': { passed: false, note: 'FATAL: Committee lacks jurisdiction under Cassation 412/2018.' },
      'Standing': { passed: true, note: 'Party to dispute.' },
      'Admissibility': { passed: false, note: 'Petition non-cognizable.' },
      'Authentication': { passed: true, note: 'N/A' },
      'Missing legal element': { passed: false, note: 'No statutory basis.' },
      'Lack of remedy': { passed: false, note: 'Committee cannot overturn own judgment.' },
      'Lack of causation': { passed: false, note: 'Fails to advance lawful outcome.' },
      'Failure to advance exact objective': { passed: false, note: 'Cannot stay execution or vacate debt.' },
      'Adverse-cost exposure': { passed: true, note: 'N/A' },
      'Procedural misuse': { passed: false, note: 'Filing non-existent procedural remedy.' },
      'Repackaging of a rejected theory': { passed: false, note: 'FATAL: Exactly repeats rejected petition EX-06.' }
    },
    strongest_supporting_case: 'None under Bahrain procedural law.',
    strongest_contrary_case: 'Cassation Judgment 412/2018 completely strips RDC of jurisdiction to review its own decisions.',
    evidence_that_would_defeat: 'Reconsideration dismissal order dated 12 June 2026 already on file.',
    authority_that_would_defeat: 'Cassation Judgment 412/2018.',
    already_rejected: true,
    prior_rejection_reason: 'RDC Secretariat Order dismissed on 12 June 2026.',
    is_route_genuinely_new: false,
    produces_requested_outcome: false,
    should_route_survive: false,
    survival_verdict: 'BARRED_DISMISSED'
  }
];

export const PILOT_CONCLUSION_LEDGER: ConclusionLedgerState = {
  matter_id: 'MATTER_BAHRAIN_PILOT',
  last_updated: '2026-10-29T04:32:00Z',
  verified_facts: [
    'First-instance rental judgment was pronounced on 3 June 2026 for BHD 1,440.00 and eviction.',
    'Tenant transferred BHD 792.00 to lessor bank account across Jan-Mar 2026.',
    'Reconsideration motion was officially dismissed by RDC on 12 June 2026.',
    'Portal draft R88736 was saved on 16 June 2026 without signed appeal memorandum.',
    'BHD 30 appeal fee payment attempt on 5 July 2026 failed (Issuer Decline Code 91).',
    'Execution Directorate opened Execution File 042026162064 on 18 July 2026.'
  ],
  official_records: [
    'RDC First-Instance Judgment Document',
    'Payment Gateway Electronic Log Ref BD-PAY-99201',
    'Execution Directorate Notice (File 042026162064)',
    'Commercial Bank of Bahrain Account Statement'
  ],
  user_assertions: [
    'Tenant asserts the appeal was legally filed on 16 June 2026.',
    'Tenant asserts the failed card payment preserved the filing window.',
    'Tenant asserts judgment notification was never served.'
  ],
  assumptions: [
    'Assumed lessor has not commenced bank account seizure yet.'
  ],
  inferences: [
    'TECHNICAL INFERENCE: Tenant reached draft stage of portal but exited upon encountering payment failure.',
    'LEGAL INFERENCE: If formal service was unperfected by bailiff, 15-day appeal window has not expired under Article 28.'
  ],
  unknowns: [
    'DECISIVE UNKNOWN: Exact date and method of judgment service by court bailiff/registry (service date is UNKNOWN).',
    'UNKNOWN: Whether creditor accounted for BHD 792 transfers in Execution File 042026162064.'
  ],
  contradictions_count: 4,
  open_routes: [
    'R-01 (Ordinary Appeal - EVIDENCE-DEPENDENT)',
    'R-02 (Electronic Filing Audit - EVIDENCE-DEPENDENT)',
    'R-03 (Execution File Accounting Verification - EVIDENCE-DEPENDENT)'
  ],
  closed_routes: ['R-04 (Extraordinary Rehearing - WEAK)'],
  rejected_routes: ['R-05 (Reconsideration - DEAD)'],
  decisive_missing_evidence: [
    'Certified Service Docket Return from court registry to establish whether appeal deadline has commenced.',
    'Signed Appeal Memorandum of Legal Grounds by qualified counsel.'
  ],
  current_committed_conclusion:
    'The record proves an incomplete appeal preparation saved shortly after judgment, but does not prove submission, successful payment, registration, or preservation of the save date as the legal filing date. Formal service of the judgment has not been established from the available correspondence record.',
  previous_conclusions: [
    'Initial intake assessment: Possible timely appeal based on 16 June draft.'
  ],
  corrections: [
    {
      id: 'CORR_001',
      timestamp: '2026-10-29T03:30:00Z',
      type: 'I_OVERSTATED_THIS',
      exact_earlier_claim: 'Initial assessment assumed draft R88736 saved within 15 days preserved statutory appeal status.',
      corrected_conclusion: 'Saving a draft in the electronic portal does not constitute legal lodging under Ministerial Decree 27/2021 without successful fee payment and docketing. Route is EVIDENCE-DEPENDENT on proving service was never perfected.',
      evidence_causing_correction: 'Payment gateway decline advice EX-03 and Ministerial Decree No. 27/2021 Articles 4 & 7.',
      effect_on_roadmap: 'Blocked substantive appeal filing recommendation; converted next action to Targeted Service Docket Inspection.'
    }
  ]
};

export const PILOT_ROADMAP: RoadmapPlan = {
  primary_route: null, // ACTIVE: 0
  exact_next_action:
    'Perform targeted official docket verification of Execution File 042026162064 to establish whether formal service of the judgment was ever perfected, and verify whether the BHD 792 rent transfers were credited in the enforcement claim.',
  required_documents: [
    'Execution File 042026162064 Notice Copy',
    'Commercial Bank of Bahrain Account Statement (BHD 792 transfers)',
    'Official Docket Inspection Request'
  ],
  deadline_note:
    'Service date is UNKNOWN. The 15-day statutory appeal deadline cannot be calculated until service docket verification is completed.',
  decision_point:
    'Upon receipt of Execution File 042026162064 docket extract: If service was NEVER perfected, upgrade Route R-01 to ACTIVE, pay BHD 30 fee, attach signed memorandum, and file appeal. If service was perfected, evaluate voluntary settlement or accounting adjustment of BHD 792.',
  stop_condition:
    'Discovery of an official process service return proving timely service of judgment upon the tenant.',
  backup_route: null,
  backup_trigger_condition:
    'None active while primary route is pending service verification.',
  no_route_survived: false
};
