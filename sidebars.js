module.exports = {
  docs: [
    {
      type: 'doc',
      id: 'getting-started'
    },
    {
      type: 'category',
      label: 'Commands',
      items: [
        'commands/admin',
        'commands/mod',
        'commands/info',
        'commands/util',
        'commands/misc'
      ]
    },
    {
      type: 'category',
      label: 'Settings',
      items: [
        {
          type: 'category',
          label: 'Administration',
          items: ['settings/admin']
        },
        {
          type: 'category',
          label: 'Moderation',
          items: [
            'settings/moderation/wf',
            'settings/moderation/ww'
          ]
        },
        {
          type: 'category',
          label: 'Utility',
          items: ['settings/util']
        }
      ]
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
