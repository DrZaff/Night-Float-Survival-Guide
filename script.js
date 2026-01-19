// UC Night Float Survival Guide (updated from Content-File.pdf)
// Offline-capable sections with in-app reference viewer.

/* ===========================
   DATA (SECTIONS)
   =========================== */

const APP_TITLE = "UC Night Float Survival Guide";

// Sections where we DO NOT create any dropdowns (explicit user rules)
const NO_DROPDOWNS_SECTIONS = new Set([
  "Antiemetics",
  "Adults with Medical Complexity",
  "Altered Mental Status",
]);

// Explicit "never dropdown" labels (even if they contain content)
const NEVER_DROPDOWN_LABELS = new Set([
  "notes:",
  "note:",
]);

// Dropdown triggers (case-insensitive)
const KEYWORD_DROPDOWN_TRIGGERS = [
  "general approach",
  "assessment",
  "treatment",
];

// Arrhythmias-specific dropdown headings (applied only within Arrhythmias section)
const ARRHYTHMIA_DROPDOWNS = [
  "non-sustained v-tach",
  "sinus tachycardia",
  "atrial fibrillation with rvr",
  "atrial fibrillation",
  "heart block",
];

const SECTIONS = [{"title": "Antiemetics", "html": "<ul class=\"clinical-list level-1\">\n<li>Common agents: Check last EKG for QTc\n<ul class=\"clinical-list level-2\">\n<li>Zofran 4mg IV/PO q6hrs prn\n</li>\n<li>Phenergan 12.5-25mg PO/IV/IM q6 hrs prn\n</li>\n<li>Compazine 5-10mg PO/IV/IM q6-8 hrs prn\n</li>\n</ul>\n</li>\n<li>Others:\n<ul class=\"clinical-list level-2\">\n<li>Diphenhydramine 25-50 mg PO q 6 or 10 mg IV q 6\n</li>\n<li>Scopolamine 1.5 mg patch q 72 hr - uses: preventative\n</li>\n<li>Lorazepam - uses: refractory nausea\n</li>\n<li>Dexamethasone - uses: prophylactic, chemotherapy-related\n</li>\n</ul>\n</li>\n</ul>", "sources": []}, {"title": "Abdominal pain", "html": "<ul class=\"clinical-list level-1\">\n<li>Assessing Abdominal Pain\n<ul class=\"clinical-list level-2\">\n<li>Is this new or old, is it worsening?\n</li>\n<li>If new or worsening, go see and evaluate patient\n</li>\n<li>What are the vitals?\n</li>\n<li>Why is the patient admitted?\n</li>\n</ul>\n</li>\n<li>Differential Guide by Location\n<ul class=\"clinical-list level-2\">\n<li>Diffuse: Peritonitis\n<ul class=\"clinical-list level-3\">\n<li>Mimics: Diabetic Ketoacidosis, Adrenal Insufficiency\n</li>\n</ul>\n</li>\n<li>Epigastric: PUD, pancreatitis, gastritis, AAA\n<ul class=\"clinical-list level-3\">\n<li>Mimics: Myocardial Infarction\n</li>\n</ul>\n</li>\n<li>RUQ: cholecystitis, biliary colic, cholangitis, hepatitis\n<ul class=\"clinical-list level-3\">\n<li>Mimics: PE, pulmonary infarction, pneumonia, rib fracture\n</li>\n</ul>\n</li>\n<li>LUQ: Gastritis, pancreatitis, ovarian torsion, ectopic pregnancy\n<ul class=\"clinical-list level-3\">\n<li>Mimics: splenic infarction, rib fracture\n</li>\n</ul>\n</li>\n<li>RLQ: Appendicitis, ureteral kidney stone, hernia, ovarian torsion, ectopic pregnancy,\n<div class=\"li-cont\">constipation</div>\n</li>\n<li>LLQ: Diverticulitis, ureteral kidney stone, hernia\n</li>\n<li>Suprapubic: Cystitis, bladder outlet obstruction\n</li>\n</ul>\n</li>\n<li>Urgent diagnoses requiring surgical consultation and co-management:\n<ul class=\"clinical-list level-2\">\n<li>Peritonitis: severe pain with +rebound, +guarding, absent bowel sounds. Upright\n<div class=\"li-cont\">abdominal imaging with +free air.</div>\n</li>\n<li>Ischemic bowel: pain out of proportion to exam, +bloody stool.\n</li>\n<li>Abdominal Aortic Aneurysm: severe pain, large pulsatile mass, hypotension\n</li>\n<li>Obstruction: nausea, vomiting, bloat/distention. AXR with air-fluid levels and transition\n<div class=\"li-cont\">point</div>\n</li>\n<li>Cholangititis: Fever, RUQ pain, jaundice (+/- hypotension and AMS). LFTs in cholestatic\n<div class=\"li-cont\">pattern.</div>\n</li>\n</ul>\n</li>\n<li>Work up\n<ul class=\"clinical-list level-2\">\n<li>Consider CBC, Lactate, Lipase, LFTs, UA, Abdominal XR, CT versus ultrasound (cannot be\n<div class=\"li-cont\">done overnight)</div>\n</li>\n</ul>\n</li>\n<li>Note: If surgical evaluation warranted, consider holding narcotic administration until surgical\n<div class=\"li-cont\">team has performed bedside exam.</div>\n</li>\n</ul>", "sources": []}, {"title": "Adults with Medical Complexity", "html": "<ul class=\"clinical-list level-1\">\n<li>Adults with medical complexity typically have complex, chronic medical conditions associated\n<div class=\"li-cont\">with use of medical technology and increased need for care coordination.</div>\n</li>\n<li>We are seeing more adults with medical complexity as they outgrow their pediatric team, please\n<div class=\"li-cont\">use these one-pagers as a reference! (Med-peds attendings are a great resource in a pinch!)</div>\n<ul class=\"clinical-list level-2\">\n<li><a href=\"Airway-Clearance.pdf\" class=\"ref-link\" data-ref=\"Airway-Clearance.pdf\">Airway Clearance one-pager</a>\n</li>\n<li><a href=\"Tracheostomies.pdf\" class=\"ref-link\" data-ref=\"Tracheostomies.pdf\">Tracheostomy one-pager</a>\n</li>\n<li><a href=\"shunts.pdf\" class=\"ref-link\" data-ref=\"shunts.pdf\">Shunts one-pager</a>\n</li>\n<li><a href=\"Baclofen.pdf\" class=\"ref-link\" data-ref=\"Baclofen.pdf\">Baclofen pump one-pager</a>\n</li>\n<li><a href=\"Enteral-Feeding.pdf\" class=\"ref-link\" data-ref=\"Enteral-Feeding.pdf\">G-Tube one-pager</a>\n</li>\n<li><a href=\"Autonomic-Dysfunction.pdf\" class=\"ref-link\" data-ref=\"Autonomic-Dysfunction.pdf\">Autonomic Dysfunction one-pager</a>\n</li>\n</ul>\n</li>\n</ul>", "sources": []}, {"title": "Altered Mental Status", "html": "<ul class=\"clinical-list level-1\">\n<li>Calls regarding a change in mental status always warrant prompt notification of your senior and\n<div class=\"li-cont\">bedside evaluation of the patient.</div>\n</li>\n<li>Step 1. Determine urgency of call – Gather some specifics from nurse. Essential questions\n<div class=\"li-cont\">include: What has changed? What is the patient’s general appearance/status currently? Last time seen normal? New set of vitals?</div>\n<ul class=\"clinical-list level-2\">\n<li>If patient acutely non-responsive, reasonable to ask nurse to call a rapid/code (582-\n<div class=\"li-cont\">3333). If patient is flipping through TV channels and only seemed slightly forgetful, have time to gather more information. If there is ANY concern for possible stroke, call a rapid response 1st, then initiate Stroke Team (584-8282).</div>\n</li>\n</ul>\n</li>\n<li>Step 2. Information gathering – Review signout, H&amp;P and most recent progress note can be\n<div class=\"li-cont\">helpful, meds (anti-cholingergics? Opioids? Benzos?), labs. Finally, obtain new vitals if not already done and perform bedside exam with focus on mental status and neuro exam.</div>\n</li>\n<li>Step 3. Differential and diagnostic testing – Focus diagnostic testing on most common and life\n<div class=\"li-cont\">threatening causes of delirium. Below is a limited list to get you started.</div>\n<ul class=\"clinical-list level-2\">\n<li>Drugs – Evidence of illicit drug use? opioids, benzos, anti-cholinergics? Any new meds?\n</li>\n<li>Electrolyte/metabolic disturbances\n</li>\n<li>Lack of drugs – alcohol/benzo withdrawl?\n</li>\n<li>Infection – UTI? Pneumonia? Cellulitis? Bacteremia?\n</li>\n<li>Reduced sensory inputs – Glasses? Hearing aids?\n</li>\n<li>Intracranial disorders – new focal deficits?\n</li>\n<li>Urinary and fecal disorders – Urinary retention? Constipation?\n</li>\n<li>Myocardial/pulmonary disorders – MI, COPD, HF, etc?\n</li>\n</ul>\n</li>\n</ul>", "sources": []}, {"title": "Agitation", "html": "<ul class=\"clinical-list level-1\">\n<li>What should I do if my patient is agitated with aggression?\n<ul class=\"clinical-list level-2\">\n<li>Can call if a code violet if patient is an imminent threat to self or others\n</li>\n<li>Otherwise, try de-escalation techniques:\n<ul class=\"clinical-list level-3\">\n<li>Reorient\n</li>\n<li>Do not argue with patient, be respectful\n</li>\n<li>Involve family if possible, even over phone\n</li>\n<li>Initiate &quot;Sleep Care Bundle&quot; orderset to prevent and treat delirium\n</li>\n</ul>\n</li>\n<li>Is the patient easily reoriented and redirectable? Would a Telesitter or Sitter work?\n</li>\n<li>Physical restraints and pharmacologic sedation – Only appropriate if patient is exhibiting\n<div class=\"li-cont\">behavior that is dangerous to the patient or others. Examples of dangerous behavior can include pulling at lines, tubes, and drains.</div>\n</li>\n</ul>\n</li>\n<li>Pharmacologic options:\n<ul class=\"clinical-list level-2\">\n<li>Antipsychotics are the preferred agent. Start with low dose. Before administration, review\n<div class=\"li-cont\">ECG or obtain ECG to check QTc. QTc prolongation is a relative contraindication for administration of anti-psychotics. Below is some general information regarding the most commonly used anti-psychotics:</div>\n<ul class=\"clinical-list level-3\">\n<li>Haloperidol\n</li>\n</ul>\n</li>\n</ul>\n</li>\n<li>Initial dose: 0.25 - 0.5 mg\n</li>\n<li>Routes: Oral, IM, or IV (IV associated with greater QTc prolongation, avoid)\n</li>\n<li>Degree of sedation: Low\n</li>\n<li>Risk of extrapyramidal symptoms: High\n<ul class=\"clinical-list level-2\">\n<ul class=\"clinical-list level-3\">\n<li>Risperidone\n</li>\n</ul>\n</ul>\n</li>\n<li>Initial dose: 0.25 - 0.5 mg\n</li>\n<li>Routes: Oral, IM\n</li>\n<li>Degree of sedation: Low\n</li>\n<li>Risk of extrapyramidal symptoms: High\n<ul class=\"clinical-list level-2\">\n<ul class=\"clinical-list level-3\">\n<li>Olanzapine\n</li>\n</ul>\n</ul>\n</li>\n<li>Initial dose: 2.5 - 5 mg\n</li>\n<li>Routes: Oral, sublingual, IM\n</li>\n<li>Degree of sedation: Moderate\n</li>\n<li>Risk of extrapyramidal symptoms: Moderate\n<ul class=\"clinical-list level-2\">\n<ul class=\"clinical-list level-3\">\n<li>Quetiapine\n</li>\n</ul>\n</ul>\n</li>\n<li>Initial dose: 12.5 - 25 mg\n</li>\n<li>Routes: Oral\n</li>\n<li>Degree of sedation: High\n</li>\n<li>Risk of extrapyramidal symptoms: Low\n</li>\n<li>Notes:\n<ul class=\"clinical-list level-2\">\n<li>Benzodiazepines should be avoided as the amnestic effect of benzos will tend to worsen\n<div class=\"li-cont\">delirium, but may have to be used in some circumstances.</div>\n</li>\n<li>Patient should be seen and plan reviewed with senior prior to administration of any\n<div class=\"li-cont\">new meds.</div>\n</li>\n</ul>\n</li>\n</ul>", "sources": ["Marcantonio, Edward R. \"Delirium in hospitalized older adults.\" New England Journal of Medicine 377.15 (2017): 1456-1466"]}, {"title": "AMA", "html": "<ul class=\"clinical-list level-1\">\n<li>Discharge Against Medical Advice (AMA) is when a patient chooses to leave the hospital before the\n<div class=\"li-cont\">medical team recommends discharge. 1.  Notify Senior Resident 2.  See patient quickly as they may elope 3.  Confirm patient has medical capacity 4.  Attempt to identify motivation for leaving and address if possible. 5.  Obtain AMA form from HUC or bedside RN. 6.  Explain to patient potential consequences of leaving prior to completion of treatment. Obtain teach-back from patient. Have patient sign form. Remove all lines. 7.  Document your conversation. If capacity exam was necessary, use .capacity template.</div>\n</li>\n</ul>", "sources": []}, {"title": "Arrhythmias", "html": "<ul class=\"clinical-list level-1\">\n<li>Arrythmias are common and range from benign to life threatening. Even the non-life threatening\n<div class=\"li-cont\">rhythms may be a clue to something else going on with the patient (Electrolytes, Acidosis, EP issue, Hypoxia, PE, infection).</div>\n</li>\n<li>Tachycardia: HR&gt;100 includes Atrial Fib, NSVT, Vtach, Vfib, SVT.\n</li>\n<li>General approach:\n<div class=\"li-cont\">1.  Step 1: Get a ECG, vital and get on a heart monitor if unstable vitals call rapid response.</div>\n<ul class=\"clinical-list level-2\">\n<ul class=\"clinical-list level-3\">\n<li>Important ECG points: Don’t over analyze. Is it Wide or Narrow? Regular or Irregular\n</li>\n<li>If Vtach or Vfib this is a CODE make sure pads in place and shock following ACLS\n<div class=\"li-cont\">2.  Step 2: Examine patient and determine if they are symptomatic or asymptomatic. If symptomatic call Senior and Rapid 3.  Step 3: Review labs and history. Consider repeating labs including CBC, Renal panel, Troponin= 4.  Step 4: Circle back review telemetry. If necessary move to higher level of care.</div>\n</li>\n</ul>\n</ul>\n</li>\n<li>Non-Sustained V-Tach: 3 or more consecutive ventricular beats, rate &gt;100, Duration less than 15-\n<div class=\"li-cont\">30 seconds.</div>\n<ul class=\"clinical-list level-2\">\n<li>Follow steps listed above and make sure to replete electrolytes\n</li>\n<li>Usually tolerated well until high burden\n</li>\n<li>Rule out MI, Hypoxia, Anemia\n</li>\n<li>May require EP evaluation/Structural heart disease if persistent\n</li>\n</ul>\n</li>\n<li>Sinus Tachycardia:\n<ul class=\"clinical-list level-2\">\n<li>Most important point is to find the cause\n</li>\n<li>Check for bleeding, infection, hypoxia, MI, pain\n</li>\n<li>If patient symptomatic or unstable the rate should be controlled\n<ul class=\"clinical-list level-3\">\n<li>Can start with IV Metoprolol if stable\n</li>\n<li>If patient is not stable more urgent rate control should be performed with Adenosine\n<div class=\"li-cont\">or Electrical cardioversion</div>\n</li>\n</ul>\n</li>\n<li>Note: If unstable call senior and call rapid.\n</li>\n</ul>\n</li>\n<li>Atrial Fibrillation and Atrial fibrillation with RVR:\n<ul class=\"clinical-list level-2\">\n<li>It is important to know if patient has a history of the rhythm. Review their chart looking for\n<div class=\"li-cont\">past ECGs, anticoagulation etc. If new onset or new start of paroxysmal check for possible reversible causes including electrolytes, infection, bleeding. Are they due for their home dose of metoprolol?</div>\n<ul class=\"clinical-list level-3\">\n<li>If new consider anticoagulation if not-contraindicated\n</li>\n<li>Correct electrolytes, treat infection, treat hypoxia, check Hgb\n</li>\n<li>If hemodynamically unstable call rapid response and prepare for electrical\n<div class=\"li-cont\">cardioversion</div>\n</li>\n<li>Do not need to urgently cardiovert unless unstable this includes both chemical and\n<div class=\"li-cont\">electrical cardioversion. If considering chemical cardioversion with digoxin, diltiazem or amiodarone discuss with senior and review patient history with special attention to history of heart failure.</div>\n</li>\n</ul>\n</li>\n<li>For Atrial fib with RVR once underlying causes are ruled out can try IV metoprolol q 5\n<div class=\"li-cont\">minutes x 3 for rate control. If not controlling rate discuss with senior</div>\n</li>\n</ul>\n</li>\n<li>Bradycardia: HR &lt;50, includes sinus bradycardia and heart block\n</li>\n<li>General approach:\n<ul class=\"clinical-list level-2\">\n<li>Step 1: Place on heart monitor and get an ECG.\n<ul class=\"clinical-list level-3\">\n<li>If patient is unstable or symptomatic place pads on patient bring crash cart into the\n<div class=\"li-cont\">room and call a rapid response.</div>\n</li>\n<li>Once senior available can consider cutaneous pacing or Atropine (0.5 mg push\n<div class=\"li-cont\">every 3-5 minutes up to 3mg Total)</div>\n</li>\n</ul>\n</li>\n<li>Step 2: Look for reversible causes including medications, hypoxia, hypothyroidism,\n<div class=\"li-cont\">hypothermia and correct as able</div>\n</li>\n<li>Step 3: place on telemetry and evaluate need to move to higher level of care.\n<ul class=\"clinical-list level-3\">\n<li>Can keep pads on patient if highly concerned and have Atropine at bedside.\n</li>\n</ul>\n</li>\n</ul>\n</li>\n<li>Heart Block:\n<ul class=\"clinical-list level-2\">\n<li>If called for bradycardia and heart block seen on ECG. Review ECG with Senior.\n</li>\n<li>Rule out ischemia if new\n</li>\n<li>1st Degree and Mobitz 1 are typically benign and can be monitored\n</li>\n<li>Mobitz 2 or complete heart block require pacemaker placement. In mean time have pads\n<div class=\"li-cont\">on patient and atropine at bedside. Consult Cardiology consider transferring to higher level of care.</div>\n</li>\n</ul>\n</li>\n</ul>", "sources": []}, {"title": "Chest Pain", "html": "<ul class=\"clinical-list level-1\">\n<li>Differential diagnosis: Acute Coronary Syndrome, Pulmonary Embolism, Aortic Dissection,\n<div class=\"li-cont\">Pneumothorax, GERD, PNA, Esophageal Spasm, Musculoskeletal</div>\n</li>\n<li>Resource Link (<a href=\"RationalClinicalExam-ChestPain.pdf\" class=\"ref-link\" data-ref=\"RationalClinicalExam-ChestPain.pdf\">Linked</a>)\n</li>\n<li>General Approach:\n<ul class=\"clinical-list level-2\">\n<li>Step 1: Get the CURRENT vitals from the nurse. Also review patients reason for admission\n<div class=\"li-cont\">and if they have received any medicine yet for their chest pain.</div>\n</li>\n<li>Step 2: Go see the patient. Check vitals again. Get a ECG or order it before you walk to the\n<div class=\"li-cont\">patients room. Ask the patient important questions (location, duration, type, radiation). Review patient medical history especially cardiac and most recent lab work</div>\n</li>\n<li>Step 3: After getting story and evaluating patient consider ordering CXR, Troponin, ABG.\n<div class=\"li-cont\">Review ECG with senior or cards Fellow.</div>\n<ul class=\"clinical-list level-3\">\n<li>Cardiac in nature or high concerning PMHx: Remember MONA (Morphine, Oxygen,\n<div class=\"li-cont\">Nitrates, Aspirin (325mg)). Sublingual Nitro can be attempted every 2-5 minutes as long as BP tolerates (Remember inferior MI). If pain unremitting and considering Nitro drip but not on appropriate floor consider Nitro Paste in the interim.</div>\n</li>\n<li>Further Treatment: Heparin drip, Plavix, Beta blocker once discussed with senior\n<div class=\"li-cont\">and Cardiology.</div>\n</li>\n</ul>\n</li>\n</ul>\n</li>\n<li>Other causes: It is important to consider other causes\n<ul class=\"clinical-list level-2\">\n<li>Pulmonary Embolism: can get ABG and check A-a gradient and order CTPA. Discuss with\n<div class=\"li-cont\">Senior and check renal function. If high enough suspicion can start Heparin drip prior to imaging or if imaging cannot be done if not contraindicated</div>\n</li>\n<li>Aortic Dissection: CT chest w/contrast. First step in management is controlling HR and BP\n</li>\n<li>Pneumothorax/Pneumonia: Be sure to review CXR yourself. If pneumothorax call ICU and\n<div class=\"li-cont\">begin transfer to appropriate level of care</div>\n</li>\n<li>GERD: If confident other etiologies are less likely can give patient an antacid or GI cocktail\n<div class=\"li-cont\">and monitor for improvement</div>\n</li>\n<li>Herpes Zoster: Examine patient’s skin for characteristic rash. This can be easily missed\n</li>\n</ul>\n</li>\n</ul>", "sources": []}, {"title": "Constipation", "html": "<ul class=\"clinical-list level-1\">\n<li>Overview: This is a common complaint in and out of the hospital. A bowel regimen should be\n<div class=\"li-cont\">considered in anyone in the hospital or is at risk to develop constipation. Risk factors include:</div>\n<ul class=\"clinical-list level-2\">\n<li>Opioids and other medications\n</li>\n<li>Dehydration\n</li>\n<li>Neurologic disorders\n</li>\n<li>Immobility\n</li>\n<li>Infection\n</li>\n</ul>\n</li>\n<li>General Approach:\n<ul class=\"clinical-list level-2\">\n<li>Step 1: Review patient for history of constipation or use of laxatives at home. Also check for\n<div class=\"li-cont\">risk factors for constipation during the hospital stay and med list for medications that could be contributing to constipation</div>\n</li>\n<li>Step 2: Quickly assess for alarm symptoms including blood in stool, weight loss, severe\n<div class=\"li-cont\">abdominal pain, sudden development of constipation. If patient has severe abdominal pain and concerning exam get KUB and exam for possible ileus or SBO.</div>\n</li>\n<li>Step 3: selecting a treatment (see below)\n</li>\n</ul>\n</li>\n<li>Treatment:\n<ul class=\"clinical-list level-2\">\n<li>Promote regularity: Minimize medications that could be causing constipation, correct\n<div class=\"li-cont\">electrolytes, and promote activity if patient able to walk halls or sit up in a chair</div>\n</li>\n<li>Osmotic Laxative: initial first step. Most well studied is miralax or low dose polyethylene\n<div class=\"li-cont\">glycol (PEG). Well tolerated. Other options include lactulose in studies does reduce need for additional laxatives but was less effective then low dose PEG. Magnesium hydroxide should be avoided</div>\n</li>\n<li>Other Treatment Options\n<ul class=\"clinical-list level-3\">\n<li>Colace 100mg PO BID/QID prn\n</li>\n<li>Tap Water Enema\n</li>\n<li>Soap Suds Enema\n</li>\n<li>Mag Citrate ½ to 1 bottle (Strong)\n</li>\n<li>Glycerine Suppository\n</li>\n<li>Dulcolax Suppository 5-10mg PO/PR QD (Strong)\n</li>\n</ul>\n</li>\n</ul>\n</li>\n</ul>", "sources": []}, {"title": "Electrolyte Replacement", "html": "<ul class=\"clinical-list level-1\">\n<li>Goals (Especially important in cardiology patients:\n<ul class=\"clinical-list level-2\">\n<li>Potassium = 4\n</li>\n<li>Phosphorus = 3\n</li>\n<li>Magnesium = 2\n</li>\n</ul>\n</li>\n<li>NOTE THERE IS AN ORDER SET\n</li>\n<li>Treatment:\n<ul class=\"clinical-list level-2\">\n<li>Replacing Potassium\n<ul class=\"clinical-list level-3\">\n<li>Give PO if able - can split 40 mEq doses q1-2h if need more than 40mEq\n</li>\n<li>Be cautious in replacement in patient&#x27;s with CKD or AKIs\n</li>\n<li>Unable to give &gt;10 meq IV per hour through PIV as it is a caustic medication\n</li>\n<li>If hypomagnesemia is present as well, this must also be corrected\n</li>\n<li>10mEq replacement PO/IV = 0.1 change in serum potassium\n</li>\n</ul>\n</li>\n<li>Replacing Magnesium\n<ul class=\"clinical-list level-3\">\n<li>Can be given PO, may cause diarrhea\n</li>\n<li>500-1000 mg per dose, up to TID or IV 1-4 g per dose.\n</li>\n<li>Expect approximately a 0.1 increase in Mg levels for every gram given IV.\n</li>\n<li>The max you can give in a single IV dose is 4g if the Mg is &lt; 1.5.\n</li>\n</ul>\n</li>\n<li>Replacing Phosphorus\n<ul class=\"clinical-list level-3\">\n<li>Can be given via PO or IV routes, equally effective\n</li>\n<li>PO dosing is 500 mg BID – TID\n</li>\n<li>IV dose is 10 mmol IV x 1, repeat as needed\n</li>\n<li>Avoid KPhos if the Potassium is high, contains 7mEq K\n</li>\n<li>Avoid NaPhos if hypernatremic, contains 7mEq Na\n</li>\n</ul>\n</li>\n<li>Replacing Calcium\n<ul class=\"clinical-list level-3\">\n<li>Remember that calcium needs to be corrected for the patient’s albumin:\n</li>\n</ul>\n</li>\n</ul>\n</li>\n<li>Ca = serum Ca + 0.8 mg/dL for every 1 g/dL of albumin &lt; 4.0\n<ul class=\"clinical-list level-2\">\n<ul class=\"clinical-list level-3\">\n<li>Can check ionized calcium for true level independent of albumin\n</li>\n<li>1 gram of CaCl(13.6 mEq of elemental Ca) or 1 gram Ca gluconate (approx. 4.5 mEq\n<div class=\"li-cont\">of elemental Ca) are acceptable IV preparations, noting the difference in strengths.</div>\n</li>\n</ul>\n</ul>\n</li>\n</ul>", "sources": []}];

/* ===========================
   DOM + STATE
   =========================== */

const els = {
  homeView: document.getElementById("homeView"),
  sectionView: document.getElementById("sectionView"),
  refView: document.getElementById("refView"),
  sectionTitle: document.getElementById("sectionTitle"),
  sectionMeta: document.getElementById("sectionMeta"),
  sectionContent: document.getElementById("sectionContent"),
  backBtn: document.getElementById("backBtn"),
  refBackBtn: document.getElementById("refBackBtn"),
  refFrame: document.getElementById("refFrame"),
  refMeta: document.getElementById("refMeta"),
  searchInput: document.getElementById("searchInput"),
  homeIconBtn: document.getElementById("homeIconBtn"),
};

const state = {
  currentIndex: null,
  lastView: "home",
  searchIndex: null,
};

/* ===========================
   HELPERS
   =========================== */

function escapeHtml(str) {
  return String(str || "")
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll("\"", "&quot;")
    .replaceAll("'", "&#039;");
}

function stripHtmlToText(html) {
  const tmp = document.createElement("div");
  tmp.innerHTML = html || "";
  return (tmp.textContent || tmp.innerText || "").replace(/\s+/g, " ").trim();
}

function setTitle(text) {
  document.title = text ? `${text} — ${APP_TITLE}` : APP_TITLE;
}

function showEl(el) { el.classList.remove("hidden"); }
function hideEl(el) { el.classList.add("hidden"); }

function buildSearchIndex() {
  state.searchIndex = SECTIONS.map((s, idx) => {
    const title = String(s.title || "");
    const body = stripHtmlToText(s.html || "");
    const sources = Array.isArray(s.sources) ? s.sources.join(" ") : "";
    const haystack = `${title}\n${body}\n${sources}`.toLowerCase();
    return { idx, title, haystack };
  });
}

function sectionMatchesQuery(idx, q) {
  if (!q) return true;
  const entry = state.searchIndex?.[idx];
  return !!entry && entry.haystack.includes(q);
}

/* ===========================
   VIEW NAV
   =========================== */

function goHome(push = false) {
  state.lastView = "home";
  state.currentIndex = null;
  showEl(els.homeView);
  hideEl(els.sectionView);
  hideEl(els.refView);
  setTitle("");
  renderHome(els.searchInput.value);
  if (push) history.pushState({ view: "home" }, "", "#/");
}

function showSection(index, push = false) {
  const section = SECTIONS[index];
  if (!section) return;

  state.lastView = "section";
  state.currentIndex = index;

  hideEl(els.homeView);
  showEl(els.sectionView);
  hideEl(els.refView);

  els.sectionTitle.textContent = section.title || "";
  els.sectionMeta.textContent = "";
  els.sectionContent.innerHTML = "";

  const contentWrap = document.createElement("div");
  contentWrap.innerHTML = section.html || "";

  normalizePdfListStructure(contentWrap);

  // ✅ Apply ONLY your dropdown rules (no other auto-dropdown logic)
  applyDropdownRules(contentWrap, String(section.title || "").trim());

  wireReferenceLinks(contentWrap);

  // Append sources at bottom if present
  if (Array.isArray(section.sources) && section.sources.length) {
    const sources = document.createElement("div");
    sources.className = "sources";
    sources.innerHTML = `
      <h3>Sources</h3>
      <ul class="clinical-list level-1">
        ${section.sources.map(s => `<li>${escapeHtml(s)}</li>`).join("")}
      </ul>
    `;
    contentWrap.appendChild(sources);
  }

  els.sectionContent.appendChild(contentWrap);

  setTitle(section.title || "");
  if (push) history.pushState({ view: "section", index }, "", `#/section/${index}`);
}

function showReference(refFile, push = false) {
  if (!refFile) return;
  state.lastView = "ref";
  hideEl(els.homeView);
  hideEl(els.sectionView);
  showEl(els.refView);

  els.refMeta.textContent = refFile;
  els.refFrame.src = refFile;

  setTitle("Reference");
  if (push) history.pushState({ view: "ref", refFile }, "", `#/ref/${encodeURIComponent(refFile)}`);
}

/* ===========================
   HOME RENDER (FULL-TEXT SEARCH)
   =========================== */

function renderHome(filterText) {
  if (!Array.isArray(SECTIONS) || SECTIONS.length === 0) {
    els.homeView.innerHTML =
      `<p class="section-empty">No sections loaded. Ensure <code>script.js</code> contains <code>const SECTIONS = [...]</code>.</p>`;
    return;
  }

  const q = (filterText || "").trim().toLowerCase();
  const matches = SECTIONS
    .map((s, idx) => ({ ...s, idx }))
    .filter(s => sectionMatchesQuery(s.idx, q));

  if (!matches.length) {
    els.homeView.innerHTML = `<p class="section-empty">No matches. Try a different search.</p>`;
    return;
  }

  const cards = matches.map(s => `
    <div class="section-card" role="button" tabindex="0" data-index="${s.idx}">
      <p class="section-card-title">${escapeHtml(s.title)}</p>
      <p class="section-card-sub">Tap to open</p>
    </div>
  `).join("");

  els.homeView.innerHTML = `
    <h2 class="card-title">Sections</h2>
    <div class="section-list">${cards}</div>
  `;

  els.homeView.querySelectorAll(".section-card").forEach(card => {
    const open = () => showSection(Number(card.dataset.index), true);
    card.addEventListener("click", open);
    card.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        open();
      }
    });
  });
}

/* ===========================
   LINKS
   =========================== */

function wireReferenceLinks(root) {
  root.querySelectorAll(".ref-link").forEach(a => {
    a.addEventListener("click", (e) => {
      e.preventDefault();
      const ref = a.getAttribute("data-ref");
      showReference(ref, true);
    });
  });
}

/* ===========================
   FIXES: PDF LIST STRUCTURE NORMALIZATION
   =========================== */

function normalizePdfListStructure(root) {
  // Ensure any stray <ul> directly under <ul> is nested into previous <li>
  root.querySelectorAll("ul").forEach(ul => {
    Array.from(ul.children).forEach((child, idx) => {
      if (child.tagName && child.tagName.toLowerCase() === "ul") {
        const prev = ul.children[idx - 1];
        if (prev && prev.tagName && prev.tagName.toLowerCase() === "li") {
          prev.appendChild(child);
        }
      }
    });
  });
}

/* ===========================
   DROPDOWN RULE ENGINE (YOUR RULES ONLY)
   =========================== */

function applyDropdownRules(root, sectionTitle) {
  // Explicit: no dropdowns in these sections
  if (NO_DROPDOWNS_SECTIONS.has(sectionTitle)) return;

  // Keyword-based dropdowns anywhere in the section
  convertListHeadingsToDropdowns(root, KEYWORD_DROPDOWN_TRIGGERS);

  // Arrhythmias-specific dropdowns
  if (sectionTitle.toLowerCase() === "arrhythmias") {
    convertListHeadingsToDropdowns(root, ARRHYTHMIA_DROPDOWNS);
  }
}

/**
 * Converts <li> into a dropdown ONLY when:
 * - its label includes one of the trigger phrases, AND
 * - it has "content below" (any child element: ul/ol/div/table/etc), AND
 * - it is not Notes:/Note:
 *
 * li remains the outer container.
 * Also removes the first-level bullet marker for dropdown headers (li.no-bullet).
 */
function convertListHeadingsToDropdowns(root, triggers) {
  const lis = Array.from(root.querySelectorAll("li"));

  lis.forEach(li => {
    if (li.querySelector(":scope > details.drop")) return;

    const labelText = getLiLabelText(li).toLowerCase().trim();
    if (!labelText) return;

    if (NEVER_DROPDOWN_LABELS.has(labelText)) return;

    const matches = triggers.some(t => labelText.includes(String(t).toLowerCase()));
    if (!matches) return;

    // "Content below" = any element child (ul/ol/div/table/etc)
    const revealNodes = Array.from(li.childNodes).filter(n => n.nodeType === Node.ELEMENT_NODE);
    if (!revealNodes.length) return;

    const details = document.createElement("details");
    details.className = "drop";

    const summary = document.createElement("summary");
    summary.className = "drop-summary";

    const titleSpan = document.createElement("span");
    titleSpan.className = "drop-title";
    titleSpan.textContent = getLiLabelText(li).trim();

    const chev = document.createElement("span");
    chev.className = "chev";
    chev.textContent = "▾";

    summary.appendChild(titleSpan);
    summary.appendChild(chev);

    const panel = document.createElement("div");
    panel.className = "drop-panel";

    revealNodes.forEach(n => panel.appendChild(n));

    details.appendChild(summary);
    details.appendChild(panel);

    li.innerHTML = "";
    li.appendChild(details);

    // Remove bullet marker for dropdown header item
    li.classList.add("no-bullet");
  });
}

function getLiLabelText(li) {
  let parts = [];
  li.childNodes.forEach(node => {
    if (node.nodeType === Node.TEXT_NODE) {
      const t = node.textContent.replace(/\s+/g, " ").trim();
      if (t) parts.push(t);
      return;
    }
    if (node.nodeType === Node.ELEMENT_NODE) {
      const tag = node.tagName.toLowerCase();
      if (tag === "ul" || tag === "ol" || tag === "div" || tag === "table") return;
      const t = (node.textContent || "").replace(/\s+/g, " ").trim();
      if (t) parts.push(t);
    }
  });
  return parts.join(" ").replace(/\s+/g, " ").trim();
}

/* ===========================
   ROUTING + EVENTS
   =========================== */

function handleHashRoute() {
  const hash = location.hash || "#/";
  const parts = hash.replace("#/", "").split("/").filter(Boolean);

  if (!parts.length) {
    goHome(false);
    return;
  }

  if (parts[0] === "section" && parts[1] != null) {
    const idx = Number(parts[1]);
    if (!Number.isNaN(idx)) showSection(idx, false);
    else goHome(false);
    return;
  }

  if (parts[0] === "ref" && parts[1]) {
    const refFile = decodeURIComponent(parts.slice(1).join("/"));
    showReference(refFile, false);
    return;
  }

  goHome(false);
}

function init() {
  setTitle("");
  buildSearchIndex();

  els.backBtn?.addEventListener("click", () => history.back());
  els.refBackBtn?.addEventListener("click", () => history.back());
  els.homeIconBtn?.addEventListener("click", () => goHome(true));

  els.searchInput?.addEventListener("input", () => renderHome(els.searchInput.value));

  els.searchInput?.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
      const q = (els.searchInput.value || "").trim().toLowerCase();
      if (!q) return;
      const first = state.searchIndex?.find(entry => entry.haystack.includes(q));
      if (first) showSection(first.idx, true);
    }
  });

  window.addEventListener("popstate", handleHashRoute);
  window.addEventListener("hashchange", handleHashRoute);

  handleHashRoute();
}

document.addEventListener("DOMContentLoaded", init);
