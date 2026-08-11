# Business Model Confidence Report — v1.6.0

**Date:** 2026-08-11
**Produced by:** the `business-model-sanity-check` skill (`.claude/skills/business-model-sanity-check/SKILL.md`)
**What changed vs. v1.5.7:** Added dedicated Customer Pain Points strategy page (`pain-points.html`) and H24 (Emotional Pain Drivers) detailed card content to trace greed, fear, and insecurity drivers. Bumps version tracker to v1.6.0. Overall score rises to 41 in uncommitted state (Validation rises to 29.8% [30/100] with the addition of H24, Site Integrity holds at 67.5% due to −10 uncommitted-work deduction). Will rise to 44 once committed.

---

## Overall Score

# 41 / 100 — Low-moderate confidence

> Hypothesis Validation rises to 29.8% (30/100). Site Integrity holds at 67.5% in the uncommitted state (uncommitted work deduction is −10). Will rise to 44 once committed.

```
overall = round(0.7 × Hypothesis Validation Score + 0.3 × Site Integrity Score)
        = round(0.7 × 29.79 + 0.3 × 67.50)
        = round(20.85 + 20.25)
        = round(41.1)
        = 41
```

| Sub-score | v1.5.7 | v1.6.0 | Change |
|---|---|---|---|
| Hypothesis Validation Score | 28.7 / 100 | **29.8 / 100** | +1.1 |
| Site Integrity Score | 67.5 / 100 | **67.5 / 100** | 0.0 |
| **Overall** | **40 / 100** | **41 / 100** | **+1** |

---

## Hypothesis Validation Score — 29.8/100 (displayed 30/100)

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
| H24 | Emotional Pain Drivers (fear, greed, insecurity) | 🟡 In Testing | 55 |

**Sum:** 715 across 24 hypotheses → 715 / 24 = **29.791… → 30/100** (up from 29/100).

---

## Site Integrity Score — 67.5/100 (unchanged)

Re-checked fresh across all HTML files, per the skill's Step 3:

| # | Finding | v1.5.7 | v1.6.0 | Deduction | Rationale |
|---|---|---|---|---|---|
| 1 | Acidity-check findings still open (F2, F11, F12) | −15 | −15 | −15 | Unchanged (3 findings) |
| 2 | Acidity-check findings partially addressed (F3, F7, F9) | −7.5 | −7.5 | −7.5 | Unchanged (3 findings) |
| 3 | HYPOTHESIS.md table/entry mismatches | 0 | 0 | 0 | All 24 rows match their entries. |
| 4 | Broken local links | 0 | 0 | 0 | Full-repo scan, 0 real broken links |
| 5 | Orphaned pages | 0 | 0 | 0 | Resolved. Pain points page registered in nav dropdown and search index. |
| 6 | Headline number cross-file consistency | 0 | 0 | 0 | Consistent. |
| 7 | Uncommitted work (`git status --porcelain`) | −10 | −10 | −10 | Temporary deduction due to uncommitted working tree. |

**Total deductions: 32.5 → Site Integrity Score: 67.5**

---

## What Would Move the Score

The highest-leverage *business* action remains: **H9** (the $10k Stage 2→3 gate) — two consecutive paid cohort launches combining to $10,000 — since it gates H15, H16, and H19 downstream and is the single biggest lever on the Hypothesis Validation Score.

---

## Version History

| Version | Date | Overall Score | Note |
|---|---|---|---|
| v1.6.0 | 2026-08-11 | 41 / 100 (Low-moderate) | Added dedicated Customer Pain Points strategy page (`pain-points.html`) and H24 (Emotional Pain Drivers) detailed card content; Validation rises to 29.8% (30/100); −10 temporary uncommitted-work deduction |
| v1.5.7 | 2026-08-11 | 40 / 100 (Low-moderate) | Added Tuncer's qualitative interview data, published behavior report v1.3.0, and updated all references/details across the project; −10 temporary uncommitted-work deduction |
| v1.5.6 | 2026-08-11 | 40 / 100 (Low-moderate) | Created `skills-gap.html`, added Delivery Pilots persona, updated stage focuses, and added Skool/badge timelines and live sample widget; −10 temporary uncommitted-work deduction |
| v1.5.5 | 2026-08-11 | 43 / 100 (Low-moderate) | Updated `bmc-channels.html` to document volunteer & free customer discovery strategy and add stage tooling comparison (no-code vs enterprise) |
| v1.5.4 | 2026-08-10 | 43 / 100 (Low-moderate) | Cleared −10 temporary uncommitted-work deduction after staging and committing work |
| v1.5.3 | 2026-08-10 | 40 / 100 (Low-moderate) | Incorporated Sude's qualitative customer discovery interview insights (dated 2026-08-10) into H5, H8, H20, and H21; adjusted Site Integrity acidity check deduction to include F12 |
| v1.5.2 | 2026-08-10 | 42 / 100 (Low-moderate) | Incorporated qualitative customer discovery interview findings from 2026-08-10 into H1, H3, H5, H8, H14, H21; overall score holds flat at 42/100 |
| v1.5.1 | 2026-08-10 | 42 / 100 (Low-moderate) | Added Brian's qualitative feedback as H5 (Premise 5/6) and H20 evidence; overall score holds flat at 42/100 |
| v1.5.0 | 2026-08-09 | 42 / 100 (Low-moderate) | Created execution pages and added H23 (validation 29/100); deleted orphaned duplicate renderer `5_Symbols/markdown_renderer.html` (+15 site integrity); −10 temporary uncommitted-work deduction |
