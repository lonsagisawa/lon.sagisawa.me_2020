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
            resolve: `gatsby-remark-prismjs`,
            options: {
              lassPrefix: "language-",
              inlineCodeMarker: "›",
              showLineNumbers: true,
            },
          },
          {
            resolve: `gatsby-remark-images-contentful`,
            options: {
              maxWidth: 2048,
              withWebp: true,
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
      },
    },
    {
      resolve: `gatsby-plugin-offline`,
      options: {
        workboxConfig: {
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
