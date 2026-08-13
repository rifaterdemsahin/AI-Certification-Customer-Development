> **Superseded by [v1.9.15](business-model-confidence-v1.9.15.md) (2026-08-13)** — that run adds the Alex Hormozi Agent page. Kept as the historical record.

# Business Model Confidence Report — v1.9.14

**Date:** 2026-08-13  
**Produced by:** the `business-model-sanity-check` skill (`.claude/skills/business-model-sanity-check/SKILL.md`)  
**What changed vs. v1.9.13:** patch re-run, no new check categories. Added `5_Symbols/product/skool-founding-members.html` — Skool's 9 community-course steps mapped onto this business, with Marianna, Sude, and Bayo named as the first 3 founding-member invites (Step 4). No hypothesis status-tier change. Founding-member invites are warm seats, not paid enrollments.

---

## Overall Score

# 42 / 100 — Low-moderate confidence

> Hypothesis Validation holds at **31.3/100** (27 hypotheses). Site Integrity holds at **67.5** — the −10 uncommitted-work deduction is a category (already applied in v1.9.12 for the when-to-advertise batch; v1.9.13 added signal-versus-noise; this run adds the founding-members page to the same uncommitted tree, it does not stack a second −10). Overall **holds at 42**. Naming three founding members does not raise business confidence; committing the uncommitted tree restores Integrity to 77.5 and the overall score to **45**.

```
overall = round(0.7 × 31.30 + 0.3 × 67.50)
        = round(21.91 + 20.25)
        = round(42.16)
        = 42
```

| Sub-score | v1.9.13 | v1.9.14 (this run) |
|---|---|---|
| Hypothesis Validation Score | 31.3 / 100 | **31.3 / 100** |
| Site Integrity Score | 67.5 / 100 | **67.5 / 100** |
| **Overall** | **42 / 100** | **42 / 100** |

A low-moderate score at Customer Discovery / early Validation is expected. It means most bets are still open, not that the business is failing.

---

## Hypothesis Validation Score — 31/100

Re-derived from each hypothesis's own **Status:** line. All 27 keep the same emoji as v1.9.13. Sum 845 / 27 = **31.30**. H5, H8, and H17 Source / status notes now cite `product/skool-founding-members.html` — a named invite list, not new paid-enrollment or onsite-pilot evidence.

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
| 1 | Acidity still open (F2, F11, F12) | −15 | Unchanged from v1.9.13 |
| 2 | Acidity partial (F3, F7, F9) | −7.5 | Unchanged |
| 3 | HYPOTHESIS.md table/entry mismatches | 0 | All 27 Summary Table rows match their Status-line leading emoji |
| 4 | Broken local links | 0 | Fresh scan, 160 HTML files, `<script>` stripped: 0 real broken `href`s. `skool-founding-members.html` links all resolve. |
| 5 | Orphaned pages | 0 | New page is in `nav.js` Business Model dropdown + searchIndex + hub + inbound links from LMS, posting-sanity-check, partners, dictionary, latest-pages, H5/H8/H17. |
| 6 | Headline number consistency | 0 | $10,000 / 1,000x / $100,000 / >40% unchanged |
| 7 | Uncommitted work (`git status --porcelain`) | −10 | Category already open from v1.9.12. This run adds `skool-founding-members.html` + hero to the same uncommitted tree (alongside when-to-advertise and signal-versus-noise). Does not stack a second −10. Clears once the tree is committed (Integrity → 77.5, overall → 45). |

**Total deductions: 32.5 → 67.5**

---

## What Would Move the Score

Unchanged from v1.9.13 on the business side. The founding-members page is an operating checklist, not evidence.

1. **Commit the uncommitted tree** (when-to-advertise + signal-versus-noise + founding-members) — Site Integrity 67.5 → 77.5, overall **42 → 45**. No new evidence required.
2. **Highest-leverage business action remains H9** — two consecutive paid cohort launches combining to $10,000.
3. **H5 is still In Testing** — 8 Skool signups are the first measured data point. Founding-member invites (Marianna, Sude, Bayo) are the next warm-invite step; they do **not** cross H5 to ✅ Validated. To cross: convert a portion of those (or new) signups into a real 20–40-student *paid* enrollment count.
4. **F12** — confirm individual, non-Partner exam access with Anthropic / Pearson VUE.

---

## Expected Evidence to Improve Each Component

**Hypothesis Validation (31.3 / 100)** — not at its ceiling. Concrete evidence, not more pages:

- H9 → two paid launches summing to $10,000 (moves the whole model).
- H5 → paid enrollments, not more community joins or founding-member invites.
- H4 / H7 → measured view→click→paid rates (also the prerequisite for any H16 test).
- H10 → catalog-wide YouTube *guide* retention, not Sunday replay watch-through.
- H1 / F2 → a search-volume or job-scrape dataset, or demote the wording.
- H6 → independently sourced TAM/SOM figures (SAM is already the grounded layer).

**Site Integrity (67.5 / 100)** — below its 77.5 acidity ceiling only because the working tree is uncommitted:

- Commit the when-to-advertise + signal-versus-noise + founding-members files → +10, Integrity 77.5, overall 45.
- Then only acidity findings remain: F2 / F11 / F12 (−5 each) and F3 / F7 / F9 (−2.5 each). Those require the evidence listed above, not another HTML page.

---

## Version History

| Version | Date | Overall Score | Note |
|---|---|---|---|
| **v1.9.14** | 2026-08-13 | **42 / 100** | Skool founding-members playbook (Marianna, Sude, Bayo); score holds flat at 42 |
| v1.9.13 | 2026-08-13 | 42 / 100 | Signal-versus-noise ranking of every page; score holds flat at 42 |
| v1.9.12 | 2026-08-13 | 42 / 100 | When-to-advertise timing page (H16); score 45 → 42 on uncommitted-work deduction |
| v1.9.11 | 2026-08-13 | 45 / 100 | Merge PR #9: H5 In Testing (8 Skool signups); Site Integrity 77.5 |
| v1.9.10 | 2026-08-13 | 41 / 100 | 2-hour Skool workshop-upload sanity check; score holds flat |
| v1.9.9 | 2026-08-13 | 41 / 100 | Content-format placement page; score holds flat |
