import type { GatsbyConfig } from "gatsby"

require("dotenv").config({
    path: `.env.${process.env.NODE_ENV}`,
})

const config: GatsbyConfig = {
    siteMetadata: {
        title: "Lon Sagisawa",
        siteUrl: "https://lon.sagisawa.me",
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
            },
        },
        "gatsby-plugin-offline",
    ],
}

export default config
