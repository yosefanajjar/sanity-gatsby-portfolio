export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
      }
    },
    {name: 'structure-menu'},
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
                  buildHookId: '616eb8e27945d542e8e1e0da',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio-studio-se272q6p',
                  apiId: '8a142060-5be8-4c76-a629-7643cdac38c6'
                },
                {
                  buildHookId: '616eb8e226d84c3f482f44ac',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio-web-h8zepkpy',
                  apiId: 'cec16e3e-2fb3-425a-8c16-082ae14c3e74'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/yosefanajjar/sanity-gatsby-portfolio',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-portfolio-web-h8zepkpy.netlify.app',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['sampleProject']},
      layout: {width: 'medium'}
    }
  ]
}
