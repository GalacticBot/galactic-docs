module.exports = {
  docs: [
    'getting-started',
    {
      type: 'category',
      label: 'Guides',
      items: [
        {
          type: 'autogenerated',
          dirName: 'tutorials'
        }
      ]
    },
    {
      type: 'category',
      label: 'Commands',
      items: [
        {
          type: 'autogenerated',
          dirName: 'commands'
        }
      ]
    },
    {
      type: 'category',
      label: 'Settings',
      items: [
        {
          type: 'autogenerated',
          dirName: 'settings'
        }
      ]
    },
    'premium'
  ]
}

// module.exports = {
//   docs: [
//     {
//       type: 'doc',
//       id: 'getting-started'
//     },
//     {
//       type: 'category',
//       label: 'Guides',
//       items: [
//         'tutorials/InitialSetup',
//         'tutorials/Moderation',
//         'tutorials/Filters']
//     },
//     {
//       type: 'category',
//       label: 'Commands',
//       items: [
//         'commands/admin',
//         'commands/mod',
//         'commands/info',
//         'commands/util',
//         'commands/misc'
//       ]
//     },
//     {
//       type: 'category',
//       label: 'Settings',
//       items: [
//         {
//           type: 'category',
//           label: 'Administration',
//           items: loadPages('settings/administration') //['settings/administration/admin']
//         },
//         {
//           type: 'category',
//           label: 'Moderation',
//           items: loadPages('settings/moderation')
//           // [
//           //   'settings/moderation/wf',
//           //   'settings/moderation/ww'
//           // ]
//         },
//         {
//           type: 'autogenerated',
//           dirName: 'settings/logging'
//         },
//         {
//           type: 'category',
//           label: 'Utility',
//           items: loadPages('settings/utility') //['settings/utility/ar']
//         }
//       ]
//     },
//     {
//       type: 'doc',
//       id: 'premium'
//     }
//   ]
//   // docs: {
//   //   Commands: ['commands/moderation-commands', 'doc2', 'doc3'],
//   //   Features: ['mdx'],
//   // },
// };
