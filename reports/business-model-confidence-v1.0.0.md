# Business Model Confidence Report — v1.0.0

**Date:** 2026-08-04
**Produced by:** the `business-model-sanity-check` skill (`.claude/skills/business-model-sanity-check/SKILL.md`)
**What changed vs. prior version:** none — this is the initial version.

---

## Overall Score

# 38 / 100 — Low-moderate confidence

> Early-stage: most hypotheses are still untested, but the scan found **no fatal
> contradictions** in the business model itself. A low score this early in
> Customer Discovery/Validation is expected, not alarming — it means most bets are
> still open, which is exactly the state a pre-revenue, hypothesis-driven business
> should be in. The number is only interesting relative to where it moves next.

```
overall = round(0.7 × Hypothesis Validation Score + 0.3 × Site Integrity Score)
        = round(0.7 × 29 + 0.3 × 60)
        = round(20.3 + 18.0)
        = 38
```

70/30 weighting: this score is fundamentally about *business* confidence — are the
hypotheses validated — with site integrity (broken links, orphaned content, internal
document consistency) as a smaller risk-adjustment. A housekeeping problem shouldn't
swamp the business signal, but it should still count.

| Sub-score | Value | Meaning |
|---|---|---|
| Hypothesis Validation Score | **29 / 100** | Average of all 18 tracked hypotheses' status scores |
| Site Integrity Score | **60 / 100** | 100, minus deductions for the findings below |

---

## Hypothesis Validation Score — detail

Rubric: ✅ Validated = 100, 🟡 In Testing/Partially Validated/In Progress = 55,
⚪ Planned/Hypothesized = 20, ⚠️ Claimed-unverified = 10. Scored from each
hypothesis's **own Status line** in `HYPOTHESIS.md`, not the Summary Table (which
had drifted — see Finding 2 below).

| ID | Hypothesis | Status | Score |
|----|------------|--------|-------|
| H1 | Rising AI skills expectations | 🟡 Partially validated | 55 |
| H2 | Animated content beats standard formats | 🟡 In Testing (68% first data point) | 55 |
| H3 | Audience will pay for cert prep | 🟡 In Progress | 55 |
| H4 | YouTube funnel → 1% paid membership conversion | 🟡 In Testing | 55 |
| H5 | Cohorts sell out organically (no guarantee) | ⚪ Hypothesized | 20 |
| H6 | TAM/SAM/SOM market sizing | ⚠️ Claimed, unverified, partially grounded | 10 |
| H7 | Funnel CTR/conversion rates | ⚪ Hypothesized | 20 |
| H8 | Cohort delivers exam-ready PMF | ⚪ Hypothesized | 20 |
| H9 | $10k Stage 2 exit gate (2-launch repeat gate) | ⚪ Hypothesized/Decided | 20 |
| H10 | >40% retention = MVP video-quality metric | 🟡 In Testing | 55 |
| H11 | $100k ARR → hiring threshold | ⚪ Hypothesized | 20 |
| H12 | IT consulting/gov-contractor B2B channel | ⚪ Planned | 20 |
| H13 | 1,000x subscriber growth per video | ⚪ Planned | 20 |
| H14 | Multi-certification expansion (Nvidia/Azure/AWS) | ⚪ Planned | 20 |
| H15 | Founder transitions to full-time at Stage 4 | ⚪ Hypothesized/Decided | 20 |
| H16 | Paid advertisement, CAC/LTV-gated | ⚪ Planned | 20 |
| H17 | Onsite Cambridge + corporate pilot (Marianna) | ⚪ Planned | 20 |
| H18 | International onsite delivery (UK/Europe/USA) | ⚪ Planned | 20 |

**Sum:** 525 / 18 = **29.2 → 29**

Only 5 of 18 hypotheses (H1–H4, H10) have any real supporting data point at all;
the rest are still design-stage assumptions. That's the single biggest lever on
this score — see "What would move the score" below.

---

## Site Integrity Score — detail

Starts at 100, deductions below. **Total deductions: 40 → Site Integrity Score: 60.**

| # | Finding | Deduction | Status |
|---|---|---|---|
| 1 | **3 acidity-check findings still open** (F2 — no dataset behind H1's original "Validated" claim; F9 — pricing ladder has an unbridged >25x gap from $10/mo to $250–500 with no mid-tier; F11 — no churn/renewal model backs the $100 LTV assumption). Source: `reports/acidity-check-report-v1.1.0.md`. | −15 | Open (pre-existing, tracked) |
| 2 | **2 acidity-check findings partially addressed** (F3 — single-founder/single-platform risk, mitigation pilots in progress but not run yet; F7 — cost-side model exists but payment-processing fees and hire-affordability against $100k ARR are still unmodeled). | −5 | Partial (pre-existing, tracked) |
| 3 | **HYPOTHESIS.md internal inconsistency:** H3's Summary Table row read "⚪ Planned" while its own entry read "🟡 In Progress (upgraded 2026-08-04)." | −5 | ✅ **Fixed this run** — table row corrected to match the entry. |
| 4 | **hypothesis.html stale count:** the hero card stated "17 tracked hypotheses" / "0 of 17" while `HYPOTHESIS.md` has tracked 18 hypotheses since v1.9.0 (H18 added 2026-08-04). | −5 | ✅ **Fixed this run** — updated to 18 in both spots, and added a link from `hypothesis.html` to `confidence-report.html`. |
| 5 | **A complete, coherent feature — 58 files — sits entirely uncommitted in git.** `git status --porcelain` shows 18 new per-hypothesis detail pages (`hyp-h1.html`–`hyp-h18.html`, all `??`) plus **40 existing pages modified** (`M`) to cross-link plain-text "H12"-style mentions into `<a href="hyp-h12.html">H12</a>` links — e.g. `advertisement.html`, `bmc-channels.html`, `evidence-map.html`, `target-audience.html`, `todo.html`, and 35 more. Confirmed real and coherent by diffing several of the modified files (not corruption or a stray edit). This is a **data-safety** finding, not a reachability one — the pages are genuinely linked and working — but a `git clean -fd`, disk failure, or accidental `git checkout .` before this is committed would silently destroy a completed, working feature. | −10 | Open — recommend committing all 58 files together in one commit (they're one feature) before further site work continues. |
| 6 | **Broken local links:** 0 confirmed. One regex false-positive (`markdown_renderer.html` line 76's own `href="$2"` string, which is JS template-replacement syntax, not a real link) was checked and excluded. | 0 | Pass |
| 7 | **Headline business numbers cross-file consistency:** $10,000 Stage 2→3 gate (47 mentions), $100,000 ARR Stage 4 trigger (9 mentions), 1,000x subscriber growth (24 mentions), and >40% MVP retention floor (29 mentions, plus the 68% H2 data point correctly presented as evidence *exceeding* the target, not a conflicting target) — all consistent across every page that states them. The GBP/"£10,000" phrasing flagged in `HYPOTHESIS.md`'s own H9 text never made it onto a live page (confirmed via `grep -rn '£10' *.html` → zero hits), so it's contained to internal notes, not a live-site contradiction. | 0 | Pass |

---

## What would move the score

**Highest-leverage next action:** get real data behind one more of the five
0-data hypotheses (H5, H7, H8, H9, or H11) — each is a Stage 2 gate-defining
hypothesis still sitting at 20/100 purely because no experiment has run yet, not
because of any negative signal. Moving even one of these from ⚪ Hypothesized to
🟡 In Testing would lift the Hypothesis Validation Score by ~2 points and the
overall score by ~1.5 points — small numerically, but it's the real signal this
score exists to track, versus the site-integrity fixes above, which are one-time
and already largely closed out.

**Second-highest leverage:** commit the 58 uncommitted files (Finding 5) in one
commit. It's a 10-point site-integrity gain for a few minutes of work, and
removes a real risk of losing an entire completed, working feature.

---

## Version History

| Version | Date | Overall Score | Note |
|---|---|---|---|
| v1.0.0 | 2026-08-04 | 38 / 100 (Low-moderate) | Initial version. |
