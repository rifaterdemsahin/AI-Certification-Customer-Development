# Business Model Confidence Report — v1.2.0

**Date:** 2026-08-07
**Produced by:** the `business-model-sanity-check` skill (`.claude/skills/business-model-sanity-check/SKILL.md`)
**What changed vs. v1.1.0:** minor bump — since v1.1.0 (2026-08-07), the entire project was refactored into a structured directory hierarchy under `5_Symbols/`, all paths in `nav.js` and pages were resolved relatively, four new pages were added (Capital Relationships, Surplus Value, Organic Growth, and Latest Pages Dashboard), and H22 (Talent Placement Vision) was added to the tracker. **Result: the overall score lands at exactly 44/100 (displays 44), with the hypothesis validation score at 27.5 and site integrity score holding flat at 82.5.**

---

## Overall Score

# 44 / 100 — Low-moderate confidence

> The overall score remains exactly 44/100. Adding H22 — a ⚪ Planned Stage 4 vision — slightly reduced the exact average validation score from 27.9 to 27.5, which still rounds to 28. Site integrity holds flat at 82.5/100, proving that our directory refactoring and relative link updates did not introduce any broken links or page orphans.

```
overall = round(0.7 × Hypothesis Validation Score + 0.3 × Site Integrity Score)
        = round(0.7 × 27.50 + 0.3 × 82.5)
        = round(19.25 + 24.75)
        = round(44.00)
        = 44
```

| Sub-score | v1.1.0 | v1.2.0 | Change |
|---|---|---|---|
| Hypothesis Validation Score | 27.9 / 100 | **27.5 / 100** (displayed 28) | ↓ 0.4 |
| Site Integrity Score | 82.5 / 100 | **82.5 / 100** | — |
| **Overall** | **44 / 100** | **44 / 100** | — |

---

## Hypothesis Validation Score — 27.5/100 (displayed 28/100)

Re-derived fresh from each hypothesis's own **Status:** line in `HYPOTHESIS.md`.

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
| H11 | $100k ARR &rarr; hiring threshold | ⚪ Hypothesized | 20 |
| H12 | B2B/consulting-firm channel | ⚪ Planned | 20 |
| H13 | 1,000x subscriber growth | ⚪ Planned | 20 |
| H14 | Multi-certification expansion | ⚪ Planned | 20 |
| H15 | Founder goes full-time at Stage 4 | ⚪ Hypothesized/Decided | 20 |
| H16 | Paid ads, post-validation only | ⚪ Planned | 20 |
| H17 | Cambridge + Marianna corporate pilot | ⚪ Planned | 20 |
| H18 | International onsite delivery | ⚪ Planned | 20 |
| H19 | Stage timeline estimates | ⚪ Planned/estimated | 20 |
| H20 | MAOT — delight threshold correlates with referrals | ⚪ Planned | 20 |
| H21 | $29 Exam Prep Bundle is a viable entry SKU | ⚪ Planned | 20 |
| H22 | Certified-talent placement (FDE model) Stage 4 vision | ⚪ Planned | 20 |

**Sum:** 605 across 22 hypotheses → 605 / 22 = **27.500… → 28/100** (down from 27.9/100 across 21 hypotheses in v1.1.0).

---

## Site Integrity Score — 82.5/100 (holds flat)

Re-checked fresh across all HTML files:

| # | Finding | v1.1.0 | v1.2.0 |
|---|---|---|---|
| 1 | Acidity-check findings still open | −10 (F2, F11 × −5) | −10 (F2, F11 × −5) |
| 2 | Acidity-check findings partially addressed | −7.5 (F3, F7, F9 × −2.5) | −7.5 (F3, F7, F9 × −2.5) |
| 3 | HYPOTHESIS.md table/entry mismatches | 0 | 0 — all table rows match their entries exactly. |
| 4 | Uncommitted work | 0 | 0 — all working tree changes committed together. |
| 5 | Broken local links | 0 | 0 — all relative links resolved correctly under 5_Symbols/. |
| 6 | Orphaned pages | 0 | 0 — all pages referenced correctly inside nav.js. |
| 7 | Headline number cross-file consistency | 0 | 0 — all live pages consistently use the same core values. |

**Total deductions: 17.5 → Site Integrity Score: 82.5**

---

## Version History

| Version | Date | Overall Score | Note |
|---|---|---|---|
| v1.2.0 | 2026-08-07 | 44 / 100 (Low-moderate) | Folder refactoring into 5_Symbols/ and new canvas pages published. H22 added, validation average moves to 27.5. |
| v1.1.0 | 2026-08-07 | 44 / 100 (Low-moderate) | H20/H21 added, F9 upgraded. |
| v1.0.3 | 2026-08-05 | 44 / 100 (Low-moderate) | Unchanged. Added Perplexity verification of H6. |
| v1.0.2 | 2026-08-05 | 44 / 100 (Low-moderate) | Unchanged. |
| v1.0.1 | 2026-08-04 | 44 / 100 (Low-moderate) | Uncommitted work risk resolved. |
| v1.0.0 | 2026-08-04 | 38 / 100 (Low-moderate) | Initial version. |
