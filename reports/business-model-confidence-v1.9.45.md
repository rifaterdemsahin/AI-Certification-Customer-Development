# Business Model Confidence Report — v1.9.45

**Date:** 2026-08-19  
**Produced by:** the `business-model-sanity-check` skill  
**What changed vs. v1.9.44:** Executed the three housekeeping actions v1.9.44 named as the drop's entire driver, plus the requested master playbook.

1. **9 dangling hypothesis links fixed.** Created `5_Symbols/hypotheses/hyp-h27.html` so the six live `hyp-h27.html` citations resolve. Retargeted unused-ID H26 Dual-Persona / FDE citations (H26 was skipped in the v1.60.0 merge) to `hyp-h30.html` and relabelled the visible text H26 → H30. Fresh scan of 219 HTML files with `<script>` stripped: **0 real broken `href`s** (−45 restored).
2. **This batch is committed as part of the same run**, clearing the −10 uncommitted deduction that v1.9.44 applied to the token-system + todo tree.
3. **Master document published:** `5_Symbols/dashboard/how-to-move-the-score.html` — every historical score-up event, what does not move the number, the housekeeping playbook, and ranked evidence levers. Registered in Favorites, Docs, `searchIndex`, `index.html`, and `latest-pages.html`.

Bumped `HYPOTHESIS.md` to **v1.163.0**. Overall score recovers **33 → 49 / 100**. This is the integrity-ceiling score given today's Validation (37.1) and remaining acidity deductions (22.5). It is *not* a business-validation jump — no hypothesis status tier changed.

---

## Overall Score

# 49 / 100 — Low-moderate confidence

```
overall = round(0.7 × 37.1 + 0.3 × 77.5) = round(25.97 + 23.25) = 49
```

| Sub-score | v1.9.44 | v1.9.45 (this run) |
|---|---|---|
| Hypothesis Validation Score | 37.1 / 100 | **37.1 / 100** |
| Site Integrity Score | 22.5 / 100 | **77.5 / 100** |
| **Overall** | **33 / 100** | **49 / 100** |

A low-moderate score in Customer Discovery / Validation is expected: most bets are still open. 49 is 3 points above the previous 46 peak because Validation ticked 36.9 → 37.1 in v1.9.44 *and* this run finally sits on a clean tree with zero broken links (v1.9.43's 46 still carried −10 uncommitted). Housekeeping cannot produce 50+. See `5_Symbols/dashboard/how-to-move-the-score.html`.

---

## Hypothesis Validation Score — 37.1/100

29 tracked hypotheses in `HYPOTHESIS.md` (bumped to v1.163.0). Per-hypothesis leading status emoji mapped per the skill rubric; H9 and H15 ("Hypothesized/**Decided**") scored 100 per the prior-run convention for founder-decided items (leading emoji is ⚪; the Decided clause is treated as the ceiling for those two gates).

| Group | Count | Score each | Subtotal |
|---|---|---|---|
| 🟡 In Testing / Partially Validated / In Progress (H1, H2, H3, H4, H5, H10, H23, H24, H27, H29, H30) | 11 | 55 | 605 |
| ⚪ Planned / Hypothesized (H7, H8, H11–H14, H16–H22, H25, H28) | 13 | 20 | 260 |
| ⚠️ Claimed, unverified (H6) | 1 | 10 | 10 |
| Decided (H9 $10k gate, H15 full-time trigger) | 2 | 100 | 200 |
| **Total** | **29** | | **1075 → 37.1/100** |

H21 remains ⚪ Planned (Funfair tokens are draft values with no issuance/redemption data). H27 remains 🟡 In Testing (2 of 60 questions live; dedicated detail page added this run, status unchanged).

---

## Site Integrity Score — 77.5/100

| # | Finding | Deduction | Notes |
|---|---|---|---|
| 1 | Acidity still open (F2, F11, F12) | −15 | Unchanged from `acidity-check-report-v1.3.0.md` |
| 2 | Acidity partial (F3, F7, F9) | −7.5 | Unchanged |
| 3 | HYPOTHESIS.md table/entry mismatches | 0 | All 29 Summary Table rows match their own Status-line leading emoji |
| 4 | Broken local links | 0 | **Cleared.** Fresh scan, 219 HTML files, `<script>` stripped: 0 real broken `href`s. H27 citations now resolve to `hyp-h27.html`; H26 Dual-Persona/FDE citations resolve to `hyp-h30.html`. |
| 5 | Orphaned pages | 0 | Fresh scan of 219 HTML files: every page is reachable via `nav.js` groups/searchIndex or an inbound link. `how-to-move-the-score.html` and `hyp-h27.html` are registered. |
| 6 | Headline number consistency | 0 | $10,000 / 1,000x / $100,000 / >40% unchanged. Five live `£10,000` hits are the FDE consulting price band (£2,500–£10,000), not the Stage 2 gate. |
| 7 | Uncommitted work | 0 | This batch (token system + link fixes + playbook + this report) is committed as part of the same run, so the −10 does not apply. |

**Total deductions: 22.5 → 77.5** (acidity ceiling).

---

## Concrete Evidence Needed to Advance Sub-Scores

Full ranked playbook: [`5_Symbols/dashboard/how-to-move-the-score.html`](../5_Symbols/dashboard/how-to-move-the-score.html).

| Score Component | Current | Ceiling | Concrete Evidence Needed to Move Up |
| :--- | :--- | :--- | :--- |
| **Site Integrity — acidity open (F2, F11, F12)** | 77.5 | 92.5 | F12: Anthropic / Pearson VUE confirm individual non-Partner registration. F2: search-volume/job-scrape dataset or demote the wording. F11: one cohort of $10/mo churn/renewal data. Each is +5 integrity / +1.5 overall. |
| **Site Integrity — acidity partial (F3, F7, F9)** | 77.5 | 85 | F3: Cambridge/Marianna pilot actually runs. F7: payment fees + $100k-ARR hire-affordability modeled. F9: real $29 sales (same evidence as H21). Each is +2.5 integrity / +0.8 overall. |
| **H21 (Exam Prep Bundle)** | ⚪ Planned | In Testing | First Funfair token redemption (stall products already exist) or first $29 cash sale (+0.8 overall). |
| **H5 (Organic Sales / Community)** | 🟡 In Testing | Validated | First paid cohort enrollments ($10/mo or $250 Share Screen). $0/$1 joins do not count (+1.1 overall). |
| **H8 (Live Cohort PMF)** | ⚪ Hypothesized | In Testing | Count 10 un-poked True Regulars and ≥80% 4-week Sunday attendance (+0.8 overall). |
| **H9 (Exit Gate $10k)** | Decided (already 100) | Validated | $10,000 across 2 consecutive paid launches. **Does not move the numeric score** under the Decided=100 convention — it is still the Stage 2 → 3 business gate. |

---

## What Would Move the Score

Housekeeping is done. The next points are evidence, not pages.

1. **F12 / F2 / F11** — three acidity findings, +4.5 overall if all three close. F12 is one help-desk ticket.
2. **Funfair token redemptions** — cheapest H21 ⚪ → 🟡. Memory cards, mock exams, and contractor-course modules already exist.
3. **H5 paid enrollments and H8 regulars counted** — the two status upgrades that historically produced real (not housekeeping) jumps, same pattern as v1.6.6 / v1.9.11 / v1.9.18.
4. **H9 two paid launches to $10,000** — the business exit from Stage 2. It does not raise this number; it is why the number exists.

Master playbook: `5_Symbols/dashboard/how-to-move-the-score.html`.
