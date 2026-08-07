# CLAUDE.md

Guidance for a future Claude Code session working in this repository.

## Mandatory Workflow Mandates

Upon completing any task (especially page updates), always:
1. Perform the project's build step (none exists).
2. Start/Restart the local application server (typically Python HTTP server on port `8000`).
3. Open the specific updated pages in the default browser using the Mac CLI `open` command (e.g., `open http://localhost:8000/bmc-channels.html`).
4. Open the specific GitHub page with the related update/history (e.g., `open https://github.com/rifaterdemsahin/AI-Certification-Customer-Development/commits/main/bmc-channels.html`) and wait for the live GitHub Pages deployment to complete.
5. Display clickable links to that updated page at the very end of your final response.
6. Whenever a page is updated or a new page is added, link it to `HYPOTHESIS.md`: add or update the relevant hypothesis entry (premise → conclusion → status) to reference the page by filename, and cite the hypothesis ID (e.g. "see H10") from the page's content where it states a falsifiable claim. Bump `HYPOTHESIS.md`'s version and Change Log when you do this.

## What this project is

A static HTML/CSS/JS site (no build step, no framework, no bundler — just open the
files or serve the directory) documenting the Customer Development business plan
(Steve Blank methodology) for **AI Certification Helper**, a business run by founder
**Rifat Erdem Sahin**. The business: animated YouTube videos that teach AI/cloud
certification content, funneling free viewers into a $10/mo prep membership and
$250–$500 live cohort bootcamps aimed at the Claude Certified Architect – Professional
exam (issued by Anthropic via Pearson VUE — this company never issues the
certification itself).

Do not re-derive these facts from scratch in a future session — they are established
and cross-referenced throughout the site:
- **Founder:** Rifat Erdem Sahin, running this as a second job (not full-time; works a contract role, meaning YouTube and LinkedIn comments are batch-answered in weekly cycles).
- **Primary Channels:** YouTube Courses & organic LinkedIn sharing (using Rifat Erdem Sahin's professional audience).
- **$10,000 USD** cumulative cohort/course revenue = the Stage 2 → 3 (Customer
  Validation → Customer Creation) exit gate. See `stage-customer-creation.html`,
  `stage-customer-validation.html`, and `quality-gates.html`.
- **1,000x subscriber growth per video** (baseline ~30 subscribers → ~30,000 target)
  = the primary Stage 3 (Customer Creation) metric. See `stage-customer-creation.html`.
- **$100,000 annual run-rate** = the Stage 4 (Company Building) hiring trigger
  (freelance video editor, cohort support coordinator, technical TAs). See
  `stage-company-building.html`.
- **>40% average watch retention** = an MVP-stage video-quality floor, not a stage
  gate (demoted from an earlier draft — see `HYPOTHESIS.md` H10).
- All "guarantee of passing the exam" language has been deliberately removed
  site-wide; the value prop is live cohort practice/community, not a promised outcome.

The authoritative running log of every falsifiable claim on the site — with status
(Validated / In Testing / Planned / Claimed-unverified) — is `HYPOTHESIS.md`. Read it
before asserting a new business number; update it if you change one.

## Page conventions

Every page type follows the same body structure: a `.card` hero block with a
`.badge` + `.info-list` (or a heading + intro paragraph for simpler pages), one or
more `.content-section` blocks with a `.section-title`, a back-link near the top to
the most relevant parent page, and the standard footer.

Page families:
- `index.html` — the hub. Has the 4-stage flow diagram, the original "Page Spec
  Index" grid, and a "📐 Business Planning & Growth" grid added for the newer pages.
- `stage-customer-discovery.html`, `stage-customer-validation.html`,
  `stage-customer-creation.html`, `stage-company-building.html` — the 4 Steve Blank
  stages. Each links out to its `comp-*.html` component specs.
- `cd-*.html` (27 files) — the detailed Customer Discovery process playbook (the
  "Discovery Process" nav dropdown): interview guide, watering holes/outreach,
  interview recording & tracker, `cd-process.html` overview, and the 4 phases
  (Hypothesis / Test Problem / Test Product / Verify), each with its own set of
  `cd-hyp-*.html` / `cd-tp-*.html` / `cd-tpr-*.html` / `cd-verify-*.html` sub-pages.
  This is the granular, step-by-step execution detail behind
  `stage-customer-discovery.html`.
- `discovery/*.html` (4 files, in the `discovery/` subfolder) — `state-hypotheses`,
  `test-problem`, `test-solution`, `verify-pivot`. Deep-dive detail pages linked from
  the SVG diagram on `stage-customer-discovery.html`; also indexed in `nav.js`'s
  `searchIndex` (findable via 🔍 Search) but intentionally not in a nav dropdown —
  reach them contextually from the stage page's diagram, not the top menu.
- `comp-*.html` (9 files) — detailed component specs tied to a specific stage
  (Problem-Solution Fit, MVP, Market, Business Model, Funnel, PMF, Roadmap, Creation
  Validation, Scale Organization). This is a different, older framework from the
  classic 9-block Business Model Canvas below — keep them separate, don't merge.
- `bmc-*.html` (9 files) + `business-model-canvas.html` (overview) +
  `value-proposition.html` — the classic Business Model Canvas. Value Proposition is
  its own page (not `bmc-value-proposition.html`) because it doubles as the detailed
  Value Proposition Canvas.
- Standalone strategy/growth pages: `hypothesis.html`, `focus.html`,
  `target-audience.html`, `risk-analysis.html`, `requirements.html`,
  `business-plan-summary.html`, `sales-pipeline.html`, `flywheel.html`,
  `quality-gates.html`, `test-metrics.html`, `competitive-analysis.html`,
  `evidence-map.html`, `single-founder-bandwidth.html` (Strategy) and
  `funnel-math.html`, `unit-economics.html`, `cost-side-model.html`,
  `test-plan.html`, `validation-repeat-gate.html`, `advertisement.html` (Growth)
  — the newer batch (added 2026-08-04) each exist to close one specific gap named
  in `reports/acidity-check-report-v1.1.0.md` (F3-F7); read that report before
  assuming one of those gaps is still open.
- `markdown_renderer.html?src=PATH` — renders any `.md` file in the repo as styled
  HTML (see below).

When adding a new page: create the `.html` file with `<div id="site-header"></div>`
near the top of `<body>` (no hand-written `<header>` — grep for `<header>` across
`*.html` after any nav change; it should never match), include `<script
src="nav.js"></script>` immediately before `<script src="main.js"></script>` at the
end of `<body>`, then add the new page's link into the relevant group inside
`nav.js`'s `groups` array so it shows up in the top nav. Also add at least 2 links
to/from other relevant pages (bidirectional linking is a deliberate site convention —
see the end of most `content-section` blocks for examples).

## The shared nav.js pattern

`nav.js` is the single source of truth for the site header/navigation. It builds
the `<header><nav class="nav-container">...</nav></header>` markup as a JS string,
determines the active page from `location.pathname` (and `location.search` for
`markdown_renderer.html?src=...` links), and injects it into `#site-header`. No page
should hand-write its own `<header>` block — that duplication was removed in favor of
this single file so nav structure/grouping only needs to be edited once.

Nav groups (top-level menu items), in order: **Hub** (plain link) · **Stages**
(the 4 stage pages) · **Discovery Process** (all 27 `cd-*.html` playbook pages,
nested/indented in the dropdown to show the phase → sub-page hierarchy) ·
**Strategy** (hypothesis, focus, target audience, risk analysis, requirements,
business plan summary) · **Business Model** (canvas overview + value prop + the 9
`bmc-*.html` blocks) · **Growth** (sales pipeline, flywheel, quality gates, test &
metrics) · **Components** (the original 9 `comp-*.html` specs) · **Docs** (README,
project rationale, agent guidelines, hypothesis tracker, and the 5 `reports/*.md`
files — all linked via `markdown_renderer.html?src=...` rather than as raw `.md`
links, so they render as styled pages instead of downloading/showing raw text).

A link-integrity check (every local `href` across all `.html` files, plus every URL
referenced inside `nav.js`'s `groups` and `searchIndex` arrays, resolved against
files that actually exist on disk) turned up zero broken links and zero pages
unreachable from `nav.js` as of 2026-08-02 — keep it that way: whenever a page is
renamed or removed, grep for its old filename across `*.html` and `nav.js` before
considering the change done.

## Nav bar action buttons (Search / Notes / Theme)

Alongside the link groups, `nav.js` renders three `.nav-action-btn` buttons at the
end of `.nav-menu`, each backed by logic inside the same IIFE:

- **🔍 Search** (`#nav-search-btn`) — opens the `#search-modal` overlay, fuzzy-matches
  against the in-file `searchIndex` array (bump it when adding a new page). Toggle
  with `Ctrl/Cmd+K`.
- **📝 Notes** (`#nav-notes-btn`) — opens the `#notes-drawer` floating panel. Notes
  persist in the `site_notes` cookie (365-day) via `getNotes()`/`saveNotes()`, and are
  tagged with the page they were written on. The drawer has its own **minimize**
  button (`#minimize-notes-btn`, next to close) that adds a `.minimized` class to
  `#notes-drawer` — CSS collapses it to just the header strip (`translateY` in
  `style.css`); clicking the header again while minimized restores it via
  `toggleMinimizeNotes()`. While the drawer is open (and not minimized), any text the
  user highlights elsewhere on the page is auto-appended into `#note-textarea` (a
  `mouseup` listener reads `window.getSelection()`, skips selections made inside the
  drawer itself) — no extra click needed to send a highlight into the note.
- **☀️/🌙 Theme** (`#nav-theme-btn`) — toggles a `light-theme` class on `<body>`,
  persisted in the `site_theme` cookie (365-day, values `dark`/`light`) via
  `getTheme()`/`applyTheme()`/`toggleTheme()`. `style.css` defines the light-mode
  variable overrides under `body.light-theme` near the bottom of the file. Because
  `nav.js` loads at the end of `<body>` (per this file's page-authoring convention),
  the saved theme is applied as early as nav.js executes to minimize flash, but a
  brief flash of the default dark theme on first paint is expected and out of scope
  to fully eliminate without an inline head script on every page.
- **🧭 Guided Tour Widget** (floating helper) — rendered globally on all pages via `nav.js` (logic) and `style.css` (layout and styling). Floats at the bottom-left of the screen. When expanded, it offers a 15-stop sequential guided tour through the site's primary pages (index, motivation, processes, BMC, hypotheses, unit economics, roadmaps, milestones, and confidence checks). Includes custom descriptions, a progress tracker, prev/next buttons, and a dropdown selector. It also dynamically displays a "Related Concepts" grid linking to semantic siblings for the current page (with fallback to search index categories), enabling easy site scanning. The open/collapsed state is remembered across page changes via the `site_tour_open` cookie.

## The markdown_renderer.html pattern

`markdown_renderer.html?src=FILENAME.md` (or `?src=reports/FILENAME.md`) fetches
that file as text and renders it client-side with a small dependency-free
markdown→HTML converter defined inline in the page's `<script>` tag (no CDN, works
offline). It escapes HTML from the source first, then supports headings, bold/italic,
inline code, fenced code blocks, lists, links, blockquotes, and horizontal rules.
Rendered output goes inside a `.card.markdown-body` wrapper; the `.markdown-body`
CSS rules live in `style.css`. Use this pattern (link via `markdown_renderer.html?src=...`)
any time you want a `.md` file to be viewable from the nav rather than adding a raw
`.md` link.

## CSS class vocabulary (style.css)

Layout: `.container`, `.grid` + `.col-12`/`.col-8`/`.col-6`/`.col-4` (12-column,
collapses to full-width under 992px), `.content-section`, `.section-title`.

Cards & info: `.card` (has a mouse-follow spotlight hover effect via `main.js`),
`.card-header`, `.card-title`, `.card-icon` (+ `.icon-discovery`/`.icon-validation`/
`.icon-creation`/`.icon-building` stage-color variants), `.card-badge`, `.badge`
(pill label used at the top of hero cards), `.info-list`/`.info-item`/`.info-label`/
`.info-value` (key-value rows), `.spec-box`/`.spec-title`/`.spec-desc` (highlighted
callout block, `border-left-color` is usually overridden inline to match the section's
color), `.emoji-list` (icon-led list items), `.metrics-grid`/`.metric-card`/
`.metric-val`/`.metric-lbl` (big-number stat tiles), `.status-pill` (inline
Validated/Testing/Planned indicator, color set inline).

Nav & flow: `.nav-container`/`.nav-menu`/`.nav-link`/`.nav-dropdown`/
`.nav-dropdown-toggle`/`.nav-dropdown-menu` (hover/focus-driven, no JS needed beyond
nav.js building the markup), `.stages-flow`/`.stage-step`/`.stage-num`/`.stage-name`/
`.stage-desc` (the 4-stage horizontal flow on the hub and reused on
`sales-pipeline.html`), `.flow-arrow` (chevron connector between stage-steps).

Buttons & misc: `.btn`/`.btn-secondary`, `.svg-diagram` (wrapper for inline SVG
schematics — see `comp-market.html`'s TAM/SAM/SOM circles or `flywheel.html`'s
circular diagram for patterns to copy), `.animate-fade-in` (fade-in-on-load,
staggered by `main.js`), `.markdown-body` (added for `markdown_renderer.html`).

CSS custom properties live in `:root` at the top of `style.css` — always reuse
`var(--text-secondary)`, `var(--border-color)`, `var(--color-primary)`,
`var(--color-success)`, `var(--color-warning)`, `var(--color-info)`,
`var(--bg-card)`, etc. rather than hardcoding colors, so both existing and new pages
stay visually consistent. Inline `style=""` for one-off tweaks is normal practice
here (see any existing page) — it's not considered a code smell in this codebase.

## Where the business numbers/milestones live

- `stage-customer-creation.html` — $10,000 Stage 2 exit gate, 1,000x subscriber
  growth Stage 3 metric.
- `stage-company-building.html` — $100,000 ARR Stage 4 hiring trigger.
- `quality-gates.html` — all four stage gates restated together with explicit
  pass/fail numeric criteria, reconciled against the two pages above.
- `test-metrics.html` — experiment-level (not stage-level) expected-metric
  thresholds, e.g. specific A/B test and pricing-test targets.
- `HYPOTHESIS.md` — the full premise → conclusion → status ledger behind every
  number on the site; bump its version and changelog when a number changes.

## Report versioning convention

`reports/*.md` files carry their version in the filename (e.g.
`acidity-check-report-v1.0.md`, `acidity-check-report-v1.1.0.md`), unlike
`HYPOTHESIS.md`, which bumps a version field in place inside a single file. When a
report needs a substantive re-assessment (new evidence resolves or partially
resolves a finding, or a founder decision changes a premise):
1. **Create a new versioned file** (`reports/<name>-vX.Y.0.md`) rather than editing
   the old one in place — old versions stay as the historical record of what was
   known/claimed at that point in time.
2. **Mark each finding's resolution status explicitly, in place** — don't delete a
   resolved finding, annotate it (e.g. "F1. ... → ✅ RESOLVED (date)." or "→ 🟡
   PARTIALLY ADDRESSED.") so a reader can see what changed and why without diffing
   two files.
3. **Add a one-line superseded banner to the top of the old version** linking
   forward to the new one (see the top of `reports/acidity-check-report-v1.0.md`
   for the pattern), and keep both versions linked from `nav.js`'s Docs group so
   neither becomes unreachable.
4. **Update every cross-reference** to the old filename — check `HYPOTHESIS.md`'s
   header, `nav.js`, and any page that cites the report by name.

This mirrors `HYPOTHESIS.md`'s own status legend (✅ Validated / 🟡 In Testing / ⚪
Planned / ⚠️ Claimed-unverified) — the goal in both cases is that nothing on this
site is ever silently marked resolved or silently made to look permanently
unresolved; the status is always visible and dated at the point it changed.
