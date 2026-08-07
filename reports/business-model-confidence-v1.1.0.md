> [!WARNING]
> This version is **superseded** by [v1.2.0](markdown_renderer.html?src=reports/business-model-confidence-v1.2.0.md).

# Business Model Confidence Report — v1.1.0

**Date:** 2026-08-07
**Produced by:** the `business-model-sanity-check` skill (`.claude/skills/business-model-sanity-check/SKILL.md`)
**What changed vs. v1.0.3:** minor bump — since v1.0.3 (2026-08-05), a batch of 15 new audience-specific pages shipped (investor/prospect/partner-facing), 2 new hypotheses were added (**H20** — MAOT, **H21** — the $29 Exam Prep Bundle), and acidity check Finding F9 (pricing-ladder gap) was upgraded from STILL OPEN to PARTIALLY ADDRESSED following the new `reports/acidity-check-report-v1.2.0.md`. **Result: the two sub-scores moved in opposite directions and the overall score landed within rounding of where it started — 44/100, now the fourth run at essentially this number.**

---

## Overall Score

# 44 / 100 — Low-moderate confidence

> Two real, opposite-direction changes happened this run, and they nearly
> cancelled out. Adding H20 and H21 — both ⚪ Planned, both below the prior
> 29/100 average — pulled the Hypothesis Validation Score down slightly (29 →
> 28). Separately, upgrading F9 from STILL OPEN to PARTIALLY ADDRESSED (a real
> product now exists to bridge the pricing gap) pulled the Site Integrity Score
> up (80 → 82.5). The net effect rounds back to the same 44. **This is not a
> stale re-run** — read the two sub-score sections below for what actually moved
> and why the arithmetic happened to land close to where it started.

```
overall = round(0.7 × Hypothesis Validation Score + 0.3 × Site Integrity Score)
        = round(0.7 × 27.86 + 0.3 × 82.5)
        = round(19.5 + 24.75)
        = round(44.25)
        = 44
```

| Sub-score | v1.0.3 | v1.1.0 | Change |
|---|---|---|---|
| Hypothesis Validation Score | 29 / 100 | **27.9 / 100** (displayed 28) | ↓ 1.1 |
| Site Integrity Score | 80 / 100 | **82.5 / 100** | ↑ 2.5 |
| **Overall** | **44 / 100** | **44 / 100** | — |

---

## Hypothesis Validation Score — 27.9/100 (displayed 28/100)

Re-derived fresh from each hypothesis's own **Status:** line in `HYPOTHESIS.md`
(not the Summary Table, which was independently cross-checked and found to match
exactly — see Site Integrity Finding 3 below).

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
| H11 | $100k ARR hiring threshold | ⚪ Hypothesized | 20 |
| H12 | B2B/consulting-firm channel | ⚪ Planned | 20 |
| H13 | 1,000x subscriber growth | ⚪ Planned | 20 |
| H14 | Multi-certification expansion | ⚪ Planned | 20 |
| H15 | Founder goes full-time at Stage 4 | ⚪ Hypothesized/Decided | 20 |
| H16 | Paid ads, post-validation only | ⚪ Planned | 20 |
| H17 | Cambridge + Marianna corporate pilot | ⚪ Planned | 20 |
| H18 | International onsite delivery | ⚪ Planned | 20 |
| H19 | Stage timeline estimates | ⚪ Planned/estimated | 20 |
| **H20** | **MAOT — crossing the delight threshold predicts organic referral (new)** | ⚪ Planned | 20 |
| **H21** | **$29 Exam Prep Bundle is a viable entry SKU (new)** | ⚪ Planned | 20 |

**Sum:** 585 across 21 hypotheses → 585 / 21 = **27.857… → 28/100** (down from
29/100 across 19 hypotheses in v1.0.3).

**Why it moved down, and why that's expected, not a regression:** H20 and H21
are both brand-new, both honestly scored ⚪ Planned (20/100) because neither has
been tested yet — a referral-tracking mechanism doesn't exist for H20, and the
$29 bundle hasn't been built or sold for H21. Adding two below-average
hypotheses to the denominator mechanically pulls the average down slightly, even
though nothing already-tracked got worse. This is the rubric working as
intended: **new unvalidated hypotheses should make the score look slightly less
confident, not more** — a business plan doesn't earn confidence points just for
having more ideas on paper.

---

## Site Integrity Score — 82.5/100 (up from 80)

Re-checked fresh across all 118 HTML files:

| # | Finding | v1.0.3 | v1.1.0 |
|---|---|---|---|
| 1 | Acidity-check findings still open | −15 (F2, F9, F11 × −5) | **−10** (F2, F11 × −5 — **F9 moved out of this bucket**, see `reports/acidity-check-report-v1.2.0.md`) |
| 2 | Acidity-check findings partially addressed | −5 (F3, F7 × −2.5) | **−7.5** (F3, F7, F9 × −2.5 — F9 now here instead) |
| 3 | HYPOTHESIS.md table/entry mismatches | 0 | 0 — all 21 Summary Table rows (including new H20, H21) match their own entries' leading status exactly; verified programmatically. |
| 4 | Uncommitted work | 0 | 0 — this run's new/changed files (15 new pages, 3 reworked pages, `nav.js`, `index.html`, `HYPOTHESIS.md`, this report, and the new acidity report) are committed together with this report, per the workflow the founder requested. |
| 5 | Broken local links | 0 | 0 — re-scanned all 118 HTML files programmatically; the two apparent hits (`self-assessment.html`'s `' + link + '` and `markdown_renderer.html`'s `$2`) are confirmed false positives from inline JS string-concatenation/regex code, not real `href` attributes. |
| 6 | Orphaned pages | 0 | 0 — every one of the 15 new pages is reachable both via `nav.js` (groups + search index) and via `index.html`'s new "Investor, Prospect & Partner Pages" grid; verified programmatically against the full reachability graph. |
| 7 | Headline number cross-file consistency | 0 | 0 — grepped all live HTML for stray currency/number variants (e.g. `£10,000`, off-target subscriber-growth multiples); none found outside `HYPOTHESIS.md`'s own historical prose, which is expected and not a live-page defect. |
| 8 | HYPOTHESIS.md hypothesis-count stale reference | — (new check) | 0 — found and fixed in this same run: `hypothesis.html`'s hero card still said "19 tracked hypotheses" / "0 of 19" after H20/H21 were added, the same class of drift caught and fixed in v1.0.0 for an earlier count. Corrected to "21 tracked hypotheses" / "0 of 21" before this report published, so it scores 0 rather than a deduction — same convention as v1.0.0's same-run fixes. |

**Total deductions: 17.5 → Site Integrity Score: 82.5** (up from 80/100 in v1.0.3).

---

## What Would Move the Score — Expected Evidence, Component by Component

The two sub-scores need different kinds of evidence to move further. Neither
moves from more supporting research or more pages — only from real, measured
outcomes.

### To raise the Hypothesis Validation Score above 28/100

The single highest-leverage move is **getting any one of the fourteen ⚪-tier
hypotheses to a real 🟡 or ✅ result**, since each status-tier jump is worth 35
points to that hypothesis alone. In priority order, given what's already closest
to being testable:

1. **H9 ($10k Stage 2 gate) — the single highest-leverage hypothesis on the
   site.** It gates H15, H16, and H19 downstream (see the Dependency Map in
   `HYPOTHESIS.md`), so validating it doesn't just add 35 points to H9 — it
   unblocks the evidence path for three other hypotheses. **Evidence needed:**
   one full paid cohort launch, then a second consecutive one, combining to
   $10,000 (the repeat gate defined in `validation-repeat-gate.html`).
2. **H5 (cohorts sell out organically) — feeds H8, H9, H16.** **Evidence
   needed:** a real enrollment count from the first paid cohort launch (20–40
   students at $250–$500, per the hypothesis's own target), not just the
   free-tier attendance already logged.
3. **H21 ($29 Exam Prep Bundle) — the newest, and cheapest to test.** Unlike H9,
   this doesn't require a live cohort — it requires building and listing the
   bundle, then observing whether it converts prospects who wouldn't have
   bought the $10/mo or $250–500 tiers. **Evidence needed:** first real sales
   data (conversion count + evidence the higher tiers didn't cannibalize).
4. **H20 (MAOT / referral threshold).** **Evidence needed:** a defined
   referral-count/NPS tracking mechanism per cohort cycle, then at least one
   cycle of real data showing whether referral rate correlates with the
   proposed delight threshold.
5. **H6 (TAM/SAM/SOM sizing) — stuck at ⚠️ (10/100), the score's current floor.**
   This is the one hypothesis where *more research* provably won't move the
   score (see v1.0.3's write-up) — it needs either an audited sizing study or
   real observed reach/conversion data against the ~50k SOM figure specifically.

**What will not move this score, however well-executed:** more supporting pages,
more independent research reports, more founder notes, or more hypotheses added
without a corresponding real result. The rubric scores conclusions, not
supporting material — this is intentional (see v1.0.3's H6 write-up for the
canonical example).

### To raise the Site Integrity Score above 82.5/100

Site Integrity's remaining 17.5-point gap is entirely accounted for by the two
acidity-check buckets — there are no broken links, orphans, mismatches, or
uncommitted-work deductions left to fix. **Evidence needed, one finding at a
time:**

- **F2 (−5, STILL OPEN):** either produce a real search-volume/job-scrape
  dataset backing H1's original "Validated" claim, or formally demote the
  claim's phrasing on `comp-problem-solution.html` to match what's actually
  evidenced (the latter is faster and was already the acidity report's own
  top recommendation).
- **F11 (−5, STILL OPEN):** a real churn/renewal dataset for the $10/mo
  membership tier — even one full cohort of month-over-month retention data
  would let `unit-economics.html`'s $100 LTV figure move from a stated
  assumption to a measured one.
- **F3 (−2.5, PARTIALLY ADDRESSED):** the Cambridge onsite pilot and the
  Marianna corporate pilot (H17) actually running would close this the rest of
  the way — the mitigation is designed, just not yet executed.
- **F7 (−2.5, PARTIALLY ADDRESSED):** modeling payment-processing fees against
  the $10/mo, $29 bundle, and $250–500 lines, plus confirming whether $100k ARR
  actually leaves margin for the three planned Stage 4 hires.
- **F9 (−2.5, PARTIALLY ADDRESSED, new this round):** real sales data for the
  $29 bundle (same evidence as H21 above) — this finding and H21's hypothesis
  score move together, since they're the same underlying claim viewed from two
  angles (integrity gap vs. business hypothesis).

At full resolution of all five remaining findings, Site Integrity would reach
100/100 — a ceiling this business can reach even before Hypothesis Validation
does, since site integrity is about housekeeping and honesty, not proven
product-market fit.

---

## Version History

| Version | Date | Overall Score | Note |
|---|---|---|---|
| v1.1.0 | 2026-08-07 | 44 / 100 (Low-moderate) | Two opposite-direction changes (H20/H21 added, F9 upgraded) net to the same rounded score. See sub-score sections above for what actually moved. |
| v1.0.3 | 2026-08-05 | 44 / 100 (Low-moderate) | Unchanged — added independent Perplexity layer-by-layer verification of H6's TAM/SAM/SOM claim; sharpens which layer is grounded (SAM) vs. still assumed (TAM, SOM) without changing H6's tracked status tier. |
| v1.0.2 | 2026-08-05 | 44 / 100 (Low-moderate) | Unchanged — re-scan of 100 files and 19 hypotheses confirms no status-tier or integrity-defect change since v1.0.1. |
| v1.0.1 | 2026-08-04 | 44 / 100 (Low-moderate) | 58-file uncommitted-work risk resolved; everything else unchanged. |
| v1.0.0 | 2026-08-04 | 38 / 100 (Low-moderate) | Initial version. |
