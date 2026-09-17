> Superseded by nothing yet — this is the current version. Previous: [v1.9.110](business-model-confidence-v1.9.110.md)

# Business Model Confidence Report — v1.9.111

**Date:** 2026-09-17
**Produced by:** the `business-model-sanity-check` skill
**What changed vs. v1.9.110:**
1. **Calendar Streamlining**: Removed rigid 1-1 workshop rows from the public calendar table (`5_Symbols/dashboard/calendar.html`), reducing schedule noise and enabling frictionless on-demand 1-1 booking by sending a direct message or leaving a comment to agree a mutually suitable time.
2. **VIP Package Upgrade**: Upgraded VIP Plan 3 ($250/yr) across `5_Symbols/product/skool-delivery-pilot-offer.html`, `5_Symbols/product/skool-about.html`, and `5_Symbols/bmc/bmc-revenue-streams.html` to explicitly grant Team Access for members' organizations, private 1-1 advisory sessions, and mutual Non-Disclosure Agreement (NDA) coverage for commercial/enterprise security.
3. **Daily OBS Hands-on Course Section**: Created dedicated architecture spec `5_Symbols/growth/hands-on-obs-course-section.html` documenting daily screen-recorded coding/architecture sessions across Beginner, Intermediate, and Advanced tiers; cross-linked as Door 4 on `5_Symbols/growth/courses-production-collaborative-video.html` and in `5_Symbols/growth/course-curriculum-learning-objectives.html`, registered in `5_Symbols/toolbox/nav.js` and `5_Symbols/dashboard/latest-pages.html`.
4. **Hypothesis Tracker Sync**: Updated `4_Formula/HYPOTHESIS.md` to version v1.349.0 annotating H5, H8, H29, H30, and H34; synced footer of `5_Symbols/dashboard/hypotheses-print.html`.
5. Site Integrity holds **70.0 / 100** (standard temporary −10 deduction for uncommitted working tree changes; lifts to 80.0 upon git commit).
6. Hypothesis Validation holds **35.1 / 100** (no hypothesis moved status tier).

> Previous version: [v1.9.110](business-model-confidence-v1.9.110.md)

## Overall Score

# 46 / 100 — Low-moderate confidence (band 30–54)

```
overall = round(0.7 × 35.1 + 0.3 × 70.0) = round(24.57 + 21.00) = round(45.57) = 46
```

| Sub-score | v1.9.110 | v1.9.111 (this run) |
|---|---|---|
| Hypothesis Validation Score | 35.1 / 100 | **35.1 / 100** |
| Site Integrity Score | 70.0 / 100 | **70.0 / 100** (uncommitted-work deduction) |
| **Overall** | **46 / 100** | **46 / 100** |

Score recovers to 49 / 100 immediately upon git commit.

### What Moves the Score Next
1. Commit the current batch — immediately lifts the −10 deduction and restores Site Integrity to 80.0, moving overall back to 49.
2. Resolve acidity findings F2/F11 (STILL OPEN, −5 each) — the largest remaining structural lever that doesn't require new customer evidence.
3. Log a first member-shipped repo against H35 Level 1 (Cadet/Explorer) — moves H35 from ⚪ Proposed toward 🟡 In Testing.
4. A concrete, named paid conversion — a confirmed $250/$500 Share Screen enrollment, a repeat referral, or Maggie converting from new joiner to a paying VIP tier — remains the highest-value lever on the 70%-weighted Hypothesis Validation score.

## Hypothesis Validation — 35.1 / 100

Unchanged: 15 × 55 + 18 × 20 + 1 × 10 = 1195 / 34 = **35.1**. No hypothesis Status line changed tier in this run.

## Site Integrity — 70.0 / 100

- Acidity F2/F11 STILL OPEN: −10 (unchanged).
- Acidity F3/F7/F9/F12 PARTIALLY ADDRESSED: −10 (unchanged).
- Uncommitted work: **−10** — batch uncommitted at time of writing (`calendar.html`, `skool-delivery-pilot-offer.html`, `skool-about.html`, `hands-on-obs-course-section.html`, `course-curriculum-learning-objectives.html`, `courses-production-collaborative-video.html`, `bmc-revenue-streams.html`, `HYPOTHESIS.md`, `hypotheses-print.html`, `latest-pages.html`, `nav.js`).
- Broken links: **0** — re-verified.
- Orphaned pages: **0** — re-verified (`hands-on-obs-course-section.html` reachable via `courses-production-collaborative-video.html`, `course-curriculum-learning-objectives.html`, `calendar.html`, `HYPOTHESIS.md`, `latest-pages.html`, and `nav.js`).
- `4_Formula/HYPOTHESIS.md` table/entry mismatches: **0**.
- Cross-file numeric contradictions: **0**.

100 − 10 − 10 − 10 = **70.0**.

## Highest-leverage next action

Pursue a first named repo-shipped signal against the new H35 badge ladder or a named paid-conversion/repeat-referral signal from the growing pool of engaged discovery contacts (Sude, Maggie, Bora, Marianna) to move Hypothesis Validation, the 70%-weighted lever this score has not moved on in several runs.
