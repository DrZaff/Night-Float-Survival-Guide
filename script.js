// UC Night Float Survival Guide (updated from Content-File.pdf)
// Offline-capable sections with in-app reference viewer.

/* ===========================
   DATA (SECTIONS)
   =========================== */

const APP_TITLE = "UC Night Float Survival Guide";

const SECTIONS = [
  {
    "title": "Antiemetics",
    "html": "<ul class=\"clinical-list level-1\">\n<li>Common agents: Check last EKG for QTc\n  <ul class=\"clinical-list level-2\">\n    <li>Zofran 4mg IV/PO q6hrs prn</li>\n    <li>Phenergan 12.5-25mg PO/IV/IM q6 hrs prn</li>\n    <li>Compazine 5-10mg PO/IV/IM q6-8 hrs prn</li>\n  </ul>\n</li>\n<li>Others:\n  <ul class=\"clinical-list level-2\">\n    <li>Diphenhydramine 25-50 mg PO q 6 or 10 mg IV q 6</li>\n    <li>Scopolamine 1.5 mg patch q 72 hr - uses: preventative</li>\n    <li>Lorazepam - uses: refractory nausea</li>\n    <li>Dexamethasone - uses: prophylactic, chemotherapy-related</li>\n  </ul>\n</li>\n</ul>",
    "sources": []
  },
  {
    "title": "Abdominal pain",
    "html": "<ul class=\"clinical-list level-1\">\n<li>Assessing Abdominal Pain\n  <ul class=\"clinical-list level-2\">\n    <li>Is this new or old, is it worsening?</li>\n    <li>If new or worsening, <strong>go see and evaluate patient</strong></li>\n    <li>What are the vitals?</li>\n    <li>Why is the patient admitted?</li>\n  </ul>\n</li>\n<li>Differential Guide by Location\n  <ul class=\"clinical-list level-2\">\n    <li><strong>Diffuse:</strong> Peritonitis\n      <ul class=\"clinical-list level-3\">\n        <li><em>Mimics:</em> Diabetic Ketoacidosis, Adrenal Insufficiency</li>\n      </ul>\n    </li>\n    <li><strong>Epigastric:</strong> PUD, pancreatitis, gastritis, AAA\n      <ul class=\"clinical-list level-3\">\n        <li><em>Mimics:</em> Myocardial Infarction</li>\n      </ul>\n    </li>\n    <li><strong>RUQ:</strong> cholecystitis, biliary colic, cholangitis, hepatitis\n      <ul class=\"clinical-list level-3\">\n        <li><em>Mimics:</em> PE, pulmonary infarction, pneumonia, rib fracture</li>\n      </ul>\n    </li>\n    <li><strong>LUQ:</strong> Gastritis, pancreatitis, ovarian torsion, ectopic pregnancy\n      <ul class=\"clinical-list level-3\">\n        <li><em>Mimics:</em> splenic infarction, rib fracture</li>\n      </ul>\n    </li>\n    <li><strong>RLQ:</strong> Appendicitis, ureteral kidney stone, hernia, ovarian torsion, ectopic pregnancy, constipation</li>\n    <li><strong>LLQ:</strong> Diverticulitis, ureteral kidney stone, hernia</li>\n    <li><strong>Suprapubic:</strong> Cystitis, bladder outlet obstruction</li>\n  </ul>\n</li>\n<li>Urgent diagnoses requiring surgical consultation and co-management:\n  <ul class=\"clinical-list level-2\">\n    <li><strong>Peritonitis:</strong> severe pain with +rebound, +guarding, absent bowel sounds. Upright abdominal imaging with +free air.</li>\n    <li><strong>Ischemic bowel:</strong> pain out of proportion to exam, +bloody stool.</li>\n    <li><strong>Abdominal Aortic Aneurysm:</strong> severe pain, large pulsatile mass, hypotension</li>\n    <li><strong>Obstruction:</strong> nausea, vomiting, bloat/distention. AXR with air-fluid levels and transition point</li>\n    <li><strong>Cholangititis:</strong> Fever, RUQ pain, jaundice (+/- hypotension and AMS). LFTs in cholestatic pattern.</li>\n  </ul>\n</li>\n<li>Work up\n  <ul class=\"clinical-list level-2\">\n    <li>Consider CBC, Lactate, Lipase, LFTs, UA, Abdominal XR, CT versus ultrasound (cannot be done overnight)</li>\n  </ul>\n</li>\n<li><strong>Note:</strong> If surgical evaluation warranted, consider holding narcotic administration until surgical team has performed bedside exam.</li>\n</ul>",
    "sources": []
  },
  {
    "title": "Adults with Medical Complexity",
    "html": "<ul class=\"clinical-list level-1\">\n<li>Adults with medical complexity typically have complex, chronic medical conditions associated with use of medical technology and increased need for care coordination.</li>\n<li>We are seeing more adults with medical complexity as they outgrow their pediatric team, please use these one-pagers as a reference! (Med-peds attendings are a great resource in a pinch!)\n  <ul class=\"clinical-list level-2\">\n    <li>Airway Clearance one-pager (<a href=\"Airway-Clearance.pdf\" class=\"ref-link\" data-ref=\"Airway-Clearance.pdf\">Linked</a>)</li>\n    <li>Tracheostomy one-pager (<a href=\"Tracheostomies.pdf\" class=\"ref-link\" data-ref=\"Tracheostomies.pdf\">Linked</a>)</li>\n    <li>Shunts one-pager (<a href=\"shunts.pdf\" class=\"ref-link\" data-ref=\"shunts.pdf\">Linked</a>)</li>\n    <li>Baclofen pump one-pager (<a href=\"Baclofen.pdf\" class=\"ref-link\" data-ref=\"Baclofen.pdf\">Linked</a>)</li>\n    <li>G-Tube one-pager (<a href=\"Enteral-Feeding.pdf\" class=\"ref-link\" data-ref=\"Enteral-Feeding.pdf\">Linked</a>)</li>\n    <li>Autonomic Dysfunction one-pager (<a href=\"Autonomic-Dysfunction.pdf\" class=\"ref-link\" data-ref=\"Autonomic-Dysfunction.pdf\">Linked</a>)</li>\n  </ul>\n</li>\n</ul>",
    "sources": []
  },
  {
    "title": "Altered Mental Status",
    "html": "<ul class=\"clinical-list level-1\">\n<li>Calls regarding a change in mental status always warrant prompt notification of your senior and bedside evaluation of the patient.</li>\n<li><strong>Step 1.</strong> Determine urgency of call – Gather some specifics from nurse. Essential questions include: What has changed? What is the patient’s general appearance/status currently? Last time seen normal? New set of vitals?\n  <ul class=\"clinical-list level-2\">\n    <li><strong>If patient acutely non-responsive, reasonable to ask nurse to call a rapid/code (582-3333).</strong> If patient is flipping through TV channels and only seemed slightly forgetful, have time to gather more information. If there is ANY concern for possible stroke, call a rapid response 1st, then initiate Stroke Team (584-8282).</li>\n  </ul>\n</li>\n<li><strong>Step 2.</strong> Information gathering – Review signout, H&amp;P and most recent progress note can be helpful, meds (anti-cholingergics? Opioids? Benzos?), labs. Finally, obtain new vitals if not already done and perform bedside exam with focus on mental status and neuro exam.</li>\n<li><strong>Step 3.</strong> Differential and diagnostic testing – Focus diagnostic testing on most common and life threatening causes of delirium. Below is a limited list to get you started.\n  <ul class=\"clinical-list level-2\">\n    <li><strong>Drugs</strong> – Evidence of illicit drug use? opioids, benzos, anti-cholinergics? Any new meds?</li>\n    <li><strong>Electrolyte/metabolic disturbances</strong></li>\n    <li><strong>Lack of drugs</strong> – alcohol/benzo withdrawl?</li>\n    <li><strong>Infection</strong> – UTI? Pneumonia? Cellulitis? Bacteremia?</li>\n    <li><strong>Reduced sensory inputs</strong> – Glasses? Hearing aids?</li>\n    <li><strong>Intracranial disorders</strong> – new focal deficits?</li>\n    <li><strong>Urinary and fecal disorders</strong> – Urinary retention? Constipation?</li>\n    <li><strong>Myocardial/pulmonary disorders</strong> – MI, COPD, HF, etc?</li>\n  </ul>\n</li>\n</ul>",
    "sources": []
  },
  {
    "title": "Agitation",
    "html": "<ul class=\"clinical-list level-1\">\n<li>What should I do if my patient is agitated with aggression?\n  <ul class=\"clinical-list level-2\">\n    <li>Can call if a <strong>code violet</strong> if patient is an imminent threat to self or others</li>\n    <li>Otherwise, try de-escalation techniques:\n      <ul class=\"clinical-list level-3\">\n        <li>Reorient</li>\n        <li>Do not argue with patient, be respectful</li>\n        <li>Involve family if possible, even over phone</li>\n        <li>Initiate &quot;Sleep Care Bundle&quot; orderset to prevent and treat delirium</li>\n      </ul>\n    </li>\n    <li>Is the patient easily reoriented and redirectable? Would a <strong>Telesitter</strong> or <strong>Sitter work</strong>?</li>\n    <li>Physical restraints and pharmacologic sedation – Only appropriate if patient is exhibiting behavior that is dangerous to the patient or others. Examples of dangerous behavior can include pulling at lines, tubes, and drains.</li>\n  </ul>\n</li>\n<li>Pharmacologic options:\n  <ul class=\"clinical-list level-2\">\n    <li>Antipsychotics are the preferred agent. Start with low dose. Before administration, review ECG or obtain ECG to check QTc. QTc prolongation is a relative contraindication for administration of anti-psychotics. Below is some general information regarding the most commonly used anti-psychotics:\n      <ul class=\"clinical-list level-3\">\n        <li>Haloperidol\n          <ul class=\"clinical-list level-3\">\n            <li>Initial dose: 0.25 - 0.5 mg</li>\n            <li>Routes: Oral, IM, or IV (IV associated with greater QTc prolongation, avoid)</li>\n            <li>Degree of sedation: Low</li>\n            <li>Risk of extrapyramidal symptoms: High</li>\n          </ul>\n        </li>\n        <li>Risperidone\n          <ul class=\"clinical-list level-3\">\n            <li>Initial dose: 0.25 - 0.5 mg</li>\n            <li>Routes: Oral, IM</li>\n            <li>Degree of sedation: Low</li>\n            <li>Risk of extrapyramidal symptoms: High</li>\n          </ul>\n        </li>\n        <li>Olanzapine\n          <ul class=\"clinical-list level-3\">\n            <li>Initial dose: 2.5 - 5 mg</li>\n            <li>Routes: Oral, sublingual, IM</li>\n            <li>Degree of sedation: Moderate</li>\n            <li>Risk of extrapyramidal symptoms: Moderate</li>\n          </ul>\n        </li>\n        <li>Quetiapine\n          <ul class=\"clinical-list level-3\">\n            <li>Initial dose: 12.5 - 25 mg</li>\n            <li>Routes: Oral</li>\n            <li>Degree of sedation: High</li>\n            <li>Risk of extrapyramidal symptoms: Low</li>\n          </ul>\n        </li>\n      </ul>\n    </li>\n  </ul>\n</li>\n<li>Notes:\n  <ul class=\"clinical-list level-2\">\n    <li>Benzodiazepines should be avoided as the amnestic effect of benzos will tend to worsen delirium, but may have to be used in some circumstances.</li>\n    <li><strong>Patient should be seen and plan reviewed with senior prior to administration of any new meds.</strong></li>\n  </ul>\n</li>\n</ul>",
    "sources": [
      "Marcantonio, Edward R. \"Delirium in hospitalized older adults.\" New England Journal of Medicine 377.15 (2017): 1456-1466"
    ]
  }
];

// ===== VALIDATION NOTE (Chunk A) =====
// This build includes the first 5 sections only.
// Next chunks will append additional sections without changing app architecture.

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
  lastView: "home", // "home" | "section" | "ref"
  searchIndex: null, // built on init
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

function showEl(el) {
  el.classList.remove("hidden");
}

function hideEl(el) {
  el.classList.add("hidden");
}

function buildSearchIndex() {
  // Full-document search: title + body text + sources
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
  if (!entry) return false;
  return entry.haystack.includes(q);
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

  // Fix list structure invariants
  normalizePdfListStructure(contentWrap);

  // NEW: Make every primary bullet a dropdown (details/summary)
  convertPrimaryBulletsToDropdowns(contentWrap);

  // Wire ref links (dropdowns are native details, no JS required)
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
      `<p class="section-empty">No sections loaded. Ensure <code>script.js</code> contains <code>const SECTIONS = [...]</code> and that the deployed file matches your local version.</p>`;
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
/**
 * Repairs common PDF-to-HTML mistakes:
 * - Ensures <ul> never becomes a sibling of a <li> when it should be nested within that <li>.
 * - Ensures dropdown containers live inside <li> and do not break list structure.
 */
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

  // If a .drop exists directly under a <ul>, wrap it inside a <li> (required invariant)
  root.querySelectorAll("ul > .drop").forEach(drop => {
    const li = document.createElement("li");
    li.appendChild(drop);
    drop.parentElement.insertBefore(li, drop.parentElement.firstChild);
  });
}

/* ===========================
   NEW: Primary bullets -> dropdowns (details/summary)
   =========================== */
/**
 * Converts every primary bullet (<ul.level-1> direct <li> children) into a dropdown.
 * - li remains the outer container (non-negotiable)
 * - dropdown (details/summary) lives inside li
 * - content below the "header" (nested lists, continuation lines, etc.) goes into the panel
 */
function convertPrimaryBulletsToDropdowns(root) {
  const topList = root.querySelector("ul.clinical-list.level-1");
  if (!topList) return;

  const primaryLis = Array.from(topList.children).filter(el => el.tagName?.toLowerCase() === "li");

  primaryLis.forEach(li => {
    // Don't double-wrap if already converted
    if (li.querySelector(":scope > details.drop")) return;

    // Capture original nodes
    const nodes = Array.from(li.childNodes);

    // Determine split point: first nested UL/OL/DIV (common "body" content marker)
    const splitIdx = nodes.findIndex(n => {
      if (n.nodeType !== Node.ELEMENT_NODE) return false;
      const tag = n.tagName.toLowerCase();
      return tag === "ul" || tag === "ol" || tag === "div" || tag === "table";
    });

    const headerNodes = splitIdx === -1 ? nodes : nodes.slice(0, splitIdx);
    const bodyNodes = splitIdx === -1 ? [] : nodes.slice(splitIdx);

    // If header is empty (edge cases), treat whole thing as header
    const safeHeaderNodes = headerNodes.length ? headerNodes : nodes;

    // Build details dropdown
    const details = document.createElement("details");
    details.className = "drop";

    const summary = document.createElement("summary");
    summary.className = "drop-summary";

    const titleSpan = document.createElement("span");
    titleSpan.className = "drop-title";

    // Put header nodes into titleSpan
    safeHeaderNodes.forEach(n => titleSpan.appendChild(n));

    const chev = document.createElement("span");
    chev.className = "chev";
    chev.textContent = "▾";

    summary.appendChild(titleSpan);
    summary.appendChild(chev);

    const panel = document.createElement("div");
    panel.className = "drop-panel";

    // Move body nodes into panel (if any)
    bodyNodes.forEach(n => panel.appendChild(n));

    details.appendChild(summary);
    details.appendChild(panel);

    // Clear li and insert details
    li.innerHTML = "";
    li.appendChild(details);

    // If panel ends up empty, keep it empty (no invented text), but remove extra border spacing
    if (!panel.childNodes.length) {
      panel.setAttribute("data-empty", "true");
    }
  });
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

  // Build full-document search index once
  buildSearchIndex();

  els.backBtn?.addEventListener("click", () => history.back());
  els.refBackBtn?.addEventListener("click", () => history.back());
  els.homeIconBtn?.addEventListener("click", () => goHome(true));

  els.searchInput?.addEventListener("input", () => {
    renderHome(els.searchInput.value);
  });

  els.searchInput?.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
      const q = (els.searchInput.value || "").trim().toLowerCase();
      if (!q) return;

      // Jump to the top match in full-document search (title or body)
      const first = state.searchIndex?.find(entry => entry.haystack.includes(q));
      if (first) showSection(first.idx, true);
    }
  });

  window.addEventListener("popstate", handleHashRoute);
  window.addEventListener("hashchange", handleHashRoute);

  handleHashRoute();
}

document.addEventListener("DOMContentLoaded", init);
