# Business Model Confidence Report — v1.7.0

**Date:** 2026-08-11
**Produced by:** the `business-model-sanity-check` skill (`.claude/skills/business-model-sanity-check/SKILL.md`)
**What changed vs. v1.6.5:** Added **H25** — certification value is bifurcating: memorization/tool-syntax certs lose employer trust as AI substitutes recall instantly, while proctored, scenario-based, judgement-verifying certs (including the Claude Certified Architect track this business targets) rise in value, especially in regulated/safety-critical domains. Published `5_Symbols/strategy/cert-value-ai-era.html` and `5_Symbols/hypotheses/hyp-h25.html`. Hypothesis Validation moves from 29.79 (30/100) to 29.4 (29/100) — adding one more ⚪-tier hypothesis pulls the 25-hypothesis average down fractionally. This run's fresh full-repo scan also caught and fixed two site-integrity issues prior versions had missed: **3 real broken links** (`hyp-h23.html` and `evidence-map.html` both linked to a `hyp-h19.html` that was never created; `idea.html` linked to `target-audience.html` with a missing `../strategy/` path segment) and **H24's total absence from the Summary Table and Dependency Map** despite having a full entry since v1.45.0. All fixed in place this run — Site Integrity Score holds at 67.5/100 (the fixes replace what would otherwise have been new deductions, they don't create net-new headroom this run).

---

## Overall Score

# 41 / 100 — Low-moderate confidence

> Hypothesis Validation moves to 29.4% (29/100). Site Integrity holds at 67.5% in the uncommitted state (uncommitted-work deduction is −10). Will rise to 44 once committed.

```
overall = round(0.7 × Hypothesis Validation Score + 0.3 × Site Integrity Score)
        = round(0.7 × 29.40 + 0.3 × 67.50)
        = round(20.58 + 20.25)
        = round(40.83)
        = 41
```

| Sub-score | v1.6.5 | v1.7.0 | Change |
|---|---|---|---|
| Hypothesis Validation Score | 29.8 / 100 | **29.4 / 100** | −0.4 |
| Site Integrity Score | 67.5 / 100 | **67.5 / 100** | 0.0 |
| **Overall** | **41 / 100** | **41 / 100** | **0.0** |

---

## Hypothesis Validation Score — 29.4/100 (displayed 29/100)

Re-derived fresh from each hypothesis's own **Status:** line in `HYPOTHESIS.md` (not the Summary Table, which had drifted — see Finding #6 below).

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
| H25 | Cert value bifurcation: judgement-verifying certs rise, trivia certs decline (new) | ⚪ Planned/Claimed | 20 |

**Sum:** 735 across 25 hypotheses → 735 / 25 = **29.4/100**.

---

## Site Integrity Score — 67.5/100 (unchanged)

Re-checked fresh across all 145 HTML files, per the skill's Step 3:

| # | Finding | v1.6.5 | v1.7.0 | Deduction | Rationale |
|---|---|---|---|---|---|
| 1 | Acidity-check findings still open (F2, F11, F12) | −15 | −15 | −15 | Unchanged (3 findings); latest acidity report is still v1.3.0. |
| 2 | Acidity-check findings partially addressed (F3, F7, F9) | −7.5 | −7.5 | −7.5 | Unchanged (3 findings) |
| 3 | HYPOTHESIS.md table/entry mismatches | 0 | 0 | 0 | **Found 1 this run, fixed in place:** H24 was entirely absent from the Summary Table and Dependency Map despite having a full entry since v1.45.0 — added both rows. All 25 rows now match their entries. |
| 4 | Broken local links | 0 | 0 | 0 | **Found 3 real broken links this run, fixed in place:** `hyp-h23.html` and `evidence-map.html` both linked to `hyp-h19.html`, which was never created (H19 has no dedicated detail page — its detail lives on `stage-timelines.html` — both links repointed there); `idea.html` linked to `target-audience.html` missing its `../strategy/` path segment (`5_Symbols/product/idea.html` → `5_Symbols/strategy/target-audience.html`). Full-repo re-scan after fixes: 0 real broken links (3 remaining regex false-positives inside inline `<script>` template-literal strings in `markdown_renderer.html`, `self-assessment.html`, `latest-pages.html`, none of them real hrefs). |
| 5 | Orphaned pages | 0 | 0 | 0 | Both new pages this run (`cert-value-ai-era.html`, `hyp-h25.html`) registered in `nav.js`'s Strategy dropdown / Hypothesis Detail search entries and reachable via at least one inbound `href` each. Full reachability scan across all 145 pages: 0 orphans. |
| 6 | Headline number cross-file consistency | 0 | 0 | 0 | Consistent. This run's new pages don't restate the $10k/1,000x/$100k/40% figures. |
| 7 | Uncommitted work (`git status --porcelain`) | −10 | −10 | −10 | Working tree still uncommitted at scan time — same pattern as prior runs; clears once this batch is committed. |

**Total deductions: 32.5 → Site Integrity Score: 67.5** (net of the −10 temporary uncommitted-work deduction; would be 77.5/100 immediately after commit, since findings #3 and #4 were fixed rather than newly introduced).

---

## What Would Move the Score

The highest-leverage *business* action remains: **H9** (the $10k Stage 2→3 gate) — two consecutive paid cohort launches combining to $10,000 — since it gates H15, H16, and H19 downstream and is the single biggest lever on the Hypothesis Validation Score.

The highest-leverage *new* hypothesis this run, **H25** (cert value bifurcation), moves off its 20/100 floor the same way H1/H14 already partly have: tracking the actual question-format mix (scenario-based vs. multiple-choice) across major AI-vendor certification launches/revisions over time, and watching for public employer statements about which format they trust post-AI. No such dataset exists yet — this is a founder thesis, clearly labeled as such on `cert-value-ai-era.html`, not a measured result.

---

## Version History

| Version | Date | Overall Score | Note |
|---|---|---|---|
| v1.7.0 | 2026-08-11 | 41 / 100 (Low-moderate) | Added H25 (cert value bifurcation) and published `cert-value-ai-era.html`; Validation moves 29.8→29.4 (30/100→29/100); found and fixed 3 real broken links plus a stale H24 Summary Table/Dependency Map omission; −10 temporary uncommitted-work deduction |
| v1.6.5 | 2026-08-11 | 41 / 100 (Low-moderate) | Created "Your Market Reality Check" page (`5_Symbols/strategy/market-reality-check.html`) detailing JTBD, unspoken insights, value chain, table stakes, and Vonos.ai visual integration; −10 temporary uncommitted-work deduction |
| v1.6.4 | 2026-08-11 | 41 / 100 (Low-moderate) | Created "Tell Us About Your Idea" page (`5_Symbols/product/idea.html`) and linked to it from Business Plan Summary; Validation and Site Integrity hold flat; −10 temporary uncommitted-work deduction |
| v1.6.3 | 2026-08-11 | 41 / 100 (Low-moderate) | Added Skool vs. YouTube comparison page (`skool-vs-youtube.html`) and linked to H4, H5, H7, H8; Validation and Site Integrity hold flat; −10 temporary uncommitted-work deduction |
| v1.6.2 | 2026-08-11 | 41 / 100 (Low-moderate) | Added Claude Partner Strategy page (`claude-partner-strategy.html`) detailing CPN Services Program (Select Tier) benefits and mapping them to Steve Blank's Customer Development stages, cross-linking to H12, H1, H6, and H17; Validation and Site Integrity hold flat; −10 temporary uncommitted-work deduction |
| v1.6.1 | 2026-08-11 | 41 / 100 (Low-moderate) | Added Skool LMS & Community Integration page (`skool-lms-integration.html`) and linked to H5, H8, H21; Validation and Site Integrity hold flat; −10 temporary uncommitted-work deduction |
| v1.6.0 | 2026-08-11 | 41 / 100 (Low-moderate) | Added dedicated Customer Pain Points strategy page (`pain-points.html`) and H24 (Emotional Pain Drivers) detailed card content; Validation rises to 29.8% (30/100); −10 temporary uncommitted-work deduction |
| v1.5.7 | 2026-08-11 | 40 / 100 (Low-moderate) | Added Tuncer's qualitative interview data, published behavior report v1.3.0, and updated all references across the project; −10 temporary uncommitted-work deduction |
| v1.5.6 | 2026-08-11 | 40 / 100 (Low-moderate) | Created `skills-gap.html`, added Delivery Pilots persona, updated stage focuses, and added Skool/badge timelines and live sample widget; −10 temporary uncommitted-work deduction |
| v1.5.5 | 2026-08-11 | 43 / 100 (Low-moderate) | Updated `bmc-channels.html` with volunteer discovery strategy and no-code vs enterprise tool comparison |
| v1.5.4 | 2026-08-11 | 43 / 100 (Low-moderate) | Added Brian's qualitative cohort feedback and updated H5, H20, and all references |
| v1.5.3 | 2026-08-11 | 43 / 100 (Low-moderate) | Created `reports/exam-prep-market-and-student-behavior-v1.3.0.md` with qualitative interview insights, and updated H1, H3, H5, H8, H14, H21 |
| v1.5.2 | 2026-08-11 | 40 / 100 (Low-moderate) | Registered `skills-gap.html` in `nav.js` Strategy dropdown and updated related pages |
| v1.5.1 | 2026-08-11 | 40 / 100 (Low-moderate) | Updated `5_Symbols/bmc/bmc-channels.html` and compared no-code/free vs paid enterprise tools |
| v1.5.0 | 2026-08-11 | 40 / 100 (Low-moderate) | Added `reports/exam-prep-market-and-student-behavior-v1.2.0.md` with Sude's interview insights, and updated H5, H8, H20, H21 |
| v1.0.3 | 2026-08-05 | 44 / 100 (Low-moderate) | Added Google Trends link and founder read to H1, plus WhatsApp cohort/referral signals |
