export default {
  widgets: [
    // {
    //   name: 'sanity-tutorials',
    //   options: {
    //     templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
    //   }
    // },
    { name: 'structure-menu' },
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '624aedecad60ab0a1f17c531',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-dmzz3u3n',
                  apiId: '2e79e15b-05e0-4a13-8e0c-84d3b3dc5a57'
                },
                {
                  buildHookId: '624aedec460d9415fe49e761',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-y7ups5c4',
                  apiId: 'f8978db8-edd7-4372-9fe0-aee9556a8d17'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/n2702623/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-y7ups5c4.netlify.app', category: 'apps' }
        ]
      }
    },
    {
      name: 'document-list',
      options: { title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page'] },
      layout: { width: 'medium' }
    },
    { name: 'project-users', layout: { height: 'auto' } }
  ]
}
