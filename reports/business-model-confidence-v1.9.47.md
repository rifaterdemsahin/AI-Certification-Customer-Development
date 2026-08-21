> **Superseded by:** [`business-model-confidence-v1.9.48.md`](business-model-confidence-v1.9.48.md) (2026-08-19). Historical record — do not edit numbers in place.

# Business Model Confidence Report — v1.9.47

**Date:** 2026-08-19  
**Produced by:** the `business-model-sanity-check` skill  
**What changed vs. v1.9.46:** Naming convention on `5_Symbols/strategy/perception-of-ai.html` — discovery source cited as **Charles** (first name only), matching customer-interview records (same convention as Cheuk). `nav.js` search tags updated. H25 annotated with Charles's Linus Torvalds / verification-tax citation. Hypothesis status tiers unchanged. Bumped `HYPOTHESIS.md` to **v1.169.0**. Working tree has a new uncommitted naming-convention batch (perception page, nav, hypothesis, latest-pages, this report).

---

## Overall Score

# 47 / 100 — Low-moderate confidence

```
overall = round(0.7 × 37.1 + 0.3 × 70.0) = round(25.97 + 21.00) = 47
```

| Sub-score | v1.9.46 | v1.9.47 (this run) |
|---|---|---|
| Hypothesis Validation Score | 37.1 / 100 | **37.1 / 100** |
| Site Integrity Score | 80.0 / 100 | **70.0 / 100** |
| **Overall** | **50 / 100** | **47 / 100** |

The 50 → 47 drop is housekeeping, not a business deterioration: a new uncommitted batch (−10 Integrity). Committing this first-name-only change restores Integrity 80 and overall **50**. Validation is unchanged at 37.1. See `5_Symbols/dashboard/how-to-move-the-score.html`.

---

## Hypothesis Validation Score — 37.1/100

29 tracked hypotheses. Same rubric as v1.9.46; H9 and H15 scored 100 as founder-Decided.

| Group | Count | Score each | Subtotal |
|---|---|---|---|
| 🟡 In Testing / Partially Validated / In Progress (H1, H2, H3, H4, H5, H10, H23, H24, H27, H29, H30) | 11 | 55 | 605 |
| ⚪ Planned / Hypothesized (H7, H8, H11–H14, H16–H22, H25, H28) | 13 | 20 | 260 |
| ⚠️ Claimed, unverified (H6) | 1 | 10 | 10 |
| Decided (H9, H15) | 2 | 100 | 200 |
| **Total** | **29** | | **1075 → 37.1/100** |

H25 gained a first-name-only Charles citation pointing at `perception-of-ai.html`; leading emoji unchanged (⚪ Planned/Claimed).

---

## Site Integrity Score — 70.0/100

| # | Finding | Deduction | Notes |
|---|---|---|---|
| 1 | Acidity still open (F2, F11) | −10 | Unchanged from v1.9.46 |
| 2 | Acidity partial (F3, F7, F9, F12) | −10 | F12 remains 🟡 PARTIALLY ADDRESSED until a named candidate is seated |
| 3 | HYPOTHESIS.md table/entry mismatches | 0 | All 29 rows match leading emoji |
| 4 | Broken local links | 0 | Fresh scan of 221 HTML files: 2 template-literal false positives (`$2` in `markdown_renderer.html`, `${page.url}` in `latest-pages.html`); 0 real broken `href`s |
| 5 | Orphaned pages | 0 | 0 orphans; `perception-of-ai.html` is in nav groups + search index |
| 6 | Headline number consistency | 0 | $10,000 gate, $100,000 ARR, 1,000x growth, >40% retention floor unchanged |
| 7 | Uncommitted work | −10 | New batch vs v1.9.46: `perception-of-ai.html`, `nav.js`, `HYPOTHESIS.md`, `latest-pages.html`, this report, `confidence-report.html`. Distinct from the prior committed Cheuk/F12 batch. |

**Total deductions: 30 → 70.0**

---

## Concrete Evidence Needed to Advance Sub-Scores

| Score Component | Current | Ceiling | Concrete Evidence Needed to Move Up |
| :--- | :--- | :--- | :--- |
| **Uncommitted work (−10)** | 70 Integrity | 80 | Commit this first-name-only batch; restores overall 47 → 50. |
| **F12 remaining** | Partial | Resolved | Seat Cheuk (or another blocked candidate) through a partner company; name the second partner when confirmed (+0.8 overall). |
| **F2 / F11 still open** | −10 | 0 | Dataset behind H1, or demote wording; one cohort of $10/mo churn. |
| **H21 ⚪ → 🟡** | Planned | In Testing | First Funfair token redemption or $29 sale. |
| **H5 🟡 → ✅** | In Testing | Validated | Paid $10/mo or $250 seats. |
| **H9 $10k × 2** | Decided (100) | Validated | Two paid launches. Does not raise this number. |

---

## What Would Move the Score

1. **Commit this batch** — restores the 3-point housekeeping drop. Naming convention does not change business confidence.
2. **Seat Cheuk through a partner** — closes F12. The access question is answered; the workaround is unproven until someone sits.
3. **Rewrite D2C CTAs** so YouTube/LinkedIn do not imply walk-up Pearson VUE signup.
4. **H21 token redemption / H5 paid enrollments** — still the Validation movers.
5. **H9 two paid launches to $10,000** — Stage 2 exit. Not a score lever under Decided=100.

Master playbook: `5_Symbols/dashboard/how-to-move-the-score.html`.
