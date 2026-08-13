> **Superseded by** [`reports/business-model-confidence-v1.9.9.md`](business-model-confidence-v1.9.9.md). Numbers below are the historical record for this run — do not edit in place.

# Business Model Confidence Report — v1.9.8

**Date:** 2026-08-13  
**Produced by:** the `business-model-sanity-check` skill (`.claude/skills/business-model-sanity-check/SKILL.md`)  
**What changed vs. v1.9.7:** patch bump — added `5_Symbols/product/vc-feedback.html`, a constructive venture-partner memo (VF1–VF8) with cited rationale and a close-the-note checklist. No new hypothesis. No status-tier change.

---

## Overall Score

# 41 / 100 — Low-moderate confidence

> Hypothesis Validation holds at **30.0/100** (27 hypotheses; no status emoji changes). Site Integrity holds at **67.5/100** (0 broken links after retargeting two H27 links to `practice-exams-gap.html`; 0 orphans; −10 uncommitted-work already applied to this working tree, not stacked for the new page; acidity findings carried forward). Overall remains **41**. A low-moderate score at this stage is expected — most Stage 2/3 bets are still open. A partner memo does not raise the score; paid evidence does.

```
overall = round(0.7 × Hypothesis Validation Score + 0.3 × Site Integrity Score)
        = round(0.7 × 30.00 + 0.3 × 67.50)
        = round(21.00 + 20.25)
        = round(41.25)
        = 41
```

| Sub-score | v1.9.7 | v1.9.8 (this run) |
|---|---|---|
| Hypothesis Validation Score | 30.0 / 100 | **30.0 / 100** |
| Site Integrity Score | 67.5 / 100 | **67.5 / 100** |
| **Overall** | **41 / 100** | **41 / 100** |

---

## Hypothesis Validation Score — 30/100

Re-derived fresh from each hypothesis's own **Status:** line in `HYPOTHESIS.md`. All 27 hypotheses keep the same status emoji as v1.9.7.

| ID | Hypothesis (one line) | Status | Score |
|---|---|---|---|
| H1 | Rising AI skills expectations (named R.A.I.S.E.) | 🟡 Partially validated | 55 |
| H2 | Animated content beats standard formats | 🟡 In Testing | 55 |
| H3 | Audience will pay for cert prep | 🟡 In Progress | 55 |
| H4 | YouTube funnel → ~1% paid membership | 🟡 In Testing | 55 |
| H5 | Cohorts sell out organically | ⚪ Hypothesized | 20 |
| H6 | TAM/SAM/SOM market sizing | ⚠️ Claimed, partially grounded | 10 |
| H7 | Funnel CTR/conversion rates | ⚪ Hypothesized | 20 |
| H8 | Cohort delivers exam-ready PMF | ⚪ Hypothesized | 20 |
| H9 | $10k Stage 2 exit gate (2-launch repeat) | ⚪ Hypothesized/Decided | 20 |
| H10 | >40% retention = MVP metric | 🟡 In Testing | 55 |
| H11 | $100k ARR → hiring threshold | ⚪ Hypothesized | 20 |
| H12 | B2B consulting/gov-contractor channel | ⚪ Planned | 20 |
| H13 | 1,000x subscriber growth | ⚪ Planned | 20 |
| H14 | Multi-certification expansion | ⚪ Planned | 20 |
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

Source-line additions on H5, H6, H9, H12, and H22 point at `vc-feedback.html`. That is citation, not new evidence — status tiers unchanged.

---

## Site Integrity Score — 67.5/100

| # | Finding | Deduction | Rationale |
|---|---|---|---|
| 1 | Acidity-check findings still open (F2, F11, F12) | −15 | Carried forward from `acidity-check-report-v1.3.0.md` (3 still-open findings). |
| 2 | Acidity-check findings partially addressed (F3, F7, F9) | −7.5 | Carried forward (3 partial findings). |
| 3 | HYPOTHESIS.md table/entry mismatches | 0 | Leading status emoji matches the Summary Table for every hypothesis. |
| 4 | Broken local links | 0 | Fresh scan of all `*.html` hrefs (scripts stripped). Two first-pass hits on a missing `hyp-h27.html` were retargeted to `practice-exams-gap.html` (there is still no `hyp-h27.html` detail page). Re-scan: 0 broken local targets. |
| 5 | Orphaned pages | 0 | Every `*.html` except `index.html` is reachable via an href or `nav.js`. `vc-feedback.html` is in the Strategy dropdown, search index, hub investor card, and linked from the deck, pitch, moat, risk register, H22, and dictionary. |
| 6 | Headline number cross-file consistency | 0 | $10,000 / $100,000 / 1,000x / >40% appear only in USD and the canonical figures; no £10,000 contradiction on live pages. |
| 7 | Uncommitted work (`git status --porcelain`) | −10 | Same working-tree risk already deducted in v1.9.7; not stacked. The tree now also includes the VC-feedback page and hero. Clears once this combined working-tree batch is committed. |

**Total deductions: 32.5 → Site Integrity Score: 67.5**

Uncommitted-work grouping (this working tree):

- **This run:** `5_Symbols/product/vc-feedback.html`, `5_Symbols/product/vc-feedback-hero.jpg`, plus cross-links on `vc-deck.html`, `pitch-deck.html`, `risk-analysis.html`, `moat.html`, `hyp-h22.html`, `dictionary.html`, `index.html`, `nav.js`, `latest-pages.html`, `HYPOTHESIS.md`, `CLAUDE.md`, `gemini.md`.
- **Still sitting from R.A.I.S.E.:** `raise.html`, `raise-hero.jpg`, and that page's earlier cross-links.
- **Still sitting from the Sude-archive feature:** interview archive pages, H5/H8/H20, behavior report v1.4.0, and `business-model-confidence-v1.9.6.md` / `v1.9.7.md`.

All of the above are coherent site work. Risk is losing the feature if the tree is reset before commit.

---

## Business finding (this run, not scored as a new hypothesis)

**A constructive partner would not write a check today — and the site now says so, with sources.**

`vc-feedback.html` inverts the VC deck: VF1–VF8 apply Graham (default-alive), Andreessen (PMF), Gurley (revenue quality), Sequoia (bottom-up TAM), Thiel/NFX (moat), CB Insights / Horowitz (team), Christensen (JTBD), and Blank (Customer Development) to this business's actual numbers. The recommended instrument is: no raise now; maybe angel after H9; VC only after an H22 placement pilot. That is a synthesis of existing hypotheses, not a 28th claim.

---

## What Would Move the Score

### Score components not yet at ceiling — concrete evidence needed

| Component | Current | Ceiling | What would raise it |
|---|---|---|---|
| **Hypothesis Validation (30 → higher)** | Average of 27 statuses | 100 if all ✅ | Highest leverage: **H9** two consecutive paid cohort launches combining to **$10,000**. Next cheap move: **H27** question bank well past 2/60 with logged attendee demand. **H5/H8** need paid enrollment. **H12** needs one paid bulk seat (the partner memo's VF8). **H20** needs a counted referral. **H1** still needs an exported search-volume/job-scrape series. A partner memo does not move this. |
| **Acidity still-open (−15)** | F2, F11, F12 open | 0 deduction | Resolve F12 (individual exam access — also VF6); F2 evidence or demote wording; F11 churn/renewal for $10/mo. |
| **Acidity partial (−7.5)** | F3, F7, F9 | 0 deduction | Deepen single-founder mitigation; unit-economics fees; pricing ladder evidence. |
| **Uncommitted work (−10)** | Combined tree still dirty | 0 | Commit vc-feedback + raise.html + prior archive/report files. Site Integrity → **77.5**, overall → **44**. |
| **Broken links / orphans** | Already 0 | Hold | Keep registering new pages in `nav.js` before considering them done. Do not link `hyp-h27.html` until that detail page exists. |

1. **Commit this batch** — clears −10 immediately (overall 41 → 44).
2. **H9** remains the single biggest business lever on the Hypothesis Validation Score.
3. **H12 / VF8** is the highest-leverage *venture-shaped* experiment: ask 3–5 Partner-Network firms for bulk seats.
4. **F12** remains the highest-leverage *market-access* unknown: confirm individual Pearson VUE registration.

---

## Version History

| Version | Date | Overall Score | Note |
|---|---|---|---|
| **v1.9.8** | 2026-08-13 | **41 / 100** (Low-moderate) | VC constructive-feedback page (VF1–VF8, cited rationale); score holds flat |
| v1.9.7 | 2026-08-13 | 41 / 100 (Low-moderate) | R.A.I.S.E. starting-point page (H1 framing); score holds flat |
| v1.9.6 | 2026-08-12 | 41 / 100 (Low-moderate) | Sude 2026-08-12 Second Brain activation follow-up archived; H5/H8/H20 evidence; behavior report v1.4.0; score holds flat |
| v1.9.5 | 2026-08-12 | 41 / 100 (Low-moderate) | YouTube → Skool handoff page (order + rationale); H4/H5/H7/H8 source links; score holds flat |
| v1.9.4 | 2026-08-12 | 41 / 100 (Low-moderate) | Founder-only Skool board seeding sanity check + page/report; H5/H8 operational evidence; score holds flat |
| v1.9.3 | 2026-08-12 | 41 / 100 (Low-moderate) | Branch reconciliation; H27/H28; 27 hypotheses |
| v1.9.2 | 2026-08-12 | 42 / 100 (Low-moderate) | Broken-link fixes; Site Integrity recover |
| v1.9.1 | 2026-08-12 | 37 / 100 (Low-moderate) | Skool 7-cohort curriculum; link scan deductions |
| v1.9.0 | 2026-08-12 | 42 / 100 (Low-moderate) | Pre-reconciliation merge baseline |
| v1.8.1 | 2026-08-11 | 44 / 100 (Low-moderate) | YouTube Titles → Skool Mapping; uncommitted cleared |
| v1.6.3 | 2026-08-11 | 41 / 100 (Low-moderate) | Added Skool vs. YouTube comparison page (`skool-vs-youtube.html`) and linked to H4, H5, H7, H8; Validation and Site Integrity hold flat; −10 temporary uncommitted-work deduction |
| v1.6.1 | 2026-08-11 | 41 / 100 (Low-moderate) | Added Skool LMS & Community Integration page (`skool-lms-integration.html`) and linked to H5, H8, H21; Validation and Site Integrity hold flat; −10 temporary uncommitted-work deduction |
