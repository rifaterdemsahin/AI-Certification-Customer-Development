# Business Model Confidence Report — v1.0.1

**Date:** 2026-08-04
**Produced by:** the `business-model-sanity-check` skill (`.claude/skills/business-model-sanity-check/SKILL.md`)
**What changed vs. v1.0.0:** patch re-run, no new check categories. Between v1.0.0 and this run, the 58 files v1.0.0 flagged as uncommitted (Finding 5) — plus a newly added `cohort-prep.html` page — were committed in `ee6fc5f`. That single fix accounts for the entire score change below; nothing else in the site moved.

---

## Overall Score

# 44 / 100 — Low-moderate confidence

> Up 6 points from v1.0.0's 38. Still early-stage — the Hypothesis Validation
> Score hasn't moved, and that's the sub-score that actually matters for the
> business — but this is exactly what the score is for: it moved because a real
> risk (58 files of working content one `git clean` away from gone) got closed
> out, and the report shows that instead of silently forgetting v1.0.0 ever
> flagged it.

```
overall = round(0.7 × Hypothesis Validation Score + 0.3 × Site Integrity Score)
        = round(0.7 × 29 + 0.3 × 80)
        = round(20.3 + 24.0)
        = 44
```

| Sub-score | v1.0.0 | v1.0.1 | Change |
|---|---|---|---|
| Hypothesis Validation Score | 29 / 100 | **29 / 100** | — |
| Site Integrity Score | 60 / 100 | **80 / 100** | +20 |

---

## Hypothesis Validation Score — unchanged, 29/100

No hypothesis's own Status line in `HYPOTHESIS.md` changed between v1.0.0 and this
run. `cohort-prep.html` added a documented mechanism under H5 (a weekly
WhatsApp/Discord install-list and content-preview loop between live sessions), but
H5's Status line is still ⚪ Hypothesized — it describes *how* the free cohort
runs, not a new validation result — so the score is unaffected. See v1.0.0's report
for the full 18-hypothesis table; it's unchanged.

---

## Site Integrity Score — 80/100 (+20 vs. v1.0.0)

| # | Finding | v1.0.0 | v1.0.1 |
|---|---|---|---|
| 1 | 3 acidity-check findings still open (F2, F9, F11) | −15 | −15 (unchanged, pre-existing) |
| 2 | 2 acidity-check findings partially addressed (F3, F7) | −5 | −5 (unchanged, pre-existing) |
| 3 | HYPOTHESIS.md H3 table/entry mismatch | −5 (fixed in v1.0.0) | 0 — stays fixed, confirmed still correct in the committed file |
| 4 | hypothesis.html stale hypothesis count | −5 (fixed in v1.0.0) | 0 — stays fixed |
| 5 | 58 files uncommitted (18 new + 40 modified) | −10 | **0 — RESOLVED.** `git status --porcelain` is now clean; all 58 files plus the new `cohort-prep.html` were committed in `ee6fc5f` ("Add 18 per-hypothesis detail pages with SVG diagrams, cross-link them site-wide, and add a Cohort Prep page"). |
| 6 | Broken local links | 0 | 0 — re-scanned, still zero real broken links, including the new `cohort-prep.html` |
| 7 | Headline number consistency | 0 | 0 — unaffected |

**Total deductions: 20 → Site Integrity Score: 80.**

---

## What would move the score

Same as v1.0.0: the Hypothesis Validation Score (29/100) is the ceiling on how
confident this report can say the business model is, and it only moves when a
real experiment produces a real result. Site integrity is now close to its
practical ceiling (80/100, limited mostly by acidity-check findings that require
product/business decisions, not code fixes) — further site-integrity work has
much less room left to move the overall score than the next validated hypothesis
does.

---

## Version History

| Version | Date | Overall Score | Note |
|---|---|---|---|
| v1.0.1 | 2026-08-04 | 44 / 100 (Low-moderate) | 58-file uncommitted-work risk resolved; everything else unchanged. |
| v1.0.0 | 2026-08-04 | 38 / 100 (Low-moderate) | Initial version. |
