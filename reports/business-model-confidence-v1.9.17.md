> **Superseded by** [`reports/business-model-confidence-v1.9.18.md`](business-model-confidence-v1.9.18.md).

# Business Model Confidence Report — v1.9.17

**Date:** 2026-08-13  
**Produced by:** the `business-model-sanity-check` skill (`.claude/skills/business-model-sanity-check/SKILL.md`)  
**What changed vs. v1.9.16:** patch re-run, no new check categories. Added `5_Symbols/product/skool-community-golden-rules.html` — Skool's 3 community-course rules (don't lecture, build friendships, curate culture) mapped onto Delivery Pilot as the operating playbook from founding members to 10 true regulars. Not a new hypothesis. Not paid enrollment. No hypothesis status-tier change.

---

## Overall Score

# 42 / 100 — Low-moderate confidence

> Hypothesis Validation holds at **31.3/100** (27 hypotheses). Site Integrity is **67.5** — same uncommitted batch already deducted in v1.9.16 (10-true-regulars + this golden-rules playbook). Does not stack a second −10. Overall **holds at 42**. Following the three rules is not H8 evidence; counting 10 un-poked regulars is. Committing restores Integrity to 77.5 and the overall score to **45**.

```
overall = round(0.7 × 31.30 + 0.3 × 67.50)
        = round(21.91 + 20.25)
        = round(42.16)
        = 42
```

| Sub-score | v1.9.16 | v1.9.17 (this run) |
|---|---|---|
| Hypothesis Validation Score | 31.3 / 100 | **31.3 / 100** |
| Site Integrity Score | 67.5 / 100 | **67.5 / 100** |
| **Overall** | **42 / 100** | **42 / 100** |

A low-moderate score at Customer Discovery / early Validation is expected. It means most bets are still open, not that the business is failing.

---

## Hypothesis Validation Score — 31/100

Re-derived from each hypothesis's own **Status:** line. All 27 keep the same emoji as v1.9.16. Sum 845 / 27 = **31.30**. H5, H8, and H20 Source / status notes now cite `product/skool-community-golden-rules.html` — an operating playbook, not new paid enrollments, regulars counted, or referrals logged.

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
| 1 | Acidity still open (F2, F11, F12) | −15 | Unchanged |
| 2 | Acidity partial (F3, F7, F9) | −7.5 | Unchanged |
| 3 | HYPOTHESIS.md table/entry mismatches | 0 | All 27 Summary Table rows match |
| 4 | Broken local links | 0 | Fresh scan, 163 HTML files, `<script>` stripped: 0 real broken `href`s. `skool-community-golden-rules.html` links all resolve. |
| 5 | Orphaned pages | 0 | New page is in `nav.js` Business Model dropdown + searchIndex + hub + inbound links from founding-members, 10-true-regulars, LMS, posting sanity check, dictionary, H5/H8/H20, latest-pages. |
| 6 | Headline number consistency | 0 | $10,000 / 1,000x / $100,000 / >40% unchanged. |
| 7 | Uncommitted work (`git status --porcelain`) | −10 | Same open batch as v1.9.16 (after commit `9d748bc`). This run adds `skool-community-golden-rules.html` + hero + three rule images to that tree. Does not stack a second −10. Clears once the tree is committed (Integrity → 77.5, overall → 45). |

**Total deductions: 32.5 → 67.5**

---

## What Would Move the Score

1. **Commit this batch** — Site Integrity 67.5 → 77.5, overall **42 → 45**.
2. **Practice the rules, then count** — the golden-rules page is a playbook. H8 moves when 10 un-poked regulars are logged under `skool-10-true-regulars.html`.
3. **Highest-leverage business action remains H9** — two consecutive paid launches combining to $10,000. A well-run board does not substitute.
4. **F12** — confirm individual, non-Partner exam access with Anthropic / Pearson VUE.

---

## Expected Evidence to Improve Each Component

**Hypothesis Validation (31.3 / 100)** — not at its ceiling:

- H9 → two paid launches summing to $10,000.
- H8 → 10 true regulars logged under the four-week un-poked definition, plus later exam-pass / NPS data. The golden-rules playbook does not move H8 off ⚪.
- H5 → paid enrollments, not more community joins, DMs, or praise posts.
- H20 → counted referrals / NPS, not named intros.
- H4 / H7 → measured view→click→paid rates.
- H27 → remaining practice questions plus attendee-demand data.

**Site Integrity (67.5 / 100)**:

- Commit the 10-true-regulars + golden-rules files → +10, Integrity 77.5, overall 45.
- Then only acidity findings remain (F2 / F11 / F12 and F3 / F7 / F9).

---

## Version History

| Version | Date | Overall Score | Note |
|---|---|---|---|
| **v1.9.17** | 2026-08-13 | **42 / 100** | Golden rules of community building (don't lecture / friendships / culture); score holds flat at 42 |
| v1.9.16 | 2026-08-13 | 42 / 100 | 10 true regulars Skool milestone + calendar entry; score holds flat at 42 |
| v1.9.15 | 2026-08-13 | 42 / 100 | Alex Hormozi Agent ($100M Offers + $100M Leads audit); score holds flat at 42 |
| v1.9.14 | 2026-08-13 | 42 / 100 | Skool founding-members playbook (Marianna, Sude, Bayo) |
