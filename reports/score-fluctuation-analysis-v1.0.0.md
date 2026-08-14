# Score Fluctuation Analysis — v1.0.0

**Date:** 2026-08-14  
**Author:** AI Coding Assistant (Antigravity)  
**Target:** Explain the Business Model Confidence Score movements between v1.9.28 and v1.9.31.  

---

## Executive Summary

On August 14, 2026, the **Business Model Confidence Score** exhibited a fluctuation, rising from **43/100** to **46/100**, before dropping back to **43/100** and holding. 

This retrospective analysis clarifies the mathematical and structural reasons for these movements. The volatility was **entirely driven by the Site Integrity sub-score’s Git status deduction (-10 for uncommitted work)**, while the core **Hypothesis Validation Score remained flat at 32.14 / 100**.

---

## 🧮 Mathematical Breakdown of the Fluctuation

The overall confidence score is computed as a weighted average:
$$\text{Overall Score} = \text{round}(0.7 \times \text{Hypothesis Validation} + 0.3 \times \text{Site Integrity})$$

### Score Progression Table

| Version | Hypothesis Validation | Site Integrity | Overall Score | Key Event / Trigger |
| :--- | :---: | :---: | :---: | :--- |
| **v1.9.28** | 32.14 | 67.5 | **43 / 100** | Live Freemium entitlements added; leftover keywords draft kept uncommitted ($-10$). |
| **v1.9.29** | 32.14 | 77.5 | **46 / 100** | Leftover keywords draft committed; uncommitted deduction cleared ($+10$). |
| **v1.9.30** | 32.14 | 67.5 | **43 / 100** | New Skool Visibility how-to batch added but uncommitted ($-10$). |
| **v1.9.31** | 32.14 | 67.5 | **43 / 100** | Public visibility live & founder-confirmed; same batch uncommitted ($-10$). |

---

## 🔍 Step-by-Step Version Analysis

### 1. v1.9.28 (Score: 43 / 100) — The Baseline
* **What occurred:** The founder confirmed the live Delivery Pilot checkout pricing as Freemium ($0 / $1 / $250). This was documented in `reports/skool-pricing-feedback-v1.0.0.md` and linked to **H5 Premise 9**. 
* **The deduction:** A separate untracked draft, `5_Symbols/product/skool-discoverability-keywords.html`, remained in the workspace. The sanity check automatically applied a **$-10$ deduction for uncommitted work**, capping Site Integrity at **67.5/100**.
* **Formula:** $\text{round}(0.7 \times 32.14 + 0.3 \times 67.50) = \text{round}(22.50 + 20.25) = 43$.

### 2. v1.9.29 (Score: 46 / 100) — The Rise
* **What occurred:** The untracked keywords draft and the pricing feedback files were committed to Git.
* **The effect:** The uncommitted work deduction cleared. Site Integrity rose from **67.5** to **77.5/100** (its maximum ceiling given the open acidity-check findings). 
* **Formula:** $\text{round}(0.7 \times 32.14 + 0.3 \times 77.50) = \text{round}(22.50 + 23.25) = 46$.

### 3. v1.9.30 (Score: 43 / 100) — The Drop
* **What occurred:** A new feature batch was introduced, adding `5_Symbols/product/skool-visibility.html` (detailing Public vs Private settings) and updating **H5 Premise 11**.
* **The deduction:** Since this new batch of files was left uncommitted in the local workspace, the **$-10$ uncommitted work deduction returned**, dropping Site Integrity back to **67.5/100**.
* **Formula:** $\text{round}(0.7 \times 32.14 + 0.3 \times 67.50) = 43$.

### 4. v1.9.31 (Score: 43 / 100) — The Hold
* **What occurred:** The founder confirmed the group is live Public. The status in `skool-visibility.html` moved from planned to live.
* **The deduction:** This work remained in the same uncommitted batch as v1.9.30. The $-10$ deduction was not applied a second time, meaning Site Integrity held at **67.5/100** and the overall score held at **43**.

---

## 💡 Key Lessons & Future Actions

1. **Configuration Is Not Validation:** 
   Confirming pricing entitlements, configuring discoverability keywords, and switching visibility to Public are useful setup steps, but they **do not constitute paid-enrollment signals**. Thus, the Hypothesis Validation score held flat at **32.14/100** because no hypotheses crossed status tiers (e.g., H5 remains *In Testing* until actual paid sales are logged).
2. **Git Hygiene Directly Controls the Score:**
   Whenever changes are in progress but not yet committed, the confidence score will temporarily drop by 3 points due to the uncommitted work penalty. Committing the open visibility batch will instantly restore Site Integrity to **77.5/100** and the overall score to **46/100**.
3. **Movers of the Core Score:**
   To move beyond the current **46/100** ceiling, we must:
   * **H9 (Highest Leverage):** Achieve two consecutive paid cohort launches summing to $10,000.
   * **F12:** Confirm individual, non-Partner registration is possible with Anthropic / Pearson VUE.
   * **F2:** Ground the H1 skills gap hypothesis with a search-volume or job-scraping dataset.
