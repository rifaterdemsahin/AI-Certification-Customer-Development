# Business Model Confidence Report — v1.9.0

**Date:** 2026-08-11
**Produced by:** the `business-model-sanity-check` skill (`.claude/skills/business-model-sanity-check/SKILL.md`)
**What changed vs. v1.7.1 / v1.8.0:** This is a second merge-resolution run. `claude/skool-setup-signups-6w38wa` had already reconciled its own Skool-launch work with `main`'s Site Map batch (producing v1.7.1). Independently, `main` moved further ahead and merged the Site Map branch with a concurrent H25 branch ("Cert Value in the AI Era"), which had separately found and fixed the same 3 broken links and the same H24 Summary Table omission (producing v1.8.0). Merging `main` into this branch a second time surfaces both lines of work together: this branch's H5 upgrade (Skool live, 8 signups) plus H25 (cert value bifurcation) plus every fix already applied on both sides. This run adds H25's row to the Summary Table (only this branch's copy was missing it) and recomputes the full score fresh against the truly-merged state.

---

## Overall Score

# 45 / 100 — Low-moderate confidence

> Hypothesis Validation is 30.8% (31/100) across 25 hypotheses — H5's In Testing upgrade (carried from v1.6.6) plus H25's addition (⚪ Planned/Claimed, 20) roughly offset each other in the average. Site Integrity is 77.5% — the broken-link and Summary Table fixes from both branches carry through cleanly, and this merge is committed as part of this run.

```
overall = round(0.7 × Hypothesis Validation Score + 0.3 × Site Integrity Score)
        = round(0.7 × 30.80 + 0.3 × 77.50)
        = round(21.56 + 23.25)
        = round(44.81)
        = 45
```

| Sub-score | v1.7.1 (this branch) | v1.8.0 (main) | v1.9.0 (merged) |
|---|---|---|---|
| Hypothesis Validation Score | 31.3 / 100 (24 hyps) | 29.4 / 100 (25 hyps) | **30.8 / 100 (25 hyps)** |
| Site Integrity Score | 77.5 / 100 | 67.5 / 100 (uncommitted) | **77.5 / 100** |
| **Overall** | **45 / 100** | **41 / 100** | **45 / 100** |

---

## Hypothesis Validation Score — 30.8/100 (displayed 31/100)

Re-derived fresh from each hypothesis's own **Status:** line in `HYPOTHESIS.md`.

| ID | Hypothesis | Status | Score |
|---|---|---|---|
| H1 | Rising AI skills expectations | 🟡 Partially validated | 55 |
| H2 | Animated content beats standard formats | 🟡 In Testing | 55 |
| H3 | Audience will pay for cert prep | 🟡 In Progress | 55 |
| H4 | YouTube funnel → ~1% paid conversion | 🟡 In Testing | 55 |
| H5 | Cohorts sell out organically | 🟡 In Testing (Skool live, 8 signups) | 55 |
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
| H25 | Cert value bifurcation: judgement-verifying certs rise, trivia certs decline | ⚪ Planned/Claimed | 20 |

**Sum:** 770 across 25 hypotheses → 770 / 25 = **30.8 → 31/100** (rounded).

---

## Site Integrity Score — 77.5/100

| # | Finding | Deduction | Rationale |
|---|---|---|---|
| 1 | Acidity-check findings still open (F2, F11, F12) | −15 | Unchanged (3 findings, latest acidity report still v1.3.0) |
| 2 | Acidity-check findings partially addressed (F3, F7, F9) | −7.5 | Unchanged (3 findings) |
| 3 | HYPOTHESIS.md table/entry mismatches | 0 | H24 and H25 are both Summary Table rows; H5's row matches its own entry's current status. All 25 rows now match. |
| 4 | Broken local links | 0 | The 3 real broken links were fixed independently on both merged branches; full re-scan post-merge found 0 real broken links. |
| 5 | Orphaned pages | 0 | `sitemap.html`, `cert-value-ai-era.html`, and `hyp-h25.html` are all registered in `nav.js` and reachable. |
| 6 | Headline number cross-file consistency | 0 | $10,000 / 1,000x / $100,000 / >40% all consistent. |
| 7 | Uncommitted work (`git status --porcelain`) | 0 | This merge's full batch is committed and pushed as part of this same run. |

**Total deductions: 22.5 → Site Integrity Score: 77.5**

---

## What Would Move the Score

Unchanged: **H9** (the $10k Stage 2→3 gate) remains the single biggest lever on the Hypothesis Validation Score. H5's next step is converting a portion of the 8 real Skool signups into confirmed paying $10/mo members or $250–$500 cohort seats. H25, the newest addition, would move from ⚪ to 🟡 if the founder logs a real, observed signal of the judgement-vs-memorization value shift (e.g., a hiring manager or procurement contact explicitly weighting proctored/scenario-based certs over recall-based ones).

---

## Version History

| Version | Date | Overall Score | Note |
|---|---|---|---|
| v1.9.0 | 2026-08-11 | 45 / 100 (Low-moderate) | Second merge round: reconciles this branch's H5 upgrade (v1.7.1) with main's own merge of Site Map + H25 (v1.8.0); 25 hypotheses total, all fixes carry through |
| v1.8.0 | 2026-08-11 | 41 / 100 (Low-moderate) | Merged Site Map + H25/cert-value-ai-era.html branches on `main`; reconciled colliding v1.7.0 reports |
| v1.7.1 | 2026-08-11 | 45 / 100 (Low-moderate) | Merge resolution: combines the Skool-launch batch (v1.6.7) with the Site Map batch (v1.7.0) |
| v1.7.0 | 2026-08-11 | 38 / 100 (Low-moderate) | Added Site Map page; fresh re-scan found 3 pre-existing broken links + H24 missing from Summary Table |
| v1.6.7 | 2026-08-11 | 45 / 100 (Low-moderate) | Cleared −10 temporary uncommitted-work deduction after committing and pushing the Skool-launch batch |
| v1.6.6 | 2026-08-11 | 42 / 100 (Low-moderate) | Skool LMS deployed live with 8 real signups; upgrades H5 to 🟡 In Testing |
| v1.6.5 | 2026-08-11 | 41 / 100 (Low-moderate) | Created "Your Market Reality Check" page |
| v1.0.3 | 2026-08-05 | 44 / 100 (Low-moderate) | Added Google Trends link and founder read to H1, plus WhatsApp cohort/referral signals |
