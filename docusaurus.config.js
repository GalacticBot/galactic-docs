module.exports = {
  title: 'Galactic Bot',
  tagline: 'Advanced moderation bot for your Discord server',
  url: 'https://your-docusaurus-test-site.com',
  baseUrl: '/',
  favicon: 'img/GBotTest.ico',
  organizationName: 'galacticbot', // Usually your GitHub org/user name.
  projectName: 'galacticbot', // Usually your repo name.
  themeConfig: {
    defaultMode: 'dark',
    hideableSidebar: true,
    sidebarCollapsible: true,
    navbar: {
      title: 'Galactic Bot',
      logo: {
        alt: 'Galactic Logo',
        src: 'img/GBotTest.png',
      },
      items: [
        {
          to: 'docs/',
          activeBasePath: 'docs',
          label: 'Docs',
          position: 'left',
        },
        {
          to: 'blog',
          label: 'Change Log',
          position: 'left'
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
              label: 'Commands',
              to: 'docs/commands',
            },
            {
              label: 'Settings',
              to: 'docs/settings',
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
              to: 'blog',
            },
            {
              label: 'Invite',
              href: 'https://discordapp.com/oauth2/authorize?&client_id=179805777492574208&scope=bot&permissions=8',
            },
            {
              label: 'Patreon',
              href: 'https://www.patreon.com/galacticbot'
            }
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Galactic Bot. Site built with Docusaurus.`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          // It is recommended to set document id as docs home page (`docs/` path).
          homePageId: 'getting-started',
          //frontmatter: 'slug: /',
          sidebarPath: require.resolve('./sidebars.js')
        },
        blog: {
          
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
