// UC Night Float Survival Guide
// Offline-capable sections with in-app reference viewer.
// FIX: post-process section HTML to repair list nesting + indentation.

const APP_TITLE = "UC Night Float Survival Guide";

/**
 * NOTE:
 * Your SECTIONS array is large. Keep your existing SECTIONS constant as-is.
 * Paste your current SECTIONS here unchanged.
 */
const SECTIONS = (typeof window !== "undefined" && window.SECTIONS) ? window.SECTIONS : ([
  // --- KEEP YOUR EXISTING SECTIONS HERE ---
]);

const els = {
  homeControls: document.getElementById("home-controls"),
  homeView: document.getElementById("homeView"),
  sectionView: document.getElementById("sectionView"),
  sectionTitle: document.getElementById("sectionTitle"),
  sectionMeta: document.getElementById("sectionMeta"),
  sectionContent: document.getElementById("sectionContent"),
  backBtn: document.getElementById("backBtn"),
  searchInput: document.getElementById("searchInput"),
  homeIconBtn: document.getElementById("homeIconBtn"),

  refView: document.getElementById("refView"),
  refBackBtn: document.getElementById("refBackBtn"),
  refTitle: document.getElementById("refTitle"),
  refMeta: document.getElementById("refMeta"),
  refFrame: document.getElementById("refFrame"),
};

let currentSectionIndex = null;
let navStack = [];

function escapeHtml(str) {
  return String(str)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;");
}

/* ---------- NAV ---------- */

function showHome(pushState = true) {
  if (pushState) navStack = [];
  currentSectionIndex = null;

  els.homeControls.classList.remove("hidden");
  els.homeView.classList.remove("hidden");
  els.sectionView.classList.add("hidden");
  els.refView.classList.add("hidden");

  els.refFrame.src = "";
  renderHome(els.searchInput.value || "");
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

  els.sectionTitle.textContent = section.title;
  els.sectionMeta.textContent = "";

  // Render HTML
  els.sectionContent.innerHTML = section.html || "";

  // FIX #1: Normalize / repair the DOM structure (lists, bullets, continuations, tables)
  postProcessSectionDom(els.sectionContent);

  // Append Sources (if any) to bottom of page
  if (Array.isArray(section.sources) && section.sources.length) {
    const sourcesHtml = section.sources
      .filter(Boolean)
      .map(s => `<li>${escapeHtml(s)}</li>`)
      .join("");
    const wrap = document.createElement("div");
    wrap.className = "sources";
    wrap.innerHTML = `<h3>Sources</h3><ul class="clinical-list level-1">${sourcesHtml}</ul>`;
    els.sectionContent.appendChild(wrap);
  }

  wireDropdowns(els.sectionContent);
  wireReferenceLinks(els.sectionContent);

  window.scrollTo({ top: 0, left: 0, behavior: "instant" });
}

function showReference(filename, pushState = true) {
  if (!filename) return;

  if (pushState) {
    navStack.push({ view: "section", index: currentSectionIndex });
  }

  els.homeControls.classList.add("hidden");
  els.homeView.classList.add("hidden");
  els.sectionView.classList.add("hidden");
  els.refView.classList.remove("hidden");

  els.refTitle.textContent = "Reference";
  els.refMeta.textContent = filename;

  // Same-folder reference lookup
  els.refFrame.src = filename;

  window.scrollTo({ top: 0, left: 0, behavior: "instant" });
}

function goBack() {
  const last = navStack.pop();
  if (!last) {
    showHome(true);
    return;
  }
  if (last.view === "home") {
    showHome(false);
    return;
  }
  if (last.view === "section") {
    showSection(last.index, false);
    return;
  }
  showHome(false);
}

/* ---------- HOME ---------- */

function renderHome(filterText) {
  const q = (filterText || "").trim().toLowerCase();
  const matches = SECTIONS
    .map((s, idx) => ({ ...s, idx }))
    .filter(s => !q || s.title.toLowerCase().includes(q));

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

/* ---------- DROPDOWNS + LINKS ---------- */

function wireDropdowns(root) {
  root.querySelectorAll(".drop-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      const expanded = btn.getAttribute("aria-expanded") === "true";
      btn.setAttribute("aria-expanded", expanded ? "false" : "true");
      const panel = btn.parentElement?.querySelector(".drop-panel");
      if (!panel) return;
      panel.hidden = expanded;
    });
  });
}

function wireReferenceLinks(root) {
  root.querySelectorAll(".ref-link").forEach(a => {
    a.addEventListener("click", (e) => {
      e.preventDefault();
      const ref = a.getAttribute("data-ref");
      showReference(ref, true);
    });
  });
}

/* ---------- FIXES: PDF LIST STRUCTURE NORMALIZATION ---------- */

/**
 * Repairs common PDF-to-HTML list problems:
 * 1) Nested <ul> appearing as siblings of <li> (invalid) → moves <ul> into preceding <li>
 * 2) Empty <li> bullets → removes/hides
 * 3) Orphan <p> lines that should be continuation of prior bullet → moves into last <li>
 * 4) Wrap tables in .table-wrap to prevent overflow
 * 5) Applies .clinical-list + level-* classes to all lists for consistent indenting/bullets
 */
function postProcessSectionDom(root) {
  if (!root) return;

  // 4) Wrap tables
  root.querySelectorAll("table").forEach(t => {
    if (t.parentElement && t.parentElement.classList.contains("table-wrap")) return;
    const wrap = document.createElement("div");
    wrap.className = "table-wrap";
    t.parentNode.insertBefore(wrap, t);
    wrap.appendChild(t);
  });

  // 1) Fix invalid structure: <ul> directly inside <ul> (should be within a <li>)
  // Repeat a couple passes because moving nodes changes structure.
  for (let pass = 0; pass < 3; pass++) {
    root.querySelectorAll("ul").forEach(ul => {
      const children = Array.from(ul.children);
      children.forEach((child, idx) => {
        if (child.tagName === "UL") {
          // find previous LI to attach to
          const prev = findPreviousElementSiblingOfType(child, "LI");
          if (prev) {
            prev.appendChild(child);
          } else {
            // No previous LI exists; create one so bullet alignment doesn't break
            const li = document.createElement("li");
            li.className = "is-empty";
            ul.insertBefore(li, child);
            li.appendChild(child);
          }
        }
      });
    });
  }

  // 2) Mark empty <li> so CSS can hide them (and removes truly empty ones)
  root.querySelectorAll("li").forEach(li => {
    const text = (li.textContent || "").replace(/\s+/g, " ").trim();
    const hasMeaningfulChild = Array.from(li.children).some(ch => ch.tagName !== "UL" && ch.tagName !== "OL");
    const hasListChild = li.querySelector("ul,ol");
    if (!text && !hasMeaningfulChild && !hasListChild) {
      li.classList.add("is-empty");
    }
  });

  // 3) Pull orphan paragraphs into the last bullet when they look like continuations
  // Pattern in your screenshot: a <p> after a <ul> that should continue last <li>.
  Array.from(root.querySelectorAll("p")).forEach(p => {
    const prev = p.previousElementSibling;
    if (!prev) return;

    // If paragraph follows a UL, treat as continuation of last bullet if any.
    if (prev.tagName === "UL") {
      const lastLi = prev.querySelector("li:last-child");
      if (lastLi) {
        const cont = document.createElement("div");
        cont.className = "li-cont";
        cont.textContent = (p.textContent || "").trim();
        if (cont.textContent) lastLi.appendChild(cont);
        p.remove();
      }
    }
  });

  // 5) Apply list classes + bullet styles by depth
  applyClinicalListClasses(root);
}

function findPreviousElementSiblingOfType(node, tagName) {
  let cur = node.previousElementSibling;
  while (cur) {
    if (cur.tagName === tagName) return cur;
    cur = cur.previousElementSibling;
  }
  return null;
}

function applyClinicalListClasses(root) {
  const lists = root.querySelectorAll("ul");
  lists.forEach(ul => {
    // skip nav/home or other UI lists (none expected, but safe)
    if (ul.closest(".section-list")) return;

    ul.classList.add("clinical-list");

    const depth = countListDepth(ul);
    if (depth >= 3) ul.classList.add("level-3");
    else if (depth === 2) ul.classList.add("level-2");
    else ul.classList.add("level-1");
  });
}

function countListDepth(ul) {
  // depth = number of ancestor ULs + 1
  let depth = 1;
  let p = ul.parentElement;
  while (p) {
    if (p.tagName === "UL") depth++;
    p = p.parentElement;
  }
  return depth;
}

/* ---------- INIT ---------- */

function init() {
  document.title = APP_TITLE;

  els.searchInput.addEventListener("input", () => {
    if (!els.sectionView.classList.contains("hidden") || !els.refView.classList.contains("hidden")) return;
    renderHome(els.searchInput.value || "");
  });

  els.searchInput.addEventListener("keydown", (e) => {
    if (e.key !== "Enter") return;
    const q = (els.searchInput.value || "").trim().toLowerCase();
    if (!q) return;
    const hit = SECTIONS.findIndex(s => s.title.toLowerCase().includes(q));
    if (hit >= 0) showSection(hit, true);
  });

  els.backBtn.addEventListener("click", goBack);
  els.refBackBtn.addEventListener("click", goBack);
  els.homeIconBtn.addEventListener("click", () => showHome(true));

  showHome(true);
}

document.addEventListener("DOMContentLoaded", init);
