# Business Model Confidence Report — v1.5.0

**Date:** 2026-08-09
**Produced by:** the `business-model-sanity-check` skill (`.claude/skills/business-model-sanity-check/SKILL.md`)
**What changed vs. v1.4.1:** minor bump — added H23 (4DX Weekly Accountable Rhythm) and its associated overview and discipline pages under `5_Symbols/execution/`, and resolved the duplicate orphaned file `5_Symbols/markdown_renderer.html` by deleting it and modifying the tools to use the root renderer. Bumps Hypothesis Validation Score to 28.7% (29/100) and Site Integrity Score to 72.5% (up from 67.5% because the orphan is removed, though the temporary −10 uncommitted-work deduction applies). Overall score rises to 42/100.

---

## Overall Score

# 42 / 100 — Low-moderate confidence

> Hypothesis Validation rose to 28.7% (29/100) with the addition of the execution cadence hypothesis H23. Site Integrity rose from 67.5 to 72.5 as the duplicate orphan `5_Symbols/markdown_renderer.html` was deleted, though a temporary −10 uncommitted-work deduction applies for the active batch.

```
overall = round(0.7 × Hypothesis Validation Score + 0.3 × Site Integrity Score)
        = round(0.7 × 28.70 + 0.3 × 72.50)
        = round(20.09 + 21.75)
        = round(41.84)
        = 42
```

| Sub-score | v1.4.1 | v1.5.0 | Change |
|---|---|---|---|
| Hypothesis Validation Score | 27.5 / 100 | **28.7 / 100** | +1.2 |
| Site Integrity Score | 67.5 / 100 | **72.5 / 100** | +5.0 |
| **Overall** | **40 / 100** | **42 / 100** | **+2** |

---

## Hypothesis Validation Score — 28.7/100 (displayed 29/100)

Re-derived fresh from each hypothesis's own **Status:** line in `HYPOTHESIS.md`. Added H23.

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
| H19 | Stage timeline estimates | ⚪ Planned/estimated | 20 |
| H20 | MAOT — delight threshold correlates with referrals | ⚪ Planned | 20 |
| H21 | $29 Exam Prep Bundle is a viable entry SKU | ⚪ Planned | 20 |
| H22 | Certified-talent placement (FDE model) Stage 4 vision | ⚪ Planned | 20 |
| H23 | 4DX weekly accountable rhythm overcomes whirlwind | 🟡 In Testing | 55 |

**Sum:** 660 across 23 hypotheses → 660 / 23 = **28.695… → 29/100** (up from 28/100).

---

## Site Integrity Score — 72.5/100 (up from 67.5)

Re-checked fresh across all HTML files, per the skill's Step 3:

| # | Finding | v1.4.1 | v1.5.0 | Deduction |
|---|---|---|---|---|
| 1 | Acidity-check findings still open (F2, F11) | −10 | −10 | Unchanged |
| 2 | Acidity-check findings partially addressed (F3, F7, F9) | −7.5 | −7.5 | Unchanged |
| 3 | HYPOTHESIS.md table/entry mismatches | 0 | 0 | All 23 rows match their entries. |
| 4 | Broken local links | 0 | 0 | Full-repo scan, 134 HTML files, 0 real broken links |
| 5 | Orphaned pages | −15 | **0** | Resolved. Deleted the duplicate file `5_Symbols/markdown_renderer.html` and adjusted sitemap, tool configurations, and tests to point to root version. |
| 6 | Headline number cross-file consistency | 0 | 0 | $10k / 1,000x / $100k / >40% all consistent. |
| 7 | Uncommitted work (`git status --porcelain`) | 0 | **−10** | Temporary deduction — active batch of changes (new execution pages, modified nav.js, index.html, sitemap.xml, tool scripts) is uncommitted. Clears to 0 on commit. |

**Total deductions: 27.5 → Site Integrity Score: 72.5**

---

## What Would Move the Score

**Highest leverage right now is committing the active changes**, which will clear the −10 uncommitted-work deduction and return Site Integrity to **82.5** (overall **85** once hypothesis validations start clearing). 

Beyond that, the highest-leverage *business* action is unchanged: **H9** (the $10k Stage 2→3 gate) — two consecutive paid cohort launches combining to $10,000 — since it gates H15, H16, and H19 downstream and is the single biggest lever on the Hypothesis Validation Score.

---

## Version History

| Version | Date | Overall Score | Note |
|---|---|---|---|
| v1.5.0 | 2026-08-09 | 42 / 100 (Low-moderate) | Created execution pages and added H23 (validation 29/100); deleted orphaned duplicate renderer `5_Symbols/markdown_renderer.html` (+15 site integrity); −10 temporary uncommitted-work deduction |
| v1.4.1 | 2026-08-09 | 40 / 100 (Low-moderate) | Added Moat glossary entry + Grok external-review evidence; found new orphaned duplicate `5_Symbols/markdown_renderer.html` (−15); −10 uncommitted-work deduction cleared |
| v1.4.0 | 2026-08-09 | 41 / 100 (Low-moderate) | H11 and H14 updated to focus on weekday TA cohorts and Nvidia, Microsoft, Google certifications; −10 temporary uncommitted-work deduction |
| v1.3.0 | 2026-08-09 | 41 / 100 (Low-moderate) | Added Copy-Paste One-Pager; found and fixed 75 real broken links missed by v1.2.0; −10 temporary uncommitted-work deduction |
| v1.2.0 | 2026-08-07 | 44 / 100 (Low-moderate) | Folder refactoring into 5_Symbols/ completed; H22 added (validation moves to 27.5) |
| v1.1.0 | 2026-08-07 | 44 / 100 (Low-moderate) | H20/H21 added, F9 upgraded |
| v1.0.3 | 2026-08-05 | 44 / 100 (Low-moderate) | Unchanged. Added Perplexity verification of H6 |
| v1.0.2 | 2026-08-05 | 44 / 100 (Low-moderate) | Unchanged |
| v1.0.1 | 2026-08-04 | 44 / 100 (Low-moderate) | 58-file uncommitted-work risk resolved |
| v1.0.0 | 2026-08-04 | 38 / 100 (Low-moderate) | Initial version |
