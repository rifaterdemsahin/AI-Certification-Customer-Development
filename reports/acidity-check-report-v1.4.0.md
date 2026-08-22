# Acidity Check Report v1.4 — AI Certification Helper Customer Development Model

**Version:** 1.4.0
**Date:** 2026-08-19
**Supersedes:** [`acidity-check-report-v1.3.0.md`](acidity-check-report-v1.3.0.md) (2026-08-10)
**Scope:** Re-assess Finding F12 against new customer discovery from Cheuk (National Grid) and a founder-confirmed partner-enrollment mitigation. All other findings carry forward unchanged from v1.3.0.
**Method:** Same acid-test method as prior versions — stress-test each finding for whether it has since been resolved, partially addressed, or remains open.

---

## 1. Executive Verdict (Updated)

F12 is no longer an unverified question. A named candidate **tried to enroll and could not**. Walk-up individual signup is gated to Claude enterprise partners. That falsifies the D2C funnel's "anyone can register" assumption. It does **not** kill the business: the founder confirms **two partner companies already in the system can enroll people**. Until a candidate is actually seated through that path, F12 is 🟡 PARTIALLY ADDRESSED, not resolved.

---

## 2. Findings, Re-Assessed

### 🔴 Critical / Foundational Risk

**F1. Unverified certification target. → ✅ RESOLVED (2026-08-01).** Unchanged.

**F2. "Validated" status asserted without evidence. → 🟡 STILL OPEN.** Unchanged.

**F3. Single point of failure: platform and founder. → 🟡 PARTIALLY ADDRESSED.** Unchanged.

**F12. Certification access may be gated to Anthropic Partner Network firms. → 🟡 PARTIALLY ADDRESSED (2026-08-19).** Was 🔴 STILL OPEN.

- **Customer confirmation (Cheuk, National Grid, WhatsApp 2026-08-19 10:29 UK, first name only):** *“You know only enterprise partners with Claude has access to these certifications. I triend looking up how I can enroll and I can't sign up yet.”* Direct, failed self-enrollment — not inference from Charles's employer-sponsored Capgemini path.
- **Founder mitigation (same day):** the risk is mitigated by **two partner companies in the system that help and enroll people.** Pexabo Ltd is the founder's own Claude Partner Network Select-tier vehicle (`claude-partner-strategy.html`). The second partner company is not named in this message and is not invented here.
- **What this does not close:** Cheuk has not yet been enrolled through the partner path. The YouTube/LinkedIn D2C funnel still needs partner-routing copy. `reports/market-validation-argument-v1.0.md`'s claim that any organisation (including a one-person outfit) can join CPN for free and that partner-tier affects *price not access* is contradicted for walk-up individuals by this field test. Logged on `risk-analysis.html`, `exam-performance-evidence.html`, and `5_Symbols/cd/archived-interview-transcripts.html`.

**Next evidence to resolve F12:** one named candidate (Cheuk or another) actually seated via a partner company. That would move this to ✅ ADDRESSED.

### 🟠 Significant Gaps

**F4. No competitive analysis. → ✅ ADDRESSED.** Unchanged.

**F5. Funnel math doesn't reconcile across documents. → ✅ ADDRESSED.** Unchanged.

**F6. A one-time revenue event is being used to trigger an irreversible life decision. → ✅ ADDRESSED.** Unchanged.

**F7. No cost side / unit economics anywhere. → 🟡 PARTIALLY ADDRESSED.** Unchanged.

**F8. "Exam pass guarantee" is a real liability, not just marketing copy. → ✅ RESOLVED (2026-08-01).** Unchanged.

### 🟡 Moderate / Process Concerns

**F9. Pricing ladder has a wide, unbridged gap. → 🟡 PARTIALLY ADDRESSED.** Unchanged.

**F10. The same metric is asked to prove three different things. → RESOLVED (2026-08-01).** Unchanged.

**F11. No churn/renewal assumption for the recurring tier. → STILL OPEN.** Unchanged.

### 🟢 What Holds Up (Unchanged)

Same as v1.3.0: Steve Blank four-stage structure, zero-CAC organic funnel design, genuine founder-market fit, and threshold-based gating for full-time transition and hiring. The partner-enrollment workaround is now part of that fit: D2C traffic still acquires; partner firms seat the exam.

---

## 3. Recommended Next Actions (Updated Priority Order)

1. **F12 remaining close:** actually enroll Cheuk (or another blocked candidate) through one of the two partner companies and log the seating. Name the second partner company when the founder confirms it.
2. **Rewrite D2C CTAs** so YouTube/LinkedIn do not imply walk-up Pearson VUE signup. Point at partner-enrollment / Sunday cohort as the path.
3. **Replace the unsupported "Validated" label** on `comp-problem-solution.html` (F2) — still open.
4. ~~Run real customer discovery interviews (10–15).~~ 🟡 In progress.
5. **Add a channel-diversification experiment.** 🟡 In progress — H17.
6. **Instrument real view→CTR→newsletter→cohort numbers.**
7. **Price out payment processing fees.**
8. **Actually sell the $29 Exam Prep Bundle and log real conversion/cannibalization data.**

---

## Change Log

- **v1.4.0** (2026-08-19): F12 🔴 STILL OPEN → 🟡 PARTIALLY ADDRESSED. Cheuk (National Grid) confirmed walk-up individual enrollment is blocked; founder-confirmed mitigation is two partner companies that enroll people. All other findings carried forward from v1.3.0.
- **v1.3.0** (2026-08-10): Added F12 as 🔴 STILL OPEN off Charles employer-sponsored Partner Network prep. See `acidity-check-report-v1.3.0.md`.
- **v1.2.0** (2026-08-07): Upgraded F9 to PARTIALLY ADDRESSED. See `acidity-check-report-v1.2.0.md`.
- **v1.1.0** (2026-08-04): Re-assessed all 11 findings. See `acidity-check-report-v1.1.0.md`.
