> **Superseded by [`acidity-check-report-v1.3.0.md`](acidity-check-report-v1.3.0.md) (2026-08-10)** — added F12, certification access possibly gated to Anthropic Partner Network firms. This version is kept as the historical record of findings as of 2026-08-07.

# Acidity Check Report v1.2 — AI Certification Helper Customer Development Model

**Version:** 1.2.0
**Date:** 2026-08-07
**Supersedes:** [`acidity-check-report-v1.1.0.md`](acidity-check-report-v1.1.0.md) (2026-08-04)
**Scope:** Full repository review, re-run against the site as it stands today. Triggered specifically by the `business-model-sanity-check` skill re-run of 2026-08-07, which flagged that Finding F9 (pricing-ladder gap) is now directly addressed by new content shipped since v1.1.0.
**Method:** Same acid-test method as v1.0/v1.1 — stress-test each finding for whether it has since been resolved, partially addressed, or remains open, rather than re-deriving the findings from scratch.

---

## 1. Executive Verdict (Updated)

Unchanged from v1.1.0's overall read: still directionally plausible, still pre-revenue, still a stack of hypotheses rather than a validated model. The one substantive change this round is **F9** — the wide, unbridged pricing-ladder gap flagged in both v1.0 and v1.1 now has a real mid-tier offer sitting in it.

---

## 2. Findings, Re-Assessed

Only F9 changed status this round. All other findings carry forward unchanged from v1.1.0 — repeated here in full so this file stands alone as the current source of truth, per this repo's report-versioning convention.

### 🔴 Critical / Foundational Risk

**F1. Unverified certification target. → ✅ RESOLVED (2026-08-01).** Unchanged from v1.1.0.

**F2. "Validated" status asserted without evidence. → 🟡 STILL OPEN.** Unchanged from v1.1.0 — still the top open item.

**F3. Single point of failure: platform and founder. → 🟡 PARTIALLY ADDRESSED.** Unchanged from v1.1.0.

### 🟠 Significant Gaps

**F4. No competitive analysis. → ✅ ADDRESSED.** Unchanged from v1.1.0. **New this round:** `competitive-analysis.html` also gained a 3-phase Go-To-Market Strategy section (organic → B2B/onsite → conditional paid ads), strengthening this finding's resolution with sequencing, not just positioning.

**F5. Funnel math doesn't reconcile across documents. → ✅ ADDRESSED.** Unchanged from v1.1.0.

**F6. A one-time revenue event is being used to trigger an irreversible life decision. → ✅ ADDRESSED.** Unchanged from v1.1.0.

**F7. No cost side / unit economics anywhere. → 🟡 PARTIALLY ADDRESSED.** Unchanged from v1.1.0.

**F8. "Exam pass guarantee" is a real liability, not just marketing copy. → ✅ RESOLVED (2026-08-01).** Unchanged from v1.1.0.

### 🟡 Moderate / Process Concerns

**F9. Pricing ladder has a wide, unbridged gap. → 🟡 PARTIALLY ADDRESSED (2026-08-07, upgraded from STILL OPEN).** A new $29 one-time **Exam Prep Bundle** (memory cards + prep exam + mock exam, see `exam-prep-product.html`, tracked as `hyp-h21.html` / H21 in `HYPOTHESIS.md`) now sits between the $10/mo membership and the $250–$500 live cohort. This materially narrows the jump: $0 → $10/mo → $29 (one-time) → $250–$500, versus the prior $0 → $10/mo → $250–$500 >25x cliff. **Why only "partially" addressed, not resolved:** the bundle is a newly proposed SKU (H21 status: ⚪ Planned) — not yet built, priced live, or sold. No conversion or cannibalization data exists yet, and it hasn't been validated that $29 is itself the right mid-tier price point rather than just a plausible one. This is the same "documented but not yet proven" pattern as F3 and F7 above, not a fully closed finding.

**F10. The same metric is asked to prove three different things. → RESOLVED (2026-08-01, per HYPOTHESIS.md v1.2.0).** Unchanged from v1.1.0.

**F11. No churn/renewal assumption for the recurring tier. → STILL OPEN.** Unchanged from v1.1.0.

### 🟢 What Holds Up (Unchanged)

Same as v1.1.0: the Steve Blank four-stage structure, the zero-CAC organic funnel design, genuine founder-market fit, and threshold-based (not intuition-based) gating for full-time transition and hiring.

---

## 3. Recommended Next Actions (Updated Priority Order)

Carried forward from v1.1.0, with one item resolved to "in progress" and one new item added:

1. ~~Verify the certification.~~ ✅ Done.
2. **Replace the unsupported "Validated" label** on `comp-problem-solution.html` (F2) — still the top open item.
3. ~~Run real customer discovery interviews (10–15).~~ 🟡 In progress — see `evidence-map.html` and `test-plan.html`.
4. ~~Build the missing backward-funnel model.~~ ✅ Done — `funnel-math.html`.
5. ~~Require the $10k gate to repeat.~~ ✅ Done — `validation-repeat-gate.html`.
6. ~~Draft a refund/guarantee policy.~~ ✅ Not needed.
7. **Add a channel-diversification experiment.** 🟡 In progress — H17.
8. ~~Add a cost-side model.~~ ✅ Done.
9. **Instrument real view→CTR→newsletter→cohort numbers** from the Sunday cohort funnel, replacing `funnel-math.html`'s sensitivity table with actuals.
10. **Price out payment processing fees** against the $10/mo, $29 bundle, and $250–500 revenue lines.
11. **New (2026-08-07): Actually sell the $29 Exam Prep Bundle and log real conversion/cannibalization data** — F9 moves from "partially addressed" to fully resolved only once H21 has real sales data showing the mid-tier offer converts prospects who wouldn't have bought the higher tiers, without materially cannibalizing them.

---

## Change Log

- **v1.2.0** (2026-08-07): Upgraded F9 (pricing-ladder gap) from 🟡 STILL OPEN to 🟡 PARTIALLY ADDRESSED — the new $29 Exam Prep Bundle (`exam-prep-product.html`, H21) narrows the $10/mo → $250–500 jump, though it isn't yet sold or validated. All other findings carried forward unchanged from v1.1.0. Triggered by the 2026-08-07 `business-model-sanity-check` re-run.
- **v1.1.0** (2026-08-04): Re-assessed all 11 findings against the site's current state. See `acidity-check-report-v1.1.0.md` for the full v1.1.0 change description.
- **v1.0.0** (2026-08-01): Initial acidity check across all repository documents.
