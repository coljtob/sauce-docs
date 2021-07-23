module.exports = {
    apif: [
        'api-testing',
        {
            type: 'category',
            label: 'Cloud',
            collapsed: true,
            items: [
                {
                    type: 'category',
                    label: 'Quick Start',
                    collapsed: true,
                    items: [
                        'api-testing/mark3/quick-start',
                        'api-testing/mark3/quick-start/composer',
                        'api-testing/mark3/quick-start/build-from-spec',
                        'api-testing/mark3/quick-start/test-reports',
                        'api-testing/mark3/quick-start/schedule-a-test',
                        'api-testing/mark3/quick-start/dashboard',
                        'api-testing/mark3/quick-start/integrate-with-your-cicd',
                        'api-testing/mark3/quick-start/adding-a-user',
                        'api-testing/mark3/quick-start/flexible-variables-for-flexible-environments',
                    ],
                },
            ],
        },
        {
            type: 'category',
            label: 'On Premise',
            collapsed: true,
            items: [
                {
                    type: 'category',
                    label: 'Quick Start',
                    collapsed: true,
                    items: [
                        'api-testing/mark2/quick-start',
                        'api-testing/mark2/quick-start/composer',
                        'api-testing/mark2/quick-start/build-from-spec',
                        'api-testing/mark2/quick-start/test-reports',
                        'api-testing/mark2/quick-start/schedule-a-test',
                        'api-testing/mark2/quick-start/dashboard',
                        'api-testing/mark2/quick-start/integrate-with-your-cicd',
                        'api-testing/mark2/quick-start/introduction-to-integration-testing',
                        'api-testing/mark2/quick-start/adding-a-user',
                        'api-testing/mark2/quick-start/flexible-variables-for-flexible-environments',
                        'api-testing/mark2/quick-start/environments-vault-and-overrides-magic',
                        'api-testing/mark2/quick-start/setup-connectors',
                        'api-testing/mark2/quick-start/the-vault',
                        'api-testing/mark2/quick-start/importing-postman-collections',
                        'api-testing/mark2/quick-start/load-testing',
                        'api-testing/mark2/quick-start/mocking-services',
                        'api-testing/mark2/quick-start/easy-monitoring',
                        'api-testing/mark2/quick-start/forge',
                    ],
                },
                {
                    type: 'category',
                    label: 'APIs and Webhooks',
                    collapsed: true,
                    items: [
                        'api-testing/mark2/api/v3',
                        'api-testing/mark2/api/using-the-api',
                    ],
                },
                {
                    type: 'category',
                    label: 'Assertion Components',
                    collapsed: true,
                    items: [
                        'api-testing/mark2/assertion-components/assert-compares',
                        'api-testing/mark2/assertion-components/assert-contains',
                        'api-testing/mark2/assertion-components/assert-equals',
                        'api-testing/mark2/assertion-components/assert-exists',
                        'api-testing/mark2/assertion-components/assert-greater',
                        'api-testing/mark2/assertion-components/assert-in',
                        'api-testing/mark2/assertion-components/assert-is',
                        'api-testing/mark2/assertion-components/assert-less',
                        'api-testing/mark2/assertion-components/assert-matches',
                        'api-testing/mark2/assertion-components/assert-valid-json-schema',
                    ],
                },
                {
                    type: 'category',
                    label: 'Bloodhound',
                    collapsed: true,
                    items: [
                        'api-testing/mark2/bloodhound',
                        'api-testing/mark2/bloodhound/basic-configuration',
                        'api-testing/mark2/bloodhound/flows',
                        'api-testing/mark2/bloodhound/base-actors',
                        'api-testing/mark2/bloodhound/load-balancing',
                        'api-testing/mark2/bloodhound/fine-tuning',
                        'api-testing/mark2/bloodhound/advanced-actors',
                        {
                            type: 'category',
                            label: 'Module Actors',
                            collapsed: true,
                            items: [
                                'api-testing/mark2/bloodhound/module-actors',
                                'api-testing/mark2/bloodhound/module-actors/jdbc',
                                'api-testing/mark2/bloodhound/module-actors/mongodb',
                                'api-testing/mark2/bloodhound/module-actors/rabbitmq',
                                'api-testing/mark2/bloodhound/module-actors/fortress-forwarder',
                            ],
                        },
                        'api-testing/mark2/bloodhound/expressions',
                        'api-testing/mark2/bloodhound/forward-calls-to-apif-logger',
                        'api-testing/mark2/bloodhound/using-databases',
                    ],
                },
                {
                    type: 'category',
                    label: 'CI/CD',
                    collapsed: true,
                    items: [
                        'api-testing/mark2/ci/apif-auto',
                        'api-testing/mark2/ci/azure-devops',
                        'api-testing/mark2/ci/connecting-with-bamboo',
                        'api-testing/mark2/ci/bitbucket',
                        'api-testing/mark2/ci/gitlab',
                        {
                            type: 'category',
                            label: 'Jenkins',
                            collapsed: true,
                            items: [
                                'api-testing/mark2/ci/jenkins/using-the-api',
                                'api-testing/mark2/ci/jenkins/apif-auto',
                                'api-testing/mark2/ci/jenkins/apif-auto-and-github',
                                'api-testing/mark2/ci/jenkins/zephyr-enterprise-integration',
                            ],
                        },
                        'api-testing/mark2/ci/micro-focus-alm-integration',
                    ],
                },
                {
                    type: 'category',
                    label: 'How To Guides',
                    collapsed: true,
                    items: [
                        'api-testing/mark2/how-to/assertions-for-metrics-performance',
                        'api-testing/mark2/how-to/3-leg-oauth',
                        'api-testing/mark2/how-to/integration-testing',
                        'api-testing/mark2/how-to/copy-a-test',
                        'api-testing/mark2/how-to/authorization-simple-oauth-etc',
                        'api-testing/mark2/how-to/different-ways-to-compose-a-request-body',
                        'api-testing/mark2/how-to/disable-ssl-validation',
                        'api-testing/mark2/how-to/dynamic-dates',
                        'api-testing/mark2/how-to/tweaking-stateful-email-notifications',
                        'api-testing/mark2/how-to/executing-from-cucumber',
                        'api-testing/mark2/how-to/following-redirects',
                        'api-testing/mark2/how-to/footprint',
                        'api-testing/mark2/how-to/generate-a-status-page',
                        'api-testing/mark2/how-to/generating-fake-test-data',
                        'api-testing/mark2/how-to/github-for-datasets',
                        'api-testing/mark2/how-to/create-a-dynamic-header',
                        'api-testing/mark2/how-to/import-export-tests',
                        'api-testing/mark2/how-to/kv',
                        'api-testing/mark2/how-to/keystores-for-downloader',
                        'api-testing/mark2/how-to/load-agent-deployment',
                        'api-testing/mark2/how-to/setup-notifications-performance-alerts',
                        'api-testing/mark2/how-to/testing-graphql',
                        'api-testing/mark2/how-to/update-input',
                        'api-testing/mark2/how-to/using-long-lasting-tokens',
                        'api-testing/mark2/how-to/version-control',
                        'api-testing/mark2/how-to/writing-tests-in-code',
                    ],
                },
                {
                    type: 'category',
                    label: 'I/O Components',
                    collapsed: true,
                    items: [
                        'api-testing/mark2/io-components',
                        'api-testing/mark2/io-components/jdbc',
                        'api-testing/mark2/io-components/multipart-upload',
                        'api-testing/mark2/how-to/update-input',
                    ],
                },
                {
                    type: 'category',
                    label: 'Integrations',
                    collapsed: true,
                    items: [
                        'api-testing/mark2/integrations/add-new-connector',
                        'api-testing/mark2/integrations/alerts-thresholds-using-json-connector',
                        'api-testing/mark2/ci/connecting-with-bamboo',
                        {
                            type: 'category',
                            label: 'Connectors',
                            collapsed: true,
                            items: [
                                'api-testing/mark2/integrations/connectors/bigpanda-io',
                                'api-testing/mark2/integrations/connectors/datadog',
                                'api-testing/mark2/integrations/connectors/elastic-kibana',
                                'api-testing/mark2/integrations/connectors/jira',
                                'api-testing/mark2/integrations/connectors/pagerduty',
                                'api-testing/mark2/integrations/connectors/statuspage',
                                'api-testing/mark2/integrations/connectors/twilio',
                                'api-testing/mark2/integrations/connectors/xmatters',
                                'api-testing/mark2/integrations/connectors/splunk',
                            ],
                        },
                        'api-testing/mark2/integrations/helper-databases-jdbc',
                        'api-testing/mark2/integrations/jenkins',
                        'api-testing/mark2/integrations/single-sign-on-with-saml-2-0-beta',
                    ],
                },
                {
                    type: 'category',
                    label: 'Learn More',
                    collapsed: true,
                    items: [
                        'api-testing/mark2/learn-more/downloader-101',
                        'api-testing/mark2/learn-more/improving-your-metrics',
                        'api-testing/mark2/learn-more/input-set-and-global-variables',
                        'api-testing/mark2/learn-more/planning-your-test',
                        'api-testing/mark2/learn-more/the-variables-system-in-api-fortress',
                        'api-testing/mark2/learn-more/working-with-the-response-object',
                        'api-testing/mark2/learn-more/the-working-copy-published-tests',

                    ],
                },
                {
                    type: 'category',
                    label: 'Logical Components',
                    collapsed: true,
                    items: [
                        'api-testing/mark2/logical-components/each',
                        'api-testing/mark2/logical-components/flow',
                        'api-testing/mark2/logical-components/if',
                        'api-testing/mark2/logical-components/tag',
                        'api-testing/mark2/logical-components/while',
                    ],
                },
                {
                    type: 'category',
                    label: 'Mocking / Service Virtualization',
                    collapsed: true,
                    items: [
                        'api-testing/mark2/mocking/expressions-in-mocked-apis',
                        'api-testing/mark2/mocking/mock-recording-with-kong',
                    ],
                },
                {
                    type: 'category',
                    label: 'Monitoring',
                    collapsed: true,
                    items: [
                        'api-testing/mark2/how-to/generate-a-status-page',
                        'api-testing/mark2/how-to/setup-notifications-performance-alerts',
                    ],
                },
                {
                    type: 'category',
                    label: 'Postman',
                    collapsed: true,
                    items: [
                        'api-testing/mark2/postman/build-from-collections',
                    ],
                },
                {
                    type: 'category',
                    label: 'Product Information',
                    collapsed: true,
                    items: [
                        'api-testing/mark2/product-information/api-tests-vs-schema-validation',
                        'api-testing/mark2/product-information/cloud-vs-on-premises-local',
                    ],
                },
                {
                    type: 'category',
                    label: 'Reference',
                    collapsed: true,
                    items: [
                        'api-testing/mark2/assertion-components/assert-compares',
                        'api-testing/mark2/assertion-components/assert-contains',
                        'api-testing/mark2/assertion-components/assert-equals',
                        'api-testing/mark2/assertion-components/assert-exists',
                        'api-testing/mark2/assertion-components/assert-greater',
                        'api-testing/mark2/assertion-components/assert-in',
                        'api-testing/mark2/assertion-components/assert-is',
                        'api-testing/mark2/assertion-components/assert-less',
                        'api-testing/mark2/assertion-components/assert-matches',
                        'api-testing/mark2/reference/comment',
                        'api-testing/mark2/reference/company-settings',
                        'api-testing/mark2/reference/composer-snippets',
                        'api-testing/mark2/reference/connecting-to-testrail',
                        'api-testing/mark2/reference/execution-context-in-api-fortress',
                        'api-testing/mark2/reference/expression',
                        'api-testing/mark2/reference/expression-language-extensions',
                        'api-testing/mark2/logical-components/flow',
                        'api-testing/mark2/reference/generating-a-jwt',
                        'api-testing/mark2/reference/github',
                        'api-testing/mark2/logical-components/if',
                        'api-testing/mark2/bloodhound/module-actors/jdbc',
                        'api-testing/mark2/how-to/kv',
                        'api-testing/mark2/reference/read-file',
                        'api-testing/mark2/logical-components/tag',
                        'api-testing/mark2/logical-components/while',
                    ],
                },
                {
                    type: 'category',
                    label: 'Security Testing',
                    collapsed: true,
                    items: [
                        'api-testing/mark2/security-testing/example-security-tests',
                    ],
                },
                {
                    type: 'category',
                    label: 'Self Hosted',
                    collapsed: true,
                    items: [{
                        type: 'category',
                        label: 'The Self Hosted Platform',
                        collapsed: true,
                        items: [
                            'api-testing/mark2/self-hosted/on-prem-platform',
                            'api-testing/mark2/self-hosted/on-premises-requirements',
                            'api-testing/mark2/self-hosted/updating-an-on-premises-instance',
                            'api-testing/mark2/self-hosted/on-premises-backing-up-your-data',
                        ],
                    },
                        {
                            type: 'category',
                            label: 'Other Platforms',
                            collapsed: true,
                            items: [
                                'api-testing/mark2/self-hosted/deployment-docker',
                                'api-testing/mark2/self-hosted/deployment-kubernetes',
                                'api-testing/mark2/self-hosted/red-hat-openshift',
                            ],
                        },
                        'api-testing/mark2/self-hosted/best-practices-for-disaster-recovery',
                        'api-testing/mark2/self-hosted/certificate-based-mutual-ssl-tls-authentication',
                        'api-testing/mark2/self-hosted/deployment-configure-the-dns-for-the-mocking-service',
                        'api-testing/mark2/learn-more/downloader-101',
                        'api-testing/mark2/self-hosted/enabling-api-fortress-to-read-local-files',
                        'api-testing/mark2/how-to/load-agent-deployment',
                        'api-testing/mark2/self-hosted/local-downloader-setup',
                        'api-testing/mark2/self-hosted/multiple-client-cert-downloader',
                        'api-testing/mark2/self-hosted/proxy-settings-in-downloader',
                        'api-testing/mark2/self-hosted/updating-the-api-fortress-license-key',
                        'api-testing/mark2/self-hosted/using-rds-and-documentdb',
                    ],
                },
            ],
        },
    ],
    dev: [
        'dev',
        {
            type: 'category',
            label: 'API Reference',
            collapsed: true,
            items: [
                'dev/api',
                'dev/api/accounts',
                'dev/api/connect',
                'dev/api/insights',
                'dev/api/jobs',
                'dev/api/performance',
                'dev/api/platform',
                'dev/api/rdc',
                'dev/api/storage',
            ],
        },
        {
            type: 'category',
            label: 'CLI Reference',
            collapsed: true,
            items: [
                'dev/cli',
                'dev/cli/sauce-connect-proxy',
                {
                    type: 'category',
                    label: 'Virtual USB',
                    collapsed: true,
                    items: [
                        'dev/cli/virtual-usb',
                        'dev/cli/virtual-usb/start-server',
                        'dev/cli/virtual-usb/start-session',
                        'dev/cli/virtual-usb/connect-session',
                        'dev/cli/virtual-usb/disconnect-session',
                        'dev/cli/virtual-usb/delete-session',
                        'dev/cli/virtual-usb/find-sessionid',
                    ],
                },
                {
                    type: 'link',
                    label: 'saucectl CLI', // The label that should be displayed (string).
                    href: '/testrunner-toolkit/saucectl' // The target URL (string).
                },
            ],
        },
    ],
    docs: {
        "Home": [
            'overview',
            {
                type: 'category',
                label: 'Sauce Labs Basics',
                collapsed: true,
                items: [
                    'sauce-basics',
                    'basics/platform-configurator',
                    'basics/environment-variables',

                    {
                        type: 'category',
                        label: 'Account and Team Management',
                        collapsed: true,
                        items: [
                            'basics/acct-team-mgmt-hub',
                            'basics/acct-team-mgmt/org-settings',
                            'basics/acct-team-mgmt/real-devices',

                            {
                                type: 'category',
                                label: 'Managing Users and Accounts',
                                collapsed: true,
                                items: [
                                    'basics/acct-team-mgmt/concurrency-limits',
                                    'basics/acct-team-mgmt/adding-deactivating-users',
                                    'basics/acct-team-mgmt/managing-user-info',
                                    'basics/acct-team-mgmt/viewing-exporting-usage-data',
                                ],
                            },
                            {
                                type: 'category',
                                label: 'Managing Teams',
                                collapsed: true,
                                items: [
                                    'basics/acct-team-mgmt/adding-deleting-teams',
                                    'basics/acct-team-mgmt/assigning-removing-users-teams',
                                    'basics/acct-team-mgmt/sauce-connect-proxy-tunnels',
                                ],
                            },
                            {
                                type: 'category',
                                label: 'Billing and Subscriptions',
                                collapsed: true,
                                items: [
                                    'basics/acct-team-mgmt/managing-subscription',
                                    'basics/acct-team-mgmt/updating-billing',
                                    'basics/acct-team-mgmt/plan-details',
                                ],
                            },
                        ],
                    },

                    {
                        type: 'category',
                        label: 'Single Sign-On',
                        collapsed: true,
                        items: [
                            'basics/sso-hub',
                            'basics/sso/setting-up-single-sign-on',
                            'basics/sso/config-adfs',
                            'basics/sso/config-okta',

                        ],
                    },
                    {
                        type: 'category',
                        label: 'Test Configuration and Annotation',
                        collapsed: true,
                        items: [
                            'basics/test-config-annotation/test-config',
                            'basics/test-config-annotation/test-annotation',

                        ],
                    },
                    {
                        type: 'category',
                        label: 'Data Center Endpoints',
                        collapsed: true,
                        items: [
                            'basics/data-center-endpoints/data-center-endpoints',
                            'basics/data-center-endpoints/aust-early-access',

                        ],
                    },
                    {
                        type: 'category',
                        label: 'Integrations',
                        collapsed: true,
                        items: [
                            'basics/integrations/deque',
                            'basics/integrations/jira',
                        ],
                    },
                ],
            },
        ],
        "Sauce Trusted Connection": [
            'secure-connections',
            {
                type: 'category',
                label: 'Sauce Connect Proxy',
                collapsed: true,
                items: [
                    'secure-connections/sauce-connect',
                    'secure-connections/sauce-connect/system-requirements',
                    'secure-connections/sauce-connect/installation',

                    {
                        type: 'category',
                        label: 'Setup and Configuration',
                        collapsed: true,
                        items: [
                            'secure-connections/sauce-connect/setup-configuration/setup-configuration',
                            'secure-connections/sauce-connect/setup-configuration/basic-setup',
                            'secure-connections/sauce-connect/setup-configuration/additional-proxies',
                            'secure-connections/sauce-connect/setup-configuration/high-availability',
                            'secure-connections/sauce-connect/setup-configuration/specialized-environments',
                            'secure-connections/sauce-connect/setup-configuration/ci-cd-environments',
                        ]
                    },
                    'secure-connections/sauce-connect/environment-variables',
                    'secure-connections/sauce-connect/proxy-tunnels',
                    'secure-connections/sauce-connect/security-authentication',
                    'secure-connections/sauce-connect/troubleshooting',
                    'secure-connections/sauce-connect/faq',
                    'secure-connections/sauce-connect/changelog',
                ],
            },
            'secure-connections/ipsec-vpn',
        ],


        "Mobile Apps": [
            'mobile-apps',
            'mobile-apps/supported-devices',
            'mobile-apps/app-storage',
            {
                type: 'category',
                label: 'Live Testing',
                collapsed: true,
                items: [
                    'mobile-apps/live-testing/live-mobile-app-testing',
                ],
            },

            {
                type: 'category',
                label: 'Automated Testing',
                collapsed: true,
                items: [
                    'mobile-apps/automated-testing',
                    {
                        type: 'category',
                        label: 'Appium',
                        collapsed: true,
                        items: [
                            'mobile-apps/automated-testing/appium',
                            'mobile-apps/automated-testing/appium/real-devices',
                            'mobile-apps/automated-testing/appium/virtual-devices',
                            'mobile-apps/automated-testing/appium/migration',
                        ],
                    },
                    {
                        type: 'category',
                        label: 'Espresso and XCUITest',
                        collapsed: true,
                        items: [
                            'mobile-apps/automated-testing/espresso-xcuitest',
                            'testrunner-toolkit/configuration/espresso',
                            'testrunner-toolkit/configuration/xcuitest',
                        ],
                    },
                    'mobile-apps/automated-testing/ipa-files',
                ],
            },
            'mobile-apps/features',
            'mobile-apps/virtual-usb',
            'mobile-apps/ms-app-center',
            'mobile-apps/faq',
        ],
        "Web Apps": [
            'web-apps',
            {
                type: 'category',
                label: 'Live Testing',
                collapsed: true,
                items: [
                    'web-apps/live-testing/live-cross-browser-testing',
                ],
            },
            {
                type: 'category',
                label: 'Automated Testing',
                collapsed: true,
                items: [{
                    type: 'category',
                    label: 'Selenium',
                    collapsed: true,
                    items: [
                        'web-apps/automated-testing/selenium',
                        'web-apps/automated-testing/selenium/pre-run-executables',
                        'web-apps/automated-testing/selenium/sample-scripts',
                    ]
                },
                    {
                        type: 'category',
                        label: 'Cypress',
                        collapsed: true,
                        items: [
                            'web-apps/automated-testing/cypress',
                            'testrunner-toolkit/configuration/cypress',
                        ]
                    },
                    {
                        type: 'category',
                        label: 'Playwright',
                        collapsed: true,
                        items: [
                            'web-apps/automated-testing/playwright',
                            'testrunner-toolkit/configuration/playwright',
                        ],
                    },
                    {
                        type: 'category',
                        label: 'TestCafe',
                        collapsed: true,
                        items: [
                            'web-apps/automated-testing/testcafe',
                            'testrunner-toolkit/configuration/testcafe',
                        ]
                    },
                    {
                        type: 'category',
                        label: 'Puppeteer',
                        collapsed: true,
                        items: [
                            'web-apps/automated-testing/puppeteer',
                            'testrunner-toolkit/configuration/puppeteer',
                        ],
                    },
                ],
            },
        ],
        "API Testing": [
            'api-testing',

        ],
        "CI/CD": [
            'ci',
            'ci/bamboo',
            'ci/bitbucket',
            'ci/jenkins',
            'ci/teamcity',
        ],
        "Test Results": [
            'test-results',
            'test-results/viewing-test-results',
            'test-results/managing-test-results',
            'test-results/sharing-test-results',
            'test-results/archived-test-results',
            'test-results/test-status',
            'test-results/badges-browser-matrix',
        ],
        "Insights": [
            'insights',
            'insights/scope',
            'insights/history',
            'insights/trends',
            'insights/failure-analysis',
            'insights/debug',
        ],
        "Performance": [
            'performance',
            'performance/about',
            'performance/one-page',
            'performance/transitions',
            'performance/motion',
            'performance/analyze',
        ],
        "Headless": [
            'headless',
        ],
        "saucectl": [
            'testrunner-toolkit',
            'testrunner-toolkit/installation',
            'testrunner-toolkit/configuration',
            'testrunner-toolkit/running-tests',
            {
                type: 'category',
                label: 'CI Integrations',
                collapsed: true,
                items: [
                    'testrunner-toolkit/integrations',
                    'testrunner-toolkit/integrations/circleci',
                    'testrunner-toolkit/integrations/jenkins',
                    'testrunner-toolkit/integrations/github-actions',
                    'testrunner-toolkit/integrations/gitlab',
                ],
            },
            'testrunner-toolkit/typescript',
            'testrunner-toolkit/saucectl',
        ],
        "Visual": [
            'visual',
            {
                type: 'category',
                label: 'E2E Testing',
                collapsed: true,
                items: [
                    'visual/e2e-testing/setup',
                    'visual/e2e-testing/dashboard-workflow',
                    {
                        type: 'category',
                        label: 'Integrations',
                        collapsed: true,
                        items: [
                            'visual/e2e-testing/integrations/continuous-integration',
                            'visual/e2e-testing/integrations/selenium-webdriver',
                            'visual/e2e-testing/integrations/github',
                            'visual/e2e-testing/integrations/webhooks',
                            'visual/e2e-testing/integrations/sauce-labs',
                        ],
                    },
                    'visual/e2e-testing/screener-recorder',
                    'visual/e2e-testing/api',
                    'visual/e2e-testing/secure-connections',
                    'visual/e2e-testing/notifications',
                    'visual/e2e-testing/acct-team-mgmt',
                ],
            },
            {
                type: 'category',
                label: 'Component Testing',
                collapsed: true,
                items: [
                    'visual/component-testing/setup',
                    'visual/component-testing/dashboard-workflow',
                    {
                        type: 'category',
                        label: 'Integrations',
                        collapsed: true,
                        items: [
                            'visual/component-testing/integrations/continuous-integration',
                            'visual/component-testing/integrations/github',
                            'visual/component-testing/integrations/webhooks',
                            'visual/component-testing/integrations/slack',
                            'visual/component-testing/integrations/visual-studio',
                            'visual/component-testing/integrations/sauce-labs',
                        ],
                    },
                    'visual/component-testing/cross-browser-testing',
                    'visual/component-testing/testing-interactions',
                    'visual/component-testing/notifications',
                    'visual/component-testing/acct-team-mgmt',
                ],
            },
        ],
        "Reference": [
            'dev/glossary',
            'dev/error-messages',
            'dev/test-configuration-options',
            'dev/w3c-webdriver-capabilities',
            'dev/data-center-maint',
        ],
        Contributing: [
            'contributing',
            'contributing/code-of-conduct',
            {
                type: 'category',
                label: 'Style Guide',
                items: [
                    'contributing/style-guide',
                    'contributing/style-guide/mkdwn-styles',
                    'contributing/style-guide/adv-examples'
                ],
            },
        ],
    },
};