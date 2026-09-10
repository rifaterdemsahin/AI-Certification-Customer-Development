---
name: top-3-priority-hypotheses
description: Re-derive and update the "Top 3 Hypotheses to Test Face-to-Face" page (5_Symbols/cd/top-3-priority-hypotheses.html) from the current state of 4_Formula/HYPOTHESIS.md. Use when the user asks to refresh, re-rank, or update the top-3 priority hypotheses page, or to log a new face-to-face conversation against it.
---

# Top 3 Priority Hypotheses

Keeps `5_Symbols/cd/top-3-priority-hypotheses.html` current as a living, ranked
shortlist of the 3 hypotheses the founder should be deliberately testing
face-to-face (Sunday cohort, Triton Square meetup, WhatsApp voice note, Monday
VIP Cowork) in his ongoing conversations. Re-run this whenever `4_Formula/HYPOTHESIS.md`
changes in a way that could move the ranking, or whenever the user reports a new
face-to-face conversation to log against it.

Re-read `CLAUDE.md` at the start of each run — page conventions and the
`5_Symbols/toolbox/nav.js` structure may have evolved since this skill was written.

## Step 1 — Re-derive the ranking from source, not from the page

Read `4_Formula/HYPOTHESIS.md` fresh. Do not assume the current #1/#2/#3 (H3, H5,
H27 as of 2026-09-10) are still correct — re-check every run.

Candidate pool: any hypothesis whose own **Depends on:** line reads "None" (i.e.
foundational — no upstream hypothesis it relies on) **and** whose **Status:** is
not yet ✅ Validated **and** which is realistically probe-able in a face-to-face
conversation (skip pure internal/founder-decision hypotheses explicitly marked
"Not customer-testable" on `5_Symbols/cd/cd-hypothesis-interview-questions.html`,
e.g. H15, H19).

Rank the candidate pool by counting how many other hypotheses list it under their
own **Feeds:** clause (parse the "Feeds H9, H8, H16" style text inside each
**Depends on:** line across the whole file). More hypotheses fed = higher
priority, since a kill or confirmation there re-shapes the most downstream
assumptions. Break ties by recency of new face-to-face evidence (most-recently
annotated **New (date)** entry wins) — a hypothesis that's actively getting live
signal is more useful to keep probing than one that has gone quiet.

Take the top 3. If the ranking hasn't changed since the last run, say so and skip
straight to Step 4 (still worth refreshing the "Current status" snippets, since
hypothesis Status lines change often even when the ranking doesn't).

## Step 2 — If the top 3 changed

- Update the `#1`/`#2`/`#3` rank-cards on `5_Symbols/cd/top-3-priority-hypotheses.html`
  in place: swap in the new hypothesis's title, "Why it's #N" rationale (cite the
  actual Feeds-count and dependency reasoning, not boilerplate), current status
  snippet (condensed from its own Status: line — 3-5 sentences, most recent
  evidence first), 2-3 open-ended face-to-face questions in the same style as the
  existing cards, and a "Kills if" line.
- Do not delete the September 2026 log table — hypotheses that rotate out of the
  top 3 keep their prior log rows; only the three active rank-cards change.
- If a hypothesis rotates out, add a one-line note directly below the log table's
  closing `</table>` (e.g. "Rotated out 2026-0X-XX: H27 confirmed/killed — see its
  own Status line.") rather than silently deleting its history.

## Step 3 — If the user is logging a new face-to-face conversation

- Append a row to the log table on the page: Date, Who (first name only — follow
  `CLAUDE.md`'s Strict First-Name Only Rule, and `"B."` for the anonymized
  candidate), Hypothesis (H3/H5/H27 or current top 3), What was said (a short,
  faithful paraphrase or direct quote), Confirm/Kill/Neutral.
- Remove the placeholder "No September 2026 face-to-face entries logged yet." row
  once the first real entry is added.
- Mirror the same evidence into the matching hypothesis's own **Status:** line in
  `4_Formula/HYPOTHESIS.md` as a **New (date)** entry, exactly as every other
  discovery signal on the file is logged — this page is a curated view, not a
  separate source of truth.

## Step 4 — Refresh status snippets even with no rank change

For each of the 3 active hypotheses, re-read its Status: line and confirm the
"Current status (date)" paragraph on the page still accurately summarizes it —
update the date and any headline numbers/names that have since changed (e.g. a
Skool signup count, a newly confirmed paid enrollment).

## Step 5 — Update 4_Formula/HYPOTHESIS.md

Bump `4_Formula/HYPOTHESIS.md`'s version (patch bump) and add a Change Log entry
noting what changed on the top-3 page (ranking swap, status refresh, or a new
face-to-face log entry) and which hypothesis IDs were touched. This does not
assert a new falsifiable claim of its own unless the logged conversation itself
provides new evidence for one of the three hypotheses — in that case, also add a
**New (date)** entry to that hypothesis's own Status: line per Step 3.

If the ranking changed, also update the "ranked #N of 3" cross-reference notes
inside the old and new top-3 hypotheses' own Status: lines (remove/add the
one-line pointer to `top-3-priority-hypotheses.html`).

## Step 6 — Follow the Mandatory Workflow Mandates

Per `CLAUDE.md`: restart the local server, open
`5_Symbols/cd/top-3-priority-hypotheses.html` (and any other changed pages) in
Google Chrome, open the GitHub commits page for the page, re-run
`business-model-sanity-check` if any hypothesis Status tier actually changed
(not required for a log-only or ranking-only update where no tier moved), and
print clickable links at the end of the response.
