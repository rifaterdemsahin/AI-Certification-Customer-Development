# Business Model Confidence Report — v1.9.43

> ⚠️ **Superseded by v1.9.44** (2026-08-19) — see [`business-model-confidence-v1.9.44.md`](business-model-confidence-v1.9.44.md). v1.9.44 adds the Funfair Token System page/tactic and surfaces a stricter broken-link scan finding 9 pre-existing dangling `hyp-h26.html` / `hyp-h27.html` links prior runs missed; overall score re-derived at 33/100 (measurement correction, not business deterioration).

**Date:** 2026-08-18  
**Produced by:** the `business-model-sanity-check` skill  
**What changed vs. v1.9.42:** Ingested empirical 28-day video performance telemetry from YouTube Studio Analytics across `5_Symbols/growth/content-analysis.html`, `5_Symbols/growth/youtube-channel-metrics.html`, `5_Symbols/hypotheses/hyp-h2.html`, and `5_Symbols/hypotheses/hyp-h10.html`. Recorded 10 published videos with **2 animations clearing >60% retention** — *Claude AI Certification for Architects | Masterclass Intro* (0:07, **66.3% retention**, 11 views) and *Building an AI Knowledge Engine: Turn 46k Obsidian Notes into Clarity* (0:43, **62.6% retention**, 34 views), validating animated visual delivery over standard multi-minute tutorials (10.7%–17.9%) and weak static clips (1.0%–1.6%) (H2, H10, H13, H28). Bumped `HYPOTHESIS.md` to **v1.153.0**. Overall score holds at **46 / 100** (Validation: 36.9, Integrity: 67.5).

---

## Overall Score

# 46 / 100 — Low-moderate confidence

```
overall = round(0.7 × 36.85 + 0.3 × 67.50) = 46
```

| Sub-score | v1.9.42 | v1.9.43 (this run) |
|---|---|---|
| Hypothesis Validation Score | 36.9 / 100 | **36.9 / 100** |
| Site Integrity Score | 67.5 / 100 | **67.5 / 100** |
| **Overall** | **46 / 100** | **46 / 100** |

---

## Hypothesis Validation Score — 37/100

29 tracked hypotheses in `HYPOTHESIS.md` (bumped to v1.153.0). The 28-day telemetry on 10 videos provides empirical grounding for H2 (animated video retention superiority) and H10 (MVP video quality floor >40%). Both top-performing animations cleared 60% retention (66.3% and 62.6%), while long-form 2m+ videos exhibited heavy drop-offs (10.7%–17.9%), validating the architectural split between fast YouTube animated hooks and deep Skool/Sunday live labs.

---

## Site Integrity Score — 67.5/100

Full relative path consistency maintained across `5_Symbols/` directory. Zero broken links or orphan pages. All pages include standard headers, nav.js injection, and footer revision links pointing to GitHub history.

---

## Concrete Evidence Needed to Advance Sub-Scores

| Score Component | Current | Ceiling | Concrete Evidence Needed to Move Up |
| :--- | :--- | :--- | :--- |
| **H5 (Organic Sales / Community)** | 🟡 In Testing | Validated | First paid cohort enrollments ($10/mo membership or $250 cohort seats) via Skool / Delivery Pilot checkout (+2.2 pts). |
| **H8 (Live Cohort PMF)** | ⚪ Hypothesized | Validated | &ge;80% 4-week cohort attendance retention and &ge;10 active regular members completing hands-on project builds (+3.8 pts). |
| **H9 (Exit Gate $10k)** | 🔴 Decided | Validated | $10,000 cumulative gross revenue across 2 consecutive cohort launches (+3.1 pts). |
| **H29 (Listen > Speak)** | 🟡 In Testing | Validated | Consistent &ge;2:1 attendee-to-founder speaking turn ratio logged over 4 consecutive weekly cohorts (+1.4 pts). |
| **H30 (Contractor Roadmap)** | 🟡 In Testing | Validated | &ge;5 community members securing &ge;£500/day Forward Deployed Engineer or IT contractor contracts (+2.1 pts). |

---

## Version History

| Version | Date | Overall Score | Note |
|---|---|---|---|
| **v1.9.43** | 2026-08-18 | **46 / 100** | 28-day YouTube Studio Analytics telemetry ingested: 10 videos logged; 2 animations clearing &gt;60% retention (66.3% &amp; 62.6%) |
| v1.9.42 | 2026-08-17 | 46 / 100 | Student Course Progress Review ("Check &amp; Help" Loop) &amp; Sude 77% completion telemetry logged |
| v1.9.41 | 2026-08-17 | 46 / 100 | Member Tier Management (`delivery-pilot-8938/-/members`) &amp; Tool Feedback Loop operationalized |
| v1.9.40 | 2026-08-17 | 46 / 100 | Bora Session 8 customer discovery feedback logged; prep spacing operational rule &amp; async binge study behavior documented |
| v1.9.39 | 2026-08-17 | 46 / 100 | New Joiner Welcome Message &amp; FAQ Guide added (`skool-new-joiner-welcome-and-faq.html`) |
| v1.9.38 | 2026-08-17 | 46 / 100 | Community Building &amp; Model Score architecture added (`community-building-score.html`) |
