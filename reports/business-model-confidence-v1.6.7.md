# Business Model Confidence Report — v1.6.7

**Date:** 2026-08-11
**Produced by:** the `business-model-sanity-check` skill (`.claude/skills/business-model-sanity-check/SKILL.md`)
**What changed vs. v1.6.6:** No hypothesis or content change — the v1.6.6 batch (Skool LMS launch documentation) was committed and pushed to `claude/skool-setup-signups-6w38wa`, clearing the temporary −10 uncommitted-work deduction. `git status --porcelain` is now clean.

---

## Overall Score

# 45 / 100 — Low-moderate confidence

> Hypothesis Validation holds at 31.3% (31/100). Site Integrity rises to 77.5% now that the working tree is clean (uncommitted-work deduction cleared).

```
overall = round(0.7 × Hypothesis Validation Score + 0.3 × Site Integrity Score)
        = round(0.7 × 31.25 + 0.3 × 77.50)
        = round(21.875 + 23.25)
        = round(45.125)
        = 45
```

| Sub-score | v1.6.6 | v1.6.7 | Change |
|---|---|---|---|
| Hypothesis Validation Score | 31.3 / 100 | **31.3 / 100** | 0.0 |
| Site Integrity Score | 67.5 / 100 | **77.5 / 100** | +10.0 |
| **Overall** | **42 / 100** | **45 / 100** | **+3** |

---

## Hypothesis Validation Score — unchanged from v1.6.6

No hypothesis status changed since v1.6.6. See that report for the full 24-row table (sum 750/24 = 31.25 → 31/100).

---

## Site Integrity Score — 77.5/100

| # | Finding | v1.6.6 | v1.6.7 | Deduction | Rationale |
|---|---|---|---|---|---|
| 1 | Acidity-check findings still open (F2, F11, F12) | −15 | −15 | −15 | Unchanged (3 findings) |
| 2 | Acidity-check findings partially addressed (F3, F7, F9) | −7.5 | −7.5 | −7.5 | Unchanged (3 findings) |
| 3 | HYPOTHESIS.md table/entry mismatches | 0 | 0 | 0 | All 24 rows match their entries. |
| 4 | Broken local links | 0 | 0 | 0 | Full-repo scan, 0 real broken links |
| 5 | Orphaned pages | 0 | 0 | 0 | No new pages this run. |
| 6 | Headline number cross-file consistency | 0 | 0 | 0 | Consistent. |
| 7 | Uncommitted work (`git status --porcelain`) | −10 | **0** | 0 | **Cleared** — the Skool-launch batch was committed (`d7ab451`) and pushed to `claude/skool-setup-signups-6w38wa`. |

**Total deductions: 22.5 → Site Integrity Score: 77.5**

---

## What Would Move the Score

Unchanged from v1.6.6: **H9** (the $10k Stage 2→3 gate) remains the single biggest lever on the Hypothesis Validation Score. H5's own next step is converting a portion of the 8 real Skool signups (or new ones) into confirmed paying $10/mo members or $250–$500 cohort seats.

---

## Version History

| Version | Date | Overall Score | Note |
|---|---|---|---|
| v1.6.7 | 2026-08-11 | 45 / 100 (Low-moderate) | Cleared −10 temporary uncommitted-work deduction after committing and pushing the Skool-launch batch |
| v1.6.6 | 2026-08-11 | 42 / 100 (Low-moderate) | Skool LMS deployed live (8 recordings uploaded, levels + bio configured, link shared) with 8 real signups; upgrades H5 to 🟡 In Testing; −10 temporary uncommitted-work deduction |
| v1.6.5 | 2026-08-11 | 41 / 100 (Low-moderate) | Created "Your Market Reality Check" page (`5_Symbols/strategy/market-reality-check.html`); Validation holds at 29.8% (30/100), Site Integrity holds at 67.5% due to −10 uncommitted-work deduction |
| v1.0.3 | 2026-08-05 | 44 / 100 (Low-moderate) | Added Google Trends link and founder read to H1, plus WhatsApp cohort/referral signals |
