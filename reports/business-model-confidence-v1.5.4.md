# Business Model Confidence Report — v1.5.4

**Date:** 2026-08-10
**Produced by:** the `business-model-sanity-check` skill (`.claude/skills/business-model-sanity-check/SKILL.md`)
**What changed vs. v1.5.3:** patch bump — re-run check after committing the working tree. This clears the temporary −10 uncommitted-work deduction, raising the Site Integrity Score to 77.5 and the Overall Score to 43/100.

---

## Overall Score

# 43 / 100 — Low-moderate confidence

> Hypothesis Validation holds at 28.7% (29/100). Site Integrity rises to 77.5% as all pending work has been successfully committed to repository history (uncommitted work deduction is now 0).

```
overall = round(0.7 × Hypothesis Validation Score + 0.3 × Site Integrity Score)
        = round(0.7 × 28.70 + 0.3 × 77.50)
        = round(20.09 + 23.25)
        = round(43.34)
        = 43
```

| Sub-score | v1.5.3 | v1.5.4 | Change |
|---|---|---|---|
| Hypothesis Validation Score | 28.7 / 100 | **28.7 / 100** | 0.0 |
| Site Integrity Score | 67.5 / 100 | **77.5 / 100** | +10.0 |
| **Overall** | **40 / 100** | **43 / 100** | **+3** |

---

## Hypothesis Validation Score — 28.7/100 (displayed 29/100)

Re-derived fresh from each hypothesis's own **Status:** line in `HYPOTHESIS.md`.

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
| H18 | International onsite B2B | ⚪ Planned | 20 |
| H19 | Stage timeline estimates | ⚪ Planned/estimated | 20 |
| H20 | MAOT — delight threshold correlates with referrals | ⚪ Planned | 20 |
| H21 | $29 Exam Prep Bundle is a viable entry SKU | ⚪ Planned | 20 |
| H22 | Certified-talent placement (FDE model) Stage 4 vision | ⚪ Planned | 20 |
| H23 | 4DX weekly accountable rhythm overcomes whirlwind | 🟡 In Testing | 55 |

**Sum:** 660 across 23 hypotheses → 660 / 23 = **28.695… → 29/100** (unchanged).

---

## Site Integrity Score — 77.5/100 (raised)

Re-checked fresh across all HTML files, per the skill's Step 3:

| # | Finding | v1.5.3 | v1.5.4 | Deduction | Rationale |
|---|---|---|---|---|---|
| 1 | Acidity-check findings still open (F2, F11, F12) | −15 | −15 | −15 | F12 correctly factored at −5 (bringing total to 3 findings) |
| 2 | Acidity-check findings partially addressed (F3, F7, F9) | −7.5 | −7.5 | −7.5 | Unchanged (3 findings) |
| 3 | HYPOTHESIS.md table/entry mismatches | 0 | 0 | 0 | All 23 rows match their entries. |
| 4 | Broken local links | 0 | 0 | 0 | Full-repo scan, 0 real broken links |
| 5 | Orphaned pages | 0 | 0 | 0 | Resolved. sitemaps and tools are clean. |
| 6 | Headline number cross-file consistency | 0 | 0 | 0 | Consistent. |
| 7 | Uncommitted work (`git status --porcelain`) | −10 | 0 | 0 | Cleared to 0 as all files are successfully committed to repository |

**Total deductions: 22.5 → Site Integrity Score: 77.5**

---

## What Would Move the Score

The highest-leverage *business* action is unchanged: **H9** (the $10k Stage 2→3 gate) — two consecutive paid cohort launches combining to $10,000 — since it gates H15, H16, and H19 downstream and is the single biggest lever on the Hypothesis Validation Score.

---

## Version History

| Version | Date | Overall Score | Note |
|---|---|---|---|
| v1.5.4 | 2026-08-10 | 43 / 100 (Low-moderate) | Cleared −10 temporary uncommitted-work deduction after staging and committing work |
| v1.5.3 | 2026-08-10 | 40 / 100 (Low-moderate) | Incorporated Sude's qualitative customer discovery interview insights (dated 2026-08-10) into H5, H8, H20, and H21; adjusted Site Integrity acidity check deduction to include F12 |
| v1.5.2 | 2026-08-10 | 42 / 100 (Low-moderate) | Incorporated qualitative customer discovery interview findings from 2026-08-10 into H1, H3, H5, H8, H14, H21; overall score holds flat at 42/100 |
| v1.5.1 | 2026-08-10 | 42 / 100 (Low-moderate) | Added Brian's qualitative cohort feedback as H5 (Premise 5/6) and H20 evidence; overall score holds flat at 42/100 |
| v1.5.0 | 2026-08-09 | 42 / 100 (Low-moderate) | Created execution pages and added H23 (validation 29/100); deleted orphaned duplicate renderer `5_Symbols/markdown_renderer.html` (+15 site integrity); −10 temporary uncommitted-work deduction |
| v1.4.3 | 2026-08-09 | 40 / 100 (Low-moderate) | Day-by-Day Calendar appended; Nov 7 → Nov 6 off-by-one corrected; score holds flat |
| v1.4.2 | 2026-08-09 | 40 / 100 (Low-moderate) | 90-Day Execution Plan added; score holds flat |
| v1.4.1 | 2026-08-09 | 40 / 100 (Low-moderate) | Moat glossary entry + Grok external-review evidence added; uncommitted-work deduction cleared but replaced by new orphaned-page finding |
| v1.4.0 | 2026-08-09 | 41 / 100 (Low-moderate) | H11 and H14 updated with weekday TA cohorts and Nvidia, Microsoft, Google certifications; temporary uncommitted-work deduction |
| v1.3.0 | 2026-08-09 | 41 / 100 (Low-moderate) | One-Pager added; 75 broken links found & fixed; temporary uncommitted-work deduction |
| v1.2.0 | 2026-08-07 | 44 / 100 (Low-moderate) | Folder refactoring into 5_Symbols/ completed; H22 added (validation moves to 27.5) |
| v1.1.0 | 2026-08-07 | 44 / 100 (Low-moderate) | H20/H21 added (validation ↓), F9 upgraded (integrity ↑) — net unchanged |
| v1.0.3 | 2026-08-05 | 44 / 100 (Low-moderate) | Unchanged — added independent Perplexity verification of H6, no tier change |
| v1.0.2 | 2026-08-05 | 44 / 100 (Low-moderate) | Unchanged — 19 hypotheses / 100 pages re-scanned, no tier or integrity change |
| v1.0.1 | 2026-08-04 | 44 / 100 (Low-moderate) | 58-file uncommitted-work risk resolved |
| v1.0.0 | 2026-08-04 | 38 / 100 (Low-moderate) | Initial version |
