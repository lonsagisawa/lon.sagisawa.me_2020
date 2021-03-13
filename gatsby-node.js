const path = require("path")
exports.createPages = async ({ graphql, actions, reporter }) => {
    const { createPage } = actions

    const result = await graphql(
        `
        {
            allContentfulPost {
                edges {
                    node {
                        title
                        date(locale: "ja-JP", formatString: "YYYY年MM月DD日")
                        year: date(formatString: "YYYY")
                        month: date(formatString: "MM")
                        cover {
                            gatsbyImageData(
                                layout: FULL_WIDTH,
                                quality: 90,
                                placeholder: NONE,
                                backgroundColor: "#434c5e"
                            )
                            title
                        }
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
        `
    )

    if ( result.errors ) {
        reporter.panicOnBuild(`Error while running GraphQL query.`)
        return
    }

    const { edges } = result.data.allContentfulPost

    edges.forEach(edge => {
        createPage({
            // permalink
            path: `/${edge.node.year}/${edge.node.month}/${edge.node.slug}`,
            component: path.resolve("./src/templates/post.tsx"),
            context: { post: edge.node }
        })
    });
}