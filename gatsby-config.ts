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
    ],
}

export default config
