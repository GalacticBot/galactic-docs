module.exports = {
  title: 'Galactic Bot',
  tagline: 'Advanced moderation bot for your Discord server',
  url: 'https://galactic.corgi.wtf/documentation',
  baseUrl: '/documentation/',
  favicon: 'img/GBotTest.ico',
  organizationName: 'galacticbot', // Usually your GitHub org/user name.
  projectName: 'galacticbot', // Usually your repo name.
  themeConfig: {
    colorMode: {
      defaultMode: 'dark'
    },
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
        },
        {
          label: 'Control Panel',
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
              to: 'blog',
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
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          // It is recommended to set document id as docs home page (`docs/` path).
          //homePageId: 'getting-started',
          //frontmatter: 'slug: /',
          sidebarPath: require.resolve('./sidebars.js')
        },
        blog: {
          
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
        sitemap: {
          changefreq: 'weekly',
          priority: 0.5,
          trailingSlash: false,
        }
      },
    ],
  ]
};
