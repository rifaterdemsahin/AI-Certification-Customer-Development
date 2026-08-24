# Customer Discovery Interview: HCL SRE & DevOps Technical Screen

- **Date Logged:** Aug 24, 2026
- **Candidate / Founder:** Rufat (Rifat Erdem Sahin — Principal DevOps / SRE Architect)
- **Panelists:** Vidya Sagar (Technical Lead / Panelist – HCL), Pushpa (Talent Acquisition – HCL), Bhishwa (Internal Coordinator)
- **Target Role:** Senior GCP DevOps / SRE Architect (UK Enterprise Client)
- **Channel / Location:** Microsoft Teams Video Bridge
- **Referral / Source:** Enterprise Agency Direct Inbound / Recruitment
- **Related Hypotheses:** H1, H24, H25, H29, H30

---

## 🎙️ Full Verbatim Interview Transcript

### 📍 1. Onboarding & Logistics Delays

* **Rufat:** Yeah, good morning, Adam. How you doing? Yeah, I know. No, we are not.
* **Pushpa:** Hello, this is Pushpa speaking, please go ahead. Amaad, you need Satt? Yes, very good. Please go ahead. Give me a second, let me add the panelist as well, okay? Just give me a minute. Are you—are you do not do that when I'm in a meeting? Rufat, Pushpa here from Talent Acquisition team. I was the one who sent you the invite. Okay, so I'm just adding the panelist.
* **Rufat:** Alright, let's reschedule it if it is not possible because I normally wait for three minutes, then we reschedule it.
* **Pushpa:** No, that's okay, he's joining the bridge. I was on another bridge and couldn't pull him into the call—another interview was going on and got delayed, that's it. Let me pull him right away.
* **Rufat:** Okay, okay. It won't delay much. If this is not the customer, we are just talking to each other, that's all right. You guys can reschedule the call.
* **Pushpa:** What do you want me to reschedule? The panel will be at the customer place. Oh, Vidya is here. We don't take much more than 30 minutes. Hi, Vidya.
* **Vidya:** Hey, hi, hi Bhishwa.
* **Pushpa:** Okay Vidya, there were two invites scheduled because of Teams, and Rufat was here while you were in the other corner, so I had to pull you here.
* **Vidya:** Got it. So are we talking with the customer or are we still waiting for the customer?
* **Pushpa:** It is an internal HCL interview, Rufat.
* **Rufat:** All right, so yes, please go ahead then.
* **Pushpa:** Vidya, you can take it up.
* **Vidya:** You want to start regarding Bhishwa or...?
* **Pushpa:** You can go ahead.
* **Rufat:** Are you guys from HCL or Delta Classic? Which one are you guys from? Because I was expecting to meet with Pushpa...
* **Pushpa:** Rufat, I'm Pushpa here from HCL Talent Acquisition, Vidya Sagar is from HCL, and Delta classes are in the window. Okay, so there's the technical panel here. The discussion will be happening with you and Vidya.
* **Rufat:** All right, please go ahead then.

---

### 🛠️ 2. Experience & Technical Background Overview

* **Vidya:** Hi Rufat. Give me one second, I'm just going through your profile. So I can see like you have a lot of expertise in GCP, DevOps, SRE, Solution Architecture, and platform/production engineering.
* **Rufat:** Yes, I worked with different organizations. I did lots of IAM and secrets management. I worked with National Grid/National Electric System Operator, IBM, GKE, OpenShift, and bare-metal Kubernetes. I worked at Microsoft as a Cloud Solution Architect—built different cloud functions, networking, VPCs, and global load balancing. I've also run actions helping people learn AI and become forward-deployed engineers for the last three years.

---

### ☁️ 3. GCP Scope vs. Legacy Tooling Constraints

* **Vidya:** Got it. Okay, so this requirement is mainly for DevOps engineering based out of Google Cloud Platform (GCP). We will be doing most of our stuff on GCP, so I'll talk more in terms of GCP terminology.
* **Rufat:** All right, are they using Cloud Build, Cloud Deploy, Artifact Registry, and Cloud Workstations?
* **Vidya:** No, they are not using cloud-native CI/CD tools. We will be using third-party CI/CD like Jenkins, Harness, etc., but deployment is going to happen on tools like GKE, Cloud Run, and BigQuery.
* **Rufat:** Are they using GKE CV? What kind of tool sets or common vulnerabilities and exposures (CVEs) do they want me to get rid of? What is their main focus?
* **Vidya:** Their main focus is a central DevOps team that helps developers with CI/CD creation and tool integration (like Vault, Single Artifact Registry, and Terraform) into pipelines. There is also a platform tool called Backstage (2.0 initiative) provisioned to developers for onboarding with golden paths. There's an ongoing migration from CNE to 2.0, so we'll be helping there and testing jobs.
* **Rufat:** What kind of jobs? Cron jobs? Are they dockerized, or are they using serverless functions? What are they using on Backstage? Are they based in the UK or US?
* **Vidya:** They are based in the UK.
* **Rufat:** Am I expected to be on-site for the customer?
* **Vidya:** That I am not sure about. You can clarify employment terms with the team.
* **Rufat:** Will there be full identity federation requiring on-site presence, or is everything saved to HashiCorp Vault? Do I need Workload Identity Federation?
* **Vidya:** That depends on the specific piece of work. At the moment, I want to evaluate you primarily on cloud and GKE-related items.
* **Rufat:** All right, I don't have the GKE certification. Is that an issue?
* **Vidya:** No, certification is not needed if you have hands-on expertise handling clusters.
* **Rufat:** I worked with OpenShift multi-node and single-node clusters at IBM (UK's biggest OpenShift implementation). I set up AI infrastructure, HPAs, and VPAs. They are mostly using GKE—are there any on-prem resources?
* **Vidya:** No on-prem resources, strictly cloud.

---

### 🤖 4. Discussion on AI Automation vs. Manual Execution

* **Rufat:** Do they use agents to manage GCP and GKE, or do they have limitations? Why don't they let me use Vertex AI with Gemini to automate stuff with speed?
* **Vidya:** What sort of things do you want to automate using Vertex AI and Gemini?
* **Rufat:** I set up SRE and DevOps agents. They create environments, fix code or configuration errors, generate PRs, and deploy automatically in minutes. I treat agent runtimes like microservices using GKE Sandbox and isolated workloads with GPUs.
* **Vidya:** Sorry to cut you off—that level of scope is not present here at the moment. There are no plans to implement AI tools. It is mostly manual hands-on execution.
* **Rufat:** Old school.
* **Vidya:** Yes.
* **Rufat:** If this is a manual job, do they block AI usage, or are they open-minded?
* **Vidya:** Can we focus more on what contributions you made in terms of traditional DevOps? Please do not mention AI—focus on hands-on work from the pre-AI era.

---

### 🏗️ 5. Infrastructure as Code & Historical Projects

* **Rufat:** Before the AI era, I worked globally for 10 years in DevOps—Goldman Sachs, National Grid/NESO (OpenShift and Azure), Microsoft (high-potential cloud migrations), Accenture, Capgemini, and IBM. I am in the top 1% of GitHub contributors globally.
* **Vidya:** Makes sense. Any experience working with Terraform?
* **Rufat:** Yes, extensive Terraform projects. For example, at Tita (working for London Stock Exchange), I optimized their microservices delivery pipeline, lowering transaction speeds from 30 seconds down to 30 milliseconds via optimized CAP architecture, deploying serverless apps and containers onto Azure using Terraform.

---

### 🎓 6. Training, Volunteering & Candidate Fit

* **Vidya:** You mentioned you created a lot of content on Coursera and Udemy?
* **Rufat:** Yes, I trained over 10,000+ engineers on Infrastructure as Code, Terraform, automated testing, SonarQube, and CI/CD pipelines.
* **Vidya:** Are you still training people on AI?
* **Rufat:** Yes, I run a Skool community helping engineers transition their skills.
* **Vidya:** You're a Senior DevOps/SRE Architect with deep AI expertise. Why are you applying for traditional DevOps roles instead of dedicated AI roles?
* **Rufat:** The AI community work is mostly volunteer work to help people navigate global job shifts. I make my living working on production systems and enterprise DevOps. When working for corporate clients, I stay quiet, focused, and deliver solutions without unnecessary distraction.
* **Vidya:** Great to hear. You clearly have broad expertise spanning legacy infrastructure, modern cloud platforms, and AI. I'll share my feedback with the team so they can proceed with next steps.
* **Rufat:** Sounds fantastic. Thank you very much for your time!
* **Vidya:** Thank you, bye for now.

---

## 🔍 Key Qualitative Takeaways

1. **Enterprise Reality ("Pre-AI Era Mandate"):** Large UK enterprises are undergoing legacy-to-modern migrations (e.g. Backstage 2.0, Jenkins/Harness, Terraform, Vault on GKE), but explicitly mandate manual hands-on execution and forbid live AI automation in core pipelines.
2. **Certification vs. Production Cluster Mastery (H25 / H1):** Interviewer explicitly confirms that GKE certification badges are irrelevant if the candidate possesses hands-on cluster architecture and troubleshooting depth.
3. **Founder Bandwidth & Dual-Track Reality (H30):** Founder earns his living as an enterprise contractor ($1.3M+ track record) while running the AI Certification community in dedicated off-hours slots, demonstrating high-integrity professional compartmentalization.
4. **Contractor Posture (Listen More Than Speak — H29):** The contractor adapts to the enterprise client's comfort zone ("stay quiet, focused, and deliver solutions without unnecessary distraction") rather than forcing unwanted AI hype.
