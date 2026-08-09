# Business Model Confidence Report — v1.4.0

**Date:** 2026-08-09
**Produced by:** the `business-model-sanity-check` skill (`.claude/skills/business-model-sanity-check/SKILL.md`)
**What changed vs. v1.3.0:** minor bump — updated H11 (delegated weekday cohorts managed by TAs independently of founder time) and H14 (expanded AI certification scope to Nvidia, Microsoft, and Google to decrease Claude dependency and expand paid market reach) across stage specifications, components, hypotheses detail pages, dashboard, and memory files. **Result: the overall score remains 41/100 (and will clear to 44/100 once committed). Hypothesis Validation is unchanged at 27.5/100 (displayed 28). Site Integrity remains at 72.5 this run, including the −10 uncommitted-work deduction which is expected to clear once the batch is committed.**

---

## Overall Score

# 41 / 100 — Low-moderate confidence

> Hypothesis Validation held flat at 27.5/100 — no hypothesis crossed a status tier this run. Site Integrity held flat at 72.5/100, including the −10 uncommitted-work deduction because the files are sitting in the working tree at scan time. Expect the uncommitted-work deduction to clear on the next re-run once this batch is committed.

```
overall = round(0.7 × Hypothesis Validation Score + 0.3 × Site Integrity Score)
        = round(0.7 × 27.50 + 0.3 × 72.50)
        = round(19.25 + 21.75)
        = round(41.00)
        = 41
```

| Sub-score | v1.3.0 | v1.4.0 | Change |
|---|---|---|---|
| Hypothesis Validation Score | 27.5 / 100 | **27.5 / 100** | — |
| Site Integrity Score | 72.5 / 100 | **72.5 / 100** | — |
| **Overall** | **41 / 100** | **41 / 100** | — |

---

## Hypothesis Validation Score — 27.5/100 (displayed 28/100)

Re-derived fresh from each hypothesis's own **Status:** line in `HYPOTHESIS.md`. Details for H11 and H14 were updated, but no status tier changed since v1.3.0.

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
| H18 | International onsite delivery | ⚪ Planned | 20 |
| H19 | Stage timeline estimates | ⚪ Planned/estimated | 20 |
| H20 | MAOT — delight threshold correlates with referrals | ⚪ Planned | 20 |
| H21 | $29 Exam Prep Bundle is a viable entry SKU | ⚪ Planned | 20 |
| H22 | Certified-talent placement (FDE model) Stage 4 vision | ⚪ Planned | 20 |

**Sum:** 605 across 22 hypotheses → 605 / 22 = **27.500… → 28/100** (unchanged).

---

## Site Integrity Score — 72.5/100 (unchanged)

Re-checked fresh across all HTML files, per the skill's Step 3:

| # | Finding | v1.3.0 | v1.4.0 | Deduction |
|---|---|---|---|---|
| 1 | Acidity-check findings still open (F2, F11) | −10 | −10 | Unchanged |
| 2 | Acidity-check findings partially addressed (F3, F7, F9) | −7.5 | −7.5 | Unchanged |
| 3 | HYPOTHESIS.md table/entry mismatches | 0 | 0 | All 22 rows match their entries |
| 4 | Broken local links | 0 | 0 | Checked and verified |
| 5 | Orphaned pages | 0 | 0 | verified |
| 6 | Headline number cross-file consistency | 0 | 0 | $10k / 1,000x / $100k / >40% all consistent |
| 7 | Uncommitted work (`git status --porcelain`) | −10 | −10 | Temporary |

**Total deductions: 27.5 → Site Integrity Score: 72.5**

---

## What Would Move the Score

**Highest leverage right now is committing this batch** — it clears the temporary −10 uncommitted-work deduction and should return Site Integrity to ~82.5, restoring the overall score to ~44 on the next re-run, with no new business evidence required.

Beyond that, the highest-leverage *business* action is unchanged: **H9** (the $10k Stage 2→3 gate) — two consecutive paid cohort launches combining to $10,000 — since it gates H15, H16, and H19 downstream and is the single biggest lever on the Hypothesis Validation Score.

---

## Version History

| Version | Date | Overall Score | Note |
|---|---|---|---|
| v1.4.0 | 2026-08-09 | 41 / 100 (Low-moderate) | H11 and H14 updated to focus on weekday TA cohorts and Nvidia, Microsoft, Google certifications; −10 temporary uncommitted-work deduction |
| v1.3.0 | 2026-08-09 | 41 / 100 (Low-moderate) | Added Copy-Paste One-Pager; found and fixed 75 real broken links missed by v1.2.0; −10 temporary uncommitted-work deduction |
| v1.2.0 | 2026-08-07 | 44 / 100 (Low-moderate) | Folder refactoring into 5_Symbols/ completed; H22 added (validation moves to 27.5) |
| v1.1.0 | 2026-08-07 | 44 / 100 (Low-moderate) | H20/H21 added, F9 upgraded |
| v1.0.3 | 2026-08-05 | 44 / 100 (Low-moderate) | Unchanged. Added Perplexity verification of H6 |
| v1.0.2 | 2026-08-05 | 44 / 100 (Low-moderate) | Unchanged |
| v1.0.1 | 2026-08-04 | 44 / 100 (Low-moderate) | 58-file uncommitted-work risk resolved |
| v1.0.0 | 2026-08-04 | 38 / 100 (Low-moderate) | Initial version |
