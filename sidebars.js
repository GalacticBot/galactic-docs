const fs = require('fs');

const loadPages = (folder) => {
  const pages = fs.readdirSync(`./docs/${folder}`);
  return pages.map(page => `${folder}/${page.split('.')[0]}`);
}

module.exports = {
  docs: [
    {
      type: 'doc',
      id: 'getting-started'
    },
    {
      type: 'category',
      label: 'Tutorials',
      items: [
        'tutorials/InitialSetup',
        'tutorials/Moderation',
        'tutorials/Filters']
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
          items: loadPages('settings/administration') //['settings/administration/admin']
        },
        {
          type: 'category',
          label: 'Moderation',
          items: loadPages('settings/moderation')
          // [
          //   'settings/moderation/wf',
          //   'settings/moderation/ww'
          // ]
        },
        {
          type: 'category',
          label: 'Utility',
          items: loadPages('settings/utility') //['settings/utility/ar']
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
