# Business Model Confidence Report — v1.7.1

**Date:** 2026-08-11
**Produced by:** the `business-model-sanity-check` skill (`.claude/skills/business-model-sanity-check/SKILL.md`)
**What changed vs. v1.6.7 / v1.7.0:** This is a merge-resolution run. Two branches diverged from a shared v1.6.5 base and were run independently: `claude/skool-setup-signups-6w38wa` (this branch) deployed the Skool LMS live and upgraded H5 to 🟡 In Testing, publishing v1.6.6/v1.6.7; `main` added `5_Symbols/dashboard/sitemap.html` and a fresh full-repo re-scan caught 3 real broken links plus H24 missing from `HYPOTHESIS.md`'s Summary Table, publishing v1.7.0 (score dropped to 38). Merging the branches surfaced both sets of findings at once. This run fixes the 3 broken links and the missing table row (also syncing H5's own table row to its current status) and re-derives the full score fresh from the merged state.

---

## Overall Score

# 45 / 100 — Low-moderate confidence

> Hypothesis Validation rises to 31.3% (31/100) on H5's In Testing upgrade (carried over from v1.6.6). Site Integrity rises to 77.5% now that the 3 broken links and the missing H24 table row (both from v1.7.0) are fixed, and the merged batch is committed.

```
overall = round(0.7 × Hypothesis Validation Score + 0.3 × Site Integrity Score)
        = round(0.7 × 31.25 + 0.3 × 77.50)
        = round(21.875 + 23.25)
        = round(45.125)
        = 45
```

| Sub-score | v1.7.0 (main) | v1.6.7 (this branch) | v1.7.1 (merged) |
|---|---|---|---|
| Hypothesis Validation Score | 29.8 / 100 | 31.3 / 100 | **31.3 / 100** |
| Site Integrity Score | 57.5 / 100 | 77.5 / 100 | **77.5 / 100** |
| **Overall** | **38 / 100** | **45 / 100** | **45 / 100** |

---

## Hypothesis Validation Score — 31.3/100 (displayed 31/100)

Re-derived fresh from each hypothesis's own **Status:** line in `HYPOTHESIS.md`.

| ID | Hypothesis | Status | Score |
|---|---|---|---|
| H1 | Rising AI skills expectations | 🟡 Partially validated | 55 |
| H2 | Animated content beats standard formats | 🟡 In Testing | 55 |
| H3 | Audience will pay for cert prep | 🟡 In Progress | 55 |
| H4 | YouTube funnel → ~1% paid conversion | 🟡 In Testing | 55 |
| H5 | Cohorts sell out organically | 🟡 In Testing (Skool live, 8 signups) | 55 |
| H6 | TAM/SAM/SOM market sizing | ⚠️ Claimed, unverified, partially grounded | 10 |
| H7 | Funnel CTR/conversion rates | ⚪ Hypothesized | 20 |
| H8 | Cohort delivers exam-ready PMF | ⚪ Hypothesized | 20 |
| H9 | $10k Stage 2 exit gate (2-launch repeat) | ⚪ Hypothesized/Decided | 20 |
| H10 | >40% retention = MVP quality metric | 🟡 In Testing | 55 |
| H11 | $100k ARR → hiring threshold (weekday cohorts run by TAs) | ⚪ Hypothesized | 20 |
| H12 | B2B/consulting-firm channel | ⚪ Planned | 20 |
| H13 | 1,000x subscriber growth | ⚪ Planned | 20 |
| H14 | Multi-certification expansion (Nvidia, Microsoft, Google) | ⚪ Planned | 20 |
| H15 | Founder goes full-time at Stage 4 | ⚪ Hypothesized/Decided | 20 |
| H16 | Paid ads, post-validation only | ⚪ Planned | 20 |
| H17 | Cambridge + Marianna corporate pilot | ⚪ Planned | 20 |
| H18 | International onsite B2B | ⚪ Planned | 20 |
| H19 | Stage timeline estimates | ⚪ Planned/estimated | 20 |
| H20 | MAOT — delight threshold correlates with referrals | ⚪ Planned | 20 |
| H21 | $29 Exam Prep Bundle is a viable entry SKU | ⚪ Planned | 20 |
| H22 | Certified-talent placement (FDE model) Stage 4 vision | ⚪ Planned | 20 |
| H23 | 4DX weekly accountable rhythm overcomes whirlwind | 🟡 In Testing | 55 |
| H24 | Emotional Pain Drivers (fear, greed, insecurity) | 🟡 In Testing | 55 |

**Sum:** 750 across 24 hypotheses → 750 / 24 = **31.25 → 31/100** (rounded).

---

## Site Integrity Score — 77.5/100

Re-checked fresh across all HTML files, per the skill's Step 3:

| # | Finding | v1.7.0 | v1.7.1 | Deduction | Rationale |
|---|---|---|---|---|---|
| 1 | Acidity-check findings still open (F2, F11, F12) | −15 | −15 | −15 | Unchanged (3 findings, latest acidity report still v1.3.0) |
| 2 | Acidity-check findings partially addressed (F3, F7, F9) | −7.5 | −7.5 | −7.5 | Unchanged (3 findings) |
| 3 | HYPOTHESIS.md table/entry mismatches | −5 | **0** | 0 | **Fixed** — added the missing H24 row to the Summary Table, and synced H5's row from "⚪ Hypothesized" to "🟡 In Testing" to match its own entry. All 24 rows now match. |
| 4 | Broken local links | −15 | **0** | 0 | **Fixed** — repointed `hyp-h23.html` and `evidence-map.html`'s `hyp-h19.html` references to `stage-timelines.html` (matching every other H19 reference on the site), and added the missing `../strategy/` prefix to `idea.html`'s `target-audience.html` link. Full-repo re-scan (1,963 local hrefs checked) found 0 real broken links remaining — only the 4 known false positives inside inline JS template-literal strings. |
| 5 | Orphaned pages | 0 | 0 | 0 | 0 orphans — `sitemap.html` and every other page reachable via `href` or `nav.js`. |
| 6 | Headline number cross-file consistency | 0 | 0 | 0 | Consistent. |
| 7 | Uncommitted work (`git status --porcelain`) | 0 | 0 | 0 | This merge's full batch (Skool launch + Site Map + link/table fixes) is committed and pushed as part of this same run. |

**Total deductions: 22.5 → Site Integrity Score: 77.5**

---

## What Would Move the Score

Unchanged: **H9** (the $10k Stage 2→3 gate) remains the single biggest lever on the Hypothesis Validation Score. H5's next step is converting a portion of the 8 real Skool signups (or new ones) into confirmed paying $10/mo members or $250–$500 cohort seats.

---

## Version History

| Version | Date | Overall Score | Note |
|---|---|---|---|
| v1.7.1 | 2026-08-11 | 45 / 100 (Low-moderate) | Merge resolution: combines the Skool-launch batch (v1.6.7) with the Site Map batch (v1.7.0); fixes the 3 broken links and the missing H24 Summary Table row |
| v1.7.0 | 2026-08-11 | 38 / 100 (Low-moderate) | Added Site Map page (`sitemap.html`, nav tooling, no new hypothesis); fresh re-scan found 3 pre-existing broken links + H24 missing from Summary Table, both newly flagged |
| v1.6.7 | 2026-08-11 | 45 / 100 (Low-moderate) | Cleared −10 temporary uncommitted-work deduction after committing and pushing the Skool-launch batch; Site Integrity rises to 77.5 |
| v1.6.6 | 2026-08-11 | 42 / 100 (Low-moderate) | Skool LMS deployed live (8 recordings uploaded, levels + bio configured, link shared) with 8 real signups; upgrades H5 to 🟡 In Testing |
| v1.6.5 | 2026-08-11 | 41 / 100 (Low-moderate) | Created "Your Market Reality Check" page (`5_Symbols/strategy/market-reality-check.html`) |
| v1.0.3 | 2026-08-05 | 44 / 100 (Low-moderate) | Added Google Trends link and founder read to H1, plus WhatsApp cohort/referral signals |
