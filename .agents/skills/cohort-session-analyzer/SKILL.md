---
name: cohort-session-analyzer
description: >-
  Analyzes live AI cohort session recordings, PDFs, transcripts, and summaries.
  Extracts qualitative customer discovery insights, technical architectural patterns
  (Second Brain, HFT, Serverless, Graph/Vector DBs), participant friction points,
  and updates business model hypotheses, customer interview records, and confidence reports.
---

# 🎙️ AI Cohort Session Analyzer Skill

This skill provides an automated and structured methodology for analyzing AI cohort session assets (transcripts, architectural reference summaries, and simulation logs) located in `3_Simulation/Cohorts/` or incoming customer recordings.

## 🎯 Purpose & Scope

When cohort sessions (e.g. Session 8 and subsequent live sessions) are uploaded as PDFs, audio transcripts, or chat logs, this skill guides the agent to:
1. **Extract Core Conversation Data**: Parse speakers, timestamps, topics, sentiment, and verbatim customer quotes.
2. **Classify Architectural & Technical Solutions**:
   - Multi-tiered Second Brain setups (PARA, Grep, Vector search via Qdrant, Graph relationships via Neo4j, OCR with Google Drive).
   - Autonomous trading / background agent workflows (Hermes, Telegram UIs, latency arbitrage, VPS hosting).
   - Serverless staging pipelines (Cloudflare Workers, Cloudflare Zero Trust, automated Obsidian ingestion).
   - Contractor & Enterprise workflows (invoices, receipts, tax logs, tender alliances).
3. **Map to Steve Blank Customer Development**:
   - Customer Discovery / Problem validation (friction in manual tagging, context window limits, lack of vetted talent).
   - Product-Market Fit signals (Lecture &rarr; Party transition, member-led demos, spontaneous delight, peer collaboration).
   - Channel & In-Person validation (Venture Café Cambridge & London meetups).
4. **Synchronize Repository Knowledge**:
   - Update `HYPOTHESIS.md` with cross-linked citations (H5, H8, H20, H26, H29, H30).
   - Update Interview Trackers (`5_Symbols/cd/cd-interview-recording.html`, `5_Symbols/cd/archived-interview-transcripts.html`).
   - Create versioned Markdown deep-dive reports under `reports/`.
   - Update `nav.js` and generate interactive HTML walkthroughs under `5_Symbols/cd/`.

---

## 🛠️ Step-by-Step Execution Workflow

### Step 1: Ingestion & Text Extraction
Run the parsing helper script to extract raw text from summary and transcript PDFs:
```bash
python3 .agents/skills/cohort-session-analyzer/scripts/parse_cohort_transcript.py --summary 3_Simulation/Cohorts/session8_AI_Cohort_Summary_and_References.pdf --transcript 3_Simulation/Cohorts/session8_AI_Cohort_Transcript.pdf
```

### Step 2: Customer Signal & Persona Extraction
Analyze individual participant contributions:
- **Participant Persona**: Goal, background, technical capability, pain points.
- **Friction Points Identified**: Where are they stuck? (e.g. manual folder sorting, context window limits, VPS networking, API rate limits).
- **Aha Moments & Demos**: What did they build or show? (e.g. Cloudflare staging app, Polymarket latency bot, Longevity PDF pipeline).
- **Founder Facilitation Dynamic**: Evaluate the "Lecture &rarr; Party" shift and verify that founder listened more than spoke (H29).

### Step 3: Architecture & Technology Synthesis
Document the multi-layer stack discussed in the session:
| Layer | Tool / Technology | Role in Stack | Token / Latency Impact |
| :--- | :--- | :--- | :--- |
| **Orchestration** | LangChain / LangGraph | Frontal cortex routing & tool execution | Minimal prompt overhead |
| **Autonomous Agent** | Hermes / Telegram | 24/7 background executor | Zero UI complexity |
| **Knowledge Vault** | Obsidian (PARA) | Local markdown notes & staging | Offline-first, fast |
| **Graph Database** | Neo4j (Fly.io) | Maps 200,000+ entity relationships | Sub-graph retrieval |
| **Vector Database** | Qdrant (Fly.io) | Semantic embeddings similarity search | High relevance filtering |
| **Relational DB** | EDB Postgres | Relational data & transactional integrity | Structured querying |
| **Document Storage** | Google Drive (5TB) | Large-scale OCR & image search | Full-text query |
| **Data Sync** | Rclone (PAP Pipeline) | Pull-Push-Archive sync | Proxmox to Cloud sync |
| **Edge / Security** | Cloudflare Workers & Zero Trust | Serverless hosting & access gateway | Zero cold start |

### Step 4: Hypotheses & Artifact Synchronization
1. **Generate Versioned Report**: Write `reports/cohort-session-[N]-analysis-v1.0.0.md`.
2. **Build / Update HTML Page**: Create `5_Symbols/cd/cohort-session-[N]-analysis.html` with standard glassmorphism styling, cards, and footer GitHub history link.
3. **Update Discovery Records**: Append attendee cards in `5_Symbols/cd/archived-interview-transcripts.html` and `5_Symbols/cd/cd-interview-recording.html`.
4. **Update `HYPOTHESIS.md`**: Bump version and link evidence to relevant hypothesis IDs.
5. **Re-run Business Model Confidence**: Produce the next `reports/business-model-confidence-vX.Y.Z.md` and update `5_Symbols/dashboard/confidence-report.html`.

---

## 📂 Associated Scripts & References

- [parse_cohort_transcript.py](./scripts/parse_cohort_transcript.py): Python utility using `pypdf` to extract and structure transcripts.
- [extract_customer_signals.py](./scripts/extract_customer_signals.py): Automated keyword and persona signal extractor.
