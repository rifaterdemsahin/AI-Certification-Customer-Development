# 🤖 AI Agent Guidelines & Protocols

This document outlines the operational constraints, system rules, and design standards for AI Coding Assistants (such as Gemini, Claude, or other LLMs) working in the **AI Certification Helper** repository. 

Use this document alongside [CLAUDE.md](file:///Users/rifaterdemsahin/projects/AI-Certification-Customer-Development/CLAUDE.md) and [gemini.md](file:///Users/rifaterdemsahin/projects/AI-Certification-Customer-Development/gemini.md) as your source of truth for guidelines, workflows, and project architecture.

---

## 🚀 Mandatory Development Workflows

### 1. Post-Task Validation
Upon completing any page or configuration updates, AI agents **MUST** execute the following steps:
1. **Server Verification:** Check if the local server is running (typically Python HTTP server on port `8000`). If not active, start/restart it in the background using `python3 -m http.server 8000`.
2. **Visual/Functional Verification:** Open the specific updated pages in the default browser using the Mac CLI `open` command (e.g. `open http://localhost:8000/bmc-channels.html`).

### 2. Output Links to Updated Pages
Whenever you create or update an HTML page or web resource, **ALWAYS** display clickable links to that updated page at the very end of your final response:
* Provide the absolute file path link (`file://` scheme, e.g., `[bmc-channels.html](file:///Users/rifaterdemsahin/projects/AI-Certification-Customer-Development/bmc-channels.html)`).
* Provide the localhost HTTP link (e.g., `http://localhost:8000/bmc-channels.html`).

### 3. Footer Revision Tracking
For any page that receives functional or business content updates, the footer **MUST** be updated to track the change.
* Add a `span` styled with class `footer-text` indicating the latest change.
* Include a hyperlink specifically to the **GitHub Page History** for that specific file.
* **Format:**
  ```html
  <span class="footer-text" style="font-size: 0.8rem; opacity: 0.85; border-top: 1px solid rgba(255,255,255,0.05); width: 100%; padding-top: 0.5rem; margin-top: 0.5rem;">
      Latest Change: [Description of last change] (<a href="https://github.com/rifaterdemsahin/AI-Certification-Customer-Development/commits/main/[filename].html" target="_blank" style="color: var(--color-primary); text-decoration: underline;">GitHub Page History</a>)
  </span>
  ```

---

## 💼 Core Business Principles & Context

AI agents must align all content, strategy proposals, and specs with the following constraints:
* **Founder & Contract Status:** Rifat Erdem Sahin is running this as a second job. He works a contract role, meaning YouTube and LinkedIn comments are batch-answered in **weekly cycles** during the content generation phase.
* **Organic Distribution Channels:** Primary channels are YouTube Courses and organic LinkedIn sharing (specifically leveraging Rifat Erdem Sahin's professional audience).
* **Validation Exit Gate:** $10,000 in gross revenue from a single course/cohort launch before transition to Stage 3 (Customer Creation).
* **Operational Scaling Gate:** Hire video editors and cohort assistants only after hitting a $100,000/year ARR run-rate.

---

## 🎨 Design & Aesthetic Heuristics

All web app page extensions or styles must uphold premium visual standards:
1. **Modern Layouts:** Use CSS custom properties from `:root` in [style.css](file:///Users/rifaterdemsahin/projects/AI-Certification-Customer-Development/style.css) (`var(--color-primary)`, `var(--bg-card)`, etc.) to maintain visual harmony.
2. **Glassmorphism & Spotlight effects:** Keep `.card` components styled beautifully. Mouse-follow spotlight glow is automatically handled by [main.js](file:///Users/rifaterdemsahin/projects/AI-Certification-Customer-Development/main.js).
3. **No Default Browser Styling:** Avoid standard colors or browser font defaults. Use Outfit/Inter typography, gradients, and soft borders.
4. **No Placeholders:** Generate functional assets using image tools instead of plain grey blocks.

---

## 📝 Document Synchronization Rule

When updating a business fact or primary parameter (such as channel lists, pricing, or comments schedule), the agent **MUST** update all of the following in tandem:
1. The relevant specific `bmc-*.html` or `comp-*.html` files.
2. The high-level [business-model-canvas.html](file:///Users/rifaterdemsahin/projects/AI-Certification-Customer-Development/business-model-canvas.html) overview.
3. The model memory files: [CLAUDE.md](file:///Users/rifaterdemsahin/projects/AI-Certification-Customer-Development/CLAUDE.md), [gemini.md](file:///Users/rifaterdemsahin/projects/AI-Certification-Customer-Development/gemini.md), and [agents.md](file:///Users/rifaterdemsahin/projects/AI-Certification-Customer-Development/agents.md).
