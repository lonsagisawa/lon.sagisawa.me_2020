const path = require("path")
const fs = require("fs")

exports.createPages = async ({ graphql, actions, reporter }) => {
    const { createPage } = actions

    const result = await graphql(
        `
        {
            allContentfulPost(sort: {fields: date, order: ASC}) {
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
                    next {
                        title
                        prefix: date(formatString: "/YYYY/MM/")
                        slug
                        cover {
                            gatsbyImageData(
                                width: 360,
                                layout: FULL_WIDTH,
                                quality: 90,
                                placeholder: NONE,
                                backgroundColor: "#434c5e",
                                aspectRatio: 2.5
                            )
                        }
                    }
                    previous {
                        title
                        prefix: date(formatString: "/YYYY/MM/")
                        slug
                        cover {
                            gatsbyImageData(
                                width: 360,
                                layout: FULL_WIDTH,
                                quality: 90,
                                placeholder: NONE,
                                backgroundColor: "#434c5e",
                                aspectRatio: 2.5
                            )
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
            context: { post: edge.node, next: edge.next, prev: edge.previous }
        })
    });
}

exports.onPostBuild = () => {
    fs.copyFile(`./vercel.json`, `./public/vercel.json`, (err) => {
        if (err) {
            throw err;
        }
    });
};