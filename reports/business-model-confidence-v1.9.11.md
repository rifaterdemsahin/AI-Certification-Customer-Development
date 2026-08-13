> **Superseded by** [`business-model-confidence-v1.9.12.md`](business-model-confidence-v1.9.12.md). Numbers below are the historical v1.9.11 record and are not edited in place.

# Business Model Confidence Report — v1.9.11

**Date:** 2026-08-13
**Produced by:** the `business-model-sanity-check` skill (`.claude/skills/business-model-sanity-check/SKILL.md`)
**What changed vs. v1.9.10:** patch bump — merged PR #9 (`claude/skool-setup-signups-6w38wa`) into current `main`. H5 upgrades from ⚪ Hypothesized to 🟡 In Testing on real Skool-launch evidence (community live on skool.com, 8 free-cohort recordings uploaded, membership levels + founder bio configured, invite link shared, **8 signups**). Later `main` evidence on H5 is kept (Charles Andrews Premise 7 correction, Sude 2026-08-12 vault, 7 classrooms, founder board seeding, 2-hour workshop-upload rule). The 20–40 paid-enrollment conclusion and the $10k H9 gate remain unmeasured. Historical report filenames stay on `main`'s version chain.

---

## Overall Score

# 45 / 100 — Low-moderate confidence

> Hypothesis Validation rises to **31.3/100** (27 hypotheses) because H5 moved 20 → 55. Site Integrity rises to **77.5/100** — the v1.9.10 −10 uncommitted-work deduction for the already-merged workshop-upload batch no longer applies, and this merge is committed as part of this same run. Overall rises **41 → 45**.

```
overall = round(0.7 × 31.30 + 0.3 × 77.50)
        = round(21.91 + 23.25)
        = round(45.16)
        = 45
```

| Sub-score | v1.9.10 | v1.9.11 (this run) |
|---|---|---|
| Hypothesis Validation Score | 30.0 / 100 | **31.3 / 100** |
| Site Integrity Score | 67.5 / 100 | **77.5 / 100** |
| **Overall** | **41 / 100** | **45 / 100** |

A low-moderate score at Customer Discovery / early Validation is expected. It means most bets are still open, not that the business is failing. Eight Skool community joins are a real data point; they are not paid enrollments.

---

## Hypothesis Validation Score — 31/100

Re-derived from each hypothesis's own **Status:** line. 26 of 27 keep the same emoji as v1.9.10. H5 is the only tier change (⚪ 20 → 🟡 55). Sum 845 / 27 = **31.30**.

| ID | Hypothesis | Status | Score |
|---|---|---|---|
| H1 | Rising AI skills expectations | 🟡 | 55 |
| H2 | Animated content beats standard formats | 🟡 | 55 |
| H3 | Audience will pay for cert prep | 🟡 | 55 |
| H4 | YouTube funnel → 1% paid membership | 🟡 | 55 |
| H5 | Cohorts sell out organically | 🟡 | 55 |
| H6 | TAM/SAM/SOM market sizing | ⚠️ | 10 |
| H7 | Funnel CTR/conversion rates | ⚪ | 20 |
| H8 | Cohort delivers exam-ready PMF | ⚪ | 20 |
| H9 | $10k Stage 2 exit gate (2-launch) | ⚪ | 20 |
| H10 | >40% retention = MVP metric | 🟡 | 55 |
| H11 | $100k ARR → hiring | ⚪ | 20 |
| H12 | B2B consulting/gov-contractor channel | ⚪ | 20 |
| H13 | 1,000x subscriber growth | ⚪ | 20 |
| H14 | Multi-certification expansion | ⚪ | 20 |
| H15 | Founder full-time at Stage 4 | ⚪ | 20 |
| H16 | Paid ads, CAC/LTV-gated | ⚪ | 20 |
| H17 | Cambridge + Marianna onsite pilot | ⚪ | 20 |
| H18 | International onsite delivery | ⚪ | 20 |
| H19 | Stage timeline estimates | ⚪ | 20 |
| H20 | MAOT referral threshold | ⚪ | 20 |
| H21 | $29 Exam Prep Bundle | ⚪ | 20 |
| H22 | Certified-talent placement (FDE) | ⚪ | 20 |
| H23 | 4DX weekly accountable rhythm | 🟡 | 55 |
| H24 | Emotional pain drivers | 🟡 | 55 |
| H25 | Cert value bifurcation | ⚪ | 20 |
| H27 | Practice exam & question bank gap | 🟡 | 55 |
| H28 | YouTube engagement rate benchmark | ⚪ | 20 |

---

## Site Integrity Score — 77.5/100

| # | Finding | Deduction | Notes |
|---|---|---|---|
| 1 | Acidity still open (F2, F11, F12) | −15 | Unchanged from v1.9.10 |
| 2 | Acidity partial (F3, F7, F9) | −7.5 | Unchanged |
| 3 | HYPOTHESIS.md table/entry mismatches | 0 | All 27 Summary Table rows match their Status-line leading emoji, including H5 now 🟡 on both sides |
| 4 | Broken local links | 0 | Fresh scan of 157 HTML files with `<script>` stripped: 0 real broken `href`s |
| 5 | Orphaned pages | 0 | Full reachability scan: 0 orphans |
| 6 | Headline number consistency | 0 | $10,000 / 1,000x / $100,000 / >40% unchanged |
| 7 | Uncommitted work (`git status --porcelain`) | 0 | This merge (PR #9 + v1.9.11 report) is committed as part of this same run. The v1.9.10 workshop-upload −10 no longer applies — that batch is already on `main`. |

**Total deductions: 22.5 → 77.5**

---

## What Would Move the Score

1. **Highest-leverage business action remains H9** — two consecutive paid cohort launches combining to $10,000. H5's upgrade does not move H9; community joins are not revenue.
2. **H5 is now In Testing** — 8 Skool signups are the first measured data point. To cross to ✅ Validated: convert a portion of those (or new) signups into a real 20–40-student *paid* enrollment count from the first cohort launch. Billing tier (free vs $99/mo Skool plan) is still unreported.
3. **H27** — already has production evidence (2 of a targeted 60 questions live). Needs the rest of the bank plus attendee-demand data from a Sunday cohort.
4. **H28** — cheapest to test. Log like/comment/share counts alongside the existing per-video retention log.
5. **F12** — confirm individual, non-Partner exam access with Anthropic / Pearson VUE.

Site Integrity is now at the acidity-finding ceiling (77.5). Every further integrity point requires real evidence, not a page edit. At full resolution of remaining acidity findings it can hit 100/100 before Hypothesis Validation does.

---

## Version History

| Version | Date | Overall Score | Note |
|---|---|---|---|
| **v1.9.11** | 2026-08-13 | **45 / 100** | Merge PR #9: H5 In Testing (8 Skool signups); Site Integrity 77.5 |
| v1.9.10 | 2026-08-13 | 41 / 100 | 2-hour Skool workshop-upload sanity check; score holds flat |
| v1.9.9 | 2026-08-13 | 41 / 100 | Content-format placement page; score holds flat |
| v1.9.8 | 2026-08-13 | 41 / 100 | VC constructive-feedback page; score holds flat |
| v1.9.7 | 2026-08-13 | 41 / 100 | R.A.I.S.E. starting-point page; score holds flat |
