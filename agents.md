# 🤖 AI Agent Guidelines & Protocols

This document outlines the operational constraints, system rules, and design standards for AI Coding Assistants (such as Gemini, Claude, or other LLMs) working in the **AI Certification Helper** repository. 

Use this document alongside [CLAUDE.md](file:///Users/rifaterdemsahin/projects/AI-Certification-Customer-Development/CLAUDE.md) and [gemini.md](file:///Users/rifaterdemsahin/projects/AI-Certification-Customer-Development/gemini.md) as your source of truth for guidelines, workflows, and project architecture.

---

## 🚀 Mandatory Development Workflows

### 1. Post-Task Validation
Upon completing any page or configuration updates, AI agents **MUST** execute the following steps:
1. **Server Verification:** Check if the local server is running (typically Python HTTP server on port `8000`). If not active, start/restart it in the background using `python3 -m http.server 8000`.
2. **Visual/Functional Verification:** Open the specific updated pages in the default browser using the Mac CLI `open` command (e.g. `open http://localhost:8000/5_Symbols/bmc/bmc-channels.html`).
3. **GitHub Verification & Deployment:** Open the specific GitHub page with the related update/history (e.g., `open https://github.com/rifaterdemsahin/AI-Certification-Customer-Development/commits/main/5_Symbols/bmc/bmc-channels.html`) and wait for the GitHub Pages deployment to complete.

### 2. Output Links to Updated Pages
Whenever you create or update an HTML page or web resource, **ALWAYS** display clickable links to that updated page at the very end of your final response:
* Provide the absolute file path link (`file://` scheme, e.g., `[bmc-channels.html](file:///Users/rifaterdemsahin/projects/AI-Certification-Customer-Development/5_Symbols/bmc/bmc-channels.html)`).
* Provide the localhost HTTP link (e.g., `http://localhost:8000/5_Symbols/bmc/bmc-channels.html`).

### 3. Footer Revision Tracking
For any page that receives functional or business content updates, the footer **MUST** be updated to track the change.
* Add a `span` styled with class `footer-text` indicating the latest change.
* Include a hyperlink specifically to the **GitHub Page History** for that specific file.
* **Format:**
  ```html
  <span class="footer-text" style="font-size: 0.8rem; opacity: 0.85; border-top: 1px solid rgba(255,255,255,0.05); width: 100%; padding-top: 0.5rem; margin-top: 0.5rem;">
      Latest Change: [Description of last change] (<a href="https://github.com/rifaterdemsahin/AI-Certification-Customer-Development/commits/main/5_Symbols/[group]/[filename].html" target="_blank" style="color: var(--color-primary); text-decoration: underline;">GitHub Page History</a>)
  </span>
  ```

### 4. Hypothesis Linkage
Whenever a page is updated or a new page is added, AI agents **MUST** cross-link it with `HYPOTHESIS.md`:
* Add or update the relevant hypothesis entry (premise → conclusion → status) in `HYPOTHESIS.md` to reference the page by relative path.
* Cite the hypothesis ID (e.g. "see H10") from the page's own content wherever it states a falsifiable claim.
* Bump `HYPOTHESIS.md`'s version field and Change Log whenever this linkage is added or changed.

### 5. Single Branch Policy (founder-confirmed 2026-08-19)
This repository has **one branch: `main`**. Do not leave hanging feature branches.
* Always work on `main` (`git checkout main && git pull`). Never resume a leftover Claude/Codex/Grok session branch.
* After a PR merges or a batch is pushed to `main`, **delete the feature branch locally and on `origin` immediately**.
* Before deleting, run `git log main..<branch>` and port any unique evidence onto `main` first — then delete.
* Remote leftovers from merged PRs (`origin/claude/*`, `origin/feat/*`) are hanging branches: delete them rather than leaving them for “later.”

---

## 💼 Core Business Principles & Context

AI agents must align all content, strategy proposals, and specs with the following constraints:
* **Founder & Contract Status:** Rifat Erdem Sahin is a veteran 6-figure IT contractor with over **$1.3 million USD** earned in enterprise contracting across the UK and USA. His UK-registered operating entity is **Pexabo Ltd**. He is currently running this business as a second job alongside his contract role, meaning YouTube and LinkedIn comments are batch-answered in **weekly cycles** during the content generation phase.
* **Proven Course Creation & Monetization Track Record:** Founder has already published and sold 4 commercial technical courses across **Coursera** (*SonarQube*, *Secure AI Models* in partnership with Starweaver) and **Udemy** (*The Ultimate IT Contractor*, *Infrastructure as Code*), proving institutional instructional quality, payment collection, and course productization capability.
* **Organic Distribution Channels:** Primary channels are YouTube Courses and organic LinkedIn sharing (specifically leveraging Rifat Erdem Sahin's professional audience).
* **Live Skool checkout (experiment):** Freemium — Standard $0 / Premium $1/mo / VIP $250/year (founder-confirmed 2026-08-14). Recommended names: Peek / Sit In / Share Screen on `5_Symbols/product/skool-delivery-pilot-offer.html`. Feedback: `reports/skool-pricing-feedback-v1.0.0.md`. About-tab copy (replaces the live “get certified” line): `5_Symbols/product/skool-about.html`. Preview ramp only — does not replace the $10/mo + $250–$500 revenue model. $0 and $1 joins are not paid enrollments. Cap VIP as Sunday screen-share, not on-demand 1:1.
* **Founder Anti-Spam Guardrail (Skool):** To prevent notification clutter and spamming the community, founder posts are converted into evergreen living hubs (e.g. centralized "Courses" hub with Claude Architect nested inside) that are updated and nurtured in place rather than creating fragmented one-off announcement threads.
* **LinkedIn Connection Cap & Monday VIP Claude Cowork:** Rifat Erdem Sahin is capped at 30,000 LinkedIn connections (`https://www.linkedin.com/mynetwork/grow/`); he strictly only adds verified Skool community members to preserve network capacity. On Mondays, Rifat hosts dedicated VIP Claude Cowork sessions to optimize profiles and promote VIP members directly to recruiters over the Delivery Pilot organization network. **Disambiguation (Charles, 2026-08-30):** Anthropic **Claude Cowork** (the product) is a required course lab for the *daily status report* while learners study cert content (`course-curriculum-learning-objectives.html` Video 2.4). Do not collapse that job into the Monday VIP recruiter session.
* **Delivery Pilot Transformation Roadmap & Ultimate IT Contractor Course:** Community members progress along a 4-stage pipeline (Hands-on Training &rarr; Vendor Certification &rarr; CV/Recruiter Promotion Meetings &rarr; Ultimate IT Contractor Course). Members value the Forward Deployed Engineer (FDE) and independent contractor persona (£500&ndash;£1,000+/day) over pure academic study, co-bidding on enterprise tenders as an alliance (H30).
* **Active MVP Iteration & Reverse Response Marketing:** Current production workspace is `https://github.com/rifaterdemsahin/aug-video-animation-6-core-message` (live Pages: `https://rifaterdemsahin.github.io/aug-video-animation-6-core-message/`; tools log: `tools-and-timelines.html`). Pattern from Video 6: one GitHub repo + GitHub Pages board per short (Jules scaffolds HTML; Gemini scripts; Google Flow generates; Canva assembles; Fal.ai ElevenLabs teaches; YouTube Studio ships). `aug-video-animation-2` remains the original shared engine, not deleted. Two clocks: 1-hour commute glossary (`glossary-short-pipeline.html`) and ~2.5h studio core-message session (measured 30 Aug 2026, 07:52–10:22). Creative framework: identify trending YouTube videos in AI/dev topics, reverse the mainstream premise, inject controversial practitioner insights (FDE/enterprise reality), and repackage into high-retention animated videos. **Voice SOP (n=2, 2026-08-19):** AI voiceover may teach; spoken Skool / Sunday / Delivery Pilot asks are founder-recorded (`5_Symbols/growth/founder-voice-skool-cta.html`). SOP page: `5_Symbols/growth/animation-shorts-pipeline.html`.
* **Sales Tactics Catalog:** `5_Symbols/growth/sales-tactics.html` — centralized catalog of 8 core conversion tactics across Fast-Conversion Shorts (TzjDPMfsb3o), Face-to-Face Core Message, Reverse Response Marketing, Private Quiz Assessment, Funfair Tokens, Skool Outro Cards, Cost of Inaction, and 1-Click Pinned Comment Asset Drops.
* **Fast-Conversion Shorts (TzjDPMfsb3o Pattern):** `5_Symbols/growth/fast-conversion-shorts.html` — 60-second video sales engine benchmarked on YouTube Short TzjDPMfsb3o: 0–3s pattern interrupt, 4–35s high-density proof, 36–52s low-friction Skool bridge CTA, 53–60s infinite loop ending. Added as a tactic on `5_Symbols/growth/marketing-tactics.html`.
* **Face-to-Face Core Message (NetworkChuck pattern, founder-confirmed 2026-08-30):** `5_Symbols/growth/face-to-face-core-message.html` — share the Video 6 core message looking at the audience (LinkedIn talking-head, Triton Square Thursday, Sunday live, founder-on-lens closer). Source: Chuck Keith LinkedIn `https://lnkd.in/p/ezquTjde`. Animation still teaches; the manifesto is spoken face-to-face. Not a paid enrollment.
* **Saturday LinkedIn Cohort Invites (2026-08-30):** `5_Symbols/growth/linkedin-saturday-invites.html` — post Saturday for Sunday 13:30–14:30 London time. Eight dated weeks from 5 Sep–24 Oct 2026; never write “Today.” Live URL plus group door `https://www.skool.com/delivery-pilot-8938`. Unique copy and visual each week. Not a paid enrollment.
* **Cohort Session 10 (2026-08-30):** `5_Symbols/cd/cohort-session-10-analysis.html` — Mariana + Chidi. Faceless shorts lifting Skool joins (~30, not paid). B2C→B2B placement is a slogan until partner payroll exists. Next Sunday topic: how we make money. Not a paid enrollment.
* **Sunday live slot (founder-moved 2026-08-30):** Sunday **13:30–14:30 UK** after feedback from **even the UK audience** (late 21:00 labs fatigued local attendees; Session 9). The same afternoon slot overlaps India evening (~18:00 IST) and US East morning (~08:30 EDT). Replaces the old 21:00 UK evening. WhatsApp reminders fire 10:00–12:00 UK, before the lab. See H5 Premise 4 and `5_Symbols/hypotheses/hyp-h5.html`. Not a paid enrollment.
* **Exam access is partner-gated (F12, 2026-08-19):** Cheuk (National Grid, first name only) tried to enroll and could not — only Claude enterprise partners have access. Mitigation: two partner companies in the system help and enroll people. D2C still acquires; partners seat the exam. F12 is 🟡 PARTIALLY ADDRESSED until a named candidate is actually seated.
* **Candidate Anonymization & Privacy Guardrail:** Cohort candidate B. (who provided WhatsApp video feedback on burnout, voluntary redundancy, and Anthropic qualification intent) must **ALWAYS** be referenced strictly as **"B."** or **"B"** across all notes, discovery transcripts, reports, hypothesis logs, and UI components to protect personal privacy. **Strict First-Name Only Rule:** Never use last names when collecting, logging, synthesizing, or reporting customer discovery feedback (e.g., strictly use **Sude**, **Brian**, **Bora**, **Charles**, **Marianna**, **Mehmet**, **Cheuk**, **Faruk**, **Jamal**, **Tomiwa**, **Erdem**) across all markdown files, transcripts, reports, and UI components.
* **Validation Exit Gate:** $10,000 in gross revenue from 2 consecutive cohort launches before transition to Stage 3 (Customer Creation).
* **£100k GBP Pure-Time Pivot (H33, founder-decided 2026-08-27):** Four courses of institutional value (£40,000) plus founder time (£60,000 at £525/day ≈ 114 days). If that ledger is full and Discovery still cannot become Validation and Skool is not charging back ($10/mo or $250–$500; $0/$1 do not count), pivot that week. Distinct from the $100,000 USD ARR hiring trigger. See `5_Symbols/growth/hundred-k-opportunity-cost-pivot.html`.
* **Operational Scaling Gate:** Hire video editors, cohort coordinators, and TAs after hitting a $100,000/year ARR run-rate. Multiple cohorts are managed on weekday schedules run independently of Rifat's time, facilitated by TAs. Top alumni and regulars are elevated to official **Skool Community Moderators** to manage 24/7 community triage and anti-spam moderation (<a href="5_Symbols/product/skool-community-management.html">Garden Playbook</a>). In Stage 3, curriculum expands to Nvidia, Microsoft, and Google AI certifications to decrease dependency on Claude and expand reach.

---

## 🎨 Design & Aesthetic Heuristics

All web app page extensions or styles must uphold premium visual standards:
1. **Modern Layouts:** Use CSS custom properties from `:root` in [style.css](file:///Users/rifaterdemsahin/projects/AI-Certification-Customer-Development/style.css) (`var(--color-primary)`, `var(--bg-card)`, etc.) to maintain visual harmony.
2. **Glassmorphism & Spotlight effects:** Keep `.card` components styled beautifully. Mouse-follow spotlight glow is automatically handled by [main.js](file:///Users/rifaterdemsahin/projects/AI-Certification-Customer-Development/main.js).
3. **Visual Proof & Media (Slides & Screenshots):** When creating and updating pages, ALWAYS embed relevant slides, visual storyboard cards, and concrete screenshots (e.g. Canva slides, Skool community UI snapshots, architecture blueprints, terminal outputs, workflow diagrams) to provide undeniable visual context.
4. **No Default Browser Styling:** Avoid standard colors or browser font defaults. Use Outfit/Inter typography, gradients, and soft borders.
5. **No Placeholders:** Generate functional assets using image tools instead of plain grey blocks.

---

## 📊 Report Versioning & Resolution Tracking

`reports/*.md` files (e.g. `acidity-check-report-v1.2.0.md`) carry their version number **in the filename**, unlike `HYPOTHESIS.md`, which bumps a version field in place. When new evidence resolves, partially resolves, or changes a finding in one of these reports, AI agents **MUST NOT** silently edit the old file. Instead:
1. **Create a new file** at the next version (`reports/<name>-vX.Y.0.md`) rather than overwriting the old one — old versions are the historical record.
2. **Annotate each finding's resolution status in place**, e.g. `"F1. ... → ✅ RESOLVED (2026-08-01)."` or `"→ 🟡 PARTIALLY ADDRESSED."` — never delete a finding just because it's resolved.
3. **Add a one-line superseded-by banner** at the top of the old file, linking forward to the new one.
4. **Update every cross-reference** to the old filename: `HYPOTHESIS.md`'s header, `nav.js`'s Docs group, and any page citing the report by name.

The same "always show status, never silently resolve" rule applies to `HYPOTHESIS.md` itself — bump its version field and Change Log (see the file's own header) rather than quietly rewriting a hypothesis's conclusion.

## 🗂️ Navigation & Link Integrity

* **Single source of truth:** all top nav grouping lives in `nav.js`'s `groups` array. Never hand-write a `<header>` on a page — grep for `<header>` across `*.html` after any nav change; it should never match.
* **Before adding a page:** pick the nav group it logically belongs to (or add a new group) and add it to `groups`, plus a `searchIndex` entry so it's findable via 🔍 Search.
* **Before renaming or removing a page:** grep its filename across `*.html` and `nav.js` — a link left dangling in `groups`, `searchIndex`, or another page's body is the most common way this site breaks.
* **Detail pages don't have to live in the top nav:** `5_Symbols/discovery/*.html` is a deliberate example — reachable from stage discovery's diagram and from Search, not from a dropdown. Prefer this pattern over cramming every sub-page into the nav when a parent page can link to it directly instead.

---

## 📝 Document Synchronization Rule

When updating a business fact or primary parameter (such as channel lists, pricing, or comments schedule), the agent **MUST** update all of the following in tandem:
1. The relevant specific `5_Symbols/[group]/bmc-*.html` or `5_Symbols/[group]/comp-*.html` files.
2. The high-level [business-model-canvas.html](file:///Users/rifaterdemsahin/projects/AI-Certification-Customer-Development/5_Symbols/bmc/business-model-canvas.html) overview.
3. The model memory files: [CLAUDE.md](file:///Users/rifaterdemsahin/projects/AI-Certification-Customer-Development/CLAUDE.md), [gemini.md](file:///Users/rifaterdemsahin/projects/AI-Certification-Customer-Development/gemini.md), and [agents.md](file:///Users/rifaterdemsahin/projects/AI-Certification-Customer-Development/agents.md).
