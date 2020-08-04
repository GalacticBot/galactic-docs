module.exports = {
  docs: [
    {
      type: 'doc',
      id: 'getting-started'
    },
    {
      type: 'category',
      label: 'Commands',
      items: ['commands/admin', 'commands/mod', 'commands/info', 'commands/util', 'commands/misc' ]
    },
    {
      type: 'category',
      label: 'Settings',
      items: ['settings/admin', 'settings/mod', 'settings/util']
    },
    {
      type: 'doc',
      id: 'premium'
    }
  ]
  // docs: {
  //   Commands: ['commands/moderation-commands', 'doc2', 'doc3'],
  //   Features: ['mdx'],
  // },
};
