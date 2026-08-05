# Business Model Confidence Report — v1.0.3

**Date:** 2026-08-05
**Produced by:** the `business-model-sanity-check` skill (`.claude/skills/business-model-sanity-check/SKILL.md`)
**What changed vs. v1.0.2:** patch re-run, no new check categories. Since v1.0.2, `reports/tam-sam-som-verification-v1.0.md` was added — an independent Perplexity research pass that verifies H6's TAM/SAM/SOM claim layer by layer (TAM ⚠️ unverified, SAM ✅ verified via Forward Deployed Engineer hiring data, SOM ⚠️ unverified). `comp-market.html` and `hyp-h6.html` were updated to present this verdict. **Result: the overall score still did not move — 44/100, the third consecutive run at this number.**

---

## Overall Score

# 44 / 100 — Low-moderate confidence

> Unchanged from v1.0.1 and v1.0.2. The new Perplexity verification research
> sharpens *which layer* of H6's TAM/SAM/SOM claim is grounded (SAM, via the FDE
> hiring trend) versus which layers remain working assumptions (TAM, SOM) — but
> it explicitly does not claim the hypothesis's own conclusion (the ~50k SOM
> figure) is verified, so H6's tracked status stays ⚠️ and its score stays 10/100.
> This is the expected, honest outcome: richer, more precise research that
> confirms an existing partial-grounding assessment isn't the same as a
> hypothesis producing a new measured result.

```
overall = round(0.7 × Hypothesis Validation Score + 0.3 × Site Integrity Score)
        = round(0.7 × 29 + 0.3 × 80)
        = round(20.3 + 24.0)
        = 44
```

| Sub-score | v1.0.2 | v1.0.3 | Change |
|---|---|---|---|
| Hypothesis Validation Score | 29 / 100 | **29 / 100** | — |
| Site Integrity Score | 80 / 100 | **80 / 100** | — |

---

## Why the Hypothesis Validation Score didn't move (29 → 29)

H6 is the only hypothesis touched by this update. Its own Status line was enriched
with a new, more precise, independently-sourced paragraph (US FDE postings up
729% YoY — 643→5,330, April 2025→April 2026, per Indeed; Christian & Timbers'
~2,100% enterprise-demand growth projection by end of 2026; $170k–$600k+
compensation range) — but the emoji stayed ⚠️ **Claimed, unverified, now partially
grounded**, because the new research's own verdict explicitly keeps the
hypothesis's conclusion (the SOM ~50k figure) unverified. Per the skill's rubric,
⚠️ still scores 10/100. No other hypothesis changed. Sum across all 19
hypotheses is unchanged at 545 → 545/19 = 28.68 → **29/100**.

This is the rubric working as intended: the score tracks whether a hypothesis's
own *conclusion* has been validated, not how much supporting research has
accumulated around it. Three independent research efforts now support H6's SAM
premise (the original FDE citation, `ai-adoption-and-skills-gap-v1.0.md`'s
cloud-adoption proxy, and this new Perplexity layer-by-layer check) — genuine
convergent evidence — but none of them independently confirm the SOM conclusion
this hypothesis actually stakes its claim on, so the score correctly holds.

---

## Site Integrity Score — 80/100 (unchanged)

Re-checked fresh against the current 100-file site plus the two new files added
this run (`reports/tam-sam-som-verification-v1.0.md`, `reports/business-model-confidence-v1.0.2.md`):

| # | Finding | v1.0.2 | v1.0.3 |
|---|---|---|---|
| 1 | Acidity-check findings still open (F2, F9, F11) | −15 | −15 (unchanged — still no new `acidity-check-report` version beyond v1.1.0) |
| 2 | Acidity-check findings partially addressed (F3, F7) | −5 | −5 (unchanged) |
| 3 | HYPOTHESIS.md table/entry mismatches | 0 | 0 — H6's Summary Table row ("⚠️ Claimed, unverified, now partially grounded") still matches its own entry's leading status exactly. |
| 4 | Uncommitted work | 0 | 0 at publish time — this run's new files (the Perplexity report, this confidence report, and the `comp-market.html`/`hyp-h6.html`/`nav.js`/`HYPOTHESIS.md` edits) are committed together in the same commit that publishes this report, per the workflow the founder requested. |
| 5 | Broken local links | 0 | 0 — re-scanned all 100 HTML files; the one `markdown_renderer.html` regex false-positive (`href="$2"` inside its own JS template string) is confirmed and excluded as before. |
| 6 | Orphaned pages | 0 | 0 — `reports/tam-sam-som-verification-v1.0.md` is reachable via `nav.js`'s Docs group and linked bidirectionally from `comp-market.html` and `hyp-h6.html`; no HTML page is unreachable. |
| 7 | Headline number cross-file consistency | 0 | 0 — unaffected; this update didn't touch the $10k/$100k/1,000x/40% figures. |

**Total deductions: 20 → Site Integrity Score: 80** (unchanged).

---

## What would move the score

Unchanged in kind: the Hypothesis Validation Score (29/100) only moves when a
hypothesis's own conclusion — not just its supporting evidence — clears a status
tier. For H6 specifically, that means either an audited TAM/SAM/SOM sizing study
or real observed reach/conversion data against the ~50k SOM figure; supporting
research on the SAM layer, however well-sourced, won't move H6 further past its
current ⚠️ tier. Site Integrity remains at its practical ceiling (80/100) pending
founder decisions on the 3 open acidity findings (F2, F9, F11).

---

## Version History

| Version | Date | Overall Score | Note |
|---|---|---|---|
| v1.0.3 | 2026-08-05 | 44 / 100 (Low-moderate) | Unchanged — added independent Perplexity layer-by-layer verification of H6's TAM/SAM/SOM claim; sharpens which layer is grounded (SAM) vs. still assumed (TAM, SOM) without changing H6's tracked status tier. |
| v1.0.2 | 2026-08-05 | 44 / 100 (Low-moderate) | Unchanged — re-scan of 100 files and 19 hypotheses confirms no status-tier or integrity-defect change since v1.0.1. |
| v1.0.1 | 2026-08-04 | 44 / 100 (Low-moderate) | 58-file uncommitted-work risk resolved; everything else unchanged. |
| v1.0.0 | 2026-08-04 | 38 / 100 (Low-moderate) | Initial version. |
