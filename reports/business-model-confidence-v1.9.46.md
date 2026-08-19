# Business Model Confidence Report — v1.9.46

**Date:** 2026-08-19  
**Produced by:** the `business-model-sanity-check` skill  
**What changed vs. v1.9.45:** Logged Cheuk (National Grid, first name only) WhatsApp discovery: walk-up Claude certification enrollment is blocked; only enterprise partners have access. Founder-confirmed mitigation: two partner companies in the system help and enroll people. F12 moves 🔴 STILL OPEN → 🟡 PARTIALLY ADDRESSED (`reports/acidity-check-report-v1.4.0.md`). Hypothesis status tiers unchanged. Bumped `HYPOTHESIS.md` to **v1.165.0**. This batch is committed as part of the same run.

---

## Overall Score

# 50 / 100 — Low-moderate confidence

```
overall = round(0.7 × 37.1 + 0.3 × 80.0) = round(25.97 + 24.00) = 50
```

| Sub-score | v1.9.45 | v1.9.46 (this run) |
|---|---|---|
| Hypothesis Validation Score | 37.1 / 100 | **37.1 / 100** |
| Site Integrity Score | 77.5 / 100 | **80.0 / 100** |
| **Overall** | **49 / 100** | **50 / 100** |

A low-moderate score in Customer Discovery / Validation is expected. 50 is the first time the number has crossed the previous 46/49 housekeeping peaks **because an acidity finding moved**, not because git was cleaned. Cheuk's failed self-enrollment is the evidence; the two-partner seating path is the mitigation. See `5_Symbols/dashboard/how-to-move-the-score.html`.

---

## Hypothesis Validation Score — 37.1/100

29 tracked hypotheses. Same rubric as v1.9.45; H9 and H15 scored 100 as founder-Decided.

| Group | Count | Score each | Subtotal |
|---|---|---|---|
| 🟡 In Testing / Partially Validated / In Progress (H1, H2, H3, H4, H5, H10, H23, H24, H27, H29, H30) | 11 | 55 | 605 |
| ⚪ Planned / Hypothesized (H7, H8, H11–H14, H16–H22, H25, H28) | 13 | 20 | 260 |
| ⚠️ Claimed, unverified (H6) | 1 | 10 | 10 |
| Decided (H9, H15) | 2 | 100 | 200 |
| **Total** | **29** | | **1075 → 37.1/100** |

H1 and H12 gained Cheuk evidence text; leading emoji unchanged.

---

## Site Integrity Score — 80.0/100

| # | Finding | Deduction | Notes |
|---|---|---|---|
| 1 | Acidity still open (F2, F11) | −10 | F12 left this bucket |
| 2 | Acidity partial (F3, F7, F9, **F12**) | −10 | F12 newly partial: Cheuk blocked + two-partner enroll mitigation. Remaining close: actually seat a named candidate. |
| 3 | HYPOTHESIS.md table/entry mismatches | 0 | All 29 rows match leading emoji |
| 4 | Broken local links | 0 | Held from v1.9.45 |
| 5 | Orphaned pages | 0 | Cheuk card lives on an existing reachable page |
| 6 | Headline number consistency | 0 | Unchanged |
| 7 | Uncommitted work | 0 | This batch committed as part of the same run |

**Total deductions: 20 → 80.0**

---

## Concrete Evidence Needed to Advance Sub-Scores

| Score Component | Current | Ceiling | Concrete Evidence Needed to Move Up |
| :--- | :--- | :--- | :--- |
| **F12 remaining** | Partial | Resolved | Seat Cheuk (or another blocked candidate) through a partner company; name the second partner when confirmed (+0.8 overall). |
| **F2 / F11 still open** | −10 | 0 | Dataset behind H1, or demote wording; one cohort of $10/mo churn. |
| **H21 ⚪ → 🟡** | Planned | In Testing | First Funfair token redemption or $29 sale. |
| **H5 🟡 → ✅** | In Testing | Validated | Paid $10/mo or $250 seats. |
| **H9 $10k × 2** | Decided (100) | Validated | Two paid launches. Does not raise this number. |

---

## What Would Move the Score

1. **Seat Cheuk through a partner** — closes F12. The access question is answered; the workaround is unproven until someone sits.
2. **Rewrite D2C CTAs** so YouTube/LinkedIn do not imply walk-up Pearson VUE signup.
3. **H21 token redemption / H5 paid enrollments** — still the Validation movers.
4. **H9 two paid launches to $10,000** — Stage 2 exit. Not a score lever under Decided=100.

Master playbook: `5_Symbols/dashboard/how-to-move-the-score.html`.
