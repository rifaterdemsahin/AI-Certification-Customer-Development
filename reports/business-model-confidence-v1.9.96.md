# Business Model Confidence Report — v1.9.96

**Date:** 2026-09-09
**Produced by:** the `business-model-sanity-check` skill
**What changed vs. v1.9.95:**
1. Ingested **Charles**'s 4th sponsored certification exam customer story (`3_Simulation/Interviews/interview_charles_2026-09-09.md` & `reports/customer-discovery-charles-interview-v1.3.0.md`) — Capgemini's corporate sponsorship funding a 4th, 135-minute proctored professional-level architecture/AI-implementation exam back-to-back, plus a same-day WhatsApp follow-up naming Capgemini's Udemy partnership as an additional sponsored practice-paper resource previously forgotten.
2. Annotated **H1**, **H8**, **H12**, **H25**, **H27**, **H30** with qualitative evidence (no status-emoji changes). Updated `5_Symbols/product/exam-performance-evidence.html` (new section), `5_Symbols/strategy/competitive-analysis.html` (Udemy row confirmed live), `5_Symbols/cd/archived-interview-transcripts.html`, `5_Symbols/cd/cd-interview-recording.html`, and `nav.js`. Bumped `HYPOTHESIS.md` to `v1.326.0`.
3. Hypothesis Validation holds **35.6 / 100** (33 hypotheses, 0 status emoji changes).
4. Site Integrity **80.0 → 70.0 / 100** — this batch (10 files touched, 2 new) is uncommitted at time of writing; −10 uncommitted-work deduction applies once per the scoring rule.
5. Whole-site HTML href scan: **0 real broken links** introduced by this batch. **0 orphaned pages** (no new `.html` files created — all new content is `.md` transcripts/reports reached via `markdown_renderer.html` links already wired into `nav.js` and the updated hub pages).

> Previous version: [v1.9.95](business-model-confidence-v1.9.95.md)

## Overall Score

# 46 / 100 — Low-moderate confidence (band 30–54)

```
overall = round(0.7 × 35.6 + 0.3 × 70.0) = round(24.92 + 21.00) = round(45.92) = 46
```

| Sub-score | v1.9.95 | v1.9.96 (this run) |
|---|---|---|
| Hypothesis Validation Score | 35.6 / 100 | **35.6 / 100** |
| Site Integrity Score | 80.0 / 100 | **70.0 / 100** |
| **Overall** | **49 / 100** | **46 / 100** |

The dip from 49 to 46 is entirely the uncommitted-work deduction on this batch, not a business-signal regression — the qualitative evidence itself (a 4th sponsored exam, a repeat-purchase employer pattern, and a named competitor benefit) strengthens H12 and H27 without yet crossing a status-tier threshold, since it is still not a captured paid conversion for this business.

### What Moves the Score Next
1. **Commit and push this batch** — the single largest lever right now: restores Site Integrity to 80.0 and the overall score to 49.
2. Paid conversion / closed B2B workshop or paid cohort enrollments (H12 / H5 / H9) — Charles's 4th sponsored exam is still evidence the mechanic exists, not evidence this business captured any of the spend.
3. Seat a named candidate through a partner (F12 remaining).
4. Resolve the acidity findings still open/partially addressed (see Site Integrity breakdown below).

## Hypothesis Validation — 35.6 / 100

15 × 55 + 17 × 20 + 1 × 10 = **1175 / 33 = 35.6**. 0 table/entry mismatches. Charles's follow-up is logged as qualitative evidence inside H1, H8, H12, H25, H27, H30 entries — all already 🟡/⚪ — maintaining strict rubric integrity (no score inflation from qualitative-only evidence).

## Site Integrity — 70.0 / 100

- Acidity F2/F11 STILL OPEN: −10.
- Acidity F3/F7/F9/F12 PARTIALLY ADDRESSED: −10.
- Uncommitted work (this batch — 8 modified + 2 new files, all part of the same Charles ingest, per `git status --porcelain`): −10.
- Broken links / orphans / table mismatches / numeric contradictions: **0**.

100 − 10 − 10 − 10 = **70.0**.

## Highest-leverage next action

Commit and push this batch, then continue executing the 14-day promotional runway for the next bi-weekly event using the Event Management & Lead Gen CRM pipeline (`5_Symbols/growth/event-management-leadgen-crm.html`) to drive attendees toward paid VIP Delivery Pilot enrollments (H5 / H9 / H12).
