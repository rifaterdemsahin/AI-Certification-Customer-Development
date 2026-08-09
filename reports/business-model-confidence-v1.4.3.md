# Business Model Confidence Report — v1.4.3

> **Superseded by [v1.4.4](business-model-confidence-v1.4.4.md)** (2026-08-09) — that run adds `sitemap.html`, a navigation-tooling page with no business claim; score holds flat at 40/100.

**Date:** 2026-08-09
**Produced by:** the `business-model-sanity-check` skill (`.claude/skills/business-model-sanity-check/SKILL.md`)
**What changed vs. v1.4.2:** patch bump — no new hypothesis crossed a status tier and no new check category was added. This run follows an update to `5_Symbols/growth/90-day-execution-plan.html`: (1) a Day-by-Day Calendar section was appended, expanding all 90 days into per-date rows (grouped by phase, each marked Cohort or Production/prep, with the 3 phase-exit checkpoints called out); (2) a date off-by-one found while generating that calendar was corrected — the plan's end date is **2026-11-06**, not 2026-11-07 as originally published in v1.34.0/v1.4.2 (Day 1 = Aug 9, so Day 90 = Aug 9 + 89 days = Nov 6; the 13-Sunday-cohort count is unaffected, since Nov 7 was never a Sunday either). **Result: the overall score holds flat at 40/100.** Hypothesis Validation holds flat at 27.5 (28/100) — no hypothesis status changed. Site Integrity holds flat at 67.5: the appended calendar adds 0 new `href`s (plain date/text rows only) so it introduces 0 broken links and doesn't change orphan-page status; the pre-existing `5_Symbols/markdown_renderer.html` orphan (−15) and the acidity-check findings are unchanged.

---

## Overall Score

# 40 / 100 — Low-moderate confidence

> No hypothesis crossed a status tier and no integrity finding changed this run. The only substantive change was a correctness fix (an off-by-one date error) plus more granular presentation of already-tracked H19 estimates — neither moves either sub-score.

```
overall = round(0.7 × Hypothesis Validation Score + 0.3 × Site Integrity Score)
        = round(0.7 × 27.50 + 0.3 × 67.50)
        = round(19.25 + 20.25)
        = round(39.50)
        = 40
```

| Sub-score | v1.4.2 | v1.4.3 | Change |
|---|---|---|---|
| Hypothesis Validation Score | 27.5 / 100 | **27.5 / 100** | — |
| Site Integrity Score | 67.5 / 100 | **67.5 / 100** | — |
| **Overall** | **40 / 100** | **40 / 100** | — |

---

## Hypothesis Validation Score — 27.5/100 (displayed 28/100)

Re-derived fresh from each hypothesis's own **Status:** line in `HYPOTHESIS.md`. No status tier changed since v1.4.2 — the 22-hypothesis table is unchanged from that version and is not repeated here in full; see `business-model-confidence-v1.4.2.md` for the per-hypothesis breakdown.

**Sum:** 605 across 22 hypotheses → 605 / 22 = **27.500… → 28/100** (unchanged).

---

## Site Integrity Score — 67.5/100 (unchanged)

Re-checked fresh across all 129 HTML files, per the skill's Step 3:

| # | Finding | v1.4.2 | v1.4.3 | Deduction |
|---|---|---|---|---|
| 1 | Acidity-check findings still open (F2, F11) | −10 | −10 | Unchanged (latest is still `acidity-check-report-v1.2.0.md`) |
| 2 | Acidity-check findings partially addressed (F3, F7, F9) | −7.5 | −7.5 | Unchanged |
| 3 | HYPOTHESIS.md table/entry mismatches | 0 | 0 | All 22 rows match their entries |
| 4 | Broken local links | 0 | 0 | Full-repo scan, 129 HTML files (unchanged count — this run edited an existing page rather than adding one), 0 real broken links (same 3 pre-existing false positives inside inline JS template-literal/string code). The appended Day-by-Day Calendar table has 0 `href`s of its own (plain date/text cells), so it structurally cannot introduce a new broken link. |
| 5 | Orphaned pages | −15 | −15 | `5_Symbols/markdown_renderer.html` — unchanged, pre-existing, unrelated to this edit |
| 6 | Headline number cross-file consistency | 0 | 0 | $10,000 / 1,000x / $100,000 / >40% all consistent |
| 7 | Uncommitted work (`git status --porcelain`) | 0 | 0 | This run's batch (3 files: `90-day-execution-plan.html`, `nav.js`, `HYPOTHESIS.md`) is committed as part of this same run |

**Total deductions: 32.5 → Site Integrity Score: 67.5**

---

## What Would Move the Score

Unchanged from v1.4.2. Highest-leverage housekeeping fix: resolve the orphaned `5_Symbols/markdown_renderer.html` duplicate (−15 → Site Integrity 82.5, overall ~78). Highest-leverage business action: **H9** (the $10k Stage 2→3 gate), which the 90-Day Execution Plan's Phase 3 (Days 61–90, now confirmed as Oct 8 – Nov 6) is explicitly built to produce a real go/no-go call on.

---

## Version History

| Version | Date | Overall Score | Note |
|---|---|---|---|
| v1.4.3 | 2026-08-09 | 40 / 100 (Low-moderate) | Day-by-Day Calendar appended to `90-day-execution-plan.html`; corrected a Nov 7 → Nov 6 date off-by-one; no score change |
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
