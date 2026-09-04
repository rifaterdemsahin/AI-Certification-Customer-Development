#  Project Risks

> **Stage 1: Real Unknown** — Track active risks, solved risks, and the risk update log. Add new risks with every project update and mention those that are solved.

## Risk Matrix

| Severity | Symbol | Meaning |
|----------|--------|---------|
| Critical | 🔴 | Blocks delivery — must resolve immediately |
| High | 🟠 | Significantly impacts quality or timeline |
| Medium | 🟡 | Should be addressed in current milestone |
| Low | 🟢 | Monitor — address when convenient |

---

## ⚠️ Active Risks

### R-001: Race Conditions on Parallel Git Pushes
- **Status:** 🔴 Active
- **Severity:** Critical
- **Likelihood:** High (happens frequently with parallel commits)
- **Impact:** Push failures, potential commit ordering issues
- **Trigger:** Multiple `git push` commands executed in parallel (e.g., batch committing multiple files)
- **Mitigation:** Execute pushes sequentially; on failure, `git pull --rebase` then retry. Consider a push queue or single-commit-single-push workflow enforcement.
- **Last Updated:** 2026-07-11

### R-002: CDN Dependency — Frontend Degradation
- **Status:** 🟡 Active
- **Severity:** Medium
- **Likelihood:** Low (CDN uptime is high, but outages happen)
- **Impact:** If CDN goes down, FontAwesome icons, PrismJS highlighting, and Google Fonts break — the site becomes unstyled with missing icons.
- **Trigger:** CDN outage affecting `cdnjs.cloudflare.com` or `fonts.googleapis.com`
- **Mitigation:** Create local fallback copies of all CDN assets in `5_Symbols/assets/`. Add `<link>` fallbacks with `onerror` handlers. Track CDN status.
- **Last Updated:** 2026-07-11

### R-004: Azure Key Vault Unavailability
- **Status:** 🟡 Active
- **Severity:** Medium
- **Likelihood:** Low (Azure SLA is high, but network/auth issues can occur)
- **Impact:** Agents cannot retrieve `GITHUB_AGENT_TOKEN`, `AXIOM_TOKEN`, or other secrets — error-fix agent, deploy skill, and any authenticated operation fail.
- **Trigger:** Azure outage, expired credentials, network partition, missing `az login` session
- **Mitigation:** Implement token caching with a configurable TTL (e.g., 1 hour) so short outages don't block work. Use environment-specific vaults in sequence (dev → staging → prod fallback).
- **Last Updated:** 2026-07-11

### R-005: nomic-embed-text Model Upgrade Breaking Vector Search
- **Status:** 🟢 Active
- **Severity:** Low (only affects projects using Ollama/Qdrant Tier 2)
- **Likelihood:** Low (model changes are infrequent)
- **Impact:** If the `nomic-embed-text` model is updated with a different dimension or algorithm, all existing vector embeddings become invalid — semantic search breaks until re-indexed.
- **Trigger:** Running `ollama pull nomic-embed-text` which pulls a newer version
- **Mitigation:** Pin a specific model version. If upgrading, create a migration plan: export → upgrade → re-index → verify. Document in `2_Environment/dependencies.md`.
- **Last Updated:** 2026-07-11

### R-006: Error-Fix Agent Auto-Merge (Guardrail Bypass)
- **Status:** 🟢 Active
- **Severity:** Low (strict guardrails in place)
- **Likelihood:** Very Low (policy + code enforcement)
- **Impact:** If the error-fix agent bypasses the "PR only, never auto-merge" rule, unreviewed code could reach `main`.
- **Trigger:** Misconfiguration of the agent, missing branch protection rules
- **Mitigation:** Enforce branch protection on `main` (require PR, require review). Agent opens PRs only. Document the guardrail in all 3 locations (agents.md, github_agent.md, error-fix skill). GitHub Actions check enforces no direct push to main.
- **Last Updated:** 2026-07-11


### R-008: Single LLM Model Dependency for Agent Generation
- **Status:** 🟡 Active
- **Severity:** Medium
- **Likelihood:** Medium (LLMs are switched frequently)
- **Impact:** If `agents.md` coordinator rules aren't consistently applied when generating persona files for a new LLM, the new agent may miss critical rules.
- **Trigger:** Switching to a new LLM (e.g., Claude → DeepSeek) without thorough persona file generation
- **Mitigation:** Follow the documented 5-step persona file generation process in `agents.md`. Always include the full 7-stage execution flow in every persona file. Verify the new persona file against the coordinator.
- **Last Updated:** 2026-07-11

### R-010: IR35 & Global Independent Contractor Usage
- **Status:** 🟠 Active
- **Severity:** High
- **Likelihood:** Medium (rule changes and market shifts recur; global contractor acceptance varies by region)
- **Impact:** Contracting income — the business's current runway — shrinks if IR35 determinations tighten or markets reduce independent contractor usage.
- **Trigger:** IR35 status changes, umbrella-market corrections, or global contractor policy shifts
- **Mitigation:** Dual Turkish &amp; British passports keep international contract markets open; contractor-format CV (converted from permanent employment) maintained for outside-IR35 and global roles; business revenue diversifies income away from contract-rate dependence. Tracked on the strategy page `5_Symbols/strategy/risk-analysis.html`.
- **Last Updated:** 2026-08-19

### R-011: Business Confidence Falling with Global Wars
- **Status:** 🟠 Active
- **Severity:** High
- **Likelihood:** Medium (active conflicts persist through 2026)
- **Impact:** Enterprise training budgets and buying decisions freeze, directly hitting the B2B channel (H12) and cohort demand.
- **Trigger:** Escalation of global conflicts, budget freezes, hiring slowdowns
- **Mitigation:** Lean fixed-cost base (owned workstation, single Big Yellow storage unit at £500); $0 CAC organic funnel carries no paid-spend exposure; certification upskilling is a de-risking purchase that survives budget freezes better than discretionary training.
- **Last Updated:** 2026-08-19

### R-012: Dependency on the Inside-IR35 Day Job
- **Status:** 🟠 Active
- **Severity:** High
- **Likelihood:** Medium (contract roles end; renewals not guaranteed)
- **Impact:** Every pound of business runway currently traces back to a single inside-IR35 day job; its loss removes the income floor overnight.
- **Trigger:** Day-job contract end, non-renewal, or IR35 re-determination to outside with no replacement
- **Mitigation:** Milestone gates convert the day job into optional income: two $10k cohort launches clear the repeat gate (H9), $100k ARR triggers going full-time (H15); cost discipline keeps burn below the day-job cushion; pre-launch waitlist signal tracked before committing cohort dates.
- **Last Updated:** 2026-08-19

### R-013: Global Economy Slowing Down
- **Status:** 🟡 Active
- **Severity:** Medium
- **Likelihood:** Medium (2026 growth continues to decelerate)
- **Impact:** Recessionary pressure reduces contract demand and candidate willingness to pay for cohorts.
- **Trigger:** Sustained slowdown, layoff waves, reduced corporate L&amp;D spend
- **Mitigation:** Freemium $0/$1 entry keeps the funnel alive through downturns; credential-led employability demand is counter-cyclical — downturns push people to re-skill; monitored via funnel conversion metrics.
- **Last Updated:** 2026-08-19

### R-014: Instructional Clarity & Learner Comprehension Risk ("Rating Penalty")
- **Status:** 🟠 Active
- **Severity:** High
- **Likelihood:** Medium
- **Impact:** High (Learner confusion, negative student reviews, low course ratings, word-of-mouth referral stalls)
- **Trigger:** Customer discovery feedback from Mehmet: *"Eğitim veriyon ama insanlar seni anlamazsa kimse sana güzel puan vermez"* ("You're giving training, but if people don't understand you, no one will give you a good rating / positive review.")
- **Mitigation:** Adopt the 10-10-15 sprint delivery structure (5-10 min intro, 10 min demo, 15 min Q&amp;A), 3-tier preset project ladder (Foundational &rarr; Intermediate &rarr; Architect) with published preconditions and postconditions, visual whiteboard diagrams, and real-time comprehension verification checkpoints ("Check &amp; Help" loop).
- **Last Updated:** 2026-08-24

### R-015: YouTube Content Misalignment & Low Subscriber Yield per Video
- **Status:** 🟠 Active
- **Severity:** High
- **Likelihood:** Medium
- **Impact:** High (Niche or obscure video topics produce low subscriber acquisition per video, slowing progression toward the H13 1,000x subscriber target)
- **Trigger:** Publishing videos on unresearched or overly narrow technical topics without aligning to popular medium concepts or high-intent search queries.
- **Mitigation:** Sanity check video topics against popular medium concepts; execute Reverse Response Marketing and 60s Fast-Conversion Shorts; track **Subscriber Count per Video** (current baseline: ~700 subscribers / 32 videos = ~21.9 subs/video, x24 factor from initial 30 sub baseline) as a key demand creation metric.
- **Last Updated:** 2026-09-02

---

## ✅ Solved Risks

### R-S09: Smoke Tests Not Gating Deployment (was R-007)
- **Status:** ✅ Solved (2026-07-12)
- **Severity:** Was 🟠 High
- **Risk:** Deploys ran unconditionally; a regression could reach production between manual smoke test runs.
- **Resolution:** `.github/workflows/static.yml` now has a `smoke` job running the SPEC-008 runner; the `deploy` job requires it (`needs: smoke`). The smoke test report uploads as a CI artifact on every run. Pipeline owned by the Formula Agent (CI → Continuous Delivery → Continuous Deployment).
- **Verification:** First gated pipeline run on the restructure push (2026-07-12).

### R-S08: No GitHub Actions Workflow (was R-009)
- **Status:** ✅ Solved (2026-07-12)
- **Severity:** Was 🔴 Critical
- **Risk:** No `.github/` directory existed — GitHub Pages was not deployed via Actions, and no pipeline could gate deployment.
- **Resolution:** `.github/workflows/static.yml` added (commit `f149662`) — deploys the site to GitHub Pages on every push to `main`. Deployed site verified live (HTTP 200) by the cloud smoke test.
- **Verification:** `smoke_test.py --base-url` run 2026-07-12: Deployed Site Reachable ✅. Remaining smoke-test gate tracked as R-007.

### R-S07: Navigation Config Desynchronization (was R-003)
- **Status:** ✅ Solved (2026-07-12)
- **Severity:** Was 🟡 Medium
- **Risk:** Debug menu required manual sync across 3 files; ~27 stage docs were missing from all menu sources.
- **Resolution:** Full backfill — every stage markdown file now listed (64 entries, identical across `navigation_config.json`, `index.html`, `markdown_renderer.html`). The SPEC-008 smoke runner checks "Nav 3-Way Sync" and "Stage Docs In Menu" on every run, so future desync is detected automatically instead of relying on discipline.
- **Verification:** Smoke tests 2026-07-12: both checks ✅ (10/10 local, 11/11 cloud).

### R-S01: Features Implemented Without Documented Specs
- **Status:** ✅ Solved (2026-07-11)
- **Severity:** Was 🟠 High
- **Risk:** Features were being implemented without documented specifications — no source of truth existed for what features should do. New tasks couldn't check for conflicts with existing behavior.
- **Resolution:** Created `4_Formula/specs.md` with SPEC-001 through SPEC-006. Encoded the Specs System rule in `agents.md` and all agent persona files. New tasks now check specs, flag `[NEEDS UPDATE]`, and warn before coding.
- **Verification:** Specs System rule active in all 5 agent files.

### R-S02: Errors Discovered Only in Production
- **Status:** ✅ Solved (2026-07-11)
- **Severity:** Was 🟠 High
- **Risk:** No smoke testing process existed — errors were found only after deployment to GitHub Pages. No formal issue tracking or resolution loop.
- **Resolution:** Created `7_Testing_Known/smoke_tests.md` with 9 smoke test definitions. Integrated GitHub Issues (one issue per error). Created `.kilo/skills/error-fix.md` for automated discovery. Added smoke test gate to deploy skill.
- **Verification:** Smoke Tests & GitHub Issues rule active in all 5 agent files. Deploy skill gated by smoke tests.

### R-S03: Inconsistent Code Quality Across Agents
- **Status:** ✅ Solved (2026-07-11)
- **Severity:** Was 🟡 Medium
- **Risk:** Different agents (Claude, Gemini, Kilo Code, Copilot) wrote code with inconsistent styles — formatting, naming, and patterns varied.
- **Resolution:** Created `5_Symbols/rules/` with `coding_standards.md`, `git_conventions.md`, and `file_organization.md`. Updated 7-stage execution flow to reference the rules folder. All 5 agent files now say "Follow coding rules defined in `5_Symbols/rules/`."
- **Verification:** Coding rules referenced in all agent persona files.

### R-S04: Full Project Context Loaded Every Agent Run
- **Status:** ✅ Solved (2026-07-11)
- **Severity:** Was 🟡 Medium
- **Risk:** Agents loaded the entire project context (all AGENTS.md rules, all persona files, all stage READMEs) on every run — wasteful and slow.
- **Resolution:** Created 6 on-demand skill files in `.kilo/skills/` (navigation, planning, simulation, deploy, secrets, error-fix). Created `kilo.json` to register them. Agents now load only the skills relevant to the current task.
- **Verification:** Skills loadable via the `skill` tool. Documented in `2_Environment/superskills.md`.

### R-S05: Unclear Tool Dependencies and Upgrade Impact
- **Status:** ✅ Solved (2026-07-11)
- **Severity:** Was 🟡 Medium
- **Risk:** No documentation existed for how project tools depend on each other. Upgrading one tool could silently break another with no way to predict impact.
- **Resolution:** Created `2_Environment/dependencies.md` with full dependency chain, cross-dependency matrix, upgrade impact per tool, and build/delivery flow.
- **Verification:** Dependencies documented with frontend + backend sections and a cross-dependency matrix.

### R-S06: Tool Selection Without Documented Rationale
- **Status:** ✅ Solved (2026-07-11)
- **Severity:** Was 🟢 Low
- **Risk:** Tools were added to the project without documented reasoning — future contributors couldn't understand trade-offs or evaluate replacements.
- **Resolution:** Created `2_Environment/toolstack.md` with 15 tools, 5-column rationale table, decision principles, and stack evolution log.
- **Verification:** Every tool now has a documented "why" in the rationale column.

---

## 📋 Risk Update Log

| Date | Update | Risk ID | Change |
|------|--------|---------|--------|
| 2026-07-11 | Initial risk assessment | R-001 → R-008 | 8 active risks identified and documented |
| 2026-07-11 | Specs system created | R-S01 | Solved: `4_Formula/specs.md` with 6 active specs |
| 2026-07-11 | Smoke tests implemented | R-S02 | Solved: `7_Testing_Known/smoke_tests.md` with GitHub Issues |
| 2026-07-11 | Coding standards created | R-S03 | Solved: `5_Symbols/rules/` with 3 rule files |
| 2026-07-11 | Skills system created | R-S04 | Solved: `.kilo/skills/` with 6 loadable skills |
| 2026-07-11 | Dependencies documented | R-S05 | Solved: `2_Environment/dependencies.md` |
| 2026-07-11 | Toolstack rationale created | R-S06 | Solved: `2_Environment/toolstack.md` |
| 2026-07-12 | Sanity check sub-agent full scan | R-009 | New critical risk: no GitHub Actions workflow (`.github/` absent) — CI/CD requirement unmet |
| 2026-07-12 | Sanity check sub-agent full scan | R-003 | Confirmed active with evidence: ~27 stage docs missing from all 3 menu sources (see `sanity_check_report.md` F-003) |
| 2026-07-12 | Pages workflow added (`static.yml`) | R-S08 | Solved: GitHub Pages now deploys via Actions; site live |
| 2026-07-12 | Debug menu backfill + SPEC-008 runner | R-S07 | Solved: all stage docs in menu; desync now auto-detected by smoke tests |
| 2026-07-12 | Smoke test runner implemented | R-007 | Downgraded High → Medium and reframed: runner exists (caught issue #1); remaining step is wiring it into `static.yml` as a deploy gate |
| 2026-07-12 | Smoke gate wired into `static.yml` | R-S09 | Solved: `deploy` job requires the `smoke` job (SPEC-008 runner); Formula Agent owns the CI/CD pipeline |
| 2026-08-19 | Macro & founder-income risk review | R-010 → R-013 | Added 4 active risks: IR35 & global contractor usage (High), business confidence falling with global wars (High), inside-IR35 day-job dependency (High), global economy slowing (Medium) — mirrored on `5_Symbols/strategy/risk-analysis.html` |
| 2026-08-24 | Customer discovery pedagogical risk | R-014 | Added active risk: Instructional Clarity & Learner Comprehension ("Rating Penalty") from Mehmet's feedback (*"Eğitim veriyon ama insanlar seni anlamazsa kimse sana güzel puan vermez"*) |
| 2026-09-02 | YouTube content alignment risk | R-015 | Added active risk: YouTube Content Misalignment & Low Subscriber Yield per Video (~700 subs / 32 videos, x24 growth factor, tracking subs/video metric) |

---

## Risk Review Cadence

- **Every project update** — Add new risks, update existing ones, move solved risks to the Solved section
- **Every milestone completion** — Review all active risks, re-evaluate severity/likelihood
- **Smoke test failures** — If a smoke test catches a new class of error, create a risk entry
- **Tool changes** — When adding or removing a tool, evaluate and log new risks
- **LLM switch** — When switching the LLM model, review R-008 and update mitigation if needed
