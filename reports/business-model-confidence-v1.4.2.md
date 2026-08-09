# Business Model Confidence Report — v1.4.2

**Date:** 2026-08-09
**Produced by:** the `business-model-sanity-check` skill (`.claude/skills/business-model-sanity-check/SKILL.md`)
**What changed vs. v1.4.1:** patch bump — no new hypothesis crossed a status tier and no new check category was added. This run follows the addition of `5_Symbols/growth/90-day-execution-plan.html` (a dated 2026-08-09 to 2026-11-07 execution plan operationalizing H19, registered in `nav.js` and cross-linked from `stage-timelines.html`, `calendar.html`, `test-plan.html`, `todo.html`, and `index.html`) plus H19's Source line update in `HYPOTHESIS.md`. **Result: the overall score holds flat at 40/100.** Hypothesis Validation holds flat at 27.5 (28/100) — the new page cites existing hypotheses (H2, H3, H4, H5, H7, H13, H19) rather than introducing a new one, per its own "no new estimates of its own" framing. Site Integrity also holds flat at 67.5: the new page introduces 0 broken links and is not itself orphaned (confirmed reachable via `nav.js` and 5 inbound `href`s); the pre-existing `5_Symbols/markdown_renderer.html` orphan (−15) is unchanged and untouched by this batch; this batch's own uncommitted work (7 files: 1 new page + 6 edited for cross-linking/registration) is committed as part of this same run, so the −10 uncommitted-work deduction does not apply.

---

## Overall Score

# 40 / 100 — Low-moderate confidence

> Hypothesis Validation held flat at 27.5/100 — no hypothesis crossed a status tier this run; the new 90-Day Execution Plan page is explicitly scoped as operationalizing H19 rather than asserting a new falsifiable claim. Site Integrity held flat at 67.5/100 — the new page added 0 broken links and is not orphaned, and this batch's own uncommitted work clears as it's committed alongside this report.

```
overall = round(0.7 × Hypothesis Validation Score + 0.3 × Site Integrity Score)
        = round(0.7 × 27.50 + 0.3 × 67.50)
        = round(19.25 + 20.25)
        = round(39.50)
        = 40
```

| Sub-score | v1.4.1 | v1.4.2 | Change |
|---|---|---|---|
| Hypothesis Validation Score | 27.5 / 100 | **27.5 / 100** | — |
| Site Integrity Score | 67.5 / 100 | **67.5 / 100** | — |
| **Overall** | **40 / 100** | **40 / 100** | — |

---

## Hypothesis Validation Score — 27.5/100 (displayed 28/100)

Re-derived fresh from each hypothesis's own **Status:** line in `HYPOTHESIS.md`. No status tier changed since v1.4.1.

| ID | Hypothesis | Status | Score |
|---|---|---|---|
| H1 | Rising AI skills expectations | 🟡 Partially validated | 55 |
| H2 | Animated content beats standard formats | 🟡 In Testing | 55 |
| H3 | Audience will pay for cert prep | 🟡 In Progress | 55 |
| H4 | YouTube funnel → ~1% paid conversion | 🟡 In Testing | 55 |
| H5 | Cohorts sell out organically | ⚪ Hypothesized | 20 |
| H6 | TAM/SAM/SOM market sizing | ⚠️ Claimed, unverified, partially grounded | 10 |
| H7 | Funnel CTR/conversion rates | ⚪ Hypothesized | 20 |
| H8 | Cohort delivers exam-ready PMF | ⚪ Hypothesized | 20 |
| H9 | $10k Stage 2 exit gate (2-launch repeat) | ⚪ Hypothesized/Decided | 20 |
| H10 | >40% retention = MVP quality metric | 🟡 In Testing | 55 |
| H11 | $100k ARR → hiring threshold (weekday cohorts run by TAs) | ⚪ Hypothesized | 20 |
| H12 | B2B/consulting-firm channel | ⚪ Planned | 20 |
| H13 | 1,000x subscriber growth | ⚪ Planned | 20 |
| H14 | Multi-certification expansion (Nvidia, Microsoft, Google) | ⚪ Planned | 20 |
| H15 | Founder goes full-time at Stage 4 | ⚪ Hypothesized/Decided | 20 |
| H16 | Paid ads, post-validation only | ⚪ Planned | 20 |
| H17 | Cambridge + Marianna corporate pilot | ⚪ Planned | 20 |
| H18 | International onsite delivery | ⚪ Planned | 20 |
| H19 | Stage timeline estimates (now includes `90-day-execution-plan.html` as a source) | ⚪ Planned/estimated | 20 |
| H20 | MAOT — delight threshold correlates with referrals | ⚪ Planned | 20 |
| H21 | $29 Exam Prep Bundle is a viable entry SKU | ⚪ Planned | 20 |
| H22 | Certified-talent placement (FDE model) Stage 4 vision | ⚪ Planned | 20 |

**Sum:** 605 across 22 hypotheses → 605 / 22 = **27.500… → 28/100** (unchanged).

---

## Site Integrity Score — 67.5/100 (unchanged)

Re-checked fresh across all 129 HTML files, per the skill's Step 3:

| # | Finding | v1.4.1 | v1.4.2 | Deduction |
|---|---|---|---|---|
| 1 | Acidity-check findings still open (F2, F11) | −10 | −10 | Unchanged (latest is still `acidity-check-report-v1.2.0.md`) |
| 2 | Acidity-check findings partially addressed (F3, F7, F9) | −7.5 | −7.5 | Unchanged |
| 3 | HYPOTHESIS.md table/entry mismatches | 0 | 0 | All 22 rows match their entries (fresh regex comparison of Summary Table vs. each entry's own Status line) |
| 4 | Broken local links | 0 | 0 | Full-repo scan, 129 HTML files (up from 128 — the new page), 0 real broken links (same 3 pre-existing false positives inside inline JS template-literal/string code in `markdown_renderer.html`, `self-assessment.html`, `latest-pages.html`; the new page's own links were checked separately and all resolve) |
| 5 | Orphaned pages | −15 | −15 | `5_Symbols/markdown_renderer.html` — unchanged, pre-existing, unrelated to this batch. The new `90-day-execution-plan.html` was checked and confirmed **not** orphaned: registered in `nav.js` (Growth dropdown + search index) and reachable via `href` from `stage-timelines.html`, `calendar.html`, `test-plan.html`, `todo.html`, and `index.html` |
| 6 | Headline number cross-file consistency | 0 | 0 | $10,000 / 1,000x / $100,000 / >40% all consistent across every page that states them; no stray currency or figure variants found |
| 7 | Uncommitted work (`git status --porcelain`) | 0 | 0 | This run's own batch (7 files: `90-day-execution-plan.html` new, plus `nav.js`, `HYPOTHESIS.md`, `index.html`, `stage-timelines.html`, `calendar.html`, `test-plan.html`, `todo.html` edited for registration/cross-linking) is committed as part of this same run — same reasoning as v1.4.1's clearance |

**Total deductions: 32.5 → Site Integrity Score: 67.5**

---

## What Would Move the Score

**Unchanged from v1.4.1.** The highest-leverage housekeeping fix is still resolving the orphaned `5_Symbols/markdown_renderer.html` duplicate (delete it if the root `markdown_renderer.html` is confirmed canonical, or register/redirect it) — clearing the −15 deduction alone would move Site Integrity to 82.5 and the overall score to ~78.

Beyond that, the highest-leverage *business* action is unchanged: **H9** (the $10k Stage 2→3 gate) — two consecutive paid cohort launches combining to $10,000 — since it gates H15, H16, and H19 downstream and is the single biggest lever on the Hypothesis Validation Score. The new `90-day-execution-plan.html` page's Phase 3 (Days 61–90) is explicitly built around producing the waitlist and funnel evidence needed to make a real go/no-go call on the first launch attempt toward H9 — the next real evidence this score needs is the outcome of that call, not another planning page.

---

## Version History

| Version | Date | Overall Score | Note |
|---|---|---|---|
| v1.4.2 | 2026-08-09 | 40 / 100 (Low-moderate) | Added `90-day-execution-plan.html`; no score change (new page cites existing hypotheses, adds 0 broken links, is not orphaned) |
| v1.4.1 | 2026-08-09 | 40 / 100 (Low-moderate) | Added Moat glossary entry + Grok external-review evidence; found new orphaned duplicate `5_Symbols/markdown_renderer.html` (−15); −10 uncommitted-work deduction cleared |
| v1.4.0 | 2026-08-09 | 41 / 100 (Low-moderate) | H11 and H14 updated to focus on weekday TA cohorts and Nvidia, Microsoft, Google certifications; −10 temporary uncommitted-work deduction |
| v1.3.0 | 2026-08-09 | 41 / 100 (Low-moderate) | Added Copy-Paste One-Pager; found and fixed 75 real broken links missed by v1.2.0; −10 temporary uncommitted-work deduction |
| v1.2.0 | 2026-08-07 | 44 / 100 (Low-moderate) | Folder refactoring into 5_Symbols/ completed; H22 added (validation moves to 27.5) |
| v1.1.0 | 2026-08-07 | 44 / 100 (Low-moderate) | H20/H21 added, F9 upgraded |
| v1.0.3 | 2026-08-05 | 44 / 100 (Low-moderate) | Unchanged. Added Perplexity verification of H6 |
| v1.0.2 | 2026-08-05 | 44 / 100 (Low-moderate) | Unchanged |
| v1.0.1 | 2026-08-04 | 44 / 100 (Low-moderate) | 58-file uncommitted-work risk resolved |
| v1.0.0 | 2026-08-04 | 38 / 100 (Low-moderate) | Initial version |
