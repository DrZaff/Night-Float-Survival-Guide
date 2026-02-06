// UC Night Float Survival Guide
// PWA clinical reference (offline capable)
// Chunk A + B + C included. Dropdowns follow explicit user rules only.

const APP_TITLE = "UC Night Float Survival Guide";

const NO_DROPDOWNS_SECTIONS = new Set([
  "Antiemetics",
  "Adults with Medical Complexity",
  "Altered Mental Status",
]);

const NEVER_DROPDOWN_LABELS = new Set(["notes:", "note:"]);

const KEYWORD_DROPDOWN_TRIGGERS = ["general approach", "assessment", "treatment"];

const ARRHYTHMIAS_SECTION_TITLE = "Arrhythmias";
const ARRHYTHMIA_DROPDOWNS = [
  "non-sustained v-tach",
  "sinus tachycardia",
  "atrial fibrillation",
  "heart block",
];

const SECTIONS = [{"title": "Antiemetics", "html": "<ul class=\"clinical-list level-1\"><li>Common agents: Check last EKG for QTc<ul class=\"clinical-list level-2\"><li>Zofran 4mg IV/PO q6hrs prn</li><li>Phenergan 12.5-25mg PO/IV/IM q6 hrs prn</li><li>Compazine 5-10mg PO/IV/IM q6-8 hrs prn</li></ul></li><li>Others:<ul class=\"clinical-list level-2\"><li>Diphenhydramine 25-50 mg PO q 6 or 10 mg IV q 6</li><li>Scopolamine 1.5 mg patch q 72 hr - uses: preventative</li><li>Lorazepam - uses: refractory nausea</li><li>Dexamethasone - uses: prophylactic, chemotherapy-related</li></ul></li></ul>", "sources": []}, {"title": "Abdominal pain", "html": "<ul class=\"clinical-list level-1\"><li>Assessing Abdominal Pain<ul class=\"clinical-list level-2\"><li>Is this new or old, is it worsening?</li><li>If new or worsening, go see and evaluate patient</li><li>What are the vitals?</li><li>Why is the patient admitted?</li></ul></li><li>Differential Guide by Location<ul class=\"clinical-list level-2\"><li>Diffuse: Peritonitis<ul class=\"clinical-list level-3\"><li>Mimics: Diabetic Ketoacidosis, Adrenal Insufficiency</li></ul></li><li>Epigastric: PUD, pancreatitis, gastritis, AAA<ul class=\"clinical-list level-3\"><li>Mimics: Myocardial Infarction</li></ul></li><li>RUQ: cholecystitis, biliary colic, cholangitis, hepatitis<ul class=\"clinical-list level-3\"><li>Mimics: PE, pulmonary infarction, pneumonia, rib fracture</li></ul></li><li>LUQ: Gastritis, pancreatitis, ovarian torsion, ectopic pregnancy<ul class=\"clinical-list level-3\"><li>Mimics: splenic infarction, rib fracture</li></ul></li><li>RLQ: Appendicitis, ureteral kidney stone, hernia, ovarian torsion, ectopic pregnancy, constipation</li><li>LLQ: Diverticulitis, ureteral kidney stone, hernia</li><li>Suprapubic: Cystitis, bladder outlet obstruction</li></ul></li><li>Urgent diagnoses requiring surgical consultation and co-management:<ul class=\"clinical-list level-2\"><li>Peritonitis: severe pain with +rebound, +guarding, absent bowel sounds. Upright abdominal imaging with +free air.</li><li>Ischemic bowel: pain out of proportion to exam, +bloody stool.</li><li>Abdominal Aortic Aneurysm: severe pain, large pulsatile mass, hypotension</li><li>Obstruction: nausea, vomiting, bloat/distention. AXR with air-fluid levels and transition point</li><li>Cholangititis: Fever, RUQ pain, jaundice (+/- hypotension and AMS). LFTs in cholestatic pattern.</li></ul></li><li>Work up<ul class=\"clinical-list level-2\"><li>Consider CBC, Lactate, Lipase, LFTs, UA, Abdominal XR, CT versus ultrasound (cannot be done overnight)</li></ul></li><li><strong>Note:</strong> If surgical evaluation warranted, consider holding narcotic administration until surgical team has performed bedside exam.</li></ul>", "sources": []}, {"title": "Adults with Medical Complexity", "html": "<ul class=\"clinical-list level-1\"><li>Adults with medical complexity typically have complex, chronic medical conditions associated with use of medical technology and increased need for care coordination.</li><li>We are seeing more adults with medical complexity as they outgrow their pediatric team, please use these one-pagers as a reference! (Med-peds attendings are a great resource in a pinch!)<ul class=\"clinical-list level-2\"><li><a href=\"Airway-Clearance.pdf\" class=\"ref-link\" data-ref=\"Airway-Clearance.pdf\">Airway Clearance one-pager</a></li><li><a href=\"Tracheostomies.pdf\" class=\"ref-link\" data-ref=\"Tracheostomies.pdf\">Tracheostomy one-pager</a></li><li><a href=\"shunts.pdf\" class=\"ref-link\" data-ref=\"shunts.pdf\">Shunts one-pager</a></li><li><a href=\"Baclofen.pdf\" class=\"ref-link\" data-ref=\"Baclofen.pdf\">Baclofen pump one-pager</a></li><li><a href=\"Enteral-Feeding.pdf\" class=\"ref-link\" data-ref=\"Enteral-Feeding.pdf\">G-Tube one-pager</a></li><li><a href=\"Autonomic-Dysfunction.pdf\" class=\"ref-link\" data-ref=\"Autonomic-Dysfunction.pdf\">Autonomic Dysfunction one-pager</a></li></ul></li></ul>", "sources": []}, {"title": "Altered Mental Status", "html": "<ul class=\"clinical-list level-1\"><li>Calls regarding a change in mental status always warrant prompt notification of your senior and bedside evaluation of the patient.</li><li>Step 1. Determine urgency of call – Gather some specifics from nurse. Essential questions include: What has changed? What is the patient’s general appearance/status currently? Last time seen normal? New set of vitals?<ul class=\"clinical-list level-2\"><li>If patient acutely non-responsive, reasonable to ask nurse to call a rapid/code (582- 3333). If patient is flipping through TV channels and only seemed slightly forgetful, have time to gather more information. If there is ANY concern for possible stroke, call a rapid response 1st, then initiate Stroke Team (584-8282).</li></ul></li><li>Step 2. Information gathering – Review signout, H&amp;P and most recent progress note can be helpful, meds (anti-cholingergics? Opioids? Benzos?), labs. Finally, obtain new vitals if not already done and perform bedside exam with focus on mental status and neuro exam.</li><li>Step 3. Differential and diagnostic testing – Focus diagnostic testing on most common and life threatening causes of delirium. Below is a limited list to get you started.<ul class=\"clinical-list level-2\"><li>Drugs – Evidence of illicit drug use? opioids, benzos, anti-cholinergics? Any new meds?</li><li>Electrolyte/metabolic disturbances</li><li>Lack of drugs – alcohol/benzo withdrawl?</li><li>Infection – UTI? Pneumonia? Cellulitis? Bacteremia?</li><li>Reduced sensory inputs – Glasses? Hearing aids?</li><li>Intracranial disorders – new focal deficits?</li><li>Urinary and fecal disorders – Urinary retention? Constipation?</li><li>Myocardial/pulmonary disorders – MI, COPD, HF, etc?</li></ul></li></ul>", "sources": []}, {"title": "Agitation", "html": "<ul class=\"clinical-list level-1\"><li>What should I do if my patient is agitated with aggression?<ul class=\"clinical-list level-2\"><li>Can call if a code violet if patient is an imminent threat to self or others</li><li>Otherwise, try de-escalation techniques:<ul class=\"clinical-list level-3\"><li>Reorient</li><li>Do not argue with patient, be respectful</li><li>Involve family if possible, even over phone</li><li>Initiate &quot;Sleep Care Bundle&quot; orderset to prevent and treat delirium</li></ul></li><li>Is the patient easily reoriented and redirectable? Would a Telesitter or Sitter work?</li><li>Physical restraints and pharmacologic sedation – Only appropriate if patient is exhibiting behavior that is dangerous to the patient or others. Examples of dangerous behavior can include pulling at lines, tubes, and drains.</li></ul></li><li>Pharmacologic options:<ul class=\"clinical-list level-2\"><li>Antipsychotics are the preferred agent. Start with low dose. Before administration, review ECG or obtain ECG to check QTc. QTc prolongation is a relative contraindication for administration of anti-psychotics. Below is some general information regarding the most commonly used anti-psychotics:<ul class=\"clinical-list level-3\"><li>Haloperidol</li></ul></li></ul></li><li>Initial dose: 0.25 - 0.5 mg</li><li>Routes: Oral, IM, or IV (IV associated with greater QTc prolongation, avoid)</li><li>Degree of sedation: Low</li><li>Risk of extrapyramidal symptoms: High<ul class=\"clinical-list level-2\"><ul class=\"clinical-list level-3\"><li>Risperidone</li></ul></ul></li><li>Initial dose: 0.25 - 0.5 mg</li><li>Routes: Oral, IM</li><li>Degree of sedation: Low</li><li>Risk of extrapyramidal symptoms: High<ul class=\"clinical-list level-2\"><ul class=\"clinical-list level-3\"><li>Olanzapine</li></ul></ul></li><li>Initial dose: 2.5 - 5 mg</li><li>Routes: Oral, sublingual, IM</li><li>Degree of sedation: Moderate</li><li>Risk of extrapyramidal symptoms: Moderate<ul class=\"clinical-list level-2\"><ul class=\"clinical-list level-3\"><li>Quetiapine</li></ul></ul></li><li>Initial dose: 12.5 - 25 mg</li><li>Routes: Oral</li><li>Degree of sedation: High</li><li>Risk of extrapyramidal symptoms: Low</li><li>Notes:<ul class=\"clinical-list level-2\"><li>Benzodiazepines should be avoided as the amnestic effect of benzos will tend to worsen delirium, but may have to be used in some circumstances.</li><li>Patient should be seen and plan reviewed with senior prior to administration of any new meds.</li></ul></li><li>Source: Marcantonio, Edward R. &quot;Delirium in hospitalized older adults.&quot; New England Journal of Medicine 377.15 (2017): 1456-1466</li></ul>", "sources": []}, {"title": "AMA", "html": "<ul class=\"clinical-list level-1\"><li>Discharge Against Medical Advice (AMA) is when a patient chooses to leave the hospital before the medical team recommends discharge. 1.  Notify Senior Resident 2.  See patient quickly as they may elope 3.  Confirm patient has medical capacity 4.  Attempt to identify motivation for leaving and address if possible. 5.  Obtain AMA form from HUC or bedside RN. 6.  Explain to patient potential consequences of leaving prior to completion of treatment. Obtain teach-back from patient. Have patient sign form. Remove all lines. 7.  Document your conversation. If capacity exam was necessary, use .capacity template.</li></ul>", "sources": []}, {"title": "Arrhythmias", "html": "<ul class=\"clinical-list level-1\"><li>Arrythmias are common and range from benign to life threatening. Even the non-life threatening rhythms may be a clue to something else going on with the patient (Electrolytes, Acidosis, EP issue, Hypoxia, PE, infection).</li><li>Tachycardia: HR&gt;100 includes Atrial Fib, NSVT, Vtach, Vfib, SVT.</li><li>General approach: 1.  Step 1: Get a ECG, vital and get on a heart monitor if unstable vitals call rapid response.<ul class=\"clinical-list level-2\"><ul class=\"clinical-list level-3\"><li>Important ECG points: Don’t over analyze. Is it Wide or Narrow? Regular or Irregular</li><li>If Vtach or Vfib this is a CODE make sure pads in place and shock following ACLS 2.  Step 2: Examine patient and determine if they are symptomatic or asymptomatic. If symptomatic call Senior and Rapid 3.  Step 3: Review labs and history. Consider repeating labs including CBC, Renal panel, Troponin= 4.  Step 4: Circle back review telemetry. If necessary move to higher level of care.</li></ul></ul></li><li>Non-Sustained V-Tach: 3 or more consecutive ventricular beats, rate &gt;100, Duration less than 15- 30 seconds.<ul class=\"clinical-list level-2\"><li>Follow steps listed above and make sure to replete electrolytes</li><li>Usually tolerated well until high burden</li><li>Rule out MI, Hypoxia, Anemia</li><li>May require EP evaluation/Structural heart disease if persistent</li></ul></li><li>Sinus Tachycardia:<ul class=\"clinical-list level-2\"><li>Most important point is to find the cause</li><li>Check for bleeding, infection, hypoxia, MI, pain</li><li>If patient symptomatic or unstable the rate should be controlled<ul class=\"clinical-list level-3\"><li>Can start with IV Metoprolol if stable</li><li>If patient is not stable more urgent rate control should be performed with Adenosine</li></ul></li><li>r Electrical cardioversion</li><li><strong>Note:</strong> If unstable call senior and call rapid.</li></ul></li><li>Atrial Fibrillation and Atrial fibrillation with RVR:<ul class=\"clinical-list level-2\"><li>It is important to know if patient has a history of the rhythm. Review their chart looking for past ECGs, anticoagulation etc. If new onset or new start of paroxysmal check for possible reversible causes including electrolytes, infection, bleeding. Are they due for their home dose of metoprolol?<ul class=\"clinical-list level-3\"><li>If new consider anticoagulation if not-contraindicated</li><li>Correct electrolytes, treat infection, treat hypoxia, check Hgb</li><li>If hemodynamically unstable call rapid response and prepare for electrical cardioversion</li><li>Do not need to urgently cardiovert unless unstable this includes both chemical and electrical cardioversion. If considering chemical cardioversion with digoxin, diltiazem or amiodarone discuss with senior and review patient history with special attention to history of heart failure.</li></ul></li><li>For Atrial fib with RVR once underlying causes are ruled out can try IV metoprolol q 5 minutes x 3 for rate control. If not controlling rate discuss with senior</li></ul></li><li>Bradycardia: HR &lt;50, includes sinus bradycardia and heart block</li><li>General approach:<ul class=\"clinical-list level-2\"><li>Step 1: Place on heart monitor and get an ECG.<ul class=\"clinical-list level-3\"><li>If patient is unstable or symptomatic place pads on patient bring crash cart into the room and call a rapid response.</li><li>Once senior available can consider cutaneous pacing or Atropine (0.5 mg push every 3-5 minutes up to 3mg Total)</li></ul></li><li>Step 2: Look for reversible causes including medications, hypoxia, hypothyroidism, hypothermia and correct as able</li><li>Step 3: place on telemetry and evaluate need to move to higher level of care.<ul class=\"clinical-list level-3\"><li>Can keep pads on patient if highly concerned and have Atropine at bedside.</li></ul></li></ul></li><li>Heart Block:<ul class=\"clinical-list level-2\"><li>If called for bradycardia and heart block seen on ECG. Review ECG with Senior.</li><li>Rule out ischemia if new</li><li>1st Degree and Mobitz 1 are typically benign and can be monitored</li><li>Mobitz 2 or complete heart block require pacemaker placement. In mean time have pads</li><li>n patient and atropine at bedside. Consult Cardiology consider transferring to higher level</li><li>f care.</li></ul></li></ul>", "sources": []}, {"title": "Chest Pain", "html": "<ul class=\"clinical-list level-1\"><li>Differential diagnosis: Acute Coronary Syndrome, Pulmonary Embolism, Aortic Dissection, Pneumothorax, GERD, PNA, Esophageal Spasm, Musculoskeletal</li><li><a href=\"RationalClinicalExam-ChestPain.pdf\" class=\"ref-link\" data-ref=\"RationalClinicalExam-ChestPain.pdf\">Resource Link</a></li><li>General Approach:<ul class=\"clinical-list level-2\"><li>Step 1: Get the CURRENT vitals from the nurse. Also review patients reason for admission and if they have received any medicine yet for their chest pain.</li><li>Step 2: Go see the patient. Check vitals again. Get a ECG or order it before you walk to the patients room. Ask the patient important questions (location, duration, type, radiation). Review patient medical history especially cardiac and most recent lab work</li><li>Step 3: After getting story and evaluating patient consider ordering CXR, Troponin, ABG. Review ECG with senior or cards Fellow.<ul class=\"clinical-list level-3\"><li>Cardiac in nature or high concerning PMHx: Remember MONA (Morphine, Oxygen, Nitrates, Aspirin (325mg)). Sublingual Nitro can be attempted every 2-5 minutes as long as BP tolerates (Remember inferior MI). If pain unremitting and considering Nitro drip but not on appropriate floor consider Nitro Paste in the interim.</li><li>Further Treatment: Heparin drip, Plavix, Beta blocker once discussed with senior and Cardiology.</li></ul></li></ul></li><li>Other causes: It is important to consider other causes<ul class=\"clinical-list level-2\"><li>Pulmonary Embolism: can get ABG and check A-a gradient and order CTPA. Discuss with Senior and check renal function. If high enough suspicion can start Heparin drip prior to imaging or if imaging cannot be done if not contraindicated</li><li>Aortic Dissection: CT chest w/contrast. First step in management is controlling HR and BP</li><li>Pneumothorax/Pneumonia: Be sure to review CXR yourself. If pneumothorax call ICU and begin transfer to appropriate level of care</li><li>GERD: If confident other etiologies are less likely can give patient an antacid or GI cocktail and monitor for improvement</li><li>Herpes Zoster: Examine patient’s skin for characteristic rash. This can be easily missed</li></ul></li></ul>", "sources": []}, {"title": "Constipation", "html": "<ul class=\"clinical-list level-1\"><li>Overview: This is a common complaint in and out of the hospital. A bowel regimen should be considered in anyone in the hospital or is at risk to develop constipation. Risk factors include:<ul class=\"clinical-list level-2\"><li>Opioids and other medications</li><li>Dehydration</li><li>Neurologic disorders</li><li>Immobility</li><li>Infection</li></ul></li><li>General Approach:<ul class=\"clinical-list level-2\"><li>Step 1: Review patient for history of constipation or use of laxatives at home. Also check for risk factors for constipation during the hospital stay and med list for medications that could be contributing to constipation</li><li>Step 2: Quickly assess for alarm symptoms including blood in stool, weight loss, severe abdominal pain, sudden development of constipation. If patient has severe abdominal pain and concerning exam get KUB and exam for possible ileus or SBO.</li><li>Step 3: selecting a treatment (see below)</li></ul></li><li>Treatment:<ul class=\"clinical-list level-2\"><li>Promote regularity: Minimize medications that could be causing constipation, correct electrolytes, and promote activity if patient able to walk halls or sit up in a chair</li><li>Osmotic Laxative: initial first step. Most well studied is miralax or low dose polyethylene glycol (PEG). Well tolerated. Other options include lactulose in studies does reduce need for additional laxatives but was less effective then low dose PEG. Magnesium hydroxide should be avoided</li><li>Other Treatment Options<ul class=\"clinical-list level-3\"><li>Colace 100mg PO BID/QID prn</li><li>Tap Water Enema</li><li>Soap Suds Enema</li><li>Mag Citrate ½ to 1 bottle (Strong)</li><li>Glycerine Suppository</li><li>Dulcolax Suppository 5-10mg PO/PR QD (Strong)</li></ul></li></ul></li></ul>", "sources": []}, {"title": "Electrolyte Replacement", "html": "<ul class=\"clinical-list level-1\"><li>Goals (Especially important in cardiology patients:<ul class=\"clinical-list level-2\"><li>Potassium = 4</li><li>Phosphorus = 3</li><li>Magnesium = 2</li></ul></li><li>NOTE THERE IS AN ORDER SET</li><li>Treatment:<ul class=\"clinical-list level-2\"><li>Replacing Potassium<ul class=\"clinical-list level-3\"><li>Give PO if able - can split 40 mEq doses q1-2h if need more than 40mEq</li><li>Be cautious in replacement in patient&#x27;s with CKD or AKIs</li><li>Unable to give &gt;10 meq IV per hour through PIV as it is a caustic medication</li><li>If hypomagnesemia is present as well, this must also be corrected</li><li>10mEq replacement PO/IV = 0.1 change in serum potassium</li></ul></li><li>Replacing Magnesium<ul class=\"clinical-list level-3\"><li>Can be given PO, may cause diarrhea</li><li>500-1000 mg per dose, up to TID or IV 1-4 g per dose.</li><li>Expect approximately a 0.1 increase in Mg levels for every gram given IV.</li><li>The max you can give in a single IV dose is 4g if the Mg is &lt; 1.5.</li></ul></li><li>Replacing Phosphorus<ul class=\"clinical-list level-3\"><li>Can be given via PO or IV routes, equally effective</li><li>PO dosing is 500 mg BID – TID</li><li>IV dose is 10 mmol IV x 1, repeat as needed</li><li>Avoid KPhos if the Potassium is high, contains 7mEq K</li><li>Avoid NaPhos if hypernatremic, contains 7mEq Na</li></ul></li><li>Replacing Calcium<ul class=\"clinical-list level-3\"><li>Remember that calcium needs to be corrected for the patient’s albumin:</li></ul></li></ul></li><li>Ca = serum Ca + 0.8 mg/dL for every 1 g/dL of albumin &lt; 4.0<ul class=\"clinical-list level-2\"><ul class=\"clinical-list level-3\"><li>Can check ionized calcium for true level independent of albumin</li><li>1 gram of CaCl(13.6 mEq of elemental Ca) or 1 gram Ca gluconate (approx. 4.5 mEq</li></ul><li>f elemental Ca) are acceptable IV preparations, noting the difference in strengths.</li></ul></li></ul>", "sources": []}, {"title": "Fever", "html": "<ul class=\"clinical-list level-1\"><li>This is a broad topic. What do you do if you get called with a fever? Think about the following:<ul class=\"clinical-list level-2\"><li>Is this a new fever or old, is there a known source?</li><li>Infection: Does the patient have a CXR? UA? BCx?</li><li>Are they already being treated?</li><li>If patient worsening, what is not being covered by current ABx?</li></ul></li><li>Treat it with tylenol prn</li><li><strong>Note:</strong> You do not always need to get blood cultures</li><li>Fever is not always infectious:<ul class=\"clinical-list level-2\"><li>Central fever? Thyroid? Medications? PE? NMS/Serotonin Syndrome? Rheumatologic cause? Malignancy?</li></ul></li></ul>", "sources": []}, {"title": "Pain Control", "html": "<ul class=\"clinical-list level-1\"><li>Assessment<ul class=\"clinical-list level-2\"><li>Is this new pain or worsening pain or is it chronic pain?</li><li>Where is the pain, what is the cause?</li><li>Do I need to see this patient?</li><li>What does the signout say about giving pain medications?</li><li>What does the patient have as options, are they receiving opiates already? If yes, what is their tolerance?</li><li>Always consider multimodal pain therapy</li></ul></li><li><a href=\"clin-management-post-op-pain-web- algorithm.pdf\" class=\"ref-link\" data-ref=\"clin-management-post-op-pain-web- algorithm.pdf\">More exhaustive guide on pain management</a></li><li>Treatment<ul class=\"clinical-list level-2\"><li>Opiates<ul class=\"clinical-list level-3\"><li>Doses:</li><li>Oxycodone: 2.5mg to 15mg PO doses q4-6h prn, start low with elderly patients</li><li>Morphine: 2-4mg IV q4h prn</li><li>Dialudid: 0.5 - 1mg IV q4h prn</li><li>Onset: 15-30minutes</li><li>Clearance: Renal, some hepatic</li><li><a href=\"Opiate-Conversion.png\" class=\"ref-link\" data-ref=\"Opiate-Conversion.png\">OPIATE CONVERSION TABLE</a></li></ul></li><li>Tramadol<ul class=\"clinical-list level-3\"><li>Dose: 25-50mg PO q6h prn</li><li>Onset: 1 hour</li><li>Clearance: Renal, Hepatic</li></ul></li><li>Tylenol<ul class=\"clinical-list level-3\"><li>500-1,000mg PO q6h</li><li>Max Dose: 4gm/day, 2gm/day in cirrhotics, avoid in acute liver injury</li></ul></li><li>NSAIDs<ul class=\"clinical-list level-3\"><li>Doses:</li><li>Ibuprofen: 200-800mg PO q6h prn, max 3200mg/day</li><li>Ketorolac: 15mg IV q6h prn, limit max 5 days of treatment</li><li>Cautions:</li><li>Renal Dysfunction - do not use!</li><li>GIB Risk - do not use!</li><li>Can cause fluid retention in CHF patients</li><li>Topical (These are often underutilized!!)</li><li>Lidocaine Patch</li><li>Capsaicin</li><li>Diclofenac gel</li></ul></li></ul></li></ul>", "sources": []}, {"title": "Hyperglycemia", "html": "<ul class=\"clinical-list level-1\"><li>Assessment<ul class=\"clinical-list level-2\"><li><a href=\"NEJM2009_NICESUGAR.pdf\" class=\"ref-link\" data-ref=\"NEJM2009_NICESUGAR.pdf\">How high is the sugar? Goal 140-180</a></li><li>Are they symptomatic?</li><li>Where have previous sugars been? What is the trend of sugars?</li><li>What is their diet, are they eating, are they NPO in the am for a procedure?</li><li>Last insulin dose? What kind of insulin? Avoid stacking doses.</li><li>Is there a precipitant? doses of insulin held, inadequate insulin dosing, sepsis, nonadherence to consistent carbohydrate diet?</li></ul></li><li>Treatment<ul class=\"clinical-list level-2\"><li>Look at total daily dose to evaluate insulin sensitivity</li><li>Consider giving short acting or regular insulin SQ if sugars are significantly elevated, again, avoid stacking insulin</li><li>Sign out to am team that patient required additional insulin and daily dosing may need to change</li></ul></li><li><a href=\"Insulin-Pharmacokinetics.png\" class=\"ref-link\" data-ref=\"Insulin-Pharmacokinetics.png\">Insulin Pharmacokinetics</a></li></ul>", "sources": []}, {"title": "Hypoglycemia", "html": "<ul class=\"clinical-list level-1\"><li>Assess symptoms (mental status is most important)</li><li>Is hypogycemic protocol ordered?<ul class=\"clinical-list level-2\"><li>If able to take PO, give 4 ounces of juice</li><li>If unable to take PO, give 1 amp of D50 IV</li><li>If symptomatic and no IV access, give glucagon 1.0 mg SQ or IM</li></ul></li><li>Why are they hypoglycemic?<ul class=\"clinical-list level-2\"><li>NPO, insulin dosing too high, sepsis, decreased PO intake, renal insufficiency, reactive post-prandial, EtOH, liver disease, adrenal insufficiency, hypopituitarism, adrenal insufficiency, severe malnutrition?</li></ul></li><li>Do you need to start D5 or D10 drip? (D20 or higher must be given through central access)</li></ul>", "sources": []}, {"title": "Hyperkalemia", "html": "<ul class=\"clinical-list level-1\"><li>Assessment<ul class=\"clinical-list level-2\"><li>Is the specimen hemolyzed?</li><li>Does the lab make sense? Is there a reason for hyperkalemia? If not obvious, recheck.</li><li>If real, STAT EKG<ul class=\"clinical-list level-3\"><li>Peaked T-waves with shortened QT interval</li><li>Lengthening of the PR interval and QRS duration</li><li>P wave disappear</li></ul></li></ul></li><li>Management (HYPERKALEMIA ORDERSET)<ul class=\"clinical-list level-2\"><li>Calcium gluconate: 1gm over 2-3 minutes for cardiac protection. Recheck EKG 30 minutes later, do EKG changes persist?</li><li>Insulin: 10 units IV regular insulin with D50 1 amp (consider dose decrease if AKI)</li><li>Kayexalate: 15-45 grams PO or as enema</li><li>Does this patient need dialysis</li><li>Identify causes: renal insufficiency, medications, acidosis, type 4 RTA, tissue destruction (i.e. rhabdo, tissue infarction, hemolysis) Hypertension</li></ul></li><li>Definitions:<ul class=\"clinical-list level-2\"><li>HTN Urgency: SBP &gt;180 or DBP &gt;120 without symptoms or end-organ damage</li><li>HTN Emergency: Elevated BP with signs of acute end-organ damage<ul class=\"clinical-list level-3\"><li>End-organ damage: headache, vision change, papilledema, mental status change, chest pain, EKG changes, shortness of breath, pulmonary edema on CXR, and acute elevation of Cr on BM</li></ul></li></ul></li><li>Assessment:<ul class=\"clinical-list level-2\"><li>Is the patient symptomatic?</li><li>Is this acute or chronic?</li><li>Etiology: Related to pain? Anxiety or agitation? Cerebral injury? Progression of essential HTN? Autonomic dysfunction?</li></ul></li><li>General Approach<ul class=\"clinical-list level-2\"><li>Review BP trend in chart</li><li>Review I/O in chart</li><li>Review Med-Rec and MAR to see if anti-HTN therapy was missed</li><li>Go see the patient and perform cardiac, pulm, and neuro exam</li><li>Ask MA or RN to check bilateral manual BP with appropriately sized cuff</li><li>Check EKG, BMP, CXR, and CT head as indicated based on clinical context, symptoms, and exam</li></ul></li><li>Treatment<ul class=\"clinical-list level-2\"><li>HTN Urgency: decrease BP in hours with PO agents</li><li>HTN Emergency: decrease MAP by 25% within min to 2 hours with IV agents</li><li>Uncontrolled HTN:<ul class=\"clinical-list level-3\"><li>If pre-existing HTN, then consider restarting home anti-HTN meds +/- intensify dose</li><li>If new diagnosis of HTN, then initiate therapy based on pt demographics and co- existing conditions (DM, CKD, HF, ischemic heart disease, etc). In general, thiazide, CCB, or ACEi</li><li>If due to pain, nausea, anxiety, or agitation, then address accordingly</li></ul></li><li>HTNsive Emergency (IV agents):<ul class=\"clinical-list level-3\"><li>Nicardipine: Use for AKI; Contraindicated (CI) in advanced aortic stenosis</li><li>Nitroprusside: Use in HTN Encephalopathy; Tachyphylaxis and cyanide poisoning with extended use</li><li>Nitroglycerin: Use in cardiac ischemia and pulmonary edema; Do NOT use if pt is taking PDE-5 inhibitor</li><li>Labetalol and esmolol: Use in CVA, aortic dissection, and ACS; Do NOT use if bradycardia or 2nd or 3rd degree block; May worsen HF. Do NOT use if HTNsive emergency with pulmonary edema as this is acute decompensated CHF. Labetalol is CI in asthma and COPD</li><li>Hydralazine: NOT first line due to unpredictable response with IV and prolonged duration (2-4 h), causes rebound tachycardia Hypotension</li></ul></li></ul></li><li><strong>Note:</strong> Always notify your senior resident when you are called for any hypotensive event.</li><li>Definitions:<ul class=\"clinical-list level-2\"><li>Relative Hypotension: drop in SBP &gt; 40 mmHg</li><li>Absolute Hypotension: SBP &lt; 90 or MAP &lt; 65</li><li>Shock: state of insufficient perfusion and oxygen delivery to tissues</li></ul></li><li>What to consider:<ul class=\"clinical-list level-2\"><li>This is urgent and takes top priority</li><li>Is hypotension associated with signs of decreased tissue perfusion?</li><li>Is this sepsis (qSOFA (+) or SIRS (+) with suspected source)?</li><li>Other etiologies of shock: distributive, hypovolemic, cardiogenic, obstructive</li></ul></li><li>SIRS Criteria (2 of 4)<ul class=\"clinical-list level-2\"><li>Temp &gt; 38 or &lt; 36 C</li><li>HR &gt; 90</li><li>RR &gt; 20 or PaCO2 &lt; 32</li><li>WBC &gt;12, &lt;4, data-preserve-html-node=&quot;true&quot; data-preserve-html-node=&quot;true&quot; data- preserve-html-node=&quot;true&quot; data-preserve-html-node=&quot;true&quot; data-preserve-html- node=&quot;true&quot; or &gt;10% bands)</li></ul></li><li>qSOFA Criteria (2 of 3)<ul class=\"clinical-list level-2\"><li>SBP ≤ 100 mmHg</li><li>RR &lt; 22</li><li>AMS (GCS &lt; 15)</li></ul></li><li>Assessment:<ul class=\"clinical-list level-2\"><li>Tell the senior immediately</li><li>Go see the patient</li><li>If concerned for shock and etiology is undifferentiated, then check the following:<ul class=\"clinical-list level-3\"><li>Lactate, CMP, troponin, BNP, CBC with diff, PT/INR, VBG, cortisol</li><li>EKG</li><li>CXR</li></ul></li></ul></li><li>Treatment:<ul class=\"clinical-list level-2\"><li>Volume resuscitation. Be cautious if there is cardiac dysfunction. Check last known LVEF.</li><li>If persistent, rapid or discuss with MICU fellow for upgaded level of care Insomnia</li><li>Melatonin 3mg PO QHS</li><li>Benadryl 25-50mg PO qhs prn (Don’t use in BPH)</li><li>Is patient appropriate for sleep bundle? Shortness of Breath</li><li><strong>Note:</strong> Always notify your senior resident when you are called for any acute respiratory event. If you need additional support (RN, respiratory, AOD), do not hesitate to call a rapid response.</li><li>General Approach:</li><li>Determine urgency:<ul class=\"clinical-list level-3\"><li>Vitals, NC &gt; 6L is not appropriate for floor if new this admission</li><li>Triage seeing a hypoxic patient as a #1 above other tasks.</li></ul></li><li>Assessment:</li><li>See patient</li><li>Review signout and most recent progress note</li><li>Review meds – can give clues to what is going on (COPD inhalers? Fluids? CHF meds?)</li><li>Review most recent labs (history of hypercapnia? troponin elevation? elevated NT- proBNP?)</li><li>Perform exam and order diagnostic testing (see below)</li><li>Cardiopulmonary examination</li><li>General: Awake or drowsy? Rash suspicious for anaphylaxis?</li><li>HEENT: Evidence of angioedema?</li><li>Pulmonary: Working of breathing? Speaking in full sentences? Crackles? Wheezing?</li><li>Cardiac: Regular rhythm? Edema? JVD?</li><li>Review continuous pulse oximetry to confirm good wave form (good “pleth”)</li><li>Differential and diagnostic testing</li><li>Cardiovascular: acute coronary syndrome, heart failure, tamponade, hypertensive emergency</li><li>Pulmonary: Pulmonary embolism, pneumothorax, pneumonia, asthma/COPD, airway -</li><li>bstruction (foreign body? angioedema? anaphylaxis?)</li><li>Other: acute blood loss, acute chest syndrome, diabetic ketoacidosis</li><li>Determine DISPO:</li><li>Can patient stay on floor? --&gt; New bipap and O2 &gt;6L from baseline must go to stepdown level of care.</li><li>If patient is remaining on the floor, strongly consider telemetry monitoring and continuous pulse oximetry if not already implemented</li></ul></li></ul>", "sources": []}, {"title": "Hypertension", "html": "<ul class=\"clinical-list level-1\"><li>Definitions:<ul class=\"clinical-list level-2\"><li>HTN Urgency: SBP &gt;180 or DBP &gt;120 without symptoms or end-organ damage</li><li>HTN Emergency: Elevated BP with signs of acute end-organ damage<ul class=\"clinical-list level-3\"><li>End-organ damage: headache, vision change, papilledema, mental status change, chest pain, EKG changes, shortness of breath, pulmonary edema on CXR, and acute elevation of Cr on BM</li></ul></li></ul></li><li>Assessment:<ul class=\"clinical-list level-2\"><li>Is the patient symptomatic?</li><li>Is this acute or chronic?</li><li>Etiology: Related to pain? Anxiety or agitation? Cerebral injury? Progression of essential HTN? Autonomic dysfunction?</li></ul></li><li>General Approach<ul class=\"clinical-list level-2\"><li>Review BP trend in chart</li><li>Review I/O in chart</li><li>Review Med-Rec and MAR to see if anti-HTN therapy was missed</li><li>Go see the patient and perform cardiac, pulm, and neuro exam</li><li>Ask MA or RN to check bilateral manual BP with appropriately sized cuff</li><li>Check EKG, BMP, CXR, and CT head as indicated based on clinical context, symptoms, and exam</li></ul></li><li>Treatment<ul class=\"clinical-list level-2\"><li>HTN Urgency: decrease BP in hours with PO agents</li><li>HTN Emergency: decrease MAP by 25% within min to 2 hours with IV agents</li><li>Uncontrolled HTN:<ul class=\"clinical-list level-3\"><li>If pre-existing HTN, then consider restarting home anti-HTN meds +/- intensify dose</li><li>If new diagnosis of HTN, then initiate therapy based on pt demographics and co- existing conditions (DM, CKD, HF, ischemic heart disease, etc). In general, thiazide, CCB, or ACEi</li><li>If due to pain, nausea, anxiety, or agitation, then address accordingly</li></ul></li><li>HTNsive Emergency (IV agents):<ul class=\"clinical-list level-3\"><li>Nicardipine: Use for AKI; Contraindicated (CI) in advanced aortic stenosis</li><li>Nitroprusside: Use in HTN Encephalopathy; Tachyphylaxis and cyanide poisoning with extended use</li><li>Nitroglycerin: Use in cardiac ischemia and pulmonary edema; Do NOT use if pt is taking PDE-5 inhibitor</li><li>Labetalol and esmolol: Use in CVA, aortic dissection, and ACS; Do NOT use if bradycardia or 2nd or 3rd degree block; May worsen HF. Do NOT use if HTNsive emergency with pulmonary edema as this is acute decompensated CHF. Labetalol is CI in asthma and COPD</li><li>Hydralazine: NOT first line due to unpredictable response with IV and prolonged duration (2-4 h), causes rebound tachycardia</li></ul></li></ul></li></ul>", "sources": []}, {"title": "Hypotension", "html": "<ul class=\"clinical-list level-1\"><li><strong>Note:</strong> Always notify your senior resident when you are called for any hypotensive event.</li><li>Definitions:<ul class=\"clinical-list level-2\"><li>Relative Hypotension: drop in SBP &gt; 40 mmHg</li><li>Absolute Hypotension: SBP &lt; 90 or MAP &lt; 65</li><li>Shock: state of insufficient perfusion and oxygen delivery to tissues</li></ul></li><li>What to consider:<ul class=\"clinical-list level-2\"><li>This is urgent and takes top priority</li><li>Is hypotension associated with signs of decreased tissue perfusion?</li><li>Is this sepsis (qSOFA (+) or SIRS (+) with suspected source)?</li><li>Other etiologies of shock: distributive, hypovolemic, cardiogenic, obstructive</li></ul></li><li>SIRS Criteria (2 of 4)<ul class=\"clinical-list level-2\"><li>Temp &gt; 38 or &lt; 36 C</li><li>HR &gt; 90</li><li>RR &gt; 20 or PaCO2 &lt; 32</li><li>WBC &gt;12, &lt;4, data-preserve-html-node=&quot;true&quot; data-preserve-html-node=&quot;true&quot; data- preserve-html-node=&quot;true&quot; data-preserve-html-node=&quot;true&quot; data-preserve-html- node=&quot;true&quot; or &gt;10% bands)</li></ul></li><li>qSOFA Criteria (2 of 3)<ul class=\"clinical-list level-2\"><li>SBP ≤ 100 mmHg</li><li>RR &lt; 22</li><li>AMS (GCS &lt; 15)</li></ul></li><li>Assessment:<ul class=\"clinical-list level-2\"><li>Tell the senior immediately</li><li>Go see the patient</li><li>If concerned for shock and etiology is undifferentiated, then check the following:<ul class=\"clinical-list level-3\"><li>Lactate, CMP, troponin, BNP, CBC with diff, PT/INR, VBG, cortisol</li><li>EKG</li><li>CXR</li></ul></li></ul></li><li>Treatment:<ul class=\"clinical-list level-2\"><li>Volume resuscitation. Be cautious if there is cardiac dysfunction. Check last known LVEF.</li><li>If persistent, rapid or discuss with MICU fellow for upgaded level of care</li></ul></li></ul>", "sources": []}, {"title": "Insomnia", "html": "<ul class=\"clinical-list level-1\"><ul class=\"clinical-list level-2\"><li>Melatonin 3mg PO QHS</li><li>Benadryl 25-50mg PO qhs prn (Don’t use in BPH)</li><li>Is patient appropriate for sleep bundle?</li></ul></ul>", "sources": []}, {"title": "Shortness of Breath", "html": "<ul class=\"clinical-list level-1\"><ul class=\"clinical-list level-2\"><li><strong>Note:</strong> Always notify your senior resident when you are called for any acute respiratory event. If you need additional support (RN, respiratory, AOD), do not hesitate to call a rapid response.</li><li>General Approach:</li><li>Determine urgency:<ul class=\"clinical-list level-3\"><li>Vitals, NC &gt; 6L is not appropriate for floor if new this admission</li><li>Triage seeing a hypoxic patient as a #1 above other tasks.</li></ul></li><li>Assessment:</li><li>See patient</li><li>Review signout and most recent progress note</li><li>Review meds – can give clues to what is going on (COPD inhalers? Fluids? CHF meds?)</li><li>Review most recent labs (history of hypercapnia? troponin elevation? elevated NT- proBNP?)</li><li>Perform exam and order diagnostic testing (see below)</li><li>Cardiopulmonary examination</li><li>General: Awake or drowsy? Rash suspicious for anaphylaxis?</li><li>HEENT: Evidence of angioedema?</li><li>Pulmonary: Working of breathing? Speaking in full sentences? Crackles? Wheezing?</li><li>Cardiac: Regular rhythm? Edema? JVD?</li><li>Review continuous pulse oximetry to confirm good wave form (good “pleth”)</li><li>Differential and diagnostic testing</li><li>Cardiovascular: acute coronary syndrome, heart failure, tamponade, hypertensive emergency</li><li>Pulmonary: Pulmonary embolism, pneumothorax, pneumonia, asthma/COPD, airway -</li><li>bstruction (foreign body? angioedema? anaphylaxis?)</li><li>Other: acute blood loss, acute chest syndrome, diabetic ketoacidosis</li><li>Determine DISPO:</li><li>Can patient stay on floor? --&gt; New bipap and O2 &gt;6L from baseline must go to stepdown level of care.</li><li>If patient is remaining on the floor, strongly consider telemetry monitoring and continuous pulse oximetry if not already implemented</li></ul></ul>", "sources": []}];

const els = {
  homeControls: document.getElementById("home-controls"),
  homeView: document.getElementById("homeView"),

  sectionView: document.getElementById("sectionView"),
  backBtn: document.getElementById("backBtn"),
  sectionTitle: document.getElementById("sectionTitle"),
  sectionMeta: document.getElementById("sectionMeta"),
  sectionContent: document.getElementById("sectionContent"),

  refView: document.getElementById("refView"),
  refBackBtn: document.getElementById("refBackBtn"),
  refTitle: document.getElementById("refTitle"),
  refMeta: document.getElementById("refMeta"),
  refFrame: document.getElementById("refFrame"),

  searchInput: document.getElementById("searchInput"),
  homeIconBtn: document.getElementById("homeIconBtn"),
};

let navStack = [];
let currentSectionIndex = null;
let searchIndex = null;

function setDocTitle(subtitle = "") {
  document.title = subtitle ? `${subtitle} — ${APP_TITLE}` : APP_TITLE;
}

function escapeHtml(str) {
  return String(str || "")
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function stripHtmlToText(html) {
  const tmp = document.createElement("div");
  tmp.innerHTML = html || "";
  return (tmp.textContent || tmp.innerText || "").replace(/\s+/g, " ").trim();
}

function buildSearchIndex() {
  searchIndex = SECTIONS.map((s, idx) => {
    const title = String(s.title || "");
    const body = stripHtmlToText(s.html || "");
    const sources = Array.isArray(s.sources) ? s.sources.join(" ") : "";
    return {
      idx,
      title,
      haystack: `${title}\n${body}\n${sources}`.toLowerCase(),
    };
  });
}

function showHome(pushState = true) {
  currentSectionIndex = null;

  els.sectionView.classList.add("hidden");
  els.refView.classList.add("hidden");
  els.homeControls.classList.remove("hidden");
  els.homeView.classList.remove("hidden");

  setDocTitle("");

  renderHome(els.searchInput?.value || "");

  if (pushState) navStack.push({ view: "home" });
}

function showSection(index, pushState = true) {
  const section = SECTIONS[index];
  if (!section) return;

  if (pushState) navStack.push({ view: "home" });
  currentSectionIndex = index;

  els.homeControls.classList.add("hidden");
  els.homeView.classList.add("hidden");
  els.refView.classList.add("hidden");
  els.sectionView.classList.remove("hidden");

  els.sectionTitle.textContent = section.title || "";
  els.sectionMeta.textContent = "";
  els.sectionContent.innerHTML = "";

  const wrap = document.createElement("div");
  wrap.innerHTML = section.html || "";

  normalizePdfListStructure(wrap);
  applyDropdownRules(wrap, String(section.title || ""));
  wireReferenceLinks(wrap);

  if (Array.isArray(section.sources) && section.sources.length) {
    const src = document.createElement("div");
    src.className = "sources";
    src.innerHTML = `
      <h3>Sources</h3>
      <ul class="clinical-list level-1">
        ${section.sources.map(s => `<li>${escapeHtml(s)}</li>`).join("")}
      </ul>
    `;
    wrap.appendChild(src);
  }

  els.sectionContent.appendChild(wrap);

  setDocTitle(section.title || "");
}

function showReference(refFile, pushState = true) {
  if (!refFile) return;

  if (pushState) navStack.push({ view: "section", index: currentSectionIndex });

  els.homeControls.classList.add("hidden");
  els.homeView.classList.add("hidden");
  els.sectionView.classList.add("hidden");
  els.refView.classList.remove("hidden");

  els.refTitle.textContent = "Reference";
  els.refMeta.textContent = refFile;
  els.refFrame.src = refFile;

  setDocTitle("Reference");
}

function goBack() {
  navStack.pop();
  const prev = navStack.pop();
  if (!prev || prev.view === "home") {
    showHome(true);
    return;
  }
  if (prev.view === "section" && typeof prev.index === "number") {
    showSection(prev.index, true);
    return;
  }
  showHome(true);
}

function renderHome(filterText) {
  const q = (filterText || "").trim().toLowerCase();

  const matches = SECTIONS
    .map((s, idx) => ({ ...s, idx }))
    .filter(s => {
      if (!q) return true;
      const entry = searchIndex?.[s.idx];
      return entry ? entry.haystack.includes(q) : false;
    });

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

function wireReferenceLinks(root) {
  root.querySelectorAll(".ref-link").forEach(a => {
    a.addEventListener("click", (e) => {
      e.preventDefault();
      const ref = a.getAttribute("data-ref") || a.getAttribute("href");
      showReference(ref, true);
    });
  });
}

function normalizePdfListStructure(root) {
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

function applyDropdownRules(root, sectionTitle) {
  const title = String(sectionTitle || "").trim();
  if (NO_DROPDOWNS_SECTIONS.has(title)) return;

  // Keyword-trigger dropdowns only (General approach / Assessment / Treatment)
  convertListHeadingsToDropdowns(root, KEYWORD_DROPDOWN_TRIGGERS);

  // Arrhythmia subtype dropdowns only within Arrhythmias section
  if (title.toLowerCase() === ARRHYTHMIAS_SECTION_TITLE.toLowerCase()) {
    convertListHeadingsToDropdowns(root, ARRHYTHMIA_DROPDOWNS);
  }
}

function getLiLabelText(li) {
  let parts = [];
  li.childNodes.forEach(node => {
    if (node.nodeType === Node.TEXT_NODE) {
      const t = (node.textContent || "").replace(/\s+/g, " ").trim();
      if (t) parts.push(t);
      return;
    }
    if (node.nodeType === Node.ELEMENT_NODE) {
      const tag = node.tagName.toLowerCase();
      if (tag === "ul" || tag === "ol") return;
      const t = (node.textContent || "").replace(/\s+/g, " ").trim();
      if (t) parts.push(t);
    }
  });
  return parts.join(" ").replace(/\s+/g, " ").trim();
}

function hasBulletContentBelow(li) {
  const nested = Array.from(li.children || []).find(ch => {
    const tag = ch.tagName?.toLowerCase();
    return tag === "ul" || tag === "ol";
  });
  if (!nested) return false;
  return Array.from(nested.children || []).some(c => c.tagName?.toLowerCase() === "li");
}

function convertListHeadingsToDropdowns(root, keywordsRaw) {
  const keywords = (keywordsRaw || []).map(k => String(k).toLowerCase());
  const lis = Array.from(root.querySelectorAll("li"));

  lis.forEach(li => {
    if (li.querySelector(":scope > details.drop")) return;

    const label = getLiLabelText(li);
    const labelLc = label.toLowerCase().trim();
    if (!labelLc) return;

    if (NEVER_DROPDOWN_LABELS.has(labelLc)) return;
    if (!hasBulletContentBelow(li)) return;

    const isMatch = keywords.some(k => labelLc.includes(k));
    if (!isMatch) return;

    const details = document.createElement("details");
    details.className = "drop";

    const summary = document.createElement("summary");
    summary.className = "drop-summary";

    const titleSpan = document.createElement("span");
    titleSpan.className = "drop-title";
    titleSpan.textContent = label;

    const chev = document.createElement("span");
    chev.className = "chev";
    chev.textContent = "▾";

    summary.appendChild(titleSpan);
    summary.appendChild(chev);

    const panel = document.createElement("div");
    panel.className = "drop-panel";

    Array.from(li.childNodes).forEach(node => {
      if (node.nodeType === Node.ELEMENT_NODE) {
        panel.appendChild(node);
      }
    });

    details.appendChild(summary);
    details.appendChild(panel);

    li.innerHTML = "";
    li.appendChild(details);
    li.classList.add("no-bullet");
  });
}

function init() {
  setDocTitle("");
  buildSearchIndex();

  els.searchInput?.addEventListener("input", () => {
    renderHome(els.searchInput.value || "");
  });

  els.searchInput?.addEventListener("keydown", (e) => {
    if (e.key !== "Enter") return;
    const q = (els.searchInput.value || "").trim().toLowerCase();
    if (!q) return;
    const hit = searchIndex?.find(entry => entry.haystack.includes(q));
    if (hit) showSection(hit.idx, true);
  });

  els.backBtn?.addEventListener("click", goBack);
  els.refBackBtn?.addEventListener("click", goBack);
  els.homeIconBtn?.addEventListener("click", () => showHome(true));

  showHome(true);
}

document.addEventListener("DOMContentLoaded", init);
