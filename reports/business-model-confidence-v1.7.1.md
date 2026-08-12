# Business Model Confidence Report — v1.7.1

> **Superseded by [v1.7.2](business-model-confidence-v1.7.2.md).**

**Date:** 2026-08-12
**Produced by:** the `business-model-sanity-check` skill (`.claude/skills/business-model-sanity-check/SKILL.md`)
**What changed vs. v1.7.0:** Founder configured 7 live cohort classrooms in Skool (Foundations → Agentic Architectures → Multi-Agent Patterns → Claude Code CLI & Personal Automation → Certification/RAG/Guardrails → Forward Deployed Engineering → Second Brain). Created `5_Symbols/growth/sales-marketing-roadmap.html` and cross-linked it from `skool-lms-integration.html` and `skool-vs-youtube.html`. Added curriculum-scope evidence to H5, H8, and H14 — no hypothesis changed status emoji, so the Hypothesis Validation Score holds flat. This run also surfaces 3 pre-existing broken-link occurrences (2 distinct targets) that earlier report versions did not catch — patch bump, no new check category.

---

## Overall Score

# 37 / 100 — Low-moderate confidence

> Hypothesis Validation holds at 30.8% (31/100). Site Integrity falls to 52.5% — a newly-surfaced −15 for 3 pre-existing broken-link occurrences not caught by prior runs, plus the usual −10 uncommitted-work deduction. Will rise once committed and once the broken links (pre-existing, not introduced by this batch) are fixed.

```
overall = round(0.7 × Hypothesis Validation Score + 0.3 × Site Integrity Score)
        = round(0.7 × 30.80 + 0.3 × 52.50)
        = round(21.56 + 15.75)
        = round(37.31)
        = 37
```

| Sub-score | v1.7.0 | v1.7.1 | Change |
|---|---|---|---|
| Hypothesis Validation Score | 30.8 / 100 | **30.8 / 100** | 0.0 |
| Site Integrity Score | 67.5 / 100 | **52.5 / 100** | −15.0 |
| **Overall** | **42 / 100** | **37 / 100** | **−5.0** |

---

## Hypothesis Validation Score — 30.8/100 (displayed 31/100)

Re-derived fresh from each hypothesis's own **Status:** line in `HYPOTHESIS.md`. All 25 hypotheses hold the same status emoji as v1.7.0 — H5, H8, and H14 gained new curriculum-scope evidence text (the 7-cohort Skool sequence) but none crossed a status threshold, since enrollment/conversion/multi-vendor-content data is still unmeasured.

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
| H18 | International onsite B2B | ⚪ Planned | 20 |
| H19 | Stage timeline estimates | ⚪ Planned/estimated | 20 |
| H20 | MAOT — delight threshold correlates with referrals | ⚪ Planned | 20 |
| H21 | $29 Exam Prep Bundle is a viable entry SKU | ⚪ Planned | 20 |
| H22 | Certified-talent placement (FDE model) Stage 4 vision | ⚪ Planned | 20 |
| H23 | 4DX weekly accountable rhythm overcomes whirlwind | 🟡 In Testing | 55 |
| H24 | Emotional Pain Drivers (fear, greed, insecurity) | 🟡 In Testing | 55 |
| H25 | Practice exam & question bank gap is a critical value blocker | 🟡 In Testing | 55 |

**Sum:** 770 across 25 hypotheses → 770 / 25 = **30.80% → 31/100** (rounded).

---

## Site Integrity Score — 52.5/100 (down from 67.5)

Re-checked fresh across all HTML files, per the skill's Step 3:

| # | Finding | v1.7.0 | v1.7.1 | Deduction | Rationale |
|---|---|---|---|---|---|
| 1 | Acidity-check findings still open (F2, F11, F12) | −15 | −15 | −15 | Unchanged (3 findings) — not re-audited this run, carried forward from v1.7.0. |
| 2 | Acidity-check findings partially addressed (F3, F7, F9) | −7.5 | −7.5 | −7.5 | Unchanged (3 findings) — carried forward. |
| 3 | HYPOTHESIS.md table/entry mismatches | 0 | 0 | 0 | All 25 rows match their entries. |
| 4 | Broken local links | 0 | **−15** | **−15** | **Newly surfaced this run** (not introduced by this batch): a full-repo `href` scan found 3 real broken-link occurrences across 2 distinct targets — `hyp-h19.html` does not exist but is linked from `5_Symbols/hypotheses/hyp-h23.html` and `5_Symbols/strategy/evidence-map.html`; `target-audience.html` is linked without a path prefix from `5_Symbols/product/idea.html` (the real file lives at `5_Symbols/strategy/target-audience.html`). Pre-existing; earlier report versions did not catch this. |
| 5 | Orphaned pages | 0 | 0 | 0 | Full reachability scan confirms every page (including the new `sales-marketing-roadmap.html`) is reachable via `nav.js` or an `href`. |
| 6 | Headline number cross-file consistency | 0 | 0 | 0 | Consistent — no stray currency/number variants found live on any page. |
| 7 | Uncommitted work (`git status --porcelain`) | −10 | −10 | −10 | New, distinct batch: `skool-lms-integration.html`, `skool-vs-youtube.html`, `HYPOTHESIS.md`, `nav.js` modified and `sales-marketing-roadmap.html` added, all part of the same 7-cohort Skool curriculum feature. Will clear once committed. |

**Total deductions: 47.5 (15 + 7.5 + 15 + 10) → Site Integrity Score: 52.5**

---

## What Would Move the Score

Two distinct levers this run:
1. **Immediate, cheap fix:** repair the 2 broken link targets (`hyp-h19.html` referenced from `hyp-h23.html` and `evidence-map.html`, and the missing path prefix on `idea.html`'s `target-audience.html` link) — worth +15 to Site Integrity on its own, independent of any business progress.
2. **The highest-leverage *business* action remains H9** (the $10k Stage 2→3 gate) — two consecutive paid cohort launches combining to $10,000 — since it gates H15, H16, and H19 downstream and is the single biggest lever on the Hypothesis Validation Score. The new 7-cohort Skool curriculum (see `sales-marketing-roadmap.html`) is the first concrete content asset to sell against this gate, but enrollment/conversion data against it is still unmeasured.

---

## Version History

| Version | Date | Overall Score | Note |
|---|---|---|---|
| v1.7.1 | 2026-08-12 | 37 / 100 (Low-moderate) | Founder configured 7 live cohort classrooms in Skool; created `sales-marketing-roadmap.html`; added curriculum-scope evidence to H5, H8, H14; surfaced 2 pre-existing broken-link targets (−15, new); −10 temporary uncommitted-work deduction |
| v1.7.0 | 2026-08-11 | 42 / 100 (Low-moderate) | Created "Practice Exam & Question Bank Gap" page (`5_Symbols/strategy/practice-exams-gap.html`), added H25 (Blueprint-mapped Practice Exam Gap) as a critical product risk and value blocker, and registered it in the Strategy dropdown menu and search index; −10 temporary uncommitted-work deduction |
| v1.6.5 | 2026-08-11 | 41 / 100 (Low-moderate) | Created "Your Market Reality Check" page (`5_Symbols/strategy/market-reality-check.html`) detailing JTBD, unspoken insights, value chain, table stakes, and Vonos.ai visual integration; −10 temporary uncommitted-work deduction |
| v1.6.4 | 2026-08-11 | 41 / 100 (Low-moderate) | Created "Tell Us About Your Idea" page (`5_Symbols/product/idea.html`) and linked to it from Business Plan Summary; Validation and Site Integrity hold flat; −10 temporary uncommitted-work deduction |
| v1.6.3 | 2026-08-11 | 41 / 100 (Low-moderate) | Added Skool vs. YouTube comparison page (`skool-vs-youtube.html`) and linked to H4, H5, H7, H8; Validation and Site Integrity hold flat; −10 temporary uncommitted-work deduction |
| v1.6.2 | 2026-08-11 | 41 / 100 (Low-moderate) | Added Claude Partner Strategy page (`claude-partner-strategy.html`) detailing CPN Services Program (Select Tier) benefits and mapping them to Steve Blank's Customer Development stages, cross-linking to H12, H1, H6, and H17; Validation and Site Integrity hold flat; −10 temporary uncommitted-work deduction |
| v1.6.1 | 2026-08-11 | 41 / 100 (Low-moderate) | Added Skool LMS & Community Integration page (`skool-lms-integration.html`) and linked to H5, H8, H21; Validation and Site Integrity hold flat; −10 temporary uncommitted-work deduction |
| v1.6.0 | 2026-08-11 | 41 / 100 (Low-moderate) | Added dedicated Customer Pain Points strategy page (`pain-points.html`) and H24 (Emotional Pain Drivers) detailed card content; Validation rises to 29.8% (30/100); −10 temporary uncommitted-work deduction |
| v1.5.7 and earlier | — | — | See `reports/business-model-confidence-v1.7.0.md` for the full prior history. |
