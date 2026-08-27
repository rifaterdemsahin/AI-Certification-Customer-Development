// Shared site header/navigation, built once and injected into #site-header.
// Organizes links into logical groups (Hub / Stages / Strategy / Business Model / Growth / Components / Docs)
// and marks the current page's link as active based on the URL filename.
// Includes a global search index and a shared cookie note-taking mechanism.
(function () {
    var pathPrefix = '';
    if (location.pathname.includes('/5_Symbols/')) {
        pathPrefix = '../../';
    } else if (location.pathname.includes('/discovery/')) {
        pathPrefix = '../';
    }

    var currentFile = (location.pathname.split('/').pop() || 'index.html');
    if (currentFile === '') currentFile = 'index.html';

    // Apply saved theme as early as possible to minimize flash of the wrong theme.
    (function applyInitialTheme() {
        var match = document.cookie.match(/(?:^|; )site_theme=([^;]*)/);
        var theme = match ? decodeURIComponent(match[1]) : 'dark';
        if (theme === 'light' && document.body) {
            document.body.classList.add('light-theme');
        }
    })();

    // [href, label] pairs. Query-string hrefs are matched by their base filename + src param.
    var groups = [
        { type: 'link', href: 'index.html', label: 'Hub', emoji: '🏠', className: 'nav-hub' },
        {
            type: 'dropdown', label: 'Favorites', emoji: '⭐', className: 'nav-favorites', items: [
                ['5_Symbols/cd/cohort-session-9-analysis.html', '🎙️ Cohort Session 9 Analysis'],
                ['5_Symbols/dashboard/content-kanban-release-schedule.html', '📋 Content Kanban &amp; Release Schedule'],
                ['5_Symbols/growth/daily-community-promotion-templates.html', '📢 Daily Promo Templates'],
                ['5_Symbols/dashboard/weekly-todos.html', '🗓️ Weekly Todos'],
                ['5_Symbols/strategy/when-to-pivot.html', '🔄 When to Pivot (Triggers & Thresholds)'],
                ['5_Symbols/cd/cd-interview-recording.html', '📝 Discovery Interview Recorder'],
                ['5_Symbols/comp/comp-mvp-separation.html', '⚖️ MVP Product vs. Marketing'],
                ['5_Symbols/growth/reverse-response-marketing.html', '🔄 Reverse Response Marketing'],
                ['5_Symbols/growth/roger-rabbit-animation.html', '🐇 Roger Rabbit Animation Style'],
                ['5_Symbols/bmc/business-model-canvas.html', '🖼️ Business Model Canvas'],
                ['5_Symbols/hypotheses/hypothesis.html', '💭 Hypothesis Tracker'],
                ['5_Symbols/dashboard/confidence-report.html', '🧪 Confidence Report'],
                ['5_Symbols/dashboard/how-to-move-the-score.html', '📈 How to Move the Score'],
                ['5_Symbols/dashboard/latest-pages.html', '✨ Latest Pages'],
                ['5_Symbols/dashboard/project-stats.html', '📊 Project Stats'],
                ['5_Symbols/cd/cd-interview-guide.html', '🎤 Interview Guide'],
                ['5_Symbols/dashboard/todo.html', '✅ Task List']
            ]
        },
        {
            type: 'dropdown', label: 'Stages', emoji: '🗺️', className: 'nav-stages', items: [
                ['5_Symbols/stages/stage-scoring-roadmap.html', '📊 Stage Scores &amp; Roadmap'],
                ['5_Symbols/stages/stage-customer-discovery.html', '🔍 1. Discovery'],
                ['5_Symbols/stages/stage-customer-validation.html', '📈 2. Validation'],
                ['5_Symbols/stages/stage-customer-creation.html', '⚡ 3. Creation'],
                ['5_Symbols/stages/stage-company-building.html', '🏢 4. Building']
            ]
        },
        {
            type: 'dropdown', label: 'Discovery Process', emoji: '📍', className: 'nav-discovery', items: [
                ['5_Symbols/cd/cd-process.html', '📍 Process Overview'],
                ['5_Symbols/cd/cd-interview-guide.html', '🎤 Interview Guide'],
                ['5_Symbols/cd/cd-watering-holes.html', '🌐 Watering Holes &amp; Outreach'],
                ['5_Symbols/cd/cd-interview-recording.html', '📝 Interview Recording &amp; Tracker'],
                ['5_Symbols/cd/interview-hcl-devops-screen.html', '🎙️ HCL SRE/DevOps Screen (2026-08-24)'],
                ['5_Symbols/cd/cd-interview-pdf.html', '🖨️ 1-Page A4 Interview PDF'],
                ['5_Symbols/cd/cohort-session-9-analysis.html', '🎙️ Cohort Session 9 Analysis'],
                ['5_Symbols/cd/cohort-session-8-analysis.html', '🎙️ Cohort Session 8 Analysis'],
                ['5_Symbols/product/skool-membership-questions.html', '📝 Skool Membership Questions'],
                ['5_Symbols/product/cohort-session-permissions.html', '🔒 Cohort Session Permissions'],
                ['5_Symbols/cd/archived-interview-transcripts.html', '📂 Archived Transcripts'],
                ['5_Symbols/cd/cd-hypothesis-interview-questions.html', '🧪 Hypothesis Interview Questions'],
                ['5_Symbols/cd/cd-hypotheses.html', '💭 1. Hypothesis'],
                ['5_Symbols/cd/cd-hyp-product.html', '&nbsp;&nbsp;↳ 📦 Product Hypothesis'],
                ['5_Symbols/cd/cd-hyp-customer-problem.html', '&nbsp;&nbsp;↳ 👥 Customer &amp; Problem Hypothesis'],
                ['5_Symbols/cd/cd-hyp-distribution-pricing.html', '&nbsp;&nbsp;↳ 💰 Distribution &amp; Pricing Hypothesis'],
                ['5_Symbols/cd/cd-hyp-demand-creation.html', '&nbsp;&nbsp;↳ 📣 Demand Creation Hypothesis'],
                ['5_Symbols/cd/cd-hyp-market-type.html', '&nbsp;&nbsp;↳ 🏛️ Market Type Hypothesis'],
                ['5_Symbols/cd/cd-hyp-competitive.html', '&nbsp;&nbsp;↳ ⚔️ Competitive Hypothesis'],
                ['5_Symbols/cd/cd-test-problem.html', '🧪 2. Test Problem Hypothesis'],
                ['5_Symbols/cd/cd-tp-first-contacts.html', '&nbsp;&nbsp;↳ 🤝 First Contacts'],
                ['5_Symbols/cd/cd-tp-problem-presentation.html', '&nbsp;&nbsp;↳ 📊 Problem Presentation'],
                ['5_Symbols/cd/cd-tp-customer-understanding.html', '&nbsp;&nbsp;↳ 🧠 Customer Understanding'],
                ['5_Symbols/cd/cd-tp-market-knowledge.html', '&nbsp;&nbsp;↳ 🌐 Market Knowledge'],
                ['5_Symbols/cd/cd-test-product.html', '🛠️ 3. Test Product Hypothesis'],
                ['5_Symbols/cd/cd-tpr-first-reality-check.html', '&nbsp;&nbsp;↳ ⚠️ First Reality Check'],
                ['5_Symbols/cd/cd-tpr-product-presentation.html', '&nbsp;&nbsp;↳ 🖥️ Product Presentation'],
                ['5_Symbols/cd/cd-tpr-more-customer-visits.html', '&nbsp;&nbsp;↳ 👥 More Customer Visits'],
                ['5_Symbols/cd/cd-tpr-second-reality-check.html', '&nbsp;&nbsp;↳ ⚠️ Second Reality Check'],
                ['5_Symbols/cd/cd-verify.html', '🏁 4. Verify'],
                ['5_Symbols/cd/cd-verify-product.html', '&nbsp;&nbsp;↳ 🛠️ Verify The Product'],
                ['5_Symbols/cd/cd-verify-problem.html', '&nbsp;&nbsp;↳ 🛑 Verify The Problem'],
                ['5_Symbols/cd/cd-verify-business-model.html', '&nbsp;&nbsp;↳ 📊 Verify The Business Model'],
                ['5_Symbols/cd/cd-verify-iterate-exit.html', '&nbsp;&nbsp;↳ 🚪 Iterate Or Exit']
            ]
        },
        {
            type: 'dropdown', label: 'Strategy', emoji: '🎯', className: 'nav-strategy', items: [
                ['5_Symbols/strategy/why-ai-cert-agentic-dev.html', '🤖 Why Agentic CustDev (Antigravity+Grok)'],
                ['5_Symbols/strategy/when-to-pivot.html', '🔄 When to Pivot (Thresholds)'],
                ['5_Symbols/strategy/raise.html', '🚀 R.A.I.S.E.'],
                ['motivation.html', '🔥 Motivation'],
                ['5_Symbols/strategy/passion.html', '❤️ Passion &amp; Self-Learning'],
                ['5_Symbols/hypotheses/hypothesis.html', '💭 Hypothesis'],
                ['5_Symbols/strategy/focus.html', '🎯 Focus'],
                ['5_Symbols/strategy/target-audience.html', '👥 Target Audience'],
                ['5_Symbols/strategy/audience-transformation.html', '🔄 Audience Transformation (Input/Output)'],
                ['5_Symbols/strategy/structure-transformation-leadership.html', '🏛️ Structure, Transformation &amp; Leadership'],
                ['5_Symbols/strategy/delivery-pilot-roadmap.html', '🧑‍✈️ Delivery Pilot Roadmap'],
                ['5_Symbols/strategy/what-does-delivery-pilot-mean.html', '🧑‍✈️ What Does "Delivery Pilot" Mean?'],
                ['5_Symbols/strategy/pain-points.html', '🎭 Customer Pain Points'],
                ['5_Symbols/strategy/risk-analysis.html', '⚠️ Risk Analysis'],
                ['5_Symbols/strategy/practice-exams-gap.html', '⚠️ Practice Exam Gap'],
                ['5_Symbols/strategy/requirements.html', '📋 Requirements'],
                ['exam-topics.html', '📚 Exam Topic Blueprint'],
                ['5_Symbols/strategy/business-plan-summary.html', '📄 Business Plan Summary'],
                ['5_Symbols/strategy/competitive-analysis.html', '⚔️ Competitive Analysis'],
                ['5_Symbols/strategy/evidence-map.html', '🔍 Evidence Map'],
                ['5_Symbols/strategy/signal-versus-noise.html', '📡 Signal versus Noise'],
                ['5_Symbols/product/exam-performance-evidence.html', '📊 Candidate Exam Performance Evidence'],
                ['5_Symbols/hypotheses/hypothesis-connectivity.html', '🔀 Hypothesis Connectivity'],
                ['5_Symbols/hypotheses/h1-not-connected.html', '🟡 Why H1 Sits Alone'],
                ['5_Symbols/strategy/single-founder-bandwidth.html', '🧑‍💻 Single-Founder Bandwidth'],
                ['5_Symbols/strategy/listen-more-than-you-speak.html', '👂 Listen More Than You Speak'],
                ['5_Symbols/strategy/make-it-about-them.html', '🎯 Make It About Them (Not You)'],
                ['5_Symbols/strategy/being-useful-for-the-other.html', '🤝 Being Useful for the Other'],
                ['5_Symbols/strategy/1-1-presets-pivot.html', '🎛️ 1-1 Presets: 500-Repo Pivot'],
                ['5_Symbols/strategy/reading-and-learning-guardrails.html', '📖 Reading & Learning Guardrails'],
                ['5_Symbols/strategy/the-castle-complexity-kills.html', '🏰 The Castle (Kafka: Complexity Kills)'],
                ['5_Symbols/strategy/the-bed-of-procrustes.html', '🛏️ The Bed of Procrustes (Petrescu: Perception)'],
                ['5_Symbols/strategy/the-brothers-karamazov.html', '⚖️ The Brothers Karamazov (Dostoevsky: Emotions)'],
                ['5_Symbols/product/vc-deck.html', '🎤 VC Deck'],
                ['5_Symbols/product/vc-feedback.html', '🏦 VC Constructive Feedback'],
                ['5_Symbols/product/chatgpt-investor-feedback.html', '🤖 ChatGPT Investor Feedback'],
                ['5_Symbols/strategy/alex-hormozi-agent.html', '🏋️ Alex Hormozi Agent'],
                ['5_Symbols/strategy/one-vs-many-live.html', '🏟️ 1-1 vs One Live Class'],
                ['5_Symbols/strategy/leverages.html', '🏋️ Leverages & Unfair Advantages'],
                ['5_Symbols/product/pitch-deck.html', '📋 5-Minute Pitch Deck'],
                ['5_Symbols/product/one-pager.html', '📋 Copy-Paste One-Pager'],
                ['5_Symbols/product/idea.html', '💡 Tell Us About Your Idea'],
                ['5_Symbols/strategy/market-reality-check.html', '⚖️ Market Reality Check'],
                ['5_Symbols/strategy/second-brain.html', '🧠 AI at the Core: Second Brain'],
                ['5_Symbols/strategy/why-certification.html', '🏅 Why Certification Matters'],
                ['5_Symbols/strategy/enterprise-demanded-certifications.html', '🎯 Enterprise Demanded Certifications'],
                ['5_Symbols/strategy/cert-value-ai-era.html', '🎓 Cert Value in the AI Era'],
                ['5_Symbols/strategy/perception-of-ai.html', '🔍 Perception of AI: Skeptical View'],
                ['5_Symbols/strategy/ai-job-creation-vs-apocalypse.html', '⚡ AI Job Creation vs. Apocalypse'],
                ['5_Symbols/strategy/skills-gap.html', '💼 Enterprise AI Skills Gap'],
                ['5_Symbols/product/self-assessment.html', '🧭 Self-Assessment'],
                ['5_Symbols/product/discovery-journey.html', '🧭 The Discovery Journey'],
                ['5_Symbols/strategy/moat.html', '🛡️ Defensive Capabilities & Moat'],
                ['5_Symbols/strategy/maot.html', '✨ MAOT Framework'],
                ['5_Symbols/strategy/claude-partner-strategy.html', '🤝 Claude Partner Strategy'],
                ['5_Symbols/strategy/multi-platform-workflow.html', '🌐 Multi-Platform Workflow'],
                ['5_Symbols/strategy/student-success.html', '🎓 Student Success &amp; Outcomes'],
                ['5_Symbols/strategy/success-stories.html', '🌟 Success Stories &amp; Careers'],
                ['5_Symbols/strategy/enterprise-partnerships.html', '🏢 Enterprise Partnerships &amp; B2B'],
                ['5_Symbols/product/dictionary.html', '📖 Dictionary & Glossary']
            ]
        },
        {
            type: 'dropdown', label: 'Business Model', emoji: '📊', className: 'nav-business', items: [
                ['5_Symbols/bmc/business-model-canvas.html', '🖼️ Business Model Canvas'],
                ['5_Symbols/bmc/bmc-capital-relationships.html', '⚙️ Capital Relationships'],
                ['5_Symbols/bmc/surplus-value.html', '💰 Surplus Value Creation'],
                ['5_Symbols/bmc/value-proposition.html', '💎 Value Proposition'],
                ['5_Symbols/bmc/bmc-customer-segments.html', '👥 Customer Segments'],
                ['5_Symbols/bmc/bmc-channels.html', '📣 Channels'],
                ['5_Symbols/bmc/bmc-customer-relationships.html', '🤝 Customer Relationships'],
                ['5_Symbols/bmc/bmc-revenue-streams.html', '💰 Revenue Streams'],
                ['5_Symbols/bmc/bmc-key-resources.html', '🏗️ Key Resources'],
                ['5_Symbols/bmc/bmc-key-activities.html', '⚙️ Key Activities'],
                ['5_Symbols/bmc/bmc-key-partners.html', '🤝 Key Partners'],
                ['5_Symbols/bmc/bmc-cost-structure.html', '📉 Cost Structure'],
                ['5_Symbols/product/partners.html', '🤝 Partner With Us'],
                ['5_Symbols/product/exam-prep-product.html', '📦 Exam Prep Bundle ($29)'],
                ['5_Symbols/product/skool-lms-integration.html', '🏫 Skool LMS Integration'],
                ['5_Symbols/product/skool-roadmap.html', '🗺️ Skool Community &amp; Learning Roadmap'],
                ['5_Symbols/product/skool-founding-members.html', '🏫 Skool Steps & Founding Members'],
                ['5_Symbols/product/skool-community-golden-rules.html', '🌟 Golden Rules of Community Building'],
                ['5_Symbols/product/skool-4c.html', '🧭 4C — Cause, Culture, Container, Calls'],
                ['5_Symbols/product/skool-10-true-regulars.html', '🔟 10 True Regulars in Skool'],
                ['5_Symbols/product/free-vip.html', '👑 Free VIP Status &amp; Founder Pledge'],
                ['5_Symbols/product/skool-delivery-pilot-offer.html', '🚪 Delivery Pilot Offer'],
                ['5_Symbols/product/skool-about.html', '📝 Delivery Pilot About'],
                ['5_Symbols/product/skool-about-promo-video-script.html', '🎬 Skool About Promo Video Script & 8s Animations'],
                ['5_Symbols/product/skool-discoverability-keywords.html', '🔑 Discoverability Keywords'],
                ['5_Symbols/product/skool-visibility.html', '👁 Skool Visibility — Private vs Public'],
                ['5_Symbols/product/skool-availability.html', '📡 Skool Availability Check'],
                ['5_Symbols/product/skool-live-join.html', '🚪 How to Join the Sunday Call'],
                ['5_Symbols/product/skool-similar-communities.html', '🏛️ Similar Skool Communities'],
                ['5_Symbols/product/grow-skool-traffic.html', '🚀 Grow Your Skool Traffic'],
                ['5_Symbols/product/skool-monetization.html', '💰 How to Monetize Your Skool'],
                ['5_Symbols/product/skool-posting-sanity-check.html', '🛡️ Founder Posting Sanity Check'],
                ['5_Symbols/product/skool-static-posts.html', '📌 Static Posts & Anti-Spam (Living Hubs)'],
                ['5_Symbols/product/skool-workshop-upload.html', '🎬 2-Hour Workshop Upload Check'],
                ['5_Symbols/product/member-bandwidth-guardrails.html', '🛡️ Member Bandwidth Guardrails'],
                ['5_Symbols/product/skool-community-management.html', '🌱 Community Management (Garden)'],
                ['5_Symbols/product/skool-validation-speed-setup.html', '⚡ Skool Validation Speed Setup'],
                ['5_Symbols/product/community-rules-enforcement.html', '⚖️ Rules: Deletions, Bans &amp; Suspensions'],
                ['5_Symbols/product/skool-level-2-posting-restriction.html', '🔒 Level 2 Posting Restriction'],
                ['5_Symbols/product/skool-onboarding-checklist.html', '🚀 Onboarding Checklist Plugin'],
                ['5_Symbols/product/skool-orientation-video-script.html', '🎬 Orientation Video Script (8s Scenes)'],
                ['5_Symbols/product/member-onboarding.html', '🪜 Member Onboarding &amp; "What to Expect"'],
                ['5_Symbols/product/skool-manual-member-invites.html', '✉️ Manual Invites & Tier Switch'],
                ['5_Symbols/product/skool-payout-dashboard.html', '💳 Skool Payout Dashboard & Settlement'],
                ['5_Symbols/product/skool-new-joiner-welcome-and-faq.html', '👋 New Joiner Welcome &amp; FAQ'],
                ['5_Symbols/product/skool-audience-emails-and-event-triggers.html', '📬 Skool Audience Emails &amp; Event Triggers'],
                ['5_Symbols/product/skool-gamification-levels.html', '🏆 Skool Gamification &amp; Delivery Pilot L8/9'],
                ['5_Symbols/product/deliverypilot-net.html', '🌐 deliverypilot.net Portal']
            ]
        },
        {
            type: 'dropdown', label: 'Growth', emoji: '📈', className: 'nav-growth', items: [
                ['5_Symbols/growth/lead-qualification.html', '🎯 Lead Qualification Engine &amp; Scorecard'],
                ['5_Symbols/growth/lead-qualification-system.html', '🚫 Lead Qualification (Hormozi Funnel)'],
                ['5_Symbols/growth/truth-in-marketing-evidence.html', '⚖️ Truth in Marketing &amp; Evidence'],
                ['5_Symbols/growth/free-youtube-jab-jab-package.html', '🥊 Free YouTube Course (Jab Jab Left Hook)'],
                ['5_Symbols/growth/course-value-and-free-skool-package.html', '💎 $10k Course Market Value &amp; Free Skool Package'],
                ['5_Symbols/growth/monetization-to-value-creation.html', '🔁 Monetization to Value Creation ($10k Cycle)'],
                ['5_Symbols/growth/audience-roadmap.html', '🧭 Audience Transformation Roadmap'],
                ['5_Symbols/growth/mvp-roadmap.html', '🗺️ MVP Roadmap (How Jobs Get Created)'],
                ['5_Symbols/growth/sales-marketing-roadmap.html', '🗺️ Sales &amp; Marketing Roadmap'],
                ['5_Symbols/growth/sales-pipeline.html', '📊 Sales Pipeline'],
                ['5_Symbols/growth/conversion-strategy.html', '🎯 Conversion Strategy &amp; Tactics'],
                ['5_Symbols/growth/flywheel.html', '🔄 Flywheel'],
                ['5_Symbols/growth/organic-growth.html', '🔄 Organic Growth Strategy'],
                ['5_Symbols/growth/free-educational-content-strategy.html', '🎬 Free Educational Content Strategy'],
                ['5_Symbols/growth/course-curriculum-learning-objectives.html', '🎯 5-Min Video Curriculum &amp; LOs'],
                ['5_Symbols/growth/skool-break-even.html', '⚖️ Skool Break-Even &amp; $99 Milestone'],
                ['5_Symbols/growth/quality-gates.html', '🚪 Quality Gates'],
                ['5_Symbols/growth/stage-timelines.html', '📅 Stage Timelines'],
                ['5_Symbols/growth/90-day-execution-plan.html', '🗓️ 90-Day Execution Plan'],
                ['5_Symbols/dashboard/calendar.html', '🗓️ Milestone Calendar'],
                ['5_Symbols/growth/test-metrics.html', '📈 Test &amp; Metrics'],
                ['5_Symbols/growth/test-plan.html', '🧪 Test Plan'],
                ['5_Symbols/dashboard/todo.html', '✅ Task List'],
                ['5_Symbols/dashboard/weekly-todos.html', '🗓️ Weekly Todos'],
                ['5_Symbols/growth/content-analysis.html', '🎬 Content Analysis'],
                ['5_Symbols/growth/content-format.html', '🎬 Short vs Long Form'],
                ['5_Symbols/growth/glossary-short-pipeline.html', '🚂 1-Hour Train Glossary Pipeline (Print)'],
                ['5_Symbols/growth/youtube-shorts.html', '📱 YouTube Shorts (product for prospects)'],
                ['5_Symbols/growth/youtube-channel-metrics.html', '📺 YouTube Channel Metrics'],
                ['5_Symbols/growth/youtube-banner.html', '🖼️ YouTube Channel Top Banner'],
                ['5_Symbols/growth/cohort-prep.html', '🧰 Cohort Prep'],
                ['5_Symbols/growth/advertisement.html', '📣 Paid Advertisement'],
                ['5_Symbols/growth/when-to-advertise.html', '🚦 When to Start Paid Ads'],
                ['5_Symbols/growth/hormozi-vip-leadgen.html', '🏋️ Hormozi VIP Lead Gen'],
                ['5_Symbols/growth/funnel-math.html', '🧮 Funnel Math'],
                ['5_Symbols/growth/unit-economics.html', '💵 Unit Economics'],
                ['5_Symbols/growth/pricing-change-strategy.html', '📈 Pricing Change Strategy'],
                ['5_Symbols/growth/cost-side-model.html', '📉 Cost-Side Model'],
                ['5_Symbols/growth/validation-repeat-gate.html', '🚪 Validation Repeat Gate'],
                ['5_Symbols/growth/marketing-tactics.html', '📰 Marketing Tactics'],
                ['5_Symbols/growth/private-quiz-lead-magnet-tactic.html', '🕵️ Private Quiz Lead Magnet Tactic'],
                ['5_Symbols/growth/funfair-tokens.html', '🎡 Funfair Token System'],
                ['5_Symbols/growth/youtube-titles-skool-mapping.html', '🎯 YouTube Titles → Skool Mapping'],
                ['5_Symbols/growth/video-conversion-tactics.html', '🎬 Video End-Screen &amp; Conversion Tactics'],
                ['5_Symbols/growth/founder-voice-skool-cta.html', '🎙️ Founder Voice vs AI Voice'],
                ['5_Symbols/growth/daily-community-promotion-templates.html', '📢 Daily Skool &amp; Sunday Promo Templates'],
                ['5_Symbols/growth/reminder-formats.html', '🔔 Meeting &amp; Cohort Reminder Formats'],
                ['5_Symbols/growth/conversation-starters.html', '🗣️ Conversation Starters'],
                ['5_Symbols/growth/metrics-dashboard.html', '📊 Metrics Dashboard'],
                ['5_Symbols/growth/market-fit-channels.html', '🔄 Market Fit & Channels'],
                ['5_Symbols/growth/linkedin-premium-decision.html', '💼 LinkedIn Premium Decision'],
                ['5_Symbols/growth/linkedin-vip-cowork.html', '💼 LinkedIn 30k Cap &amp; VIP Cowork'],
                ['5_Symbols/growth/linkedin-stats.html', '📊 LinkedIn Page Analytics'],
                ['5_Symbols/growth/linkedin-newsletter.html', '📰 LinkedIn Newsletter: Skool &amp; Community'],
                ['5_Symbols/growth/skool-affiliate-roadmap.html', '🤝 Skool Affiliate Roadmap'],
                ['5_Symbols/growth/skool-churn-retention.html', '🛡️ Reducing Churn &amp; Retention'],
                ['5_Symbols/growth/skool-common-patterns.html', '🌟 Common Retention Patterns'],
                ['5_Symbols/growth/platform-relationships-and-payments.html', '🌐 Platform Ecosystem &amp; Payments'],
                ['5_Symbols/growth/future-sponsors.html', '🤝 Future Sponsors Roadmap'],
                ['5_Symbols/growth/reverse-response-marketing.html', '🔄 Reverse Response Marketing'],
                ['5_Symbols/growth/instagram-marketing-pipeline.html', '📱 Instagram Marketing Pipeline'],
                ['5_Symbols/growth/roger-rabbit-animation.html', '🐇 Roger Rabbit Animation Style'],
                ['5_Symbols/growth/inspirational-youtubers.html', '🌟 Inspirational YouTubers &amp; Benchmarks'],
                ['5_Symbols/growth/community-building-score.html', '🌱 Community &amp; Model Score'],
                ['5_Symbols/growth/turn-community-to-movement.html', '🔥 Turn Community to Movement'],
                ['5_Symbols/growth/ai-demo.html', '🤖 AI Prep Demo']
            ]
        },
        {
            type: 'dropdown', label: 'Execution', emoji: '🌪️', className: 'nav-execution', items: [
                ['5_Symbols/execution/4dx-execution-crisis.html', '🌪️ The Execution Crisis'],
                ['5_Symbols/execution/4dx-discipline-1.html', '🎯 1. Focus on WIG'],
                ['5_Symbols/execution/4dx-discipline-2.html', '⚖️ 2. Act on Leads'],
                ['5_Symbols/execution/4dx-discipline-3.html', '📊 3. Keep Scoreboard'],
                ['5_Symbols/execution/4dx-discipline-4.html', '🔄 4. Create Cadence'],
                ['5_Symbols/execution/eos-traction-alignment.html', '📘 EOS Traction Alignment (Wickman)']
            ]
        },
        {
            type: 'dropdown', label: 'Components', emoji: '🧩', className: 'nav-components', items: [
                ['5_Symbols/comp/comp-problem-solution.html', '🛑 Problem-Solution Fit'],
                ['5_Symbols/comp/comp-mvp.html', '📦 MVP'],
                ['5_Symbols/comp/comp-mvp-separation.html', '⚖️ MVP Product vs. Marketing'],
                ['5_Symbols/comp/comp-market.html', '🌐 Market &amp; Audience'],
                ['5_Symbols/comp/comp-business-model.html', '📊 Business Model'],
                ['5_Symbols/comp/comp-funnel.html', '📣 Funnel &amp; Channels'],
                ['5_Symbols/comp/comp-pmf.html', '💎 Product-Market Fit'],
                ['5_Symbols/comp/comp-roadmap.html', '🗺️ Sales &amp; Marketing Roadmap'],
                ['5_Symbols/comp/comp-creation-validation.html', '⚡ Creation Validation &amp; Triggers'],
                ['5_Symbols/comp/comp-scale-organization.html', '🏢 Scale Organization']
            ]
        },
        {
            type: 'dropdown', label: 'Docs', emoji: '📄', className: 'nav-docs', items: [
                ['markdown_renderer.html?src=README.md', '📖 README'],
                ['markdown_renderer.html?src=gemini.md', '🧠 Project Rationale'],
                ['markdown_renderer.html?src=agents.md', '🤖 AI Agent Guidelines'],
                ['markdown_renderer.html?src=HYPOTHESIS.md', '📊 Hypothesis Tracker Full Doc'],
                ['5_Symbols/dashboard/confidence-report.html', '🧪 Business Model Confidence Report'],
                ['5_Symbols/dashboard/how-to-move-the-score.html', '📈 How to Move the Score'],
                ['5_Symbols/dashboard/latest-pages.html', '📅 Latest Created/Updated Pages'],
                ['5_Symbols/dashboard/project-stats.html', '📊 Project Stats'],
                ['5_Symbols/dashboard/sitemap.html', '🗺️ Site Map'],
                ['5_Symbols/product/resources.html', '🌐 External Resources Directory'],
                ['markdown_renderer.html?src=reports/customer-discovery-ai-common-language-library-short-v1.0.0.md', '📚 AI Common Language Library Short v1.0'],
                ['markdown_renderer.html?src=reports/eos-traction-alignment-v1.0.0.md', '📘 EOS Traction Alignment Report v1.0'],
                ['markdown_renderer.html?src=reports/customer-discovery-private-quiz-lead-magnet-v1.0.0.md', '🕵️ Private Quiz Tactic Report v1.0'],
                ['markdown_renderer.html?src=reports/acidity-check-report-v1.4.0.md', '🧪 Acidity Check Report v1.4'],
                ['markdown_renderer.html?src=reports/acidity-check-report-v1.3.0.md', '🧪 Acidity Check Report v1.3 (Historical)'],
                ['markdown_renderer.html?src=reports/acidity-check-report-v1.2.0.md', '🧪 Acidity Check Report v1.2 (Historical)'],
                ['markdown_renderer.html?src=reports/acidity-check-report-v1.1.0.md', '🧪 Acidity Check Report v1.1 (Historical)'],
                ['markdown_renderer.html?src=reports/acidity-check-report-v1.0.md', '🧪 Acidity Check Report v1.0 (Historical)'],
                ['markdown_renderer.html?src=reports/market-validation-argument-v1.0.md', '⚖️ Market Validation Argument'],
                ['markdown_renderer.html?src=reports/ai-adoption-and-skills-gap-v1.0.md', '🤖 AI Adoption &amp; Skills Gap'],
                ['markdown_renderer.html?src=reports/exam-prep-market-and-student-behavior-v1.8.0.md', '🧠 Exam Prep &amp; Student Behavior'],
                ['markdown_renderer.html?src=reports/exam-prep-market-and-student-behavior-v1.7.0.md', '🧠 Exam Prep &amp; Student Behavior v1.7 (Historical)'],
                ['markdown_renderer.html?src=reports/exam-prep-market-and-student-behavior-v1.6.0.md', '🧠 Exam Prep &amp; Student Behavior v1.6 (Historical)'],
                ['markdown_renderer.html?src=reports/exam-prep-market-and-student-behavior-v1.5.0.md', '🧠 Exam Prep &amp; Student Behavior v1.5 (Historical)'],
                ['markdown_renderer.html?src=reports/exam-prep-market-and-student-behavior-v1.4.0.md', '🧠 Exam Prep &amp; Student Behavior v1.4 (Historical)'],
                ['markdown_renderer.html?src=reports/exam-prep-market-and-student-behavior-v1.3.0.md', '🧠 Exam Prep &amp; Student Behavior v1.3 (Historical)'],
                ['markdown_renderer.html?src=reports/exam-prep-market-and-student-behavior-v1.2.0.md', '🧠 Exam Prep &amp; Student Behavior v1.2 (Historical)'],
                ['markdown_renderer.html?src=reports/tam-sam-som-verification-v1.0.md', '🔍 TAM/SAM/SOM Verification'],
                ['markdown_renderer.html?src=reports/raise-validation-perplexity-v1.0.0.md', '⚖️ Perplexity R.A.I.S.E. Validation'],
                ['markdown_renderer.html?src=reports/founder-voice-skool-cta-v1.0.0.md', '🎙️ Founder Voice vs AI Voice v1.0'],
                ['markdown_renderer.html?src=reports/customer-discovery-sude-unal-interview-v1.0.0.md', '👤 Sude Ünal CD Interview v1.0'],
                ['markdown_renderer.html?src=reports/customer-discovery-marianna-pedagogy-first-principles-v1.0.0.md', '👤 Marianna Pedagogy &amp; First Principles CD v1.0'],
                ['markdown_renderer.html?src=reports/customer-discovery-marianna-voice-roger-rabbit-v1.0.0.md', '👤 Marianna Voice + Roger Rabbit CD v1.0'],
                ['markdown_renderer.html?src=reports/customer-discovery-cheuk-ho-interview-v1.0.0.md', '👤 Cheuk Ho CD Interview v1.0'],
                ['markdown_renderer.html?src=reports/customer-discovery-mehmet-interview-v1.0.0.md', '👤 Mehmet CD Interview v1.0'],
                ['markdown_renderer.html?src=reports/customer-discovery-jamal-interview-v1.0.0.md', '👤 Jamal CD Interview v1.0'],
                ['markdown_renderer.html?src=reports/customer-discovery-b-interview-v1.0.0.md', '👤 B. CD Interview v1.0'],
                ['markdown_renderer.html?src=reports/customer-discovery-hcl-devops-interview-v1.0.0.md', '🎙️ HCL DevOps Screen CD Interview v1.0'],
                ['markdown_renderer.html?src=reports/customer-discovery-charles-interview-v1.0.0.md', '👤 Charles CD Interview v1.0'],
                ['markdown_renderer.html?src=reports/customer-discovery-anna-interview-v1.0.0.md', '👤 Anna CD Interview v1.0'],
                ['markdown_renderer.html?src=reports/customer-discovery-marianna-interview-v1.0.0.md', '👤 Marianna CD Interview v1.0'],
                ['markdown_renderer.html?src=reports/customer-discovery-brian-interview-v1.1.0.md', '👤 Brian CD Interview v1.1'],
                ['markdown_renderer.html?src=reports/customer-discovery-brian-interview-v1.0.0.md', '👤 Brian CD Interview v1.0 (Historical)'],
                ['markdown_renderer.html?src=reports/customer-discovery-tomiwa-interview-v1.1.0.md', '👤 Tomiwa CD Interview v1.1'],
                ['markdown_renderer.html?src=reports/customer-discovery-rakesh-interview-v1.0.0.md', '👤 Rakesh CD Interview v1.0'],
                ['markdown_renderer.html?src=reports/customer-discovery-apo-interview-v1.0.0.md', '👤 Apo CD Interview v1.0'],
                ['markdown_renderer.html?src=reports/customer-discovery-baran-g-interview-v1.0.0.md', '👤 Baran G CD Interview v1.0'],
                ['markdown_renderer.html?src=reports/chatgpt-narrative-and-investor-feedback-v1.0.0.md', '🤖 ChatGPT Investor Feedback v1.0'],
                ['markdown_renderer.html?src=reports/cohort-session-8-analysis-v1.0.0.md', '🎙️ Cohort Session 8 Deep Dive v1.0'],
                ['markdown_renderer.html?src=reports/skool-pricing-feedback-v1.0.0.md', '💬 Skool Pricing Feedback v1.0'],
                ['markdown_renderer.html?src=reports/skool-availability-v1.0.0.md', '📡 Skool Availability v1.0'],
                ['markdown_renderer.html?src=reports/score-fluctuation-analysis-v1.0.0.md', '📈 Score Fluctuation Analysis v1.0']
            ]
        },
        {
            type: 'dropdown', label: 'References', emoji: '📎', className: 'nav-references', items: [
                ['business-overview.html', '📝 Business Overview (One-Pager)']
            ]
        }
    ];

    // Search Index representing all pages for full-text and tag matching
    var searchIndex = [
        { url: 'markdown_renderer.html?src=reports/customer-discovery-sude-unal-interview-v1.0.0.md', title: 'Customer Discovery Report: Sude Ünal Interview', desc: 'Qualitative analysis of Sude Ünal discovery feedback on weekday cohort demand, Obsidian Second Brain hybrid RAG, multi-stage parallelization workflows, and environment inspection.', cat: 'Docs', tags: 'sude sude unal customer discovery interview weekday cohort live calls second brain obsidian rag hybrid search dense sparse bm25 parallelization workflow environment inspection verification post action h4 h5 h8 h10 h24 h29 h30 report' },
        { url: '5_Symbols/growth/private-quiz-lead-magnet-tactic.html', title: 'Private Quiz Assessment Lead Magnet Tactic', desc: 'Persuasion engineering & video lead magnet tactic: 7 psychological levers from CIA-style assessment scripts, Brian & Marianna discovery synthesis, and interactive quiz routing.', cat: 'Growth', tags: 'private quiz assessment lead magnet video script cia persuasion engineering brian marianna self assessment superpower blind spot roger rabbit dalinea qr code h2 h4 h5 h10 h21 h24 h28 h29 h30' },
        { url: 'markdown_renderer.html?src=3_Simulation/Interviews/interview_tuncer_300_videos_validation_2026-08-27.md', title: 'Field Note: Tuncer 300 Videos Will Not Convert in Validation', desc: 'Tuncer discovery fence: a 300-video backlog is Stage 3 catalog scale, not Stage 2 Skool conversion. Agrees with 224 views / 28 days.', cat: 'Docs', tags: 'tuncer 300 videos youtube shorts validation skool h32 h4 h5 h9 h13 field note' },
        { url: 'markdown_renderer.html?src=reports/customer-discovery-marianna-pedagogy-first-principles-v1.0.0.md', title: 'Customer Discovery Report: Marianna First Principles & Sub-60s Glossary Shorts', desc: 'Qualitative analysis of Marianna feedback on the Curse of Knowledge, Associate certification starting point, sub-60s first-principles glossary shorts, and empowering learners to feel smart.', cat: 'Docs', tags: 'marianna customer discovery interview first principles glossary shorts curse of knowledge associate certification feel smart not stupid audience empowerment pedagogical empathy roger rabbit fal.ai elevenlabs h2 h10 h24 h25 h29 h30 h1 h8 report' },
        { url: 'markdown_renderer.html?src=reports/customer-discovery-private-quiz-lead-magnet-v1.0.0.md', title: 'Customer Discovery Report: Private Quiz Lead Magnet Tactic v1.0', desc: 'Customer discovery synthesis and tactical report on assessment video lead magnets, psychological persuasion mechanics, and self-assessment routing.', cat: 'Docs', tags: 'private quiz lead magnet assessment video tactic report psychological persuasion engineering brian marianna cia tradecraft self assessment superpower blindspot h2 h4 h5 h10 h21 h24 h28 h29 h30 report' },
        { url: '5_Symbols/product/chatgpt-investor-feedback.html', title: 'ChatGPT Investor & Narrative Feedback', desc: 'Critical external assessment from ChatGPT Web Version: concept 8/10, market logic 8/10, investor readiness 6/10, 4 rewritten core cards, secret insight, and 6-step value stack.', cat: 'Product', tags: 'chatgpt investor feedback web version narrative 4 core cards secret insight visual ai education value stack tam sam som research and markets pearson vue gov uk vc pitch h1 h2 h3 h5 h6 h8 h12 h21' },
        { url: 'markdown_renderer.html?src=reports/chatgpt-narrative-and-investor-feedback-v1.0.0.md', title: 'ChatGPT Narrative & Investor Readiness Feedback Report v1.0.0', desc: 'Detailed report evaluating business model narrative, 4 core cards, TAM/SAM/SOM market sizing rigor, defensible secret insight, and cohort value stack.', cat: 'Docs', tags: 'chatgpt narrative investor readiness feedback report 4 core cards secret insight visual ai education value stack research and markets pearson vue gov uk h1 h2 h3 h5 h6 h8 h12 h21 report' },
        { url: 'markdown_renderer.html?src=reports/customer-discovery-marianna-voice-roger-rabbit-v1.0.0.md', title: 'Customer Discovery Report: Marianna Voice Clone + Roger Rabbit / Dalinea Signature', desc: 'Qualitative analysis of Marianna feedback to pair founder AI voice clone with dalinea Roger Rabbit mixed-reality animation for audience memorability, shipping fal.ai ElevenLabs studio.', cat: 'Docs', tags: 'marianna customer discovery interview dalinea roger rabbit founder ai voice clone fal.ai elevenlabs eleven-v3 memorable audience h2 h10 h17 h28 h29 h30 report' },
        { url: 'markdown_renderer.html?src=reports/customer-discovery-cheuk-ho-interview-v1.0.0.md', title: 'Customer Discovery Report: Cheuk Ho Interview', desc: 'Qualitative analysis of Cheuk Ho interview on AI-generated post fatigue, audience engagement friction, and written founder voice mandate.', cat: 'Docs', tags: 'cheuk cheuk ho customer discovery interview ai generated posts fatigue engagement friction founder voice authentic voice linkedin national grid h2 h4 h5 h10 h24 h28 h29 h30 report' },
        { url: 'markdown_renderer.html?src=reports/customer-discovery-mehmet-interview-v1.0.0.md', title: 'Customer Discovery Report: Mehmet Interview', desc: 'Qualitative analysis of Mehmet interview on "1k Short vs. 3dk Course", creator watering holes (Erhan Meydan, Suna & Akın), reverse response marketing, and £1,000 corporate vs D2C membership pricing.', cat: 'Docs', tags: 'mehmet customer discovery interview shorts reels micro format 1k short 3dk course erhan meydan suna akin reverse response marketing corporate 1000 pound d2c membership founder schedule time discipline h2 h3 h5 h10 h12 h21 h24 h28 h29 h30 report' },
        { url: '5_Symbols/dashboard/content-kanban-release-schedule.html', title: 'Content Kanban & 5-Minute Video Release Master Schedule', desc: 'Visual Kanban board and chronological 12-week video release calendar pairing 5-minute modular lessons with explicit Learning Objectives and Key Results.', cat: 'Dashboard', tags: 'kanban release schedule content calendar 5-minute video modular learning objectives key results okrs video production aug-video-animation-2 youtube skool lo kr h2 h4 h5 h10 h29 h30' },
        { url: '5_Symbols/growth/course-curriculum-learning-objectives.html', title: 'AI Course Curriculum & 5-Minute Video Learning Objectives (LOs & KRs)', desc: 'Modular 5-minute video blueprints pairing Learning Objectives (LOs) with Key Results (KRs) across Certified Associate, Developer, and Certified Architect tracks, linked to Content Locator.', cat: 'Growth', tags: 'course curriculum 5-minute video learning objectives key results okrs certified associate foundations developer track certified architect foundations claude architect professional content locator flywheel churn reduction single founder bandwidth h2 h4 h5 h10 h29 h30' },
        { url: '5_Symbols/strategy/enterprise-demanded-certifications.html', title: 'Enterprise Demanded Certifications & Job Spec Breakdown', desc: 'Breakdown of active 18-month M365 Copilot Solution Architect contract spec requiring MS-102, SC-401, AB-900, AB-100, AB-730, and the 2+ certification screening gate for enterprise AI.', cat: 'Strategy', tags: 'enterprise demanded certifications job spec microsoft 365 copilot solution architect 18-month contract paye uk ireland remote ms-102 sc-401 ab-900 ab-100 ab-730 copilot studio ai agents purview entra id security governance change management h1 h14 h25 h30' },
        { url: 'markdown_renderer.html?src=reports/customer-discovery-jamal-interview-v1.0.0.md', title: 'Customer Discovery Report: Jamal Interview', desc: 'Qualitative analysis of Jamal interview on Claude Architect Foundations exam failure (644/1000), study material deficit, and consulting firm (Accenture, IBM, Capgemini) $100 pass bonus & voucher sponsorship.', cat: 'Docs', tags: 'jamal customer discovery interview claude architect foundations exam failure 644 score accenture ibm capgemini consulting firm bonus 100 dollar bonus fee voucher sponsorship study deficit practice exam gap h12 h27 h8 h21 h25 h1 h3 h30 report' },
        { url: 'markdown_renderer.html?src=reports/customer-discovery-b-interview-v1.0.0.md', title: 'Customer Discovery Report: B. Interview', desc: 'Qualitative analysis of B. interview on burnout, work struggle, voluntary redundancy / exit, commitment to Anthropic qualification, and async video catch-up.', cat: 'Docs', tags: 'b b. customer discovery interview burnout voluntary redundancy exit anthropic qualification claude architect live cohort attendance friction async video replays cognitive overload stress work situation fde contractor h24 h29 h1 h5 h8 h25 h30 report' },
        { url: '5_Symbols/strategy/why-ai-cert-agentic-dev.html', title: 'Why Agentic Customer Development (Antigravity + Grok)', desc: 'Rationale, multi-agent triad architecture, and comprehensive pros & cons of running customer discovery via Antigravity, Grok, and the living git repository.', cat: 'Strategy', tags: 'why ai certification customer development agent antigravity grok deepmind xai rationale pros cons multi-agent architecture steve blank customer discovery second brain single founder leverage h23 h29 h30 h5 h8' },
        { url: '5_Symbols/growth/reminder-formats.html', title: 'Meeting & Cohort Reminder Formats (LinkedIn, X.com, WhatsApp)', desc: 'High-converting meeting reminder formats, countdown swipe files, and weekday/weekend cohort templates with one-click copy buttons and dynamic customizer.', cat: 'Growth', tags: 'meeting reminder reminder format linkedin x whatsapp countdown batch starting tomorrow weekday batch weekend batch copy buttons intune kashif claude architect skool cohort h5 h8 h29' },
        { url: '5_Symbols/strategy/make-it-about-them.html', title: 'Make It About Them, Not About You', desc: 'Post-mortem analysis of founder self-centricity (the Me-Trap), Hormozi value equation inversion, side-by-side comparison, and 5-point operational checklist.', cat: 'Strategy', tags: 'make it about them not about you founder ego me trap lecture fail post mortem hormozi value equation customer centricity dialogue h29 h24 h30 h5 h8' },
        { url: '5_Symbols/strategy/being-useful-for-the-other.html', title: 'Being Useful for the Other vs. Building Content for Yourself', desc: 'Process sanity checks on building for self vs being useful for the other: adding Associate courses alongside Architect, and transforming 450 repos into 1-1 preset solution menus.', cat: 'Strategy', tags: 'being useful for the other building content for yourself sanity check associate course architect course 450 repos 1-1 presets delivery menu curriculum laddering customer development steve blank h29 h24 h25 h30 h5' },
        { url: '5_Symbols/strategy/1-1-presets-pivot.html', title: '1-1 Session Presets: Turning 500 Repos into Curriculum', desc: 'How to resolve the Elon Musk (inventory waste) and Alan Watts (ego hungry ghost) critiques by converting 500 personal repositories into tailored 1-on-1 workshop presets and live curriculum.', cat: 'Strategy', tags: '1-1 presets pivot 500 repos elon musk inventory vanity alan watts hungry ghost ego curriculum scaffolding 1-on-1 workshops vip calendar ai security custom environment hitl second brain delivery pilot fde h30 h29 h5 h8' },
        { url: '5_Symbols/strategy/second-brain.html', title: 'AI at the Core: Second Brain Implementation & Niche Research', desc: 'Architecture, niche research, and customer discovery insights for placing AI at the core of personal knowledge management via 4-tier hybrid retrieval and PARA Obsidian vaults.', cat: 'Strategy', tags: 'second brain ai at the core niche research pkm obsidian para hybrid retrieval grep qdrant neo4j vector graph sude bora marianna customer discovery context window h5 h8 h20 h30' },
        { url: '5_Symbols/strategy/when-to-pivot.html', title: 'When to Pivot: Hypothesis Failure Thresholds & Timing', desc: 'Detailed decision triggers, falsification thresholds, timeout windows, and pivot vectors for Stage 1 & 2 hypotheses (H1, H2, H24, H3, H5, H4, H27, H21, H7, H8, H6).', cat: 'Strategy', tags: 'when to pivot pivot triggers hypothesis failure thresholds timeout deadlines red-line metrics h1 h2 h24 h3 h5 h4 h27 h21 h7 h8 h6 customer discovery validation lean steve blank strategy decision' },
        { url: '5_Symbols/strategy/the-castle-complexity-kills.html', title: 'The Castle (Kafka): Complexity Kills', desc: 'Bureaucracy and systemic inertia in business: keep architectures, onboarding, and pipelines simple and autonomous rather than building Kafka\'s Castle.', cat: 'Strategy', tags: 'kafka the castle complexity kills bureaucracy systemic inertia simplicity autonomy skool lean solo founder fde contractor h23 h29 h30 literature' },
        { url: '5_Symbols/strategy/the-bed-of-procrustes.html', title: 'The Bed of Procrustes: Branding is Perception', desc: 'Subjective reality and perception (Petrescu & Taleb): brand exists in the customer\'s mind; do not stretch customers to fit arbitrary product visions.', cat: 'Strategy', tags: 'bed of procrustes camil petrescu taleb subjective reality branding perception mental models customer discovery listen speak reverse response h24 h29 h25 literature' },
        { url: '5_Symbols/strategy/the-brothers-karamazov.html', title: 'The Brothers Karamazov: Emotions Move Money', desc: 'Human nature and irrationality (Dostoevsky): emotions move money while logic justifies; fear of obsolescence, status, and brotherhood drive tech purchases.', cat: 'Strategy', tags: 'brothers karamazov dostoevsky emotions move money irrationality psychology fear status brotherhood grand inquisitor funfair tokens h24 h3 h30 literature' },
        { url: '5_Symbols/strategy/passion.html', title: 'Passion: Self-Learning & Community', desc: 'The founder engine — self-learning through shifting professions, the 2023 Universal Credit turning point on poverty, and volunteering by listening without giving advice.', cat: 'Strategy', tags: 'passion self learning skill gaps professions shifting poverty universal credit 2023 family health volunteering listening no advice ai certification content community founder' },
        { url: '5_Symbols/cd/interview-hcl-devops-screen.html', title: 'HCL SRE & DevOps Technical Screen (Customer Discovery)', desc: 'Real-world technical screening transcript on enterprise "Pre-AI Era" manual execution mandate, certification irrelevance vs. cluster mastery (H25), and dual-track contractor model (H30).', cat: 'Discovery', tags: 'hcl devops sre technical screen interview vidya pushpa ruhat enterprise pre-ai era manual execution gke backstage terraform vault jenkins hands-on cluster mastery certification bifurcation dual track contractor founder bandwidth h1 h24 h25 h29 h30' },
        { url: 'markdown_renderer.html?src=reports/customer-discovery-hcl-devops-interview-v1.0.0.md', title: 'Customer Discovery Report: HCL DevOps Screen Interview', desc: 'Qualitative analysis of HCL SRE/DevOps technical screen on "Pre-AI Era" enterprise constraints, hands-on cluster proof vs cert badges, and dual-track contractor model.', cat: 'Docs', tags: 'hcl devops screen customer discovery interview pre-ai era manual execution gke backstage terraform vault jenkins hands-on cluster mastery dual-track contractor founder bandwidth h1 h24 h25 h29 h30 report' },
        { url: 'markdown_renderer.html?src=reports/founder-voice-skool-cta-v1.0.0.md', title: 'Founder Voice vs AI Voice v1.0.0', desc: 'Two independent viewers of AI Isn\'t a Bubble accepted the content and rejected an automated voice when selling Skool.', cat: 'Docs', tags: 'founder voice automated voice skool youtube 27jXA2V2Zio h2 h5 h29' },
        { url: 'markdown_renderer.html?src=reports/customer-discovery-charles-interview-v1.0.0.md', title: 'Customer Discovery Report: Charles Interview', desc: 'Qualitative analysis of Charles interview on "Cooking Steak: Low and Slow" learning philosophy, non-urgent AI needs for personal projects, and market bifurcation.', cat: 'Docs', tags: 'charles customer discovery interview cooking steak low and slow personal projects time pressure capgemini consultant learner psychology artisanal craft fun h24 h29 h1 h3 h8 h25 h30 report' },
        { url: 'markdown_renderer.html?src=reports/customer-discovery-anna-interview-v1.0.0.md', title: 'Customer Discovery Report: Anna Interview', desc: 'Qualitative analysis of Anna interview on 5-10-5 pacing methodology (5m demo, 10m execute, 5m Q&A), 3-task session duration caps (40–60 min), and cognitive overload guardrails.', cat: 'Docs', tags: 'anna customer discovery interview uwise cambridge professor ukrainian founder 5-10-5 methodology pacing duration cognitive overload fatigue sunday live cohort h29 h8 h2 h10 h5 h17 h24 report' },
        { url: 'markdown_renderer.html?src=reports/customer-discovery-marianna-interview-v1.0.0.md', title: 'Customer Discovery Report: Marianna Interview', desc: 'Qualitative analysis of Marianna customer interview on Sunday AI Brain collaborative labs, practical workshops programme co-creation, and flipped classroom pre-session short AI video primers.', cat: 'Docs', tags: 'marianna customer discovery interview maria testing lead compliance ai brain sunday practical workshops programme flipped classroom short ai videos tool primers installation dependencies h17 h2 h10 h30 h8 h29 report' },
        { url: 'markdown_renderer.html?src=reports/customer-discovery-brian-interview-v1.1.0.md', title: 'Customer Discovery Report: Brian Interview v1.1', desc: 'Qualitative analysis of Brian customer discovery interview on India and US timezone 1-1 coordination, study slot scarcity as forcing function, and failure-triggered course enrollment.', cat: 'Docs', tags: 'brian customer discovery interview timezone india usa timezone coordination 1-1 slots scarcity study timeline failure triggered post failure exam score rescue retake h5 h8 h24 h25 h29 h30 h1 h3 report' },
        { url: 'markdown_renderer.html?src=reports/customer-discovery-brian-interview-v1.0.0.md', title: 'Customer Discovery Report: Brian Interview (Historical)', desc: 'Qualitative analysis of Brian customer interview on skills paying bills, complex Kubernetes / CI-CD depth, reducing disposability, and client guide demand.', cat: 'Docs', tags: 'brian customer discovery interview skills pay bills kubernetes cicd disposability client guide rules fde contractor h30 h1 h25 h24 h12 h29 report' },
        { url: 'markdown_renderer.html?src=reports/customer-discovery-tomiwa-interview-v1.1.0.md', title: 'Customer Discovery Report: Tomiwa Interview v1.1', desc: 'Qualitative analysis of Tomiwa interview on clearing Claude Associate in 2 days, 1-month prep for Architect in September, skipping Developer, contractor upskilling ROI, 5-person AI team compression, and 2-year obsolescence window.', cat: 'Docs', tags: 'tomiwa customer discovery interview claude associate claude architect certification ladder bifurcation hands on contractor roi workforce shift fde 5 person team 2 year window h25 h1 h8 h21 h24 h29 h30 report' },
        { url: 'markdown_renderer.html?src=reports/customer-discovery-rakesh-interview-v1.0.0.md', title: 'Customer Discovery Report: Rakesh Interview', desc: 'Qualitative analysis of Rakesh interview on rising UK Employer National Insurance, permanent employment overhead inflation, and accelerating contractor / FDE demand.', cat: 'Docs', tags: 'rakesh customer discovery interview national insurance employment overhead taxes contractors fde ir35 h30 h12 h24 h1 report' },
        { url: 'markdown_renderer.html?src=reports/customer-discovery-apo-interview-v1.0.0.md', title: 'Customer Discovery Report: Apo Interview', desc: 'Qualitative analysis of Apo customer interview on business revenue uplift over paper credentials, Amazon FBA automation with Claude, and eliminating 100-tab noise.', cat: 'Docs', tags: 'apo customer discovery interview amazon fba e-commerce business revenue automation 100 tabs noise signal h1 h25 h29 h30 report' },
        { url: 'markdown_renderer.html?src=reports/customer-discovery-baran-g-interview-v1.0.0.md', title: 'Customer Discovery Report: Baran G Interview', desc: 'Qualitative analysis of Baran G customer interview on tabular AI agent automation, Excel data processing, time scarcity, and presentation outputs.', cat: 'Docs', tags: 'baran g customer discovery interview tabular excel agents time pressure emotional drivers h24 h17 h30 report' },
        { url: '5_Symbols/product/skool-new-joiner-welcome-and-faq.html', title: 'New Joiner Welcome Message & FAQ Guide', desc: 'Copy-paste founder welcome message template, 4-step new joiner roadmap, and comprehensive FAQ explaining $0 cost start, no coding background required, and self-learning to AI certification.', cat: 'Product', tags: 'skool new joiner welcome message template faq non technical zero cost start no coding required self learning ai tools get certified claude architect forward deployed engineer h5 h8 h29 h30' },
        { url: '5_Symbols/product/skool-audience-emails-and-event-triggers.html', title: 'Skool Audience Emails & Automated Event Triggers', desc: 'Real-world Skool transactional event reminder emails, 24h Sunday call alerts, member directory administration, and VIP tier settings.', cat: 'Product', tags: 'skool audience emails automated event reminder triggers sunday cohort session member settings vip tier notification timezone delivery pilot h5 h8 h29 h30' },
        { url: '5_Symbols/growth/community-building-score.html', title: 'Community Building & Business Model Confidence Score', desc: 'Detailed architectural connection between Skool community building, lecture-to-party pivot, 10 true regulars, and the numeric confidence score.', cat: 'Growth', tags: 'community building business model confidence score skool freemium peek sit in share screen lecture party listen speak 10 true regulars anti spam level 2 posting onboarding venture cafe cambridge triton square contractor fde h5 h8 h9 h20 h29 h30' },
        { url: '5_Symbols/growth/turn-community-to-movement.html', title: 'Turn Community to Movement: From Audience to Autonomous Alliance', desc: 'Strategic blueprint to evolve passive Skool members and YouTube lurkers into an active Forward Deployed Engineer contractor alliance co-bidding on enterprise contracts.', cat: 'Growth', tags: 'turn community to movement alliance fde forward deployed engineer contractor 10 true regulars autonomous leadership co bidding enterprise tender sunday live screen share derek sivers first follower h30 h29 h5 h8 h11' },
        { url: '5_Symbols/cd/cohort-session-9-analysis.html', title: 'AI Cohort Session 9 Analysis: Schedule & Pedagogical Overhaul', desc: 'Customer discovery analysis with Mariana, Brian & Anna: 60-min cap, 10-10-15 structure, 3-tier preset projects, and VIP 1-on-1 calendar slots.', cat: 'Discovery', tags: 'cohort session 9 simulation customer discovery schedule overhaul 60 min cap 10 10 15 structure preset projects foundational intermediate architect vip 1-on-1 anna mariana brian uwise cambridge togaf h5 h8 h24 h29 h30' },
        { url: '5_Symbols/cd/cohort-session-8-analysis.html', title: 'AI Cohort Session 8 Deep-Dive Analysis', desc: 'Customer discovery, lecture-to-party pivot, 100k-file Second Brain hybrid retrieval, autonomous prediction trading, and contractor financials.', cat: 'Discovery', tags: 'cohort session 8 simulation customer discovery second brain para grep qdrant neo4j postgres polymarket kalshi hermes telegram cloudflare zero trust contractor h5 h8 h20 h26 h29 h30' },
        { url: '5_Symbols/growth/lead-qualification.html', title: 'Dedicated Lead Qualification Engine & Candidate Scorecard', desc: 'Interactive candidate qualification scorecard, multi-channel triage rubrics (Skool, LinkedIn, YouTube, Enterprise), disqualification playbooks, and automated pipeline routing.', cat: 'Growth', tags: 'lead qualification dedicated candidate scorecard interactive assessment scoring matrix bant champ hormozi anti admittance skool membership intake triage disqualification playbooks fde contractor screening vip fast track jamal brian tomiwa cheuk h5 h8 h24 h29 h30' },
        { url: '5_Symbols/growth/lead-qualification-system.html', title: 'Lead Qualification & Anti-Admittance System (Hormozi Funnel)', desc: 'Filtering out low-commitment spectators before they enter Skool, creating value through scarcity and strict admittance criteria.', cat: 'Growth', tags: 'lead qualification anti admittance hormozi funnel gatekeeping skool membership screening true regulars h5 h30' },
        { url: '5_Symbols/growth/truth-in-marketing-evidence.html', title: 'Truth in Marketing: What Data We Promote vs. Protect', desc: 'Radical transparency on what data members put in, what outputs they take out, and what verified empirical truth we promote publicly while protecting privacy.', cat: 'Growth', tags: 'truth in marketing empirical data input output promote protect privacy anonymization b b. credly passes h5 h8 h29 h30' },
        { url: '5_Symbols/growth/free-youtube-jab-jab-package.html', title: 'Free YouTube Course: Jab, Jab, Left Hook & Roadmap Package', desc: 'Releasing 100% of course content free on YouTube one-by-one, using the roadmap and Skool community as the Left Hook package to shatter perceived value limits.', cat: 'Growth', tags: 'free youtube course jab jab left hook roadmap packaging perceived value garyvee hormozi skool community h2 h5 h10 h30' },
        { url: '5_Symbols/product/skool-gamification-levels.html', title: 'Skool Gamification Levels & Level 8/9 Delivery Pilot Graduation', desc: 'Scarcity and gamification architecture: only select few who complete roadmap reach Level 8 Delivery Pilot, and Level 9 alumni bring new engineers into the ecosystem.', cat: 'Business Model', tags: 'skool gamification levels level 8 delivery pilot level 9 alumni mentor viral growth referrals maot h5 h8 h20 h30' },
        { url: '5_Symbols/growth/free-educational-content-strategy.html', title: 'Free Educational Content Strategy', desc: 'Promote open-source platform code on GitHub and animated tutorials on YouTube using Google Flow and custom AI voiceovers with zero financial cash burn.', cat: 'Growth', tags: 'free educational content github youtube open source google flow ai voiceover zero cash burn sweat equity h2 h10' },
        { url: '5_Symbols/growth/skool-break-even.html', title: 'Skool Break-Even & Pricing Evolution', desc: 'Financial cost recovery model for Skool $99/mo fixed fee across preview and cohort tiers, plus the milestone gate to transition pricing to $99/mo.', cat: 'Growth', tags: 'skool break even cost recovery unit economics milestone 99 month transition pricing freemium h5 h9' },
        { url: '5_Symbols/strategy/multi-platform-workflow.html', title: 'Multi-Platform Workflow & Customer Journey', desc: 'Connecting Google services, GitHub codebase, YouTube traffic engine, and Skool community into an end-to-end customer journey.', cat: 'Strategy', tags: 'multi platform workflow customer journey google flow github youtube skool orchestration pipeline h5 h30' },
        { url: '5_Symbols/strategy/student-success.html', title: 'Student Success & Tangible Outcomes', desc: 'Tracking core engineering outcomes: Claude Architect pass rates, £500–£1,000/day contractor placements, GitHub portfolios, and recruiter conversions.', cat: 'Strategy', tags: 'student success tangible outcomes cert pass rate contractor daily rate github proof of work recruiter placement retention h8 h30' },
        { url: '5_Symbols/strategy/success-stories.html', title: 'Success Stories & Career Transformations', desc: 'Real member proof (Sude, Marianna, Charles) getting certified and landing high-paying jobs as an organic marketing growth engine.', cat: 'Strategy', tags: 'success stories case studies sude marianna charles career transformation job offer marketing proof viral loop contractor certification h5 h8 h20 h30' },
        { url: '5_Symbols/strategy/enterprise-partnerships.html', title: 'Enterprise Partnerships & B2B Expansion', desc: 'Leveraging audience scale and student success stories to secure bulk corporate training contracts and high-value developer brand sponsorships.', cat: 'Strategy', tags: 'enterprise partnerships b2b expansion corporate training brand sponsorships partner network anthropic cambridge marianna h12 h17 h18' },
        { url: '5_Symbols/growth/platform-relationships-and-payments.html', title: 'Platform Ecosystem & Payment Settlement Architecture', desc: 'Detailed roles of YouTube, LinkedIn, and Skool in the acquisition-delivery funnel, and how Delivery Pilot settles all member and cohort payments via Stripe.', cat: 'Growth', tags: 'platform relationships payments organization delivery pilot youtube linkedin skool stripe settlement merchant banking h4 h5 h7 h12 h30' },
        { url: '5_Symbols/growth/future-sponsors.html', title: 'Future Sponsors & Strategic Sponsorship Roadmap', desc: 'Stage-gated sponsorship strategy for Stage 3/4 covering AI developer tooling, cloud providers, recruiter placements, and ethical guardrails.', cat: 'Growth', tags: 'future sponsors monetization sponsorships stage 3 4 brand partners cursor anthropic cloud recruiter placements advertising h13 h16' },
        { url: '5_Symbols/growth/glossary-short-pipeline.html', title: '1-Hour Train Glossary Pipeline', desc: 'Printable A4: Term → Gemini → Flow → Canva → Post. One commute hour per common-language library Short.', cat: 'Growth', tags: 'pipeline gemini flow canva train glossary short print memorize h2 h4 h28' },
        { url: '5_Symbols/growth/content-format.html', title: 'Content Format: Short vs Long Form', desc: 'Where animated videos, workshops, and course-based videos live on YouTube, LinkedIn, and Skool — with the rationale for each.', cat: 'Growth', tags: 'short form long form youtube shorts linkedin skool animated workshop course format placement' },
        { url: '5_Symbols/growth/sales-marketing-roadmap.html', title: 'Sales & Marketing Roadmap', desc: 'Maps the 7-cohort Skool curriculum sequence (Foundations through Second Brain) to funnel stages, offers, and multi-cert expansion.', cat: 'Growth', tags: 'sales marketing roadmap skool cohorts curriculum funnel sequence forward deployed engineering second brain' },
        { url: '5_Symbols/strategy/practice-exams-gap.html', title: 'Practice Exam & Question Bank Gap', desc: 'Analysis of the critical product gap (lack of blueprint-mapped practice exams) and mitigation roadmap.', cat: 'Strategy', tags: 'practice exams question banks mock test blueprint validation gap risk' },
        { url: '5_Symbols/execution/4dx-execution-crisis.html', title: 'The Execution Crisis Overview', desc: '4DX overview hub mapping whirlwind vs strategic goals.', cat: 'Execution', tags: '4dx execution crisis whirlwind strategy roadmap overview' },
        { url: '5_Symbols/product/skool-lms-integration.html', title: 'Skool LMS & Community Integration', desc: 'Rationale, stage-by-stage playbook, and risks of utilizing Skool as the off-the-shelf LMS/community platform.', cat: 'Business Model', tags: 'skool lms platform community tools validation member cohort' },
        { url: '5_Symbols/product/skool-vs-youtube.html', title: 'Skool vs. YouTube Course Delivery', desc: 'Comparison of Skool vs. YouTube for course delivery, highlighting structured community learning vs. open media platforms.', cat: 'Business Model', tags: 'skool youtube platform comparison classroom community monetization channels' },
        { url: '5_Symbols/product/youtube-skool-handoff.html', title: 'YouTube / LinkedIn → Skool Audience Handoff', desc: 'Fixed order: YouTube and LinkedIn acquire; CTAs hand off; Skool delivers Classroom, forum, calendar, and billing as Stage 2 only.', cat: 'Business Model', tags: 'youtube skool handoff acquisition delivery linkedin order funnel stage 2 lms' },
        { url: '5_Symbols/product/skool-posting-sanity-check.html', title: 'Skool Founder Posting Sanity Check', desc: 'Verdict on founder-only board posting and Classroom build: right for Stage 2 if paired with warm invites; board is not acquisition.', cat: 'Business Model', tags: 'skool posting sanity check founder community board invite warm cohort stage 2' },
        { url: '5_Symbols/product/skool-static-posts.html', title: 'Skool Static Posts & Anti-Spam (Living Hubs)', desc: 'Operational guidelines and copy-paste rewrites for Skool static anchor posts, append-only comment streams, and community resource curation.', cat: 'Business Model', tags: 'skool static posts living hubs anti-spam comments stream curation great resources self learning rakesh h5 h8 h29 h30' },
        { url: '5_Symbols/product/skool-workshop-upload.html', title: '2-Hour Workshop Upload Sanity Check', desc: 'Upload the Sunday 2-hour workshop to Skool Classroom as the replay archive, not the course, and never as a public YouTube video.', cat: 'Business Model', tags: 'skool workshop upload replay classroom 2 hour sunday recording timestamps h5 h10' },
        { url: '5_Symbols/product/skool-founding-members.html', title: 'Skool Steps & Founding Members', desc: 'Skool community-course checklist (9 steps) with Marianna, Sude, and B. named as the first 3 founding members.', cat: 'Business Model', tags: 'skool founding members marianna sude b b. first 3 community course steps 10 true regulars' },
        { url: '5_Symbols/product/skool-4c.html', title: '4C — Cause, Culture, Container, Calls', desc: 'Community architecture map: Cause (Delivery Pilot contractor path), Culture (golden rules / listen), Container (Skool LMS), Calls (Sunday + Monday VIP). Relates existing pages; not a new product.', cat: 'Business Model', tags: '4c cause culture container calls skool community sunday live golden rules lms delivery pilot h5 h8 h29 h30' },
        { url: '5_Symbols/product/skool-community-golden-rules.html', title: 'Golden Rules of Community Building', desc: 'Skool\'s 3 golden rules — don\'t lecture, build friendships, curate culture — mapped onto Delivery Pilot as the playbook from founding members to 10 true regulars.', cat: 'Business Model', tags: 'skool golden rules community building party lecture friendships culture vase founding members h8' },
        { url: '5_Symbols/product/skool-10-true-regulars.html', title: '10 True Regulars in Skool', desc: 'Stage 2 community milestone: ten people who post or attend Sunday without a founder poke. Rationale, counting rules, and why signups are not regulars.', cat: 'Business Model', tags: 'skool 10 true regulars milestone community engagement h8 founding members step 5' },
        { url: '5_Symbols/product/free-vip.html', title: 'Free VIP Status: Founder Pledge & Entitlement Logic', desc: 'Founder Rifat Erdem Sahin beard growth pledge until $10k real value delivered. First 3 members auto get VIP (Marianna, Sude, B.), first 10 true audience earn VIP.', cat: 'Business Model', tags: 'free vip founder promise pledge beard 10000 real value first 3 members marianna sude b 10 true audience regulars entitlement logic h5 h8 h9 h30' },
        { url: '5_Symbols/product/skool-delivery-pilot-offer.html', title: 'Delivery Pilot Offer — Peek · Sit In · Share Screen', desc: 'Live Freemium checkout (Standard $0 / Premium $1 / VIP $250/year) rewritten as Peek / Sit In / Share Screen. Preview the Sunday room before buying the live-share seat.', cat: 'Business Model', tags: 'skool delivery pilot offer peek sit in share screen hormozi tripwire cohort pricing freemium standard premium vip h5' },
        { url: 'markdown_renderer.html?src=reports/skool-pricing-feedback-v1.0.0.md', title: 'Skool Pricing Feedback v1.0.0', desc: 'Founder-confirmed Freemium entitlements graded: keep $0 / $1 / $250, rename Standard / Premium / VIP, cap VIP 1:1.', cat: 'Docs', tags: 'skool pricing feedback freemium standard premium vip peek sit share h5' },
        { url: '5_Symbols/product/skool-about.html', title: 'Delivery Pilot About — Skool About copy', desc: 'Paste-ready About tab for skool.com/delivery-pilot-8938/about. Replaces the get-certified listing line. Maps each block to system pages.', cat: 'Business Model', tags: 'skool about delivery pilot listing description sunday practice room peek sit share h5' },
        { url: '5_Symbols/product/skool-about-promo-video-script.html', title: 'Skool About Promo Video Script & 8s Animations', desc: '64-second high-converting promotional video script and 8-second Roger Rabbit animation scenes designed to drive traffic and members to the Skool About page.', cat: 'Business Model', tags: 'skool about promo video script 8 seconds scene animations roger rabbit google flow teleprompter peek sit in share screen h5 h8 h29 h30' },
        { url: '5_Symbols/product/skool-discoverability-keywords.html', title: 'Discoverability Keywords — Skool Keywords config', desc: 'Recommended tags and keywords for Skool discoverability under group settings, categorized by intent and mapped to system pages.', cat: 'Business Model', tags: 'skool keywords discoverability tags search settings traffic acquisition organic h5 h7' },
        { url: '5_Symbols/product/skool-visibility.html', title: 'Skool Visibility — Private vs Public', desc: 'How to set Delivery Pilot visibility. Recommend Public: anyone can see inside, only members can post. Private hides the board and kills Discovery.', cat: 'Business Model', tags: 'skool visibility private public discoverability settings members post peek h5' },
        { url: '5_Symbols/product/skool-availability.html', title: 'Skool Availability Check', desc: 'Logged-out test of skool.com/delivery-pilot-8938. Confirms Public: HTTP 200, board readable, member count visible. Not a paid enrollment.', cat: 'Business Model', tags: 'skool availability public check test delivery-pilot-8938 h5' },
        { url: '5_Symbols/product/skool-live-join.html', title: 'How to Join the Sunday Skool Call', desc: 'Copy-paste invite: send the group URL first, not a /live/ link. Tuncer 2026-08-23 conversion friction (H5).', cat: 'Product', tags: 'skool live join sunday call whatsapp tuncer password signup h5 conversion' },
        { url: '5_Symbols/product/skool-similar-communities.html', title: 'Similar Skool Communities & Benchmarks', desc: 'Detailed analysis of Stephen G. Pope\'s AI Architects ($97/mo, 214 members) and competitor matrices for Stage 2 validation and pricing.', cat: 'Business Model', tags: 'skool similar communities benchmarks ai architects stephen pope 97 month pricing compare learn competitive h5 h8' },
        { url: '5_Symbols/product/grow-skool-traffic.html', title: 'Grow Your Skool Traffic', desc: 'Traffic generation framework covering social platforms, traditional channels, Skool discovery ranking, and 20% free vs 4% paid conversion benchmarks.', cat: 'Business Model', tags: 'skool traffic growth social youtube linkedin email conversion rates free 20 paid 4 discovery affiliate h5 h7' },
        { url: '5_Symbols/product/skool-monetization.html', title: 'How to Monetize Your Skool', desc: 'Synthesis of the 6 Skool business models (Free, Subscription, Freemium, Tiers, 1-Time, Custom) and 4 stages of community evolution ($1B/yr benchmark).', cat: 'Business Model', tags: 'skool monetization business models freemium subscription tiers pricing income evolution h5 h8 h9' },
        { url: '5_Symbols/product/skool-offer-ideas.html', title: 'What You Can Offer on Skool (Skool Games Inspiration)', desc: 'Catalog of 10 high-converting offer structures, modular blueprints, Sunday live hot-seats, and XP leaderboard unlockables inspired by Skool Games.', cat: 'Business Model', tags: 'skool offer ideas skool games inspiration gamification leaderboards levels modules bootcamp h1 h5 h8' },
        { url: '5_Symbols/product/member-bandwidth-guardrails.html', title: 'Member Bandwidth Guardrails — Anti-Overload Metric', desc: 'Curriculum guardrails capping member study load at 3 to 4 hours/week to prevent cognitive burnout and cancellation churn (Al Jack Law).', cat: 'Business Model', tags: 'member bandwidth guardrails student cognitive load time budget overload churn 3 hours week al jack h2 h8' },
        { url: '5_Symbols/product/skool-community-management.html', title: 'Skool Community Management — The Garden Playbook', desc: 'Operational garden framework: prune weeds (broken window theory), add water (new member care), daily 5-minute checklist, and zero-tolerance moderation.', cat: 'Business Model', tags: 'skool community management garden weeds water culture daily care moderation spam bullying broken windows h8 h29' },
        { url: '5_Symbols/product/skool-validation-speed-setup.html', title: 'Skool Validation Speed Setup — Exact Fix List', desc: 'Stage 2: messy Skool slows the two-launch $10k gate. Eight founder-owned setup fixes; refuse agency spend. H5, H8, H9.', cat: 'Business Model', tags: 'skool validation speed setup community messy incomplete 10k repeat gate about onboarding living hubs garden pass h5 h8 h9' },
        { url: '5_Symbols/product/community-rules-enforcement.html', title: 'Community Rules: Deletions, Bans & Suspensions Policy', desc: 'Comprehensive enforcement policy: when posts get deleted, when accounts are suspended (7-30 days), and zero-tolerance instant bans for harassment, scraping, and exam cheating.', cat: 'Business Model', tags: 'community rules deleted posts suspended banned moderation policy fast track bans appeals 3 strikes broken windows nda cheating h8 h29' },
        { url: '5_Symbols/product/skool-level-2-posting-restriction.html', title: 'Skool Level 2 Posting Restriction Milestone', desc: 'Admin setup, modal copy, and 5-point comment engagement gate to unlock standalone posting, filtering spam and nurturing 10 true regulars.', cat: 'Business Model', tags: 'skool level 2 posting restriction plugins settings 5 points comment likes anti-spam broken windows gamification leaderboards h5 h8 h29' },
        { url: '5_Symbols/product/skool-onboarding-checklist.html', title: 'Skool Onboarding Checklist & Welcome Milestone', desc: 'Admin setup and 3-step member activation widget (60s video, comment on post, download mobile app) driving Day-1 retention and Stage 3 customer creation.', cat: 'Business Model', tags: 'skool onboarding checklist welcome plugin 60s video comment mobile app download churn retention customer creation h5 h8 h13' },
        { url: '5_Symbols/product/skool-orientation-video-script.html', title: 'Skool Orientation Onboarding Video Script (8s Scenes)', desc: '64-second onboarding video script for Skool Welcome Plugin across 8 scenes (8s each) with Roger Rabbit animations, founder voiceover teleprompter, and interactive player.', cat: 'Business Model', tags: 'skool orientation video script onboarding roger rabbit animation 8 seconds scenes founder voice teleprompter welcome plugin h5 h8 h29 h30' },
        { url: '5_Symbols/product/member-onboarding.html', title: 'Member Onboarding & "What to Expect" Journey', desc: 'Master 5-step member onboarding journey, "What to Expect" orientation video blueprint, founder teleprompter script, and interactive progress checklist.', cat: 'Business Model', tags: 'member onboarding what to expect orientation video founder script 5 steps checklist delivery pilot skool second brain sunday live cohort claude cert contractor h5 h8 h29 h30' },
        { url: '5_Symbols/product/skool-manual-member-invites.html', title: 'Skool Manual Member Invites & Tier Assignment', desc: 'Admin playbook for sending direct email invitations and switching members to Premium or VIP tiers at $0 cost without Stripe friction.', cat: 'Business Model', tags: 'skool manual invites email settings invite members tier switch comp complimentary free upgrade founding members h5 h8 h30' },
        { url: '5_Symbols/product/skool-membership-questions.html', title: 'Skool Membership Questions & Customer Discovery Intake', desc: '4 AI knowledge pillars diagnostic plus open-ended customer discovery text box ("What do you hope to get out of the group?") on join intake.', cat: 'Discovery Process', tags: 'skool membership questions join intake customer discovery 4 ai pillars voc voice of customer hope to get out of group h3 h8 h24 h30' },
        { url: '5_Symbols/product/cohort-session-permissions.html', title: 'Cohort Session Permissions — Audience Collect Approval', desc: 'Recording consent collected on Skool join: Classroom replay yes, listen-only, or no record. Public YouTube never without a second named yes.', cat: 'Discovery Process', tags: 'cohort session permissions recording consent approval membership questions sunday replay skool classroom gdpr h5 h29' },
        { url: '5_Symbols/growth/linkedin-premium-decision.html', title: 'LinkedIn Premium Decision & Top Profile CTA', desc: 'Customer Creation task comparing Career (£14.99/mo), Business (£29.99/mo), and Sales Navigator Core (£79.99/mo) to market Skool link directly on LinkedIn profile header.', cat: 'Growth', tags: 'linkedin premium career business sales navigator cta profile marketing traffic stage 3 customer creation h5 h12 h13' },
        { url: '5_Symbols/growth/linkedin-vip-cowork.html', title: 'LinkedIn 30k Network Cap & Monday VIP Claude Cowork', desc: 'Strategy for managing LinkedIn 30,000 connection limit by only adding verified Skool members, plus Monday VIP Claude Cowork recruiter promotion over Delivery Pilot.', cat: 'Growth', tags: 'linkedin network 30000 30k connections cap mynetwork grow skool members buffer monday vip claude cowork recruiters delivery pilot h5 h12' },
        { url: '5_Symbols/growth/linkedin-stats.html', title: 'LinkedIn Page Analytics: Delivery Pilot Telemetry', desc: 'Weekly telemetry (8/9/2026 - 8/15/2026) for Delivery Pilot company page: 0 visitors, 0 impressions, 0 updates, -1 net follower, and 4-step organic activation playbook.', cat: 'Growth', tags: 'linkedin stats page analytics delivery pilot weekly impressions visitors updates followers telemetry company page erdem sahin h5 h7 h30' },
        { url: '5_Symbols/product/deliverypilot-net.html', title: 'deliverypilot.net — Forward Deployed Engineer Accelerator', desc: 'Official web portal blueprint, 4-stage FDE roadmap, 3-tier offer ladder (Peek $0 / Sit In $1 / VIP $250), and 15-min VIP phone call sales playbook.', cat: 'Business Model', tags: 'deliverypilot deliverypilot.net portal forward deployed engineer fde contractor roadmap 4 stages vip phone call sales playbook skool peek sit in share screen h5 h8 h30' },
        { url: '5_Symbols/growth/linkedin-newsletter.html', title: 'LinkedIn Newsletter: Skool & Community Blueprint', desc: 'Comprehensive LinkedIn newsletter editorial blueprint and article template introducing Skool and the Delivery Pilot community.', cat: 'Growth', tags: 'linkedin newsletter editorial skool community delivery pilot article fde contractors cloud claude certification h5 h30' },
        { url: '5_Symbols/growth/skool-affiliate-roadmap.html', title: 'Skool Affiliate Timeline & Milestone Roadmap', desc: '4-stage activation roadmap and unit economics for launching the Skool affiliate program, gated behind the G3 $10,000 revenue milestone.', cat: 'Growth', tags: 'skool affiliate referral timeline milestone roadmap commission unit economics stage gates h5 h8 h9' },
        { url: '5_Symbols/growth/skool-churn-retention.html', title: 'Reducing Churn & Maximizing Retention', desc: 'Tactical churn reduction framework covering leaky bucket dynamics, <5% retention benchmarks, 30-day cohort curves, and 5 tactical retention levers.', cat: 'Growth', tags: 'skool churn retention leaky bucket cohort curves onboarding ritual peer ties gamification h2 h8 h29' },
        { url: '5_Symbols/growth/skool-common-patterns.html', title: 'Common Retention Patterns (Nick Saraev, Evelyn, Al Jack)', desc: 'The 6 battle-tested creator retention archetypes: daily care, lower-tier downsells, content deletion, weekly calls, annual discounts, and 1-on-1 culture.', cat: 'Growth', tags: 'skool common patterns retention nick saraev evelyn skate iq al jack annual discount downsell 1on1 culture h2 h5 h8' },
        { url: '5_Symbols/growth/reverse-response-marketing.html', title: 'Reverse Response Marketing', desc: 'A three-step framework for viral marketing through reverse engineering and controversial second brain insights.', cat: 'Growth', tags: 'reverse response marketing strategy viral controversial second brain high-performing posts production skills' },
        { url: '5_Symbols/growth/instagram-marketing-pipeline.html', title: 'Similar Marketing Pipelines: Instagram AI Education Reel', desc: 'Deconstruction of Instagram technical micro-learning pipelines (ColPali Multimodal RAG reel shared by Mehmet) and full-funnel conversion mechanics.', cat: 'Growth', tags: 'instagram marketing pipeline similar educational reel colpali multimodal rag mehmet second brain aug-video-animation-2 short form h2 h3 h10 h28' },
        { url: '5_Symbols/growth/roger-rabbit-animation.html', title: 'Roger Rabbit Animation Style', desc: 'Using mixed-reality Roger Rabbit style animations as our signature format to test the market.', cat: 'Growth', tags: 'roger rabbit animation mixed reality style signature format reverse response marketing test market' },
        { url: 'markdown_renderer.html?src=reports/skool-availability-v1.0.0.md', title: 'Skool Availability v1.0.0', desc: 'First logged-out run: PASS 11/11 gates, Public, 11 members, 14 posts, Sude non-founder thread visible.', cat: 'Docs', tags: 'skool availability report public members posts h5' },
        { url: 'markdown_renderer.html?src=reports/exam-prep-market-and-student-behavior-v1.8.0.md', title: 'Exam Prep & Student Behavior v1.8.0', desc: 'Cheuk (National Grid) cannot self-enroll in Claude certifications; only enterprise partners have access; two partner companies enroll people.', cat: 'Docs', tags: 'cheuk national grid enrollment block partner gated f12 h1 h12 exam access' },
        { url: 'markdown_renderer.html?src=reports/exam-prep-market-and-student-behavior-v1.7.0.md', title: 'Exam Prep & Student Behavior v1.7.0', desc: 'Adds Bora Session 8 follow-up discovery: session stacking cognitive fatigue, vacation/noise constraints, boat cruise, and mid-week async course binge study.', cat: 'Docs', tags: 'bora customer discovery session 8 fatigue stacked sessions vacation boat cruise async binge study exam prep h5 h8 h20 h26 h29' },
        { url: 'markdown_renderer.html?src=reports/acidity-check-report-v1.4.0.md', title: 'Acidity Check Report v1.4.0', desc: 'F12 moves to partially addressed: Cheuk could not self-enroll; two partner companies mitigate by seating candidates.', cat: 'Docs', tags: 'acidity f12 cheuk partner enrollment partially addressed' },
        { url: 'markdown_renderer.html?src=reports/exam-prep-market-and-student-behavior-v1.6.0.md', title: 'Exam Prep & Student Behavior v1.6.0', desc: 'Adds Mehmet: immigrant vetting is weak, old talent checks fail, proctored certs rise in institutional and government MSP hires.', cat: 'Docs', tags: 'mehmet immigrant vetting msp government proctored certification institutional h1 h12 h25' },
        { url: 'markdown_renderer.html?src=reports/score-fluctuation-analysis-v1.0.0.md', title: 'Score Fluctuation Analysis v1.0.0', desc: 'Detailed explanation of why the confidence score fluctuates (up to 46, down to 43) due to Git commit status (uncommitted work deductions).', cat: 'Docs', tags: 'score fluctuation analysis confidence report git commit status uncommitted work' },
        { url: '5_Symbols/strategy/claude-partner-strategy.html', title: 'Claude Partner Strategy', desc: 'Strategic analysis of when and why to become a Claude Partner, mapping active partner benefits to customer development stages.', cat: 'Strategy', tags: 'claude partner cpn network services select benefits licensing credentials' },
        { url: '5_Symbols/execution/4dx-discipline-1.html', title: 'Discipline 1: Focus on WIG', desc: 'Narrowing focus to 1-2 Wildly Important Goals to protect bandwidth.', cat: 'Execution', tags: '4dx execution focus wildly important goal wig baseline formula' },
        { url: '5_Symbols/execution/4dx-discipline-2.html', title: 'Discipline 2: Act on Lead Measures', desc: 'Leveraging predictive, influenceable lead measures instead of lag measures.', cat: 'Execution', tags: '4dx execution leverage lead lag measure metrics predictive influenceable' },
        { url: '5_Symbols/execution/4dx-discipline-3.html', title: 'Discipline 3: Keep Scoreboard', desc: 'Visual scoreboard passing the 5-second rule of winning or losing.', cat: 'Execution', tags: '4dx execution visibility visual scoreboard winning losing 5 second rule' },
        { url: '5_Symbols/execution/4dx-discipline-4.html', title: 'Discipline 4: Create Cadence of Accountability', desc: 'Establishing weekly self-audit WIG meetings and commitment rhythm.', cat: 'Execution', tags: '4dx execution rhythm weekly meeting commitments cadence self audit roadmap' },
        { url: '5_Symbols/execution/eos-traction-alignment.html', title: 'EOS Traction Alignment (Gino Wickman)', desc: 'Organizational Checkup 49/100 against 272 pages; V/TO, Rocks, Scorecard, Level 10, Accountability Chart for a solo founder.', cat: 'Execution', tags: 'eos traction gino wickman vto rocks scorecard level 10 ids accountability chart checkup h23' },
        { url: 'markdown_renderer.html?src=reports/customer-discovery-ai-common-language-library-short-v1.0.0.md', title: 'AI Common Language Library Short (Marianna + Meg)', desc: 'Shipped tokenization glossary short KVKJRdkH-B8: 30 views, 4 likes, 46s, 1h train Gemini Flow Canva. H28 In Testing.', cat: 'Docs', tags: 'marianna meg glossary tokenization youtube short h28 h2 h29 common language library' },
        { url: '5_Symbols/hypotheses/hyp-h23.html', title: 'H23: 4DX Weekly Accountable Rhythm', desc: 'Hypothesis detailing premises and conclusion of execution cadence.', cat: 'Strategy', tags: 'hypothesis h23 4dx rhythm weekly commitment self audit' },
        { url: '5_Symbols/bmc/bmc-capital-relationships.html', title: 'Capital Relationships', desc: 'Analyzing Constant Capital (tools), Variable Capital (labor), and Marxian surplus in the ecosystem.', cat: 'Business Model', tags: 'capital infrastructure tools marx marxian constant variable relationships' },
        { url: '5_Symbols/bmc/surplus-value.html', title: 'Surplus Value Creation', desc: 'Explaining how surplus value is generated from intellectual labor and infinite digital reproducibility.', cat: 'Business Model', tags: 'surplus value marx labor reproduction cost profit value' },
        { url: '5_Symbols/growth/organic-growth.html', title: 'Organic Growth Strategy', desc: 'Acquisition flywheels, YouTube search loops, and LinkedIn certification viral sharing.', cat: 'Growth', tags: 'organic growth strategy marketing viral loops linkedin search acquisition' },
        { url: '5_Symbols/dashboard/latest-pages.html', title: 'Latest Created & Updated Pages', desc: 'Dashboard tracking recently created and updated pages, sortable by dates.', cat: 'Dashboard', tags: 'latest created updated pages dates calendar sorting index' },
        { url: '5_Symbols/dashboard/sitemap.html', title: 'Site Map', desc: 'Every page on the site, searchable, with Logical (by section) and A-Z sort modes, built live from this same search index.', cat: 'Dashboard', tags: 'sitemap site map search sort az alphabetical logical directory all pages index' },
        { url: '5_Symbols/product/resources.html', title: 'External Resources Directory', desc: 'Centralized directory of external Canva design boards, Skool community links, newsletters, and exam resources.', cat: 'Product', tags: 'external resources directory canva youtube banner skool newsletter tools links' },
        { url: 'index.html', title: 'Customer Development Hub', desc: 'Home hub mapping all stages, business validation frameworks, and milestones.', cat: 'Hub', tags: 'home dashboard main index' },
        { url: '5_Symbols/cd/cd-interview-guide.html', title: 'Customer Discovery Interview Guide', desc: 'Playbook of open-ended pains/gains questions, past behavior stories, and listening guidelines.', cat: 'Process', tags: 'interview questions open ended pains gains guide' },
        { url: '5_Symbols/cd/cd-watering-holes.html', title: 'Customer Watering Holes & Outreach', desc: 'Outreach blueprint mapping Triton Square, Venture Coffee meetups, and cohorts with ready-to-use scripts.', cat: 'Process', tags: 'watering holes triton square venture coffee cohorts scripts outreach slack dms' },
        { url: '5_Symbols/cd/cd-interview-recording.html', title: 'Interview Recording Workspace', desc: 'Qualitative interview recording tool with multi-select hypothesis mapping (H1–H30), markdown file download, and shared cookie notes sync.', cat: 'Process', tags: 'interview log recording tracker multi select hypotheses download notes cookie' },
        { url: '5_Symbols/cd/cd-interview-pdf.html', title: '1-Page A4 Interview PDF Generator', desc: 'Single-page A4 PDF print layout, candidate interview selector, and export tool for qualitative Customer Discovery records.', cat: 'Process', tags: 'interview pdf a4 single page print export baran apo cheuk youtube' },
        { url: '5_Symbols/cd/archived-interview-transcripts.html', title: 'Archived Interview Transcripts', desc: 'Detailed qualitative interview notes and transcript archives from customer discovery sessions.', cat: 'Process', tags: 'interview transcript archived notes sude charles marianna' },
        { url: '5_Symbols/stages/stage-scoring-roadmap.html', title: 'Customer Development Stage Scores & Roadmap', desc: 'Comprehensive stage-by-stage scoring (Discovery 85, Validation 45, Creation 15, Building 05), current position marker, and master execution roadmap.', cat: 'Stage', tags: 'stage score scoring roadmap stages discovery validation creation company building status compass' },
        { url: '5_Symbols/stages/stage-customer-discovery.html', title: '1. Customer Discovery Stage', desc: 'First phase of customer development focused on problem-solution fit and testing core customer pain points.', cat: 'Stage', tags: 'problem solution mvp validation first' },
        { url: '5_Symbols/stages/stage-customer-validation.html', title: '2. Customer Validation Stage', desc: 'Second phase to build a repeatable, scalable sales blueprint and verify product-market fit.', cat: 'Stage', tags: 'sales roadmap pricing validation product market' },
        { url: '5_Symbols/stages/stage-customer-creation.html', title: '3. Customer Creation Stage', desc: 'Third phase to drive demand, acquire users at scale, and verify retention triggers.', cat: 'Stage', tags: 'demand growth viral acquisition' },
        { url: '5_Symbols/stages/stage-company-building.html', title: '4. Company Building Stage', desc: 'Final phase to transition from startup to structured department execution and scaling.', cat: 'Stage', tags: 'scale operations structure department team' },
        { url: '5_Symbols/cd/cd-process.html', title: 'Discovery Process Overview', desc: 'Detailed overview of the 4 steps of Customer Discovery (State, Test, Validate, Exit).', cat: 'Process', tags: 'steps overview summary outline' },
        { url: '5_Symbols/cd/cd-hypotheses.html', title: 'Phase 1: State Hypotheses', desc: 'Defining the core business canvas assumptions and developer pain points.', cat: 'Process', tags: 'assumptions developers canvas' },
        { url: '5_Symbols/cd/cd-hyp-product.html', title: 'Product Hypothesis', desc: 'Hypothesis testing features, pricing, and visual delivery model for the training video assets.', cat: 'Process', tags: 'features pricing video assets' },
        { url: '5_Symbols/cd/cd-hyp-customer-problem.html', title: 'Customer & Problem Hypothesis', desc: 'Understanding certification stress, study timelines, and visual learning needs.', cat: 'Process', tags: 'stress study timeline needs' },
        { url: '5_Symbols/cd/cd-hyp-distribution-pricing.html', title: 'Distribution & Pricing Hypothesis', desc: 'Hypotheses on YouTube memberships, $10/mo mock prep access, and cohort revenue metrics.', cat: 'Process', tags: 'youtube membership subscription cost cohort' },
        { url: '5_Symbols/cd/cd-hyp-demand-creation.html', title: 'Demand Creation Hypothesis', desc: 'Assumptions about organic YouTube search, SEO search terms, and viral watch-loops.', cat: 'Process', tags: 'seo search loops youtube traffic' },
        { url: '5_Symbols/cd/cd-hyp-market-type.html', title: 'Market Type Hypothesis', desc: 'Positioning the helper in an existing exam prep market with a resegmented focus on rich animations.', cat: 'Process', tags: 'positioning market segmentation animation' },
        { url: '5_Symbols/cd/cd-hyp-competitive.html', title: 'Competitive Hypothesis', desc: 'Analyzing Udemy courses, cloud providers\' official prep, and our unique visual edge.', cat: 'Process', tags: 'udemy competitors cloud official visual edge' },
        { url: '5_Symbols/cd/cd-test-problem.html', title: 'Phase 2: Test Problem Hypothesis', desc: 'Engaging early adopters, launching surveys, and running problem interviews.', cat: 'Process', tags: 'surveys interviews feedback adopters' },
        { url: '5_Symbols/cd/cd-tp-first-contacts.html', title: 'First Contacts & Outreach', desc: 'Strategy for reaching out to developers, students, and certification candidates.', cat: 'Process', tags: 'outreach developer groups email' },
        { url: '5_Symbols/cd/cd-tp-problem-presentation.html', title: 'Problem Presentation Guide', desc: 'Framework for pitching the identified developer pain points during discovery calls.', cat: 'Process', tags: 'pitch presentation discovery calls' },
        { url: '5_Symbols/cd/cd-tp-customer-understanding.html', title: 'Customer Understanding Deep Dive', desc: 'Analyzing target user behaviors, motivations, and pain points in software certifications.', cat: 'Process', tags: 'behaviors motivations certification' },
        { url: '5_Symbols/cd/cd-tp-market-knowledge.html', title: 'Market Knowledge Synthesis', desc: 'Understanding market segments, size, and readiness to pay for visual guides.', cat: 'Process', tags: 'market segments size willing to pay' },
        { url: '5_Symbols/cd/cd-test-product.html', title: 'Phase 3: Test Product Hypothesis', desc: 'Pitching the MVP, testing animated content, and measuring feedback loops.', cat: 'Process', tags: 'mvp animation feedback loops demo' },
        { url: '5_Symbols/cd/cd-tpr-first-reality-check.html', title: 'First Reality Check', desc: 'Initial validation checkpoint for early signups and content engagement.', cat: 'Process', tags: 'validation checkpoint engagement signups' },
        { url: '5_Symbols/cd/cd-tpr-product-presentation.html', title: 'Product Presentation & Demo', desc: 'Presenting the MVP animated guides to prospective users to gauge reactions.', cat: 'Process', tags: 'demo pitch product slides' },
        { url: '5_Symbols/cd/cd-tpr-more-customer-visits.html', title: 'Expanding Customer Visits', desc: 'Iterative testing phase with broader user groups to refine validation statistics.', cat: 'Process', tags: 'testing groups scale validation' },
        { url: '5_Symbols/cd/cd-tpr-second-reality-check.html', title: 'Second Reality Check', desc: 'Final validation of problem-solution alignment before business model verification.', cat: 'Process', tags: 'final check validation alignment' },
        { url: '5_Symbols/cd/cd-verify.html', title: 'Phase 4: Verify, Iterate, or Exit', desc: 'Consolidating all validation feedback and determining if we exit to Validation stage or pivot.', cat: 'Process', tags: 'exit verify pivot iterate' },
        { url: '5_Symbols/cd/cd-verify-product.html', title: 'Verify the Product MVP', desc: 'Ensuring the MVP solves the core retention issues and provides high-value exam prep.', cat: 'Process', tags: 'verify mvp retention value' },
        { url: '5_Symbols/cd/cd-verify-problem.html', title: 'Verify the Problem Fit', desc: 'Confirming that target students face real, severe pain points with existing training.', cat: 'Process', tags: 'verify problem pain points study' },
        { url: '5_Symbols/cd/cd-verify-business-model.html', title: 'Verify the Business Model Fit', desc: 'Analyzing pricing model, customer acquisition cost, and revenue sustainability.', cat: 'Process', tags: 'verify business model pricing cost sustainability' },
        { url: '5_Symbols/cd/cd-verify-iterate-exit.html', title: 'Iterate or Exit Gate', desc: 'The ultimate decision gate for Rifat: do we proceed, pivot, or stop?', cat: 'Process', tags: 'decision gate trigger pivot exit' },
        { url: '5_Symbols/strategy/raise.html', title: 'R.A.I.S.E. — The Starting Point', desc: 'Rapid Artificial Intelligence Increases Skills Expectations: the founder origin, IT background, learning-systems pain, and why proctored exams are the path.', cat: 'Strategy', tags: 'raise starting point founder origin it learning systems proctored exam self-learning h1' },
        { url: 'motivation.html', title: 'Motivation: Why & How This Makes Money', desc: 'Full-site synthesis of why the business exists, the three revenue streams, and the ICP personas tied to each one.', cat: 'Strategy', tags: 'motivation money revenue icp personas why founder' },
        { url: '5_Symbols/hypotheses/hypothesis.html', title: 'Core Business Hypotheses', desc: 'Comprehensive dashboard tracking all customer, value prop, and distribution hypotheses.', cat: 'Strategy', tags: 'dashboard hypotheses tracking assumptions' },
        { url: '5_Symbols/hypotheses/hyp-h1.html', title: 'H1 · Rising AI skills expectations', desc: 'Detail page with premise-conclusion-status SVG diagram for H1.', cat: 'Hypothesis Detail', tags: 'h1 hypothesis detail skills expectations svg diagram' },
        { url: '5_Symbols/hypotheses/hyp-h2.html', title: 'H2 · Animated content format', desc: 'Detail page with premise-conclusion-status SVG diagram for H2.', cat: 'Hypothesis Detail', tags: 'h2 hypothesis detail animated retention svg diagram' },
        { url: '5_Symbols/hypotheses/hyp-h3.html', title: 'H3 · Audience will pay for cert prep', desc: 'Detail page with premise-conclusion-status SVG diagram for H3.', cat: 'Hypothesis Detail', tags: 'h3 hypothesis detail newsletter pay svg diagram' },
        { url: '5_Symbols/hypotheses/hyp-h4.html', title: 'H4 · ~1% free-to-paid conversion', desc: 'Detail page with premise-conclusion-status SVG diagram for H4.', cat: 'Hypothesis Detail', tags: 'h4 hypothesis detail funnel conversion svg diagram' },
        { url: '5_Symbols/hypotheses/hyp-h5.html', title: 'H5 · Cohorts sell out organically', desc: 'Detail page with premise-conclusion-status SVG diagram for H5.', cat: 'Hypothesis Detail', tags: 'h5 hypothesis detail cohort sellout svg diagram' },
        { url: '5_Symbols/hypotheses/hyp-h6.html', title: 'H6 · TAM/SAM/SOM market size', desc: 'Detail page with premise-conclusion-status SVG diagram for H6.', cat: 'Hypothesis Detail', tags: 'h6 hypothesis detail market size tam sam som svg diagram' },
        { url: '5_Symbols/hypotheses/hyp-h7.html', title: 'H7 · Funnel conversion rates', desc: 'Detail page with premise-conclusion-status SVG diagram for H7.', cat: 'Hypothesis Detail', tags: 'h7 hypothesis detail funnel ctr svg diagram' },
        { url: '5_Symbols/hypotheses/hyp-h8.html', title: 'H8 · Exam-ready PMF', desc: 'Detail page with premise-conclusion-status SVG diagram for H8.', cat: 'Hypothesis Detail', tags: 'h8 hypothesis detail pmf exam svg diagram' },
        { url: '5_Symbols/hypotheses/hyp-h9.html', title: 'H9 · $10k exit gate & job status', desc: 'Detail page with premise-conclusion-status SVG diagram for H9.', cat: 'Hypothesis Detail', tags: 'h9 hypothesis detail exit gate revenue svg diagram' },
        { url: '5_Symbols/hypotheses/hyp-h10.html', title: 'H10 · >40% video retention', desc: 'Detail page with premise-conclusion-status SVG diagram for H10.', cat: 'Hypothesis Detail', tags: 'h10 hypothesis detail retention mvp svg diagram' },
        { url: '5_Symbols/hypotheses/hyp-h11.html', title: 'H11 · $100k ARR triggers hiring', desc: 'Detail page with premise-conclusion-status SVG diagram for H11.', cat: 'Hypothesis Detail', tags: 'h11 hypothesis detail arr hiring svg diagram' },
        { url: '5_Symbols/hypotheses/hyp-h12.html', title: 'H12 · B2B / consulting channel', desc: 'Detail page with premise-conclusion-status SVG diagram for H12.', cat: 'Hypothesis Detail', tags: 'h12 hypothesis detail b2b consulting svg diagram' },
        { url: '5_Symbols/hypotheses/hyp-h13.html', title: 'H13 · 1,000x subscriber growth', desc: 'Detail page with premise-conclusion-status SVG diagram for H13.', cat: 'Hypothesis Detail', tags: 'h13 hypothesis detail subscriber growth svg diagram' },
        { url: '5_Symbols/hypotheses/hyp-h14.html', title: 'H14 · Multi-certification market expansion', desc: 'Detail page with premise-conclusion-status SVG diagram for H14.', cat: 'Hypothesis Detail', tags: 'h14 hypothesis detail multi certification expansion svg diagram' },
        { url: '5_Symbols/hypotheses/hyp-h15.html', title: 'H15 · Founder transitions to full-time', desc: 'Detail page with premise-conclusion-status SVG diagram for H15.', cat: 'Hypothesis Detail', tags: 'h15 hypothesis detail full-time founder svg diagram' },
        { url: '5_Symbols/hypotheses/hyp-h16.html', title: 'H16 · Paid ads, post-validation only', desc: 'Detail page with premise-conclusion-status SVG diagram for H16.', cat: 'Hypothesis Detail', tags: 'h16 hypothesis detail paid ads cac ltv svg diagram' },
        { url: '5_Symbols/hypotheses/hyp-h17.html', title: 'H17 · Onsite Cambridge + corporate pilot', desc: 'Detail page with premise-conclusion-status SVG diagram for H17.', cat: 'Hypothesis Detail', tags: 'h17 hypothesis detail onsite cambridge marianna svg diagram' },
        { url: '5_Symbols/hypotheses/hyp-h18.html', title: 'H18 · International onsite channels', desc: 'Detail page with premise-conclusion-status SVG diagram for H18.', cat: 'Hypothesis Detail', tags: 'h18 hypothesis detail international onsite uk europe usa svg diagram' },
        { url: '5_Symbols/dashboard/confidence-report.html', title: 'Business Model Confidence Report', desc: 'Versioned, whole-site sanity check scoring hypothesis validation and site integrity into one confidence number. v1.9.60 holds 50 after Mehmet pedagogical rating-penalty feedback (R-014).', cat: 'Docs', tags: 'confidence score sanity check audit integrity version mehmet rating penalty r-014 pedagogical' },
        { url: '5_Symbols/dashboard/how-to-move-the-score.html', title: 'How to Move the Confidence Score', desc: 'Master playbook: formula, every historical score-up event, what does not move the number, housekeeping rules, and ranked evidence levers (H9, H21, F12).', cat: 'Docs', tags: 'how to move confidence score playbook integrity validation git broken links acidity h5 h8 h9 h21 h27 f12' },
        { url: '5_Symbols/dashboard/project-stats.html', title: 'Project Stats', desc: 'Counted snapshot of HTML pages, hypotheses, git history, reports, and discovery evidence for this Customer Development repo.', cat: 'Docs', tags: 'project stats dashboard pages commits loc hypotheses confidence h9 snapshot' },
        { url: '5_Symbols/hypotheses/hyp-h27.html', title: 'H27 · Practice Exam & Question Bank Gap', desc: 'Detail page with premise-conclusion-status SVG diagram for H27: blueprint-mapped practice exams are the value blocker for H8 and H21.', cat: 'Hypothesis Detail', tags: 'h27 hypothesis detail practice exam question bank mock test blueprint gap charles postponement svg diagram' },
        { url: '5_Symbols/strategy/focus.html', title: 'Strategic Focus', desc: 'Where we focus our immediate energy: animations, YouTube playlists, mock exams.', cat: 'Strategy', tags: 'focus energy priority list roadmap' },
        { url: '5_Symbols/strategy/target-audience.html', title: 'Target Audience Analysis', desc: 'Persona details of early-adopter developers, study timelines, and motivations.', cat: 'Strategy', tags: 'personas developers study timeline profiles' },
        { url: '5_Symbols/strategy/risk-analysis.html', title: 'Key Risks & Mitigations', desc: 'Analysis of production fatigue, pricing models, content copycats, and platforms.', cat: 'Strategy', tags: 'risks mitigation fatigue pricing copycats cambridge onsite marianna corporate' },
        { url: '5_Symbols/strategy/requirements.html', title: 'Product & Technical Requirements', desc: 'Specs for hosting, animation software, mock testing platform, and automation rules.', cat: 'Strategy', tags: 'technical requirements hosting software specs' },
        { url: '5_Symbols/strategy/business-plan-summary.html', title: 'Business Plan Summary', desc: 'Master executive plan: 4-stage CustDev engine (Discovery, Validation, Creation, and Company Building via deliverypilot.net) and audience transformation matrix.', cat: 'Strategy', tags: 'summary business plan 4 stages customer discovery validation creation deliverypilot audience transformation fde' },
        { url: '5_Symbols/strategy/competitive-analysis.html', title: 'Competitive Analysis', desc: 'Udemy/Coursera, official vendor training, and YouTube educators compared against this program, and why this is different.', cat: 'Strategy', tags: 'competitive analysis udemy coursera official vendor youtube educators alternatives' },
        { url: '5_Symbols/strategy/evidence-map.html', title: 'Evidence Map', desc: 'Every hypothesis matched to its evidence source, including the Sunday free-cohort discovery-interview method.', cat: 'Strategy', tags: 'evidence map hypothesis sources sunday cohort discovery interviews' },
        { url: '5_Symbols/strategy/signal-versus-noise.html', title: 'Signal versus Noise', desc: 'Every page and current report scored and sorted by decision-changing signal vs attention-burning noise, filtered by the H9 $10k gate.', cat: 'Strategy', tags: 'signal noise ranking attention filter evidence theater h9 sort catalog' },
        { url: '5_Symbols/product/exam-performance-evidence.html', title: 'Candidate Exam Performance Evidence', desc: 'A real, anonymized candidate exam pass driven by meetup motivation, not product use -- what it does and does not prove.', cat: 'Strategy', tags: 'candidate exam performance evidence meetup motivation skilljar anonymized pass score' },
        { url: 'exam-topics.html', title: 'Exam Topic Blueprint', desc: 'Full official topic list for the Associate (19 topics, real mastery data) and Architect (30 topics) exams, grouped for curriculum sequencing.', cat: 'Strategy', tags: 'exam topics blueprint curriculum associate architect foundations professional domains' },
        { url: '5_Symbols/hypotheses/hypothesis-connectivity.html', title: 'What Does "Not Connected" Mean?', desc: 'Explains the three patterns behind a disconnected hypothesis in the Dependency Map: fully isolated, foundational-uncited gap, and terminal leaf.', cat: 'Strategy', tags: 'connectivity dependency map isolated orphan gap terminal leaf depends on feeds' },
        { url: '5_Symbols/hypotheses/h1-not-connected.html', title: 'Why H1 Sits Alone', desc: 'Why H1 has no arrows on the tracker, whether that isolation is a risk, what it says about the business, and whether to leave it alone.', cat: 'Strategy', tags: 'h1 isolation not connected foundational uncited gap leave alone f12 partner network' },
        { url: '5_Symbols/strategy/single-founder-bandwidth.html', title: 'Single-Founder Bandwidth', desc: 'The founder weekly time ledger: contract day job, content production, and the Sunday live cohort slot.', cat: 'Strategy', tags: 'single founder bandwidth time ledger ir35 contractor sunday schedule' },
        { url: '5_Symbols/strategy/listen-more-than-you-speak.html', title: 'Listen More Than You Speak', desc: 'Rifat Erdem Sahin\'s Stage 1-2 role: collect feedback, listen more than he speaks, and let the audience cocreate the next shipped change.', cat: 'Strategy', tags: 'listen more than you speak founder role feedback cocreate customer development h29 sunday skool' },
        { url: '5_Symbols/strategy/reading-and-learning-guardrails.html', title: 'Reading & Learning Guardrails', desc: 'Customer discovery starts with listening and deep reading, not posting. Enforces 4:1 reading-to-posting ratio and strict anti-broadcasting guardrails.', cat: 'Strategy', tags: 'reading learning guardrails listening customer discovery steve blank anti posting trap broadcast throttle 4:1 ratio h29' },
        { url: '5_Symbols/strategy/delivery-pilot-roadmap.html', title: 'Delivery Pilot Roadmap & Ultimate IT Contractor Guide', desc: '4-stage career transformation pipeline: hands-on training, Pearson VUE certification, VIP CV/recruiter cowork, and IT contracting mastery.', cat: 'Strategy', tags: 'delivery pilot roadmap ultimate it contractor course forward deployed engineer fde cv linkedin recruiter cowork ltd co ir35 day rate tenders rfp h30' },
        { url: '5_Symbols/strategy/what-does-delivery-pilot-mean.html', title: 'What Does "Delivery Pilot" Mean?', desc: 'Core philosophy and meaning of Delivery Pilot: delivering solutions from A to B, piloting AI swarms as Forward Deployed Engineers, and transformation over chatter.', cat: 'Strategy', tags: 'what does delivery pilot mean fde forward deployed engineer piloting ai solutions a to b transformation not chatter turn key pilots h30' },
        { url: '5_Symbols/hypotheses/hyp-h29.html', title: 'H29 · Listen More Than You Speak', desc: 'Detail page with premise-conclusion-status SVG diagram for H29: founder-as-listener and audience cocreation.', cat: 'Hypothesis Detail', tags: 'h29 hypothesis detail listen speak feedback cocreate founder role svg diagram' },
        { url: '5_Symbols/hypotheses/hyp-h30.html', title: 'H30 · Delivery Pilot Career Transformation Roadmap', desc: 'Detail page with premise-conclusion-status SVG diagram for H30: Training → Certification → CV Promotion → IT Contractor Mastery.', cat: 'Hypothesis Detail', tags: 'h30 hypothesis detail delivery pilot roadmap ultimate it contractor forward deployed engineer cv recruiter cowork svg diagram' },
        { url: '5_Symbols/product/vc-deck.html', title: 'VC Deck', desc: 'Interactive slide-by-slide investor deck covering problem, solution, market, business model, traction, GTM, moat, and the ask.', cat: 'Strategy', tags: 'vc deck investor slides pitch interactive presentation' },
        { url: '5_Symbols/product/vc-feedback.html', title: 'VC Constructive Feedback', desc: 'The memo a constructive venture partner would write after the deck: eight cited notes, rationale, and what evidence would close each one.', cat: 'Strategy', tags: 'vc feedback constructive investor memo default alive graham andreessen gurley thiel raise' },
        { url: '5_Symbols/strategy/alex-hormozi-agent.html', title: 'Alex Hormozi Agent', desc: 'Blunt offer-and-leads audit in Hormozi voice from $100M Offers and $100M Leads: value equation, Grand Slam stack, Core Four, and a local ask-the-agent desk.', cat: 'Strategy', tags: 'alex hormozi agent 100m offers 100m leads grand slam value equation core four lead magnet rule of 100' },
        { url: '5_Symbols/strategy/one-vs-many-live.html', title: '1-1 vs One Live Class', desc: 'Hormozi delivery: fill one Sunday class; keep capped 1-1 as the learning and cash lab (uWdIgftpvBI); do not open extra live nights until sell-out.', cat: 'Strategy', tags: 'one vs many live 1-1 coaching sunday cohort leverage hormozi 2026 start over uWdIgftpvBI bandwidth h5 h9 h29' },
        { url: '5_Symbols/strategy/leverages.html', title: 'Leverages & Unfair Advantages', desc: 'An audit of founder Rifat Erdem Sahin\'s leverages (IT experience, YouTube reach, Venture Coffee meetups) mapped to Ali Abdaal\'s MILES framework and Alex Hormozi\'s leverage ideas.', cat: 'Strategy', tags: 'leverages unfair advantages miles framework ali abdaal alex hormozi domain authority youtube reach venture coffee london' },
        { url: '5_Symbols/product/pitch-deck.html', title: '5-Minute Pitch Deck', desc: 'Single-scroll executive-review summary of the business with links to full detail on every claim.', cat: 'Strategy', tags: 'pitch deck 5 minute executive summary tldr' },
        { url: '5_Symbols/product/one-pager.html', title: 'Copy-Paste One-Pager', desc: 'Plain-text business analysis summary sized to paste into external idea-validation sites and forums.', cat: 'Strategy', tags: 'one pager copy paste validation summary plain text external' },
        { url: '5_Symbols/product/idea.html', title: 'Tell Us About Your Idea', desc: 'A detailed one-page overview of the business idea: what is built, problem solved, differences, target customer, and opportunity size.', cat: 'Strategy', tags: 'idea elevator pitch problem solution customer opportunity business summary YC YCombinator' },
        { url: '5_Symbols/strategy/market-reality-check.html', title: 'Your Market Reality Check', desc: 'Evaluation of the customer job-to-be-done, value chain dynamics, category table stakes, and Vonos.ai visual integration.', cat: 'Strategy', tags: 'market reality check stress test job to be done value chain vonos table stakes' },
        { url: '5_Symbols/strategy/why-certification.html', title: 'Why Certification Matters', desc: 'Prospect-facing case for AI certification: pay premiums, employer partner-tier gating, and FDE hiring growth.', cat: 'Strategy', tags: 'why certification matters career prospects employer value' },
        { url: '5_Symbols/strategy/cert-value-ai-era.html', title: 'Cert Value in the AI Era', desc: 'Why certification value is bifurcating: memorization/trivia certs decline while judgement-verifying, scenario-based certs rise, tracked as H25.', cat: 'Strategy', tags: 'cert value ai era judgement recall bifurcation regulated procurement dod 8140 h25' },
        { url: '5_Symbols/strategy/perception-of-ai.html', title: 'Perception of AI: Skeptical View', desc: 'Why elite engineers and Linus Torvalds maintain a skeptical stance on AI: role shift to reviewer, bug verification tax, and human-vetted patches. Discovery source cited as Charles (first name only).', cat: 'Strategy', tags: 'perception of ai skeptical linus torvalds open source summit charles junk verification lead role shift h25' },
        { url: '5_Symbols/strategy/skills-gap.html', title: 'Enterprise AI Skills Gap', desc: 'Why AI and agentic systems open a skills gap, how Digital Immigrants act as Delivery Pilots, and the stage focuses.', cat: 'Strategy', tags: 'skills gap enterprise delivery pilots digital immigrants skool badges live samples assessment' },
        { url: '5_Symbols/product/self-assessment.html', title: 'Self-Assessment', desc: 'Interactive 3-question quiz routing prospects to the free cohort, the $29 bundle, membership, or live cohort.', cat: 'Strategy', tags: 'self assessment quiz recommendation which offer fits me' },
        { url: '5_Symbols/product/discovery-journey.html', title: 'The Discovery Journey', desc: 'Prospect-facing plain-language guide to what happens in a customer discovery call and how to join.', cat: 'Strategy', tags: 'discovery journey prospect interview join customer development' },
        { url: '5_Symbols/strategy/moat.html', title: 'Defensive Capabilities & Moat', desc: 'Honest investor-facing look at what is and isn\'t defensible: founder-market fit, content catalog, network effects, and the thin spots.', cat: 'Strategy', tags: 'moat defensive competitive advantage investors thin spots' },
        { url: '5_Symbols/strategy/maot.html', title: 'MAOT — Minimum Awesome Outcome Threshold', desc: 'A customer-development framework concept: the delight threshold beyond MVP where organic referral starts, tracked as H20.', cat: 'Strategy', tags: 'maot minimum awesome outcome threshold delight referral framework h20' },
        { url: '5_Symbols/strategy/pain-points.html', title: 'Customer Pain Points: The Emotional Drivers', desc: 'Why technical professionals pursue AI certification: an emotional mix of fear of obsolescence, greed for pay premiums, and career insecurity.', cat: 'Strategy', tags: 'pain points emotional drivers greed fear insecurity psychology seeker' },
        { url: '5_Symbols/product/dictionary.html', title: 'Dictionary & Glossary', desc: 'Every acronym and piece of jargon used across the site, defined in one place, with reference links back to where each one is used.', cat: 'Strategy', tags: 'dictionary glossary acronyms jargon definitions terms moat maot arr cac ltv' },
        { url: '5_Symbols/product/partners.html', title: 'Partner With Us', desc: 'Outward-facing invitation for corporate training, content/co-instructor, and referral partnerships.', cat: 'Business Model', tags: 'partners partnership corporate b2b co-instructor referral' },
        { url: '5_Symbols/product/exam-prep-product.html', title: 'Exam Prep Bundle ($29)', desc: 'One-time $29 SKU — memory cards, prep exam, and mock exam — positioned alongside the membership and live cohort tiers, tracked as H21.', cat: 'Business Model', tags: 'exam prep bundle 29 dollars memory cards mock exam product h21' },
        { url: '5_Symbols/growth/conversation-starters.html', title: 'Conversation Starters for Events', desc: 'Networking swipe file of one-line openers and role-play scripts for events and meetups.', cat: 'Growth', tags: 'conversation starters events networking role play openers pitch' },
        { url: '5_Symbols/growth/metrics-dashboard.html', title: 'Metrics Dashboard', desc: 'Unified decision-maker view of confidence score, stage-gate progress, and live traction signals in one screen.', cat: 'Growth', tags: 'metrics dashboard decision makers unified kpi rollup' },
        { url: '5_Symbols/growth/market-fit-channels.html', title: 'Market Fit & Channels', desc: 'Customer-facing demonstration of real traction signals and the channels people actually use to find the program.', cat: 'Growth', tags: 'market fit channels demonstration customers signals traction' },
        { url: '5_Symbols/growth/ai-demo.html', title: 'Adaptive AI Prep — Concept Demo', desc: 'Interactive concept demo of adaptive, explanation-driven practice questions that adjust difficulty.', cat: 'Growth', tags: 'ai demo adaptive interactive practice concept prototype' },
        { url: '5_Symbols/hypotheses/hyp-h20.html', title: 'H20 · MAOT predicts organic referral', desc: 'Detail page with premise-conclusion-status SVG diagram for H20.', cat: 'Hypothesis Detail', tags: 'h20 hypothesis detail maot referral delight svg diagram' },
        { url: '5_Symbols/hypotheses/hyp-h21.html', title: 'H21 · $29 Exam Prep Bundle entry SKU', desc: 'Detail page with premise-conclusion-status SVG diagram for H21.', cat: 'Hypothesis Detail', tags: 'h21 hypothesis detail exam prep bundle 29 sku svg diagram' },
        { url: '5_Symbols/hypotheses/hyp-h22.html', title: 'H22 · Certified-talent delivery placement (FDE model)', desc: 'Detail page with premise-conclusion-status SVG diagram for H22.', cat: 'Hypothesis Detail', tags: 'h22 hypothesis detail forward deployed engineer talent placement recruiting svg diagram' },
        { url: '5_Symbols/hypotheses/hyp-h24.html', title: 'H24 · Emotional Pain Drivers', desc: 'Detail page with premise-conclusion-status SVG diagram for H24.', cat: 'Hypothesis Detail', tags: 'h24 hypothesis detail emotional pain drivers greed fear insecurity svg diagram' },
        { url: '5_Symbols/hypotheses/hyp-h25.html', title: 'H25 · Cert Value Bifurcation', desc: 'Detail page with premise-conclusion-status SVG diagram for H25.', cat: 'Hypothesis Detail', tags: 'h25 hypothesis detail cert value bifurcation judgement recall ai era svg diagram' },
        { url: '5_Symbols/bmc/business-model-canvas.html', title: 'Business Model Canvas (BMC)', desc: 'The master 9-box canvas showing partners, key actions, value prop, channels, and revenue.', cat: 'Business Model', tags: 'canvas bmc partners actions value revenue' },
        { url: '5_Symbols/bmc/value-proposition.html', title: 'Value Proposition Canvas', desc: 'Mapping user pains/gains directly to our features and product services.', cat: 'Business Model', tags: 'value proposition pains gains features benefits' },
        { url: '5_Symbols/bmc/bmc-customer-segments.html', title: 'BMC: Customer Segments', desc: 'Target cohorts, early adopters, and certification candidate segment definition.', cat: 'Business Model', tags: 'segments cohorts early adopters candidate' },
        { url: '5_Symbols/bmc/bmc-channels.html', title: 'BMC: Channels', desc: 'Distribution channels including YouTube, LinkedIn, organic search, and newsletters.', cat: 'Business Model', tags: 'channels distribution youtube linkedin newsletter' },
        { url: '5_Symbols/bmc/bmc-customer-relationships.html', title: 'BMC: Customer Relationships', desc: 'Self-service video access, discord community membership, and live Q&As.', cat: 'Business Model', tags: 'relationships self service discord community q&a' },
        { url: '5_Symbols/bmc/bmc-revenue-streams.html', title: 'BMC: Revenue Streams', desc: 'YouTube Memberships, mockup exam prep, high-ticket cohort bootcamps, and run-rates.', cat: 'Business Model', tags: 'revenue income youtube membership cohort pricing' },
        { url: '5_Symbols/bmc/bmc-key-resources.html', title: 'BMC: Key Resources', desc: 'Animation assets, study material, tech architecture blueprints, and cloud infrastructure.', cat: 'Business Model', tags: 'resources assets study blueprint infrastructure' },
        { url: '5_Symbols/bmc/bmc-key-activities.html', title: 'BMC: Key Activities', desc: 'Video script writing, timeline editing, mockup exam creation, and developer outreach.', cat: 'Business Model', tags: 'activities scripts editing mockup outreach' },
        { url: '5_Symbols/bmc/bmc-key-partners.html', title: 'BMC: Key Partners', desc: 'Cloud platforms, exam beta-testers, online developer groups, and video editors.', cat: 'Business Model', tags: 'partners beta-testers editors cloud groups' },
        { url: '5_Symbols/bmc/bmc-cost-structure.html', title: 'BMC: Cost Structure', desc: 'Fixed/variable costs, animation software licenses, hosting, and freelance editor fees.', cat: 'Business Model', tags: 'costs fixed variable software licensing hosting fees' },
        { url: '5_Symbols/growth/sales-pipeline.html', title: 'Sales Pipeline & Funnel', desc: 'Visualization of stages from YouTube view to subscription and cohort signup.', cat: 'Growth', tags: 'pipeline funnel conversion stages youtube subscription' },
        { url: '5_Symbols/growth/conversion-strategy.html', title: 'Conversion Strategy & Tactics', desc: 'Systematic funnel scan, drop-off diagnostics, Hormozi/Leeds conversion tactics, founder advice, and interactive revenue simulator.', cat: 'Growth', tags: 'conversion strategy tactics funnel leaks hormozi value equation leeds urgency calculator revenue' },
        { url: '5_Symbols/growth/flywheel.html', title: 'Customer Growth Flywheel', desc: 'Frictionless acquisition loops, retention programs, and graduate referral engines.', cat: 'Growth', tags: 'flywheel loops acquisition retention referral' },
        { url: '5_Symbols/growth/quality-gates.html', title: 'Quality Gates & Triggers', desc: 'Defined milestones to move from discovery to validation, creation, and building.', cat: 'Growth', tags: 'gates triggers milestones thresholds' },
        { url: '5_Symbols/growth/stage-timelines.html', title: 'Stage Timeline Estimates', desc: 'Estimated start/exit date ranges for each of the four Customer Development stages, with a horizontal timeline diagram and a founder-bandwidth caveat.', cat: 'Growth', tags: 'timeline estimate schedule dates gantt stage duration' },
        { url: '5_Symbols/growth/90-day-execution-plan.html', title: '90-Day Execution Plan', desc: 'Dated 2026-08-09 to 2026-11-06 execution plan in 3 phases with a full day-by-day calendar, operationalizing H19 stage estimates into a weekly cadence and milestone checklist.', cat: 'Growth', tags: '90 day execution plan phases weeks sprint schedule milestones checklist launch readiness day by day calendar' },
        { url: '5_Symbols/dashboard/calendar.html', title: 'Milestone Calendar', desc: 'Chronological list of named, dated milestones past and projected, expanding the H19 stage-timeline estimates into individual events, including 10 true regulars in Skool.', cat: 'Growth', tags: 'calendar milestones dates schedule roadmap timeline events 10 true regulars skool' },
        { url: '5_Symbols/growth/test-metrics.html', title: 'Test Metrics & Verification', desc: 'Key performance indicators, watch-time thresholds, sign-up targets, and margins.', cat: 'Growth', tags: 'metrics verification kpi thresholds target' },
        { url: '5_Symbols/growth/test-plan.html', title: 'Test Plan', desc: 'Execution calendar built around the weekly Sunday free cohort: discovery interviews, funnel instrumentation, cohort launches, onsite pilots.', cat: 'Growth', tags: 'test plan execution calendar sunday cohort discovery interviews cadence' },
        { url: '5_Symbols/growth/advertisement.html', title: 'Paid Advertisement', desc: 'Conditional, post-validation paid ad channels (YouTube, LinkedIn, Google Search, Reddit, newsletters) gated by a CAC/LTV sustainability check.', cat: 'Growth', tags: 'paid ads advertising cac ltv youtube linkedin google reddit sponsorship' },
        { url: '5_Symbols/growth/when-to-advertise.html', title: 'When to Start Paid Advertisements', desc: 'Timing gate for paid ads: what to do instead of advertising, when spend is forbidden, and when a capped CAC/LTV test becomes an option.', cat: 'Growth', tags: 'when to advertise paid ads timing gate organic first do not advertise cac ltv h16' },
        { url: '5_Symbols/growth/hormozi-vip-leadgen.html', title: 'Hormozi Rainmaker VIP Lead Generation', desc: 'Alex Hormozi 5-step rainmaker lead generation engine converting paid Meta/LinkedIn leads into $250/yr VIP Tier and £500-£1000/day FDE contractors.', cat: 'Growth', tags: 'hormozi rainmaker lead generation paid ads speed to lead sms zapier crm vip tier fde contractor roas h16 h30' },
        { url: '5_Symbols/growth/funnel-math.html', title: 'Funnel Math', desc: 'Backward-calculated views-needed-for-$10k arithmetic reconciling the H4 and H7 funnel models, with a sensitivity table.', cat: 'Growth', tags: 'funnel math views needed calculation ctr conversion sensitivity' },
        { url: '5_Symbols/growth/unit-economics.html', title: 'Unit Economics', desc: 'Per-seat and per-member economics for the $250 cohort and $10/mo membership, priced against the founder day-rate benchmark.', cat: 'Growth', tags: 'unit economics per seat per member margin day rate ir35' },
        { url: '5_Symbols/growth/pricing-change-strategy.html', title: 'Pricing Change Strategy & Milestone Roadmap', desc: 'Transition roadmap for Tier 2 ($1→$10/mo) and Tier 3 ($250→$1,000/yr), triggered by 4 stage milestones with grandfathering rules.', cat: 'Growth', tags: 'pricing change strategy tier progression sit in share screen milestones grandfathering urgency' },
        { url: '5_Symbols/growth/cost-side-model.html', title: 'Cost-Side Model', desc: 'Business-level cost stack, founder time-opportunity cost, and break-even math against the $100/mo infra cost.', cat: 'Growth', tags: 'cost side model break even infra opportunity cost' },
        { url: '5_Symbols/growth/validation-repeat-gate.html', title: 'Validation Repeat Gate', desc: 'Revises the $10k Stage 2 exit gate to require 2 consecutive cohort launches instead of one.', cat: 'Growth', tags: 'validation repeat gate two launches revenue false positive' },
        { url: '5_Symbols/growth/marketing-tactics.html', title: 'Marketing Tactics: The Headline Swipe File', desc: 'Eight draft headlines built on the Samuel Leeds urgency formula, each priced with a gain/loss ledger and a no-guarantee compliance rule.', cat: 'Growth', tags: 'marketing tactics headlines copywriting titles urgency swipe file samuel leeds' },
        { url: '5_Symbols/growth/funfair-tokens.html', title: '🎡 Funfair Token System: Time-Based Tokens', desc: 'Audience earns time-based tokens that expire weekly and spends them at stalls inside the fair on Memory Cards, Mock Exams, and the Ultimate IT Contractor Course.', cat: 'Growth', tags: 'funfair tokens time based expiry gamification engagement memory cards mock exams contractor course stalls urgency h21 h30' },
        { url: '5_Symbols/growth/youtube-titles-skool-mapping.html', title: 'YouTube Titles → Skool Content Mapping', desc: 'Eight YouTube title ideas mapped to their intended Skool landing destination (free feed, $10/mo membership, $29 bundle, or live cohort), each with a stated rationale.', cat: 'Growth', tags: 'youtube titles skool mapping funnel destination classroom membership bundle cohort headlines' },
        { url: '5_Symbols/growth/video-conversion-tactics.html', title: 'Video End-Screen & Conversion Tactics', desc: 'Actionable video-level conversion mechanics: Skool walkthrough end cards, blurred cheat sheet reveals, comment scenario hooks, and channel trailer routing. Founder voice required on the Skool ask.', cat: 'Growth', tags: 'video conversion tactics end screen video cards skool walkthrough blurred cheat sheet comments hooks founder voice' },
        { url: '5_Symbols/growth/founder-voice-skool-cta.html', title: 'Founder Voice vs AI Voice', desc: 'Two independent viewers of AI Isn\'t a Bubble accepted the content and rejected an automated voice when selling Skool. Teach with animation; sell in founder voice.', cat: 'Growth', tags: 'founder voice automated voice ai tts skool cta youtube 27jXA2V2Zio h2 h5 h29' },
        { url: '5_Symbols/growth/daily-community-promotion-templates.html', title: 'Daily Skool & Sunday Promo Templates', desc: '7-day daily swipe file and copy-paste post templates for Skool community growth and Sunday 9-11pm UK live cohort invitations, highlighting customization and self-learning.', cat: 'Growth', tags: 'daily promotion templates skool sunday cohort swipe file copy paste customization self learning agentic coding mcp second brain fde contractor invite' },
        { url: '5_Symbols/dashboard/todo.html', title: 'Task List', desc: 'Recurring weekly loop (3 videos, Sunday cohort, Skool answers, YouTube comment batch) plus one-off production/build tasks: newsletter signup, video performance testing.', cat: 'Growth', tags: 'todo task list recurring weekly videos cohort skool youtube comments daily hello connect notifications newsletter animations baseline production' },
        { url: '5_Symbols/dashboard/weekly-todos.html', title: 'Weekly Todos & Execution Cadence', desc: 'Structured 7-day recurring loop, operating lanes, day-by-day execution checklist, and visual slide architecture linked to todo.html.', cat: 'Growth', tags: 'weekly todos cadence sprint schedule monday sunday live cohort skool pass reverse response marketing' },
        { url: '5_Symbols/growth/content-analysis.html', title: 'Content Analysis', desc: 'Per-video retention log tracking animated content performance against the 40% MVP target, seeded with a 68% first data point.', cat: 'Growth', tags: 'content analysis retention video performance analytics' },
        { url: '5_Symbols/growth/youtube-shorts.html', title: 'YouTube Shorts Flywheel', desc: 'First Shorts window (224 views / 28d; tokenization 34 views, 85.9% AVD), Priestley short→course→long flywheel, common-language keyword queue, Tuncer 300-video Validation fence (H32).', cat: 'Growth', tags: 'youtube shorts flywheel priestley tokenization llm glossary h32 h28 tuncer 300 videos validation skool' },
        { url: '5_Symbols/growth/youtube-channel-metrics.html', title: 'YouTube Channel Metrics', desc: 'Unified watch-time, views, and engagement view with expected-rate targets, including new H28 engagement-rate benchmarks.', cat: 'Growth', tags: 'youtube channel metrics watch time views engagement rate ctr likes comments subscribers' },
        { url: '5_Symbols/hypotheses/hyp-h32.html', title: 'H32 · Priestley Five-Step Path (CHAOS)', desc: 'Daniel Priestley standing-start path: apprenticeship, 90-day hustle, CHAOS, four-person ramp, seven-figure KPI. This business is in CHAOS.', cat: 'Hypothesis Detail', tags: 'h32 hypothesis priestley chaos apprenticeship side hustle product for prospects core offer seven figure kpi tuncer' },
        { url: '5_Symbols/growth/youtube-banner.html', title: 'YouTube Channel Top Banner', desc: 'Transformational 3-part banner mockup (No Experience → Split Brain → Get Certified in 90 Days) with enhanced Midjourney prompts.', cat: 'Growth', tags: 'youtube banner top header mockup graphic design prompt midjourney conversion' },
        { url: '5_Symbols/hypotheses/hyp-h28.html', title: 'H28 · YouTube Engagement Rate Benchmark', desc: 'Detail page with premise-conclusion-status SVG diagram for H28.', cat: 'Hypothesis Detail', tags: 'h28 hypothesis detail youtube engagement rate likes comments ctr svg diagram' },
        { url: '5_Symbols/growth/cohort-prep.html', title: 'Cohort Prep', desc: 'Weekly WhatsApp/Discord install list and content preview that runs between live Sunday cohort sessions, so attendees arrive ready for hands-on work.', cat: 'Growth', tags: 'cohort prep whatsapp discord install setup weekly hands-on' },
        { url: '5_Symbols/comp/comp-problem-solution.html', title: 'Component: Problem-Solution Fit', desc: 'Validating that study guides solve the core certification retention issues.', cat: 'Component', tags: 'problem solution fit validation' },
        { url: '5_Symbols/comp/comp-mvp.html', title: 'Component: Minimum Viable Product (MVP)', desc: 'Blueprint for the first 3 animated videos and a simple practice test page.', cat: 'Component', tags: 'mvp blueprint videos practice test' },
        { url: '5_Symbols/comp/comp-mvp-separation.html', title: 'Component: MVP Product vs. Marketing Separation & Remediation', desc: 'Critical decoupling audit separating acquisition marketing materials (YouTube animations) from core product materials (Skool cohort, Sunday screen-share, practice exams).', cat: 'Component', tags: 'mvp product marketing separation decoupling fixes remediation youtube skool cohort' },
        { url: '5_Symbols/comp/comp-market.html', title: 'Component: Market & Target Audience', desc: 'Detailed target market size, growth rates, and candidate segmentations.', cat: 'Component', tags: 'market size growth segmentation audience' },
        { url: '5_Symbols/comp/comp-business-model.html', title: 'Component: Business Model', desc: 'Pricing tiers, target margins, and path to initial cohort goal.', cat: 'Component', tags: 'business model pricing margins path goal' },
        { url: '5_Symbols/comp/comp-funnel.html', title: 'Component: Funnel & Channels', desc: 'Acquisition pathways, youtube click-throughs, and discord sign-ups.', cat: 'Component', tags: 'funnel pathways youtube click discord sign-up' },
        { url: '5_Symbols/comp/comp-pmf.html', title: 'Component: Product-Market Fit', desc: 'Analyzing survey results, renewal rates, and student reference score.', cat: 'Component', tags: 'pmf survey renewal reference score' },
        { url: '5_Symbols/comp/comp-roadmap.html', title: 'Component: Sales & Marketing Roadmap', desc: 'Timeline of marketing releases, launches, and promotional cohort sequences.', cat: 'Component', tags: 'roadmap timeline marketing launch cohort' },
        { url: '5_Symbols/comp/comp-creation-validation.html', title: 'Component: Creation Validation & Triggers', desc: 'The thresholds for transition (40% watch rate, $10,000 gross).', cat: 'Component', tags: 'creation validation thresholds trigger gate' },
        { url: '5_Symbols/comp/comp-scale-organization.html', title: 'Component: Scale Organization', desc: 'Structure of hiring freelance editors, assistants, and community leads.', cat: 'Component', tags: 'scale organization hiring structure team roles' },
        { url: '5_Symbols/discovery/state-hypotheses.html', title: 'Discovery: State Hypotheses Detail', desc: 'State the core hypotheses and target audience segment criteria.', cat: 'Discovery Detail', tags: 'hypotheses audience segments criteria state' },
        { url: '5_Symbols/discovery/test-problem.html', title: 'Discovery: Test Problem Detail', desc: 'Test problem pain points and early adopter responses.', cat: 'Discovery Detail', tags: 'test problem pain points adopters responses' },
        { url: '5_Symbols/discovery/test-solution.html', title: 'Discovery: Test Solution Detail', desc: 'Test the MVP solution and check watch time / signup numbers.', cat: 'Discovery Detail', tags: 'test solution mvp watch time signup' },
        { url: '5_Symbols/discovery/verify-pivot.html', title: 'Discovery: Verify or Pivot Detail', desc: 'The final discovery verify-pivot checklist and scaling gate.', cat: 'Discovery Detail', tags: 'verify pivot checklist scaling gate threshold' },
        { url: 'business-overview.html', title: 'Business Overview (One-Pager)', desc: 'Plain-language one-page reference for what the business does, who it is for, how it makes money, and current stage.', cat: 'References', tags: 'business overview one pager elevator pitch summary reference what does this do' },
        { url: '5_Symbols/cd/cd-hypothesis-interview-questions.html', title: 'Hypothesis Interview Questions', desc: 'Specific customer-interview questions mapped to every hypothesis (H1-H19), each with a listen-for cue for what would validate or kill it.', cat: 'Process', tags: 'interview questions hypothesis test validate kill customer discovery ask what to ask' },
        { url: '5_Symbols/product/skool-roadmap.html', title: 'Skool Community & Learning Roadmap', desc: '4-phase Skool operational milestones: Foundation → MVP Classroom & Daily Visuals → 10 True Regulars → VIP Placement Alliance.', cat: 'Product', tags: 'skool roadmap community classroom mvp daily visuals 10 regulars vip alliance delivery pilot' },
        { url: '5_Symbols/strategy/audience-transformation.html', title: 'Audience Transformation (Input/Output)', desc: 'Matrix defining candidate starting input (prompt tinkerer / unverified CV) to Delivery Pilot certified output (£500-£1,000/day Forward Deployed AI Engineer).', cat: 'Strategy', tags: 'audience transformation input output delivery pilot forward deployed engineer fde contractor matrix h30' },
        { url: '5_Symbols/strategy/structure-transformation-leadership.html', title: 'Structure, Transformation & Leadership', desc: 'Strategic triad explaining how lean operational structure and authentic practitioner leadership forge irreversible career transformations.', cat: 'Strategy', tags: 'structure transformation leadership delivery pilot pexabo fde contractor 5-10-5 sprint kafka lean h30 h23 h29' },
        { url: '5_Symbols/growth/audience-roadmap.html', title: 'Audience Transformation Roadmap', desc: '5-step practitioner journey: YouTube/LinkedIn content → Skool community cohorts → Claude Architect course MVP & daily visuals → VIP screen sharing → Delivery Pilot partnership.', cat: 'Growth', tags: 'audience roadmap customer journey youtube linkedin skool mvp course claude certified architect vip deliverypilot partnership' },
        { url: '5_Symbols/growth/mvp-roadmap.html', title: 'MVP Roadmap — How New Jobs Get Created', desc: 'August 2026 operating plan from the community-driven growth diagram: Studio → Cohorts → Claude course → deliverypilot.net contractor persona → new jobs as the outcome.', cat: 'Growth', tags: 'mvp roadmap how new jobs get created studio cohorts claude course deliverypilot contractor persona august 2026 h30 h5 h8 h22' },
        { url: '5_Symbols/growth/inspirational-youtubers.html', title: 'Inspirational YouTubers & Creator Benchmarks', desc: 'Detailed strategic deconstruction of Ali Abdaal, NetworkChuck (including YouTube Short analysis), and TechWorld with Nana for AI Certification Helper.', cat: 'Growth', tags: 'inspirational youtubers creator benchmarks ali abdaal networkchuck tech with nana shorts animation video workflow devops h2 h10 h13 h28' },
        { url: '5_Symbols/strategy/ai-job-creation-vs-apocalypse.html', title: 'AI Job Creation vs. Apocalypse (Tech CEOs vs Rifat Erdem Sahin)', desc: 'Macro labor economic thesis showing AI creates exponentially more jobs through human learning, Jevons paradox, and historical revolution precedent.', cat: 'Strategy', tags: 'ai job creation apocalypse tech ceo rifat erdem sahin farming industrial revolution jevons paradox fde multiplier h31' },
        { url: '5_Symbols/hypotheses/hyp-h31.html', title: 'H31 · AI Job Creation vs. Apocalypse', desc: 'Detail page with premise-conclusion-status SVG diagram for H31.', cat: 'Hypothesis Detail', tags: 'h31 hypothesis detail ai job creation apocalypse tech ceo rifat erdem sahin jevons paradox fde svg diagram' },
        { url: '5_Symbols/product/skool-payout-dashboard.html', title: 'Skool Payout Dashboard & Settlement', desc: 'Real-time tracking of Skool and Stripe Connect balance, first paid $0.60 settlement, 7-14 day clearing cycle, and Wednesday payouts.', cat: 'Product', tags: 'skool payout dashboard settlement stripe delivery pilot balance pending wednesday clearance' },
        { url: '5_Symbols/growth/course-value-and-free-skool-package.html', title: '💎 $10,000 Course Market Value & Free Skool Package', desc: 'Coursera $2k instructor + $2k Starweaver production with 3x multiplier creates $10k market value; given free on YouTube with Skool live support to drive £500–£1k/day contractor transformation.', cat: 'Growth', tags: 'course value 10k coursera starweaver 2000 production free youtube skool support package mehmet true believer 1-1 feedback contractor transformation h1 h3 h5 h8 h29 h30' },
        { url: '5_Symbols/growth/monetization-to-value-creation.html', title: '🔁 Monetization to Value Creation: The $10k Community Engine', desc: 'Why spending $10k on institutional course value completes the autonomous small business cycle: Coursera take-rate arbitrage, reversed beard promise validation, and self-sustaining community economics.', cat: 'Growth', tags: 'monetization value creation 10k exit gate coursera 2000 instructor manager 6000 platform take rate reversed beard promise community loop small business validation sanity check h9 h1 h3 h5 h8 h30' }
    ];

    // Exposed read-only so other pages (e.g. the Site Map) can build their own views
    // from this same data instead of hand-maintaining a second copy that can drift.
    window.__siteMapData = { groups: groups, searchIndex: searchIndex };

    // Build current page URL (relative to root)
    var currentPageUrl = currentFile;
    var pathSegments = location.pathname.split('/');
    if (pathPrefix === '../../') {
        currentPageUrl = pathSegments.slice(-3).join('/');
    } else if (pathPrefix === '../') {
        currentPageUrl = pathSegments.slice(-2).join('/');
    }
    if (location.search) {
        currentPageUrl += location.search;
    }

    function getPageTitleByUrl(url) {
        for (var i = 0; i < searchIndex.length; i++) {
            if (searchIndex[i].url === url || (url.indexOf(searchIndex[i].url) !== -1 && searchIndex[i].url !== 'index.html')) {
                return searchIndex[i].title;
            }
        }
        var cleanTitle = document.title.replace(' | AI Certification Helper', '');
        return cleanTitle || 'Current Page';
    }

    var currentPageTitle = getPageTitleByUrl(currentPageUrl);

    function isActive(href) {
        var hrefFile = href.split('?')[0];
        var hrefQuery = href.split('?')[1] || '';
        
        var hrefFileName = hrefFile.split('/').pop();
        if (hrefFileName !== currentFile) return false;
        
        if (!hrefQuery) return true;
        var currentQuery = location.search.replace(/^\?/, '');
        return hrefQuery === currentQuery;
    }

    function getLatestReviewDate(href) {
        var notes = getNotes();
        var pageNotes = notes.filter(function(note) {
            return note.pageUrl === href || (note.pageUrl.indexOf(href) !== -1 && href !== 'index.html');
        });
        
        if (pageNotes.length === 0) return null;
        
        var latest = pageNotes[0];
        for (var i = 1; i < pageNotes.length; i++) {
            if (pageNotes[i].id > latest.id) {
                latest = pageNotes[i];
            }
        }
        return latest.date;
    }

    function getShortDate(fullDate) {
        if (!fullDate) return "";
        var parts = fullDate.split(',');
        if (parts.length > 0) {
            return parts[0].trim();
        }
        return fullDate;
    }

    function linkHtml(href, label, className) {
        var active = isActive(href) ? ' active' : '';
        var finalHref = href.indexOf('http') === 0 ? href : (pathPrefix + href);
        var cls = className ? (' ' + className) : '';
        
        var reviewDate = getLatestReviewDate(href);
        var reviewHtml = '';
        if (reviewDate) {
            var shortDate = getShortDate(reviewDate);
            reviewHtml = ' <span class="menu-review-indicator" title="Reviewed on ' + reviewDate + '">👁️ ' + shortDate + '</span>';
        }
        
        return '<li><a href="' + finalHref + '" class="nav-link' + cls + active + '">' + label + reviewHtml + '</a></li>';
    }

    function buildHeaderHtml() {
        var currentReviewDate = getLatestReviewDate(currentPageUrl);
        var currentReviewHtml = '';
        if (currentReviewDate) {
            var currentShortDate = getShortDate(currentReviewDate);
            currentReviewHtml = '<div class="page-review-badge" title="Reviewed on ' + currentReviewDate + '">👁️ Reviewed: ' + currentShortDate + '</div>';
        }

        var headerHtml = '<nav class="nav-container">' +
            '<a href="' + pathPrefix + 'index.html" class="logo">' +
            '<div class="logo-icon">AI</div>' +
            '<span class="logo-text">AI Cert Helper</span>' +
            '</a>' +
            currentReviewHtml +
            '<ul class="nav-menu">';

        groups.forEach(function (group) {
            var labelWithEmoji = group.emoji + ' ' + group.label;
            if (group.type === 'link') {
                headerHtml += linkHtml(group.href, labelWithEmoji, group.className);
            } else {
                var hasActiveChild = false;
                group.items.forEach(function (item) {
                    if (isActive(item[0])) {
                        hasActiveChild = true;
                    }
                });
                var activeClass = hasActiveChild ? ' active' : '';
                headerHtml += '<li class="nav-dropdown">' +
                    '<span class="nav-dropdown-toggle ' + group.className + activeClass + '" tabindex="0">' + labelWithEmoji + ' &#9662;</span>' +
                    '<ul class="nav-dropdown-menu">';
                group.items.forEach(function (item) {
                    headerHtml += linkHtml(item[0], item[1], group.className);
                });
                headerHtml += '</ul></li>';
            }
        });

        // Append Search and Notes action items
        headerHtml += '<li class="nav-menu-action">' +
            '<button id="nav-search-btn" class="nav-action-btn" title="Search pages (Ctrl+K or 🔍)">' +
            '<span>🔍</span> Search' +
            '</button>' +
            '</li>';
            
        var notes = getNotes();
        var countBadge = '';
        if (notes.length > 0) {
            countBadge = '<span id="nav-notes-badge" class="badge-count">' + notes.length + '</span>';
        } else {
            countBadge = '<span id="nav-notes-badge" class="badge-count" style="display:none;"></span>';
        }
        
        headerHtml += '<li class="nav-menu-action">' +
            '<button id="nav-notes-btn" class="nav-action-btn" title="My Notes">' +
            '<span>📝</span> Notes' + countBadge +
            '</button>' +
            '</li>';

        var themeIcon = getTheme() === 'light' ? '🌙' : '☀️';
        headerHtml += '<li class="nav-menu-action">' +
            '<button id="nav-theme-btn" class="nav-action-btn" title="Toggle Theme (Light/Dark)">' +
            '<span id="theme-btn-icon">' + themeIcon + '</span> Theme' +
            '</button>' +
            '</li>';

        headerHtml += '</ul></nav>';
        return headerHtml;
    }

    // Modal and Drawer HTML to inject
    var searchModalHtml = 
        '<div id="search-modal" class="modal-overlay">' +
        '  <div class="modal-content">' +
        '    <div class="modal-header">' +
        '      <h3>🔍 Search Project Pages</h3>' +
        '      <button class="modal-close-btn" id="close-search-btn">&times;</button>' +
        '    </div>' +
        '    <div class="modal-body">' +
        '      <div class="search-input-wrapper">' +
        '        <span class="search-input-icon">🔍</span>' +
        '        <input type="text" id="search-input" placeholder="Type page title, category, or keyword..." autocomplete="off">' +
        '      </div>' +
        '      <div id="search-results" class="search-results-list"></div>' +
        '    </div>' +
        '    <div class="modal-footer">' +
        '      <span class="keyboard-tip">Navigate with <kbd>↑</kbd> <kbd>↓</kbd>, <kbd>Enter</kbd> to open</span>' +
        '      <span class="keyboard-tip">Press <kbd>Esc</kbd> to close</span>' +
        '    </div>' +
        '  </div>' +
        '</div>';

    var notesDrawerHtml =
        '<div id="notes-drawer" class="drawer-overlay">' +
        '  <div class="drawer-content">' +
        '    <div class="drawer-header">' +
        '      <h3>📝 Workspace Notes</h3>' +
        '      <div class="drawer-header-actions">' +
        '        <button class="drawer-minimize-btn" id="minimize-notes-btn" title="Minimize">&#8211;</button>' +
        '        <button class="drawer-close-btn" id="close-notes-btn">&times;</button>' +
        '      </div>' +
        '    </div>' +
        '    <div class="drawer-body">' +
        '      <div class="current-page-indicator">' +
        '        <span class="indicator-label">Adding note to:</span>' +
        '        <span class="indicator-value" id="notes-current-page-title"></span>' +
        '      </div>' +
        '      <div class="add-note-form">' +
        '        <textarea id="note-textarea" placeholder="Write a note for this page..." rows="3"></textarea>' +
        '        <button id="add-note-btn" class="btn btn-primary">Add Note to Page</button>' +
        '      </div>' +
        '      <div class="notes-divider"></div>' +
        '      <div class="notes-list-header">' +
        '        <h4>All Saved Notes (<span id="notes-count">0</span>)</h4>' +
        '      </div>' +
        '      <div id="notes-list" class="notes-list-container"></div>' +
        '    </div>' +
        '    <div class="drawer-footer">' +
        '      <button id="copy-notes-btn" class="btn btn-secondary">📋 Copy All (Markdown)</button>' +
        '      <button id="clear-notes-btn" class="btn btn-danger">🗑️ Clear All</button>' +
        '    </div>' +
        '  </div>' +
        '</div>';

    // Cookie Utilities
    function setCookie(name, value, days) {
        var expires = "";
        if (days) {
            var date = new Date();
            date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
            expires = "; expires=" + date.toUTCString();
        }
        document.cookie = name + "=" + (encodeURIComponent(value) || "")  + expires + "; path=/; SameSite=Lax";
    }

    function getCookie(name) {
        var nameEQ = name + "=";
        var ca = document.cookie.split(';');
        for(var i=0;i < ca.length;i++) {
            var c = ca[i];
            while (c.charAt(0)==' ') c = c.substring(1,c.length);
            if (c.indexOf(nameEQ) == 0) return decodeURIComponent(c.substring(nameEQ.length,c.length));
        }
        return null;
    }

    function getNotes() {
        var raw = getCookie('site_notes');
        if (!raw) return [];
        try {
            return JSON.parse(raw);
        } catch (e) {
            return [];
        }
    }

    function saveNotes(notes) {
        setCookie('site_notes', JSON.stringify(notes), 365);
    }

    // Theme Utilities
    function getTheme() {
        return getCookie('site_theme') || 'dark';
    }

    function applyTheme(theme) {
        document.body.classList.toggle('light-theme', theme === 'light');
        var icon = document.getElementById('theme-btn-icon');
        if (icon) icon.textContent = theme === 'light' ? '🌙' : '☀️';
    }

    function toggleTheme() {
        var next = getTheme() === 'light' ? 'dark' : 'light';
        setCookie('site_theme', next, 365);
        applyTheme(next);
    }

    function escapeHtml(text) {
        var map = {
            '&': '&amp;',
            '<': '&lt;',
            '>': '&gt;',
            '"': '&quot;',
            "'": '&#039;'
        };
        return text.replace(/[&<>"']/g, function(m) { return map[m]; });
    }

    function renderNotes() {
        var notes = getNotes();
        var listContainer = document.getElementById('notes-list');
        var notesCountEl = document.getElementById('notes-count');
        var badgeEl = document.getElementById('nav-notes-badge');
        
        if (notesCountEl) notesCountEl.textContent = notes.length;
        
        // Update nav badge
        if (badgeEl) {
            if (notes.length > 0) {
                badgeEl.textContent = notes.length;
                badgeEl.style.display = 'inline-flex';
            } else {
                badgeEl.style.display = 'none';
            }
        }
        
        if (!listContainer) return;
        
        if (notes.length === 0) {
            listContainer.innerHTML = 
                '<div class="note-empty-state">' +
                '  <span style="font-size: 2rem;">📝</span>' +
                '  <p>No notes taken yet.</p>' +
                '  <p style="font-size: 0.8rem; color: var(--text-muted);">Use the box above to write notes for this page. They will save in a cookie and be accessible from any page!</p>' +
                '</div>';
            return;
        }
        
        var notesHtml = '';
        for (var i = notes.length - 1; i >= 0; i--) {
            var note = notes[i];
            var finalNoteUrl = note.pageUrl.indexOf('http') === 0 ? note.pageUrl : (pathPrefix + note.pageUrl);
            
            notesHtml += 
                '<div class="note-item" id="note-item-' + note.id + '">' +
                '  <div class="note-item-header">' +
                '    <a href="' + finalNoteUrl + '" class="note-item-page">' + note.pageTitle + '</a>' +
                '    <div style="display: flex; gap: 0.4rem;">' +
                '      <button class="note-edit-btn" data-id="' + note.id + '" title="Edit Note" style="background:transparent; border:none; color:var(--text-muted); cursor:pointer; font-size:0.85rem; transition:var(--transition-fast);">✏️</button>' +
                '      <button class="note-delete-btn" data-id="' + note.id + '" title="Delete Note" style="background:transparent; border:none; color:var(--text-muted); cursor:pointer; font-size:0.85rem; transition:var(--transition-fast);">🗑️</button>' +
                '    </div>' +
                '  </div>' +
                '  <div class="note-item-body">' +
                '    <div class="note-item-text">' + escapeHtml(note.text) + '</div>' +
                '  </div>' +
                '  <div class="note-item-date">' + note.date + '</div>' +
                '</div>';
        }
        listContainer.innerHTML = notesHtml;
        
        // Attach delete events
        var deleteBtns = listContainer.querySelectorAll('.note-delete-btn');
        deleteBtns.forEach(function(btn) {
            btn.addEventListener('click', function() {
                var id = parseInt(this.getAttribute('data-id'), 10);
                deleteNote(id);
            });
        });

        // Attach edit events
        var editBtns = listContainer.querySelectorAll('.note-edit-btn');
        editBtns.forEach(function(btn) {
            btn.addEventListener('click', function() {
                var id = parseInt(this.getAttribute('data-id'), 10);
                startEditNote(id);
            });
        });
    }

    function startEditNote(id) {
        var notes = getNotes();
        var note = notes.find(function(n) { return n.id === id; });
        if (!note) return;
        
        var itemEl = document.getElementById('note-item-' + id);
        if (!itemEl) return;
        
        var bodyEl = itemEl.querySelector('.note-item-body');
        if (!bodyEl) return;
        
        var headerActionEl = itemEl.querySelector('.note-item-header div');
        if (headerActionEl) headerActionEl.style.display = 'none';
        
        bodyEl.innerHTML = 
            '<div class="note-edit-container" style="display:flex; flex-direction:column; gap:0.5rem; width:100%; margin-top:0.25rem;">' +
            '  <textarea class="note-edit-textarea" rows="3" style="width:100%; background:rgba(0,0,0,0.25); border:1px solid var(--color-primary); border-radius:6px; color:var(--text-primary); padding:0.5rem; font-family:var(--font-sans); outline:none; resize:vertical; font-size:0.9rem;">' + escapeHtml(note.text) + '</textarea>' +
            '  <div style="display:flex; gap:0.4rem;">' +
            '    <button class="btn btn-primary note-save-btn" data-id="' + id + '" style="padding:0.3rem 0.6rem; font-size:0.75rem; border-radius:4px;">Save</button>' +
            '    <button class="btn btn-secondary note-cancel-btn" style="padding:0.3rem 0.6rem; font-size:0.75rem; border-radius:4px;">Cancel</button>' +
            '  </div>' +
            '</div>';
            
        var textarea = bodyEl.querySelector('.note-edit-textarea');
        if (textarea) {
            textarea.focus();
            textarea.setSelectionRange(textarea.value.length, textarea.value.length);
            
            textarea.addEventListener('keydown', function(e) {
                if ((e.metaKey || e.ctrlKey) && e.key === 'Enter') {
                    e.preventDefault();
                    bodyEl.querySelector('.note-save-btn').click();
                }
            });
        }
        
        bodyEl.querySelector('.note-save-btn').addEventListener('click', function() {
            var updatedText = textarea.value;
            saveEditedNote(id, updatedText);
        });
        
        bodyEl.querySelector('.note-cancel-btn').addEventListener('click', function() {
            renderNotes();
        });
    }

    function saveEditedNote(id, text) {
        if (!text.trim()) {
            if (confirm('Saving an empty note will delete it. Proceed?')) {
                deleteNote(id);
            }
            return;
        }
        var notes = getNotes();
        var now = new Date();
        var dateString = now.toLocaleString('en-US', { 
            month: 'short', 
            day: 'numeric', 
            year: 'numeric',
            hour: '2-digit', 
            minute: '2-digit' 
        });
        
        notes.forEach(function(note) {
            if (note.id === id) {
                note.text = text;
                note.date = dateString + ' (edited)';
            }
        });
        saveNotes(notes);
        renderNotes();
        mountHeader();
    }

    function addNote(text) {
        if (!text.trim()) return;
        var notes = getNotes();
        var now = new Date();
        var dateString = now.toLocaleString('en-US', { 
            month: 'short', 
            day: 'numeric', 
            year: 'numeric',
            hour: '2-digit', 
            minute: '2-digit' 
        });
        
        var newNote = {
            id: Date.now(),
            pageUrl: currentPageUrl,
            pageTitle: currentPageTitle,
            text: text,
            date: dateString
        };
        
        notes.push(newNote);
        saveNotes(notes);
        renderNotes();
        mountHeader();
    }

    function deleteNote(id) {
        var notes = getNotes();
        var filtered = notes.filter(function(note) {
            return note.id !== id;
        });
        saveNotes(filtered);
        renderNotes();
        mountHeader();
    }

    function clearNotes() {
        if (confirm('Are you sure you want to clear all your saved notes? This will delete the cookie.')) {
            saveNotes([]);
            renderNotes();
            mountHeader();
        }
    }

    function copyNotes() {
        var notes = getNotes();
        if (notes.length === 0) {
            alert('No notes to copy!');
            return;
        }
        
        var md = '# AI Certification Helper - Workspace Notes\n';
        md += '*Generated on: ' + new Date().toLocaleDateString() + '*\n\n';
        
        notes.forEach(function(note, index) {
            var absoluteUrl = location.protocol + '//' + location.host + (location.pathname.substring(0, location.pathname.lastIndexOf('/')) + '/' + pathPrefix + note.pageUrl).replace(/\/\.\.\//g, '/').replace(/\/+/g, '/');
            if (location.protocol === 'file:') {
                var currentPath = location.pathname.substring(0, location.pathname.lastIndexOf('/'));
                var resolvedPath = (currentPath + '/' + pathPrefix + note.pageUrl);
                var stack = [];
                var parts = resolvedPath.split('/');
                for (var p = 0; p < parts.length; p++) {
                    if (parts[p] === '..') {
                        stack.pop();
                    } else if (parts[p] !== '.' && parts[p] !== '') {
                        stack.push(parts[p]);
                    }
                }
                absoluteUrl = 'file:///' + stack.join('/');
            }
            
            md += '### [' + note.pageTitle + '](' + absoluteUrl + ')\n';
            md += '*Saved on: ' + note.date + '*\n\n';
            md += note.text + '\n\n';
            if (index < notes.length - 1) {
                md += 'these are tasks to be asked to be implemented and would be fed back to the ai agent\n\n';
            }
            md += '---\n\n';
        });
        
        md = md.substring(0, md.length - 5);
        
        var copyBtn = document.getElementById('copy-notes-btn');
        var originalText = copyBtn.innerHTML;
        
        navigator.clipboard.writeText(md).then(function() {
            copyBtn.innerHTML = '✅ Copied to Clipboard!';
            copyBtn.style.background = 'var(--gradient-success)';
            setTimeout(function() {
                copyBtn.innerHTML = originalText;
                copyBtn.style.background = '';
            }, 2000);
        }).catch(function(err) {
            console.error('Failed to copy: ', err);
            var textarea = document.createElement('textarea');
            textarea.value = md;
            document.body.appendChild(textarea);
            textarea.select();
            try {
                document.execCommand('copy');
                copyBtn.innerHTML = '✅ Copied to Clipboard!';
                copyBtn.style.background = 'var(--gradient-success)';
                setTimeout(function() {
                    copyBtn.innerHTML = originalText;
                    copyBtn.style.background = '';
                }, 2000);
            } catch (err2) {
                alert('Could not copy automatically. Please copy the text from the console or retry.');
                console.log(md);
            }
            document.body.removeChild(textarea);
        });
    }

    // Search Logic
    var selectedSearchResultIndex = -1;

    function renderSearchResults(query) {
        var resultsContainer = document.getElementById('search-results');
        if (!resultsContainer) return;
        
        if (!query.trim()) {
            var categories = {};
            searchIndex.forEach(function(item) {
                if (!categories[item.cat]) categories[item.cat] = [];
                categories[item.cat].push(item);
            });
            
            var suggestionsHtml = '<div style="margin-bottom: 1rem;"><h4 style="font-size:0.9rem; color:var(--text-muted); margin-bottom: 0.5rem;">Browse Categories</h4><div style="display:flex; flex-wrap:wrap; gap:0.5rem;">';
            Object.keys(categories).forEach(function(cat) {
                suggestionsHtml += '<span class="search-result-category search-cat-suggest" style="cursor:pointer;" data-category="' + cat + '">' + cat + '</span>';
            });
            suggestionsHtml += '</div></div>';
            
            suggestionsHtml += '<div><h4 style="font-size:0.9rem; color:var(--text-muted); margin-bottom: 0.5rem;">Quick Links</h4><div style="display:grid; grid-template-columns:1fr 1fr; gap:0.5rem;">';
            var quickLinks = [
                { url: 'index.html', title: 'Customer Development Hub' },
                { url: '5_Symbols/stages/stage-customer-discovery.html', title: '1. Customer Discovery' },
                { url: '5_Symbols/stages/stage-customer-validation.html', title: '2. Customer Validation' },
                { url: '5_Symbols/bmc/business-model-canvas.html', title: 'Business Model Canvas' }
            ];
            quickLinks.forEach(function(link) {
                var finalLink = pathPrefix + link.url;
                suggestionsHtml += '<a href="' + finalLink + '" class="search-result-item" style="padding:0.6rem 0.8rem;"><div class="search-result-title" style="font-size:0.9rem; margin:0;">' + link.title + '</div></a>';
            });
            suggestionsHtml += '</div></div>';
            
            resultsContainer.innerHTML = suggestionsHtml;
            selectedSearchResultIndex = -1;

            // Bind click events on suggestions
            resultsContainer.querySelectorAll('.search-cat-suggest').forEach(function(el) {
                el.addEventListener('click', function() {
                    var cat = this.getAttribute('data-category');
                    var input = document.getElementById('search-input');
                    if (input) {
                        input.value = cat;
                        renderSearchResults(cat);
                    }
                });
            });
            return;
        }
        
        var terms = query.toLowerCase().split(/\s+/).filter(Boolean);
        var scoredResults = [];
        
        searchIndex.forEach(function(item) {
            var score = 0;
            var titleLower = item.title.toLowerCase();
            var descLower = item.desc.toLowerCase();
            var catLower = item.cat.toLowerCase();
            var tagsLower = item.tags.toLowerCase();
            
            terms.forEach(function(term) {
                if (catLower === term) score += 20;
                else if (catLower.indexOf(term) !== -1) score += 5;
                
                if (titleLower === term) score += 50;
                else if (titleLower.indexOf(' ' + term) !== -1 || titleLower.indexOf(term + ' ') !== -1) score += 20;
                else if (titleLower.indexOf(term) !== -1) score += 10;
                
                if (descLower.indexOf(term) !== -1) score += 5;
                if (tagsLower.indexOf(term) !== -1) score += 8;
            });
            
            if (score > 0) {
                scoredResults.push({
                    item: item,
                    score: score
                });
            }
        });
        
        scoredResults.sort(function(a, b) {
            return b.score - a.score;
        });
        
        if (scoredResults.length === 0) {
            resultsContainer.innerHTML = '<div class="search-no-results">No pages found matching "' + escapeHtml(query) + '"</div>';
            selectedSearchResultIndex = -1;
            return;
        }
        
        var topResults = scoredResults.slice(0, 8);
        var resultsHtml = '';
        topResults.forEach(function(res, index) {
            var item = res.item;
            var finalUrl = item.url.indexOf('http') === 0 ? item.url : (pathPrefix + item.url);
            
            var titleDisplay = escapeHtml(item.title);
            var descDisplay = escapeHtml(item.desc);
            
            terms.forEach(function(term) {
                var regex = new RegExp('(' + escapeRegExp(term) + ')', 'gi');
                titleDisplay = titleDisplay.replace(regex, '<mark style="background: rgba(245, 158, 11, 0.3); color: #fff; border-radius: 2px; padding: 0 2px;">$1</mark>');
                descDisplay = descDisplay.replace(regex, '<mark style="background: rgba(245, 158, 11, 0.2); color: #fff; border-radius: 2px; padding: 0 2px;">$1</mark>');
            });
            
            resultsHtml += 
                '<a href="' + finalUrl + '" class="search-result-item" data-index="' + index + '">' +
                '  <div class="search-result-info">' +
                '    <div class="search-result-title">' + titleDisplay + '</div>' +
                '    <div class="search-result-desc">' + descDisplay + '</div>' +
                '  </div>' +
                '  <span class="search-result-category">' + item.cat + '</span>' +
                '</a>';
        });
        
        resultsContainer.innerHTML = resultsHtml;
        selectedSearchResultIndex = -1;
        
        var resultItems = resultsContainer.querySelectorAll('.search-result-item');
        resultItems.forEach(function(item, idx) {
            item.addEventListener('mouseenter', function() {
                setSelectedResult(idx);
            });
        });
    }

    function escapeRegExp(string) {
        return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    }

    function setSelectedResult(index) {
        var resultsContainer = document.getElementById('search-results');
        if (!resultsContainer) return;
        var items = resultsContainer.querySelectorAll('.search-result-item');
        
        if (selectedSearchResultIndex >= 0 && selectedSearchResultIndex < items.length) {
            items[selectedSearchResultIndex].classList.remove('selected');
        }
        
        selectedSearchResultIndex = index;
        
        if (selectedSearchResultIndex >= 0 && selectedSearchResultIndex < items.length) {
            items[selectedSearchResultIndex].classList.add('selected');
            items[selectedSearchResultIndex].scrollIntoView({ block: 'nearest' });
        }
    }

    // Toggle Overlays
    function openSearch() {
        var modal = document.getElementById('search-modal');
        if (!modal) return;
        closeNotesQuietly();
        modal.classList.add('open');
        document.body.classList.add('overlay-open');
        
        var searchBtn = document.getElementById('nav-search-btn');
        if (searchBtn) searchBtn.classList.add('active');
        
        var input = document.getElementById('search-input');
        if (input) {
            input.value = '';
            input.focus();
            renderSearchResults('');
        }
    }

    function closeSearch() {
        var modal = document.getElementById('search-modal');
        if (!modal) return;
        modal.classList.remove('open');
        
        var searchBtn = document.getElementById('nav-search-btn');
        if (searchBtn) searchBtn.classList.remove('active');
        
        document.body.classList.remove('overlay-open');
    }

    function openNotes() {
        var drawer = document.getElementById('notes-drawer');
        if (!drawer) return;
        closeSearchQuietly();
        drawer.classList.add('open');
        
        var notesBtn = document.getElementById('nav-notes-btn');
        if (notesBtn) notesBtn.classList.add('active');
        
        var textarea = document.getElementById('note-textarea');
        if (textarea) {
            textarea.value = '';
            textarea.focus();
        }
        var pageTitleEl = document.getElementById('notes-current-page-title');
        if (pageTitleEl) {
            pageTitleEl.textContent = currentPageTitle;
        }
        renderNotes();
    }

    function closeNotes() {
        var drawer = document.getElementById('notes-drawer');
        if (!drawer) return;
        drawer.classList.remove('open');

        var notesBtn = document.getElementById('nav-notes-btn');
        if (notesBtn) notesBtn.classList.remove('active');
    }

    function toggleMinimizeNotes() {
        var drawer = document.getElementById('notes-drawer');
        if (!drawer) return;
        var minimized = drawer.classList.toggle('minimized');
        var btn = document.getElementById('minimize-notes-btn');
        if (btn) {
            btn.innerHTML = minimized ? '&#9633;' : '&#8211;';
            btn.title = minimized ? 'Restore' : 'Minimize';
        }
    }
    
    function closeSearchQuietly() {
        var modal = document.getElementById('search-modal');
        if (modal) modal.classList.remove('open');
        var searchBtn = document.getElementById('nav-search-btn');
        if (searchBtn) searchBtn.classList.remove('active');
    }
    
    function closeNotesQuietly() {
        var drawer = document.getElementById('notes-drawer');
        if (drawer) drawer.classList.remove('open');
        var notesBtn = document.getElementById('nav-notes-btn');
        if (notesBtn) notesBtn.classList.remove('active');
    }

    // ==========================================
    // Guided Tour Data and Logic
    // ==========================================
    var tourStops = [
        {
            url: 'index.html',
            title: 'Customer Development Hub',
            desc: 'The starting point. It maps all stages, business validation frameworks, and milestones in Steve Blank\'s framework.',
            emoji: '🏠'
        },
        {
            url: 'motivation.html',
            title: 'Founder Motivation & ICP',
            desc: 'The strategic \'why\' of the project. Understand Rifat\'s personal rules, target personas, revenue streams, and exit gates.',
            emoji: '🔥'
        },
        {
            url: '5_Symbols/cd/cd-process.html',
            title: 'Discovery Process Overview',
            desc: 'The roadmap for Customer Discovery: State, Test, Validate, and Exit.',
            emoji: '📍'
        },
        {
            url: '5_Symbols/cd/cd-watering-holes.html',
            title: 'Watering Holes & Outreach',
            desc: 'Where early adopters gather (Triton Square, meetups, cohorts) and outreach templates.',
            emoji: '🌐'
        },
        {
            url: '5_Symbols/cd/cd-interview-guide.html',
            title: 'Qualitative Interview Guide',
            desc: 'The core customer development interview script, focusing on customer story gathering and pain/gain signals.',
            emoji: '🎤'
        },
        {
            url: '5_Symbols/cd/cd-interview-recording.html',
            title: 'Interview Recording & Tracker',
            desc: 'The live CRM of customer discovery conversations and follow-up copy templates.',
            emoji: '📝'
        },
        {
            url: '5_Symbols/cd/archived-interview-transcripts.html',
            title: 'Archived Interview Transcripts',
            desc: 'Detailed qualitative interview notes and transcript archives from customer discovery sessions.',
            emoji: '📂'
        },
        {
            url: '5_Symbols/bmc/business-model-canvas.html',
            title: 'Business Model Canvas',
            desc: 'The full 9-box view of the business model. See how value, segments, and costs connect.',
            emoji: '🖼️'
        },
        {
            url: '5_Symbols/bmc/value-proposition.html',
            title: 'Value Proposition Canvas',
            desc: 'Connecting customer pains and gains directly to the training video MVP features.',
            emoji: '💎'
        },
        {
            url: '5_Symbols/bmc/bmc-revenue-streams.html',
            title: 'Revenue Streams & Pricing',
            desc: 'Monetization details: low-ticket mock exams ($10/mo) and high-ticket cohorts ($250-$500).',
            emoji: '💰'
        },
        {
            url: '5_Symbols/hypotheses/hypothesis.html',
            title: 'Hypothesis Dashboard',
            desc: 'The single source of truth tracking all 19 hypotheses (H1 to H19) and their validation status.',
            emoji: '💭'
        },
        {
            url: '5_Symbols/hypotheses/hypothesis-connectivity.html',
            title: 'Hypothesis Dependency Map',
            desc: 'The dependency maps explaining foundational gaps, isolated assumptions, and leaf nodes.',
            emoji: '🔀'
        },
        {
            url: '5_Symbols/growth/unit-economics.html',
            title: 'Unit Economics & Funnel Math',
            desc: 'Financial metrics and ROI calculations showing profitability and sustainability gates.',
            emoji: '💵'
        },
        {
            url: '5_Symbols/comp/comp-roadmap.html',
            title: 'Sales & Marketing Roadmap',
            desc: 'Copywriting swipe files, positioning strategies, and scaling triggers.',
            emoji: '🗺️'
        },
        {
            url: '5_Symbols/dashboard/calendar.html',
            title: 'Milestone Calendar',
            desc: 'The chronological timeline tracking actual done/TBD dates for the project.',
            emoji: '📅'
        },
        {
            url: '5_Symbols/dashboard/confidence-report.html',
            title: 'Business Model Confidence Report',
            desc: 'The final numeric verification sanity check scoring all hypotheses and site links.',
            emoji: '🧪'
        }
    ];

    var relatedConceptsOverride = {
        '5_Symbols/growth/founder-voice-skool-cta.html': [
            { url: '5_Symbols/growth/video-conversion-tactics.html', title: 'Video Conversion Tactics', emoji: '🎬' },
            { url: '5_Symbols/growth/free-educational-content-strategy.html', title: 'Free Content Strategy', emoji: '📺' },
            { url: '5_Symbols/hypotheses/hyp-h5.html', title: 'H5 Organic Skool Sales', emoji: '🟡' },
            { url: '5_Symbols/cd/archived-interview-transcripts.html', title: 'Interview Transcripts', emoji: '📂' }
        ],
        '5_Symbols/execution/4dx-execution-crisis.html': [
            { url: '5_Symbols/execution/4dx-discipline-1.html', title: 'Discipline 1: Focus', emoji: '🎯' },
            { url: '5_Symbols/execution/4dx-discipline-2.html', title: 'Discipline 2: Lead Measures', emoji: '⚖️' },
            { url: '5_Symbols/execution/4dx-discipline-3.html', title: 'Discipline 3: Scoreboard', emoji: '📊' },
            { url: '5_Symbols/execution/4dx-discipline-4.html', title: 'Discipline 4: Cadence', emoji: '🔄' },
            { url: '5_Symbols/execution/eos-traction-alignment.html', title: 'EOS Traction Alignment', emoji: '📘' }
        ],
        '5_Symbols/execution/eos-traction-alignment.html': [
            { url: '5_Symbols/execution/4dx-execution-crisis.html', title: '4DX Hub', emoji: '🌪️' },
            { url: '5_Symbols/hypotheses/hyp-h23.html', title: 'H23 Execution Rhythm', emoji: '🟡' },
            { url: '5_Symbols/growth/90-day-execution-plan.html', title: '90-Day Plan', emoji: '🗓️' }
        ],
        '5_Symbols/execution/4dx-discipline-1.html': [
            { url: '5_Symbols/execution/4dx-execution-crisis.html', title: 'Execution Overview', emoji: '🌪️' },
            { url: '5_Symbols/execution/4dx-discipline-2.html', title: 'Discipline 2: Lead Measures', emoji: '⚖️' },
            { url: '5_Symbols/growth/quality-gates.html', title: 'Quality Gates', emoji: '🚦' }
        ],
        '5_Symbols/execution/4dx-discipline-2.html': [
            { url: '5_Symbols/execution/4dx-discipline-1.html', title: 'Discipline 1: Focus', emoji: '🎯' },
            { url: '5_Symbols/execution/4dx-discipline-3.html', title: 'Discipline 3: Scoreboard', emoji: '📊' },
            { url: '5_Symbols/growth/test-metrics.html', title: 'Test Metrics', emoji: '🧬' }
        ],
        '5_Symbols/execution/4dx-discipline-3.html': [
            { url: '5_Symbols/execution/4dx-discipline-2.html', title: 'Discipline 2: Lead Measures', emoji: '⚖️' },
            { url: '5_Symbols/execution/4dx-discipline-4.html', title: 'Discipline 4: Cadence', emoji: '🔄' },
            { url: '5_Symbols/dashboard/todo.html', title: 'Task List', emoji: '✅' }
        ],
        '5_Symbols/execution/4dx-discipline-4.html': [
            { url: '5_Symbols/execution/4dx-discipline-3.html', title: 'Discipline 3: Scoreboard', emoji: '📊' },
            { url: '5_Symbols/execution/4dx-execution-crisis.html', title: 'Execution Overview', emoji: '🌪️' },
            { url: '5_Symbols/strategy/single-founder-bandwidth.html', title: 'Founder Bandwidth', emoji: '🧑‍💻' }
        ],
        '5_Symbols/hypotheses/hyp-h23.html': [
            { url: '5_Symbols/hypotheses/hypothesis.html', title: 'Hypothesis Tracker', emoji: '💭' },
            { url: '5_Symbols/execution/4dx-execution-crisis.html', title: 'Execution Overview', emoji: '🌪️' },
            { url: '5_Symbols/execution/eos-traction-alignment.html', title: 'EOS Traction Alignment', emoji: '📘' }
        ],
        'index.html': [
            { url: 'motivation.html', title: 'Motivation & ICP', emoji: '🔥' },
            { url: '5_Symbols/bmc/business-model-canvas.html', title: 'Business Model Canvas', emoji: '🖼️' },
            { url: '5_Symbols/hypotheses/hypothesis.html', title: 'Hypothesis Tracker', emoji: '💭' }
        ],
        '5_Symbols/strategy/raise.html': [
            { url: 'motivation.html', title: 'Motivation & ICP', emoji: '🔥' },
            { url: '5_Symbols/strategy/why-certification.html', title: 'Why Certification', emoji: '🏅' },
            { url: '5_Symbols/hypotheses/hyp-h1.html', title: 'H1 Skills Expectations', emoji: '🔍' },
            { url: '5_Symbols/hypotheses/h1-not-connected.html', title: 'Why H1 Sits Alone', emoji: '🟡' }
        ],
        'motivation.html': [
            { url: '5_Symbols/strategy/raise.html', title: 'R.A.I.S.E. Starting Point', emoji: '🚀' },
            { url: '5_Symbols/strategy/target-audience.html', title: 'ICP Personas', emoji: '👥' },
            { url: '5_Symbols/bmc/bmc-revenue-streams.html', title: 'Revenue Streams', emoji: '💰' },
            { url: '5_Symbols/growth/funnel-math.html', title: 'Funnel Math', emoji: '🧮' },
            { url: '5_Symbols/growth/marketing-tactics.html', title: 'Marketing Swipe File', emoji: '📰' }
        ],
        '5_Symbols/cd/cd-process.html': [
            { url: '5_Symbols/stages/stage-customer-discovery.html', title: 'Discovery Stage', emoji: '🔍' },
            { url: '5_Symbols/cd/cd-interview-guide.html', title: 'Interview Guide', emoji: '🎤' },
            { url: '5_Symbols/cd/cd-watering-holes.html', title: 'Watering Holes', emoji: '🌐' }
        ],
        '5_Symbols/cd/cd-watering-holes.html': [
            { url: '5_Symbols/cd/cd-interview-guide.html', title: 'Interview Guide', emoji: '🎤' },
            { url: '5_Symbols/cd/cd-interview-recording.html', title: 'Interview Tracker', emoji: '📝' },
            { url: '5_Symbols/cd/cd-process.html', title: 'Process Overview', emoji: '📍' }
        ],
        '5_Symbols/cd/cd-interview-guide.html': [
            { url: '5_Symbols/cd/cd-interview-recording.html', title: 'Interview Tracker', emoji: '📝' },
            { url: '5_Symbols/cd/cd-watering-holes.html', title: 'Watering Holes', emoji: '🌐' },
            { url: '5_Symbols/cd/cd-process.html', title: 'Process Overview', emoji: '📍' }
        ],
        '5_Symbols/cd/cd-interview-recording.html': [
            { url: '5_Symbols/cd/cd-interview-guide.html', title: 'Interview Guide', emoji: '🎤' },
            { url: '5_Symbols/cd/cd-watering-holes.html', title: 'Watering Holes', emoji: '🌐' },
            { url: '5_Symbols/strategy/evidence-map.html', title: 'Evidence Map', emoji: '🔍' }
        ],
        '5_Symbols/cd/archived-interview-transcripts.html': [
            { url: '5_Symbols/cd/cd-interview-recording.html', title: 'Interview Tracker', emoji: '📝' },
            { url: '5_Symbols/cd/cd-interview-guide.html', title: 'Interview Guide', emoji: '🎤' },
            { url: '5_Symbols/cd/cd-watering-holes.html', title: 'Watering Holes', emoji: '🌐' }
        ],
        '5_Symbols/bmc/business-model-canvas.html': [
            { url: '5_Symbols/bmc/value-proposition.html', title: 'Value Prop Canvas', emoji: '💎' },
            { url: '5_Symbols/bmc/bmc-revenue-streams.html', title: 'Revenue Streams', emoji: '💰' },
            { url: '5_Symbols/bmc/bmc-channels.html', title: 'Channels', emoji: '📣' },
            { url: '5_Symbols/bmc/bmc-cost-structure.html', title: 'Cost Structure', emoji: '📉' }
        ],
        '5_Symbols/bmc/value-proposition.html': [
            { url: '5_Symbols/bmc/business-model-canvas.html', title: 'Business Model Canvas', emoji: '🖼️' },
            { url: '5_Symbols/bmc/bmc-customer-segments.html', title: 'Customer Segments', emoji: '👥' },
            { url: '5_Symbols/comp/comp-mvp.html', title: 'MVP Product Details', emoji: '📦' }
        ],
        '5_Symbols/bmc/bmc-revenue-streams.html': [
            { url: '5_Symbols/bmc/business-model-canvas.html', title: 'Business Model Canvas', emoji: '🖼️' },
            { url: '5_Symbols/growth/unit-economics.html', title: 'Unit Economics', emoji: '💵' },
            { url: '5_Symbols/growth/funnel-math.html', title: 'Funnel Math', emoji: '🧮' },
            { url: 'motivation.html', title: 'Motivation & ICP', emoji: '🔥' }
        ],
        '5_Symbols/hypotheses/hypothesis.html': [
            { url: '5_Symbols/hypotheses/hypothesis-connectivity.html', title: 'Dependency Map', emoji: '🔀' },
            { url: '5_Symbols/hypotheses/h1-not-connected.html', title: 'Why H1 Sits Alone', emoji: '🟡' },
            { url: '5_Symbols/dashboard/confidence-report.html', title: 'Confidence Report', emoji: '🧪' },
            { url: '5_Symbols/strategy/signal-versus-noise.html', title: 'Signal versus Noise', emoji: '📡' },
            { url: '5_Symbols/dashboard/calendar.html', title: 'Milestone Calendar', emoji: '📅' }
        ],
        '5_Symbols/strategy/signal-versus-noise.html': [
            { url: '5_Symbols/strategy/evidence-map.html', title: 'Evidence Map', emoji: '🔍' },
            { url: '5_Symbols/hypotheses/hypothesis.html', title: 'Hypothesis Dashboard', emoji: '💭' },
            { url: '5_Symbols/strategy/focus.html', title: 'Focus', emoji: '🎯' },
            { url: '5_Symbols/strategy/single-founder-bandwidth.html', title: 'Founder Bandwidth', emoji: '🧑‍💻' }
        ],
        '5_Symbols/hypotheses/hypothesis-connectivity.html': [
            { url: '5_Symbols/hypotheses/hypothesis.html', title: 'Hypothesis Dashboard', emoji: '💭' },
            { url: '5_Symbols/hypotheses/h1-not-connected.html', title: 'Why H1 Sits Alone', emoji: '🟡' },
            { url: '5_Symbols/dashboard/confidence-report.html', title: 'Confidence Report', emoji: '🧪' },
            { url: '5_Symbols/growth/stage-timelines.html', title: 'Stage Timelines', emoji: '📅' }
        ],
        '5_Symbols/hypotheses/h1-not-connected.html': [
            { url: '5_Symbols/hypotheses/hyp-h1.html', title: 'H1 Detail', emoji: '🔍' },
            { url: '5_Symbols/hypotheses/hypothesis.html', title: 'Hypothesis Dashboard', emoji: '💭' },
            { url: '5_Symbols/hypotheses/hypothesis-connectivity.html', title: 'Dependency Map', emoji: '🔀' },
            { url: '5_Symbols/strategy/risk-analysis.html', title: 'Risk Analysis', emoji: '⚠️' }
        ],
        '5_Symbols/growth/unit-economics.html': [
            { url: '5_Symbols/growth/funnel-math.html', title: 'Funnel Math', emoji: '🧮' },
            { url: '5_Symbols/growth/cost-side-model.html', title: 'Cost-Side Model', emoji: '📉' },
            { url: '5_Symbols/bmc/bmc-cost-structure.html', title: 'BMC Cost Structure', emoji: '📉' }
        ],
        '5_Symbols/comp/comp-roadmap.html': [
            { url: '5_Symbols/growth/marketing-tactics.html', title: 'Marketing Swipe File', emoji: '📰' },
            { url: '5_Symbols/dashboard/calendar.html', title: 'Milestone Calendar', emoji: '📅' },
            { url: '5_Symbols/growth/sales-pipeline.html', title: 'Sales Pipeline', emoji: '📊' }
        ],
        '5_Symbols/dashboard/calendar.html': [
            { url: '5_Symbols/growth/stage-timelines.html', title: 'Stage Timelines', emoji: '📅' },
            { url: '5_Symbols/growth/90-day-execution-plan.html', title: '90-Day Execution Plan', emoji: '🗓️' },
            { url: '5_Symbols/growth/quality-gates.html', title: 'Quality Gates', emoji: '🚪' },
            { url: '5_Symbols/dashboard/todo.html', title: 'Task List', emoji: '✅' }
        ],
        '5_Symbols/growth/90-day-execution-plan.html': [
            { url: '5_Symbols/growth/stage-timelines.html', title: 'Stage Timelines', emoji: '📅' },
            { url: '5_Symbols/growth/test-plan.html', title: 'Test Plan', emoji: '🧪' },
            { url: '5_Symbols/dashboard/todo.html', title: 'Task List', emoji: '✅' },
            { url: '5_Symbols/growth/mvp-roadmap.html', title: 'MVP Roadmap', emoji: '🗺️' }
        ],
        '5_Symbols/product/skool-4c.html': [
            { url: '5_Symbols/product/skool-community-golden-rules.html', title: 'Golden Rules', emoji: '🌟' },
            { url: '5_Symbols/product/skool-live-join.html', title: 'Sunday Join', emoji: '🚪' },
            { url: '5_Symbols/product/skool-lms-integration.html', title: 'Skool LMS', emoji: '🏫' },
            { url: '5_Symbols/strategy/delivery-pilot-roadmap.html', title: 'Cause: Roadmap', emoji: '🧑‍✈️' }
        ],
        '5_Symbols/product/cohort-session-permissions.html': [
            { url: '5_Symbols/product/skool-membership-questions.html', title: 'Membership Questions', emoji: '📝' },
            { url: '5_Symbols/product/skool-workshop-upload.html', title: 'Workshop Upload', emoji: '🎥' },
            { url: '5_Symbols/product/skool-community-golden-rules.html', title: 'Golden Rules', emoji: '🌟' },
            { url: '5_Symbols/hypotheses/hyp-h29.html', title: 'H29 Listen', emoji: '👂' }
        ],
        '5_Symbols/growth/mvp-roadmap.html': [
            { url: '5_Symbols/growth/audience-roadmap.html', title: 'Audience Roadmap', emoji: '🧭' },
            { url: '5_Symbols/strategy/delivery-pilot-roadmap.html', title: 'Delivery Pilot Roadmap', emoji: '🧑‍✈️' },
            { url: '5_Symbols/growth/90-day-execution-plan.html', title: '90-Day Execution Plan', emoji: '🗓️' },
            { url: '5_Symbols/hypotheses/hyp-h30.html', title: 'H30 Career Roadmap', emoji: '🧑‍✈️' }
        ],
        '5_Symbols/growth/funfair-tokens.html': [
            { url: '5_Symbols/growth/marketing-tactics.html', title: 'Marketing Tactics', emoji: '📰' },
            { url: '5_Symbols/product/exam-prep-product.html', title: 'Exam Prep Bundle', emoji: '📦' },
            { url: '5_Symbols/strategy/delivery-pilot-roadmap.html', title: 'Delivery Pilot Roadmap', emoji: '🧑‍✈️' },
            { url: '5_Symbols/product/skool-offer-ideas.html', title: 'Skool Offer Ideas', emoji: '💡' }
        ],
        '5_Symbols/dashboard/sitemap.html': [
            { url: '5_Symbols/dashboard/latest-pages.html', title: 'Latest Pages', emoji: '📅' },
            { url: '5_Symbols/hypotheses/hypothesis.html', title: 'Hypothesis Dashboard', emoji: '💭' },
            { url: 'index.html', title: 'Hub', emoji: '🏠' }
        ],
        '5_Symbols/dashboard/confidence-report.html': [
            { url: '5_Symbols/dashboard/how-to-move-the-score.html', title: 'How to Move the Score', emoji: '📈' },
            { url: '5_Symbols/hypotheses/hypothesis.html', title: 'Hypothesis Dashboard', emoji: '💭' },
            { url: '5_Symbols/growth/quality-gates.html', title: 'Quality Gates', emoji: '🚪' },
            { url: '5_Symbols/strategy/evidence-map.html', title: 'Evidence Map', emoji: '🔍' }
        ],
        '5_Symbols/dashboard/how-to-move-the-score.html': [
            { url: '5_Symbols/dashboard/confidence-report.html', title: 'Confidence Report', emoji: '🧪' },
            { url: '5_Symbols/growth/community-building-score.html', title: 'Community & Model Score', emoji: '🌱' },
            { url: '5_Symbols/hypotheses/hyp-h9.html', title: 'H9 $10k Gate', emoji: '🚪' },
            { url: '5_Symbols/hypotheses/hyp-h21.html', title: 'H21 $29 Bundle', emoji: '📦' }
        ],
        '5_Symbols/hypotheses/hyp-h27.html': [
            { url: '5_Symbols/strategy/practice-exams-gap.html', title: 'Practice Exam Gap', emoji: '⚠️' },
            { url: '5_Symbols/hypotheses/hyp-h21.html', title: 'H21 $29 Bundle', emoji: '📦' },
            { url: '5_Symbols/hypotheses/hyp-h8.html', title: 'H8 Cohort PMF', emoji: '💎' },
            { url: '5_Symbols/product/exam-performance-evidence.html', title: 'Exam Performance Evidence', emoji: '📊' }
        ]
    };

    function getPageTitleFromSearchIndex(file) {
        for (var i = 0; i < searchIndex.length; i++) {
            if (searchIndex[i].url === file) {
                return searchIndex[i].title;
            }
        }
        var clean = file.replace('.html', '').replace(/-/g, ' ');
        return clean.charAt(0).toUpperCase() + clean.slice(1);
    }

    function findCurrentTourIndex() {
        for (var i = 0; i < tourStops.length; i++) {
            if (tourStops[i].url === currentFile) {
                return i;
            }
        }
        return -1;
    }

    function findParentTourIndex() {
        if (currentFile.indexOf('hyp-h') === 0) {
            return 9; // Hypothesis tracker stop index is 9
        }
        if (currentFile.indexOf('cd-hyp-') === 0 || currentFile.indexOf('cd-tp-') === 0 || currentFile.indexOf('cd-tpr-') === 0 || currentFile.indexOf('cd-verify-') === 0) {
            return 2; // Process overview stop index is 2
        }
        if (currentFile.indexOf('bmc-') === 0) {
            return 6; // Business model canvas stop index is 6
        }
        if (currentFile.indexOf('comp-') === 0) {
            return 12; // Sales/marketing roadmap stop index is 12
        }
        return -1;
    }

    function getRelatedConceptsForPage(file) {
        if (relatedConceptsOverride[file]) {
            return relatedConceptsOverride[file];
        }

        var currentCat = null;
        for (var i = 0; i < searchIndex.length; i++) {
            if (searchIndex[i].url === file) {
                currentCat = searchIndex[i].cat;
                break;
            }
        }

        var related = [];
        if (currentCat) {
            for (var j = 0; j < searchIndex.length; j++) {
                var item = searchIndex[j];
                if (item.url !== file && item.cat === currentCat) {
                    related.push({
                        url: item.url,
                        title: item.title,
                        emoji: getEmojiForCategory(item.cat)
                    });
                    if (related.length >= 3) break;
                }
            }
        }

        if (related.length < 3) {
            var fallbacks = [
                { url: 'index.html', title: 'Customer Development Hub', emoji: '🏠' },
                { url: 'motivation.html', title: 'Motivation & ICP', emoji: '🔥' },
                { url: '5_Symbols/hypotheses/hypothesis.html', title: 'Hypothesis Dashboard', emoji: '💭' }
            ];
            for (var k = 0; k < fallbacks.length; k++) {
                if (fallbacks[k].url !== file && !related.some(function(r) { return r.url === fallbacks[k].url; })) {
                    related.push(fallbacks[k]);
                    if (related.length >= 3) break;
                }
            }
        }

        return related;
    }

    function getEmojiForCategory(cat) {
        switch(cat) {
            case 'Hub': return '🏠';
            case 'Stage': return '🗺️';
            case 'Process': return '📍';
            case 'Strategy': return '🎯';
            case 'Business Model': return '📊';
            case 'Growth': return '📈';
            case 'Components': return '🧩';
            case 'Docs': return '📄';
            case 'Hypothesis Detail': return '💭';
            default: return '🔗';
        }
    }

    function buildTourHtml() {
        var currentStopIdx = findCurrentTourIndex();
        var isCurrentStop = currentStopIdx !== -1;
        var stepNumText = "";
        var stepTitleText = "";
        var stepDescText = "";
        var progressPercent = 0;

        if (isCurrentStop) {
            var stop = tourStops[currentStopIdx];
            stepNumText = "Stop " + (currentStopIdx + 1) + " of " + tourStops.length;
            stepTitleText = stop.emoji + " " + stop.title;
            stepDescText = stop.desc;
            progressPercent = Math.round(((currentStopIdx + 1) / tourStops.length) * 100);
        } else {
            var parentStopIdx = findParentTourIndex();
            if (parentStopIdx !== -1) {
                var parentStop = tourStops[parentStopIdx];
                stepNumText = "Custom Exploration";
                stepTitleText = "Exploring: " + getPageTitleFromSearchIndex(currentFile);
                stepDescText = "This page provides details related to Stop " + (parentStopIdx + 1) + ": " + parentStop.title + ".";
                progressPercent = Math.round(((parentStopIdx + 0.5) / tourStops.length) * 100);
            } else {
                stepNumText = "Custom Exploration";
                stepTitleText = getPageTitleFromSearchIndex(currentFile);
                stepDescText = "You are currently exploring a supporting page in the customer development framework.";
                progressPercent = 0;
            }
        }

        var relatedLinksHtml = "";
        var related = getRelatedConceptsForPage(currentFile);
        if (related && related.length > 0) {
            relatedLinksHtml += '<div class="tour-related-section">' +
                '<span class="tour-section-title">Related Concepts</span>' +
                '<div class="tour-related-grid">';
            related.forEach(function(item) {
                var finalHref = item.url.indexOf('http') === 0 ? item.url : (pathPrefix + item.url);
                var emoji = item.emoji || '🔗';
                relatedLinksHtml += '<a href="' + finalHref + '" class="tour-related-item">' +
                    '<span class="emoji">' + emoji + '</span> ' +
                    '<span>' + item.title + '</span>' +
                    '</a>';
            });
            relatedLinksHtml += '</div></div>';
        }

        var selectOptionsHtml = '<option value="">🧭 Select Tour Stop...</option>';
        tourStops.forEach(function(stop, idx) {
            var selected = (idx === currentStopIdx) ? ' selected' : '';
            selectOptionsHtml += '<option value="' + stop.url + '"' + selected + '>' + (idx + 1) + '. ' + stop.emoji + ' ' + stop.title + '</option>';
        });

        var prevDisabled = currentStopIdx <= 0 ? ' disabled' : '';
        var nextDisabled = (currentStopIdx === -1 || currentStopIdx >= tourStops.length - 1) ? ' disabled' : '';

        var prevHref = currentStopIdx > 0 ? (pathPrefix + tourStops[currentStopIdx - 1].url) : '#';
        var nextHref = (currentStopIdx !== -1 && currentStopIdx < tourStops.length - 1) ? (pathPrefix + tourStops[currentStopIdx + 1].url) : '#';

        var openClass = (getCookie('site_tour_open') === 'true') ? ' open' : '';

        var tourHtml = 
            '<div class="tour-container">' +
            '  <button id="tour-fab-btn" class="tour-fab" title="Start Guided Tour">' +
            '    <span>🧭</span>' +
            '    <span>Guided Tour</span>' +
            '    <span class="badge">' + (currentStopIdx !== -1 ? (currentStopIdx + 1) + '/' + tourStops.length : 'Explore') + '</span>' +
            '  </button>' +
            '  <div id="tour-card-panel" class="tour-card' + openClass + '">' +
            '    <div class="tour-header">' +
            '      <h4>🧭 Site Tour Guide</h4>' +
            '      <button id="tour-close-btn" class="tour-close-btn" title="Collapse Tour">&times;</button>' +
            '    </div>' +
            '    <div class="tour-body">' +
            '      <div class="tour-step-info">' +
            '        <span class="tour-step-indicator">' + stepNumText + '</span>' +
            '        <span class="tour-step-title">' + stepTitleText + '</span>' +
            '        <p class="tour-step-desc">' + stepDescText + '</p>' +
            '      </div>' +
            '      <div class="tour-progress-container">' +
            '        <div class="tour-progress-bar" style="width: ' + progressPercent + '%;"></div>' +
            '      </div>' +
            relatedLinksHtml +
            '    </div>' +
            '    <div class="tour-footer">' +
            '      <div class="tour-actions">' +
            '        <a href="' + prevHref + '" id="tour-prev-btn" class="tour-btn' + (prevDisabled ? ' disabled' : '') + '"' + prevDisabled + '>◀ Prev Stop</a>' +
            '        <a href="' + nextHref + '" id="tour-next-btn" class="tour-btn btn-next' + (nextDisabled ? ' disabled' : '') + '"' + nextDisabled + '>Next Stop ▶</a>' +
            '      </div>' +
            '      <div class="tour-select-wrapper">' +
            '        <select id="tour-select-box" class="tour-select">' +
            selectOptionsHtml +
            '        </select>' +
            '      </div>' +
            '    </div>' +
            '  </div>' +
            '</div>';

        return tourHtml;
    }

    function initTourEvents() {
        var tourFabBtn = document.getElementById('tour-fab-btn');
        var tourCardPanel = document.getElementById('tour-card-panel');
        var tourCloseBtn = document.getElementById('tour-close-btn');
        var tourSelectBox = document.getElementById('tour-select-box');

        if (tourFabBtn && tourCardPanel) {
            tourFabBtn.addEventListener('click', function(e) {
                e.preventDefault();
                var isOpen = tourCardPanel.classList.contains('open');
                if (isOpen) {
                    tourCardPanel.classList.remove('open');
                    setCookie('site_tour_open', 'false', 30);
                } else {
                    tourCardPanel.classList.add('open');
                    setCookie('site_tour_open', 'true', 30);
                }
            });
        }

        if (tourCloseBtn && tourCardPanel) {
            tourCloseBtn.addEventListener('click', function(e) {
                e.preventDefault();
                tourCardPanel.classList.remove('open');
                setCookie('site_tour_open', 'false', 30);
            });
        }

        if (tourSelectBox) {
            tourSelectBox.addEventListener('change', function() {
                var url = this.value;
                if (url) {
                    var finalHref = url.indexOf('http') === 0 ? url : (pathPrefix + url);
                    window.location.href = finalHref;
                }
            });
        }
    }

    // Initialize overlays and events
    function initOverlays() {
        if (document.getElementById('workspace-overlays-container')) return;

        var overlayDiv = document.createElement('div');
        overlayDiv.id = 'workspace-overlays-container';
        overlayDiv.innerHTML = searchModalHtml + notesDrawerHtml + buildTourHtml();
        document.body.appendChild(overlayDiv);
        
        var closeSearchBtn = document.getElementById('close-search-btn');
        if (closeSearchBtn) {
            closeSearchBtn.addEventListener('click', closeSearch);
        }
        
        var searchModal = document.getElementById('search-modal');
        if (searchModal) {
            searchModal.addEventListener('click', function(e) {
                if (e.target === searchModal) {
                    closeSearch();
                }
            });
        }
        
        var searchInput = document.getElementById('search-input');
        if (searchInput) {
            searchInput.addEventListener('input', function() {
                renderSearchResults(this.value);
            });
            
            searchInput.addEventListener('keydown', function(e) {
                var resultsContainer = document.getElementById('search-results');
                if (!resultsContainer) return;
                var items = resultsContainer.querySelectorAll('.search-result-item');
                
                if (e.key === 'ArrowDown') {
                    e.preventDefault();
                    if (items.length > 0) {
                        var nextIdx = (selectedSearchResultIndex + 1) % items.length;
                        setSelectedResult(nextIdx);
                    }
                } else if (e.key === 'ArrowUp') {
                    e.preventDefault();
                    if (items.length > 0) {
                        var prevIdx = selectedSearchResultIndex - 1;
                        if (prevIdx < 0) prevIdx = items.length - 1;
                        setSelectedResult(prevIdx);
                    }
                } else if (e.key === 'Enter') {
                    e.preventDefault();
                    if (selectedSearchResultIndex >= 0 && selectedSearchResultIndex < items.length) {
                        items[selectedSearchResultIndex].click();
                    } else if (items.length > 0) {
                        items[0].click();
                    }
                }
            });
        }
        
        var closeNotesBtn = document.getElementById('close-notes-btn');
        if (closeNotesBtn) {
            closeNotesBtn.addEventListener('click', function(e) {
                e.stopPropagation();
                closeNotes();
            });
        }

        var minimizeNotesBtn = document.getElementById('minimize-notes-btn');
        if (minimizeNotesBtn) {
            minimizeNotesBtn.addEventListener('click', function(e) {
                e.stopPropagation();
                toggleMinimizeNotes();
            });
        }

        var notesDrawer = document.getElementById('notes-drawer');
        if (notesDrawer) {
            notesDrawer.addEventListener('click', function(e) {
                if (e.target === notesDrawer) {
                    closeNotes();
                }
            });

            var notesDrawerHeader = notesDrawer.querySelector('.drawer-header');
            if (notesDrawerHeader) {
                notesDrawerHeader.addEventListener('click', function(e) {
                    if (notesDrawer.classList.contains('minimized')) {
                        toggleMinimizeNotes();
                    }
                });
            }
        }
        
        var addNoteBtn = document.getElementById('add-note-btn');
        var noteTextarea = document.getElementById('note-textarea');
        if (addNoteBtn && noteTextarea) {
            addNoteBtn.addEventListener('click', function() {
                addNote(noteTextarea.value);
                noteTextarea.value = '';
            });
            
            noteTextarea.addEventListener('keydown', function(e) {
                if ((e.metaKey || e.ctrlKey) && e.key === 'Enter') {
                    e.preventDefault();
                    addNoteBtn.click();
                }
            });
        }
        
        var copyNotesBtn = document.getElementById('copy-notes-btn');
        if (copyNotesBtn) {
            copyNotesBtn.addEventListener('click', copyNotes);
        }
        
        var clearNotesBtn = document.getElementById('clear-notes-btn');
        if (clearNotesBtn) {
            clearNotesBtn.addEventListener('click', clearNotes);
        }
        
        // When the notes drawer is open, capture any text the user highlights
        // on the page and drop it straight into the note textarea.
        document.addEventListener('mouseup', function(e) {
            var drawer = document.getElementById('notes-drawer');
            if (!drawer || !drawer.classList.contains('open') || drawer.classList.contains('minimized')) return;
            if (drawer.contains(e.target)) return;

            var selection = window.getSelection();
            var text = selection ? selection.toString().trim() : '';
            if (!text) return;

            var textarea = document.getElementById('note-textarea');
            if (!textarea) return;

            textarea.value = textarea.value ? (textarea.value + '\n\n' + text) : text;
            selection.removeAllRanges();
        });

        document.addEventListener('keydown', function(e) {
            if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
                e.preventDefault();
                var searchModalOpen = document.getElementById('search-modal').classList.contains('open');
                if (searchModalOpen) {
                    closeSearch();
                } else {
                    openSearch();
                }
            } else if (e.key === 'Escape') {
                closeSearch();
                closeNotes();
            }
        });
        
        renderNotes();
        initTourEvents();
    }

    function bindHeaderButtons() {
        var searchBtn = document.getElementById('nav-search-btn');
        if (searchBtn) {
            searchBtn.addEventListener('click', function(e) {
                e.preventDefault();
                var searchModalOpen = document.getElementById('search-modal').classList.contains('open');
                if (searchModalOpen) closeSearch();
                else openSearch();
            });
        }
        
        var notesBtn = document.getElementById('nav-notes-btn');
        if (notesBtn) {
            notesBtn.addEventListener('click', function(e) {
                e.preventDefault();
                var notesDrawerOpen = document.getElementById('notes-drawer').classList.contains('open');
                if (notesDrawerOpen) closeNotes();
                else openNotes();
            });
        }

        var themeBtn = document.getElementById('nav-theme-btn');
        if (themeBtn) {
            themeBtn.addEventListener('click', function(e) {
                e.preventDefault();
                toggleTheme();
            });
        }
    }

    // Mount header
    function mountHeader() {
        var mount = document.getElementById('site-header');
        if (mount) {
            mount.innerHTML = buildHeaderHtml();
            bindHeaderButtons();
            // Initialize overlays after mounting header to ensure elements are ready
            initOverlays();
        }
    }

    document.addEventListener('DOMContentLoaded', mountHeader);

    if (document.readyState !== 'loading') {
        mountHeader();
    }
})();
