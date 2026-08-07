# gemini.md

Guidance for a future Gemini session working in this repository.

## Mandatory Workflow Mandates

Upon completing any task (especially page updates), always:
1. Perform the project's build step (none exists).
2. Start/Restart the local application server (typically Python HTTP server on port `8000`).
3. Open **every** updated and newly-created page in the browser using the Mac CLI `open` command — not a representative sample. When a task touches N pages, open all N (e.g. `open -a "Google Chrome" http://localhost:8000/5_Symbols/stages/a.html http://localhost:8000/5_Symbols/bmc/b.html ...` in one call). Per the user's global preference, use `open -a "Google Chrome"`, not the bare `open` command.
4. Open the specific GitHub page with the related update/history (e.g., `open https://github.com/rifaterdemsahin/AI-Certification-Customer-Development/commits/main/5_Symbols/bmc/bmc-channels.html`) and wait for the live GitHub Pages deployment to complete.
5. Display clickable links to that updated page at the very end of your final response.
6. Whenever a page is updated or a new page is added, link it to `HYPOTHESIS.md`: add or update the relevant hypothesis entry (premise &rarr; conclusion &rarr; status) to reference the page by relative path under `5_Symbols/`, and cite the hypothesis ID (e.g. "see H10") from the page's content where it states a falsifiable claim. Bump `HYPOTHESIS.md`'s version and Change Log when you do this.
7. Always re-run the `business-model-sanity-check` skill after a batch of page updates/additions and publish its new versioned report (`reports/business-model-confidence-vX.Y.Z.md` / `5_Symbols/dashboard/confidence-report.html`) — never skip this step, even if the score is expected to hold flat. If the score is below 100, `5_Symbols/dashboard/confidence-report.html` must explicitly outline, for each score component that isn't yet at its ceiling, what concrete evidence (data, measurement, or founder decision) would be needed to move it up — not just the number itself.

## What this project is

A static HTML/CSS/JS site (no build step, no framework, no bundler — just open the files or serve the directory) documenting the Customer Development business plan (Steve Blank methodology) for **AI Certification Helper**, a business run by founder **Rifat Erdem Sahin**. The business: animated YouTube videos that teach AI/cloud certification content, funneling free viewers into a $10/mo prep membership and $250–$500 live cohort bootcamps aimed at the Claude Certified Architect – Professional exam (issued by Anthropic via Pearson VUE — this company never issues the certification itself).

Do not re-derive these facts from scratch in a future session — they are established and cross-referenced throughout the site:
- **Founder:** Rifat Erdem Sahin, running this as a second job (not full-time; works a contract role, meaning YouTube and LinkedIn comments are batch-answered in weekly cycles).
- **Primary Channels:** YouTube Courses & organic LinkedIn sharing (using Rifat Erdem Sahin's professional audience).
- **$10,000 USD** cumulative cohort/course revenue = the Stage 2 &rarr; 3 (Customer Validation &rarr; Customer Creation) exit gate. See `5_Symbols/stages/stage-customer-creation.html`, `5_Symbols/stages/stage-customer-validation.html`, and `5_Symbols/growth/quality-gates.html`.
- **1,000x subscriber growth per video** (baseline ~30 subscribers &rarr; ~30,000 target) = the primary Stage 3 (Customer Creation) metric. See `5_Symbols/stages/stage-customer-creation.html`.
- **$100,000 annual run-rate** = the Stage 4 (Company Building) hiring trigger (freelance video editor, cohort support coordinator, technical TAs). See `5_Symbols/stages/stage-company-building.html`.
- **>40% average watch retention** = an MVP-stage video-quality floor, not a stage gate (demoted from an earlier draft — see `HYPOTHESIS.md` H10).
- All "guarantee of passing the exam" language has been deliberately removed site-wide; the value prop is live cohort practice/community, not a promised outcome.

The authoritative running log of every falsifiable claim on the site — with status (Validated / In Testing / Planned / Claimed-unverified) — is `HYPOTHESIS.md`. Read it before asserting a new business number; update it if you change one.

## Page conventions

Every page type follows the same body structure: a `.card` hero block with a `.badge` + `.info-list` (or a heading + intro paragraph for simpler pages), one or more `.content-section` blocks with a `.section-title`, a back-link near the top to the most relevant parent page, and the standard footer.

Page families (all grouped inside `5_Symbols/` folder):
- `index.html` — the hub in the repository root. Has the 4-stage flow diagram, the original "Page Spec Index" grid, and a "📐 Business Planning & Growth" grid.
- `5_Symbols/stages/` — contains the 4 Steve Blank stages: `stage-customer-discovery.html`, `stage-customer-validation.html`, `stage-customer-creation.html`, `stage-company-building.html`. Each links out to its `5_Symbols/comp/comp-*.html` component specs.
- `5_Symbols/cd/` — the detailed Customer Discovery process playbook: interview guide, watering holes/outreach, interview recording & tracker, `cd-process.html` overview, and the 4 phases (Hypothesis / Test Problem / Test Product / Verify), each with its own sub-pages.
- `5_Symbols/discovery/` — `state-hypotheses.html`, `test-problem.html`, `test-solution.html`, `verify-pivot.html`. Deep-dive detail pages linked from the SVG diagram on `stage-customer-discovery.html`.
- `5_Symbols/comp/` — detailed component specs tied to a specific stage (Problem-Solution Fit, MVP, Market, Business Model, Funnel, PMF, Roadmap, Creation Validation, Scale Organization).
- `5_Symbols/bmc/` — the classic Business Model Canvas blocks (9 files) + `value-proposition.html` (which doubles as the detailed Value Proposition Canvas), `bmc-capital-relationships.html` (Capital Relationships page with Marxian analysis and tool breakdown), and `surplus-value.html` (Surplus Value Creation details).
- `5_Symbols/hypotheses/` — the full hypothesis tracker dashboard `hypothesis.html`, `hypothesis-connectivity.html`, and `hyp-h1.html` &rarr; `hyp-h22.html` detail pages.
- `5_Symbols/strategy/` — standalone strategy/growth pages: `motivation.html`, `focus.html`, `target-audience.html`, `risk-analysis.html`, `requirements.html`, `business-plan-summary.html`, `competitive-analysis.html`, `evidence-map.html`, `single-founder-bandwidth.html`, `why-certification.html`, `moat.html`, `maot.html`.
- `5_Symbols/growth/` — `sales-pipeline.html`, `flywheel.html`, `quality-gates.html`, `stage-timelines.html`, `test-metrics.html`, `test-plan.html`, `content-analysis.html`, `cohort-prep.html`, `advertisement.html`, `funnel-math.html`, `unit-economics.html`, `cost-side-model.html`, `validation-repeat-gate.html`, `marketing-tactics.html`, `conversation-starters.html`, `metrics-dashboard.html`, `market-fit-channels.html`, `ai-demo.html`, `organic-growth.html`.
- `5_Symbols/dashboard/` — `calendar.html` (Milestone Calendar), `todo.html` (Task List), `confidence-report.html` (Confidence Report), `latest-pages.html` (Latest Created/Updated Pages).
- `5_Symbols/product/` — `partners.html`, `pitch-deck.html`, `vc-deck.html`, `self-assessment.html`, `discovery-journey.html`, `exam-prep-product.html`, `exam-performance-evidence.html`, `dictionary.html`.
- `markdown_renderer.html?src=PATH` — in root, renders any `.md` file in the repo as styled HTML.

When adding a new page: create the `.html` file with `<div id="site-header"></div>` near the top of `<body>` (no hand-written `<header>`), include the correct path to `nav.js` and `main.js` (e.g. `<script src="../../nav.js"></script>` for depth=2), then add the page path into the relevant group inside `nav.js`'s `groups` array and `searchIndex` array.

## The shared nav.js pattern

`nav.js` is the single source of truth for the site header/navigation. It dynamically builds the header markup and injects it into `#site-header`. It resolves URLs relatively by computing `pathPrefix` based on location (e.g. `../../` for files in `5_Symbols/bmc/`).

## CSS class vocabulary (style.css)

Re-use CSS custom properties from `:root` in `style.css` (`var(--text-secondary)`, `var(--border-color)`, `var(--color-primary)`, `var(--color-success)`, `var(--color-warning)`, `var(--color-info)`, `var(--bg-card)`, etc.) rather than hardcoding colors. Use `.card`, `.badge`, `.info-list`, `.spec-box`, `.emoji-list`, `.metrics-grid`, `.metric-card`, `.status-pill`, and `.btn` classes.

## Report versioning convention

`reports/*.md` files carry their version in the filename (e.g. `acidity-check-report-v1.2.0.md`). Create a new versioned file rather than editing in place, add a superseded banner at the top of the old file linking to the new one, and update all cross-references in `HYPOTHESIS.md` and `nav.js`.
