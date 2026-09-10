# 🐛 Error Log

> **Stage 6: Semblance** — A chronological log of significant error messages and stack traces encountered during development.

---

## 📋 Error Registry

### [2026-09-10] smoke_test.py "Nav 3-Way Sync" drift after RULE-005 root reorg
*New drift surfaced by moving `HYPOTHESIS.md` → `4_Formula/HYPOTHESIS.md` and `reports/` → `7_Testing_Known/reports/`.*

- **Symptom:**
  ```text
  FAIL  Nav 3-Way Sync   drift: ['4_Formula/HYPOTHESIS.md', '7_Testing_Known/reports/skool-pricing-feedback-v1.0.0.md']
  ```
- **Root Cause:** `MD_URL_PATTERN` in `5_Symbols/toolbox/smoke_test.py` matches any `[1-7]_Stage/.../*.md` path found anywhere in `index.html` body text and requires it to also appear in `navigation_config.json` and `markdown_renderer.html`. Before the RULE-005 reorg, `HYPOTHESIS.md` and `reports/*.md` lived at repo root and never matched this stage-prefixed regex, so no drift was reported. Moving them into stage folders (required by RULE-005) makes these two specific `index.html` content links (not actual debugMenu entries) start matching the pattern, even though they were never part of the debugMenu system.
- **Fix Applied:** Not applied — this is the same class of pre-existing, accepted finding as "Stage Docs In Menu" (business content living in stage folders without being a debugMenu entry). Links verified functionally correct: `curl` returned 200 for both `4_Formula/HYPOTHESIS.md` and `7_Testing_Known/reports/skool-pricing-feedback-v1.0.0.md` via `markdown_renderer.html?src=...` and directly. Adding these to the template's fixed 64-entry debugMenu (owned by `nav_sync.py`'s `MENU` list) would misrepresent them as core template stage docs rather than project business content, so left as a documented, non-blocking smoke-test finding.
- **Workaround Active:** No — no functional breakage; failure is a heuristic false-positive of the regex-based checker, tracked here for future smoke-test runs.
- **Linked Resource:** [5_Symbols/toolbox/smoke_test.py](../5_Symbols/toolbox/smoke_test.py), [6_Semblance/smoke_test_report.md](smoke_test_report.md)

---

### [YYYY-MM-DD] Second Error Title
- **Symptom:**
  ```text
  
  ```
- **Root Cause:**
- **Fix Applied:**
- **Workaround Active:** Yes / No

---

### [YYYY-MM-DD] Second Error Title
- **Symptom:**
  ```text
  
  ```
- **Root Cause:**
- **Fix Applied:**
- **Workaround Active:** Yes / No
- **Linked Resource:** 
