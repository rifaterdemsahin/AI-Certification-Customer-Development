# Business Model Confidence Report — v1.9.18

**Date:** 2026-08-13  
**Produced by:** the `business-model-sanity-check` skill (`.claude/skills/business-model-sanity-check/SKILL.md`)  
**What changed vs. v1.9.17:** patch re-run, no new check categories. Added H29 (listen more than you speak) and `5_Symbols/strategy/listen-more-than-you-speak.html` — Rifat Erdem Sahin's Stage 1–2 role is to collect feedback, listen, and let the audience cocreate the next shipped change. New 🟡 In Testing hypothesis (interviews and Sunday already live; listen:speak ratio and a credited ship not yet a logged series).

---

## Overall Score

# 43 / 100 — Low-moderate confidence

> Hypothesis Validation rises **31.3 → 32.1** (28 hypotheses: prior 845 + H29's 55 = 900 / 28). Site Integrity holds at **67.5** — same uncommitted batch already deducted in v1.9.16 / v1.9.17 (10-true-regulars + golden-rules + this listen/cocreate page). Does not stack a second −10. Overall **42 → 43**. Logging a listen:speak ratio or crediting a shipped change does not move H8; counting 10 un-poked regulars does. Committing restores Integrity to 77.5 and the overall score to **46**.

```
overall = round(0.7 × 32.14 + 0.3 × 67.50)
        = round(22.50 + 20.25)
        = round(42.75)
        = 43
```

| Sub-score | v1.9.17 | v1.9.18 (this run) |
|---|---|---|
| Hypothesis Validation Score | 31.3 / 100 | **32.1 / 100** |
| Site Integrity Score | 67.5 / 100 | **67.5 / 100** |
| **Overall** | **42 / 100** | **43 / 100** |

A low-moderate score at Customer Discovery / early Validation is expected. It means most bets are still open, not that the business is failing.

---

## Hypothesis Validation Score — 32/100

Re-derived from each hypothesis's own **Status:** line. The prior 27 keep the same emoji as v1.9.17. H29 joins at 🟡 (55). Sum 900 / 28 = **32.14**.

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
| H29 | Listen more than you speak / audience cocreation | 🟡 | 55 |

---

## Site Integrity Score — 67.5/100

| # | Finding | Deduction | Notes |
|---|---|---|---|
| 1 | Acidity still open (F2, F11, F12) | −15 | Unchanged |
| 2 | Acidity partial (F3, F7, F9) | −7.5 | Unchanged |
| 3 | HYPOTHESIS.md table/entry mismatches | 0 | All 28 Summary Table rows match their own Status emoji |
| 4 | Broken local links | 0 | Fresh scan, 165 HTML files, `<script>` stripped: 0 real broken `href`s. `listen-more-than-you-speak.html` and `hyp-h29.html` links all resolve. |
| 5 | Orphaned pages | 0 | New pages are in `nav.js` Strategy dropdown + searchIndex + hub + inbound links from golden-rules, customer-relationships, conversation-starters, single-founder-bandwidth, dictionary, H5/H8/H20, latest-pages, hypothesis.html. |
| 6 | Headline number consistency | 0 | $10,000 / 1,000x / $100,000 / >40% unchanged. |
| 7 | Uncommitted work (`git status --porcelain`) | −10 | Same open batch as v1.9.16 / v1.9.17 (after commit `9d748bc`). This run adds `listen-more-than-you-speak.html` + hero/collect/cocreate images + `hyp-h29.html` to that tree. Does not stack a second −10. Clears once the tree is committed (Integrity → 77.5, overall → 46). |

**Total deductions: 32.5 → 67.5**

---

## What Would Move the Score

1. **Commit this batch** — Site Integrity 67.5 → 77.5, overall **43 → 46**.
2. **Log the H29 series** — Sunday listen:speak estimate, Skool replies vs posts, and one credited shipped change. That keeps H29 at 🟡 until the series exists; it does not move H8.
3. **Highest-leverage business action remains H9** — two consecutive paid launches combining to $10,000. Listening well does not substitute.
4. **F12** — confirm individual, non-Partner exam access with Anthropic / Pearson VUE.

---

## Expected Evidence to Improve Each Component

**Hypothesis Validation (32.1 / 100)** — not at its ceiling:

- H9 → two paid launches summing to $10,000.
- H8 → 10 true regulars logged under the four-week un-poked definition, plus later exam-pass / NPS data. Listening and golden rules do not move H8 off ⚪.
- H29 → a logged listen:speak series plus one audience-originated change shipped and credited by name.
- H5 → paid enrollments, not more community joins, DMs, or praise posts.
- H20 → counted referrals / NPS, not named intros.
- H4 / H7 → measured view→click→paid rates.
- H27 → remaining practice questions plus attendee-demand data.

**Site Integrity (67.5 / 100)**:

- Commit the 10-true-regulars + golden-rules + listen-more-than-you-speak files → +10, Integrity 77.5, overall 46.
- Then only acidity findings remain (F2 / F11 / F12 and F3 / F7 / F9).

---

## Version History

| Version | Date | Overall Score | Note |
|---|---|---|---|
| **v1.9.18** | 2026-08-13 | **43 / 100** | H29 listen more than you speak / audience cocreation; Validation 31.3 → 32.1; overall 42 → 43 |
| v1.9.17 | 2026-08-13 | 42 / 100 | Golden rules of community building (don't lecture / friendships / culture); score holds flat at 42 |
| v1.9.16 | 2026-08-13 | 42 / 100 | 10 true regulars Skool milestone + calendar entry; score holds flat at 42 |
| v1.9.15 | 2026-08-13 | 42 / 100 | Alex Hormozi Agent ($100M Offers + $100M Leads audit); score holds flat at 42 |
| v1.9.14 | 2026-08-13 | 42 / 100 | Skool founding-members playbook (Marianna, Sude, Bayo) |
