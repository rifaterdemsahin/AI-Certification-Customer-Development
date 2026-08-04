# Hypothesis Tracker — AI Certification Helper

**Version:** 1.6.0
**Date:** 2026-08-04
**Purpose:** Consolidate every hypothesis stated across the site's stage/component pages into a single premise → conclusion → status record, so progress toward validating (or killing) each one can be tracked in one place. Cross-referenced against `reports/acidity-check-report-v1.1.0.md` (supersedes v1.0.0), `reports/market-validation-argument-v1.0.md`, `reports/ai-adoption-and-skills-gap-v1.0.md`, and `reports/exam-prep-market-and-student-behavior-v1.0.md` where a status claim is not backed by evidence in the repo, or has since been resolved or changed by new research or a founder decision.

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
- **Status:** 🟡 **In Testing (upgraded 2026-08-02)** — no longer untested: a free weekly cohort has run for 8 consecutive weeks (June–July 2026) with a steady audience of ~4 attendees per session. This validates that free content converts into repeat live engagement; the specific 1% view→paid-membership conversion figure is still unmeasured.

### H5 — Cohorts sell out organically without paid ads
- **Source:** `comp-business-model.html`
- **Premise 1:** Cohort announcements reach an engaged audience via video callouts and the newsletter list.
- **Premise 2 (revised 2026-08-01):** That audience is willing to pay $250–500 for live-streamed, real-time problem-solving sessions, community membership, and the discipline/network that comes with them — **not** for a promised exam outcome. The founder has explicitly clarified: "we do not grant the passing of the exam, the certification" — that is issued solely by Anthropic via Pearson VUE.
- **Premise 3 (delivery model defined, 2026-08-02):** The $10/mo membership tier includes access to **recorded** cohort replays (async, self-paced). The $250 package buys **live** attendance with the ability to share their screen, structured as a day-long session with scheduled breaks.
- **Conclusion:** 20–40 premium students will enroll per cohort launch with $0 paid ad spend, buying live community access and structured practice rather than a pass guarantee.
- **Status:** ⚪ Hypothesized — enrollment counts are still untested and no launch has been reported yet; this is also the basis for the $10k revenue gate (see H9), so it is currently untested at the point it matters most. The two-tier delivery model (recorded replay vs. live day-long screen-share session) is now defined as of 2026-08-02. **Open question:** removing the "guarantee" framing (previously used in `comp-business-model.html` and `comp-funnel.html`, corrected 2026-08-01) may change willingness to pay — this has not been tested and is worth watching at the first real launch.

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
- **Status:** ⚪ Hypothesized. **Note:** this funnel model does not numerically reconcile with H4's "1% of views" claim — the two describe different conversion paths to different offers and haven't been unified into one funnel model (flagged in the acidity check, Finding F5). **Scope clarified (2026-08-02):** funnel targeting and all content produced are scoped specifically to exam-prep search intent, not general AI education.

### H8 — Product-Market Fit: the cohort program gets students certified
- **Source:** `comp-pmf.html`
- **Premise 1:** The cohort curriculum covers the full scope of the target certification (model orchestration, latency config, multi-agent design, prompt caching, enterprise security), delivered through live-streamed sessions where the community solves real problems together in real time.
- **Premise 2:** Structured live instruction and peer accountability outperform self-study for exam readiness.
- **Premise 3 (added 2026-08-01):** The company does not grant, administer, or guarantee the certification itself — Anthropic alone issues it via a Pearson VUE-proctored exam. ">80% pass rate," "NPS >50," and "LinkedIn badge sharing" are internal metrics the company tracks to judge its own program quality, not promises made to students.
- **Conclusion:** Cohort graduates who engage with the live sessions will pass the target exam at a high rate and recommend the program to peers — but this is a hoped-for outcome the program is designed to support, not a guarantee.
- **Target metrics:** >80% pass rate; NPS >50; organic LinkedIn badge sharing (all internal, non-promised).
- **Status:** ⚪ Hypothesized — the certification-existence blocker is cleared (acidity check Finding F1, now **resolved**: Anthropic officially launched the Claude Certification Program in 2026, including "Claude Certified Architect – Professional," $175 via Pearson VUE, a near-exact match to this site's target — see `reports/market-validation-argument-v1.0.md`). Separately, acidity check **Finding F8 (exam-pass-guarantee liability) is now resolved**: the founder has explicitly removed all "guarantee"/"guaranteed" language from `comp-business-model.html` and `comp-funnel.html` and clarified the cohort's actual value proposition is live streaming, community, and real-time problem-solving practice — not a promised outcome.

---

## Stage 3: Customer Creation

### H9 — $10,000 in Stage 2 revenue is the sole gate into Customer Creation (revised 2026-08-01)
- **Source:** `comp-creation-validation.html`, `stage-customer-creation.html`, `gemini.md`
- **Premise 1:** Revenue is the strongest signal of real customer validation (stronger than survey or interest signals).
- **Premise 2:** Customer Validation (Stage 2) must independently produce $10,000 worth of validated, paying customers before any Customer Creation or Company Building activity begins.
- **Premise 3 (new):** This validation work is done solely by the founder, with no hires, specifically to keep the loop cheap and agile.
- **Conclusion (revised):** Hitting $10,000 in Stage 2 revenue is the exit gate into Stage 3 — it does **not** trigger a full-time transition. The founder has explicitly decided to keep his primary job and run this project as an ongoing second job indefinitely, scaling time investment as demand justifies it rather than making an all-or-nothing leap.
- **Currency note:** the founder referred to this target as both "$10,000" and "£10,000" in conversation. All existing site documents (comp-business-model.html, comp-creation-validation.html, etc.) use USD, so this tracker treats **$10,000 USD** as the working figure. GBP vs. USD is roughly a 25–30% difference — **this should be explicitly confirmed**, since it changes how hard the gate is to clear.
- **Status:** ⚪ Hypothesized/Decided — **revised 2026-08-04:** the gate now requires **2 consecutive cohort launches combining to $10,000** (not a single launch) before Stage 2→3 transition, specifically to close acidity check Finding F6 (a one-time launch is inflated by warm personal-network intros and is a false-positive risk for a decision this consequential). Full mechanics in the new `validation-repeat-gate.html`. The "no full-time transition, second job instead" and "solo founder for agility" points remain founder decisions, not hypotheses to be tested.

### H10 — >40% average video retention proves video quality, confirmed as the MVP metric (confirmed by founder 2026-08-01)
- **Source:** `comp-creation-validation.html`, `comp-mvp.html`
- **Premise 1:** Viewers who stay engaged past the first 30 seconds are absorbing the material, not just sampling it.
- **Premise 2:** Sustained retention across the full catalog (not just one video) reflects consistent video quality, not a one-off hit.
- **Premise 3 (founder-confirmed):** "Forty percent retention is the target focus for the video quality... we know the videos have a high quality and not confusing the customer market." The MVP is deliberately focused on one problem only — helping the customer pass their certification exam — and 40% retention is the metric that proves the video content serves that single problem clearly, without confusing the audience.
- **Conclusion:** >40% average percentage viewed across all published certification guides confirms video-quality/clarity. This is explicitly **the MVP metric**, not the Customer Creation (Stage 3) gate — the founder has confirmed this demotion (previously flagged as an overloaded metric in acidity check Finding F10). See H13 for the metric Stage 3 is actually managed against, and H8 Premise 3 for the related clarification that no exam-pass outcome is promised.
- **Status:** 🟡 In Testing — Confirmed scope (2026-08-01): MVP-only, video-quality signal. No retention data has been reported yet in the repo.

### H13 — 1,000x subscriber growth per video is the Customer Creation success metric (new, 2026-08-01)
- **Source:** `comp-creation-validation.html`, `stage-customer-creation.html`
- **Premise 1:** Customer Creation (Stage 3) is about demand generation and audience growth, not just content quality or one-time revenue.
- **Premise 2:** Channel subscriber growth is a directly observable, compounding signal of demand creation working — each new video should pull the channel meaningfully closer to 1,000x its starting subscriber count.
- **Conclusion:** Each published video is expected to move the channel toward 1,000x its baseline subscriber count; this is the metric Stage 3 is being managed against going forward.
- **Baseline:** approximately 30 subscribers on the channel as of 2026-08-01 (channel name given verbally and not confirmed in writing — please confirm the exact channel/handle so this tracker and the site can reference it precisely).
- **Target:** ~30,000 subscribers (1,000x the ~30 baseline), tracked incrementally per video rather than as a single pass/fail gate.
- **Status:** ⚪ Planned — no subscriber-growth data has been reported yet against this target. Recommended next step: log subscriber count at each video publish date to start building a real growth curve against the 1,000x target.

### H12 — IT consulting/government-contractor firms are a viable B2B demand channel (moved here from the Stage 2 addendum, 2026-08-02)
- **Source:** `reports/market-validation-argument-v1.0.md` (not yet reflected in any site page)
- **Premise 1:** Anthropic's Claude Partner Network gates consulting-firm tier status on certified-practitioner headcount (10 for Select, 100 for Preferred, 1,000 for Global Premier), the same mechanic AWS uses in its own Partner Network.
- **Premise 2:** Large government-facing IT consultancies (e.g., Capgemini, DXC) are already named Anthropic ecosystem partners, already reimburse cloud certification costs generally, and operate in a government-contracting world (see DoD Directive 8140) where mandated staff certification is already normal practice.
- **Conclusion:** These firms have a structural, revenue-linked, bulk-purchase incentive to pay for staff Claude certification prep — a potentially larger and more predictable channel than the individual YouTube funnel this business model currently relies on exclusively.
- **Status:** ⚪ Planned — this is a new, untested hypothesis. No firm has been asked directly whether it would pay for bulk cohort seats to hit its practitioner quota. Recommended first experiment: contact 3–5 Claude Partner Network "Registered"-tier firms and ask directly (see market-validation-argument-v1.0.md, Section 6). **Reclassified 2026-08-02:** this is corporate bulk-sales demand generation, which belongs alongside Stage 3's other Customer Creation metrics (H10, H13) rather than as a Stage 2 addendum.

### H14 — Multi-certification market expansion increases Stage 3 reach (new, 2026-08-02)
- **Source:** Founder note via Workspace Notes
- **Premise 1:** The Claude Certified Architect audience alone caps total addressable reach at one vendor's certification ecosystem.
- **Premise 2:** Developers pursuing AI/cloud certification broadly also seek Nvidia, Azure, and AWS AI credentials, not just Anthropic's.
- **Conclusion:** Expanding the content catalog to cover Nvidia, Azure, and AWS AI certifications alongside Claude will increase Stage 3 (Customer Creation) market reach beyond the current single-vendor scope.
- **Status:** ⚪ Planned — no multi-vendor content has been produced yet; this is a new, untested hypothesis.

### H16 — Paid advertisement is viable only post-validation, gated by a sustainability check (new, 2026-08-02)
- **Source:** `stage-customer-creation.html`, `advertisement.html`
- **Premise 1:** Through Customer Validation (Stage 2), acquisition is deliberately $0-ad-spend organic (see H5, `focus.html`) so that content quality — not budget — is the variable being tested.
- **Premise 2:** Once the Stage 2 revenue gate clears, real organic funnel data (H4, H7) exists to benchmark a paid channel's CAC against.
- **Conclusion:** Paid advertisement (YouTube Ads, Google Search Ads, LinkedIn Ads, Reddit Ads, developer newsletter/podcast sponsorships, X Ads) becomes an *option* in Stage 3, but only if a capped test on a single channel shows CAC staying below the $10/mo membership + $250–$500 cohort lifetime value (LTV). It never replaces organic as the primary channel.
- **Status:** ⚪ Planned — no paid channel has been tested; the CAC/LTV sustainability check itself has no hard numbers yet since it depends on H4/H7 producing real organic-funnel data first.

### H17 — Onsite Cambridge lessons and a corporate onsite pilot with Marianna diversify delivery and validate B2B demand (new, 2026-08-04)
- **Source:** Founder note; `risk-analysis.html`, `single-founder-bandwidth.html`
- **Premise 1:** In-person delivery may increase perceived value and commitment relative to a purely online cohort.
- **Premise 2:** A named corporate partner (Marianna) gives H12's B2B/consulting-firm channel hypothesis its first concrete, real-world test rather than remaining a cold-outreach plan.
- **Premise 3:** Both pilots are also a direct mitigation for acidity check Finding F3 (single-founder, single-platform point of failure) — they add a second delivery format and, in the corporate case, a second person to the delivery chain.
- **Conclusion:** Piloting onsite Cambridge sessions and a corporate onsite training product with Marianna will (a) test whether in-person delivery outperforms or complements the online Sunday cohort, and (b) produce the first real signal on H12's B2B channel, ahead of any dedicated outreach campaign.
- **Status:** ⚪ Planned — no pilot has run yet. See `risk-analysis.html`'s Active Mitigations Underway section and `single-founder-bandwidth.html` for the bandwidth context this responds to.

---

## Stage 4: Company Building

### H11 — $100,000 ARR is the right threshold to begin hiring
- **Source:** `comp-scale-organization.html`
- **Premise 1:** Founder-led production, marketing, and support has a hard ceiling on throughput.
- **Premise 2:** A freelance video editor, cohort coordinator, and technical TAs can absorb that load without degrading student experience.
- **Conclusion:** At $100k ARR, hiring these three roles lets the business scale past the founder's personal capacity.
- **Status:** ⚪ Hypothesized. **Note:** no cost model exists for these hires against the $100k figure (i.e., whether $100k ARR actually leaves enough margin to pay three roles) — see acidity check Finding F7.

### H15 — Founder transitions to full-time at the Stage 4 threshold (new, 2026-08-02)
- **Source:** Founder note via Workspace Notes; `stage-company-building.html`
- **Premise 1:** At the Stage 2→3 gate (H9), the founder deliberately kept his contract job and ran this as an ongoing second job — that decision was explicitly scoped to the $10k gate, not the whole business's lifetime.
- **Premise 2:** $100k ARR (H11) represents revenue large enough to justify leaving the contract role entirely.
- **Conclusion:** Unlike the Stage 3 entry gate, reaching Stage 4 ($100k ARR) is the point where Rifat Erdem Sahin goes all-in and runs AI Certification Helper as his full-time job.
- **Status:** ⚪ Hypothesized/Decided — this is a firm founder decision tied to the $100k ARR hiring trigger (H11), not yet reached. No cost-of-living/runway model has been checked against this transition yet.

---

## Summary Table

| ID | Hypothesis | Status |
|----|------------|--------|
| H1 | Rising AI skills expectations | 🟡 Partially validated |
| H2 | Animated content beats standard formats | 🟡 In Testing |
| H3 | Audience will pay for cert prep | ⚪ Planned |
| H4 | YouTube funnel → 1% paid membership conversion | 🟡 In Testing |
| H5 | Cohorts sell out organically (live streaming/community, not a guarantee) | ⚪ Hypothesized |
| H6 | TAM/SAM/SOM market sizing | ⚠️ Claimed, unverified, now partially grounded |
| H7 | Funnel CTR/conversion rates | ⚪ Hypothesized |
| H8 | Cohort delivers exam-ready PMF (no outcome guaranteed) | ⚪ Hypothesized (both blockers cleared — cert confirmed real, guarantee liability resolved) |
| H9 | $10k Stage 2 exit gate, now a 2-launch repeat gate → second job, not full-time (revised) | ⚪ Hypothesized/Decided |
| H10 | >40% retention = MVP video-quality metric (confirmed) | 🟡 In Testing |
| H11 | $100k ARR → hiring threshold | ⚪ Hypothesized |
| H12 | IT consulting/gov-contractor firms as B2B channel (now under Stage 3) | ⚪ Planned |
| H13 | 1,000x subscriber growth per video (new, Stage 3 primary metric) | ⚪ Planned |
| H14 | Multi-certification market expansion (Nvidia/Azure/AWS) (new) | ⚪ Planned |
| H15 | Founder transitions to full-time at Stage 4 (new) | ⚪ Hypothesized/Decided |
| H16 | Paid advertisement viable only post-validation, CAC/LTV-gated (new) | ⚪ Planned |
| H17 | Onsite Cambridge + corporate pilot with Marianna (new) | ⚪ Planned |

**Overall:** 0 of 17 hypotheses are fully validated with cited evidence, 1 is partially validated, and 1 (TAM/SAM/SOM sizing) is still marked complete in a source page with only partial external grounding. The certification-existence blocker on H8 has been cleared by external research (v1.1.0). As of v1.2.0, the founder has made two explicit decisions rather than pending hypotheses: (1) the $10k Stage 2 gate is executed solo for agility and does **not** trigger a full-time transition — it stays an ongoing second job — and (2) the primary Stage 3 success metric is now 1,000x subscriber growth per video (H13), not the 40% retention figure (H10, demoted to a quality floor). As of v1.4.0: H4 has real supporting data (an 8-week, ~4-attendee free weekly cohort) and is upgraded to In Testing; H12 moved from a Stage 2 addendum into Stage 3 as a Customer Creation-scale channel; and two new Stage 3/4 hypotheses were added — H14 (multi-certification expansion) and H15 (founder goes full-time at the $100k ARR / Stage 4 threshold, explicitly distinct from the H9 decision to stay part-time at the Stage 3 gate). As of v1.5.0: added H16, opening a conditional, CAC/LTV-gated path to paid advertisement in Stage 3 — organic stays primary through Stage 2 by design (H5, `focus.html`), and paid spend is never a default. As of v1.6.0: added H17 (onsite Cambridge + corporate pilot with Marianna); revised H9 into a 2-launch repeat gate closing acidity Finding F6; and cross-linked a batch of new supporting pages (competitive analysis, funnel math, unit economics, cost-side model, evidence map, test plan, single-founder bandwidth, validation repeat gate) that collectively address acidity Findings F3, F4, F5, F6, and F7. This tracker should be updated in place (bump to v1.7, v1.8, etc.) as each experiment produces real results.

---

## Change Log

- **v1.6.0** (2026-08-04): Added H17 (onsite Cambridge lessons + corporate onsite pilot with partner Marianna, testing H12's B2B channel and mitigating acidity Finding F3). Revised H9 to require 2 consecutive cohort launches combining to $10,000, rather than a single launch, directly closing acidity Finding F6 — see the new `validation-repeat-gate.html`. Added seven new supporting pages: `competitive-analysis.html` (F4), `funnel-math.html` (F5), `unit-economics.html` and `cost-side-model.html` (F7), `evidence-map.html`, `test-plan.html`, and `single-founder-bandwidth.html` (F3) — all registered in `nav.js` and cross-linked bidirectionally from `hypothesis.html`, `risk-analysis.html`, `stage-customer-validation.html`, `quality-gates.html`, `comp-market.html`, `comp-funnel.html`, `comp-business-model.html`, `bmc-revenue-streams.html`, `bmc-cost-structure.html`, `comp-creation-validation.html`, `test-metrics.html`, and `cd-hyp-competitive.html`. Documented that the acidity check's recommended 10–15 discovery interviews are being run inside the existing free weekly Sunday 9–11pm cohort rather than as separate outreach (see `evidence-map.html`). Superseded `reports/acidity-check-report-v1.0.md` with `reports/acidity-check-report-v1.1.0.md`, marking F1/F3/F4/F5/F6/F7/F8 resolved or addressed in place.
- **v1.5.0** (2026-08-02): Added H16 — paid advertisement (YouTube Ads, Google Search Ads, LinkedIn Ads, Reddit Ads, developer newsletter/podcast sponsorships, X Ads) becomes an option in Customer Creation (Stage 3) only after the Stage 2 validation gate clears and a capped-test sustainability check shows paid CAC staying below the $10/mo membership + $250–$500 cohort LTV — it is conditional, never a default, and organic YouTube/LinkedIn remain primary throughout. Added a matching spec-box to `stage-customer-creation.html` and created the new `advertisement.html` page (registered in `nav.js`'s Growth dropdown and search index, linked bidirectionally from `bmc-channels.html`) covering the gate, the sustainability check, and candidate ad venues.
- **v1.4.0** (2026-08-02): Incorporated founder notes captured via the site's Workspace Notes feature. Upgraded H4 to In Testing on the strength of an 8-week (Jun–Jul 2026) free weekly cohort averaging ~4 attendees per session. Defined H5's two-tier delivery model: $10/mo members get recorded cohort replays, the $250 package buys live attendance with screen-share participation across a day-long session with breaks. Clarified H7's funnel scope as exam-prep-specific. Moved H12 (B2B/consulting channel) from the Stage 2 addendum into Stage 3, reflecting that it's a Customer Creation-scale demand channel. Added H14 (multi-certification market expansion — Nvidia/Azure/AWS AI certs, alongside Claude) and H15 (founder transitions to full-time at the $100k ARR / Stage 4 threshold, distinct from and later than the H9 decision to stay part-time at the Stage 2→3 gate). Propagated all of the above into `hypothesis.html` (also split its combined "Stage 3 & Stage 4" section into two separately-headed sections for visual clarity) and `stage-company-building.html`.
- **v1.3.0** (2026-08-01): Founder clarified the cohort's actual value proposition and corrected an overloaded metric. Removed all "exam pass guarantee"/"guaranteed cert preparation" language from `comp-business-model.html` and `comp-funnel.html` (acidity check Finding F8, now resolved) — replaced with an accurate description of live-streamed sessions, community membership, and real-time problem-solving that builds discipline and a peer network, with an explicit disclaimer that Anthropic alone grants the certification. Added the same disclaimer to `comp-pmf.html`'s PMF Validation Gates. Confirmed (H10) that >40% video retention is specifically the MVP-stage video-quality metric — proving content is clear and not confusing, tied to the single MVP problem focus of helping customers pass their exam — updated `comp-mvp.html` accordingly. Updated H5 and H8 to reflect the no-guarantee clarification.
- **v1.2.0** (2026-08-01): Incorporated `reports/ai-adoption-and-skills-gap-v1.0.md` and `reports/exam-prep-market-and-student-behavior-v1.0.md` (further grounding H1 and H6). Revised H9 to reflect two founder decisions: the $10k gate is executed solo for agility and applies strictly as the Stage 2→3 exit criterion, and does not trigger a full-time transition — the project continues indefinitely as an ongoing second job (flagged an unresolved USD-vs-GBP currency ambiguity in the $10k figure). Demoted H10 (>40% retention) from primary Stage 3 gate to a secondary content-quality floor. Added H13: 1,000x per-video subscriber growth (baseline ~30 subscribers) as the new primary Stage 3 metric. Propagated all of the above into `comp-creation-validation.html`, `stage-customer-creation.html`, and `gemini.md`, and folded the skills-gap research into the TAM/SAM/SOM formula in `comp-market.html`.
- **v1.1.0** (2026-08-01): Incorporated `reports/market-validation-argument-v1.0.md`. Upgraded H1 to Partially Validated, cleared the certification-existence blocker on H8, and added H12 (IT consulting/government-contractor firms as a new B2B demand channel).
- **v1.0.0** (2026-08-01): Initial consolidation of all hypotheses from the site's stage/component pages, cross-referenced against `reports/acidity-check-report-v1.0.md`.
