// Shared site header/navigation, built once and injected into #site-header.
// Organizes links into logical groups (Hub / Stages / Strategy / Business Model / Growth / Components / Docs)
// and marks the current page's link as active based on the URL filename.
// Includes a global search index and a shared cookie note-taking mechanism.
(function () {
    var isSubdir = location.pathname.includes('/discovery/');
    var pathPrefix = isSubdir ? '../' : '';

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
            type: 'dropdown', label: 'Stages', emoji: '🗺️', className: 'nav-stages', items: [
                ['stage-customer-discovery.html', '🔍 1. Discovery'],
                ['stage-customer-validation.html', '📈 2. Validation'],
                ['stage-customer-creation.html', '⚡ 3. Creation'],
                ['stage-company-building.html', '🏢 4. Building']
            ]
        },
        {
            type: 'dropdown', label: 'Discovery Process', emoji: '📍', className: 'nav-discovery', items: [
                ['cd-process.html', '📍 Process Overview'],
                ['cd-interview-guide.html', '🎤 Interview Guide'],
                ['cd-watering-holes.html', '🌐 Watering Holes &amp; Outreach'],
                ['cd-interview-recording.html', '📝 Interview Recording &amp; Tracker'],
                ['cd-hypothesis-interview-questions.html', '🧪 Hypothesis Interview Questions'],
                ['cd-hypotheses.html', '💭 1. Hypothesis'],
                ['cd-hyp-product.html', '&nbsp;&nbsp;↳ 📦 Product Hypothesis'],
                ['cd-hyp-customer-problem.html', '&nbsp;&nbsp;↳ 👥 Customer &amp; Problem Hypothesis'],
                ['cd-hyp-distribution-pricing.html', '&nbsp;&nbsp;↳ 💰 Distribution &amp; Pricing Hypothesis'],
                ['cd-hyp-demand-creation.html', '&nbsp;&nbsp;↳ 📣 Demand Creation Hypothesis'],
                ['cd-hyp-market-type.html', '&nbsp;&nbsp;↳ 🏛️ Market Type Hypothesis'],
                ['cd-hyp-competitive.html', '&nbsp;&nbsp;↳ ⚔️ Competitive Hypothesis'],
                ['cd-test-problem.html', '🧪 2. Test Problem Hypothesis'],
                ['cd-tp-first-contacts.html', '&nbsp;&nbsp;↳ 🤝 First Contacts'],
                ['cd-tp-problem-presentation.html', '&nbsp;&nbsp;↳ 📊 Problem Presentation'],
                ['cd-tp-customer-understanding.html', '&nbsp;&nbsp;↳ 🧠 Customer Understanding'],
                ['cd-tp-market-knowledge.html', '&nbsp;&nbsp;↳ 🌐 Market Knowledge'],
                ['cd-test-product.html', '🛠️ 3. Test Product Hypothesis'],
                ['cd-tpr-first-reality-check.html', '&nbsp;&nbsp;↳ ⚠️ First Reality Check'],
                ['cd-tpr-product-presentation.html', '&nbsp;&nbsp;↳ 🖥️ Product Presentation'],
                ['cd-tpr-more-customer-visits.html', '&nbsp;&nbsp;↳ 👥 More Customer Visits'],
                ['cd-tpr-second-reality-check.html', '&nbsp;&nbsp;↳ ⚠️ Second Reality Check'],
                ['cd-verify.html', '🏁 4. Verify'],
                ['cd-verify-product.html', '&nbsp;&nbsp;↳ 🛠️ Verify The Product'],
                ['cd-verify-problem.html', '&nbsp;&nbsp;↳ 🛑 Verify The Problem'],
                ['cd-verify-business-model.html', '&nbsp;&nbsp;↳ 📊 Verify The Business Model'],
                ['cd-verify-iterate-exit.html', '&nbsp;&nbsp;↳ 🚪 Iterate Or Exit']
            ]
        },
        {
            type: 'dropdown', label: 'Strategy', emoji: '🎯', className: 'nav-strategy', items: [
                ['motivation.html', '🔥 Motivation'],
                ['hypothesis.html', '💭 Hypothesis'],
                ['focus.html', '🎯 Focus'],
                ['target-audience.html', '👥 Target Audience'],
                ['risk-analysis.html', '⚠️ Risk Analysis'],
                ['requirements.html', '📋 Requirements'],
                ['business-plan-summary.html', '📄 Business Plan Summary'],
                ['competitive-analysis.html', '⚔️ Competitive Analysis'],
                ['evidence-map.html', '🔍 Evidence Map'],
                ['exam-performance-evidence.html', '📊 Candidate Exam Performance Evidence'],
                ['hypothesis-connectivity.html', '🔀 Hypothesis Connectivity'],
                ['single-founder-bandwidth.html', '🧑‍💻 Single-Founder Bandwidth'],
                ['vc-deck.html', '🎤 VC Deck'],
                ['pitch-deck.html', '📋 5-Minute Pitch Deck'],
                ['why-certification.html', '🏅 Why Certification Matters'],
                ['self-assessment.html', '🧭 Self-Assessment'],
                ['discovery-journey.html', '🧭 The Discovery Journey'],
                ['moat.html', '🛡️ Defensive Capabilities & Moat'],
                ['maot.html', '✨ MAOT Framework']
            ]
        },
        {
            type: 'dropdown', label: 'Business Model', emoji: '📊', className: 'nav-business', items: [
                ['business-model-canvas.html', '🖼️ Business Model Canvas'],
                ['value-proposition.html', '💎 Value Proposition'],
                ['bmc-customer-segments.html', '👥 Customer Segments'],
                ['bmc-channels.html', '📣 Channels'],
                ['bmc-customer-relationships.html', '🤝 Customer Relationships'],
                ['bmc-revenue-streams.html', '💰 Revenue Streams'],
                ['bmc-key-resources.html', '🏗️ Key Resources'],
                ['bmc-key-activities.html', '⚙️ Key Activities'],
                ['bmc-key-partners.html', '🤝 Key Partners'],
                ['bmc-cost-structure.html', '📉 Cost Structure'],
                ['partners.html', '🤝 Partner With Us'],
                ['exam-prep-product.html', '📦 Exam Prep Bundle ($29)']
            ]
        },
        {
            type: 'dropdown', label: 'Growth', emoji: '📈', className: 'nav-growth', items: [
                ['sales-pipeline.html', '📊 Sales Pipeline'],
                ['flywheel.html', '🔄 Flywheel'],
                ['quality-gates.html', '🚪 Quality Gates'],
                ['stage-timelines.html', '📅 Stage Timelines'],
                ['calendar.html', '🗓️ Milestone Calendar'],
                ['test-metrics.html', '📈 Test &amp; Metrics'],
                ['test-plan.html', '🧪 Test Plan'],
                ['todo.html', '✅ Task List'],
                ['content-analysis.html', '🎬 Content Analysis'],
                ['cohort-prep.html', '🧰 Cohort Prep'],
                ['advertisement.html', '📣 Paid Advertisement'],
                ['funnel-math.html', '🧮 Funnel Math'],
                ['unit-economics.html', '💵 Unit Economics'],
                ['cost-side-model.html', '📉 Cost-Side Model'],
                ['validation-repeat-gate.html', '🚪 Validation Repeat Gate'],
                ['marketing-tactics.html', '📰 Marketing Tactics'],
                ['conversation-starters.html', '🗣️ Conversation Starters'],
                ['metrics-dashboard.html', '📊 Metrics Dashboard'],
                ['market-fit-channels.html', '🔄 Market Fit & Channels'],
                ['ai-demo.html', '🤖 AI Prep Demo']
            ]
        },
        {
            type: 'dropdown', label: 'Components', emoji: '🧩', className: 'nav-components', items: [
                ['comp-problem-solution.html', '🛑 Problem-Solution Fit'],
                ['comp-mvp.html', '📦 MVP'],
                ['comp-market.html', '🌐 Market &amp; Audience'],
                ['comp-business-model.html', '📊 Business Model'],
                ['comp-funnel.html', '📣 Funnel &amp; Channels'],
                ['comp-pmf.html', '💎 Product-Market Fit'],
                ['comp-roadmap.html', '🗺️ Sales &amp; Marketing Roadmap'],
                ['comp-creation-validation.html', '⚡ Creation Validation &amp; Triggers'],
                ['comp-scale-organization.html', '🏢 Scale Organization']
            ]
        },
        {
            type: 'dropdown', label: 'Docs', emoji: '📄', className: 'nav-docs', items: [
                ['markdown_renderer.html?src=README.md', '📖 README'],
                ['markdown_renderer.html?src=gemini.md', '🧠 Project Rationale'],
                ['markdown_renderer.html?src=agents.md', '🤖 AI Agent Guidelines'],
                ['markdown_renderer.html?src=HYPOTHESIS.md', '📊 Hypothesis Tracker Full Doc'],
                ['confidence-report.html', '🧪 Business Model Confidence Report'],
                ['markdown_renderer.html?src=reports/acidity-check-report-v1.2.0.md', '🧪 Acidity Check Report v1.2'],
                ['markdown_renderer.html?src=reports/acidity-check-report-v1.1.0.md', '🧪 Acidity Check Report v1.1 (Historical)'],
                ['markdown_renderer.html?src=reports/acidity-check-report-v1.0.md', '🧪 Acidity Check Report v1.0 (Historical)'],
                ['markdown_renderer.html?src=reports/market-validation-argument-v1.0.md', '⚖️ Market Validation Argument'],
                ['markdown_renderer.html?src=reports/ai-adoption-and-skills-gap-v1.0.md', '🤖 AI Adoption &amp; Skills Gap'],
                ['markdown_renderer.html?src=reports/exam-prep-market-and-student-behavior-v1.0.md', '🧠 Exam Prep &amp; Student Behavior'],
                ['markdown_renderer.html?src=reports/tam-sam-som-verification-v1.0.md', '🔍 TAM/SAM/SOM Verification']
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
        { url: 'index.html', title: 'Customer Development Hub', desc: 'Home hub mapping all stages, business validation frameworks, and milestones.', cat: 'Hub', tags: 'home dashboard main index' },
        { url: 'cd-interview-guide.html', title: 'Customer Discovery Interview Guide', desc: 'Playbook of open-ended pains/gains questions, past behavior stories, and listening guidelines.', cat: 'Process', tags: 'interview questions open ended pains gains guide' },
        { url: 'cd-watering-holes.html', title: 'Customer Watering Holes & Outreach', desc: 'Outreach blueprint mapping Triton Square, Venture Coffee meetups, and cohorts with ready-to-use scripts.', cat: 'Process', tags: 'watering holes triton square venture coffee cohorts scripts outreach slack dms' },
        { url: 'cd-interview-recording.html', title: 'Interview Recording & Tracker', desc: 'Qualitative interview recording tool (day-in-the-life, current workarounds) and outreach tracker with copyable thank you followups.', cat: 'Process', tags: 'interview log recording tracker contacts referral thank you' },
        { url: 'stage-customer-discovery.html', title: '1. Customer Discovery Stage', desc: 'First phase of customer development focused on problem-solution fit and testing core customer pain points.', cat: 'Stage', tags: 'problem solution mvp validation first' },
        { url: 'stage-customer-validation.html', title: '2. Customer Validation Stage', desc: 'Second phase to build a repeatable, scalable sales blueprint and verify product-market fit.', cat: 'Stage', tags: 'sales roadmap pricing validation product market' },
        { url: 'stage-customer-creation.html', title: '3. Customer Creation Stage', desc: 'Third phase to drive demand, acquire users at scale, and verify retention triggers.', cat: 'Stage', tags: 'demand growth viral acquisition' },
        { url: 'stage-company-building.html', title: '4. Company Building Stage', desc: 'Final phase to transition from startup to structured department execution and scaling.', cat: 'Stage', tags: 'scale operations structure department team' },
        { url: 'cd-process.html', title: 'Discovery Process Overview', desc: 'Detailed overview of the 4 steps of Customer Discovery (State, Test, Validate, Exit).', cat: 'Process', tags: 'steps overview summary outline' },
        { url: 'cd-hypotheses.html', title: 'Phase 1: State Hypotheses', desc: 'Defining the core business canvas assumptions and developer pain points.', cat: 'Process', tags: 'assumptions developers canvas' },
        { url: 'cd-hyp-product.html', title: 'Product Hypothesis', desc: 'Hypothesis testing features, pricing, and visual delivery model for the training video assets.', cat: 'Process', tags: 'features pricing video assets' },
        { url: 'cd-hyp-customer-problem.html', title: 'Customer & Problem Hypothesis', desc: 'Understanding certification stress, study timelines, and visual learning needs.', cat: 'Process', tags: 'stress study timeline needs' },
        { url: 'cd-hyp-distribution-pricing.html', title: 'Distribution & Pricing Hypothesis', desc: 'Hypotheses on YouTube memberships, $10/mo mock prep access, and cohort revenue metrics.', cat: 'Process', tags: 'youtube membership subscription cost cohort' },
        { url: 'cd-hyp-demand-creation.html', title: 'Demand Creation Hypothesis', desc: 'Assumptions about organic YouTube search, SEO search terms, and viral watch-loops.', cat: 'Process', tags: 'seo search loops youtube traffic' },
        { url: 'cd-hyp-market-type.html', title: 'Market Type Hypothesis', desc: 'Positioning the helper in an existing exam prep market with a resegmented focus on rich animations.', cat: 'Process', tags: 'positioning market segmentation animation' },
        { url: 'cd-hyp-competitive.html', title: 'Competitive Hypothesis', desc: 'Analyzing Udemy courses, cloud providers\' official prep, and our unique visual edge.', cat: 'Process', tags: 'udemy competitors cloud official visual edge' },
        { url: 'cd-test-problem.html', title: 'Phase 2: Test Problem Hypothesis', desc: 'Engaging early adopters, launching surveys, and running problem interviews.', cat: 'Process', tags: 'surveys interviews feedback adopters' },
        { url: 'cd-tp-first-contacts.html', title: 'First Contacts & Outreach', desc: 'Strategy for reaching out to developers, students, and certification candidates.', cat: 'Process', tags: 'outreach developer groups email' },
        { url: 'cd-tp-problem-presentation.html', title: 'Problem Presentation Guide', desc: 'Framework for pitching the identified developer pain points during discovery calls.', cat: 'Process', tags: 'pitch presentation discovery calls' },
        { url: 'cd-tp-customer-understanding.html', title: 'Customer Understanding Deep Dive', desc: 'Analyzing target user behaviors, motivations, and pain points in software certifications.', cat: 'Process', tags: 'behaviors motivations certification' },
        { url: 'cd-tp-market-knowledge.html', title: 'Market Knowledge Synthesis', desc: 'Understanding market segments, size, and readiness to pay for visual guides.', cat: 'Process', tags: 'market segments size willing to pay' },
        { url: 'cd-test-product.html', title: 'Phase 3: Test Product Hypothesis', desc: 'Pitching the MVP, testing animated content, and measuring feedback loops.', cat: 'Process', tags: 'mvp animation feedback loops demo' },
        { url: 'cd-tpr-first-reality-check.html', title: 'First Reality Check', desc: 'Initial validation checkpoint for early signups and content engagement.', cat: 'Process', tags: 'validation checkpoint engagement signups' },
        { url: 'cd-tpr-product-presentation.html', title: 'Product Presentation & Demo', desc: 'Presenting the MVP animated guides to prospective users to gauge reactions.', cat: 'Process', tags: 'demo pitch product slides' },
        { url: 'cd-tpr-more-customer-visits.html', title: 'Expanding Customer Visits', desc: 'Iterative testing phase with broader user groups to refine validation statistics.', cat: 'Process', tags: 'testing groups scale validation' },
        { url: 'cd-tpr-second-reality-check.html', title: 'Second Reality Check', desc: 'Final validation of problem-solution alignment before business model verification.', cat: 'Process', tags: 'final check validation alignment' },
        { url: 'cd-verify.html', title: 'Phase 4: Verify, Iterate, or Exit', desc: 'Consolidating all validation feedback and determining if we exit to Validation stage or pivot.', cat: 'Process', tags: 'exit verify pivot iterate' },
        { url: 'cd-verify-product.html', title: 'Verify the Product MVP', desc: 'Ensuring the MVP solves the core retention issues and provides high-value exam prep.', cat: 'Process', tags: 'verify mvp retention value' },
        { url: 'cd-verify-problem.html', title: 'Verify the Problem Fit', desc: 'Confirming that target students face real, severe pain points with existing training.', cat: 'Process', tags: 'verify problem pain points study' },
        { url: 'cd-verify-business-model.html', title: 'Verify the Business Model Fit', desc: 'Analyzing pricing model, customer acquisition cost, and revenue sustainability.', cat: 'Process', tags: 'verify business model pricing cost sustainability' },
        { url: 'cd-verify-iterate-exit.html', title: 'Iterate or Exit Gate', desc: 'The ultimate decision gate for Rifat: do we proceed, pivot, or stop?', cat: 'Process', tags: 'decision gate trigger pivot exit' },
        { url: 'motivation.html', title: 'Motivation: Why & How This Makes Money', desc: 'Full-site synthesis of why the business exists, the three revenue streams, and the ICP personas tied to each one.', cat: 'Strategy', tags: 'motivation money revenue icp personas why founder' },
        { url: 'hypothesis.html', title: 'Core Business Hypotheses', desc: 'Comprehensive dashboard tracking all customer, value prop, and distribution hypotheses.', cat: 'Strategy', tags: 'dashboard hypotheses tracking assumptions' },
        { url: 'hyp-h1.html', title: 'H1 · Rising AI skills expectations', desc: 'Detail page with premise-conclusion-status SVG diagram for H1.', cat: 'Hypothesis Detail', tags: 'h1 hypothesis detail skills expectations svg diagram' },
        { url: 'hyp-h2.html', title: 'H2 · Animated content format', desc: 'Detail page with premise-conclusion-status SVG diagram for H2.', cat: 'Hypothesis Detail', tags: 'h2 hypothesis detail animated retention svg diagram' },
        { url: 'hyp-h3.html', title: 'H3 · Audience will pay for cert prep', desc: 'Detail page with premise-conclusion-status SVG diagram for H3.', cat: 'Hypothesis Detail', tags: 'h3 hypothesis detail newsletter pay svg diagram' },
        { url: 'hyp-h4.html', title: 'H4 · ~1% free-to-paid conversion', desc: 'Detail page with premise-conclusion-status SVG diagram for H4.', cat: 'Hypothesis Detail', tags: 'h4 hypothesis detail funnel conversion svg diagram' },
        { url: 'hyp-h5.html', title: 'H5 · Cohorts sell out organically', desc: 'Detail page with premise-conclusion-status SVG diagram for H5.', cat: 'Hypothesis Detail', tags: 'h5 hypothesis detail cohort sellout svg diagram' },
        { url: 'hyp-h6.html', title: 'H6 · TAM/SAM/SOM market size', desc: 'Detail page with premise-conclusion-status SVG diagram for H6.', cat: 'Hypothesis Detail', tags: 'h6 hypothesis detail market size tam sam som svg diagram' },
        { url: 'hyp-h7.html', title: 'H7 · Funnel conversion rates', desc: 'Detail page with premise-conclusion-status SVG diagram for H7.', cat: 'Hypothesis Detail', tags: 'h7 hypothesis detail funnel ctr svg diagram' },
        { url: 'hyp-h8.html', title: 'H8 · Exam-ready PMF', desc: 'Detail page with premise-conclusion-status SVG diagram for H8.', cat: 'Hypothesis Detail', tags: 'h8 hypothesis detail pmf exam svg diagram' },
        { url: 'hyp-h9.html', title: 'H9 · $10k exit gate & job status', desc: 'Detail page with premise-conclusion-status SVG diagram for H9.', cat: 'Hypothesis Detail', tags: 'h9 hypothesis detail exit gate revenue svg diagram' },
        { url: 'hyp-h10.html', title: 'H10 · >40% video retention', desc: 'Detail page with premise-conclusion-status SVG diagram for H10.', cat: 'Hypothesis Detail', tags: 'h10 hypothesis detail retention mvp svg diagram' },
        { url: 'hyp-h11.html', title: 'H11 · $100k ARR triggers hiring', desc: 'Detail page with premise-conclusion-status SVG diagram for H11.', cat: 'Hypothesis Detail', tags: 'h11 hypothesis detail arr hiring svg diagram' },
        { url: 'hyp-h12.html', title: 'H12 · B2B / consulting channel', desc: 'Detail page with premise-conclusion-status SVG diagram for H12.', cat: 'Hypothesis Detail', tags: 'h12 hypothesis detail b2b consulting svg diagram' },
        { url: 'hyp-h13.html', title: 'H13 · 1,000x subscriber growth', desc: 'Detail page with premise-conclusion-status SVG diagram for H13.', cat: 'Hypothesis Detail', tags: 'h13 hypothesis detail subscriber growth svg diagram' },
        { url: 'hyp-h14.html', title: 'H14 · Multi-certification market expansion', desc: 'Detail page with premise-conclusion-status SVG diagram for H14.', cat: 'Hypothesis Detail', tags: 'h14 hypothesis detail multi certification expansion svg diagram' },
        { url: 'hyp-h15.html', title: 'H15 · Founder transitions to full-time', desc: 'Detail page with premise-conclusion-status SVG diagram for H15.', cat: 'Hypothesis Detail', tags: 'h15 hypothesis detail full-time founder svg diagram' },
        { url: 'hyp-h16.html', title: 'H16 · Paid ads, post-validation only', desc: 'Detail page with premise-conclusion-status SVG diagram for H16.', cat: 'Hypothesis Detail', tags: 'h16 hypothesis detail paid ads cac ltv svg diagram' },
        { url: 'hyp-h17.html', title: 'H17 · Onsite Cambridge + corporate pilot', desc: 'Detail page with premise-conclusion-status SVG diagram for H17.', cat: 'Hypothesis Detail', tags: 'h17 hypothesis detail onsite cambridge marianna svg diagram' },
        { url: 'hyp-h18.html', title: 'H18 · International onsite channels', desc: 'Detail page with premise-conclusion-status SVG diagram for H18.', cat: 'Hypothesis Detail', tags: 'h18 hypothesis detail international onsite uk europe usa svg diagram' },
        { url: 'confidence-report.html', title: 'Business Model Confidence Report', desc: 'Versioned, whole-site sanity check scoring hypothesis validation and site integrity into one confidence number.', cat: 'Docs', tags: 'confidence score sanity check audit integrity version' },
        { url: 'focus.html', title: 'Strategic Focus', desc: 'Where we focus our immediate energy: animations, YouTube playlists, mock exams.', cat: 'Strategy', tags: 'focus energy priority list roadmap' },
        { url: 'target-audience.html', title: 'Target Audience Analysis', desc: 'Persona details of early-adopter developers, study timelines, and motivations.', cat: 'Strategy', tags: 'personas developers study timeline profiles' },
        { url: 'risk-analysis.html', title: 'Key Risks & Mitigations', desc: 'Analysis of production fatigue, pricing models, content copycats, and platforms.', cat: 'Strategy', tags: 'risks mitigation fatigue pricing copycats cambridge onsite marianna corporate' },
        { url: 'requirements.html', title: 'Product & Technical Requirements', desc: 'Specs for hosting, animation software, mock testing platform, and automation rules.', cat: 'Strategy', tags: 'technical requirements hosting software specs' },
        { url: 'business-plan-summary.html', title: 'Business Plan Summary', desc: 'High-level summary of business objectives, market dynamics, and milestones.', cat: 'Strategy', tags: 'summary business plan objectives milestones' },
        { url: 'competitive-analysis.html', title: 'Competitive Analysis', desc: 'Udemy/Coursera, official vendor training, and YouTube educators compared against this program, and why this is different.', cat: 'Strategy', tags: 'competitive analysis udemy coursera official vendor youtube educators alternatives' },
        { url: 'evidence-map.html', title: 'Evidence Map', desc: 'Every hypothesis matched to its evidence source, including the Sunday free-cohort discovery-interview method.', cat: 'Strategy', tags: 'evidence map hypothesis sources sunday cohort discovery interviews' },
        { url: 'exam-performance-evidence.html', title: 'Candidate Exam Performance Evidence', desc: 'A real, anonymized candidate exam pass driven by meetup motivation, not product use -- what it does and does not prove.', cat: 'Strategy', tags: 'candidate exam performance evidence meetup motivation skilljar anonymized pass score' },
        { url: 'hypothesis-connectivity.html', title: 'What Does "Not Connected" Mean?', desc: 'Explains the three patterns behind a disconnected hypothesis in the Dependency Map: fully isolated, foundational-uncited gap, and terminal leaf.', cat: 'Strategy', tags: 'connectivity dependency map isolated orphan gap terminal leaf depends on feeds' },
        { url: 'single-founder-bandwidth.html', title: 'Single-Founder Bandwidth', desc: 'The founder weekly time ledger: contract day job, content production, and the Sunday live cohort slot.', cat: 'Strategy', tags: 'single founder bandwidth time ledger ir35 contractor sunday schedule' },
        { url: 'vc-deck.html', title: 'VC Deck', desc: 'Interactive slide-by-slide investor deck covering problem, solution, market, business model, traction, GTM, moat, and the ask.', cat: 'Strategy', tags: 'vc deck investor slides pitch interactive presentation' },
        { url: 'pitch-deck.html', title: '5-Minute Pitch Deck', desc: 'Single-scroll executive-review summary of the business with links to full detail on every claim.', cat: 'Strategy', tags: 'pitch deck 5 minute executive summary tldr' },
        { url: 'why-certification.html', title: 'Why Certification Matters', desc: 'Prospect-facing case for AI certification: pay premiums, employer partner-tier gating, and FDE hiring growth.', cat: 'Strategy', tags: 'why certification matters career prospects employer value' },
        { url: 'self-assessment.html', title: 'Self-Assessment', desc: 'Interactive 3-question quiz routing prospects to the free cohort, the $29 bundle, membership, or live cohort.', cat: 'Strategy', tags: 'self assessment quiz recommendation which offer fits me' },
        { url: 'discovery-journey.html', title: 'The Discovery Journey', desc: 'Prospect-facing plain-language guide to what happens in a customer discovery call and how to join.', cat: 'Strategy', tags: 'discovery journey prospect interview join customer development' },
        { url: 'moat.html', title: 'Defensive Capabilities & Moat', desc: 'Honest investor-facing look at what is and isn\'t defensible: founder-market fit, content catalog, network effects, and the thin spots.', cat: 'Strategy', tags: 'moat defensive competitive advantage investors thin spots' },
        { url: 'maot.html', title: 'MAOT — Minimum Awesome Outcome Threshold', desc: 'A customer-development framework concept: the delight threshold beyond MVP where organic referral starts, tracked as H20.', cat: 'Strategy', tags: 'maot minimum awesome outcome threshold delight referral framework h20' },
        { url: 'partners.html', title: 'Partner With Us', desc: 'Outward-facing invitation for corporate training, content/co-instructor, and referral partnerships.', cat: 'Business Model', tags: 'partners partnership corporate b2b co-instructor referral' },
        { url: 'exam-prep-product.html', title: 'Exam Prep Bundle ($29)', desc: 'One-time $29 SKU — memory cards, prep exam, and mock exam — positioned alongside the membership and live cohort tiers, tracked as H21.', cat: 'Business Model', tags: 'exam prep bundle 29 dollars memory cards mock exam product h21' },
        { url: 'conversation-starters.html', title: 'Conversation Starters for Events', desc: 'Networking swipe file of one-line openers and role-play scripts for events and meetups.', cat: 'Growth', tags: 'conversation starters events networking role play openers pitch' },
        { url: 'metrics-dashboard.html', title: 'Metrics Dashboard', desc: 'Unified decision-maker view of confidence score, stage-gate progress, and live traction signals in one screen.', cat: 'Growth', tags: 'metrics dashboard decision makers unified kpi rollup' },
        { url: 'market-fit-channels.html', title: 'Market Fit & Channels', desc: 'Customer-facing demonstration of real traction signals and the channels people actually use to find the program.', cat: 'Growth', tags: 'market fit channels demonstration customers signals traction' },
        { url: 'ai-demo.html', title: 'Adaptive AI Prep — Concept Demo', desc: 'Interactive concept demo of adaptive, explanation-driven practice questions that adjust difficulty.', cat: 'Growth', tags: 'ai demo adaptive interactive practice concept prototype' },
        { url: 'hyp-h20.html', title: 'H20 · MAOT predicts organic referral', desc: 'Detail page with premise-conclusion-status SVG diagram for H20.', cat: 'Hypothesis Detail', tags: 'h20 hypothesis detail maot referral delight svg diagram' },
        { url: 'hyp-h21.html', title: 'H21 · $29 Exam Prep Bundle entry SKU', desc: 'Detail page with premise-conclusion-status SVG diagram for H21.', cat: 'Hypothesis Detail', tags: 'h21 hypothesis detail exam prep bundle 29 sku svg diagram' },
        { url: 'hyp-h22.html', title: 'H22 · Certified-talent delivery placement (FDE model)', desc: 'Detail page with premise-conclusion-status SVG diagram for H22.', cat: 'Hypothesis Detail', tags: 'h22 hypothesis detail forward deployed engineer talent placement recruiting svg diagram' },
        { url: 'business-model-canvas.html', title: 'Business Model Canvas (BMC)', desc: 'The master 9-box canvas showing partners, key actions, value prop, channels, and revenue.', cat: 'Business Model', tags: 'canvas bmc partners actions value revenue' },
        { url: 'value-proposition.html', title: 'Value Proposition Canvas', desc: 'Mapping user pains/gains directly to our features and product services.', cat: 'Business Model', tags: 'value proposition pains gains features benefits' },
        { url: 'bmc-customer-segments.html', title: 'BMC: Customer Segments', desc: 'Target cohorts, early adopters, and certification candidate segment definition.', cat: 'Business Model', tags: 'segments cohorts early adopters candidate' },
        { url: 'bmc-channels.html', title: 'BMC: Channels', desc: 'Distribution channels including YouTube, LinkedIn, organic search, and newsletters.', cat: 'Business Model', tags: 'channels distribution youtube linkedin newsletter' },
        { url: 'bmc-customer-relationships.html', title: 'BMC: Customer Relationships', desc: 'Self-service video access, discord community membership, and live Q&As.', cat: 'Business Model', tags: 'relationships self service discord community q&a' },
        { url: 'bmc-revenue-streams.html', title: 'BMC: Revenue Streams', desc: 'YouTube Memberships, mockup exam prep, high-ticket cohort bootcamps, and run-rates.', cat: 'Business Model', tags: 'revenue income youtube membership cohort pricing' },
        { url: 'bmc-key-resources.html', title: 'BMC: Key Resources', desc: 'Animation assets, study material, tech architecture blueprints, and cloud infrastructure.', cat: 'Business Model', tags: 'resources assets study blueprint infrastructure' },
        { url: 'bmc-key-activities.html', title: 'BMC: Key Activities', desc: 'Video script writing, timeline editing, mockup exam creation, and developer outreach.', cat: 'Business Model', tags: 'activities scripts editing mockup outreach' },
        { url: 'bmc-key-partners.html', title: 'BMC: Key Partners', desc: 'Cloud platforms, exam beta-testers, online developer groups, and video editors.', cat: 'Business Model', tags: 'partners beta-testers editors cloud groups' },
        { url: 'bmc-cost-structure.html', title: 'BMC: Cost Structure', desc: 'Fixed/variable costs, animation software licenses, hosting, and freelance editor fees.', cat: 'Business Model', tags: 'costs fixed variable software licensing hosting fees' },
        { url: 'sales-pipeline.html', title: 'Sales Pipeline & Funnel', desc: 'Visualization of stages from YouTube view to subscription and cohort signup.', cat: 'Growth', tags: 'pipeline funnel conversion stages youtube subscription' },
        { url: 'flywheel.html', title: 'Customer Growth Flywheel', desc: 'Frictionless acquisition loops, retention programs, and graduate referral engines.', cat: 'Growth', tags: 'flywheel loops acquisition retention referral' },
        { url: 'quality-gates.html', title: 'Quality Gates & Triggers', desc: 'Defined milestones to move from discovery to validation, creation, and building.', cat: 'Growth', tags: 'gates triggers milestones thresholds' },
        { url: 'stage-timelines.html', title: 'Stage Timeline Estimates', desc: 'Estimated start/exit date ranges for each of the four Customer Development stages, with a horizontal timeline diagram and a founder-bandwidth caveat.', cat: 'Growth', tags: 'timeline estimate schedule dates gantt stage duration' },
        { url: 'calendar.html', title: 'Milestone Calendar', desc: 'Chronological list of 17 named, dated milestones past and projected, expanding the H19 stage-timeline estimates into individual events.', cat: 'Growth', tags: 'calendar milestones dates schedule roadmap timeline events' },
        { url: 'test-metrics.html', title: 'Test Metrics & Verification', desc: 'Key performance indicators, watch-time thresholds, sign-up targets, and margins.', cat: 'Growth', tags: 'metrics verification kpi thresholds target' },
        { url: 'test-plan.html', title: 'Test Plan', desc: 'Execution calendar built around the weekly Sunday free cohort: discovery interviews, funnel instrumentation, cohort launches, onsite pilots.', cat: 'Growth', tags: 'test plan execution calendar sunday cohort discovery interviews cadence' },
        { url: 'advertisement.html', title: 'Paid Advertisement', desc: 'Conditional, post-validation paid ad channels (YouTube, LinkedIn, Google Search, Reddit, newsletters) gated by a CAC/LTV sustainability check.', cat: 'Growth', tags: 'paid ads advertising cac ltv youtube linkedin google reddit sponsorship' },
        { url: 'funnel-math.html', title: 'Funnel Math', desc: 'Backward-calculated views-needed-for-$10k arithmetic reconciling the H4 and H7 funnel models, with a sensitivity table.', cat: 'Growth', tags: 'funnel math views needed calculation ctr conversion sensitivity' },
        { url: 'unit-economics.html', title: 'Unit Economics', desc: 'Per-seat and per-member economics for the $250 cohort and $10/mo membership, priced against the founder day-rate benchmark.', cat: 'Growth', tags: 'unit economics per seat per member margin day rate ir35' },
        { url: 'cost-side-model.html', title: 'Cost-Side Model', desc: 'Business-level cost stack, founder time-opportunity cost, and break-even math against the $100/mo infra cost.', cat: 'Growth', tags: 'cost side model break even infra opportunity cost' },
        { url: 'validation-repeat-gate.html', title: 'Validation Repeat Gate', desc: 'Revises the $10k Stage 2 exit gate to require 2 consecutive cohort launches instead of one.', cat: 'Growth', tags: 'validation repeat gate two launches revenue false positive' },
        { url: 'marketing-tactics.html', title: 'Marketing Tactics: The Headline Swipe File', desc: 'Eight draft headlines built on the Samuel Leeds urgency formula, each priced with a gain/loss ledger and a no-guarantee compliance rule.', cat: 'Growth', tags: 'marketing tactics headlines copywriting titles urgency swipe file samuel leeds' },
        { url: 'todo.html', title: 'Task List', desc: 'Open production/build tasks: newsletter signup, 3-animations/week baseline, animated-video performance testing.', cat: 'Growth', tags: 'todo task list newsletter animations weekly baseline production' },
        { url: 'content-analysis.html', title: 'Content Analysis', desc: 'Per-video retention log tracking animated content performance against the 40% MVP target, seeded with a 68% first data point.', cat: 'Growth', tags: 'content analysis retention video performance analytics' },
        { url: 'cohort-prep.html', title: 'Cohort Prep', desc: 'Weekly WhatsApp/Discord install list and content preview that runs between live Sunday cohort sessions, so attendees arrive ready for hands-on work.', cat: 'Growth', tags: 'cohort prep whatsapp discord install setup weekly hands-on' },
        { url: 'comp-problem-solution.html', title: 'Component: Problem-Solution Fit', desc: 'Validating that study guides solve the core certification retention issues.', cat: 'Component', tags: 'problem solution fit validation' },
        { url: 'comp-mvp.html', title: 'Component: Minimum Viable Product (MVP)', desc: 'Blueprint for the first 3 animated videos and a simple practice test page.', cat: 'Component', tags: 'mvp blueprint videos practice test' },
        { url: 'comp-market.html', title: 'Component: Market & Target Audience', desc: 'Detailed target market size, growth rates, and candidate segmentations.', cat: 'Component', tags: 'market size growth segmentation audience' },
        { url: 'comp-business-model.html', title: 'Component: Business Model', desc: 'Pricing tiers, target margins, and path to initial cohort goal.', cat: 'Component', tags: 'business model pricing margins path goal' },
        { url: 'comp-funnel.html', title: 'Component: Funnel & Channels', desc: 'Acquisition pathways, youtube click-throughs, and discord sign-ups.', cat: 'Component', tags: 'funnel pathways youtube click discord sign-up' },
        { url: 'comp-pmf.html', title: 'Component: Product-Market Fit', desc: 'Analyzing survey results, renewal rates, and student reference score.', cat: 'Component', tags: 'pmf survey renewal reference score' },
        { url: 'comp-roadmap.html', title: 'Component: Sales & Marketing Roadmap', desc: 'Timeline of marketing releases, launches, and promotional cohort sequences.', cat: 'Component', tags: 'roadmap timeline marketing launch cohort' },
        { url: 'comp-creation-validation.html', title: 'Component: Creation Validation & Triggers', desc: 'The thresholds for transition (40% watch rate, $10,000 gross).', cat: 'Component', tags: 'creation validation thresholds trigger gate' },
        { url: 'comp-scale-organization.html', title: 'Component: Scale Organization', desc: 'Structure of hiring freelance editors, assistants, and community leads.', cat: 'Component', tags: 'scale organization hiring structure team roles' },
        { url: 'discovery/state-hypotheses.html', title: 'Discovery: State Hypotheses Detail', desc: 'State the core hypotheses and target audience segment criteria.', cat: 'Discovery Detail', tags: 'hypotheses audience segments criteria state' },
        { url: 'discovery/test-problem.html', title: 'Discovery: Test Problem Detail', desc: 'Test problem pain points and early adopter responses.', cat: 'Discovery Detail', tags: 'test problem pain points adopters responses' },
        { url: 'discovery/test-solution.html', title: 'Discovery: Test Solution Detail', desc: 'Test the MVP solution and check watch time / signup numbers.', cat: 'Discovery Detail', tags: 'test solution mvp watch time signup' },
        { url: 'discovery/verify-pivot.html', title: 'Discovery: Verify or Pivot Detail', desc: 'The final discovery verify-pivot checklist and scaling gate.', cat: 'Discovery Detail', tags: 'verify pivot checklist scaling gate threshold' },
        { url: 'business-overview.html', title: 'Business Overview (One-Pager)', desc: 'Plain-language one-page reference for what the business does, who it is for, how it makes money, and current stage.', cat: 'References', tags: 'business overview one pager elevator pitch summary reference what does this do' },
        { url: 'cd-hypothesis-interview-questions.html', title: 'Hypothesis Interview Questions', desc: 'Specific customer-interview questions mapped to every hypothesis (H1-H19), each with a listen-for cue for what would validate or kill it.', cat: 'Process', tags: 'interview questions hypothesis test validate kill customer discovery ask what to ask' }
    ];

    // Build current page URL (relative to root)
    var currentPageUrl = currentFile;
    if (isSubdir) {
        currentPageUrl = 'discovery/' + currentPageUrl;
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
                { url: 'stage-customer-discovery.html', title: '1. Customer Discovery' },
                { url: 'stage-customer-validation.html', title: '2. Customer Validation' },
                { url: 'business-model-canvas.html', title: 'Business Model Canvas' }
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
            url: 'cd-process.html',
            title: 'Discovery Process Overview',
            desc: 'The roadmap for Customer Discovery: State, Test, Validate, and Exit.',
            emoji: '📍'
        },
        {
            url: 'cd-watering-holes.html',
            title: 'Watering Holes & Outreach',
            desc: 'Where early adopters gather (Triton Square, meetups, cohorts) and outreach templates.',
            emoji: '🌐'
        },
        {
            url: 'cd-interview-guide.html',
            title: 'Qualitative Interview Guide',
            desc: 'The core customer development interview script, focusing on customer story gathering and pain/gain signals.',
            emoji: '🎤'
        },
        {
            url: 'cd-interview-recording.html',
            title: 'Interview Recording & Tracker',
            desc: 'The live CRM of customer discovery conversations and follow-up copy templates.',
            emoji: '📝'
        },
        {
            url: 'business-model-canvas.html',
            title: 'Business Model Canvas',
            desc: 'The full 9-box view of the business model. See how value, segments, and costs connect.',
            emoji: '🖼️'
        },
        {
            url: 'value-proposition.html',
            title: 'Value Proposition Canvas',
            desc: 'Connecting customer pains and gains directly to the training video MVP features.',
            emoji: '💎'
        },
        {
            url: 'bmc-revenue-streams.html',
            title: 'Revenue Streams & Pricing',
            desc: 'Monetization details: low-ticket mock exams ($10/mo) and high-ticket cohorts ($250-$500).',
            emoji: '💰'
        },
        {
            url: 'hypothesis.html',
            title: 'Hypothesis Dashboard',
            desc: 'The single source of truth tracking all 19 hypotheses (H1 to H19) and their validation status.',
            emoji: '💭'
        },
        {
            url: 'hypothesis-connectivity.html',
            title: 'Hypothesis Dependency Map',
            desc: 'The dependency maps explaining foundational gaps, isolated assumptions, and leaf nodes.',
            emoji: '🔀'
        },
        {
            url: 'unit-economics.html',
            title: 'Unit Economics & Funnel Math',
            desc: 'Financial metrics and ROI calculations showing profitability and sustainability gates.',
            emoji: '💵'
        },
        {
            url: 'comp-roadmap.html',
            title: 'Sales & Marketing Roadmap',
            desc: 'Copywriting swipe files, positioning strategies, and scaling triggers.',
            emoji: '🗺️'
        },
        {
            url: 'calendar.html',
            title: 'Milestone Calendar',
            desc: 'The chronological timeline tracking actual done/TBD dates for the project.',
            emoji: '📅'
        },
        {
            url: 'confidence-report.html',
            title: 'Business Model Confidence Report',
            desc: 'The final numeric verification sanity check scoring all hypotheses and site links.',
            emoji: '🧪'
        }
    ];

    var relatedConceptsOverride = {
        'index.html': [
            { url: 'motivation.html', title: 'Motivation & ICP', emoji: '🔥' },
            { url: 'business-model-canvas.html', title: 'Business Model Canvas', emoji: '🖼️' },
            { url: 'hypothesis.html', title: 'Hypothesis Tracker', emoji: '💭' }
        ],
        'motivation.html': [
            { url: 'target-audience.html', title: 'ICP Personas', emoji: '👥' },
            { url: 'bmc-revenue-streams.html', title: 'Revenue Streams', emoji: '💰' },
            { url: 'funnel-math.html', title: 'Funnel Math', emoji: '🧮' },
            { url: 'marketing-tactics.html', title: 'Marketing Swipe File', emoji: '📰' }
        ],
        'cd-process.html': [
            { url: 'stage-customer-discovery.html', title: 'Discovery Stage', emoji: '🔍' },
            { url: 'cd-interview-guide.html', title: 'Interview Guide', emoji: '🎤' },
            { url: 'cd-watering-holes.html', title: 'Watering Holes', emoji: '🌐' }
        ],
        'cd-watering-holes.html': [
            { url: 'cd-interview-guide.html', title: 'Interview Guide', emoji: '🎤' },
            { url: 'cd-interview-recording.html', title: 'Interview Tracker', emoji: '📝' },
            { url: 'cd-process.html', title: 'Process Overview', emoji: '📍' }
        ],
        'cd-interview-guide.html': [
            { url: 'cd-interview-recording.html', title: 'Interview Tracker', emoji: '📝' },
            { url: 'cd-watering-holes.html', title: 'Watering Holes', emoji: '🌐' },
            { url: 'cd-process.html', title: 'Process Overview', emoji: '📍' }
        ],
        'cd-interview-recording.html': [
            { url: 'cd-interview-guide.html', title: 'Interview Guide', emoji: '🎤' },
            { url: 'cd-watering-holes.html', title: 'Watering Holes', emoji: '🌐' },
            { url: 'evidence-map.html', title: 'Evidence Map', emoji: '🔍' }
        ],
        'business-model-canvas.html': [
            { url: 'value-proposition.html', title: 'Value Prop Canvas', emoji: '💎' },
            { url: 'bmc-revenue-streams.html', title: 'Revenue Streams', emoji: '💰' },
            { url: 'bmc-channels.html', title: 'Channels', emoji: '📣' },
            { url: 'bmc-cost-structure.html', title: 'Cost Structure', emoji: '📉' }
        ],
        'value-proposition.html': [
            { url: 'business-model-canvas.html', title: 'Business Model Canvas', emoji: '🖼️' },
            { url: 'bmc-customer-segments.html', title: 'Customer Segments', emoji: '👥' },
            { url: 'comp-mvp.html', title: 'MVP Product Details', emoji: '📦' }
        ],
        'bmc-revenue-streams.html': [
            { url: 'business-model-canvas.html', title: 'Business Model Canvas', emoji: '🖼️' },
            { url: 'unit-economics.html', title: 'Unit Economics', emoji: '💵' },
            { url: 'funnel-math.html', title: 'Funnel Math', emoji: '🧮' },
            { url: 'motivation.html', title: 'Motivation & ICP', emoji: '🔥' }
        ],
        'hypothesis.html': [
            { url: 'hypothesis-connectivity.html', title: 'Dependency Map', emoji: '🔀' },
            { url: 'confidence-report.html', title: 'Confidence Report', emoji: '🧪' },
            { url: 'calendar.html', title: 'Milestone Calendar', emoji: '📅' }
        ],
        'hypothesis-connectivity.html': [
            { url: 'hypothesis.html', title: 'Hypothesis Dashboard', emoji: '💭' },
            { url: 'confidence-report.html', title: 'Confidence Report', emoji: '🧪' },
            { url: 'stage-timelines.html', title: 'Stage Timelines', emoji: '📅' }
        ],
        'unit-economics.html': [
            { url: 'funnel-math.html', title: 'Funnel Math', emoji: '🧮' },
            { url: 'cost-side-model.html', title: 'Cost-Side Model', emoji: '📉' },
            { url: 'bmc-cost-structure.html', title: 'BMC Cost Structure', emoji: '📉' }
        ],
        'comp-roadmap.html': [
            { url: 'marketing-tactics.html', title: 'Marketing Swipe File', emoji: '📰' },
            { url: 'calendar.html', title: 'Milestone Calendar', emoji: '📅' },
            { url: 'sales-pipeline.html', title: 'Sales Pipeline', emoji: '📊' }
        ],
        'calendar.html': [
            { url: 'stage-timelines.html', title: 'Stage Timelines', emoji: '📅' },
            { url: 'quality-gates.html', title: 'Quality Gates', emoji: '🚪' },
            { url: 'todo.html', title: 'Task List', emoji: '✅' }
        ],
        'confidence-report.html': [
            { url: 'hypothesis.html', title: 'Hypothesis Dashboard', emoji: '💭' },
            { url: 'quality-gates.html', title: 'Quality Gates', emoji: '🚪' },
            { url: 'evidence-map.html', title: 'Evidence Map', emoji: '🔍' }
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
                { url: 'hypothesis.html', title: 'Hypothesis Dashboard', emoji: '💭' }
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
