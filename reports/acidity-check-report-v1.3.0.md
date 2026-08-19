> ⚠️ **Superseded by [v1.4.0](acidity-check-report-v1.4.0.md)** (2026-08-19) — F12 moves 🔴 STILL OPEN → 🟡 PARTIALLY ADDRESSED after Cheuk (National Grid) could not self-enroll; founder-confirmed mitigation is two partner companies that enroll people.

# Acidity Check Report v1.3 — AI Certification Helper Customer Development Model

**Version:** 1.3.0
**Date:** 2026-08-10
**Supersedes:** [`acidity-check-report-v1.2.0.md`](acidity-check-report-v1.2.0.md) (2026-08-07)
**Scope:** Full repository review, re-run against the site as it stands today. Triggered by a new founder-flagged risk: certification exam/prep access may be gated to Anthropic Partner Network firms.
**Method:** Same acid-test method as prior versions — stress-test each finding for whether it has since been resolved, partially addressed, or remains open, rather than re-deriving the findings from scratch.

---

## 1. Executive Verdict (Updated)

Unchanged from v1.2.0's overall read, with one new and potentially significant open question added. **F12** is a foundational-risk-tier finding: if individual, non-Partner-affiliated candidates cannot freely register for or prep the target exam, it would undermine the direct-to-consumer funnel this entire business model assumes — a structurally different kind of risk than the process/pricing gaps tracked elsewhere in this report.

---

## 2. Findings, Re-Assessed

Only F12 is new this round. All other findings carry forward unchanged from v1.2.0 — repeated here in full so this file stands alone as the current source of truth.

### 🔴 Critical / Foundational Risk

**F1. Unverified certification target. → ✅ RESOLVED (2026-08-01).** Unchanged.

**F2. "Validated" status asserted without evidence. → 🟡 STILL OPEN.** Unchanged — still a top open item.

**F3. Single point of failure: platform and founder. → 🟡 PARTIALLY ADDRESSED.** Unchanged.

**F12. Certification access may be gated to Anthropic Partner Network firms. → 🔴 STILL OPEN (new, 2026-08-10).** The Charles Andrews LinkedIn evidence (see `exam-performance-evidence.html`, and H12/H8's updates in `HYPOTHESIS.md`) shows his exam prep material came via an **employer-sponsored** Anthropic Partner Network course through Capgemini Invent — not an individual, public registration path. This raises an unverified but potentially serious question: is the Claude Certified Architect/Associate exam (and its official prep track) genuinely open to individual candidates with no Partner-firm affiliation, or does meaningful access run through employer/partner sponsorship? If the latter, this business's entire organic YouTube/LinkedIn funnel — aimed at individual technical professionals studying independently — may be targeting a smaller, or differently-shaped, addressable market than assumed across H1, H3, H6, and the funnel math in `funnel-math.html`. **Not yet resolved either way** — the $175 Pearson VUE fee cited elsewhere on this site (see `reports/market-validation-argument-v1.0.md`) suggests individual registration for the *exam itself* is possible, which would mean only the *official Partner-track prep material* (not the exam) is gated — but this has not been directly confirmed. Logged on `risk-analysis.html` as a new register row (Structural/Market Access, Impact: High, Likelihood: Medium/unverified).

### 🟠 Significant Gaps

**F4. No competitive analysis. → ✅ ADDRESSED.** Unchanged.

**F5. Funnel math doesn't reconcile across documents. → ✅ ADDRESSED.** Unchanged.

**F6. A one-time revenue event is being used to trigger an irreversible life decision. → ✅ ADDRESSED.** Unchanged.

**F7. No cost side / unit economics anywhere. → 🟡 PARTIALLY ADDRESSED.** Unchanged.

**F8. "Exam pass guarantee" is a real liability, not just marketing copy. → ✅ RESOLVED (2026-08-01).** Unchanged.

### 🟡 Moderate / Process Concerns

**F9. Pricing ladder has a wide, unbridged gap. → 🟡 PARTIALLY ADDRESSED.** Unchanged from v1.2.0.

**F10. The same metric is asked to prove three different things. → RESOLVED (2026-08-01).** Unchanged.

**F11. No churn/renewal assumption for the recurring tier. → STILL OPEN.** Unchanged.

### 🟢 What Holds Up (Unchanged)

Same as v1.2.0: the Steve Blank four-stage structure, the zero-CAC organic funnel design, genuine founder-market fit, and threshold-based (not intuition-based) gating for full-time transition and hiring.

---

## 3. Recommended Next Actions (Updated Priority Order)

Carried forward from v1.2.0, with one new top-priority item added:

1. **New, top priority (2026-08-10): Directly confirm exam/prep access for non-Partner individuals.** Contact Anthropic or check the Pearson VUE registration flow directly to confirm whether an individual with no employer/Partner-firm affiliation can (a) register for the exam and (b) access adequate prep material outside the Partner Network track. This resolves F12 either way and should happen before further funnel-scaling investment.
2. ~~Verify the certification.~~ ✅ Done.
3. **Replace the unsupported "Validated" label** on `comp-problem-solution.html` (F2) — still open.
4. ~~Run real customer discovery interviews (10–15).~~ 🟡 In progress.
5. ~~Build the missing backward-funnel model.~~ ✅ Done.
6. ~~Require the $10k gate to repeat.~~ ✅ Done.
7. ~~Draft a refund/guarantee policy.~~ ✅ Not needed.
8. **Add a channel-diversification experiment.** 🟡 In progress — H17.
9. ~~Add a cost-side model.~~ ✅ Done.
10. **Instrument real view→CTR→newsletter→cohort numbers.**
11. **Price out payment processing fees.**
12. **Actually sell the $29 Exam Prep Bundle and log real conversion/cannibalization data.**

---

## Change Log

- **v1.3.0** (2026-08-10): Added **F12** — certification exam/prep access may be gated to Anthropic Partner Network firms, raised by the founder off the Charles Andrews LinkedIn evidence (employer-sponsored Partner Network prep course). Marked 🔴 STILL OPEN and the new top-priority recommended action, since it's a foundational-risk-tier question that could affect the addressable market assumed across H1, H3, and H6. All other findings carried forward unchanged from v1.2.0. Cross-linked from a new row on `risk-analysis.html`'s Risk Register.
- **v1.2.0** (2026-08-07): Upgraded F9 to PARTIALLY ADDRESSED. See `acidity-check-report-v1.2.0.md`.
- **v1.1.0** (2026-08-04): Re-assessed all 11 findings. See `acidity-check-report-v1.1.0.md`.
- **v1.0.0** (2026-08-01): Initial acidity check across all repository documents.
