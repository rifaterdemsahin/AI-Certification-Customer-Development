# Hypothesis Tracker — AI Certification Helper

**Version:** 1.1.0
**Date:** 2026-08-01
**Purpose:** Consolidate every hypothesis stated across the site's stage/component pages into a single premise → conclusion → status record, so progress toward validating (or killing) each one can be tracked in one place. Cross-referenced against `reports/acidity-check-report-v1.0.md` and `reports/market-validation-argument-v1.0.md` where a status claim is not backed by evidence in the repo, or has since been resolved by new research.

**Status legend:**
- ✅ **Validated** — supported by cited evidence
- 🟡 **In Testing** — experiment defined and running
- ⚪ **Planned** — experiment defined, not yet started
- ⚠️ **Claimed, unverified** — labeled Validated/complete in source doc, but no evidence found in the repo

---

## Stage 1: Customer Discovery

### H1 — Rising AI skills expectations
- **Source:** `comp-problem-solution.html`
- **Premise 1:** Rapid AI advancement is reshaping job roles and technical expectations.
- **Premise 2:** Employers now expect staff to build agentic chains, configure guardrails, and audit LLM architectures.
- **Conclusion:** Demand for AI/LLM certification is structurally rising, not a fad.
- **Experiment:** Search volume and job-description scrapes for certification terms.
- **Target metric:** Steady monthly search growth.
- **Status:** 🟡 **Partially validated (upgraded 2026-08-01)** — the repo still contains no search-volume/job-scrape dataset backing the original "Validated" label, but independent research now corroborates the underlying claim from a different angle: Anthropic's Claude Partner Network ties consulting-firm partner tiers to certified-practitioner headcounts (10 for Select, 100 for Preferred, 1,000 for Global Premier — mirroring AWS Partner Network's identical mechanic), and 2026 compensation data shows 30–40% pay premiums for generative-AI skills at firms like Accenture and TCS. See `reports/market-validation-argument-v1.0.md`. The original search-volume experiment is still not done, so this remains short of full validation.

### H2 — Audience prefers animated summaries over dry materials
- **Source:** `comp-problem-solution.html`, `comp-mvp.html`
- **Premise 1:** Standard cert-prep material (500-page manuals, 40-hour courses) causes cognitive fatigue and low completion.
- **Premise 2:** Animated, visually distilled explanations increase retention.
- **Conclusion:** An animated video format will outperform standard formats on watch retention.
- **Experiment:** A/B test animated explanation vs. standard slide deck.
- **Target metric:** >40% watch retention on the animated version.
- **Status:** 🟡 In Testing (per source doc). No retention data reported yet in the repo.

### H3 — Audience will pay for certification prep
- **Source:** `comp-problem-solution.html`
- **Premise 1:** Viewers who complete free content have expressed problem-level need.
- **Premise 2:** A subset of highly engaged viewers will convert to paying customers if offered a low-friction next step.
- **Conclusion:** Newsletter signup with visible pricing will surface real purchase intent.
- **Experiment:** Newsletter signup with a pricing-details page on the main site.
- **Target metric:** >5% email signup conversion.
- **Status:** ⚪ Planned.

---

## Stage 2: Customer Validation

### H4 — The YouTube funnel converts to paid membership at ~1%
- **Source:** `comp-business-model.html`
- **Premise 1:** Free YouTube content builds trust and traffic at scale.
- **Premise 2:** A fraction of viewers will value the $10/mo community enough to subscribe.
- **Conclusion:** Out of every 1,000 free-course views, at least 10 viewers will join the $10/mo membership.
- **Status:** ⚪ Hypothesized — no reported view or signup counts in the repo yet.

### H5 — Cohorts sell out organically without paid ads
- **Source:** `comp-business-model.html`
- **Premise 1:** Cohort announcements reach an engaged audience via video callouts and the newsletter list.
- **Premise 2:** That audience is willing to pay $250–500 for structured, live, guided prep.
- **Conclusion:** 20–40 premium students will enroll per cohort launch with $0 paid ad spend.
- **Status:** ⚪ Hypothesized — no launch has been reported yet; this is also the basis for the $10k revenue gate (see H9), so it is currently untested at the point it matters most.

### H6 — Market is large enough to sustain the business
- **Source:** `comp-market.html`
- **Premise 1:** ~25M developers worldwide must adapt to AI-driven engineering (TAM).
- **Premise 2:** ~3M of them are actively seeking cloud/ML/LLM certifications (SAM).
- **Conclusion:** ~50,000 developers are reachable via Rifat's specific channels within 3 years (SOM).
- **Status:** ⚠️ **Claimed, unverified** — presented as a firm estimate but no source, survey, or third-party data is cited for any of the three figures. Treat as a working assumption, not a validated number.

### H7 — The YouTube acquisition funnel performs at stated rates
- **Source:** `comp-funnel.html`
- **Premise 1:** Structured "YouTube Course" playlists rank higher for educational search intent than unstructured video.
- **Premise 2:** That ranking advantage translates into a predictable click/conversion funnel.
- **Conclusion:** 10% of video viewers click through to the newsletter; 2% of newsletter subscribers convert to a cohort purchase.
- **Status:** ⚪ Hypothesized. **Note:** this funnel model does not numerically reconcile with H4's "1% of views" claim — the two describe different conversion paths to different offers and haven't been unified into one funnel model (flagged in the acidity check, Finding F5).

### H8 — Product-Market Fit: the cohort program gets students certified
- **Source:** `comp-pmf.html`
- **Premise 1:** The cohort curriculum covers the full scope of the target certification (model orchestration, latency config, multi-agent design, prompt caching, enterprise security).
- **Premise 2:** Structured live instruction outperforms self-study for exam readiness.
- **Conclusion:** Cohort graduates will pass the target exam at a high rate and recommend the program to peers.
- **Target metrics:** >80% pass rate; NPS >50; organic LinkedIn badge sharing.
- **Status:** ⚪ Hypothesized — but the blocker is cleared. Acidity check Finding F1 is now **resolved**: Anthropic officially launched the Claude Certification Program in 2026, including "Claude Certified Architect – Professional" ($175, via Pearson VUE), which is a near-exact match to this site's target. This hypothesis can now actually be tested against a real exam. See `reports/market-validation-argument-v1.0.md`.

---

## Stage 3: Customer Creation

### H9 — $10,000 in single-launch revenue proves the business is ready to scale
- **Source:** `comp-creation-validation.html`, `stage-customer-creation.html`
- **Premise 1:** Revenue is the strongest signal of real customer validation (stronger than survey or interest signals).
- **Premise 2:** A single cohort launch generating $10,000 gross proves message and product are correctly positioned.
- **Conclusion:** Hitting $10,000 from one cohort justifies transitioning the founder to full-time.
- **Status:** ⚪ Hypothesized. **Note:** a one-time launch figure is a weak proxy for repeatable revenue (acidity check Finding F6); no repeat-launch requirement is currently defined.

### H10 — >40% average video retention proves the teaching method works
- **Source:** `comp-creation-validation.html`, `comp-mvp.html`
- **Premise 1:** Viewers who stay engaged past the first 30 seconds are absorbing the material, not just sampling it.
- **Premise 2:** Sustained retention across the full catalog (not just one video) reflects a repeatable teaching method, not a one-off hit.
- **Conclusion:** >40% average percentage viewed across all published certification guides validates the animated-teaching approach.
- **Status:** ⚪ Hypothesized. **Note:** this same 40% figure is also used as the MVP gate (H2) and implicitly as a PMF signal (H8) — one metric is being asked to validate three different claims (content quality, product fit, and financial readiness), which weakens what a pass/fail on it actually proves (acidity check Finding F10).

---

## Stage 4: Company Building

### H11 — $100,000 ARR is the right threshold to begin hiring
- **Source:** `comp-scale-organization.html`
- **Premise 1:** Founder-led production, marketing, and support has a hard ceiling on throughput.
- **Premise 2:** A freelance video editor, cohort coordinator, and technical TAs can absorb that load without degrading student experience.
- **Conclusion:** At $100k ARR, hiring these three roles lets the business scale past the founder's personal capacity.
- **Status:** ⚪ Hypothesized. **Note:** no cost model exists for these hires against the $100k figure (i.e., whether $100k ARR actually leaves enough margin to pay three roles) — see acidity check Finding F7.

---

## Stage 2 addendum: New hypothesis surfaced by market research

### H12 — IT consulting/government-contractor firms are a viable B2B demand channel (new)
- **Source:** `reports/market-validation-argument-v1.0.md` (not yet reflected in any site page)
- **Premise 1:** Anthropic's Claude Partner Network gates consulting-firm tier status on certified-practitioner headcount (10 for Select, 100 for Preferred, 1,000 for Global Premier), the same mechanic AWS uses in its own Partner Network.
- **Premise 2:** Large government-facing IT consultancies (e.g., Capgemini, DXC) are already named Anthropic ecosystem partners, already reimburse cloud certification costs generally, and operate in a government-contracting world (see DoD Directive 8140) where mandated staff certification is already normal practice.
- **Conclusion:** These firms have a structural, revenue-linked, bulk-purchase incentive to pay for staff Claude certification prep — a potentially larger and more predictable channel than the individual YouTube funnel this business model currently relies on exclusively.
- **Status:** ⚪ Planned — this is a new, untested hypothesis. No firm has been asked directly whether it would pay for bulk cohort seats to hit its practitioner quota. Recommended first experiment: contact 3–5 Claude Partner Network "Registered"-tier firms and ask directly (see market-validation-argument-v1.0.md, Section 6).

---

## Summary Table

| ID | Hypothesis | Status |
|----|------------|--------|
| H1 | Rising AI skills expectations | 🟡 Partially validated |
| H2 | Animated content beats standard formats | 🟡 In Testing |
| H3 | Audience will pay for cert prep | ⚪ Planned |
| H4 | YouTube funnel → 1% paid membership conversion | ⚪ Hypothesized |
| H5 | Cohorts sell out organically | ⚪ Hypothesized |
| H6 | TAM/SAM/SOM market sizing | ⚠️ Claimed, unverified |
| H7 | Funnel CTR/conversion rates | ⚪ Hypothesized |
| H8 | Cohort delivers exam-ready PMF | ⚪ Hypothesized (blocker cleared — target cert confirmed real) |
| H9 | $10k single launch → full-time gate | ⚪ Hypothesized |
| H10 | >40% retention proves teaching method | ⚪ Hypothesized |
| H11 | $100k ARR → hiring threshold | ⚪ Hypothesized |
| H12 | IT consulting/gov-contractor firms as B2B channel (new) | ⚪ Planned |

**Overall:** 0 of 12 hypotheses are fully validated with cited evidence, 1 is partially validated, and 1 (TAM/SAM/SOM sizing) is still marked complete in a source page with no supporting evidence in the repo. The certification-existence blocker on H8 has been cleared by external research (see v1.1.0 below). This tracker should be updated in place (bump to v1.2, v1.3, etc.) as each experiment produces real results.

---

## Change Log

- **v1.1.0** (2026-08-01): Incorporated `reports/market-validation-argument-v1.0.md`. Upgraded H1 to Partially Validated, cleared the certification-existence blocker on H8, and added H12 (IT consulting/government-contractor firms as a new B2B demand channel).
- **v1.0.0** (2026-08-01): Initial consolidation of all hypotheses from the site's stage/component pages, cross-referenced against `reports/acidity-check-report-v1.0.md`.
