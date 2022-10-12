/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
})

const path = require(`path`)

module.exports = {
  siteMetadata: {
    title: `Lon Sagisawa`,
    description: `private blog of Lon Sagisawa`,
    siteUrl: `https://lon.sagisawa.me`
  },
  plugins: [
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-image`,
    `gatsby-plugin-gatsby-cloud`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: path.join(__dirname, `src`, `images`),
      }
    },
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: process.env.CONTENTFUL_SPACE_ID,
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
        host: process.env.CONTENTFUL_HOST,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        gfm: true,
        plugins: [
          {
            resolve: `gatsby-remark-shiki`,
            options: {
              theme: `material-default`,
            },
          },
          {
            resolve: `gatsby-remark-images-contentful`,
            options: {
              maxWidth: 768,
              withWebp: true,
              loading: `lazy`,
              backgroundColor: `#6b7280`,
              linkImagesToOriginal: true
            },
          },
          {
            resolve: `gatsby-remark-external-links`
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Lon Sagisawa`,
        short_name: `LS`,
        start_url: `/`,
        background_color: `#404040`,
        theme_color: `#ffffff`,
        display: `standalone`,
        icon: `src/images/maskable_icon.png`,
        icon_options: {
          purpose: `any maskable`,
        },
        cache_busting_mode: `none`,
      },
    },
    {
      resolve: `gatsby-plugin-offline`,
      options: {
        workboxConfig: {
          globPatterns: [ '**/icons*' ],
          runtimeCaching: [
            {
              /* Contentfulで更新した記事が反映されない問題を解消 */
              urlPattern: /^https?:.*\/page-data\/.*\.json/,
              handler: `NetworkFirst`,
            },
          ]
        },
      },
    },
    {
      resolve: `gatsby-plugin-feed`,
      options: {
        query: `
          {
            site {
              siteMetadata {
                description
                siteUrl
                title
                site_url: siteUrl
              }
            }
          }
        `,
        feeds: [
          {
            serialize: ({ query: { site, allContentfulPost } }) => {
              return allContentfulPost.edges.map(edge => {
                return Object.assign({}, edge.node, {
                  description: edge.node.description.description,
                  date: edge.node.date,
                  url: site.siteMetadata.siteUrl + edge.node.prefix + edge.node.slug,
                  guid: site.siteMetadata.siteUrl + edge.node.prefix + edge.node.slug,
                  custom_elements: [{ "content:encoded": edge.node.body.childMarkdownRemark.html }],
                })
              })
            },
            query: `
              {
                allContentfulPost(sort: {order: DESC, fields: date}) {
                  edges {
                    node {
                      title
                      date
                      prefix: date(formatString: "/YYYY/MM/")
                      description {
                        description
                      }
                      slug
                      body {
                        childMarkdownRemark {
                          html
                        }
                      }
                    }
                  }
                }
              }
            `,
            output: "/rss.xml",
            title: "Lon Sagisawa :: RSS feed",
          }
        ]
      }
    },
  ],
}
