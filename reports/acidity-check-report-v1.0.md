> **Superseded by [`acidity-check-report-v1.1.0.md`](acidity-check-report-v1.1.0.md) (2026-08-04).** This version is kept as the historical baseline; findings below are shown as originally written, unresolved.

# Acidity Check Report — AI Certification Helper Customer Development Model

**Version:** 1.0.0
**Date:** 2026-08-01
**Scope:** Full repository review (README.md, gemini.md, index.html, all `comp-*.html` component specs, all `stage-*.html` stage pages, `3_Simulation/`)
**Method:** "Acidity check" = acid-test — stress-testing each stated hypothesis for internal consistency, evidentiary support, and real-world commercial viability, independent of how confidently it is written up.

---

## 1. Executive Verdict

**Directionally plausible as a bootstrap content-to-cohort business, but currently a stack of hypotheses, not a validated business.** Every metric in the repository is explicitly labeled `Hypothesized` except one, which is labeled `Validated` with no evidence attached (see Finding 2). The overall Steve Blank staging is well organized, but the model rests on one unverified load-bearing assumption: that "Claude AI Architect Professional" is a real, current, recognized certification worth building a curriculum, pricing ladder, and full-time career transition around. Nothing in the repo substantiates that this exam exists. That should be resolved before any further investment of time or money.

**Does the business model make sense?** Conditionally, yes, as a *test plan*. The mechanics — free YouTube funnel → $10/mo community → $250–500 cohort — are a well-worn, low-capital pattern that other course creators have made work. It does not yet make sense as a *committed* business, because the specific thresholds that gate irreversible decisions (quitting other income, hiring staff) are thin, self-referential, or unverified.

---

## 2. Findings

### 🔴 Critical / Foundational Risk

**F1. Unverified certification target.**
The entire Product-Market Fit, curriculum, and pricing strategy (`comp-pmf.html`) is built around a "Claude AI Architect Professional" exam. No document contains a link, citation, or evidence that this certification exists, is administered by Anthropic, or carries market recognition. If it doesn't exist, isn't launched yet, or isn't authoritative, then the "$10k cohort," ">80% pass rate," and "LinkedIn badge virality" hypotheses collapse simultaneously — this is the single largest risk in the entire plan and everything else is downstream of it.

**F2. "Validated" status asserted without evidence.**
`comp-problem-solution.html`'s Discovery Validation Test Grid marks *"AI Skills expectations are rising"* as **Validated**, sourced to "search volume & job description scrapes." No dataset, screenshot, number, or link exists anywhere in the repo to back this. Labeling a hypothesis Validated without an attached artifact breaks the "get out of the building" discipline the project explicitly claims to follow, and it's the only claim in the whole site that isn't marked Hypothesized — worth double-checking precisely because it stands out.

**F3. Single point of failure: platform and founder.**
Distribution is 100% dependent on the YouTube algorithm (`$0 Paid Ad Spend` is framed as the *target*, not a fallback), and production/curriculum/teaching is 100% dependent on one person until a fuzzy $100k ARR hiring gate. A demonetization event, algorithm shift, account strike, or founder illness stops the entire pipeline. No channel diversification or bus-factor mitigation appears anywhere.

### 🟠 Significant Gaps

**F4. No competitive analysis.**
`comp-market.html` sizes TAM/SAM/SOM (25M → 3M → 50k) with no cited methodology and no mention of existing alternatives — Udemy/Coursera cert-prep courses, official vendor training, other YouTube educators, or Anthropic's own documentation/courses. Without knowing what the target segments use today, there's no "why us, why now" answer.

**F5. Funnel math doesn't reconcile across documents.**
`comp-funnel.html` states goals of 10% video→newsletter CTR and 2% newsletter→cohort conversion. `comp-business-model.html` Hypothesis 1 separately claims 1% of *views* (not clicks) convert to the $10/mo membership. These are two different funnels measuring different things, and neither is tied back with actual arithmetic to the "20–40 students per cohort → $10k" target. No worked backward calculation (views needed → buyers) exists.

**F6. A one-time revenue event is being used to trigger an irreversible life decision.**
The "full-time transition gate" (`comp-creation-validation.html`) is $10,000 gross from a *single* cohort launch — not MRR/ARR, not a repeated result. Launch-day revenue is notoriously inflated by founder's personal network and one-off promotion; using it alone to justify quitting other income is a classic false-positive risk in customer development.

**F7. No cost side / unit economics anywhere.**
Every metric tracked is top-line (views, retention, revenue). Nothing accounts for: the founder's time cost (production is currently so time-intensive that hiring an editor is projected to cut it 80%), post-$100k salaries, platform/payment fees, refund liability from "exam pass guarantees" (F8), or the recurring cost of rebuilding curriculum every time the underlying API/model changes — a burden the docs themselves acknowledge (`comp-creation-validation.html`) but never price out.

**F8. "Exam pass guarantee" is a real liability, not just marketing copy.**
`comp-business-model.html` promises "exam pass guarantees" on the $250–500 cohort tier. There is no refund policy, no definition of what happens when a paying student fails, and no consumer-protection consideration — a real chargeback and reputation risk for a one-person media business with no support infrastructure yet.

### 🟡 Moderate / Process Concerns

**F9. Pricing ladder has a wide, unbridged gap.** $0 → $10/mo → $250–500 is a >25x jump with no intermediate offer (e.g., a $30–50 self-paced course), which is typically where a large share of cert-prep revenue actually lives.

**F10. The same metric is asked to prove three different things.** ">40% retention" is simultaneously the MVP success gate, a PMF signal, and the full-time transition gate. Overloading one number dilutes what it's actually validating at each stage.

**F11. No churn/renewal assumption for the recurring tier**, despite the $10/mo membership being explicitly labeled "Recurring Support Community" — a recurring-revenue business needs a retention hypothesis, and none is stated.

### 🟢 What Holds Up

- The Steve Blank four-stage structure (Discovery → Validation → Creation → Company Building) is coherently applied and cross-linked across all pages — this is a better-organized hypothesis backlog than most early plans.
- A zero-CAC organic content funnel is a sound, low-risk way to test demand before spending money, and matches the founder's existing skill set.
- Founder-market fit is genuine: Rifat has personally completed comparable certifications, which is a real credibility asset many cert-prep competitors lack.
- Gating "full-time" and "hiring" behind explicit thresholds (rather than intuition) is the right instinct — the thresholds themselves just need tightening (see F6, F7).

---

## 3. Recommended Next Actions (priority order)

1. **Verify the certification.** Confirm "Claude AI Architect Professional" (or substitute a verified, currently-offered certification) exists and is something buyers will actually pay to prepare for — before writing more curriculum.
2. **Replace the unsupported "Validated" label** with either real evidence (linked data) or downgrade it to "Hypothesized" like everything else, to keep the tracker honest.
3. **Run real customer discovery interviews** (10–15) across the three named segments and publish raw findings, before finalizing cohort pricing.
4. **Build the missing backward-funnel model**: views needed → CTR → signups → cohort buyers → $10k, then track actuals against it.
5. **Require the $10k gate to repeat** (e.g., two consecutive cohort launches) rather than triggering a full-time transition off a single event.
6. **Draft a refund/guarantee policy** before the "exam pass guarantee" is advertised anywhere.
7. **Add one channel-diversification experiment** (e.g., LinkedIn or a newsletter-first funnel) so the business isn't 100% dependent on YouTube's algorithm.
8. **Add a cost-side model** (founder time, future salaries, fees, refund reserve) alongside the existing revenue/retention metrics.

---

## Change Log

- **v1.0.0** (2026-08-01): Initial acidity check across all repository documents.
