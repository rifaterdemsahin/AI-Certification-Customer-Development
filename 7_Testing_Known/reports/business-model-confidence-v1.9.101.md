# Business Model Confidence Report — v1.9.101

**Date:** 2026-09-10
**Produced by:** the `business-model-sanity-check` skill
**What changed vs. v1.9.100:**
1. RULE-005 root compliance refactor: every non-allowed root file/folder (`nav.js`, `style.css`, `main.js`, `markdown_renderer.html`, `business-overview.html`, `exam-topics.html`, `motivation.html`, `HYPOTHESIS.md`, `reports/`, three images, `kilo.json`, `.agents/skills/`) moved `git mv` into the matching RULE-005 stage subfolder. All 303 HTML pages' `src`/`href`/`url()`/query-param references rewritten and verified (two follow-up commits: `566e1e1`, `79c78e3`). No business content, hypothesis text, or status changed — this is a structural/housekeeping change only.
2. Hypothesis Validation holds 35.6 / 100 (no status tier moved — nothing in `4_Formula/HYPOTHESIS.md`'s content was touched, only its file location).
3. Site Integrity moves **70.0 → 80.0**: the uncommitted-work deduction (−10) is lifted — both refactor commits are committed and pushed, `git status --porcelain` is now clean. Acidity findings (F2/F11 STILL OPEN, F3/F7/F9/F12 PARTIALLY ADDRESSED) are unchanged. Broken links, orphaned pages, and `4_Formula/HYPOTHESIS.md` table/entry mismatches re-verified at 0 (full link-integrity sweep across all 303 pages + reachability graph via `nav.js`).

> Previous version: [v1.9.100](business-model-confidence-v1.9.100.md)

## Overall Score

# 49 / 100 — Low-moderate confidence (band 30–54)

```
overall = round(0.7 × 35.6 + 0.3 × 80.0) = round(24.92 + 24.00) = round(48.92) = 49
```

| Sub-score | v1.9.100 | v1.9.101 (this run) |
|---|---|---|
| Hypothesis Validation Score | 35.6 / 100 | **35.6 / 100** |
| Site Integrity Score | 70.0 / 100 | **80.0 / 100** |
| **Overall** | **46 / 100** | **49 / 100** |

Score moves 46 → 49. This is a housekeeping gain, not new business validation — no hypothesis moved status tier. A low-moderate score at this stage is expected: most hypotheses are still 🟡 In Testing or ⚪ Planned, which is normal for Customer Discovery/Validation, not a sign of failure.

### What Moves the Score Next
1. **Execute and measure** the Sony ZV-1 / LinkedIn headshot mitigation plan (H3) — track whether it produces Skool signups or cohort revenue attributable to organic LinkedIn video.
2. Resolve acidity findings F2/F11 (STILL OPEN, −5 each) — the single largest remaining Site Integrity lever (+10 combined if both close).
3. Recut Module 1.1 founder-on-lens (still open from prior versions) and credit Mehmet on the Courses hub.

## Hypothesis Validation — 35.6 / 100

Unchanged from v1.9.100: 15 × 55 + 17 × 20 + 1 × 10 = **1175 / 33 = 35.6**. 0 table/entry mismatches re-verified fresh against `4_Formula/HYPOTHESIS.md`'s own per-hypothesis Status lines (not the Summary Table, per this skill's known drift risk) — no content in that file changed in this run, only its file path (`HYPOTHESIS.md` → `4_Formula/HYPOTHESIS.md`).

## Site Integrity — 80.0 / 100

- Acidity F2/F11 STILL OPEN: −10 (unchanged from v1.9.100).
- Acidity F3/F7/F9/F12 PARTIALLY ADDRESSED: −10 (unchanged from v1.9.100).
- Uncommitted work: **0** — was −10 in v1.9.100; both RULE-005 refactor commits (`566e1e1` root-reorg, `79c78e3` link-fix follow-up) are committed and pushed. `git status --porcelain` returns clean.
- Broken links: **0**, re-verified fresh via a full `src=`/`href=`/`url()` sweep across all 303 HTML pages (custom Python link checker, target-existence check per referencing file's own directory) after the refactor. The refactor's own follow-up commit (`79c78e3`) exists specifically because this sweep caught and fixed a real regression class (self-moved pages' internal links not re-based to their new directory depth) before this report was run.
- Orphaned pages: **0**, re-verified via a reachability graph over every `href="*.html"` across all 303 pages plus `5_Symbols/toolbox/nav.js`'s `groups`/`searchIndex` arrays.
- `4_Formula/HYPOTHESIS.md` table/entry mismatches: **0**.
- Cross-file numeric contradictions: **0** (unchanged — no business figures were touched by this refactor).

100 − 10 − 10 = **80.0**.

## Highest-leverage next action

Resolve acidity findings F2 and F11 (STILL OPEN) — the largest remaining Site Integrity deduction (−10 combined) and the only lever this run identified that doesn't require new customer evidence to move. Executing and measuring the Sony ZV-1 / LinkedIn mitigation plan (H3) remains the only path that can move the business-confidence number itself, since Hypothesis Validation is 70% of the overall score.
