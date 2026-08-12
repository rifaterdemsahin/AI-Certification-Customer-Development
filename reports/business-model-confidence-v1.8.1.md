# Business Model Confidence Report — v1.8.1

**Date:** 2026-08-11
**Produced by:** the `business-model-sanity-check` skill (`.claude/skills/business-model-sanity-check/SKILL.md`)
**What changed vs. v1.8.0:** patch bump — merges a third concurrent branch (`claude/youtube-titles-skool-mapping-09l2jx`) into the already-reconciled `v1.8.0` state (Site Map + H25/cert-value-ai-era). That branch added `5_Symbols/growth/youtube-titles-skool-mapping.html` (maps 8 YouTube title ideas to Skool landing destinations, cites H4/H5/H7/H21, asserts no new hypothesis) and its own now-superseded `business-model-confidence-v1.7.1.md` run. A full re-scan of the fully-merged tree (three branches combined) finds no new broken links, no new orphans, and no hypothesis-status change from this addition — and this merge commit itself clears the uncommitted-work deduction that v1.8.0 was still carrying. **Result: the overall score rises to 44/100, up from 41** — Hypothesis Validation holds flat at 29.4 (29/100, 25 hypotheses, unaffected by a hypothesis-free page); Site Integrity rises from 67.5 to 77.5 purely from the uncommitted-work deduction clearing (this merge is committed as part of this run) — the same "will rise once committed" note v1.8.0 itself flagged.

---

## Overall Score

# 44 / 100 — Low-moderate confidence

> Hypothesis Validation holds flat at 29.4/100 — the newly-merged YouTube Titles → Skool Mapping page is a content/funnel-planning artifact citing existing hypotheses (H4, H5, H7, H21), not a new falsifiable claim. Site Integrity rises to 77.5/100 as this three-way merge commits, clearing the −10 uncommitted-work deduction v1.8.0 was carrying — the fixed broken links, the H24 table row, and 0 orphans across all 147 HTML files all still hold.

```
overall = round(0.7 × Hypothesis Validation Score + 0.3 × Site Integrity Score)
        = round(0.7 × 29.40 + 0.3 × 77.50)
        = round(20.58 + 23.25)
        = round(43.83)
        = 44
```

| Sub-score | v1.8.0 | v1.8.1 | Change |
|---|---|---|---|
| Hypothesis Validation Score | 29.4 / 100 | **29.4 / 100** | — |
| Site Integrity Score | 67.5 / 100 | **77.5 / 100** | +10.0 |
| **Overall** | **41 / 100** | **44 / 100** | **+3** |

---

## Hypothesis Validation Score — 29.4/100 (displayed 29/100)

Re-derived fresh from each hypothesis's own **Status:** line in `HYPOTHESIS.md`. Unchanged from v1.8.0 — this merge's only content addition (the Skool-mapping page) carries no hypothesis of its own.

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

**Sum:** 735 across 25 hypotheses → 735 / 25 = **29.4/100** (unchanged).

---

## Site Integrity Score — 77.5/100 (up from 67.5)

Re-checked fresh across all 147 HTML files (up from 146 — this merge's `youtube-titles-skool-mapping.html`), per the skill's Step 3:

| # | Finding | v1.8.0 | v1.8.1 | Deduction | Rationale |
|---|---|---|---|---|---|
| 1 | Acidity-check findings still open (F2, F11, F12) | −15 | −15 | −15 | Unchanged (3 findings, latest acidity report still v1.3.0) |
| 2 | Acidity-check findings partially addressed (F3, F7, F9) | −7.5 | −7.5 | −7.5 | Unchanged (3 findings) |
| 3 | HYPOTHESIS.md table/entry mismatches | 0 | 0 | 0 | All 25 rows still match their entries; this merge doesn't touch the Summary Table. |
| 4 | Broken local links | 0 | 0 | 0 | Full re-scan, 147 HTML files: 0 real broken links (4 known false positives inside inline JS template-literal strings, unchanged). The newly-merged page's own links (to `marketing-tactics.html`, `../hypotheses/hyp-h4.html`/`h5`/`h7`/`h21`, `../product/skool-lms-integration.html`, `../product/skool-vs-youtube.html`, `../product/self-assessment.html`, `funnel-math.html`, `../strategy/target-audience.html`) all resolve correctly. |
| 5 | Orphaned pages | 0 | 0 | 0 | 0 orphans. The newly-merged page is registered in `nav.js`'s Growth dropdown and search index, added to `latest-pages.html`'s curated list, and cross-linked from `marketing-tactics.html`. |
| 6 | Headline number cross-file consistency | 0 | 0 | 0 | $10,000 / 1,000x / $100,000 / >40% all consistent; no stray currency variants found. |
| 7 | Uncommitted work (`git status --porcelain`) | −10 | 0 | 0 | Cleared — this three-way merge (Site Map + H25/cert-value-ai-era + YouTube Titles → Skool Mapping) is committed as part of this same run. |

**Total deductions: 22.5 → Site Integrity Score: 77.5**

---

## What Would Move the Score

Unchanged from v1.8.0 — the highest-leverage *business* action remains **H9** (the $10k Stage 2→3 gate) — two consecutive paid cohort launches combining to $10,000 — since it gates H15, H16, and H19 downstream and is the single biggest lever on the Hypothesis Validation Score.

Site Integrity is now capped only by the 3 acidity-check findings (F2, F11, F12 still open; F3, F7, F9 partially addressed) — all of which require real evidence (a search-volume dataset, a churn/renewal dataset, a completed pilot, a modeled cost sheet, or real bundle sales data), not further page edits. There is no remaining housekeeping fix left to recover — the two easy wins (broken links, H24 table row) that drove the last several reports' deductions are now both resolved and stable across this three-way merge.

---

## Version History

| Version | Date | Overall Score | Note |
|---|---|---|---|
| v1.8.1 | 2026-08-11 | 44 / 100 (Low-moderate) | Merged a third concurrent branch (YouTube Titles → Skool Content Mapping, cites H4/H5/H7/H21, no new hypothesis) into the already-reconciled v1.8.0 state; score rises to 44 purely from the uncommitted-work deduction clearing on this merge commit |
| v1.8.0 | 2026-08-11 | 41 / 100 (Low-moderate) | Merged two concurrent branches (Site Map + H25/cert-value-ai-era.html) that had independently published colliding `v1.7.0` reports; recomputed fresh against the fully-merged state |
| v1.7.1 (Skool-mapping branch, superseded) | 2026-08-11 | 38 / 100 (Low-moderate) | Added YouTube Titles → Skool Content Mapping page on top of that branch's own v1.7.0 snapshot; superseded by this merge before reaching `main` |
| v1.7.0 (H25 branch) | 2026-08-11 | 41 / 100 (Low-moderate) | Added H25 (cert value bifurcation) and published `cert-value-ai-era.html`; found and fixed 3 real broken links plus a stale H24 Summary Table omission |
| v1.7.0 (Site Map branch) | 2026-08-11 | 38 / 100 (Low-moderate) | Added Site Map page (nav tooling, no new hypothesis); fresh re-scan found 3 pre-existing broken links + H24 missing from Summary Table, flagged not fixed |
| v1.6.5 | 2026-08-11 | 41 / 100 (Low-moderate) | Created "Your Market Reality Check" page; −10 temporary uncommitted-work deduction |
| v1.6.4 | 2026-08-11 | 41 / 100 (Low-moderate) | Created "Tell Us About Your Idea" page (`5_Symbols/product/idea.html`) |
| v1.6.3 | 2026-08-11 | 41 / 100 (Low-moderate) | Added Skool vs. YouTube comparison page |
| v1.6.2 | 2026-08-11 | 41 / 100 (Low-moderate) | Added Claude Partner Strategy page |
| v1.6.1 | 2026-08-11 | 41 / 100 (Low-moderate) | Added Skool LMS & Community Integration page |
| v1.6.0 | 2026-08-11 | 41 / 100 (Low-moderate) | Added Customer Pain Points page and H24 (Emotional Pain Drivers) |
| v1.0.3 | 2026-08-05 | 44 / 100 (Low-moderate) | Added Google Trends link and founder read to H1 |
