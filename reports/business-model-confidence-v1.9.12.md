> **Superseded by** [`reports/business-model-confidence-v1.9.13.md`](business-model-confidence-v1.9.13.md).

# Business Model Confidence Report — v1.9.12

**Date:** 2026-08-13  
**Produced by:** the `business-model-sanity-check` skill (`.claude/skills/business-model-sanity-check/SKILL.md`)  
**What changed vs. v1.9.11:** patch re-run, no new check categories. Added `5_Symbols/growth/when-to-advertise.html` (H16 timing gate: what to do instead of ads, when spend is forbidden, when a capped test makes sense). No hypothesis status-tier change. H16 stays ⚪ Planned.

---

## Overall Score

# 42 / 100 — Low-moderate confidence

> Hypothesis Validation holds at **31.3/100** (27 hypotheses). Site Integrity drops **77.5 → 67.5** solely from the −10 uncommitted-work deduction on this new ads-timing batch. Overall **45 → 42**. A timing-rule page does not raise business confidence; committing the batch restores Integrity to 77.5 and the overall score to **45**.

```
overall = round(0.7 × 31.30 + 0.3 × 67.50)
        = round(21.91 + 20.25)
        = round(42.16)
        = 42
```

| Sub-score | v1.9.11 | v1.9.12 (this run) |
|---|---|---|
| Hypothesis Validation Score | 31.3 / 100 | **31.3 / 100** |
| Site Integrity Score | 77.5 / 100 | **67.5 / 100** |
| **Overall** | **45 / 100** | **42 / 100** |

A low-moderate score at Customer Discovery / early Validation is expected. It means most bets are still open, not that the business is failing.

---

## Hypothesis Validation Score — 31/100

Re-derived from each hypothesis's own **Status:** line. All 27 keep the same emoji as v1.9.11. Sum 845 / 27 = **31.30**. Source-line addition on H16 points at `when-to-advertise.html` — a timing spec, not new evidence.

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

## Site Integrity Score — 67.5/100

| # | Finding | Deduction | Notes |
|---|---|---|---|
| 1 | Acidity still open (F2, F11, F12) | −15 | Unchanged from v1.9.11 |
| 2 | Acidity partial (F3, F7, F9) | −7.5 | Unchanged |
| 3 | HYPOTHESIS.md table/entry mismatches | 0 | All 27 Summary Table rows match their Status-line leading emoji |
| 4 | Broken local links | 0 | Fresh scan, 158 HTML files, `<script>` stripped: 0 real broken `href`s. `when-to-advertise.html` links all resolve. |
| 5 | Orphaned pages | 0 | New page is in `nav.js` Growth dropdown + searchIndex + hub + inbound links from advertisement, organic-growth, focus, quality-gates, H16, calendar, BMC channels, and others. |
| 6 | Headline number consistency | 0 | $10,000 / 1,000x / $100,000 / >40% unchanged |
| 7 | Uncommitted work (`git status --porcelain`) | −10 | Distinct new batch: `when-to-advertise.html` + hero + 19 sibling/nav/hypothesis edits. Clears once committed (Integrity → 77.5, overall → 45). A leftover untracked `5_Symbols/strategy/signal-versus-noise-hero.jpg` sits outside this feature and is not referenced by any page. |

**Total deductions: 32.5 → 67.5**

---

## What Would Move the Score

Unchanged from v1.9.11 on the business side; Integrity is temporarily below its acidity ceiling because this batch is uncommitted.

1. **Commit this batch** — Site Integrity 67.5 → 77.5, overall **42 → 45**. No new evidence required.
2. **Highest-leverage business action remains H9** — two consecutive paid cohort launches combining to $10,000. The new ads-timing page restates that this gate must clear before any paid spend; it does not move H9.
3. **H5 is still In Testing** — 8 Skool signups are the first measured data point. To cross to ✅ Validated: convert a portion of those (or new) signups into a real 20–40-student *paid* enrollment count.
4. **H16 stays Planned** until H4/H7 produce measured organic funnel rates *and* a capped single-channel test is actually run. Writing the timing page is not a test.
5. **F12** — confirm individual, non-Partner exam access with Anthropic / Pearson VUE.

---

## Expected Evidence to Improve Each Component

**Hypothesis Validation (31.3 / 100)** — not at its ceiling. Concrete evidence, not more pages:

- H9 → two paid launches summing to $10,000 (moves the whole model).
- H5 → paid enrollments, not more community joins.
- H4 / H7 → measured view→click→paid rates (also the prerequisite for any H16 test).
- H16 → a capped paid-channel test with a recorded CAC vs LTV; forbidden until the rows above exist.
- H10 → catalog-wide YouTube *guide* retention, not Sunday replay watch-through.
- H1 / F2 → a search-volume or job-scrape dataset, or demote the wording.
- H6 → independently sourced TAM/SOM figures (SAM is already the grounded layer).

**Site Integrity (67.5 / 100)** — below its 77.5 acidity ceiling only because this batch is uncommitted:

- Commit the when-to-advertise files → +10, Integrity 77.5, overall 45.
- Then only acidity findings remain: F2 / F11 / F12 (−5 each) and F3 / F7 / F9 (−2.5 each). Those require the evidence listed above, not another HTML page.

---

## Version History

| Version | Date | Overall Score | Note |
|---|---|---|---|
| **v1.9.12** | 2026-08-13 | **42 / 100** | When-to-advertise timing page (H16); score 45 → 42 on uncommitted-work deduction |
| v1.9.11 | 2026-08-13 | 45 / 100 | Merge PR #9: H5 In Testing (8 Skool signups); Site Integrity 77.5 |
| v1.9.10 | 2026-08-13 | 41 / 100 | 2-hour Skool workshop-upload sanity check; score holds flat |
| v1.9.9 | 2026-08-13 | 41 / 100 | Content-format placement page; score holds flat |
