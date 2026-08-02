// Shared site header/navigation, built once and injected into #site-header.
// Organizes links into logical groups (Hub / Stages / Strategy / Business Model / Growth / Components / Docs)
// and marks the current page's link as active based on the URL filename.
(function () {
    var currentFile = (location.pathname.split('/').pop() || 'index.html');
    if (currentFile === '') currentFile = 'index.html';

    // [href, label] pairs. Query-string hrefs are matched by their base filename + src param.
    var groups = [
        { type: 'link', href: 'index.html', label: 'Hub' },
        {
            type: 'dropdown', label: 'Stages', items: [
                ['stage-customer-discovery.html', '1. Discovery'],
                ['stage-customer-validation.html', '2. Validation'],
                ['stage-customer-creation.html', '3. Creation'],
                ['stage-company-building.html', '4. Building']
            ]
        },
        {
            type: 'dropdown', label: 'Strategy', items: [
                ['hypothesis.html', 'Hypothesis'],
                ['focus.html', 'Focus'],
                ['target-audience.html', 'Target Audience'],
                ['risk-analysis.html', 'Risk Analysis'],
                ['requirements.html', 'Requirements'],
                ['business-plan-summary.html', 'Business Plan Summary']
            ]
        },
        {
            type: 'dropdown', label: 'Business Model', items: [
                ['business-model-canvas.html', 'Business Model Canvas'],
                ['value-proposition.html', 'Value Proposition'],
                ['bmc-customer-segments.html', 'Customer Segments'],
                ['bmc-channels.html', 'Channels'],
                ['bmc-customer-relationships.html', 'Customer Relationships'],
                ['bmc-revenue-streams.html', 'Revenue Streams'],
                ['bmc-key-resources.html', 'Key Resources'],
                ['bmc-key-activities.html', 'Key Activities'],
                ['bmc-key-partners.html', 'Key Partners'],
                ['bmc-cost-structure.html', 'Cost Structure']
            ]
        },
        {
            type: 'dropdown', label: 'Growth', items: [
                ['sales-pipeline.html', 'Sales Pipeline'],
                ['flywheel.html', 'Flywheel'],
                ['quality-gates.html', 'Quality Gates'],
                ['test-metrics.html', 'Test & Metrics']
            ]
        },
        {
            type: 'dropdown', label: 'Components', items: [
                ['comp-problem-solution.html', 'Problem-Solution Fit'],
                ['comp-mvp.html', 'MVP'],
                ['comp-market.html', 'Market &amp; Audience'],
                ['comp-business-model.html', 'Business Model'],
                ['comp-funnel.html', 'Funnel &amp; Channels'],
                ['comp-pmf.html', 'Product-Market Fit'],
                ['comp-roadmap.html', 'Sales &amp; Marketing Roadmap'],
                ['comp-creation-validation.html', 'Creation Validation &amp; Triggers'],
                ['comp-scale-organization.html', 'Scale Organization']
            ]
        },
        {
            type: 'dropdown', label: 'Docs', items: [
                ['markdown_renderer.html?src=README.md', 'README'],
                ['markdown_renderer.html?src=gemini.md', 'Project Rationale'],
                ['markdown_renderer.html?src=HYPOTHESIS.md', 'Hypothesis Tracker Full Doc'],
                ['markdown_renderer.html?src=reports/acidity-check-report-v1.0.md', 'Acidity Check Report'],
                ['markdown_renderer.html?src=reports/market-validation-argument-v1.0.md', 'Market Validation Argument'],
                ['markdown_renderer.html?src=reports/ai-adoption-and-skills-gap-v1.0.md', 'AI Adoption &amp; Skills Gap'],
                ['markdown_renderer.html?src=reports/exam-prep-market-and-student-behavior-v1.0.md', 'Exam Prep &amp; Student Behavior']
            ]
        }
    ];

    function isActive(href) {
        var hrefFile = href.split('?')[0];
        var hrefQuery = href.split('?')[1] || '';
        if (hrefFile !== currentFile) return false;
        if (!hrefQuery) return true;
        var currentQuery = location.search.replace(/^\?/, '');
        return hrefQuery === currentQuery;
    }

    function linkHtml(href, label) {
        var active = isActive(href) ? ' active' : '';
        return '<li><a href="' + href + '" class="nav-link' + active + '">' + label + '</a></li>';
    }

    var html = '<nav class="nav-container">' +
        '<a href="index.html" class="logo">' +
        '<div class="logo-icon">AI</div>' +
        '<span class="logo-text">AI Cert Helper</span>' +
        '</a>' +
        '<ul class="nav-menu">';

    groups.forEach(function (group) {
        if (group.type === 'link') {
            html += linkHtml(group.href, group.label);
        } else {
            html += '<li class="nav-dropdown">' +
                '<span class="nav-dropdown-toggle" tabindex="0">' + group.label + ' &#9662;</span>' +
                '<ul class="nav-dropdown-menu">';
            group.items.forEach(function (item) {
                html += linkHtml(item[0], item[1]);
            });
            html += '</ul></li>';
        }
    });

    html += '</ul></nav>';

    document.addEventListener('DOMContentLoaded', function () {
        var mount = document.getElementById('site-header');
        if (mount) mount.innerHTML = html;
    });

    // Also try immediate mount in case script runs after DOM is already parsed for this node.
    if (document.readyState !== 'loading') {
        var mountNow = document.getElementById('site-header');
        if (mountNow) mountNow.innerHTML = html;
    }
})();
