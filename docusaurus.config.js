// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
    title: 'Galactic Bot',
    tagline: 'Advanced moderation bot for your Discord server',
    url: 'https://galactic.corgi.wtf',
    baseUrl: '/documentation/',
    onBrokenLinks: 'throw',
    onBrokenMarkdownLinks: 'warn',
    favicon: 'img/GBotTest.ico',

    // GitHub pages deployment config.
    // If you aren't using GitHub pages, you don't need these.
    organizationName: 'galacticbot', // Usually your GitHub org/user name.
    projectName: 'Galactic', // Usually your repo name.

    // Even if you don't use internalization, you can use this field to set useful
    // metadata like html lang. For example, if your site is Chinese, you may want
    // to replace "en" with "zh-Hans".
    i18n: {
        defaultLocale: 'en',
        locales: ['en'],
    },

    presets: [
        [
            'classic',
            /** @type {import('@docusaurus/preset-classic').Options} */
            ({
                docs: {
                    sidebarPath: require.resolve('./sidebars.js'),
                    // Please change this to your repo.
                    // Remove this to remove the "edit this page" links.
                    // editUrl:
                    //     'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
                    sidebarCollapsible: true
                },
                blog: {
                    routeBasePath: '/changes',
                    showReadingTime: true,
                    // Please change this to your repo.
                    // Remove this to remove the "edit this page" links.
                    // editUrl:
                    //   'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
                },
                theme: {
                    customCss: require.resolve('./src/css/custom.css'),
                },
            }),
        ],
    ],

    themeConfig:
        /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
        ({
            navbar: {
                title: 'Galactic Bot',
                logo: {
                    alt: 'Galactic Logo',
                    src: 'img/GBotTest.png',
                },
                items: [
                    {
                        type: 'doc',
                        docId: 'getting-started',
                        position: 'left',
                        label: 'Docs',
                    },
                    { to: '/changes', label: 'Change Log', position: 'left' },
                    {
                        label: 'Control Panel',
                        //activeBasePath: '/dashboard',
                        //to: '/dashboard',
                        target: '_self',
                        href: 'https://galactic.corgi.wtf/dashboard'
                    }
                ],
            },
            footer: {
                style: 'dark',
                links: [
                    {
                        title: 'Docs',
                        items: [
                            {
                                label: 'Initial setup',
                                to: 'docs/tutorials/InitialSetup',
                            },
                            {
                                label: 'Moderation intro',
                                to: 'docs/tutorials/Moderation',
                            },
                        ],
                    },
                    {
                        title: 'Community',
                        items: [
                            {
                                label: 'Discord',
                                href: 'https://discordapp.com/invite/WDCTKGp',
                            },
                            {
                                label: 'Twitter',
                                href: 'https://twitter.com/botgalactic',
                            },
                        ],
                    },
                    {
                        title: 'More',
                        items: [
                            {
                                label: 'Change Log',
                                to: '/changes',
                            },
                            {
                                label: 'Invite',
                                href: 'https://discordapp.com/oauth2/authorize?&client_id=179805777492574208&scope=bot&permissions=8',
                            },
                            {
                                label: 'Patreon',
                                href: 'https://www.patreon.com/galacticbot'
                            },
                            {
                                label: 'GitHub',
                                href: 'https://github.com/GalacticBot/galactic-docs'
                            }
                        ],
                    },
                ],
                copyright: `Copyright © ${new Date().getFullYear()} Galactic Bot. Site built with Docusaurus.`,
            },
            prism: {
                theme: lightCodeTheme,
                darkTheme: darkCodeTheme,
            },
        }),
};

module.exports = config;
