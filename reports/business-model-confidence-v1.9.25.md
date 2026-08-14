# Business Model Confidence Report — v1.9.25

**Date:** 2026-08-14  
**Produced by:** the `business-model-sanity-check` skill (`.claude/skills/business-model-sanity-check/SKILL.md`)  
**What changed vs. v1.9.24:** Created the new `5_Symbols/strategy/leverages.html` page documenting founder leverages (IT experience, YouTube reach, and Venture Coffee meetups) using Ali Abdaal's MILES framework and Alex Hormozi's leverage insights. Added Strategy dropdown navigation and search index registration. Cross-linked from index.html, focus.html, and moat.html. Refined H1, H2, H3, H8, H12, H17, and H18 sources. Re-ran confidence report.

---

## Overall Score

# 43 / 100 — Low-moderate confidence

> Hypothesis Validation holds at **32.1/100** (28 hypotheses; no status emoji changes). Site Integrity holds at **67.5/100** — same uncommitted batch, now also including the Leverages & Unfair Advantages strategy page. Does not stack a second −10. Overall remains **43**. Committing the tree restores Integrity to 77.5 and the overall score to **46**.

```
overall = round(0.7 × 32.14 + 0.3 × 67.50)
        = round(22.50 + 20.25)
        = round(42.75)
        = 43
```

| Sub-score | v1.9.24 | v1.9.25 (this run) |
|---|---|---|
| Hypothesis Validation Score | 32.1 / 100 | **32.1 / 100** |
| Site Integrity Score | 67.5 / 100 | **67.5 / 100** |
| **Overall** | **43 / 100** | **43 / 100** |

A low-moderate score at Customer Discovery / early Validation is expected. It means most bets are still open, not that the business is failing.

---

## Hypothesis Validation Score — 32/100

Re-derived from each hypothesis's own **Status:** line. All 28 keep the same leading emoji as v1.9.24. Sum 900 / 28 = **32.14**. H1, H2, H3, H8, H12, H17, and H18 now cite `strategy/leverages.html` as a supporting resource outlining Rifat's IT experience, YouTube reach, and Venture Coffee networking leverages. Status tiers unchanged.

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
| 3 | HYPOTHESIS.md table/entry mismatches | 0 | All 28 Summary Table rows match their own Status-line leading emoji |
| 4 | Broken local links | 0 | Fresh scan, `<script>` stripped: 0 real broken `href`s |
| 5 | Orphaned pages | 0 | No orphaned pages. `leverages.html` is registered in `nav.js` groups + searchIndex |
| 6 | Headline number consistency | 0 | $10,000 / 1,000x / $100,000 / >40% unchanged |
| 7 | Uncommitted work (`git status --porcelain`) | −10 | Same open batch. This run adds the leverages strategy page plus focus/moat/nav/latest-pages cites. Does not stack a second −10. Clears once committed. |

**Total deductions: 32.5 → 67.5**

---

## What Would Move the Score

1. **Commit this batch** — Site Integrity 67.5 → 77.5, overall **43 → 46**.
2. **Highest-leverage business action remains H9** — two consecutive paid launches combining to $10,000.
3. **F12 (−5)** — direct confirmation with Anthropic / Pearson VUE that individual, non-Partner registration is possible.
4. **H5 is still In Testing** — convert a portion of Skool waitlist signups into a real 20–40-student *paid* enrollment count.

---

## Expected Evidence to Improve Each Component

**Hypothesis Validation (32.1 / 100)** — not at its ceiling:
- H9 → two paid launches summing to $10,000.
- H8 → 10 true regulars logged under the four-week un-poked definition.
- H29 → a logged Sunday listen:speak series plus one audience-originated change shipped and credited by name.
- H5 → paid enrollments, not more named invites or community joins.
- H20 → a formal referral-count/NPS series.
- H4 / H7 → measured view→click→paid rates.
- H27 → question bank shipped, plus attendee-demand data from a pilot batch.
- H1 → an exported monthly search-volume series or direct confirmation on F12.

**Site Integrity (67.5 / 100)**:
- Commit the open batch → +10, Integrity 77.5, overall 46.
- Resolve acidity findings (F2 / F11 / F12 and F3 / F7 / F9).
  - F2: search-volume/job-scrape dataset behind H1.
  - F11: one full cohort of $10/mo churn/renewal data.
  - F12: confirmation with Anthropic / Pearson VUE on individual registration.
  - F3: Cambridge / Marianna pilots actually running (H17).
  - F7: payment-processing fees modeled against all three price tiers.
  - F9: real sales data for the $29 bundle (H21).

---

## Version History

| Version | Date | Overall Score | Note |
|---|---|---|---|
| **v1.9.25** | 2026-08-14 | **43 / 100** | Added Leverages & Unfair Advantages page detailing founder assets using the MILES framework; score holds flat |
| v1.9.24 | 2026-08-14 | 43 / 100 | Recurring Tasks loop on todo.html (videos, Sunday cohort, Skool answers, YouTube comments); score holds flat |
| v1.9.23 | 2026-08-14 | 43 / 100 | Daily Skool hello / connect / notification pass; public count 10 members; score holds flat |
| v1.9.22 | 2026-08-14 | 43 / 100 | Added Bora customer discovery feedback on Obsidian background automation and context capacity; score holds flat |
| v1.9.21 | 2026-08-14 | 43 / 100 | Incorporated Perplexity R.A.I.S.E. validation report and H1 conclusion nuance; score holds flat |
| v1.9.20 | 2026-08-14 | 43 / 100 | H1 isolation page (why no arrows; leave-it-alone); score holds at 43 |
| v1.9.19 | 2026-08-13 | 43 / 100 | H5 named pair: Bihar invited Sude; genuine connection > mass marketing; score holds at 43 |
| v1.9.18 | 2026-08-13 | 43 / 100 | H29 listen more than you speak / audience cocreation; Validation 31.3 → 32.1; overall 42 → 43 |
