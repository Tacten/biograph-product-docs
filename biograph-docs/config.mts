import { defineConfig } from 'vitepress'
import tailwindcss from '@tailwindcss/vite'
import { fileURLToPath, URL } from 'node:url'

export default defineConfig({
    title: "Fossible Works",
    description: "Open-source digital health product development — Medplum, EHR, self-hosting & AI solutions",
    appearance: true,
    cleanUrls: true,

    sitemap: {
        hostname: 'https://www.fossibleworks.com'
    },

    // Add Tailwind as a Vite plugin
    vite: {
        plugins: [tailwindcss()],
        resolve: {
            alias: [
                {
                    find: /^.*\/VPNavBarMenuLink\.vue$/,
                    replacement: fileURLToPath(new URL('./components/VPNavBarMenuLink.vue', import.meta.url))
                },
                {
                    find: /^.*\/VPMenuLink\.vue$/,
                    replacement: fileURLToPath(new URL('./components/VPMenuLink.vue', import.meta.url))
                }
            ]
        }
    },

    head: [
        // Default to light mode for first-time visitors (user can still toggle to dark)
        ['script', {}, `
          ;(() => {
            const stored = localStorage.getItem('vitepress-theme-appearance')
            if (!stored) {
              localStorage.setItem('vitepress-theme-appearance', 'light')
            }
          })()
        `],
        // Favicon
        ['link', { rel: 'icon', type: 'image/svg+xml', href: '/logo/fossible-icon-transparent.svg' }],
        // Preconnect to Google Fonts for faster loading
        ['link', { rel: 'preconnect', href: 'https://fonts.googleapis.com' }],
        ['link', { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' }],
        // Load Sora, Manrope, and JetBrains Mono
        ['link', {
            rel: 'stylesheet',
            href: 'https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500;600;700&family=Manrope:wght@300;400;500;600;700;800&family=Sora:wght@400;500;600;700;800&display=swap'
        }],
        // Global SEO — Open Graph
        ['meta', { property: 'og:site_name', content: 'Fossible Works' }],
        ['meta', { property: 'og:type', content: 'website' }],
        ['meta', { property: 'og:image', content: 'https://www.fossibleworks.com/logo/fossible-icon-transparent.svg' }],
        // Global SEO — Twitter Card
        ['meta', { name: 'twitter:card', content: 'summary' }],
        ['meta', { name: 'twitter:site', content: '@tacten' }],
        // Schema.org Organization JSON-LD
        ['script', { type: 'application/ld+json' }, JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "Fossible Works",
            "url": "https://www.fossibleworks.com",
            "logo": "https://www.fossibleworks.com/logo/fossible-icon-transparent.svg",
            "description": "Enterprise-grade digital health infrastructure on open-source foundations",
            "sameAs": [
                "https://twitter.com/tacten",
                "https://www.linkedin.com/company/tacten",
                "https://github.com/Tacten"
            ],
            "knowsAbout": ["Digital Health", "Open Source", "Medplum", "FHIR", "EHR", "Self-Hosting", "AI Solutions"]
        })],
    ],

    transformPageData(pageData) {
        // Dynamic SEO for individual blog posts
        if (pageData.relativePath.startsWith('blog/posts/') && pageData.params) {
            const { title, metaDescription, metaImage, blogger, publishedOn, blogIntro } = pageData.params
            const description = metaDescription || blogIntro || ''
            const slug = pageData.relativePath.replace('blog/posts/', '').replace('.md', '')
            const pageUrl = `https://www.fossibleworks.com/blog/posts/${slug}`

            // Set page title
            pageData.title = title
            pageData.description = description

            // Build head tags for this page
            pageData.frontmatter.head = [
                // Meta description
                ['meta', { name: 'description', content: description }],
                // Open Graph
                ['meta', { property: 'og:title', content: title }],
                ['meta', { property: 'og:description', content: description }],
                ['meta', { property: 'og:type', content: 'article' }],
                ['meta', { property: 'og:url', content: pageUrl }],
                ...(metaImage ? [['meta', { property: 'og:image', content: metaImage }]] : []),
                ['meta', { property: 'article:published_time', content: publishedOn }],
                ['meta', { property: 'article:author', content: blogger }],
                // Twitter Card
                ['meta', { name: 'twitter:title', content: title }],
                ['meta', { name: 'twitter:description', content: description }],
                ...(metaImage ? [
                    ['meta', { name: 'twitter:card', content: 'summary_large_image' }],
                    ['meta', { name: 'twitter:image', content: metaImage }],
                ] : []),
                // BlogPosting JSON-LD
                ['script', { type: 'application/ld+json' }, JSON.stringify({
                    "@context": "https://schema.org",
                    "@type": "BlogPosting",
                    "headline": title,
                    "description": description,
                    ...(metaImage ? { "image": metaImage } : {}),
                    "datePublished": publishedOn,
                    "author": {
                        "@type": "Person",
                        "name": blogger
                    },
                    "publisher": {
                        "@type": "Organization",
                        "name": "Fossible Works",
                        "logo": {
                            "@type": "ImageObject",
                            "url": "https://www.fossibleworks.com/logo/fossible-icon-transparent.svg"
                        }
                    },
                    "url": pageUrl,
                    "mainEntityOfPage": {
                        "@type": "WebPage",
                        "@id": pageUrl
                    }
                })]
            ]
        }
    },

    themeConfig: {
        search: {
            provider: 'local'
        },
        logo: { light: '/logo/fossible-logo-light.svg', dark: '/logo/fossible-logo-dark.svg' },
        siteTitle: false,
        nav: [
            {
                text: 'Digital Health',
                items: [
                    {
                        text: 'Biograph',
                        link: '/products/biograph/',
                        icon: 'lucide-heart',
                        subtitle: 'CareOps & ERP Platform'
                    },
                    {
                        text: 'Health Data Platform ',
                        link: '/products/medplum/',
                        icon: 'lucide-database',
                        subtitle: 'Medplum - FHIR CDR'
                    },

                    {
                        text: 'The Fossible Stack ',
                        link: '/guide/stack',
                        icon: 'lucide-layers',
                        subtitle: 'Enterprise Stack'
                    }

                ]
            },
            { text: 'Solutions', link: '/solutions/' },
            { text: 'Enterprise', link: '/enterprise/' },

            {
                text: 'Resources',
                items: [
                    {
                        text: 'Docs',
                        link: '/guide/biograph-docs/',
                        icon: 'lucide-book-open',
                        subtitle: 'Documentation'
                    },
                    {
                        text: 'Blog',
                        link: '/blog/',
                        icon: 'lucide-pencil',
                        subtitle: 'Latest Updates'
                    }

                ]
            },
            { text: '|', link: '' },
            { text: 'About', link: '/about/' },
            { text: 'Contact Us', link: '/contact/' }
        ],
        sidebar: {
            '/guide/': [
                {
                    text: 'Biograph Docs',
                    collapsed: true,
                    items: [
                        { text: 'Overview', link: '/guide/biograph-docs/' },
                        {
                            text: 'Getting Started',
                            collapsed: true,
                            items: [
                                { text: 'What is Biograph', link: '/guide/biograph-docs/getting-started/overview' },
                                { text: 'Who Should Use Biograph', link: '/guide/biograph-docs/getting-started/users' },
                                { text: 'Key Features & Benefits', link: '/guide/biograph-docs/getting-started/features' },
                                { text: 'Healthcare Workflow', link: '/guide/biograph-docs/getting-started/workflow' },
                                { text: 'System Architecture', link: '/guide/biograph-docs/getting-started/architecture' },
                                { text: 'Terminology & Concepts', link: '/guide/biograph-docs/getting-started/glossary' },
                                { text: 'Quick Start Guide', link: '/guide/biograph-docs/getting-started/quickstart' },
                            ]
                        },
                        {
                            text: 'Role-Based Workflows',
                            collapsed: true,
                            items: [
                                { text: 'Clinical Administrator', link: '/guide/biograph-docs/user-personas/clinical-administrator' },
                                { text: 'Reception / Front Desk', link: '/guide/biograph-docs/user-personas/reception--front-desk' },
                                { text: 'Physicians / Practitioner', link: '/guide/biograph-docs/user-personas/physicians-practitioner' },
                                { text: 'Nurse', link: '/guide/biograph-docs/user-personas/nurse' },
                                { text: 'Laboratory User', link: '/guide/biograph-docs/user-personas/laboratory-user' },
                                { text: 'Pharmacist', link: '/guide/biograph-docs/user-personas/pharmacist' },
                                { text: 'Billing Staff', link: '/guide/biograph-docs/user-personas/billing-staff' },
                                { text: 'Hospital Management', link: '/guide/biograph-docs/user-personas/hospital--management-administartor' },
                                { text: 'Patients', link: '/guide/biograph-docs/user-personas/patients' },
                            ]
                        },
                        {
                            text: 'Setup & Configuration',
                            collapsed: true,
                            items: [
                                { text: 'Installation', link: '/guide/biograph-docs/setup/installation' },
                                { text: 'Healthcare Settings', link: '/guide/biograph-docs/setup/healthcare-settings' },
                                { text: 'Masters Configuration', link: '/guide/biograph-docs/setup/masters' },
                                { text: 'Facility Setup', link: '/guide/biograph-docs/setup/facility' },
                                { text: 'User Management', link: '/guide/biograph-docs/setup/users' },
                                { text: 'Security & Compliance', link: '/guide/biograph-docs/setup/security' },
                            ]
                        },
                        {
                            text: 'Patient Management',
                            collapsed: true,
                            items: [
                                { text: 'Patient Registration', link: '/guide/biograph-docs/patient-care/registration' },
                                { text: 'Medical History', link: '/guide/biograph-docs/patient-care/medical-history' },
                                { text: 'Patient Dashboard', link: '/guide/biograph-docs/patient-care/dashboard' },
                                { text: 'Duplicate Detection', link: '/guide/biograph-docs/patient-care/duplicate-detection' },
                                { text: 'Patient Care Types', link: '/guide/biograph-docs/patient-care/care-types' },
                            ]
                        },
                        {
                            text: 'Staff & Attendance',
                            collapsed: true,
                            items: [
                                { text: 'Shift Management', link: '/guide/biograph-docs/hr-workforce/shift-management' },
                                { text: 'Attendance Management', link: '/guide/biograph-docs/hr-workforce/attendance-management' },
                                { text: 'Time Tracking', link: '/guide/biograph-docs/hr-workforce/time' },
                                { text: 'Overtime Management', link: '/guide/biograph-docs/hr-workforce/overtime' },
                             ]
                        },
                        {
                            text: 'Practitioner Management',
                            collapsed: true,
                            items: [
                                { text: 'Practitioner Setup', link: '/guide/biograph-docs/patient-care/practitioner-setup' },
                                { text: 'Practitioner Types', link: '/guide/biograph-docs/patient-care/practitioner-types' },
                                { text: 'Availability & Scheduling', link: '/guide/biograph-docs/patient-care/practitioner-scheduling' },
                                { text: 'Charges & Fee Validity', link: '/guide/biograph-docs/patient-care/practitioner-charges' },
                                { text: 'Referring Physicians', link: '/guide/biograph-docs/patient-care/referrals' },
                            ]
                        },
                        {
                            text: 'Appointments & Scheduling',
                            collapsed: true,
                            items: [
                                { text: 'Prerequisites', link: '/guide/biograph-docs/clinical-workflows/appointment-prerequisites' },
                                { text: 'Booking Appointments', link: '/guide/biograph-docs/clinical-workflows/booking-appointments' },
                                { text: 'Queue Management', link: '/guide/biograph-docs/clinical-workflows/appointment-queue-management' },
                                { text: 'Appointment Calendar', link: '/guide/biograph-docs/clinical-workflows/appointment-calendar' },
                                { text: 'Cancel & Reschedule', link: '/guide/biograph-docs/clinical-workflows/cancel-reschedule' },
                                { text: 'Status Workflow', link: '/guide/biograph-docs/clinical-workflows/appointment-status' },
                                { text: 'Billing Integration', link: '/guide/biograph-docs/clinical-workflows/appointment-billing' },
                                { text: 'Teleconsultation', link: '/guide/biograph-docs/clinical-workflows/teleconsultation' },
                            ]
                        },
                        {
                            text: 'Clinical Consultation',
                            collapsed: true,
                            items: [
                                { text: 'Encounter Overview', link: '/guide/biograph-docs/clinical-workflows/encounter-overview' },
                                { text: 'Creating Encounters', link: '/guide/biograph-docs/clinical-workflows/creating-encounters' },
                                { text: 'Clinical Documentation', link: '/guide/biograph-docs/clinical-workflows/clinical-documentation' },
                                { text: 'Orders & Prescriptions', link: '/guide/biograph-docs/clinical-workflows/orders-prescriptions' },
                                { text: 'Medical Coding', link: '/guide/biograph-docs/clinical-workflows/medical-coding' },
                                { text: 'Follow-up & Fee Validity', link: '/guide/biograph-docs/clinical-workflows/followup-fee-validity' },
                            ]
                        },
                        {
                            text: 'Nursing & Tasks',
                            collapsed: true,
                            items: [
                                { text: 'Nursing Tasks', link: '/guide/biograph-docs/clinical-workflows/nursing-tasks' },
                                { text: 'Checklist Templates', link: '/guide/biograph-docs/clinical-workflows/nursing-checklists' },
                                { text: 'Service Requests', link: '/guide/biograph-docs/clinical-workflows/service-requests' },
                            ]
                        },
                        {
                            text: 'Clinical Procedures',
                            collapsed: true,
                            items: [
                                { text: 'Procedure Creation', link: '/guide/biograph-docs/clinical-workflows/procedure-creation' },
                                { text: 'Procedure Templates', link: '/guide/biograph-docs/clinical-workflows/procedure-templates' },
                                { text: 'Procedure Workflow', link: '/guide/biograph-docs/clinical-workflows/procedure-workflow' },
                                { text: 'Consumables & Billing', link: '/guide/biograph-docs/clinical-workflows/procedure-billing' },
                            ]
                        },
                        {
                            text: 'Laboratory & Diagnostics',
                            collapsed: true,
                            items: [
                                { text: 'Lab Test Templates', link: '/guide/biograph-docs/diagnostics/lab-test-templates' },
                                { text: 'Sample Collection', link: '/guide/biograph-docs/diagnostics/sample-collection' },
                                { text: 'Lab Test Creation', link: '/guide/biograph-docs/diagnostics/lab-test-creation' },
                                { text: 'Observations & Results', link: '/guide/biograph-docs/diagnostics/observations' },
                                { text: 'Diagnostic Reports', link: '/guide/biograph-docs/diagnostics/diagnostic-reports' },
                            ]
                        },
                        {
                            text: 'Inpatient Management',
                            collapsed: true,
                            items: [
                                { text: 'Admission Process', link: '/guide/biograph-docs/inpatient/admission' },
                                { text: 'Bed & Occupancy', link: '/guide/biograph-docs/inpatient/bed-management' },
                                { text: 'Transfers', link: '/guide/biograph-docs/inpatient/transfers' },
                                { text: 'Medication Orders', link: '/guide/biograph-docs/inpatient/medication-orders' },
                                { text: 'Medication Administration', link: '/guide/biograph-docs/inpatient/medication-administration' },
                                { text: 'Progress Notes', link: '/guide/biograph-docs/inpatient/progress-notes' },
                                { text: 'Treatment Counselling', link: '/guide/biograph-docs/inpatient/treatment-counselling' },
                                { text: 'Discharge Planning', link: '/guide/biograph-docs/inpatient/discharge-planning' },
                                { text: 'Discharge Summary', link: '/guide/biograph-docs/inpatient/discharge-summary' },
                            ]
                        },
                        {
                            text: 'Rehabilitation',
                            collapsed: true,
                            items: [
                                { text: 'Exercise Types', link: '/guide/biograph-docs/specialized/exercise-types' },
                                { text: 'Therapy Types', link: '/guide/biograph-docs/specialized/therapy-types' },
                                { text: 'Therapy Plans', link: '/guide/biograph-docs/specialized/therapy-plans' },
                                { text: 'Therapy Sessions', link: '/guide/biograph-docs/specialized/therapy-sessions' },
                                { text: 'Patient Assessments', link: '/guide/biograph-docs/specialized/patient-assessments' },
                            ]
                        },
                        {
                            text: 'Pharmacy & Medication',
                            collapsed: true,
                            items: [
                                { text: 'Medication Catalog', link: '/guide/biograph-docs/specialized/medication-catalog' },
                                { text: 'Prescription Processing', link: '/guide/biograph-docs/specialized/prescription-processing' },
                                { text: 'Stock Integration', link: '/guide/biograph-docs/specialized/stock-integration' },
                                { text: 'Medication Requests', link: '/guide/biograph-docs/specialized/medication-requests' },
                            ]
                        },
                        {
                            text: 'Billing & Finance',
                            collapsed: true,
                            items: [
                                { text: 'Service Item Mapping', link: '/guide/biograph-docs/billing-insurance/service-items' },
                                { text: 'Patient Billing', link: '/guide/biograph-docs/billing-insurance/patient-billing' },
                                { text: 'Package Billing', link: '/guide/biograph-docs/billing-insurance/package-billing' },
                                { text: 'Invoice Workflow', link: '/guide/biograph-docs/billing-insurance/invoice-workflow' },
                                { text: 'Payment Processing', link: '/guide/biograph-docs/billing-insurance/payments' },
                                { text: 'Financial Reports', link: '/guide/biograph-docs/billing-insurance/financial-reports' },
                            ]
                        },
                        {
                            text: 'Insurance',
                            collapsed: true,
                            items: [
                                { text: 'Payor Setup', link: '/guide/biograph-docs/billing-insurance/insurance-payor' },
                                { text: 'Contracts', link: '/guide/biograph-docs/billing-insurance/insurance-contracts' },
                                { text: 'Eligibility & Coverage', link: '/guide/biograph-docs/billing-insurance/insurance-eligibility' },
                                { text: 'Patient Policies', link: '/guide/biograph-docs/billing-insurance/patient-policies' },
                                { text: 'Coverage Creation', link: '/guide/biograph-docs/billing-insurance/coverage-creation' },
                                { text: 'Claim Workflow', link: '/guide/biograph-docs/billing-insurance/claim-workflow' },
                            ]
                        },
                        {
                            text: 'Reports & Analytics',
                            collapsed: true,
                            items: [
                                { text: 'Clinical Reports', link: '/guide/biograph-docs/analytics-regional/clinical-reports' },
                                { text: 'Operational Reports', link: '/guide/biograph-docs/analytics-regional/operational-reports' },
                                { text: 'Dashboards & KPIs', link: '/guide/biograph-docs/analytics-regional/dashboards' },
                            ]
                        },
                        {
                            text: 'Regional (India)',
                            collapsed: true,
                            items: [
                                { text: 'ABDM Integration', link: '/guide/biograph-docs/analytics-regional/abdm' },
                            ]
                        },
                    ]
                },
                {
                    text: 'Getting Started',
                    items: [
                        { text: 'Introduction', link: '/guide/' },
                        { text: 'Demo Sites', link: '/guide/demo-sites' },
                    ]
                },
                {
                    text: 'Products & Services',
                    items: [
                        { text: 'Espresso Cloud', link: '/guide/espresso-cloud' },
                        { text: 'Hydra AI', link: '/guide/hydra-ai' },
                        { text: 'Fossible Sprints', link: '/guide/fossible-sprints' },
                        { text: 'Fossible Stack', link: '/guide/stack' },
                    ]
                }
            ]
        },
    }
})
