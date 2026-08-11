# Business Model Confidence Report — v1.7.1

**Date:** 2026-08-11
**Produced by:** the `business-model-sanity-check` skill (`.claude/skills/business-model-sanity-check/SKILL.md`)
**What changed vs. v1.7.0:** patch bump — this run adds `5_Symbols/growth/youtube-titles-skool-mapping.html` (maps 8 YouTube title ideas to one of four Skool landing destinations, each with a rationale; cites H4, H5, H7, and H21 but asserts no new hypothesis of its own). A fresh full-repo re-scan confirms the same 3 broken links and the same H24-missing-from-Summary-Table gap already flagged in v1.7.0 are still present and still untouched by this batch — no new integrity findings introduced, none of the pre-existing ones fixed. **Result: the overall score holds flat at 38/100** — Hypothesis Validation unchanged at 29.8 (30/100, this batch carries no hypothesis status change); Site Integrity unchanged at 57.5 (same deduction set as v1.7.0, with the uncommitted-work deduction clearing to 0 once this batch is committed alongside this report, matching the pattern of every prior patch run).

---

## Overall Score

# 38 / 100 — Low-moderate confidence

> Hypothesis Validation holds flat at 29.8/100 — the new page is a content/funnel-planning artifact citing existing hypotheses, not a new falsifiable claim. Site Integrity holds flat at 57.5/100 — the same 3 pre-existing broken links and 1 missing Summary Table row from v1.7.0 remain open; this batch introduces no new broken links or orphaned pages, and clears its own uncommitted-work deduction by being committed as part of this run.

```
overall = round(0.7 × Hypothesis Validation Score + 0.3 × Site Integrity Score)
        = round(0.7 × 29.79 + 0.3 × 57.50)
        = round(20.85 + 17.25)
        = round(38.10)
        = 38
```

| Sub-score | v1.7.0 | v1.7.1 | Change |
|---|---|---|---|
| Hypothesis Validation Score | 29.8 / 100 | **29.8 / 100** | — |
| Site Integrity Score | 57.5 / 100 | **57.5 / 100** | — |
| **Overall** | **38 / 100** | **38 / 100** | **—** |

---

## Hypothesis Validation Score — 29.8/100 (displayed 30/100)

Re-derived fresh from each hypothesis's own **Status:** line in `HYPOTHESIS.md`. No status tier changed since v1.7.0 — table unchanged. This batch added the new page's path to H4, H5, H7, and H21's `Source:` lines only; none of their `Status:` lines moved.

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

## Site Integrity Score — 57.5/100 (unchanged)

Re-checked fresh across all 145 HTML files (up from 144 — this batch's `youtube-titles-skool-mapping.html`), per the skill's Step 3:

| # | Finding | v1.7.0 | v1.7.1 | Deduction | Rationale |
|---|---|---|---|---|---|
| 1 | Acidity-check findings still open (F2, F11, F12) | −15 | −15 | −15 | Unchanged (3 findings, latest acidity report still v1.3.0) |
| 2 | Acidity-check findings partially addressed (F3, F7, F9) | −7.5 | −7.5 | −7.5 | Unchanged (3 findings) |
| 3 | HYPOTHESIS.md table/entry mismatches | −5 | −5 | −5 | Still open — `H24` has a full entry but no Summary Table row (table still lists H1–H23 only, 23 of 24 tracked hypotheses). Not touched by this batch. |
| 4 | Broken local links | −15 | −15 | −15 | Full-repo re-scan (145 HTML files) confirms the same 3 real broken links from v1.7.0, unchanged: (a) `5_Symbols/hypotheses/hyp-h23.html` → `hyp-h19.html` (never existed); (b) `5_Symbols/strategy/evidence-map.html` → the same nonexistent `hyp-h19.html`; (c) `5_Symbols/product/idea.html` → `target-audience.html` missing its `../strategy/` prefix. The new page's own links (to `marketing-tactics.html`, `../hypotheses/hyp-h4.html`/`h5`/`h7`/`h21`, `../product/skool-lms-integration.html`, `../product/skool-vs-youtube.html`, `../product/self-assessment.html`, `funnel-math.html`, `../strategy/target-audience.html`) all resolve correctly — 0 new broken links introduced. |
| 5 | Orphaned pages | 0 | 0 | 0 | 0 orphans found. The new page is registered in `nav.js`'s Growth dropdown and search index, added to `latest-pages.html`'s curated list, and cross-linked from `marketing-tactics.html` — reachable by both `href` and `nav.js`. |
| 6 | Headline number cross-file consistency | 0 | 0 | 0 | $10,000 / 1,000x / $100,000 / >40% all consistent; no stray currency variants found (checked including the new page's $10/mo, $29, and $250–$500 references, all matching the canonical figures) |
| 7 | Uncommitted work (`git status --porcelain`) | 0 | 0 | 0 | This batch (`youtube-titles-skool-mapping.html` new; `nav.js`, `marketing-tactics.html`, `latest-pages.html`, `HYPOTHESIS.md` edited for registration/cross-linking) is committed as part of this same run |

**Total deductions: 42.5 → Site Integrity Score: 57.5**

---

## What Would Move the Score

**Unchanged from v1.7.0 — the same two pure housekeeping fixes would recover most of the standing deduction**, and remain untouched by this batch on purpose (out of scope for the page addition this run was scoped to): (1) fix the 3 broken links — repoint `hyp-h23.html` and `evidence-map.html`'s `hyp-h19.html` references to `../growth/stage-timelines.html` or `hypothesis.html` (matching how every other H19 reference on the site already links), and add the missing `../strategy/` prefix to `idea.html`'s `target-audience.html` link; (2) add H24 as a row to `HYPOTHESIS.md`'s Summary Table. Together these clear −20, returning Site Integrity to ~77.5 and the overall score to ~50.

Beyond that, the highest-leverage *business* action remains unchanged: **H9** (the $10k Stage 2→3 gate) — two consecutive paid cohort launches combining to $10,000 — since it gates H15, H16, and H19 downstream and is the single biggest lever on the Hypothesis Validation Score. This run's new page is a planning artifact for the content that would eventually drive traffic toward that gate (via H4/H5/H7), but it does not itself move H9, H4, H5, H7, or H21's status — none of those hypotheses gain new *measured* evidence until actual titles are published and actual click/conversion data is logged against them.

---

## Version History

| Version | Date | Overall Score | Note |
|---|---|---|---|
| v1.7.1 | 2026-08-11 | 38 / 100 (Low-moderate) | Added YouTube Titles → Skool Content Mapping page (`youtube-titles-skool-mapping.html`, cites H4/H5/H7/H21, no new hypothesis); score holds flat — same 3 broken links + missing H24 table row from v1.7.0, no new findings |
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
