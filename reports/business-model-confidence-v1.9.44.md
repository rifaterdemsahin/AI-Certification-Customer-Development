> ⚠️ **Superseded by v1.9.45** (2026-08-19) — see [`business-model-confidence-v1.9.45.md`](business-model-confidence-v1.9.45.md). v1.9.45 fixes the 9 dangling `hyp-h26`/`hyp-h27` links, commits this batch, and publishes the How to Move the Score playbook; overall score recovers 33 → 49/100.

# Business Model Confidence Report — v1.9.44

**Date:** 2026-08-19  
**Produced by:** the `business-model-sanity-check` skill  
**What changed vs. v1.9.43:** Added `5_Symbols/growth/funfair-tokens.html` (Funfair Token System — time-based audience engagement tokens spendable on Memory Cards, Mock Exams, and the Ultimate IT Contractor Course) and integrated it as a tactic on `5_Symbols/growth/marketing-tactics.html`, registered in `nav.js` and `latest-pages.html`, and annotated on H21 (status tier unchanged). **Two integrity corrections surface this run:** (1) a stricter broken-link scan found **9 pre-existing dangling links** to non-existent `hyp-h26.html` / `hyp-h27.html` in committed files (prior runs reported zero — the scan is now more thorough); (2) the working tree carries a **new uncommitted batch** (token system + doc/memory sync + pre-existing todo/weekly-todos edits) since v1.9.43, so the uncommitted deduction applies again. Bumped `HYPOTHESIS.md` to **v1.161.0**. Overall score moves **46 → 33 / 100** — this is a *measurement correction*, not a business deterioration (see below).

---

## Overall Score

# 33 / 100 — Low-moderate confidence

```
overall = round(0.7 × 37.1 + 0.3 × 22.5) = round(25.97 + 6.75) = 33
```

| Sub-score | v1.9.43 | v1.9.44 (this run) |
|---|---|---|
| Hypothesis Validation Score | 36.9 / 100 | **37.1 / 100** |
| Site Integrity Score | 67.5 / 100 | **22.5 / 100** |
| **Overall** | **46 / 100** | **33 / 100** |

A low score early in Customer Discovery/Validation is expected, not alarming: most bets are still open, which is normal at this stage. The 13-point drop is almost entirely the newly-surfaced broken-link finding (−45) that previous runs' simpler scans missed, partially offset by the unchanged business signal (Validation actually ticks up 36.9 → 37.1).

---

## Hypothesis Validation Score — 37.1/100

29 tracked hypotheses in `HYPOTHESIS.md` (bumped to v1.161.0). Per-hypothesis leading status emoji mapped per the skill rubric; H9 and H15 ("Hypothesized/**Decided**") scored 100 per the prior-run convention for founder-decided items.

| Group | Count | Score each | Subtotal |
|---|---|---|---|
| 🟡 In Testing / Partially Validated / In Progress (H1, H2, H3, H4, H5, H10, H23, H24, H27, H29, H30) | 11 | 55 | 605 |
| ⚪ Planned / Hypothesized (H7, H8, H11–H14, H16–H22, H25, H28) | 13 | 20 | 260 |
| ⚠️ Claimed, unverified (H6) | 1 | 10 | 10 |
| Decided (H9 $10k gate, H15 full-time trigger) | 2 | 100 | 200 |
| **Total** | **29** | | **1075 → 37.1/100** |

H21's new Funfair Token System note does not change its status tier (⚪ Planned — token values and stall prices are draft test numbers with no issuance/redemption data yet).

---

## Site Integrity Score — 22.5/100

| # | Finding | Deduction | Notes |
|---|---|---|---|
| 1 | Acidity still open (F2, F11, F12) | −15 | Unchanged from `acidity-check-report-v1.3.0.md` |
| 2 | Acidity partial (F3, F7, F9) | −7.5 | Unchanged |
| 3 | HYPOTHESIS.md table/entry mismatches | 0 | All 29 Summary Table rows match their own Status-line leading emoji |
| 4 | Broken local links | −45 | **New finding — 9 real broken `href`s** to non-existent `hyp-h26.html` (3) and `hyp-h27.html` (6) in committed files: `product/exam-performance-evidence.html`, `cd/cohort-session-8-analysis.html`, `cd/archived-interview-transcripts.html` (4), `strategy/success-stories.html`, `strategy/evidence-map.html`, `strategy/practice-exams-gap.html`. Pre-existing (not introduced by the token-system batch); prior runs under-reported this category. H26 was intentionally skipped during renumbering and H27 has no dedicated page — correct targets are `hypothesis.html` (tracker) or the respective feature pages. |
| 5 | Orphaned pages | 0 | Fresh scan of 217 HTML files: every page is reachable via `nav.js` groups/searchIndex or an inbound link; `funfair-tokens.html` is registered in the Growth dropdown, search index, and related-pages map |
| 6 | Headline number consistency | 0 | $10,000 / 1,000x / $100,000 / >40% unchanged across pages |
| 7 | Uncommitted work (`git status --porcelain`) | −10 | New distinct batch since v1.9.43: token system (funfair-tokens.html new + marketing-tactics/latest-pages/nav.js edits) + memory/doc sync (CLAUDE.md, gemini.md, agents.md, HYPOTHESIS.md) + pre-existing todo.html / weekly-todos.html edits |

**Total deductions: 77.5 → 22.5**

---

## Concrete Evidence Needed to Advance Sub-Scores

| Score Component | Current | Ceiling | Concrete Evidence Needed to Move Up |
| :--- | :--- | :--- | :--- |
| **Site Integrity — broken links (largest deduction)** | 22.5 | 67.5 | One link-fix pass repointing the 9 `hyp-h26.html` / `hyp-h27.html` hrefs to `hypothesis.html` (or the correct feature pages) restores +45 integrity immediately (−15 for a fresh run is a single-page edit). |
| **Site Integrity — uncommitted work** | 22.5 | 32.5 | Commit the token-system batch (and the pre-existing todo edits) to restore +10. |
| **H21 (Exam Prep Bundle)** | ⚪ Planned | In Testing | First real token redemptions at the funfair stalls, or first $29 bundle sale — token issuance/redemption is the cheapest available data point since the stall products are samples of existing content (+1.2 pts). |
| **H5 (Organic Sales / Community)** | 🟡 In Testing | Validated | First paid cohort enrollments ($10/mo membership or $250 cohort seats) via Skool / Delivery Pilot checkout (+2.2 pts). |
| **H8 (Live Cohort PMF)** | ⚪ Hypothesized | Validated | ≥80% 4-week cohort attendance retention and ≥10 active regular members completing hands-on project builds (+3.8 pts). |
| **H9 (Exit Gate $10k)** | Decided | Validated | $10,000 cumulative gross revenue across 2 consecutive cohort launches (+3.1 pts). |

---

## What Would Move the Score

1. **Fix the 9 dangling hypothesis links** — the single highest-leverage action this run: +45 integrity points for a ~10-minute edit across 6 files. This was the entire driver of the 46 → 33 drop.
2. **Commit the current batch** — restores the −10 uncommitted deduction.
3. **Highest-leverage business action remains H9** — two consecutive paid launches combining to $10,000.
4. **Funfair tokens are cheap H21 evidence** — the stall products already exist (memory cards, mock exams, contractor-course modules); logging the first token redemptions would upgrade H21's evidence without building anything new.
