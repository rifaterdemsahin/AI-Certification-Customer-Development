# Customer Discovery Evidence: "M" (Private 1-1 Session) — Grokbot Agent Orchestration, Admin Delegation and Token-Cost Discipline

- **Date Logged:** Sep 24, 2026
- **Interviewee / Stakeholder:** **"M"** — logged by **first-name initial only**, per founder instruction on logging (2026-09-24). She is a **Delivery Pilots community member** who attended a private 1-1 setup session. No last name, no employer, no role title, no company and no team size are recorded — omitted by design, not by oversight.
- **Facilitator / Reported by:** Rifat Erdem Sahin (Founder) — the founder ran the session; the record below is the **founder-supplied session executive summary**, not a verbatim transcript and not a recording.
- **Channel / Location:** Private 1-1 remote session (Grokbot environment walkthrough), 2026-09-24
- **Ingest commit:** _pending — backfilled by the follow-up `chore(docs)` commit_
- **Related Hypotheses:** H30 (agent orchestration, data layer, human-in-the-loop), H1 (R.A.I.S.E. — Rapid AI Increases Skills Expectations), H24 (non-core workload driver), H29 (the capped 1-1 as the founder lab) — H35, H17, H12 and H34 **deliberately not annotated** (see §5)

---

## 1. Context

- The session was a **private 1-1 walkthrough**: the founder took one community member through setting up and orchestrating autonomous AI agents in **Grokbot**, a cloud environment, to run administrative work, prospecting and outreach **asynchronously**.
- The framing the founder taught was the **ANI → AGI move**: narrow AI does single-turn text/image generation, whereas agentic setups are about *persistent, adaptive, continuous* work that runs without a human watching every step.
- The session's own stated pressure is the **"R.A.I.S.E." challenge — Rapid AI Increases Skills Expectations**: capability growth so fast that it "significantly increases cognitive and operational load" for the person who has to keep up.
- The session is therefore two things at once, and they must not be confused: (a) a **delivery event** — a live VIP-style 1-1 advisory session executed on 2026-09-24 — and (b) a **small set of participant statements** about her own workload, cost and data foundations. This record separates them and grades them accordingly (§4, §7).
- **Placeholder names.** The source notes carried placeholder first names for both the founder and the participant. Per the founder's instruction they are **not** carried into this record: the participant is **"M"**, the founder is named normally.

---

## 2. The Feedback (as reported)

### Finding A — The workload being delegated is administrative, not core
- The work routed to agents in this session is described as **deterministic vs non-deterministic**: direct API calls and standard programming routines are deterministic, cheap and predictable; **unstructured multi-step communications** — LinkedIn messaging, job applications, back-and-forth guest booking on Airbnb, email correspondence — are non-deterministic.
- Read plainly: the participant's delegation target is **judgement-heavy, repetitive, non-core communication and administration** — the same shape of work logged against the Amazon FBA operator (tabular/operational) and Baran G (marketplace messaging) in the September archive.
- New in this record: the participant is a **community member being onboarded onto the same stack**, not a stranger describing a pain. The work she is delegating is her own operating admin.

### Finding B — R.A.I.S.E. is named inside the session, and the load is the reason for delegating
- The session explicitly frames the driver as **R.A.I.S.E.** — the pace of capability growth creating pressure to constantly upskill, **increasing the operator's cognitive and operational load**.
- This is the first time in the archive that a **participant-facing session** names R.A.I.S.E. as the live pressure being answered by delegation, rather than as the founder's own origin story for H1.
- It is an *operator-load* statement, not a certification statement: nothing in the session is about exams, credentials, employers screening on badges, or exam preparation.

### Finding C — Token cost is a live, participant-visible constraint; local execution is the named alternative
- The participant was explicitly cautioned about **token spend**: continuous, non-deterministic agent runs "incur substantial token costs", and the cost discipline is part of the curriculum of the session, not an afterthought.
- **Hermes was introduced as the future alternative** — moving agents to **local / more deterministic execution to optimise budget** — and a **follow-up session on Hermes is requested** to explore shifting cloud agent workloads locally.
- Read plainly: for this participant the buying question is not only "can the agent do it" but "**what does each run cost**". Cost-per-run is now part of the pitch, and the participant drove the follow-up agenda on it.

### Finding D — The data foundation: a master sheet outside the platform
- The taught architecture puts a **centralised database (e.g. Google Sheets) as the system's "second brain"**, holding user/lead data **outside third-party platforms** so the record survives losing platform access.
- Her action item is to **build a primary lead tracking master sheet** for agent data sync — i.e. she accepted the data-sovereignty rule and made it her next task.
- This mirrors the Amazon FBA operator's independent request for a governing "main brain" and relational memory — **two unconnected practitioners, the same architecture answer**: the durable store has to be ours, not the vendor's.

### Finding E — Guardrails taught: human-in-the-loop, rate limiting, quality-vs-cost
- **Human-in-the-loop:** blue status indicators in Grokbot signal an agent needing human review or more training data before continuing.
- **Rate-limiting / anti-spam:** bulk outgoing actions must be throttled (e.g. forcing a ~20-minute gap between email dispatches); the engagement agent runs only **07:00–19:00 with 20–25 minute gaps** to look human and protect domain reputation.
- **Quality vs. cost:** dedicated "testing"/quality-control agents double context and token consumption — so the *cheaper* early-stage pattern is strict constraints in the initial prompts plus manual review of output flags.
- Read plainly: the taught pattern is **bounded autonomy with an approval boundary**, consistent with the Chidi role-constraint thread and the Baran G "draft by agent, send by human" finding. Nothing here is unattended mass sending.

### Finding F — The six agents demonstrated are the founder's operations, not customer evidence
- The session demonstrated an **NDA agent** (scans Titan/email accounts for NDA requests, cross-references a member sheet, returns a signed NDA once per member), a **prospecting agent** (inbound contracting leads across Gmail/Titan, >200 email threads reviewed), an **outreach agent** (speaking/event/soft-sales pitches across London, Reading, Cambridge, Oxford with 2-day pacing and weekly reporting), an **engagement agent**, an **onboarding agent** (leaderboard-triggered follow-ups), and a **chief-of-staff agent** that bulk-creates lower-level agents from spec templates.
- **This is internal build evidence about the founder's own operation.** It is logged because it is the teaching material and it names the architecture (spec templates, pacing rules, approval flags), but it is **not** a customer claim and must never be cited as one.

### Finding G — The 1-1 produced participant-owned homework plus a requested follow-up
- **Her action items:** finalise the Grokbot setup on her own environment; consolidate redundant accounts on the community platform; build the master lead-tracking sheet.
- **Founder action items:** send the complete call transcript and reference links; share the Grokbot spec templates (Chief of Staff and Job Application specs).
- **Requested follow-up:** a Hermes walkthrough on shifting cloud agent workloads to local execution to cut token expenditure.
- Read plainly: the session **ran**, produced deliverables owned on both sides, and generated the next session's agenda from the participant — which is the mechanism H29 describes.

---

## 3. Translated Highlights (paraphrased from the session summary)

> "Non-deterministic tasks: unstructured multi-step communications — LinkedIn messaging, job applications, back-and-forth guest booking on Airbnb, email correspondence."

> "The R.A.I.S.E. challenge — Rapid AI Increases Skills Expectations. The fast pace of capability growth creates pressure to constantly upskill, significantly increasing cognitive and operational load."

> "Continuous, non-deterministic agent runs incur substantial token costs… Hermes [is introduced] as a future alternative for moving agents to local/deterministic setups to optimise budget."

> "Always maintain master prospect lists and interaction records in an independent Google Sheet to avoid platform lock-in or loss of leads."

> "Operates strictly between 7:00 AM and 7:00 PM with 20- to 25-minute gaps between messages to maintain human-like activity and protect domain reputation."

**Translation / capture caveat:** these are lines from a **founder-authored executive summary of the session**, not a verbatim transcript and not a recording, and the participant is logged by initial only. **Do not quote any of this as her exact words**, and do not treat the summary's structure (its bullet lists, its agent catalogue) as if she had dictated it.

---

## 4. Mapping to the Product

1. **The 1-1 deliverable is in production and it works as a deliverable.** A private 1-1 session was executed, produced three participant-owned action items and two founder-owned hand-offs, and generated a requested follow-up on a named tool. That is the VIP on-demand 1-1 advisory format (and its NDA coverage) operating as written in the project's own business facts — a **delivery observation**, not a customer claim.
2. **Cost-per-run has become part of the offer's language.** The participant's follow-up request is about *spending less per run* (Hermes, local execution), not about more capability. Any agentic curriculum we publish should show the cost dimension explicitly; a session that teaches orchestration without token discipline is incomplete.
3. **The data-foundation rule now has two independent confirmations.** Google Sheets as the independent master store (this session) and the governing "main brain" + relational memory question (Amazon FBA operator, 2026-09-21) are the same answer reached by two unconnected practitioners. That belongs in the Delivery Pilot stack documentation as a settled architecture rule, not an option.
4. **The B2B/agency pattern is visible but not claimed.** The demonstrated NDA / prospecting / outreach agents are an agency-of-one operating model. No employer, no corporate buyer and no budget was discussed, so nothing here supports the B2B channel hypotheses (§5).
5. **What it does not say.** No certification intent, no exam, no employer credentialing, no price, no payment, no paid tier, no volume figures, no portfolio/repo/badge statement. **Zero pricing evidence** was captured — again.

---

## 5. Hypothesis Mapping

| Hypothesis | Direction | Strength |
|---|---|---|
| H30 — Delivery Pilot roadmap / agentic capability | Corroborates: agent orchestration, a durable data layer, an explicit human-in-the-loop boundary and cost disclosure are the taught stack a community member is adopting | Medium |
| H1 — Rising AI skills expectations | Corroborates: R.A.I.S.E. is named **inside the session** as the live pressure — capability growth raising the operator's cognitive and operational load | Medium-directional |
| H24 — Non-core workload driver | Corroborates: delegation target is repetitive, judgement-heavy, non-core communication and admin — the same driver as the Baran G and Amazon FBA records, in a third domain (her own operating admin) | Weak-directional (load frame, **not** a certification-interest statement) |
| H29 — Founder-as-listener / audience cocreation | Corroborates: a capped 1-1 produced participant-owned action items and the participant set the **next** session's agenda (Hermes / local execution) | Medium-directional |

**No status tier changed.** No price, no payment, no employer, no budget, no verbatim quote, no independent artefact, and the participant is anonymised to an initial.

**Deliberate non-annotations, recorded as such:**
- **H35 (repo-count badge ladder)** — no statement about repositories, portfolios, badges or third-party-verifiable proof-of-work. Mapping "agentic capability" onto the ladder would be inference.
- **H17 / H12 (corporate & B2B channels)** — the NDA/prospecting/outreach agents are the *founder's* operations, demonstrated to an individual. No firm, employer or budget was in the room.
- **H34 (collaborative video production)** — no Canva review, no course cut, no co-production contribution in this session.
- **H9 / H5 / H3 (revenue, sell-out, willingness to pay)** — zero pricing evidence; a 1-1 session is not a paid enrollment.

---

## 6. What Would Turn This Into Stronger Evidence

1. **Her own words and counts:** how many hours per week the admin/prospecting work consumes today, and what she would pay (or has paid) to remove it.
2. **What she actually built:** whether the Grokbot setup, the account consolidation and the master lead sheet completed, with a screenshot or a link as an artefact.
3. **Token spend, measured:** monthly agent spend before and after the local-execution shift — the first hard number behind the cost-discipline claim.
4. **Whether the 1-1 converts:** does a private 1-1 session convert to a paid VIP tier, and at what price? Sessions are delivery today; only a payment makes this revenue evidence.
5. **Segment:** her sector and whether an employer funds any of it (this is what would start to speak to H17/H12 rather than the founder's own operation).

## 7. Attribution & Evidence-Quality Note

- **First-hand but unrecorded, and anonymised by instruction.** The founder ran the session; there is no transcript, no recording, no verbatim quote, no name, no company, no price and no independent artefact. The participant is logged as **"M"** by explicit founder instruction.
- A substantial part of the source document describes the **founder's own agent operation** (NDA, prospecting, outreach, engagement, onboarding, chief-of-staff agents) and the founder's own guidance (rate limits, pacing, approval flags). That material is recorded here as **method and architecture**, not as customer evidence, and it should not be counted toward any hypothesis.
- Therefore: **directional qualitative input.** It is ingested because the capability set is specific and falsifiable, because the cost-discipline and data-foundation rules recur across independent practitioners, and because it is the first record in the archive of a **community member being onboarded onto the founder's agent stack in a private 1-1**.
