# Business Model Confidence Report — v1.0.2

**Date:** 2026-08-05
**Produced by:** the `business-model-sanity-check` skill (`.claude/skills/business-model-sanity-check/SKILL.md`)
**What changed vs. v1.0.1:** patch re-run, no new check categories. Since v1.0.1, `HYPOTHESIS.md` grew from v1.10.1 (18 hypotheses) to v1.13.0 (19 hypotheses, adding H19), and ~16 new supporting pages were added (`cohort-prep.html`, `todo.html`, `content-analysis.html`, `evidence-map.html`, `test-plan.html`, `single-founder-bandwidth.html`, `validation-repeat-gate.html`, `competitive-analysis.html`, `funnel-math.html`, `unit-economics.html`, `cost-side-model.html`, `advertisement.html`, `marketing-tactics.html`, `motivation.html`, `calendar.html`, `stage-timelines.html`). **Result: the overall score did not move — still 44/100.** Neither sub-score changed. This is a real finding, not a stale re-run: see below for why.

---

## Overall Score

# 44 / 100 — Low-moderate confidence

> Unchanged from v1.0.1. A full site re-scan (100 HTML files, up from ~94) found
> the same Hypothesis Validation Score (29/100) and the same Site Integrity Score
> (80/100) as the prior run. Nothing degraded and nothing improved — the work done
> since v1.0.1 was real (new hypotheses, new pages, new evidence added to existing
> hypotheses), but none of it crossed a status-emoji threshold or introduced a new
> site-integrity defect, so the number the rubric produces is identical.

```
overall = round(0.7 × Hypothesis Validation Score + 0.3 × Site Integrity Score)
        = round(0.7 × 29 + 0.3 × 80)
        = round(20.3 + 24.0)
        = 44
```

| Sub-score | v1.0.1 | v1.0.2 | Change |
|---|---|---|---|
| Hypothesis Validation Score | 29 / 100 | **29 / 100** | — |
| Site Integrity Score | 80 / 100 | **80 / 100** | — |

---

## Why the Hypothesis Validation Score didn't move (29 → 29)

`HYPOTHESIS.md` grew by one hypothesis, H19 (Stage timeline estimates, added
2026-08-05, Status: ⚪ Planned/estimated = 20 points). Averaging 19 hypotheses
instead of 18 barely shifts the mean — 20 points is close enough to the
already-low 29 average that it rounds to the same integer:

```
v1.0.1 (18 hypotheses): sum = 525 → 525/18 = 29.17 → 29
v1.0.2 (19 hypotheses): sum = 545 → 545/19 = 28.68 → 29
```

More importantly: **no existing hypothesis's own Status line changed emoji**
between v1.10.1 and v1.13.0. Real evidence was added to several entries (H1's
new competing-vendor-certification corroboration, H5's Premise 5 weekly prep
loop, H6's Forward Deployed Engineer hiring data, H8's WhatsApp peer-community
signal, H9's founder reconfirmation of the 2-launch gate) — but in every case the
new material *supports* a status the hypothesis already held, rather than
graduating it to the next tier (e.g. ⚪ Hypothesized → 🟡 In Testing). That's an
accurate reflection of reality: notes, corroborating research, and clarified
mechanics are not the same thing as a hypothesis producing a measured result.

Full per-hypothesis table (H1–H19), scored from each entry's own Status line per
the skill's rubric (✅ Validated = 100, 🟡 In Testing/Partially Validated/In
Progress = 55, ⚪ Planned/Hypothesized = 20, ⚠️ Claimed-unverified = 10):

| ID | Hypothesis | Status | Score |
|---|---|---|---|
| H1 | Rising AI skills expectations | 🟡 Partially validated | 55 |
| H2 | Animated content beats standard formats | 🟡 In Testing (68.5% first data point) | 55 |
| H3 | Audience will pay for cert prep | 🟡 In Progress | 55 |
| H4 | YouTube funnel → 1% paid membership conversion | 🟡 In Testing | 55 |
| H5 | Cohorts sell out organically (live/community, not a guarantee) | ⚪ Hypothesized | 20 |
| H6 | TAM/SAM/SOM market sizing | ⚠️ Claimed, unverified, partially grounded | 10 |
| H7 | Funnel CTR/conversion rates | ⚪ Hypothesized | 20 |
| H8 | Cohort delivers exam-ready PMF (no outcome guaranteed) | ⚪ Hypothesized | 20 |
| H9 | $10k Stage 2 exit gate (2-launch repeat) | ⚪ Hypothesized/Decided | 20 |
| H10 | >40% retention = MVP video-quality metric | 🟡 In Testing | 55 |
| H11 | $100k ARR → hiring threshold | ⚪ Hypothesized | 20 |
| H12 | IT consulting/gov-contractor B2B channel | ⚪ Planned | 20 |
| H13 | 1,000x subscriber growth per video | ⚪ Planned | 20 |
| H14 | Multi-certification market expansion | ⚪ Planned | 20 |
| H15 | Founder transitions to full-time at Stage 4 | ⚪ Hypothesized/Decided | 20 |
| H16 | Paid advertisement, CAC/LTV-gated | ⚪ Planned | 20 |
| H17 | Onsite Cambridge + corporate pilot (Marianna) | ⚪ Planned | 20 |
| H18 | International onsite delivery (UK/Europe/USA) | ⚪ Planned | 20 |
| H19 | Stage timeline estimates (new, 2026-08-05) | ⚪ Planned/estimated | 20 |

Sum = 545 → average = 545/19 = 28.68 → **29/100**.

---

## Why the Site Integrity Score didn't move (80 → 80)

Every check was re-run fresh against the current 100-file site, not reused from
v1.0.1:

| # | Finding | v1.0.1 | v1.0.2 |
|---|---|---|---|
| 1 | Acidity-check findings still open (F2, F9, F11) | −15 | −15 (unchanged — no new `acidity-check-report` version exists; latest is still v1.1.0, 2026-08-04) |
| 2 | Acidity-check findings partially addressed (F3, F7) | −5 | −5 (unchanged, pre-existing) |
| 3 | HYPOTHESIS.md table/entry mismatches | 0 | 0 — re-checked all 19 entries' own Status line against the Summary Table row. All 19 match on status *emoji*. One wording-only difference found: H19's own entry says "⚪ Planned/estimated" while its Summary Table row says "⚪ Planned" — same emoji, same score, not a scoring mismatch, noted here for transparency rather than deducted. |
| 4 | Uncommitted work (`git status --porcelain`) | 0 (resolved in v1.0.1) | 0 — working tree is clean; all ~16 new pages and HYPOTHESIS.md revisions since v1.0.1 were already committed. |
| 5 | Broken local links | 0 | 0 — re-scanned all 100 HTML files (up from ~94). One regex hit inside `markdown_renderer.html`'s own JS template string (`href="$2"`) is a confirmed false positive (it's the markdown-link replacement pattern, not a real href), excluded per the skill's documented carve-out. |
| 6 | Orphaned pages (unreachable from `nav.js` or any `href`) | 0 | 0 — every non-index page (including all newly added ones) is referenced either via `nav.js` or a live `href` somewhere on the site. |
| 7 | Headline number cross-file consistency | 0 | 0 — the $10,000 gate, $100,000 ARR trigger, 1,000x subscriber-growth metric, and >40% retention floor are stated consistently everywhere they appear on live pages. No stray currency/figure conflicts found (the "£10,000" mention remains confined to `HYPOTHESIS.md`'s own explanatory text, per the skill's documented carve-out — not a live page claim). |

**Total deductions: 20 → Site Integrity Score: 80** (unchanged).

The 3 `STILL OPEN` and 2 `PARTIALLY ADDRESSED` acidity findings are the entire
remaining deduction, and none of them moved because no new `acidity-check-report`
version has been published since v1.1.0 (2026-08-04) — those findings require
product/business decisions (F2: gather a real search-volume dataset; F9: design a
mid-tier price point; F11: build a churn model; F3/F7: run the Cambridge/Marianna
pilots and price out payment fees), not code or content fixes, so they were never
going to move as a side effect of adding pages.

---

## What would move the score

Unchanged from v1.0.1: the Hypothesis Validation Score (29/100) is the ceiling on
how confident this report can say the business model is, and it only moves when a
real experiment produces a measured result that graduates a hypothesis's own
Status line to the next tier (⚠️→⚪→🟡→✅) — not when a hypothesis gains a new
supporting premise or citation at its current tier. The five hypotheses sitting at
exactly 20/100 for lack of *any* data point yet (H5, H7, H8, H9, H11) are the
highest-leverage next moves; H17/H18's Cambridge/Marianna pilot running would also
double as new evidence for H12. Site Integrity remains at its practical ceiling
(80/100) until the 3 open acidity findings get founder decisions — further page
additions have essentially no room left to move this sub-score further.

---

## Version History

| Version | Date | Overall Score | Note |
|---|---|---|---|
| v1.0.2 | 2026-08-05 | 44 / 100 (Low-moderate) | Unchanged — re-scan of 100 files (up from ~94) and 19 hypotheses (up from 18) confirms no status-tier or integrity-defect change since v1.0.1. |
| v1.0.1 | 2026-08-04 | 44 / 100 (Low-moderate) | 58-file uncommitted-work risk resolved; everything else unchanged. |
| v1.0.0 | 2026-08-04 | 38 / 100 (Low-moderate) | Initial version. |
