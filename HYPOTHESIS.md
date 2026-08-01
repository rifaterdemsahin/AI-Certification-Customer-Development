# Hypothesis Tracker — AI Certification Helper

**Version:** 1.2.0
**Date:** 2026-08-01
**Purpose:** Consolidate every hypothesis stated across the site's stage/component pages into a single premise → conclusion → status record, so progress toward validating (or killing) each one can be tracked in one place. Cross-referenced against `reports/acidity-check-report-v1.0.md`, `reports/market-validation-argument-v1.0.md`, `reports/ai-adoption-and-skills-gap-v1.0.md`, and `reports/exam-prep-market-and-student-behavior-v1.0.md` where a status claim is not backed by evidence in the repo, or has since been resolved or changed by new research or a founder decision.

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
- **Status:** 🟡 **Partially validated (upgraded 2026-08-01)** — the repo still contains no search-volume/job-scrape dataset backing the original "Validated" label, but independent research now corroborates the underlying claim from two directions: (1) Anthropic's Claude Partner Network ties consulting-firm partner tiers to certified-practitioner headcounts (10 for Select, 100 for Preferred, 1,000 for Global Premier — mirroring AWS Partner Network's identical mechanic), and 2026 compensation data shows 30–40% pay premiums for generative-AI skills at firms like Accenture and TCS (`reports/market-validation-argument-v1.0.md`); (2) a full 2020–2026 timeline shows AI/big data skill demand rising 17 percentage points since 2023, 63% of employers naming the skills gap their top transformation barrier, and 75% reporting no formal in-house AI training (`reports/ai-adoption-and-skills-gap-v1.0.md`). The original search-volume experiment is still not done, so this remains short of full validation.

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
- **Status:** ⚠️ **Claimed, unverified, now partially grounded** — the exact 25M/3M/50k figures are still uncited, but `reports/ai-adoption-and-skills-gap-v1.0.md` now anchors the TAM/SAM/SOM formula (published in `comp-market.html`) against dated, sourced proxies: WEF's 2025 Future of Jobs data for TAM direction, the existing ~70% cloud-certification adoption rate for SAM, and Anthropic's own 10/100/1,000 partner-tier practitioner quotas for a bottom-up SOM estimate. Treat the specific numbers as a working assumption pending a dedicated sizing study, not as validated.

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

### H9 — $10,000 in Stage 2 revenue is the sole gate into Customer Creation (revised 2026-08-01)
- **Source:** `comp-creation-validation.html`, `stage-customer-creation.html`, `gemini.md`
- **Premise 1:** Revenue is the strongest signal of real customer validation (stronger than survey or interest signals).
- **Premise 2:** Customer Validation (Stage 2) must independently produce $10,000 worth of validated, paying customers before any Customer Creation or Company Building activity begins.
- **Premise 3 (new):** This validation work is done solely by the founder, with no hires, specifically to keep the loop cheap and agile.
- **Conclusion (revised):** Hitting $10,000 in Stage 2 revenue is the exit gate into Stage 3 — it does **not** trigger a full-time transition. The founder has explicitly decided to keep his primary job and run this project as an ongoing second job indefinitely, scaling time investment as demand justifies it rather than making an all-or-nothing leap.
- **Currency note:** the founder referred to this target as both "$10,000" and "£10,000" in conversation. All existing site documents (comp-business-model.html, comp-creation-validation.html, etc.) use USD, so this tracker treats **$10,000 USD** as the working figure. GBP vs. USD is roughly a 25–30% difference — **this should be explicitly confirmed**, since it changes how hard the gate is to clear.
- **Status:** ⚪ Hypothesized/Decided — the $10k figure itself is still an untested revenue target (acidity check Finding F6 on one-time-launch risk still applies), but the "no full-time transition, second job instead" and "solo founder for agility" points are now founder decisions, not hypotheses to be tested.

### H10 — >40% average video retention proves the teaching method works (demoted to quality floor)
- **Source:** `comp-creation-validation.html`, `comp-mvp.html`
- **Premise 1:** Viewers who stay engaged past the first 30 seconds are absorbing the material, not just sampling it.
- **Premise 2:** Sustained retention across the full catalog (not just one video) reflects a repeatable teaching method, not a one-off hit.
- **Conclusion:** >40% average percentage viewed across all published certification guides indicates content quality, but as of 2026-08-01 this is **no longer the primary Stage 3 gate** — it remains a content-quality floor carried over from the MVP/PMF stages. See H13 for the metric Stage 3 is now actually being managed against.
- **Status:** 🟡 In Testing, secondary metric. **Note:** this figure was previously overloaded to validate three different claims at once (content quality, product fit, and financial readiness) — acidity check Finding F10. Demoting it to a quality floor and introducing H13 as the primary Stage 3 metric resolves that overload.

### H13 — 1,000x subscriber growth per video is the Customer Creation success metric (new, 2026-08-01)
- **Source:** `comp-creation-validation.html`, `stage-customer-creation.html`
- **Premise 1:** Customer Creation (Stage 3) is about demand generation and audience growth, not just content quality or one-time revenue.
- **Premise 2:** Channel subscriber growth is a directly observable, compounding signal of demand creation working — each new video should pull the channel meaningfully closer to 1,000x its starting subscriber count.
- **Conclusion:** Each published video is expected to move the channel toward 1,000x its baseline subscriber count; this is the metric Stage 3 is being managed against going forward.
- **Baseline:** approximately 30 subscribers on the channel as of 2026-08-01 (channel name given verbally and not confirmed in writing — please confirm the exact channel/handle so this tracker and the site can reference it precisely).
- **Target:** ~30,000 subscribers (1,000x the ~30 baseline), tracked incrementally per video rather than as a single pass/fail gate.
- **Status:** ⚪ Planned — no subscriber-growth data has been reported yet against this target. Recommended next step: log subscriber count at each video publish date to start building a real growth curve against the 1,000x target.

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
| H6 | TAM/SAM/SOM market sizing | ⚠️ Claimed, unverified, now partially grounded |
| H7 | Funnel CTR/conversion rates | ⚪ Hypothesized |
| H8 | Cohort delivers exam-ready PMF | ⚪ Hypothesized (blocker cleared — target cert confirmed real) |
| H9 | $10k Stage 2 exit gate → second job, not full-time (revised) | ⚪ Hypothesized/Decided |
| H10 | >40% retention (demoted to quality floor) | 🟡 In Testing (secondary) |
| H11 | $100k ARR → hiring threshold | ⚪ Hypothesized |
| H12 | IT consulting/gov-contractor firms as B2B channel | ⚪ Planned |
| H13 | 1,000x subscriber growth per video (new, Stage 3 primary metric) | ⚪ Planned |

**Overall:** 0 of 13 hypotheses are fully validated with cited evidence, 1 is partially validated, and 1 (TAM/SAM/SOM sizing) is still marked complete in a source page with only partial external grounding. The certification-existence blocker on H8 has been cleared by external research (v1.1.0). As of v1.2.0, the founder has made two explicit decisions rather than pending hypotheses: (1) the $10k Stage 2 gate is executed solo for agility and does **not** trigger a full-time transition — it stays an ongoing second job — and (2) the primary Stage 3 success metric is now 1,000x subscriber growth per video (H13), not the 40% retention figure (H10, demoted to a quality floor). This tracker should be updated in place (bump to v1.3, v1.4, etc.) as each experiment produces real results.

---

## Change Log

- **v1.2.0** (2026-08-01): Incorporated `reports/ai-adoption-and-skills-gap-v1.0.md` and `reports/exam-prep-market-and-student-behavior-v1.0.md` (further grounding H1 and H6). Revised H9 to reflect two founder decisions: the $10k gate is executed solo for agility and applies strictly as the Stage 2→3 exit criterion, and does not trigger a full-time transition — the project continues indefinitely as an ongoing second job (flagged an unresolved USD-vs-GBP currency ambiguity in the $10k figure). Demoted H10 (>40% retention) from primary Stage 3 gate to a secondary content-quality floor. Added H13: 1,000x per-video subscriber growth (baseline ~30 subscribers) as the new primary Stage 3 metric. Propagated all of the above into `comp-creation-validation.html`, `stage-customer-creation.html`, and `gemini.md`, and folded the skills-gap research into the TAM/SAM/SOM formula in `comp-market.html`.
- **v1.1.0** (2026-08-01): Incorporated `reports/market-validation-argument-v1.0.md`. Upgraded H1 to Partially Validated, cleared the certification-existence blocker on H8, and added H12 (IT consulting/government-contractor firms as a new B2B demand channel).
- **v1.0.0** (2026-08-01): Initial consolidation of all hypotheses from the site's stage/component pages, cross-referenced against `reports/acidity-check-report-v1.0.md`.
