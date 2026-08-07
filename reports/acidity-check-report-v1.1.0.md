> **Superseded by [`acidity-check-report-v1.2.0.md`](acidity-check-report-v1.2.0.md) (2026-08-07)** — F9 (pricing-ladder gap) upgraded from STILL OPEN to PARTIALLY ADDRESSED following the $29 Exam Prep Bundle addition. This version is kept as the historical record of findings as of 2026-08-04.

# Acidity Check Report v1.1 — AI Certification Helper Customer Development Model

**Version:** 1.1.0
**Date:** 2026-08-04
**Supersedes:** [`acidity-check-report-v1.0.md`](acidity-check-report-v1.0.md) (2026-08-01)
**Scope:** Full repository review, re-run against the site as it stands today, including the pages and hypothesis revisions added since v1.0.
**Method:** Same acid-test method as v1.0 — stress-test each finding for whether it has since been resolved, partially addressed, or remains open, rather than re-deriving the findings from scratch.

---

## 1. Executive Verdict (Updated)

**Still directionally plausible as a bootstrap content-to-cohort business, and meaningfully less speculative than it was in v1.0.** The single largest risk identified in v1.0 — that the target certification might not exist — is resolved: Anthropic launched the Claude Certified Architect – Professional exam via Pearson VUE in 2026, a near-exact match to what this site was built around. Several other structural gaps (no competitive analysis, unreconciled funnel math, a single-launch revenue gate, no cost-side model, no bus-factor mitigation) now have dedicated pages addressing them. **The business is still pre-revenue and still a stack of hypotheses, not a validated one** — nothing here manufactures evidence that doesn't exist yet — but the gaps that made the plan hard to *evaluate* are substantially closed.

**Does the business model make sense?** Same conditional yes as v1.0, now with firmer footing: the free→$10/mo→$250-500 pattern is well-worn, the cert-existence blocker is gone, and the irreversible decision (the Stage 2→3 gate) has been redesigned to require a repeat result rather than a single event.

---

## 2. Findings, Re-Assessed

### 🔴 Critical / Foundational Risk

**F1. Unverified certification target. → ✅ RESOLVED (2026-08-01).** Anthropic's Claude Certified Architect – Professional exam, $175 via Pearson VUE, launched and is documented in `reports/market-validation-argument-v1.0.md`. This was the single load-bearing risk in v1.0; it no longer applies.

**F2. "Validated" status asserted without evidence. → 🟡 STILL OPEN.** No dataset backs the original search-volume/job-scrape claim in `comp-problem-solution.html`. Not addressed this round — still the recommended next fix (see §3).

**F3. Single point of failure: platform and founder. → 🟡 PARTIALLY ADDRESSED.** Still true structurally — distribution remains ~100% YouTube-organic and delivery remains one person. New this round: `single-founder-bandwidth.html` makes the founder's actual weekly time ledger explicit (rather than leaving the ceiling unstated), and `risk-analysis.html`'s new "Active Mitigations Underway" section documents two concrete pilots in progress — onsite lessons in Cambridge and a corporate onsite product with partner Marianna (tracked as H17) — that begin to diversify both delivery format and who's involved in delivery. Neither pilot has run yet, so this is a mitigation-in-progress, not a closed finding.

### 🟠 Significant Gaps

**F4. No competitive analysis. → ✅ ADDRESSED.** `competitive-analysis.html` now names the actual alternatives (Udemy/Coursera cert-prep courses, official Anthropic/Pearson VUE materials, other YouTube educators, general AI bootcamps) and states the specific differentiation claim for each, plus a falsification test.

**F5. Funnel math doesn't reconcile across documents. → ✅ ADDRESSED.** `funnel-math.html` works both funnels (H4's 1%-of-views membership conversion and H7's 10%/2% cohort funnel) backward from the $10,000 target, shows they measure different things on different timelines, and provides a sensitivity table (8,900–80,000 views depending on assumptions) instead of leaving the two figures unreconciled.

**F6. A one-time revenue event is being used to trigger an irreversible life decision. → ✅ ADDRESSED.** `validation-repeat-gate.html` revises H9: the Stage 2→3 gate now requires **2 consecutive cohort launches** combining to $10,000, with an explicit check that launch 2 isn't just launch 1's warm contacts repeating. `quality-gates.html` and `stage-customer-validation.html` have been updated to match.

**F7. No cost side / unit economics anywhere. → 🟡 PARTIALLY ADDRESSED.** `unit-economics.html` (per-seat/per-member margins against the founder's £525/day IR35 contracting benchmark) and `cost-side-model.html` (business-level cost stack, break-even math) now price out what was previously untracked. Still open: payment processing fees remain unmodeled, and no cost model yet confirms whether $100k ARR (H11) actually leaves margin for the three planned Stage 4 hires — both are flagged explicitly on the new pages rather than left silent.

**F8. "Exam pass guarantee" is a real liability, not just marketing copy. → ✅ RESOLVED (2026-08-01).** All guarantee language was removed site-wide; `comp-business-model.html`, `comp-funnel.html`, and `comp-pmf.html` now explicitly disclaim that Anthropic alone issues the certification.

### 🟡 Moderate / Process Concerns

**F9. Pricing ladder has a wide, unbridged gap. → STILL OPEN.** $0 → $10/mo → $250–500 remains a >25x jump with no mid-tier offer. Not addressed this round.

**F10. The same metric is asked to prove three different things. → RESOLVED (2026-08-01, per HYPOTHESIS.md v1.2.0).** >40% retention was demoted to an MVP-only quality floor; H13 (1,000x subscriber growth) is now the distinct Stage 3 metric.

**F11. No churn/renewal assumption for the recurring tier. → STILL OPEN.** `unit-economics.html`'s $100 LTV figure (10-month average membership) is stated as a working assumption, not a measured one — the underlying churn model still doesn't exist.

### 🟢 What Holds Up (Unchanged)

Same as v1.0: the Steve Blank four-stage structure, the zero-CAC organic funnel design, genuine founder-market fit, and threshold-based (not intuition-based) gating for full-time transition and hiring.

---

## 3. Recommended Next Actions (Updated Priority Order)

1. ~~Verify the certification.~~ ✅ Done.
2. **Replace the unsupported "Validated" label** on `comp-problem-solution.html` (F2) — still the top open item.
3. ~~Run real customer discovery interviews (10–15).~~ 🟡 In progress — being run inside the existing free weekly Sunday 9–11pm cohort rather than as separate outreach; see `evidence-map.html` and `test-plan.html`.
4. ~~Build the missing backward-funnel model.~~ ✅ Done — `funnel-math.html`.
5. ~~Require the $10k gate to repeat.~~ ✅ Done — `validation-repeat-gate.html`.
6. ~~Draft a refund/guarantee policy.~~ ✅ Not needed — no guarantee is offered (F8 resolved), so there's no guarantee-liability refund case to draft against; `cost-side-model.html` notes $0 refund reserve is currently held.
7. **Add a channel-diversification experiment.** 🟡 In progress — the Cambridge onsite pilot and the Marianna corporate pilot (H17) are exactly this; neither has run yet.
8. ~~Add a cost-side model.~~ ✅ Done — `unit-economics.html` and `cost-side-model.html`, though payment fees and Stage 4 hire affordability remain open sub-items.
9. **New:** Instrument real view→CTR→newsletter→cohort numbers from the Sunday cohort funnel, replacing `funnel-math.html`'s sensitivity table with actuals.
10. **New:** Price out payment processing fees against the $10/mo and $250–500 revenue lines (flagged in `unit-economics.html` and `cost-side-model.html`).

---

## Change Log

- **v1.1.0** (2026-08-04): Re-assessed all 11 findings against the site's current state. F1 and F8 confirmed resolved (per HYPOTHESIS.md v1.1.0/v1.3.0); F10 confirmed resolved (per HYPOTHESIS.md v1.2.0); F4, F5, F6 marked resolved with new supporting pages (`competitive-analysis.html`, `funnel-math.html`, `validation-repeat-gate.html`); F3 and F7 marked partially addressed (`single-founder-bandwidth.html`, `risk-analysis.html`'s Active Mitigations Underway, `unit-economics.html`, `cost-side-model.html`); F2, F9, F11 remain open. Updated the recommended-actions list to reflect what's done, in progress, and still missing.
- **v1.0.0** (2026-08-01): Initial acidity check across all repository documents.
