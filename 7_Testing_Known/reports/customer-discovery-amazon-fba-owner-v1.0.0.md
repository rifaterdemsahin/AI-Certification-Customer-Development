# Customer Discovery Report: Amazon FBA Business Owner — Trust, Determinism, and the Agent Operations Stack

**Date:** 2026-09-21  
**Repo:** [AI-Certification-Customer-Development](https://github.com/rifaterdemsahin/AI-Certification-Customer-Development)  
**Ingest commit:** [`bfd4ca7`](https://github.com/rifaterdemsahin/AI-Certification-Customer-Development/commit/bfd4ca7)  
**Version:** 1.0.0
**Source Interview:** [`3_Simulation/Interviews/interview_amazon_fba_owner_2026-09-21.md`](../../3_Simulation/Interviews/interview_amazon_fba_owner_2026-09-21.md)
**Location:** Remote 1-1 customer discovery conversation (translated from Turkish)
**Participants:** Rifat Erdem Sahin (Founder); Amazon FBA business owner (unnamed in the session record)
**Related Hypotheses:** H24 (Emotional Pain Drivers), H30 (Delivery Pilot / contractor proof-of-work), H35 (repo-count badge ladder), H1 (AI skills demand), H12 (channel read)

---

## Executive Summary

A Turkish-speaking Amazon FBA operator, who runs his store substantially on scripts and interfaces he wrote himself, was taken through a structured discovery conversation on 2026-09-21. Three findings matter commercially:

1. **Determinism is the adoption gate, not excitement.** He describes conventional software as faultless and fast; he describes AI as non-deterministic — "one day a great result, the next day absurd questions or wrong output". He therefore refuses to hand critical store processes to AI and keeps core logic in stable code, using AI only in bounded areas. The buyer's problem is *trust and reliability*, not curiosity.
2. **He is stuck on an architecture decision we can answer.** Should the business be built as separate modules/boxes, or as one main "brain" governing everything? He also wants the system to learn his working style instead of re-explaining context every time. That is an orchestration + persistent-context problem, not a content problem.
3. **He has independently described our own stack as his ideal.** Autonomous agents (not raw LLMs) controlled over Telegram, running on a converted always-on laptop/server, with relational memory (PostgreSQL/Supabase) as the operational ledger, and a job spec of "check Amazon metrics every 4 hours, review ad profitability, reply to messages" from one interface instead of app menus.

**Impact on the model:** this corroborates H24 and H30 at the *directional* level and is silent-to-weak on H1's willingness-to-pay (no price, budget, or commitment was captured). No hypothesis status tier changed. Overall business-model confidence therefore holds at **49 / 100** — see `business-model-confidence-v1.9.113.md`.

---

## Finding 1 — Determinism Gates Adoption (H24)

- **Evidence:** "Classical code is deterministic; whatever task you give it, it does the exact same thing every time. AI behaves non-deterministically… I cannot hand over the critical processes of my Amazon store to AI with my eyes closed."
- **Mechanism:** a revenue-critical, multi-channel operation (FBA store) cannot absorb variance. AI is admitted only where a wrong output is cheap to catch.
- **Implication for the offer:** "learn AI" is the wrong frame for this buyer. "Keep your core deterministic, and put AI in bounded, governed zones" is the offer — and it is teachable content we already own (agent guardrails, role constraints, sandboxing before release, the Lean CTO / Strict CFO discipline).
- **Counter-evidence to respect:** nothing here says the buyer will pay. Determinism concern is a *filter*, not a purchase order.

## Finding 2 — Modular Boxes vs One Main Brain (H30)

- **Evidence:** "Should I build every job as separate modules/boxes, or set up one main brain software that governs everything? I want my systems to learn my working style and do the work without me constantly re-explaining the same context."
- **Implication:** this is a curriculum-shaped question with a defensible answer (thin deterministic core + bounded agent zones + a single control plane + durable memory). It is also the sharpest discovery question to re-use in future interviews — if the same indecision recurs, it becomes a named module rather than an FAQ.

## Finding 3 — Relational Memory as the Operational Ledger (H30 / H35)

- **Evidence:** moving from spreadsheets to PostgreSQL/Supabase "to give the system permanent memory", so that before acting "it will look at the database, understand what was done in the past, and take the new step accordingly".
- **Implication:** "memory" to an operator means an auditable ledger of actions, not a chat transcript. Any agent content we publish should lead with the ledger/state store, because that is what makes the automation trustworthy to this buyer segment.

## Finding 4 — Always-On Local Server + Telegram as the Control Plane (H30 / H12)

- **Evidence:** agents controlled over Telegram, installed on a computer or laptop converted into an always-on server, assignable jobs such as "check Amazon metrics every 4 hours, review ad profitability, answer incoming messages", replacing time spent "in the menus of different applications".
- **Implication:** the tooling thesis we run on (agents above LLMs, local always-on box, chat-app control surface, scheduled jobs) is being independently reached by operators. Our differentiation is not access to the tools — it is assembly discipline and proof that the thing actually runs unattended.
- **Segment note (H12):** this is an SMB / sole-operator buyer, adjacent to but distinct from the enterprise channel story (Deloitte Director line). It is logged as a segment signal only.

## Evidence Quality & Attribution Caveat

- The session was logged in Turkish and translated. The participant is unnamed — no name, company, or store link.
- No price was quoted or accepted, no named commitment was made, and no externally checkable artefact was produced.
- Therefore: **directional input, not validated field evidence.** It is ingested because the architectural content is specific and falsifiable, and it should not be cited as a named reference until attribution is confirmed.

## Hypothesis Impact

| Hypothesis | Movement | Note |
|---|---|---|
| H24 — Emotional Pain Drivers | Corroborated (Medium) | Trust/reliability anxiety is the emotional gate |
| H30 — Delivery Pilot / proof-of-work | Corroborated (Medium-strong) | Buyer asks for exactly the deployment/orchestration skills the Pilot teaches |
| H35 — Repo ladder / ship-to-prove | Directional | Proves value by shipping his own tooling, not certificates |
| H1 — AI skills demand | Weak-directional | Pain present; willingness to pay unevidenced |
| H12 — Channel | Segment signal | SMB/sole-operator, adjacent to enterprise |

**No status emoji changed. Hypothesis Validation holds 35.1 / 100. Site Integrity holds 80.0 / 100. Overall holds 49 / 100.**

## What This Changes

1. Reframe the operator-facing pitch around **deterministic core + bounded AI**, not generic AI enthusiasm.
2. Audit whether the curriculum explicitly teaches **relational memory as an operational ledger** (Postgres/Supabase) and one **always-on control plane** — the operator asked for both unprompted.
3. Add the module-vs-brain indecision question to the standard discovery interview guide as a repeated probe.

## Next Probes

1. Confirm attribution of this session (real named operator, or scripted persona for content).
2. Ask for the **first 4-hourly job** he would hand over — that single answer prices the offer.
3. Ask him to price the guardrail design separately from the certification badge.
4. Re-run the module-vs-brain question across the existing engaged pool (Sude, Maggie, Bora, Marianna) to see if it is a universal operator blocker.

## Files Touched

- `3_Simulation/Interviews/interview_amazon_fba_owner_2026-09-21.md` (new)
- `7_Testing_Known/reports/customer-discovery-amazon-fba-owner-v1.0.0.md` (this file, new)
- `5_Symbols/cd/amazon-fba-owner-agent-architecture-feedback.html` (new analysis page)
- `5_Symbols/cd/archived-interview-transcripts.html` (index entry, updated)
- `4_Formula/HYPOTHESIS.md` (evidence lines on H24/H30/H35, version 1.353.0)
- `7_Testing_Known/reports/business-model-confidence-v1.9.113.md` (new)
