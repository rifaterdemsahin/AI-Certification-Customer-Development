> **Superseded by [`business-model-confidence-v1.9.7.md`](business-model-confidence-v1.9.7.md) (2026-08-13)** — added R.A.I.S.E. starting-point page. This version is kept as the historical record of the 41/100 score as of the Sude 12 Aug archive run.

# Business Model Confidence Report — v1.9.6

**Date:** 2026-08-12  
**Produced by:** the `business-model-sanity-check` skill (`.claude/skills/business-model-sanity-check/SKILL.md`)  
**What changed vs. v1.9.5:** patch bump — archived Sude's 2026-08-12 WhatsApp follow-up on `5_Symbols/cd/archived-interview-transcripts.html` (focus entry): she moved from 10 Aug intent to a working staging + Concepts Second Brain trained on one chat, with a planned pinned-chat automation and daily confusion/reminder loop. Evidence added to H5, H8, and H20; published `reports/exam-prep-market-and-student-behavior-v1.4.0.md`. No hypothesis status-tier change.

---

## Overall Score

# 41 / 100 — Low-moderate confidence

> Hypothesis Validation holds at **30.0/100** (27 hypotheses; no status emoji changes). Site Integrity holds at **67.5/100** (0 broken links; 0 orphans; −10 uncommitted-work for this distinct Sude-archive batch; acidity findings carried forward). Overall remains **41**. A low-moderate score at this stage is expected — most Stage 2/3 bets are still open.

```
overall = round(0.7 × Hypothesis Validation Score + 0.3 × Site Integrity Score)
        = round(0.7 × 30.00 + 0.3 × 67.50)
        = round(21.00 + 20.25)
        = round(41.25)
        = 41
```

| Sub-score | v1.9.5 | v1.9.6 (this run) |
|---|---|---|
| Hypothesis Validation Score | 30.0 / 100 | **30.0 / 100** |
| Site Integrity Score | 67.5 / 100 | **67.5 / 100** |
| **Overall** | **41 / 100** | **41 / 100** |

---

## Hypothesis Validation Score — 30/100

Re-derived fresh from each hypothesis's own **Status:** line in `HYPOTHESIS.md`. All 27 hypotheses keep the same status emoji as v1.9.5.

| ID | Hypothesis (one line) | Status | Score |
|---|---|---|---|
| H1 | Rising AI skills expectations | 🟡 Partially validated | 55 |
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

H5 / H8 / H20 received new qualitative evidence this run (Sude's 48-hour Second Brain activation) but none crossed a status tier: still no paid enrollments, no exam-pass/NPS data, no counted referral.

---

## Site Integrity Score — 67.5/100

| # | Finding | Deduction | Rationale |
|---|---|---|---|
| 1 | Acidity-check findings still open (F2, F11, F12) | −15 | Carried forward from `acidity-check-report-v1.3.0.md` (3 still-open findings). |
| 2 | Acidity-check findings partially addressed (F3, F7, F9) | −7.5 | Carried forward (3 partial findings). |
| 3 | HYPOTHESIS.md table/entry mismatches | 0 | Leading status emoji matches the Summary Table for every hypothesis. |
| 4 | Broken local links | 0 | Fresh scan of all `*.html` hrefs (scripts stripped): 0 broken local targets. |
| 5 | Orphaned pages | 0 | Every `*.html` except `index.html` is reachable via an href or `nav.js`. |
| 6 | Headline number cross-file consistency | 0 | $10,000 / $100,000 / 1,000x / >40% appear only in USD and the canonical figures; no £10,000 contradiction on live pages. |
| 7 | Uncommitted work (`git status --porcelain`) | −10 | Distinct new batch: Sude archive follow-up + H5/H8/H20/evidence-map/behavior-report v1.4.0. Prior v1.9.5 handoff batch is already on `main`. Clears once this batch is committed. |

**Total deductions: 32.5 → Site Integrity Score: 67.5**

Uncommitted-work grouping (this batch):

- Modified: `5_Symbols/cd/archived-interview-transcripts.html`, `cd-interview-recording.html`, `hyp-h5.html`, `hyp-h8.html`, `hyp-h20.html`, `evidence-map.html`, `latest-pages.html`, `HYPOTHESIS.md`, `nav.js`, `reports/exam-prep-market-and-student-behavior-v1.3.0.md` (supersede banner).
- Untracked: `reports/exam-prep-market-and-student-behavior-v1.4.0.md` (plus this report and the confidence-report.html update).

All of the above are one coherent feature: archive Sude's 12 Aug activation follow-up and cross-link it.

---

## Business finding (this run, not scored as a new hypothesis)

**Session → homework in 48 hours is now a logged activation pattern, not just a thank-you.**

Sude (Sunday cohort, WhatsApp) went from "I'll deep dive" + a full Second Brain sketch (10 Aug) to a working vault (12 Aug): sample chats in a staging folder, extracted concepts in a Concepts folder, trained from one chat history, with a planned routine to auto-pull pinned chats and a daily reminder of what she was confused about. PARA / Cloudflare / background-worker friction from 10 Aug did not block a first version.

This is H8 Premise 2 and H20 delight/activation evidence. It is **not** H5 paid-enrollment evidence and does not move any status tier. Full thread: `5_Symbols/cd/archived-interview-transcripts.html`. Behavior report: `reports/exam-prep-market-and-student-behavior-v1.4.0.md`.

---

## What Would Move the Score

### Score components not yet at ceiling — concrete evidence needed

| Component | Current | Ceiling | What would raise it |
|---|---|---|---|
| **Hypothesis Validation (30 → higher)** | Average of 27 statuses | 100 if all ✅ | Highest leverage: **H9** two consecutive paid cohort launches combining to **$10,000**. Next cheap move: **H27** question bank well past 2/60 with logged attendee demand. **H5/H8** need paid enrollment (Sude's vault is activation, not payment) and non-founder Skool threads after warm handoff. **H20** needs a counted referral from an activated student like Sude, not only stack customization. |
| **Acidity still-open (−15)** | F2, F11, F12 open | 0 deduction | Resolve F12 (individual exam access); F2 evidence or demote wording; F11 churn/renewal for $10/mo. |
| **Acidity partial (−7.5)** | F3, F7, F9 | 0 deduction | Deepen single-founder mitigation; unit-economics fees; pricing ladder evidence. |
| **Uncommitted work (−10)** | This Sude-archive batch uncommitted | 0 | Commit archive + H5/H8/H20 + behavior report v1.4.0. Site Integrity → **77.5**, overall → **44**. |
| **Broken links / orphans** | Already 0 | Hold | Keep registering new pages in `nav.js` before considering them done. |

1. **Commit this batch** — clears −10 immediately (overall 41 → 44).
2. **H9** remains the single biggest business lever on the Hypothesis Validation Score.
3. **Convert Sude-class activation into a counted H20 referral or a paid H5 seat** — the vault proves delight; it does not yet prove willingness to pay.
4. **H27** remains the cheapest hypothesis to move next via Classroom production + demand logging.

---

## Version History

| Version | Date | Overall Score | Note |
|---|---|---|---|
| **v1.9.6** | 2026-08-12 | **41 / 100** (Low-moderate) | Sude 2026-08-12 Second Brain activation follow-up archived; H5/H8/H20 evidence; behavior report v1.4.0; score holds flat |
| v1.9.5 | 2026-08-12 | 41 / 100 (Low-moderate) | YouTube → Skool handoff page (order + rationale); H4/H5/H7/H8 source links; score holds flat |
| v1.9.4 | 2026-08-12 | 41 / 100 (Low-moderate) | Founder-only Skool board seeding sanity check + page/report; H5/H8 operational evidence; score holds flat |
| v1.9.3 | 2026-08-12 | 41 / 100 (Low-moderate) | Branch reconciliation; H27/H28; 27 hypotheses |
| v1.9.2 | 2026-08-12 | 42 / 100 (Low-moderate) | Broken-link fixes; Site Integrity recover |
| v1.9.1 | 2026-08-12 | 37 / 100 (Low-moderate) | Skool 7-cohort curriculum; link scan deductions |
| v1.9.0 | 2026-08-12 | 42 / 100 (Low-moderate) | Pre-reconciliation merge baseline |
| v1.8.1 | 2026-08-11 | 44 / 100 (Low-moderate) | YouTube Titles → Skool Mapping; uncommitted cleared |
| v1.6.3 | 2026-08-11 | 41 / 100 (Low-moderate) | Added Skool vs. YouTube comparison page (`skool-vs-youtube.html`) and linked to H4, H5, H7, H8; Validation and Site Integrity hold flat; −10 temporary uncommitted-work deduction |
| v1.6.1 | 2026-08-11 | 41 / 100 (Low-moderate) | Added Skool LMS & Community Integration page (`skool-lms-integration.html`) and linked to H5, H8, H21; Validation and Site Integrity hold flat; −10 temporary uncommitted-work deduction |
