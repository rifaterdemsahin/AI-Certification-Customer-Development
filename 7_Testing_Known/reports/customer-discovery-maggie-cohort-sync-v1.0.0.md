# Customer Discovery Report: Maggie (Delivery Pilots cohort sync) — Hybrid agent swarms, the security gate, and a fulfilment-capped build

**Date:** 2026-10-04  
**Repo:** [AI-Certification-Customer-Development](https://github.com/rifaterdemsahin/AI-Certification-Customer-Development)  
**Ingest commit:** _pending - backfilled by the follow-up `chore(docs)` commit_  
**Version:** 1.0.0
**Source Evidence:** [`3_Simulation/Interviews/interview_maggie_2026-10-04_cohort_sync_agent_harness.md`](../../3_Simulation/Interviews/interview_maggie_2026-10-04_cohort_sync_agent_harness.md)  
**Gateway / capture channel:** [Discord cohort-sync channel](https://discord.com/channels/1554076905605566546/1556341118285779097)  
**Participants:** **Maggie** (first name only) — Delivery Pilots community member and business adviser, in session with Rifat Erdem Sahin (Founder)  
**Related Hypotheses:** H30 (agent orchestration + harness + security layer), H24 (trust/risk + cost + non-core workload), H29 (capped session as delivery), H1 (new-role framing, no credential intent), H34 (collaborative video production — first inbound request), H17 (business-goal-scoped execution); H12 as a segment note; H35/H3/H2/H10/H32 deliberately not annotated

---

## Executive Summary

A **cohort sync call** with **Maggie**, an existing Delivery Pilots member, produced the archive's **first transcript-grade capture**: she reported re-architecting her agent stack away from single-purpose bots into **one growth orchestrator plus four bots carrying ~three roles each**, on explicitly organisational-design reasoning; she set **cost and fulfilment as schedule** (Tue/Fri, 7 a.m.–7 p.m.) rather than as a spend ceiling; she asked "**is it safe, though?**" and "what if someone gets into Azure?" before granting an agent the credentials the founder was describing; she ruled out further tooling ("**No more tools. Not yet.**"); and she asked to be let into the community's **video production** collaboration to automate social video from posts she has already written. The founder's briefing material (J-curve, harness, Domain-Driven Design, Apify, Meta's glasses/Muse/Dots, Mechanical Turk, enterprise vaults) supplies the session's method and most of its airtime.

1. **The architecture signal has flipped direction.** The participant adopted the *hybrid, multi-role, fulfilment-scoped* swarm — the topology the founder's own deck calls "controlled scheduling" — and rejected the single-task bot farm. A working operator choosing her own shape is a stronger product signal than agreement with a demo.
2. **The containment gate repeated, unprompted, in a second consecutive session.** After "I." (2026-09-27) named credential/GitHub/device access as the pre-adoption blocker, Maggie asked the same question in her own words mid-build. The repo still ships no scoped-credential spec, sandbox, rate-limit policy or audit-trail artefact. Two participants, two sessions, one missing document.
3. **What this is not.** No price, no tier, no budget, no payment, no enrolment, no volume commitment, and no artefact produced by the participant. She is an **existing member** who has already adopted the framing — insider corroboration, not market demand. Founder-side statements (100+ containers, ~£50k of historical subcontractor spend versus ~£20–30/month now, the LinkedIn volume that "I do not want to turn off") are recorded as the founder's own context and are **not** counted as customer evidence.

**Impact:** corroborates H30, H24, H29 at the directional level; adds weak-directional bullets to H1, H34 and H17; H12 as a report-level segment note. No hypothesis status emoji changed, so **no score movement is claimed**: Hypothesis Validation holds 35.1 / 100, Site Integrity holds 80.0 / 100, overall holds **49 / 100** (`business-model-confidence-v1.9.116.md`).

---

## Finding 1 — The participant independently chose the hybrid swarm over the bot farm (H30)

- **Evidence (first-hand, transcript-grade):** "instead of giving each bot one role... we don't necessarily say this task has to be assigned to this person. And that's it. We look at a general sense of what their skills and abilities are. And then we allocate certain tasks that will then form the role" — producing **one growth orchestrator + four bots × ~3 roles**, down from an assigned 10–12.
- **Mechanism:** she derived the agent topology from how **org charts are actually drawn**, not from a model-capability argument. That is a generalisable reasoning route for cohort members, and it is the opposite of the "100 C-level bots" mental model she had been offered.
- **Continuity:** extends the 2026-09-24 private 1-1 (member taken through Grokbot orchestration) from *demonstration* to *independent design decision*; contrasts with the Amazon FBA operator (2026-09-21), whose scripts were single-purpose.

## Finding 2 — Cost is being converted into a fulfilment cap, not a spend cap (H30 + H24)

- **Evidence:** "I looked at realistically what the business can handle at the moment and until we are about to scale"; scheduled windows (Tue/Fri, 7 a.m.–7 p.m.); "if it goes up, it goes up. My expectation is that it's going to yield results anyway. And part of the result is what you're going to put back into payment for the usage."
- **Mechanism:** the binding constraint is **human delivery capacity**, so the agent cadence is throttled to what she can service. Spend is a *consequence* of results, not the decision variable.
- **Continuity:** every prior cost signal in the archive was a ceiling question ("what will each run cost?"). This is the first *throughput* framing — and the founder's own week makes the same point from the other side (three assessments he could not take because he is employed).

## Finding 3 — The security question came from the participant, before the credentials (H24 + H30)

- **Evidence:** "Is it safe, though?" → "What if someone gets into Azure?" — raised while the founder described 1,000+ vaulted passwords and agent access to LinkedIn; plus her own GDPR framing on buying data.
- **Mechanism:** the trust boundary is now the **last gate before an operator hands over access to a system she is already building**, not a philosophical objection. It is an implementation-stage question, and it is answered in this session only with prescriptions (MFA delegation, IP restriction, enterprise vault, 8 messages/day cap, max-iteration bounds).
- **Continuity:** second consecutive session, different participant, same gate — after determinism (Amazon FBA) and non-deterministic communication (Baran G), this is the third distinct practitioner constraint in two months.

## Finding 4 — Video production received its first inbound member request (H34)

- **Evidence:** "I want to be able to just automatically create videos from those texts as well"; "instead of me doing the videos and trying to edit them and putting them out"; a direct request for tool recommendations; and acceptance of the invitation into the community's video-production section, with scope capped.
- **Mechanism:** the ask is narrow and operational — **text post → video**, plus thumbnail A/B — not a request for a course. That is a co-production task an existing member can actually contribute to.
- **Continuity:** H34's page frames the hub as members co-building; until now the pull for it was the founder's, not a member's.

## Finding 5 — Founder-side material in this session, correctly attributed (not customer evidence)

- **Handling:** the J-curve framing, harness architecture, Domain-Driven Design (domain/topic/role), Apify + Trustpilot as data channels, Meta's Ray-Ban/Muse/Dots reading, Mechanical Turk/MFA delegation, the 100+ containers, the ~£50k subcontractor history and the £20–30/month replacement cost, and the video/thumbnail A/B method are all **the founder's**. They are recorded as method and internal urgency, deliberately **not** counted as participant statements or willingness to pay. The pricing signal this ingest adds is **zero**.

---

## Evidence Quality & Attribution Caveat

- **First-hand, transcript-grade** — the archive's strongest capture to date: an auto-transcribed recording (with `(...)` gap markers) of a cohort sync call, plus two founder-authored artefacts (3-page executive summary, 10-slide briefing deck).
- Absent: cleaned/signed transcript, last name, employer, price, payment, volume commitment, agreed deliverable, and any artefact produced by the participant. Her swarm was **described, not shown**.
- The participant is an **existing member** of the community: insider selection bias applies, and her corroboration is qualitatively weaker than a stranger's.
- Therefore: **directional qualitative input** for anything commercial, **named field evidence** for the qualitative findings. Ingested because the content is specific and falsifiable (topology, schedule, rate cap, unprompted objection, media-automation request).

## Hypothesis Impact

| Hypothesis | Movement | Note |
|---|---|---|
| H30 — Delivery Pilot roadmap / harness | Corroborated (medium-directional) | Participant-owned hybrid swarm + scheduled windows + named security layer |
| H24 — Trust/risk, cost, non-core workload | Corroborated (medium-directional) | Unprompted containment question mid-build; fulfilment-capacity framing |
| H29 — Capped session as delivery mechanism | Corroborated (medium-directional) | Participant set the closing agenda and asked into the video hub |
| H1 — Rising skills expectations | Corroborated (weak-directional) | New-role taxonomy endorsed; no credential or exam intent stated |
| H34 — Collaborative video production | Corroborated (weak-directional) | First inbound member request to join the co-building hub |
| H17 — Practical, hands-on, goal-scoped | Corroborated (weak-directional) | "minimum in order to achieve the business goal"; "No more tools. Not yet." |
| H12 — B2B/government channel | Segment note only | Adviser to organisations; founder's data-residency constraint restated. No card bullet |

**No status emoji changed. Hypothesis Validation holds 35.1 / 100. Site Integrity holds 80.0 / 100. Overall holds 49 / 100.**

## What This Changes

1. **The objection is now a twice-repeated, documented gate, and it is shippable as one page.** A scoped-credential / rate-limit / human-approval / audit-trail spec answers both "I." and Maggie. This run adds it to the next-probe list as the single highest-leverage artefact.
2. **Lead the offer with the fulfilment-scoped hybrid topology, not the bot count.** The participant's own reasoning and the deck's closing line ("Build What Can Be Fulfilled") agree; the archive's strongest participant voice this run argued *against* capability-maximal selling.
3. **Nothing else changes yet.** No status tier moved, no pricing evidence was added, and the print sheet was therefore left untouched (AGENTS.md §4b trigger not met).

## Next Probes

1. **Send the containment spec** to "I." and Maggie and ask one closing question: *what would you need to see before an agent may hold a credential you own?*
2. **Ask Maggie for the artefact and the number:** a screenshot/repo of the 1-orchestrator + 4-bot topology, its first-month cost, and how many qualified conversations it produced.
3. **Ask the fulfilment question back to her in her own words:** how many qualified responses per week can you service, and what would a paid tier have to include to be worth it? (This is the first probe shape the evidence itself suggests.)

## Files Touched

- `3_Simulation/Interviews/interview_maggie_2026-10-04_cohort_sync_agent_harness.md` (new)
- `7_Testing_Known/reports/customer-discovery-maggie-cohort-sync-v1.0.0.md` (this file, new)
- `5_Symbols/cd/maggie-cohort-sync-agent-harness-feedback.html` (new analysis page)
- `5_Symbols/cd/archived-interview-transcripts.html` (index entry added at head of "Latest updates" + the page's own `Latest Change:` footer retexted)
- `4_Formula/HYPOTHESIS.md` (evidence lines on H30, H24, H29, H1, H34, H17; version 1.356.0 → 1.357.0)
- `7_Testing_Known/reports/business-model-confidence-v1.9.117.md` (new)
- `5_Symbols/dashboard/confidence-report.html` (latest-version pointer updated to v1.9.117)
- **Deliberately left untouched:** `5_Symbols/dashboard/hypotheses-print.html` (no hypothesis added, reworded, or status-emoji changed — AGENTS.md §4b trigger not met) and `5_Symbols/toolbox/nav.js` (cd/ detail pages are reached from the archive index and Search, per the page template's own instruction).
- **Not committed:** the raw transcript, the executive summary and the briefing deck — a verbatim personal conversation stays out of the public repo; provenance is by filename in the interview record.
