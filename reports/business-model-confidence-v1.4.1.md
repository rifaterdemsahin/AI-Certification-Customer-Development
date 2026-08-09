# Business Model Confidence Report — v1.4.1

**Date:** 2026-08-09
**Produced by:** the `business-model-sanity-check` skill (`.claude/skills/business-model-sanity-check/SKILL.md`)
**What changed vs. v1.4.0:** patch bump — no new hypothesis crossed a status tier and no new check category was added. Two things happened since v1.4.0: (1) `5_Symbols/product/dictionary.html` gained a "Moat" glossary entry and `5_Symbols/strategy/evidence-map.html` gained an "External Review: Grok Feedback on the One-Pager" section — both content additions, not hypothesis-status changes; (2) this run's fresh orphan-page scan (Step 3, check 2) found a genuinely new finding: **`5_Symbols/markdown_renderer.html` is an orphaned duplicate** of the root `markdown_renderer.html`, unreferenced anywhere in the site or `nav.js` — left behind by the 5_Symbols/ refactor and missed by v1.3.0's link-fix pass (that pass checked broken links, not orphans). **Result: the overall score is 40/100, down from 41/100.** Hypothesis Validation holds flat at 27.5 (28/100). Site Integrity drops from 72.5 to 67.5: the temporary −10 uncommitted-work deduction clears (this batch is committed as part of this same run), but is replaced by a new −15 orphaned-page deduction.

---

## Overall Score

# 40 / 100 — Low-moderate confidence

> Hypothesis Validation held flat at 27.5/100 — no hypothesis crossed a status tier this run. Site Integrity moved from 72.5 to 67.5: the −10 uncommitted-work deduction cleared (working tree is committed as of this run), but a newly discovered orphaned page (`5_Symbols/markdown_renderer.html`, a stray duplicate unreferenced anywhere) introduces a fresh −15 deduction, a net −5.

```
overall = round(0.7 × Hypothesis Validation Score + 0.3 × Site Integrity Score)
        = round(0.7 × 27.50 + 0.3 × 67.50)
        = round(19.25 + 20.25)
        = round(39.50)
        = 40
```

| Sub-score | v1.4.0 | v1.4.1 | Change |
|---|---|---|---|
| Hypothesis Validation Score | 27.5 / 100 | **27.5 / 100** | — |
| Site Integrity Score | 72.5 / 100 | **67.5 / 100** | −5 |
| **Overall** | **41 / 100** | **40 / 100** | **−1** |

---

## Hypothesis Validation Score — 27.5/100 (displayed 28/100)

Re-derived fresh from each hypothesis's own **Status:** line in `HYPOTHESIS.md`. No status tier changed since v1.4.0.

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

## Site Integrity Score — 67.5/100 (down from 72.5)

Re-checked fresh across all HTML files, per the skill's Step 3:

| # | Finding | v1.4.0 | v1.4.1 | Deduction |
|---|---|---|---|---|
| 1 | Acidity-check findings still open (F2, F11) | −10 | −10 | Unchanged |
| 2 | Acidity-check findings partially addressed (F3, F7, F9) | −7.5 | −7.5 | Unchanged |
| 3 | HYPOTHESIS.md table/entry mismatches | 0 | 0 | All 22 rows match their entries. (Note, not scored: the H14 Summary Table row text still reads "(Nvidia/Azure/AWS)" while the entry itself and site copy now say Nvidia/Microsoft/Google — a textual drift, not a status-emoji mismatch, so not deducted under this rubric, but worth a table-text cleanup.) |
| 4 | Broken local links | 0 | 0 | Full-repo scan, 128 HTML files, 0 real broken links (3 regex hits were false positives inside inline JS template-literal/string code in `markdown_renderer.html`, `self-assessment.html`, `latest-pages.html`) |
| 5 | Orphaned pages | 0 | **−15 (new)** | `5_Symbols/markdown_renderer.html` — a full duplicate of the root `markdown_renderer.html` (different, larger content, newer timestamp), not referenced by `href` anywhere in the site and not registered in `nav.js`. Left over from the 5_Symbols/ folder refactor. Not deleted or wired in — flagged only, per this skill's scope. |
| 6 | Headline number cross-file consistency | 0 | 0 | $10k / 1,000x / $100k / >40% all consistent; the one other "10x/100x" hit (`bmc-capital-relationships.html`) is an unrelated labor-productivity multiplier, not a stray version of a headline number |
| 7 | Uncommitted work (`git status --porcelain`) | −10 | 0 | Cleared — this batch (dictionary.html, evidence-map.html, nav.js, this report, confidence-report.html, HYPOTHESIS.md) is committed as part of this run |

**Total deductions: 32.5 → Site Integrity Score: 67.5**

---

## What Would Move the Score

**Highest leverage right now is resolving the new orphan finding** — either delete the stray `5_Symbols/markdown_renderer.html` duplicate (if `markdown_renderer.html` at root is confirmed the canonical one every page links to) or register/redirect it, clearing the −15 deduction and returning Site Integrity to ~82.5 (overall ~78) with no new business evidence required. This is a pure housekeeping fix, not a founder decision.

Beyond that, the highest-leverage *business* action is unchanged: **H9** (the $10k Stage 2→3 gate) — two consecutive paid cohort launches combining to $10,000 — since it gates H15, H16, and H19 downstream and is the single biggest lever on the Hypothesis Validation Score.

---

## Version History

| Version | Date | Overall Score | Note |
|---|---|---|---|
| v1.4.1 | 2026-08-09 | 40 / 100 (Low-moderate) | Added Moat glossary entry + Grok external-review evidence; found new orphaned duplicate `5_Symbols/markdown_renderer.html` (−15); −10 uncommitted-work deduction cleared |
| v1.4.0 | 2026-08-09 | 41 / 100 (Low-moderate) | H11 and H14 updated to focus on weekday TA cohorts and Nvidia, Microsoft, Google certifications; −10 temporary uncommitted-work deduction |
| v1.3.0 | 2026-08-09 | 41 / 100 (Low-moderate) | Added Copy-Paste One-Pager; found and fixed 75 real broken links missed by v1.2.0; −10 temporary uncommitted-work deduction |
| v1.2.0 | 2026-08-07 | 44 / 100 (Low-moderate) | Folder refactoring into 5_Symbols/ completed; H22 added (validation moves to 27.5) |
| v1.1.0 | 2026-08-07 | 44 / 100 (Low-moderate) | H20/H21 added, F9 upgraded |
| v1.0.3 | 2026-08-05 | 44 / 100 (Low-moderate) | Unchanged. Added Perplexity verification of H6 |
| v1.0.2 | 2026-08-05 | 44 / 100 (Low-moderate) | Unchanged |
| v1.0.1 | 2026-08-04 | 44 / 100 (Low-moderate) | 58-file uncommitted-work risk resolved |
| v1.0.0 | 2026-08-04 | 38 / 100 (Low-moderate) | Initial version |
