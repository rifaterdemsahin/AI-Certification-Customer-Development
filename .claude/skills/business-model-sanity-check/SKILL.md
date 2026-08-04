---
name: business-model-sanity-check
description: Scan every page and doc in the AI Certification Customer Development site, sanity-check the business model for internal contradictions and dead/orphaned content, score confidence in the model, and publish a new version of the confidence report (markdown + confidence-report.html). Use when the user asks for a sanity check, an audit, a confidence score, or to re-run/update the confidence report as the business iterates.
---

# Business Model Sanity Check

Produces a versioned, numeric **Business Model Confidence Score** for this repo by
re-scanning the whole site each run. Every run creates a new version — never edit a
past version's numbers in place (mirrors the `reports/acidity-check-report-*.md`
versioning convention already established in `CLAUDE.md`).

Re-read `CLAUDE.md` at the start of each run — page conventions, nav.js structure,
and the report-versioning rules may have evolved since this skill was written.

## Step 1 — Determine the next version

```
ls reports/business-model-confidence-v*.md
```

- No file exists yet → this run is `v1.0.0`.
- File(s) exist → parse the highest version. Bump:
  - **patch** (v1.0.0 → v1.0.1): re-run with no new check categories, scores moved
    only because underlying hypothesis statuses/evidence changed.
  - **minor** (v1.0.0 → v1.1.0): this run adds a new check category (e.g. a new
    class of consistency check) or a finding is newly resolved/opened.
  - **major**: the scoring methodology itself changes (rubric, weights). Avoid
    unless the user explicitly asks to change how scoring works — a major bump
    breaks score comparability across versions.

## Step 2 — Re-derive hypothesis validation score from source, not from caches

Read `HYPOTHESIS.md` fresh. For **each** hypothesis (H1, H2, …), read its own
**Status:** line inside its own section — not the Summary Table row, which has
drifted out of sync before (found in v1.0.0: H3's table row said ⚪ Planned while
its own entry said 🟡 In Progress). Treat any such mismatch as a finding, and use
the per-hypothesis entry as ground truth for scoring.

Map each hypothesis's leading status emoji to a numeric score:

| Emoji | Meaning | Score |
|---|---|---|
| ✅ | Validated | 100 |
| 🟡 | In Testing / Partially Validated / In Progress | 55 |
| ⚪ | Planned / Hypothesized | 20 |
| ⚠️ | Claimed, unverified | 10 |

**Hypothesis Validation Score** = average of all per-hypothesis scores, as a
percentage.

## Step 3 — Run the site-integrity sanity checks

Run each of these fresh (do not reuse numbers from a previous report version):

1. **Broken local links** — every `href="..."` across all `*.html` files that
   isn't `http(s)://`, `mailto:`, `#`, or `javascript:` must resolve to a real file
   relative to its source file. (A quick Python pass with `re.findall(r'href="([^"]+)"')`
   + `os.path.exists` works; watch for false positives inside inline `<script>`
   template-literal strings, e.g. `markdown_renderer.html`'s own regex-replacement
   code.)
2. **Nav/reachability graph** — every `*.html` file (except `index.html` itself,
   the root of the graph) must be referenced either as an `href` from some page, or
   inside `nav.js`'s `groups`/`searchIndex` arrays. Anything not referenced
   anywhere is an **orphaned page** — flag it as a finding without deleting or
   auto-wiring it in (wiring in orphaned content is a separate, explicit task —
   this skill only reports).

2b. **Uncommitted-work scan — run `git status --porcelain` across the whole repo,
   not just the files this check happens to touch.** Check both `??` (untracked,
   e.g. brand-new pages) and `M` (modified, e.g. existing pages edited to link to
   them) — a v1.0.0 run of this skill undercounted a real finding by only checking
   untracked new files and missing that 40 *existing* pages had also been modified
   as part of the same uncommitted feature. Group the full `git status --porcelain`
   output by apparent feature (e.g. "these 58 files are all part of the same
   hyp-h* cross-linking work") rather than reporting a bare file count — the risk
   is losing a whole feature, and the report should make that legible. Before
   treating any modified/untracked file as suspicious, `git diff` a sample to
   confirm it's coherent, intentional prior work and not something to flag as
   corruption.
3. **HYPOTHESIS.md internal consistency** — for every hypothesis, does the Summary
   Table row's status match the entry's own Status line? List every mismatch.
4. **Headline-number cross-file consistency** — grep all `*.html` for the site's
   four headline business numbers (the $10,000 Stage 2→3 gate, the 1,000x
   subscriber-growth Stage 3 metric, the $100,000 ARR Stage 4 hiring trigger, and
   the >40% MVP video-retention floor — see `CLAUDE.md`'s "Where the business
   numbers/milestones live" section for the canonical source pages) and confirm no
   page states a conflicting number or currency for the same claim (e.g. a stray
   "£10,000" that never made it past `HYPOTHESIS.md`'s own text would be a pass,
   not a finding — only flag a number if it's live on an actual page).
5. **Acidity-check findings roll-forward** — read the latest
   `reports/acidity-check-report-v*.md` (highest version number) and tally its
   finding statuses: count `✅ RESOLVED`/`✅ ADDRESSED`, `🟡 PARTIALLY ADDRESSED`,
   and `STILL OPEN`/unresolved findings.

**Site Integrity Score** starts at 100 and takes deductions:
- −5 per `STILL OPEN` acidity finding
- −2.5 per `PARTIALLY ADDRESSED` acidity finding
- −5 per real broken link (not a false positive)
- −15 total if any orphaned pages exist, regardless of count (it's a category
  failure, not a per-file one — one orphaned page and eighteen are the same kind of
  problem: content the site's own nav can't reach)
- −10 total if `git status --porcelain` (step 2b) shows any uncommitted work,
  regardless of file count — same reasoning as orphaned pages: 1 file at risk and
  58 files at risk are the same category of problem (uncommitted = losable). If a
  prior version of this report already deducted for this and the working tree is
  unchanged since, don't deduct again — only deduct once per distinct batch of
  uncommitted work.
- −5 per HYPOTHESIS.md table/entry status mismatch
- −5 per confirmed cross-file numeric contradiction

Floor the score at 0.

## Step 4 — Compute the overall Business Model Confidence Score

```
overall = round(0.7 * hypothesis_validation_score + 0.3 * site_integrity_score)
```

70/30 because this score is fundamentally about *business* confidence — whether
the hypotheses are validated — with site integrity as a smaller risk-adjustment
(a housekeeping problem shouldn't swamp the business signal, but it should matter).

Confidence bands for the label shown alongside the number:
- **80–100 — High confidence**: majority validated, ready to scale
- **55–79 — Moderate confidence**: promising signals, key gates still unproven
- **30–54 — Low-moderate confidence**: early-stage, most hypotheses untested, no
  fatal contradictions found
- **0–29 — Low confidence**: foundational assumptions unverified or actively
  contradicted

A low score early in Customer Discovery/Validation is *expected*, not alarming —
say so explicitly in the report so the number isn't misread as "the business is
failing" when it actually means "most bets are still open, which is normal at this
stage."

## Step 5 — Write the new report

Create `reports/business-model-confidence-vX.Y.Z.md` (never edit an old version's
numbers — see `CLAUDE.md`'s Report versioning convention). Include:
- Version, date, and one line on what changed vs. the prior version (or "initial
  version" for v1.0.0).
- The overall score + band, with the 70/30 formula shown.
- The full per-hypothesis score table (ID, one-line hypothesis, status emoji,
  score).
- Every site-integrity finding from Step 3, each with a deduction amount, so the
  math is auditable.
- A short "what would move the score" section: the single highest-leverage next
  action (usually: resolve the highest-value ⚪/⚠️ hypothesis, or fix the largest
  integrity deduction).

If a prior version file exists, add a one-line superseded banner at its top
pointing forward, exactly as `reports/acidity-check-report-v1.0.md` does for
`v1.1.0`.

## Step 6 — Publish / update `confidence-report.html`

This is the one HTML page for this skill's output (create it on the first run,
update it on every subsequent run — don't create a new HTML file per version, the
markdown report is what's versioned on disk).

Follow the page conventions in `CLAUDE.md`: `#site-header` div, `nav.js` +
`main.js` includes, `.card` hero with a `.badge` + big score number, `.metrics-grid`
for the two sub-scores, `.content-section` blocks for the per-hypothesis table and
the integrity findings, a version-history table (append a row each run, don't
overwrite prior rows), and a link to the current version's full markdown report via
`markdown_renderer.html?src=reports/business-model-confidence-vX.Y.Z.md`.

On first run only:
- Register `confidence-report.html` in `nav.js`'s **Docs** group and in
  `searchIndex`.
- Add bidirectional links between `confidence-report.html` and `hypothesis.html`,
  and add it to `index.html`'s page-index grid.

## Step 7 — Update HYPOTHESIS.md

Bump `HYPOTHESIS.md`'s version and add a Change Log entry noting the new
confidence-report version and its headline score. This does not require adding a
new hypothesis ID — the confidence report scores existing hypotheses, it doesn't
assert a new falsifiable claim of its own.

## Step 8 — Follow the Mandatory Workflow Mandates

Per `CLAUDE.md`: restart the local server, open `confidence-report.html` (and any
other changed pages) in the browser, open the GitHub commits page for
`confidence-report.html`, and print clickable links at the end of the response.
