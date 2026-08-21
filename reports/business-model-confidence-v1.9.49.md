# Business Model Confidence Report — v1.9.49

**Date:** 2026-08-21  
**Produced by:** the `business-model-sanity-check` skill  
**What changed vs. v1.9.48:** Ingested qualitative Customer Discovery interviews from **Anna (UWISE Cambridge Founder)** on the 5-10-5 pacing methodology (5m demo → 10m execute → 5m Q&A) and 3-task / 40–60 min session duration caps, and **Marianna (Maria Testing Lead Compliance)** on Sunday AI Brain collaborative workshops and flipped classroom pre-session micro-videos. Full commit of all active customer discovery reports and assets (`9619be6`), resolving uncommitted-work deduction (−10 → 0) and restoring Site Integrity from 70.0 to 80.0. Bumped `HYPOTHESIS.md` to **v1.183.0**.

---

## Overall Score

# 50 / 100 — Moderate confidence

```
overall = round(0.7 × 37.1 + 0.3 × 80.0) = round(25.97 + 24.00) = 50
```

| Sub-score | v1.9.48 | v1.9.49 (this run) |
|---|---|---|
| Hypothesis Validation Score | 37.1 / 100 | **37.1 / 100** |
| Site Integrity Score | 70.0 / 100 | **80.0 / 100** |
| **Overall** | **47 / 100** | **50 / 100** |

Overall score rises from **47 to 50 / 100** (+3 pts) as the uncommitted working tree was committed and pushed to `main`, eliminating the −10 integrity deduction.

---

## Hypothesis Validation Score — 37.1/100

29 tracked hypotheses. Scored from each hypothesis's own Status line in `HYPOTHESIS.md`; H9 and H15 scored 100 as founder-Decided.

| Group | Count | Score each | Subtotal |
|---|---|---|---|
| 🟡 In Testing / Partially Validated / In Progress (H1, H2, H3, H4, H5, H10, H23, H24, H27, H29, H30) | 11 | 55 | 605 |
| ⚪ Planned / Hypothesized (H7, H8, H11–H14, H16–H22, H25, H28) | 13 | 20 | 260 |
| ⚠️ Claimed, unverified (H6) | 1 | 10 | 10 |
| Decided (H9, H15) | 2 | 100 | 200 |
| **Total** | **29** | | **1075 → 37.1/100** |

H29, H8, H17, H2, H10 gained direct empirical Customer Discovery qualitative evidence from Anna and Marianna; leading status tiers hold steady.

---

## Site Integrity Score — 80.0/100

| # | Finding | Deduction | Notes |
|---|---|---|---|
| 1 | Acidity still open (F2, F11) | −10 | Unchanged |
| 2 | Acidity partial (F3, F7, F9, F12) | −10 | Unchanged |
| 3 | HYPOTHESIS.md table/entry mismatches | 0 | All 29 rows match |
| 4 | Broken local links | 0 | Fresh scan of 224 HTML files: 0 real broken `href`s |
| 5 | Orphaned pages | 0 | All newly added discovery reports and pages registered in `nav.js` |
| 6 | Headline number consistency | 0 | Unchanged ($10k gate, 1,000x sub growth, $100k ARR) |
| 7 | Uncommitted work | 0 | Clean working tree; committed & pushed to `origin/main` |

**Total deductions: 20 → 80.0**

---

## Concrete Evidence Needed to Advance Sub-Scores

| Score Component | Current | Ceiling | Concrete Evidence Needed to Move Up |
| :--- | :--- | :--- | :--- |
| **F12 remaining** | Partial | Resolved | Seat Cheuk (or another candidate) through a partner company voucher. |
| **F2 / F11 still open** | −10 | 0 | Grounding dataset behind H1, or demote wording; log 1 cohort cycle of $10/mo churn. |
| **H5 🟡 → ✅** | In Testing | Validated | Paid $10/mo or $250 cohort seat transactions logged. |
| **H21 ⚪ → 🟡** | Planned | In Testing | First Funfair token redemption or $29 sale recorded. |
| **H17 ⚪ → 🟡** | Planned | In Testing | First Cambridge / UWISE or corporate workshop session delivered. |

---

## What Would Move the Score

1. **Deploy 5-10-5 Pacing in Sunday Cohort** — executes Anna's feedback to raise student retention.
2. **Seat Cheuk through an Accredited Partner** — closes F12 (+3.3 Integrity pts).
3. **Launch $29 Entry SKU (H21)** — moves H21 from ⚪ (20) to 🟡 (55), adding +0.8 Validation pts.
4. **First 2 Paid Cohort Launches totaling $10k (H9)** — clears the Customer Validation stage exit gate.

Master playbook: `5_Symbols/dashboard/how-to-move-the-score.html`.
