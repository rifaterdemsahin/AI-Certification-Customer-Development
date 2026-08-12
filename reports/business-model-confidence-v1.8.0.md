# Business Model Confidence Report — v1.8.0

> **Superseded by [v1.9.3](business-model-confidence-v1.9.3.md).**

**Date:** 2026-08-11
**Produced by:** the `business-model-sanity-check` skill (`.claude/skills/business-model-sanity-check/SKILL.md`)
**What changed vs. v1.7.0:** Two branches shipped work in parallel and both independently ran this skill, landing on the same `v1.7.0` filename with two different scores computed against two different snapshots of the repo:

- One branch added `5_Symbols/dashboard/sitemap.html` (a searchable Site Map, no new hypothesis) and, prompted by that change, ran a fresh full-repo re-scan that caught 2 pre-existing findings missed by earlier runs — 3 real broken links and H24 missing from `HYPOTHESIS.md`'s own Summary Table — but left them **flagged, not fixed**, to keep that batch scoped. That run scored **38/100**.
- The other branch added **H25** (certification value is bifurcating: judgement-verifying certs rise, memorization/trivia certs decline) and published `5_Symbols/strategy/cert-value-ai-era.html`. Its own fresh scan found the *same* 2 pre-existing findings and **fixed them in place**. That run scored **41/100**.

This report reconciles the merge of both branches. Since only the second branch's commits touched the affected files (`5_Symbols/hypotheses/hyp-h23.html`, `5_Symbols/strategy/evidence-map.html`, `5_Symbols/product/idea.html`, and `HYPOTHESIS.md`'s Summary Table), those fixes carry through the merge untouched — the merged repo ends up with **both** the Site Map **and** H25 **and** the broken-link/table-row fixes, so neither branch's isolated deduction applies. Both `v1.7.0` report files are kept as the historical record of what each branch's run actually found before the merge; this run recomputes fresh against the fully-merged state and does not edit either of them.

---

## Overall Score

# 41 / 100 — Low-moderate confidence

> Hypothesis Validation is 29.4% (29/100) — 25 hypotheses now tracked (H25 added), unaffected by the Site Map (no falsifiable claim). Site Integrity is 67.5% in the uncommitted state (uncommitted-work deduction is −10, since this merge itself is not yet committed) — no broken-link or table-consistency deduction, since both fixes are present in the merged tree. Will rise to 77.5 (overall 44) once this merge is committed.

```
overall = round(0.7 × Hypothesis Validation Score + 0.3 × Site Integrity Score)
        = round(0.7 × 29.40 + 0.3 × 67.50)
        = round(20.58 + 20.25)
        = round(40.83)
        = 41
```

| Sub-score | v1.7.0 (Site Map branch) | v1.7.0 (H25 branch) | v1.8.0 (merged) |
|---|---|---|---|
| Hypothesis Validation Score | 29.8 / 100 | 29.4 / 100 | **29.4 / 100** |
| Site Integrity Score | 57.5 / 100 | 67.5 / 100 | **67.5 / 100** |
| **Overall** | **38 / 100** | **41 / 100** | **41 / 100** |

---

## Hypothesis Validation Score — 29.4/100 (displayed 29/100)

Re-derived fresh from each hypothesis's own **Status:** line in `HYPOTHESIS.md` (not the Summary Table). Unchanged from the H25 branch's own v1.7.0 table — the Site Map branch added no hypothesis, so merging it doesn't move this score.

| ID | Hypothesis | Status | Score |
|---|---|---|---|
| H1 | Rising AI skills expectations | 🟡 Partially validated | 55 |
| H2 | Animated content beats standard formats | 🟡 In Testing | 55 |
| H3 | Audience will pay for cert prep | 🟡 In Progress | 55 |
| H4 | YouTube funnel → ~1% paid conversion | 🟡 In Testing | 55 |
| H5 | Cohorts sell out organically | ⚪ Hypothesized | 20 |
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
| H25 | Cert value bifurcation: judgement-verifying certs rise, trivia certs decline (new) | ⚪ Planned/Claimed | 20 |

**Sum:** 735 across 25 hypotheses → 735 / 25 = **29.4/100**.

---

## Site Integrity Score — 67.5/100

Re-checked fresh across the fully-merged repo (146 HTML files — 145 from the H25 branch plus `sitemap.html` from the Site Map branch):

| # | Finding | Site Map branch (v1.7.0) | H25 branch (v1.7.0) | v1.8.0 (merged) | Deduction | Rationale |
|---|---|---|---|---|---|---|
| 1 | Acidity-check findings still open (F2, F11, F12) | −15 | −15 | −15 | −15 | Unchanged (3 findings); latest acidity report is still v1.3.0. |
| 2 | Acidity-check findings partially addressed (F3, F7, F9) | −7.5 | −7.5 | −7.5 | −7.5 | Unchanged (3 findings) |
| 3 | HYPOTHESIS.md table/entry mismatches | −5 (H24 missing) | 0 (fixed) | 0 | 0 | The Site Map branch found but didn't fix H24's missing Summary Table row; the H25 branch fixed it. Only the H25 branch's commits touched `HYPOTHESIS.md`'s table, so the fix carries through the merge untouched. All 25 rows now match their entries. |
| 4 | Broken local links | −15 (3 real, flagged) | 0 (3 real, fixed) | 0 | 0 | Both branches independently found the same 3 broken links (`hyp-h23.html`/`evidence-map.html` → nonexistent `hyp-h19.html`; `idea.html` → `target-audience.html` missing `../strategy/`). Only the H25 branch's commits touched those 3 files, so its fix carries through. Full re-scan post-merge: 0 real broken links. |
| 5 | Orphaned pages | 0 | 0 | 0 | 0 | All 3 pages added across both branches (`sitemap.html`, `cert-value-ai-era.html`, `hyp-h25.html`) are registered in `nav.js` and reachable via at least one inbound link each. Full reachability scan: 0 orphans. |
| 6 | Headline number cross-file consistency | 0 | 0 | 0 | 0 | Consistent. Neither branch's new pages restate the $10k/1,000x/$100k/40% figures. |
| 7 | Uncommitted work (`git status --porcelain`) | 0 (committed) | −10 (uncommitted at scan time) | −10 | −10 | This merge itself is uncommitted at scan time — same pattern as every prior "will rise once committed" run in this chain. |

**Total deductions: 32.5 → Site Integrity Score: 67.5** (would be 77.5/100 immediately after this merge is committed).

---

## What Would Move the Score

The highest-leverage *business* action remains: **H9** (the $10k Stage 2→3 gate) — two consecutive paid cohort launches combining to $10,000 — since it gates H15, H16, and H19 downstream and is the single biggest lever on the Hypothesis Validation Score.

The highest-leverage *process* fix this run isn't a hypothesis or a broken link — it's avoiding a repeat of this exact collision. Two branches independently claimed the same report version number (`v1.7.0`) because each was authored without visibility into the other's concurrent work. There's no code fix for this (it's a workflow property of parallel branches, not a bug), but future concurrent sanity-check runs should expect this class of conflict and reconcile scores from source (as this report does) rather than trying to line-merge the two reports' prose.

---

## Version History

| Version | Date | Overall Score | Note |
|---|---|---|---|
| v1.8.0 | 2026-08-11 | 41 / 100 (Low-moderate) | Merged two concurrent branches (Site Map + H25/cert-value-ai-era.html) that had independently published colliding `v1.7.0` reports; recomputed fresh against the fully-merged state — both branches' broken-link and H24-table-row fixes carry through, so neither branch's isolated deduction applies |
| v1.7.0 (H25 branch) | 2026-08-11 | 41 / 100 (Low-moderate) | Added H25 (cert value bifurcation) and published `cert-value-ai-era.html`; found and fixed 3 real broken links plus a stale H24 Summary Table omission; −10 temporary uncommitted-work deduction |
| v1.7.0 (Site Map branch) | 2026-08-11 | 38 / 100 (Low-moderate) | Added Site Map page (nav tooling, no new hypothesis); fresh re-scan found 3 pre-existing broken links + H24 missing from Summary Table, flagged not fixed |
| v1.6.5 | 2026-08-11 | 41 / 100 (Low-moderate) | Created "Your Market Reality Check" page (`5_Symbols/strategy/market-reality-check.html`) detailing JTBD, unspoken insights, value chain, table stakes, and Vonos.ai visual integration; −10 temporary uncommitted-work deduction |
| v1.6.4 | 2026-08-11 | 41 / 100 (Low-moderate) | Created "Tell Us About Your Idea" page (`5_Symbols/product/idea.html`) and linked to it from Business Plan Summary; Validation and Site Integrity hold flat; −10 temporary uncommitted-work deduction |
| v1.6.3 | 2026-08-11 | 41 / 100 (Low-moderate) | Added Skool vs. YouTube comparison page (`skool-vs-youtube.html`) and linked to H4, H5, H7, H8; Validation and Site Integrity hold flat; −10 temporary uncommitted-work deduction |
| v1.6.2 | 2026-08-11 | 41 / 100 (Low-moderate) | Added Claude Partner Strategy page (`claude-partner-strategy.html`) detailing CPN Services Program (Select Tier) benefits and mapping them to Steve Blank's Customer Development stages, cross-linking to H12, H1, H6, and H17; Validation and Site Integrity hold flat; −10 temporary uncommitted-work deduction |
| v1.6.1 | 2026-08-11 | 41 / 100 (Low-moderate) | Added Skool LMS & Community Integration page (`skool-lms-integration.html`) and linked to H5, H8, H21; Validation and Site Integrity hold flat; −10 temporary uncommitted-work deduction |
| v1.6.0 | 2026-08-11 | 41 / 100 (Low-moderate) | Added dedicated Customer Pain Points strategy page (`pain-points.html`) and H24 (Emotional Pain Drivers) detailed card content; Validation rises to 29.8% (30/100); −10 temporary uncommitted-work deduction |
| v1.0.3 | 2026-08-05 | 44 / 100 (Low-moderate) | Added Google Trends link and founder read to H1, plus WhatsApp cohort/referral signals |
