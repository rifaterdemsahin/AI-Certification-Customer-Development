# Business Model Confidence Report — v1.7.2

**Date:** 2026-08-12
**Produced by:** the `business-model-sanity-check` skill (`.claude/skills/business-model-sanity-check/SKILL.md`)
**What changed vs. v1.7.1:** Added H28 (YouTube engagement rate benchmark — expected like/comment/total-engagement rates, the one channel-health dimension none of H2/H7/H10/H13 covered) and its supporting pages `5_Symbols/growth/youtube-channel-metrics.html` and `5_Symbols/hypotheses/hyp-h28.html`. Also fixed the 2 broken-link targets v1.7.1 surfaced (`hyp-h19.html` referenced from `hyp-h23.html` and `evidence-map.html` now point to the real `stage-timelines.html`; `idea.html`'s `target-audience.html` link now carries the correct `../strategy/` prefix), and filled a pre-existing gap where H24 was missing from the Summary Table and Dependency Map despite having its own full entry since v1.45.0.

---

## Overall Score

# 42 / 100 — Low-moderate confidence

> Hypothesis Validation dips slightly to 30.4% (30/100) — the new H28 (⚪ Planned, score 20) pulls the 26-hypothesis average down a fraction from 30.8%. Site Integrity recovers fully from 52.5 to 67.5 — this run's link-scan finds **zero real broken links** (the 2 targets v1.7.1 surfaced are now fixed), which more than offsets H28's drag on the business-confidence side. Still carries the usual −10 temporary uncommitted-work deduction, which clears once this batch is committed.

```
overall = round(0.7 × Hypothesis Validation Score + 0.3 × Site Integrity Score)
        = round(0.7 × 30.38 + 0.3 × 67.50)
        = round(21.27 + 20.25)
        = round(41.52)
        = 42
```

| Sub-score | v1.7.1 | v1.7.2 | Change |
|---|---|---|---|
| Hypothesis Validation Score | 30.8 / 100 | **30.4 / 100** | −0.4 |
| Site Integrity Score | 52.5 / 100 | **67.5 / 100** | +15.0 |
| **Overall** | **37 / 100** | **42 / 100** | **+5.0** |

---

## Hypothesis Validation Score — 30.38/100 (displayed 30/100)

Re-derived fresh from each hypothesis's own **Status:** line in `HYPOTHESIS.md`. All 25 pre-existing hypotheses hold the same status emoji as v1.7.1. H28 is new this run.

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
| H11 | $100k ARR → hiring threshold | ⚪ Hypothesized | 20 |
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
| H28 | YouTube engagement rate benchmark (new) | ⚪ Planned | 20 |

**Sum:** 790 across 26 hypotheses → 790 / 26 = **30.38% → 30/100** (rounded).

---

## Site Integrity Score — 67.5/100 (up from 52.5)

Re-checked fresh across all HTML files, per the skill's Step 3:

| # | Finding | v1.7.1 | v1.7.2 | Deduction | Rationale |
|---|---|---|---|---|---|
| 1 | Acidity-check findings still open (F2, F11, F12) | −15 | −15 | −15 | Unchanged (3 findings) — not re-audited this run, carried forward. |
| 2 | Acidity-check findings partially addressed (F3, F7, F9) | −7.5 | −7.5 | −7.5 | Unchanged (3 findings) — carried forward. |
| 3 | HYPOTHESIS.md table/entry mismatches | 0 | 0 | 0 | All 26 Summary Table rows now match their entries — **fixed a real gap this run:** H24 had a full entry since v1.45.0 but was missing from both the Summary Table and the Dependency Map; both are now backfilled. |
| 4 | Broken local links | −15 | **0** | **0** | **Fixed this run:** `hyp-h23.html` and `evidence-map.html` both linked to a non-existent `hyp-h19.html` (H19 has no detail page) — repointed to the real `../growth/stage-timelines.html`. `idea.html` linked `target-audience.html` without the `../strategy/` path prefix — corrected. Full repo re-scan confirms 0 real broken links (3 remaining `href="..."` matches are inline JS template-literal strings in `markdown_renderer.html`, `self-assessment.html`, and `latest-pages.html` — known false positives, not real hrefs). |
| 5 | Orphaned pages | 0 | 0 | 0 | Full reachability scan confirms every page, including the new `youtube-channel-metrics.html` and `hyp-h28.html`, is reachable via `nav.js` (`groups` and/or `searchIndex`). |
| 6 | Headline number cross-file consistency | 0 | 0 | 0 | Consistent — H28's new engagement-rate benchmarks are not one of the site's four headline numbers, so no cross-file check applies to them. |
| 7 | Uncommitted work (`git status --porcelain`) | −10 | −10 | −10 | New, distinct batch since the last commit: `youtube-channel-metrics.html`, `hyp-h28.html` added; `HYPOTHESIS.md`, `nav.js`, `hyp-h23.html`, `evidence-map.html`, `idea.html`, `confidence-report.html`, and this report modified. Will clear once committed. |

**Total deductions: 32.5 (15 + 7.5 + 0 + 0 + 0 + 10) → Site Integrity Score: 67.5**

---

## What Would Move the Score

1. **Immediate, cheap fix (already banked this run):** the 2 broken links are fixed, recovering +15 — the single biggest lever available without new business evidence.
2. **The highest-leverage *business* action remains H9** (the $10k Stage 2→3 gate) — two consecutive paid cohort launches combining to $10,000 — since it gates H15, H16, and H19 downstream and is the single biggest lever on the Hypothesis Validation Score.
3. **H28 specifically** moves from ⚪ Planned to 🟡 In Testing the moment even one video has like/comment/share counts logged alongside its retention data at `content-analysis.html` — a low-cost next step since that log already exists and just needs three more columns.
4. **Acidity findings F2/F11/F12 (still open)** are worth −15 combined; resolving any one of them is the next-highest site-integrity lever after the now-fixed broken links.

---

## Version History

| Version | Date | Overall Score | Note |
|---|---|---|---|
| v1.7.2 | 2026-08-12 | 42 / 100 (Low-moderate) | Added H28 (YouTube engagement rate benchmark) and its pages; fixed 2 broken-link targets (+15 Site Integrity); backfilled H24's missing Summary Table/Dependency Map rows; −10 temporary uncommitted-work deduction |
| v1.7.1 | 2026-08-12 | 37 / 100 (Low-moderate) | Founder configured 7 live cohort classrooms in Skool; created `sales-marketing-roadmap.html`; added curriculum-scope evidence to H5, H8, H14; surfaced 2 pre-existing broken-link targets (−15, new); −10 temporary uncommitted-work deduction |
| v1.7.0 and earlier | — | — | See `reports/business-model-confidence-v1.7.1.md` for the full prior history. |
