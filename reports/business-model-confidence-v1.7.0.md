> **Superseded by [v1.9.0](business-model-confidence-v1.9.0.md)** — this file's own branch (this report's line of descent: v1.7.0 → v1.7.1) and `main`'s independent merge (v1.7.0 → v1.8.0) were reconciled together as v1.9.0.

# Business Model Confidence Report — v1.7.0

**Date:** 2026-08-11
**Produced by:** the `business-model-sanity-check` skill (`.claude/skills/business-model-sanity-check/SKILL.md`)
**What changed vs. v1.6.5:** minor bump — this run adds `5_Symbols/dashboard/sitemap.html` (a searchable Site Map with Logical/A&ndash;Z sort modes, no new hypothesis, same navigation-tooling category as `latest-pages.html`) **and** a fresh full-repo re-scan surfaced 2 genuinely new, pre-existing findings that predate this batch and were missed by v1.6.5: (1) **3 real broken links** — `5_Symbols/hypotheses/hyp-h23.html` and `5_Symbols/strategy/evidence-map.html` both link to `hyp-h19.html`, which has never existed (H19 has no standalone detail page; it links out via `stage-timelines.html`/`hypothesis.html` instead), and `5_Symbols/product/idea.html` links to `target-audience.html` with a path missing the `../strategy/` prefix; (2) **H24 is missing from `HYPOTHESIS.md`'s own Summary Table** — it has a full entry (added in v1.6.0's changelog) but was never added as a table row, so the table now covers only 23 of the tracker's 24 hypotheses. Neither finding was introduced by the Site Map addition; both are flagged, not fixed, per this skill's report-only scope for issues outside the current batch. **Result: the overall score is 38/100, down from 41/100** — Hypothesis Validation holds flat at 29.8 (30/100, sitemap.html carries no hypothesis); Site Integrity drops from 67.5 to 57.5 as these 2 newly-discovered findings (−15 for the broken links, −5 for the missing table row) outweigh the uncommitted-work deduction clearing (−10 → 0, this batch is committed as part of this run).

---

## Overall Score

# 38 / 100 — Low-moderate confidence

> Hypothesis Validation holds flat at 29.8/100 — the Site Map is pure navigation tooling with no falsifiable claim. Site Integrity drops from 67.5 to 57.5: a fresh full-repo re-scan (prompted by this batch, not part of it) found 3 real broken links and 1 missing Summary Table row that predate this change and were missed by the last several report runs — a −20 net deduction that swamps the −10 uncommitted-work clearance.

```
overall = round(0.7 × Hypothesis Validation Score + 0.3 × Site Integrity Score)
        = round(0.7 × 29.79 + 0.3 × 57.50)
        = round(20.85 + 17.25)
        = round(38.10)
        = 38
```

| Sub-score | v1.6.5 | v1.7.0 | Change |
|---|---|---|---|
| Hypothesis Validation Score | 29.8 / 100 | **29.8 / 100** | — |
| Site Integrity Score | 67.5 / 100 | **57.5 / 100** | −10.0 |
| **Overall** | **41 / 100** | **38 / 100** | **−3** |

---

## Hypothesis Validation Score — 29.8/100 (displayed 30/100)

Re-derived fresh from each hypothesis's own **Status:** line in `HYPOTHESIS.md`. No status tier changed since v1.6.5 — table unchanged from that version.

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

**Sum:** 715 across 24 hypotheses → 715 / 24 = **29.791… → 30/100** (unchanged).

---

## Site Integrity Score — 57.5/100 (down from 67.5)

Re-checked fresh across all 144 HTML files (up from ~140 — this batch's `sitemap.html`), per the skill's Step 3:

| # | Finding | v1.6.5 | v1.7.0 | Deduction | Rationale |
|---|---|---|---|---|---|
| 1 | Acidity-check findings still open (F2, F11, F12) | −15 | −15 | −15 | Unchanged (3 findings, latest acidity report still v1.3.0) |
| 2 | Acidity-check findings partially addressed (F3, F7, F9) | −7.5 | −7.5 | −7.5 | Unchanged (3 findings) |
| 3 | HYPOTHESIS.md table/entry mismatches | 0 | **−5 (new)** | −5 | **H24 has a full entry (`### H24`, added per the v1.6.0 changelog) but no row in the Summary Table** — the table lists H1–H23 only, so it now covers 23 of 24 tracked hypotheses. Not a status-emoji mismatch (the other 23 rows match their entries exactly) but the same category of drift: the table no longer mirrors the tracker it summarizes. |
| 4 | Broken local links | 0 | **−15 (new)** | −15 | Full-repo scan, 144 HTML files, found **3 real broken links** (beyond the 4 known false positives inside inline JS template-literal strings, including this batch's own `sitemap.html`): (a) `5_Symbols/hypotheses/hyp-h23.html` links to `hyp-h19.html`, which has never existed — H19 has no standalone detail page, it links out via `stage-timelines.html`/`hypothesis.html` instead (same gap this skill's v1.4.x runs already found and fixed on the 90-Day Execution Plan page); (b) `5_Symbols/strategy/evidence-map.html` makes the identical `hyp-h19.html` mistake in its Hypothesis → Evidence Matrix row; (c) `5_Symbols/product/idea.html` links to `target-audience.html` without the `../strategy/` prefix its actual location (`5_Symbols/strategy/target-audience.html`) requires. None of these three files are part of this batch — flagged, not fixed, to keep this run scoped to the Site Map addition. |
| 5 | Orphaned pages | 0 | 0 | 0 | 0 orphans found — every one of the 144 HTML files (except `index.html`) is reachable via `href` or `nav.js`. `sitemap.html` itself confirmed reachable (registered in `nav.js`, linked from `index.html` and `latest-pages.html`). |
| 6 | Headline number cross-file consistency | 0 | 0 | 0 | $10,000 / 1,000x / $100,000 / >40% all consistent; no stray currency variants found |
| 7 | Uncommitted work (`git status --porcelain`) | −10 | 0 | 0 | Cleared — this run's batch (`sitemap.html` new, plus `nav.js`, `index.html`, `latest-pages.html` edited for registration/cross-linking) is committed as part of this same run |

**Total deductions: 42.5 → Site Integrity Score: 57.5**

---

## What Would Move the Score

**Two pure housekeeping fixes, unrelated to this batch, would recover most of the drop:** (1) fix the 3 broken links — repoint `hyp-h23.html` and `evidence-map.html`'s `hyp-h19.html` references to `../stage/growth/stage-timelines.html` or `hypothesis.html` (matching how every other H19 reference on the site already links), and add the missing `../strategy/` prefix to `idea.html`'s `target-audience.html` link; (2) add H24 as a row to `HYPOTHESIS.md`'s Summary Table. Together these clear −20, returning Site Integrity to ~77.5 and the overall score to ~50.

Beyond that, the highest-leverage *business* action remains unchanged: **H9** (the $10k Stage 2→3 gate) — two consecutive paid cohort launches combining to $10,000 — since it gates H15, H16, and H19 downstream and is the single biggest lever on the Hypothesis Validation Score.

---

## Version History

| Version | Date | Overall Score | Note |
|---|---|---|---|
| v1.7.0 | 2026-08-11 | 38 / 100 (Low-moderate) | Added Site Map page (`sitemap.html`, nav tooling, no new hypothesis); fresh re-scan found 3 pre-existing broken links + H24 missing from Summary Table, both newly flagged (−20 net vs. −10 uncommitted-work clearance) |
| v1.6.5 | 2026-08-11 | 41 / 100 (Low-moderate) | Created "Your Market Reality Check" page; −10 temporary uncommitted-work deduction |
| v1.6.4 | 2026-08-11 | 41 / 100 (Low-moderate) | Created "Tell Us About Your Idea" page (`5_Symbols/product/idea.html`) |
| v1.6.3 | 2026-08-11 | 41 / 100 (Low-moderate) | Added Skool vs. YouTube comparison page |
| v1.6.2 | 2026-08-11 | 41 / 100 (Low-moderate) | Added Claude Partner Strategy page |
| v1.6.1 | 2026-08-11 | 41 / 100 (Low-moderate) | Added Skool LMS & Community Integration page |
| v1.6.0 | 2026-08-11 | 41 / 100 (Low-moderate) | Added Customer Pain Points page and H24 (Emotional Pain Drivers) |
| v1.5.7 | 2026-08-11 | 40 / 100 (Low-moderate) | Added Tuncer's qualitative interview data |
| v1.5.6 | 2026-08-11 | 40 / 100 (Low-moderate) | Created `skills-gap.html`, added Delivery Pilots persona |
| v1.5.5 | 2026-08-11 | 43 / 100 (Low-moderate) | Updated `bmc-channels.html` |
| v1.5.4 | 2026-08-11 | 43 / 100 (Low-moderate) | Added Brian's qualitative cohort feedback |
| v1.5.3 | 2026-08-11 | 43 / 100 (Low-moderate) | Created exam-prep-market-and-student-behavior v1.3.0 |
| v1.5.2 | 2026-08-11 | 40 / 100 (Low-moderate) | Registered `skills-gap.html` in nav |
| v1.5.1 | 2026-08-11 | 40 / 100 (Low-moderate) | Updated `bmc-channels.html` |
| v1.5.0 | 2026-08-11 | 40 / 100 (Low-moderate) | Added exam-prep-market-and-student-behavior v1.2.0 |
| v1.4.3 | 2026-08-09 | 40 / 100 (Low-moderate) | Day-by-Day Calendar appended to 90-Day Execution Plan; corrected a Nov 7 → Nov 6 date off-by-one |
| v1.0.3 | 2026-08-05 | 44 / 100 (Low-moderate) | Added Google Trends link and founder read to H1 |
