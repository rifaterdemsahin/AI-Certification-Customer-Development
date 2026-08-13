> **Superseded by [`business-model-confidence-v1.9.4.md`](business-model-confidence-v1.9.4.md) (2026-08-12)** — founder-only Skool board seeding sanity check; hypothesis validation and overall score hold flat at 41. Kept as historical record.

# Business Model Confidence Report — v1.9.3

**Date:** 2026-08-12
**Produced by:** the `business-model-sanity-check` skill (`.claude/skills/business-model-sanity-check/SKILL.md`)
**What changed vs. v1.8.0 and v1.9.2:** This is the **final reconciliation of two independently-diverged git branches** that each forked from the same v1.50.0 base and separately incremented v1.51.0–v1.53.0 with unrelated content. One side (this repo's `origin/main`) added the Site Map page, then its own **H25** ("Cert Value in the AI Era"), and had already merged a third, earlier Site Map sub-branch into its own `v1.8.0` report (41/100, 25 hypotheses). The other side (this branch, working locally) added **H27** (renumbered from a colliding H25 — the practice-exam/question-bank gap) and **H28** (renumbered from a colliding H26 — a YouTube engagement-rate benchmark), publishing its own `v1.9.2` report (42/100, 26 hypotheses) along the way. Both sides independently discovered and fixed the *same* 2 pre-existing broken links (`hyp-h19.html` referenced from `hyp-h23.html`/`evidence-map.html`; the missing `../strategy/` prefix on `idea.html`'s `target-audience.html` link) and the *same* H24-missing-from-Summary-Table gap — neither fix conflicts with the other, so both carry through this merge cleanly. This run rescans the fully-merged tree from scratch: Site Map, `cert-value-ai-era.html` (H25), `practice-exams-gap.html` (H27), `youtube-channel-metrics.html` (H28) — **27 hypotheses total**.

---

## Overall Score

# 41 / 100 — Low-moderate confidence

> Hypothesis Validation is 30.0% (30/100) — 27 hypotheses now tracked, essentially unchanged from v1.8.0's 29.4% and v1.9.2's 30.4% since the two added hypotheses (H25, H28) both land at the same ⚪ Planned score (20) as most of the pre-existing average. Site Integrity is 67.5% — identical to both source branches' fixed state, since neither branch's broken-link/H24-table fix touched a line the other side also changed. Still carries the usual −10 uncommitted-merge deduction; will rise to 77.5 (overall 44) once this merge commit lands.

```
overall = round(0.7 × Hypothesis Validation Score + 0.3 × Site Integrity Score)
        = round(0.7 × 30.00 + 0.3 × 67.50)
        = round(21.00 + 20.25)
        = round(41.25)
        = 41
```

| Sub-score | v1.8.0 (origin, 25H) | v1.9.2 (this branch, 26H) | v1.9.3 (merged, 27H) |
|---|---|---|---|
| Hypothesis Validation Score | 29.4 / 100 | 30.4 / 100 | **30.0 / 100** |
| Site Integrity Score | 67.5 / 100 | 67.5 / 100 | **67.5 / 100** |
| **Overall** | **41 / 100** | **42 / 100** | **41 / 100** |

---

## Hypothesis Validation Score — 30.0/100 (displayed 30/100)

Re-derived fresh from each hypothesis's own **Status:** line in the merged `HYPOTHESIS.md`. All 25 hypotheses common to both branches hold the same status emoji as before; **H25** (Cert Value bifurcation, from `origin/main`) and **H28** (YouTube engagement benchmark, from this branch, renumbered from H26) are new to this merged view.

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
| H25 | Cert value bifurcation: judgement rises, trivia declines | ⚪ Planned/Claimed | 20 |
| H27 | Practice exam & question bank gap is a critical value blocker | 🟡 In Testing | 55 |
| H28 | YouTube engagement rate benchmark | ⚪ Planned | 20 |

**Sum:** 810 across 27 hypotheses → 810 / 27 = **30.00% → 30/100**.

---

## Site Integrity Score — 67.5/100

Re-checked fresh across the fully-merged HTML tree:

| # | Finding | Deduction | Rationale |
|---|---|---|---|
| 1 | Acidity-check findings still open (F2, F11, F12) | −15 | Unchanged (3 findings) — not re-audited this run, carried forward. |
| 2 | Acidity-check findings partially addressed (F3, F7, F9) | −7.5 | Unchanged (3 findings) — carried forward. |
| 3 | HYPOTHESIS.md table/entry mismatches | 0 | All 27 Summary Table rows match their entries. Both branches independently fixed the same H24-missing-from-table gap; the merge carries a single fix forward. |
| 4 | Broken local links | 0 | Both branches independently found and fixed the same 2 broken-link targets. Full re-scan of every `href` across the merged tree (~150 HTML files): 0 real broken links (3 remaining matches are inline JS template-literal strings, known false positives). |
| 5 | Orphaned pages | 0 | Full reachability scan confirms every page from both branches — `sitemap.html`, `cert-value-ai-era.html`, `hyp-h25.html`, `youtube-channel-metrics.html`, `hyp-h28.html`, `practice-exams-gap.html` — is registered in `nav.js` and cross-linked. |
| 6 | Headline number cross-file consistency | 0 | Consistent across the merged tree. |
| 7 | Uncommitted work (`git status --porcelain`) | −10 | The merge itself is not yet committed at scan time. Clears once this merge commit lands. |

**Total deductions: 32.5 (15 + 7.5 + 10) → Site Integrity Score: 67.5**

---

## What Would Move the Score

1. **Commit this merge** — clears the −10 uncommitted deduction immediately (Site Integrity → 77.5, overall → 44).
2. **H9** ($10k Stage 2→3 gate) remains the single highest-leverage hypothesis on the site — it gates H15, H16, and H19 downstream.
3. **H27** (practice-exam gap) is the cheapest hypothesis to move next — it already has production evidence (2/60 questions live in Skool); crossing a meaningful fraction of the question bank and logging attendee demand would be the next status-tier move.
4. **H28** (YouTube engagement benchmark) moves from ⚪ Planned to 🟡 In Testing the moment even one video has like/comment/share counts logged alongside its retention data at `content-analysis.html`.
5. **H25** (Cert value bifurcation) needs a tracked dataset of certification-format changes across vendors — currently a founder thesis, not yet a measured trend.
6. **Acidity findings F2/F11/F12 (still open)** are worth −15 combined; resolving any one is the next-highest site-integrity lever after this commit.

---

## Version History

| Version | Date | Overall Score | Note |
|---|---|---|---|
| v1.9.3 | 2026-08-12 | 41 / 100 (Low-moderate) | **Final merge reconciliation** of two independently-diverged branches (Site Map + H25 Cert Value from origin; H27 practice-exam-gap + H28 YouTube benchmark from this branch) — 27 hypotheses, both branches' broken-link/H24-table fixes carry through cleanly |
| v1.9.2 (this branch) | 2026-08-12 | 42 / 100 (Low-moderate) | Added H28 (then H26) and its pages; fixed 2 broken-link targets; backfilled H24's missing rows — superseded by this merge |
| v1.8.0 (origin/main) | 2026-08-11 | 41 / 100 (Low-moderate) | Merged Site Map + H25 (Cert Value) sub-branches on origin; fixed the same 2 broken-link targets and H24 gap independently — superseded by this merge |
| v1.9.1 and earlier (this branch) | — | — | See `reports/business-model-confidence-v1.9.2.md` for this branch's prior history. |
| v1.7.0 and earlier (origin/main) | — | — | See `reports/business-model-confidence-v1.8.0.md` for origin's prior history. |
