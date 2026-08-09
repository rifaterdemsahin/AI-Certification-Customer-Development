# Business Model Confidence Report — v1.3.0

> **Superseded by [v1.4.0](business-model-confidence-v1.4.0.md)** (2026-08-09) — that run updates H11 (weekday cohorts run by TAs) and H14 (Nvidia, Microsoft, Google certifications) across spec, memory, and dashboard files.

**Date:** 2026-08-09
**Produced by:** the `business-model-sanity-check` skill (`.claude/skills/business-model-sanity-check/SKILL.md`)
**What changed vs. v1.2.0:** minor bump — added `5_Symbols/product/one-pager.html` (a plain-text, copy-paste business summary for external validation sites), and a full re-scan of every `href` on the whole site found **75 real broken links** that v1.2.0's scan missed — a regression from the `03b7d85` folder-refactor commit, concentrated in root-level pages (`motivation.html` alone had 40 broken links) and in `dictionary.html` references from sibling directories. All 75 were fixed and verified in this same run (0 remain). **Result: the overall score is 41/100, down from 44/100 — not because the business got worse, but because this run's scan is honest about a temporary uncommitted-work state (this batch of fixes + the new page) that v1.2.0's scan didn't have. Hypothesis Validation is unchanged at 27.5/100 (displayed 28). Site Integrity drops from 82.5 to 72.5 this run, purely from the −10 uncommitted-work deduction — expected to clear immediately once this batch is committed, the same pattern seen between v1.0.0 (38) and v1.0.1 (44).**

---

## Overall Score

# 41 / 100 — Low-moderate confidence

> Hypothesis Validation held flat at 27.5/100 — no hypothesis crossed a status tier this run. Site Integrity fell to 72.5/100 this run for one reason only: the uncommitted-work deduction (−10), because this run's fixes and the new one-pager page are sitting in the working tree at scan time. The genuinely good news this run — 75 real broken links found and fully fixed, 0 remaining, 0 orphaned pages — earns 0 net deduction, since it replaces what should have been a large new penalty with the same "0" v1.2.0 mistakenly reported. Expect the uncommitted-work deduction to clear on the next re-run once this batch is committed.

```
overall = round(0.7 × Hypothesis Validation Score + 0.3 × Site Integrity Score)
        = round(0.7 × 27.50 + 0.3 × 72.50)
        = round(19.25 + 21.75)
        = round(41.00)
        = 41
```

| Sub-score | v1.2.0 | v1.3.0 | Change |
|---|---|---|---|
| Hypothesis Validation Score | 27.5 / 100 | **27.5 / 100** | — |
| Site Integrity Score | 82.5 / 100 | **72.5 / 100** | ↓ 10.0 (temporary — uncommitted work) |
| **Overall** | **44 / 100** | **41 / 100** | ↓ 3 |

---

## Hypothesis Validation Score — 27.5/100 (displayed 28/100)

Re-derived fresh from each hypothesis's own **Status:** line in `HYPOTHESIS.md`. No status changed since v1.2.0 — same 22-hypothesis table, same sum.

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
| H11 | $100k ARR → hiring threshold | ⚪ Hypothesized | 20 |
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

**Sum:** 605 across 22 hypotheses → 605 / 22 = **27.500… → 28/100** (unchanged from v1.2.0).

---

## Site Integrity Score — 72.5/100 (down from 82.5)

Re-checked fresh across all HTML files, per the skill's Step 3:

| # | Finding | v1.2.0 | v1.3.0 | Deduction |
|---|---|---|---|---|
| 1 | Acidity-check findings still open (F2, F11) | −10 | −10 | Unchanged |
| 2 | Acidity-check findings partially addressed (F3, F7, F9) | −7.5 | −7.5 | Unchanged |
| 3 | HYPOTHESIS.md table/entry mismatches | 0 | 0 | All 22 rows match their entries |
| 4 | **Broken local links** | 0 (v1.2.0's scan missed this) | **0 (after fixing 75 found this run)** | See below |
| 5 | Orphaned pages | 0 | 0 | New `one-pager.html` reachable via `nav.js` + 2 inbound links |
| 6 | Headline number cross-file consistency | 0 | 0 | $10k / 1,000x / $100k / >40% all consistent |
| 7 | **Uncommitted work** (`git status --porcelain`) | 0 | **−10** | New — see below |

**Total deductions: 27.5 → Site Integrity Score: 72.5**

### Finding detail: 75 broken links found and fixed (net 0 deduction)

A programmatic full-repo scan of every `href="..."` in every `*.html` file (excluding `http(s)://`, `mailto:`, `#`, `javascript:`, and JS template-literal false positives like `${page.url}`) found **75 real broken links** — a regression from the `03b7d85` "Refactor project structure to 5_Symbols/" commit that v1.2.0's report incorrectly scored as "0 broken links." Root cause: two systematic path errors introduced by the refactor —

1. **Root-level pages referenced without the `../../` prefix** from files now living two directories deep under `5_Symbols/`. `motivation.html` (root) was the single biggest offender: it links to 26 unique targets (`hypothesis.html`, `bmc-revenue-streams.html`, `hyp-h1.html` through `hyp-h18.html`, etc.) that all moved into `5_Symbols/` subfolders during the refactor, none of which were updated — 40 broken `href` occurrences in that one file alone. `exam-topics.html` (root) had the same problem for 5 targets.
2. **`dictionary.html`** moved to `5_Symbols/product/dictionary.html` during the refactor, but 7 pages in sibling directories (`hypotheses/`, `stages/`, `comp/`, `growth/`) still referenced it as a bare `dictionary.html` instead of `../product/dictionary.html`.

All 75 were resolved unambiguously (each broken filename existed exactly once on disk) and fixed in place across 21 files in this same run. A second full-repo scan afterward confirmed **0 broken links remain**. This finding earns a **net 0 deduction** — not a bonus — because it replaces an incorrect "0" the site should have had all along; it is reported in full here for auditability, not to claim credit for fixing something this report itself would otherwise have penalized.

### Finding detail: uncommitted work (−10, temporary)

At scan time, `git status --porcelain` shows this run's own changes sitting uncommitted: the new `5_Symbols/product/one-pager.html`, the 21-file broken-link fix, and the `nav.js`/`HYPOTHESIS.md` updates that go with them. Per the skill's rubric, this is a flat −10 regardless of file count. This mirrors the exact pattern between v1.0.0 (flagged −10 for 58 uncommitted files, scored 38 overall) and v1.0.1 (0 deduction after committing, scored 44 overall) — expect the same recovery once this batch is committed as part of the same update cycle.

---

## What Would Move the Score

**Highest leverage right now is committing this batch** — it clears the temporary −10 uncommitted-work deduction and should return Site Integrity to ~82.5, restoring the overall score to ~44 on the next re-run, with no new business evidence required.

Beyond that, the highest-leverage *business* action is unchanged from v1.2.0: **H9** (the $10k Stage 2→3 gate) — two consecutive paid cohort launches combining to $10,000 — since it gates H15, H16, and H19 downstream and is the single biggest lever on the Hypothesis Validation Score.

---

## Version History

| Version | Date | Overall Score | Note |
|---|---|---|---|
| v1.3.0 | 2026-08-09 | 41 / 100 (Low-moderate) | Added Copy-Paste One-Pager; found and fixed 75 real broken links missed by v1.2.0; −10 temporary uncommitted-work deduction |
| v1.2.0 | 2026-08-07 | 44 / 100 (Low-moderate) | Folder refactoring into 5_Symbols/ completed; H22 added (validation moves to 27.5) |
| v1.1.0 | 2026-08-07 | 44 / 100 (Low-moderate) | H20/H21 added, F9 upgraded |
| v1.0.3 | 2026-08-05 | 44 / 100 (Low-moderate) | Unchanged. Added Perplexity verification of H6 |
| v1.0.2 | 2026-08-05 | 44 / 100 (Low-moderate) | Unchanged |
| v1.0.1 | 2026-08-04 | 44 / 100 (Low-moderate) | 58-file uncommitted-work risk resolved |
| v1.0.0 | 2026-08-04 | 38 / 100 (Low-moderate) | Initial version |
