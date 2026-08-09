# Business Model Confidence Report — v1.4.4

**Date:** 2026-08-09
**Produced by:** the `business-model-sanity-check` skill (`.claude/skills/business-model-sanity-check/SKILL.md`)
**What changed vs. v1.4.3:** patch bump — no new hypothesis crossed a status tier and no new check category was added. This run follows the addition of `5_Symbols/dashboard/sitemap.html`, a new Site Map page with search and Logical/A-Z sort modes, built to consume `nav.js`'s own `searchIndex`/`groups` data live (exposed via a new `window.__siteMapData` global) rather than hand-duplicating the page list. This is a pure navigation-infrastructure page with no falsifiable business claim of its own — same category as the pre-existing `latest-pages.html`, which is likewise absent from `HYPOTHESIS.md`. **Result: the overall score holds flat at 40/100.** Hypothesis Validation holds flat at 27.5 (28/100) — unaffected, no hypothesis touched. Site Integrity holds flat at 67.5: the new page is confirmed reachable (registered in `nav.js`, linked from `index.html` and `latest-pages.html`), and its dynamically-generated `href`s were verified in-browser (Playwright) rather than by static regex, since the static link-scanner flags one of its own JS template-literal strings as a false positive (the same known pattern as 3 other pages).

---

## Overall Score

# 40 / 100 — Low-moderate confidence

> No hypothesis crossed a status tier and no integrity finding changed this run — the Site Map is navigation tooling, not a new business claim.

```
overall = round(0.7 × Hypothesis Validation Score + 0.3 × Site Integrity Score)
        = round(0.7 × 27.50 + 0.3 × 67.50)
        = round(19.25 + 20.25)
        = round(39.50)
        = 40
```

| Sub-score | v1.4.3 | v1.4.4 | Change |
|---|---|---|---|
| Hypothesis Validation Score | 27.5 / 100 | **27.5 / 100** | — |
| Site Integrity Score | 67.5 / 100 | **67.5 / 100** | — |
| **Overall** | **40 / 100** | **40 / 100** | — |

---

## Hypothesis Validation Score — 27.5/100 (displayed 28/100)

Unchanged from v1.4.3 — the 22-hypothesis table is identical; see `business-model-confidence-v1.4.2.md` for the full per-hypothesis breakdown.

**Sum:** 605 across 22 hypotheses → 605 / 22 = **27.500… → 28/100** (unchanged).

---

## Site Integrity Score — 67.5/100 (unchanged)

Re-checked fresh across all 130 HTML files (up from 129 — the new `sitemap.html`):

| # | Finding | v1.4.3 | v1.4.4 | Deduction |
|---|---|---|---|---|
| 1 | Acidity-check findings still open (F2, F11) | −10 | −10 | Unchanged |
| 2 | Acidity-check findings partially addressed (F3, F7, F9) | −7.5 | −7.5 | Unchanged |
| 3 | HYPOTHESIS.md table/entry mismatches | 0 | 0 | Unaffected — this batch touches no hypothesis |
| 4 | Broken local links | 0 | 0 | Full-repo static scan found 4 regex hits, all false positives inside inline JS template-literal strings (3 pre-existing + 1 new, from `sitemap.html`'s own `'<a href="' + resolveHref(item.url) + '"...'` string). Verified with a live Playwright load of `sitemap.html`: 128 pages resolve correctly in both Logical and A-Z modes, 0 actual broken links, 0 console/page errors (only a blocked Google Fonts CSS request, a sandbox-wide network restriction unrelated to this page). |
| 5 | Orphaned pages | −15 | −15 | `5_Symbols/markdown_renderer.html` — unchanged, pre-existing. `sitemap.html` itself confirmed **not** orphaned: registered in `nav.js` (Docs dropdown + search index) and linked from `index.html` and `latest-pages.html`. |
| 6 | Headline number cross-file consistency | 0 | 0 | Unaffected |
| 7 | Uncommitted work (`git status --porcelain`) | 0 | 0 | This run's batch (`sitemap.html` new, plus `nav.js`, `index.html`, `latest-pages.html` edited for registration/cross-linking) is committed as part of this same run |

**Total deductions: 32.5 → Site Integrity Score: 67.5**

---

## What Would Move the Score

Unchanged from v1.4.3. Highest-leverage housekeeping fix: resolve the orphaned `5_Symbols/markdown_renderer.html` duplicate (−15 → Site Integrity 82.5, overall ~78). Highest-leverage business action: **H9** (the $10k Stage 2→3 gate).

---

## Version History

| Version | Date | Overall Score | Note |
|---|---|---|---|
| v1.4.4 | 2026-08-09 | 40 / 100 (Low-moderate) | Site Map page added (nav tooling, no new hypothesis); no score change |
| v1.4.3 | 2026-08-09 | 40 / 100 (Low-moderate) | Day-by-Day Calendar appended to `90-day-execution-plan.html`; corrected a Nov 7 → Nov 6 off-by-one; no score change |
| v1.4.2 | 2026-08-09 | 40 / 100 (Low-moderate) | Added `90-day-execution-plan.html`; no score change |
| v1.4.1 | 2026-08-09 | 40 / 100 (Low-moderate) | Moat glossary entry + Grok external-review evidence added; found new orphaned duplicate `5_Symbols/markdown_renderer.html` (−15); −10 uncommitted-work deduction cleared |
| v1.4.0 | 2026-08-09 | 41 / 100 (Low-moderate) | H11 and H14 updated to focus on weekday TA cohorts and Nvidia, Microsoft, Google certifications; −10 temporary uncommitted-work deduction |
| v1.3.0 | 2026-08-09 | 41 / 100 (Low-moderate) | Added Copy-Paste One-Pager; found and fixed 75 real broken links missed by v1.2.0; −10 temporary uncommitted-work deduction |
| v1.2.0 | 2026-08-07 | 44 / 100 (Low-moderate) | Folder refactoring into 5_Symbols/ completed; H22 added (validation moves to 27.5) |
| v1.1.0 | 2026-08-07 | 44 / 100 (Low-moderate) | H20/H21 added, F9 upgraded |
| v1.0.3 | 2026-08-05 | 44 / 100 (Low-moderate) | Unchanged. Added Perplexity verification of H6 |
| v1.0.2 | 2026-08-05 | 44 / 100 (Low-moderate) | Unchanged |
| v1.0.1 | 2026-08-04 | 44 / 100 (Low-moderate) | 58-file uncommitted-work risk resolved |
| v1.0.0 | 2026-08-04 | 38 / 100 (Low-moderate) | Initial version |
