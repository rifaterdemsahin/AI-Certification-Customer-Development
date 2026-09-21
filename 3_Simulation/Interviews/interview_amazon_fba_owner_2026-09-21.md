# Customer Discovery Interview: Amazon FBA Business Owner — Deterministic Core vs Non-Deterministic AI, Persistent Memory, and Always-On Local Agent Operations

- **Date Logged:** Sep 21, 2026
- **Interviewee / Stakeholder:** Amazon FBA business owner (unnamed in the session record; Turkish-language conversation, translated)
- **Attendees:** Rifat Erdem Sahin (Founder)
- **Channel / Location:** Remote 1-1 customer discovery conversation (translated from Turkish)
- **Related Hypotheses:** H24 (Emotional Pain Drivers), H30 (Delivery Pilot / contractor proof-of-work), H35 (repo-count badge ladder), H1 (AI skills demand), H12 (B2B/SMB channel read)

---

## 1. Context & Setting
- A Turkish-speaking Amazon FBA store owner, running his operation largely on scripts and panels he wrote for himself, was taken through a structured customer discovery conversation.
- The session was deliberately operator-first: how the business actually runs day to day, what breaks when AI is introduced, and what the ideal end-state would look like.
- The conversation is notable for arriving at the same architecture vocabulary the program teaches (deterministic core, AI in bounded zones, relational memory, always-on local server, Telegram as the control surface) — from an operator who has never been through our material.

---

## 2. Key Findings

### A. Determinism Is the Adoption Gate (H24)
- **Traditional software wins on predictability:** his own words are that conventional software is "incredibly fast" and completes routine jobs faultlessly in seconds, whereas adding AI has been "a somewhat painful process".
- **AI is rejected where it is non-deterministic:** "classical code is deterministic — whatever task you give it, it does exactly that every time. AI behaves non-deterministically. One day it gives a great result, the next day it asks absurd questions or produces wrong output."
- **The consequence is architectural, not emotional alone:** he will not hand the critical processes of his Amazon store to AI, so he keeps core logic in stable code and confines AI to specific, bounded areas.
- **Read:** the buying trigger is not "AI is exciting", it is "I need my unpredictable parts made predictable". That is a trust-and-reliability pain, not a curiosity gap.

### B. Architecture Indecision: Modular Boxes vs One Main Brain (H30)
- He has already built a dashboard and interfaces, and the open question he is stuck on is stated plainly: should everything be built as separate modules/boxes, or as one main "brain" software that governs all of it?
- He wants the system to **learn his working style** and operate without him having to re-explain the same context every session.
- **Read:** persistent-context and orchestration design is a live, unresolved problem for a real operator — the exact ground the Delivery Pilot's architecture content covers.

### C. Persistent Memory in a Relational Data Layer (H30 / H35)
- He is moving off simple spreadsheets/tables into relational databases — PostgreSQL or Supabase — explicitly "to give the system permanent memory".
- The expected behaviour: before an automation acts, it consults the database, understands what has been done historically, and takes the next step "without tiring me unnecessarily".
- **Read:** "memory" here is not chat history; it is an auditable operational ledger. This is the same durable-state requirement our agent track teaches.

### D. The Ideal Operating Model: Telegram-Managed Agents on an Always-On Local Machine (H30 / H12)
- Stated ideal: autonomous AI agents controlled over Telegram, installed on a computer or laptop that is converted into an always-on local server, so the whole operation can be managed remotely.
- Concrete job spec he wants to assign: "check Amazon metrics every 4 hours, review ad profitability, and answer incoming messages".
- He explicitly contrasts this with "wasting time in the menus of different applications" — he wants **one agent interface running everything in the background**.
- **Read:** the tooling stack he describes (agents over LLMs, relational memory, always-on box, chat-app control plane) is the stack we are already running on; his unmet need is guidance and proof of how to assemble it reliably.

---

## 3. Translated Highlights (founder-captured)

> "Honestly, I mostly rely on custom software and scripts I wrote for myself. Conventional software is incredibly fast; it finishes routine work faultlessly in seconds. Lately I have been trying to bring AI into my processes, but it is a somewhat painful process."

> "Predictability is the biggest problem. Classical code is deterministic; whatever task you give it, it does the exact same thing every time. AI behaves non-deterministically. One day it gives a great result, the next day it asks absurd questions or produces wrong output."

> "I cannot hand over the critical processes of my Amazon store to AI with my eyes closed, so I prefer to run the core logic with stable code and use AI only in specific areas."

> "The main architectural question on my mind is this: should I build every job as separate modules/boxes, or should I set up one main brain software that governs everything? I want my systems to learn my working style and do the work without me constantly re-explaining the same context."

> "Instead of keeping data in simple tables, I am moving to relational databases like PostgreSQL or Supabase. The goal is to give the system permanent memory. Before an automation acts it will look at the database, understand what was done in the past, and take the new step accordingly without tiring me unnecessarily."

> "My ideal is to use autonomous AI agents I can control through platforms like Telegram. Installing the agent on a local computer or server that is always on, so I can manage all my business remotely. I want to be able to command the agent to check Amazon metrics every 4 hours, review ad profitability, or reply to incoming messages. Instead of wasting time in the menus of different applications, one agent interface running everything in the background is the ideal solution for me."

---

## 4. Hypothesis Mapping

| Hypothesis | Direction | Strength |
|---|---|---|
| H24 — Emotional pain drivers | Corroborates: unpredictability/trust anxiety gates AI adoption in a revenue-critical operation | Medium |
| H30 — Delivery Pilot / contractor proof-of-work | Corroborates: operator is actively asking for agent orchestration + relational memory + always-on deployment skills | Medium-strong |
| H35 — Repo-count badge ladder / ship-to-prove | Directional: he already proves value by shipping his own scripts and panels, not by certificates | Directional |
| H1 — AI skills demand exists and is unmet | Directional: pain is felt, spend is not yet evidenced (no budget or price accepted in session) | Weak-directional |
| H12 — B2B/enterprise channel | New segment signal: this is an SMB/sole-operator buyer, adjacent to but not the same as the enterprise channel | Weak-directional |

**No status tier changed as a result of this session.** No paid conversion, no named third-party commitment, and no externally checkable artefact was produced.

---

## 5. Open Questions / Next Probes
1. Was this a real named operator or a scripted/simulated persona? The record carries no name, no company, no store link — **attribution must be confirmed before this is treated as field evidence.**
2. Would he pay for the guardrail design specifically (deterministic core + bounded AI + relational memory + always-on agent), or only for the certification badge?
3. Which stack would he adopt first — Supabase/Postgres memory, or a Telegram-managed agent runner? Asking for the *first 4-hourly job* he would hand over is the cleanest willingness-to-pay probe.
4. Does the "one main brain vs modular boxes" question recur across other operators? If yes it is a curriculum module, not a one-off FAQ.

---

## 6. Attribution Note
- The session was logged in Turkish and translated for this record. The participant is described only as "Amazon FBA business owner"; his name, company, and store were not captured.
- Consequently this interview should be treated as **directional qualitative input** until attribution is confirmed. It is ingested because the architectural content is specific and falsifiable, not because an identity is attached.
