# Business Model Confidence Report — v1.7.0

> **Superseded by [v1.7.1](business-model-confidence-v1.7.1.md).**

**Date:** 2026-08-11
**Produced by:** the `business-model-sanity-check` skill (`.claude/skills/business-model-sanity-check/SKILL.md`)
**What changed vs. v1.6.5:** Added H27 (Blueprint-mapped Practice Exam Gap) as a critical product risk and value blocker, and created the corresponding strategy detail page `5_Symbols/strategy/practice-exams-gap.html`. Overall score rises to **42 / 100** (Hypothesis Validation rises to 30.8% [31/100], Site Integrity holds at 67.5% due to −10 uncommitted-work deduction).

---

## Overall Score

# 42 / 100 — Low-moderate confidence

> Hypothesis Validation rises to 30.8% (31/100). Site Integrity holds at 67.5% in the uncommitted state (uncommitted work deduction is −10). Will rise to 45 once committed.

```
overall = round(0.7 × Hypothesis Validation Score + 0.3 × Site Integrity Score)
        = round(0.7 × 30.80 + 0.3 × 67.50)
        = round(21.56 + 20.25)
        = round(41.81)
        = 42
```

| Sub-score | v1.6.5 | v1.7.0 | Change |
|---|---|---|---|
| Hypothesis Validation Score | 29.8 / 100 | **30.8 / 100** | +1.0 |
| Site Integrity Score | 67.5 / 100 | **67.5 / 100** | 0.0 |
| **Overall** | **41 / 100** | **42 / 100** | **+1.0** |

---

## Hypothesis Validation Score — 30.8/100 (displayed 31/100)

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
| H27 | Practice exam & question bank gap is a critical value blocker | 🟡 In Testing | 55 |

**Sum:** 770 across 25 hypotheses → 770 / 25 = **30.80% → 31/100** (rounded).

---

## Site Integrity Score — 67.5/100 (unchanged)

Re-checked fresh across all HTML files, per the skill's Step 3:

| # | Finding | v1.6.5 | v1.7.0 | Deduction | Rationale |
|---|---|---|---|---|---|
| 1 | Acidity-check findings still open (F2, F11, F12) | −15 | −15 | −15 | Unchanged (3 findings) |
| 2 | Acidity-check findings partially addressed (F3, F7, F9) | −7.5 | −7.5 | −7.5 | Unchanged (3 findings) |
| 3 | HYPOTHESIS.md table/entry mismatches | 0 | 0 | 0 | All 25 rows match their entries. |
| 4 | Broken local links | 0 | 0 | 0 | Full-repo scan, 0 real broken links |
| 5 | Orphaned pages | 0 | 0 | 0 | Resolved. Practice Exams Gap page registered in nav dropdown and search index, and linked from risk-analysis.html. |
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
| v1.7.0 | 2026-08-11 | 42 / 100 (Low-moderate) | Created "Practice Exam & Question Bank Gap" page (`5_Symbols/strategy/practice-exams-gap.html`), added H27 (Blueprint-mapped Practice Exam Gap) as a critical product risk and value blocker, and registered it in the Strategy dropdown menu and search index; −10 temporary uncommitted-work deduction |
| v1.6.5 | 2026-08-11 | 41 / 100 (Low-moderate) | Created "Your Market Reality Check" page (`5_Symbols/strategy/market-reality-check.html`) detailing JTBD, unspoken insights, value chain, table stakes, and Vonos.ai visual integration; −10 temporary uncommitted-work deduction |
| v1.6.4 | 2026-08-11 | 41 / 100 (Low-moderate) | Created "Tell Us About Your Idea" page (`5_Symbols/product/idea.html`) and linked to it from Business Plan Summary; Validation and Site Integrity hold flat; −10 temporary uncommitted-work deduction |
| v1.6.3 | 2026-08-11 | 41 / 100 (Low-moderate) | Added Skool vs. YouTube comparison page (`skool-vs-youtube.html`) and linked to H4, H5, H7, H8; Validation and Site Integrity hold flat; −10 temporary uncommitted-work deduction |
| v1.6.2 | 2026-08-11 | 41 / 100 (Low-moderate) | Added Claude Partner Strategy page (`claude-partner-strategy.html`) detailing CPN Services Program (Select Tier) benefits and mapping them to Steve Blank's Customer Development stages, cross-linking to H12, H1, H6, and H17; Validation and Site Integrity hold flat; −10 temporary uncommitted-work deduction |
| v1.6.1 | 2026-08-11 | 41 / 100 (Low-moderate) | Added Skool LMS & Community Integration page (`skool-lms-integration.html`) and linked to H5, H8, H21; Validation and Site Integrity hold flat; −10 temporary uncommitted-work deduction |
| v1.6.0 | 2026-08-11 | 41 / 100 (Low-moderate) | Added dedicated Customer Pain Points strategy page (`pain-points.html`) and H24 (Emotional Pain Drivers) detailed card content; Validation rises to 29.8% (30/100); −10 temporary uncommitted-work deduction |
| v1.5.7 | 2026-08-11 | 40 / 100 (Low-moderate) | Added Tuncer's qualitative interview data, published behavior report v1.3.0, and updated all references across the project; −10 temporary uncommitted-work deduction |
| v1.5.6 | 2026-08-11 | 40 / 100 (Low-moderate) | Created `skills-gap.html`, added Delivery Pilots persona, updated stage focuses, and added Skool/badge timelines and live sample widget; −10 temporary uncommitted-work deduction |
| v1.5.5 | 2026-08-11 | 43 / 100 (Low-moderate) | Updated `bmc-channels.html` with volunteer discovery strategy and no-code vs enterprise tool comparison |
| v1.5.4 | 2026-08-11 | 43 / 100 (Low-moderate) | Added Brian's qualitative cohort feedback and updated H5, H20, and all references |
| v1.5.3 | 2026-08-11 | 43 / 100 (Low-moderate) | Created `reports/exam-prep-market-and-student-behavior-v1.3.0.md` with qualitative interview insights, and updated H1, H3, H5, H8, H14, H21 |
| v1.5.2 | 2026-08-11 | 40 / 100 (Low-moderate) | Registered `skills-gap.html` in `nav.js` Strategy dropdown and updated related pages |
| v1.5.1 | 2026-08-11 | 40 / 100 (Low-moderate) | Updated `5_Symbols/bmc/bmc-channels.html` and compared no-code/free vs paid enterprise tools |
| v1.5.0 | 2026-08-11 | 40 / 100 (Low-moderate) | Added `reports/exam-prep-market-and-student-behavior-v1.2.0.md` with Sude's interview insights, and updated H5, H8, H20, H21 |
| v1.0.3 | 2026-08-05 | 44 / 100 (Low-moderate) | Added Google Trends link and founder read to H1, plus WhatsApp cohort/referral signals |
