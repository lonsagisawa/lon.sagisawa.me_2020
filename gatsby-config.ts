import type { GatsbyConfig } from "gatsby"

require("dotenv").config({
    path: `.env.${process.env.NODE_ENV}`,
})

const config: GatsbyConfig = {
    siteMetadata: {
        title: "Lon Sagisawa",
        description: "A personal portfolio and blog of Lon Sagisawa.",
        siteUrl: "https://lon.sagisawa.me/",
    },
    jsxRuntime: "automatic",
    // More easily incorporate content into your pages through automatic TypeScript type generation and better GraphQL IntelliSense.
    // If you use VSCode you can also use the GraphQL plugin
    // Learn more at: https://gatsby.dev/graphql-typegen
    graphqlTypegen: true,
    plugins: [
        "gatsby-plugin-emotion",
        "gatsby-plugin-image",
        "gatsby-plugin-sharp",
        "gatsby-transformer-sharp",
        {
            resolve: "gatsby-source-contentful",
            options: {
                spaceId: process.env.CONTENTFUL_SPACE_ID,
                accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
                host: process.env.CONTENTFUL_HOST,
            },
        },
        {
            resolve: "gatsby-transformer-remark",
            options: {
                gfm: true,
                plugins: [
                    "gatsby-remark-prismjs",
                    {
                        resolve: "gatsby-remark-images-contentful",
                        options: {
                            maxWidth: 768,
                            withWebp: true,
                            backgroundColor: "#797a80",
                        },
                    },
                ],
            },
        },
        {
            resolve: "gatsby-plugin-feed",
            options: {
                query: `
                    {
                        site {
                            siteMetadata {
                                title
                                description
                                siteUrl
                                site_url: siteUrl
                            }
                        }
                    }
                `,
                feeds: [
                    {
                        serialize: ({
                            query: { site, allContentfulPost },
                        }): any => {
                            return allContentfulPost.edges.map((edge): any => {
                                return Object.assign({}, edge.node, {
                                    description:
                                        edge.node.description.description,
                                    date: edge.node.date,
                                    url:
                                        site.siteMetadata.siteUrl +
                                        "/" +
                                        edge.node.year +
                                        "/" +
                                        edge.node.month +
                                        "/" +
                                        edge.node.slug,
                                    guid:
                                        site.siteMetadata.siteUrl +
                                        "/" +
                                        edge.node.year +
                                        "/" +
                                        edge.node.month +
                                        "/" +
                                        edge.node.slug,
                                    custom_elements: [
                                        {
                                            "content.encoded":
                                                edge.node.body
                                                    .childMarkdownRemark.html,
                                        },
                                    ],
                                })
                            })
                        },
                        query: `
                        {
                            allContentfulPost(sort: {date: DESC}) {
                              edges {
                                node {
                                  description {
                                    description
                                  }
                                  date
                                  year: date(formatString: "YYYY")
                                  month: date(formatString: "MM")
                                  title
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
                        title: "Lon Sagisawa",
                    },
                ],
            },
        },
        {
            resolve: "gatsby-plugin-manifest",
            options: {
                name: "Lon Sagisawa",
                short_name: "LS",
                start_url: "/",
                lang: "ja",
                background_color: "#20202c",
                theme_color: "#f4d059",
                display: "minimal-ui",
                icon: "src/images/logo.png",
                icon_options: {
                    purpose: "any maskable",
                },
                cache_busting_mode: "none",
            },
        },
        {
            resolve: "gatsby-plugin-offline",
            options: {
                workboxConfig: {
                    globPatterns: ["**/icons*"],
                    runtimeCaching: [
                        {
                            /* Contentful fix */
                            urlPattern: /^https?:.*\/page-data\/.*\.json/,
                            handler: `NetworkFirst`,
                        },
                    ],
                },
            },
        },
    ],
}

export default config
