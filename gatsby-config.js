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
  plugins: [
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-image`,
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
        commonmark: true,
        footnotes: true,
        pedantic: true,
        gfm: true,
        plugins: [
          {
            resolve: `gatsby-remark-shiki`,
            options: {
              theme: `nord`,
            },
          },
          {
            resolve: `gatsby-remark-images-contentful`,
            options: {
              maxWidth: 750,
              withWebp: true,
              loading: `lazy`,
              backgroundColor: `#eceff4`,
            },
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
        icon: `src/images/logo.png`,
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
  ],
}
