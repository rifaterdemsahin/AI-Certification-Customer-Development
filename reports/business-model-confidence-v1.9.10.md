# Business Model Confidence Report — v1.9.10

**Date:** 2026-08-13  
**Produced by:** the `business-model-sanity-check` skill (`.claude/skills/business-model-sanity-check/SKILL.md`)  
**What changed vs. v1.9.9:** patch bump — added `5_Symbols/product/skool-workshop-upload.html` and `reports/skool-workshop-upload-sanity-check-v1.0.md` (upload the Sunday 2-hour workshop to Skool Classroom as the $10/mo replay archive; do not recut; do not list on public YouTube; do not score against H10). No new hypothesis. No status-tier change.

---

## Overall Score

# 41 / 100 — Low-moderate confidence

> Hypothesis Validation holds at **30.0/100** (27 hypotheses). Site Integrity holds at **67.5/100** (0 broken links; 0 orphans; −10 uncommitted-work for this distinct workshop-upload batch; acidity findings carried forward). Overall remains **41**. A replay-upload operating rule does not raise the score; paid enrollments (H5/H9) and catalog-wide guide retention (H10, YouTube only) still would.

```
overall = round(0.7 × 30.00 + 0.3 × 67.50) = round(41.25) = 41
```

| Sub-score | v1.9.9 | v1.9.10 (this run) |
|---|---|---|
| Hypothesis Validation Score | 30.0 / 100 | **30.0 / 100** |
| Site Integrity Score | 67.5 / 100 | **67.5 / 100** |
| **Overall** | **41 / 100** | **41 / 100** |

A low-moderate score at Customer Discovery / early Validation is expected. It means most bets are still open, not that the business is failing.

---

## Hypothesis Validation Score — 30/100

Re-derived from each hypothesis's own **Status:** line. All 27 keep the same emoji as v1.9.9. Sum 810 / 27 = **30.00**. Source-line additions on H2, H5, H8, H10 point at `skool-workshop-upload.html` — citation and a scope fence on H10 (replays out of the >40% catalog), not new evidence.

| ID | Hypothesis | Status | Score |
|---|---|---|---|
| H1 | Rising AI skills expectations | 🟡 | 55 |
| H2 | Animated content beats standard formats | 🟡 | 55 |
| H3 | Audience will pay for cert prep | 🟡 | 55 |
| H4 | YouTube funnel → 1% paid membership | 🟡 | 55 |
| H5 | Cohorts sell out organically | ⚪ | 20 |
| H6 | TAM/SAM/SOM market sizing | ⚠️ | 10 |
| H7 | Funnel CTR/conversion rates | ⚪ | 20 |
| H8 | Cohort delivers exam-ready PMF | ⚪ | 20 |
| H9 | $10k Stage 2 exit gate (2-launch) | ⚪ | 20 |
| H10 | >40% retention = MVP metric | 🟡 | 55 |
| H11 | $100k ARR → hiring | ⚪ | 20 |
| H12 | B2B consulting/gov-contractor channel | ⚪ | 20 |
| H13 | 1,000x subscriber growth | ⚪ | 20 |
| H14 | Multi-certification expansion | ⚪ | 20 |
| H15 | Founder full-time at Stage 4 | ⚪ | 20 |
| H16 | Paid ads, CAC/LTV-gated | ⚪ | 20 |
| H17 | Cambridge + Marianna onsite pilot | ⚪ | 20 |
| H18 | International onsite delivery | ⚪ | 20 |
| H19 | Stage timeline estimates | ⚪ | 20 |
| H20 | MAOT referral threshold | ⚪ | 20 |
| H21 | $29 Exam Prep Bundle | ⚪ | 20 |
| H22 | Certified-talent placement (FDE) | ⚪ | 20 |
| H23 | 4DX weekly accountable rhythm | 🟡 | 55 |
| H24 | Emotional pain drivers | 🟡 | 55 |
| H25 | Cert value bifurcation | ⚪ | 20 |
| H27 | Practice exam & question bank gap | 🟡 | 55 |
| H28 | YouTube engagement rate benchmark | ⚪ | 20 |

---

## Site Integrity Score — 67.5/100

| # | Finding | Deduction | Notes |
|---|---|---|---|
| 1 | Acidity still open (F2, F11, F12) | −15 | Unchanged from v1.9.9 |
| 2 | Acidity partial (F3, F7, F9) | −7.5 | Unchanged |
| 3 | HYPOTHESIS.md table/entry mismatches | 0 | All 27 Summary Table rows match their Status-line leading emoji |
| 4 | Broken local links | 0 | Fresh scan, scripts stripped; `skool-workshop-upload.html` links all resolve |
| 5 | Orphaned pages | 0 | New page in BMC nav + searchIndex + hub + 10+ sibling inbound links |
| 6 | Headline number consistency | 0 | $10,000 / 1,000x / $100,000 / >40% unchanged |
| 7 | Uncommitted work (`git status --porcelain`) | −10 | Distinct new batch: `skool-workshop-upload.html` + hero + report, plus sibling cross-links. Clears once committed. |

**Total deductions: 32.5 → 67.5**

---

## What Would Move the Score

Unchanged from v1.9.9:

1. **Highest-leverage business action remains H9** — two consecutive paid cohort launches combining to $10,000.
2. **H5** still needs paid enrollments. Uploading the 2-hour replay makes Premise 3 (the $10/mo asset) operational; it is not an enrollment signal.
3. **H10** still needs catalog-wide YouTube *guide* retention. Do not score Sunday replays against it.
4. **F12** — confirm individual, non-Partner exam access.
5. **Commit this batch** — Site Integrity → 77.5, overall → **44**.

This page's own next measurement is whether $10/mo members actually open the replay (watch starts, not % viewed) after two Sundays of uploads.

---

## Version History

| Version | Date | Overall Score | Note |
|---|---|---|---|
| **v1.9.10** | 2026-08-13 | **41 / 100** | 2-hour Skool workshop-upload sanity check; score holds flat |
| v1.9.9 | 2026-08-13 | 41 / 100 | Content-format placement page; score holds flat |
| v1.9.8 | 2026-08-13 | 41 / 100 | VC constructive-feedback page; score holds flat |
| v1.9.7 | 2026-08-13 | 41 / 100 | R.A.I.S.E. starting-point page; score holds flat |
