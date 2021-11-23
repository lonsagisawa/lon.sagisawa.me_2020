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
                        id
                        year: date(formatString: "YYYY")
                        month: date(formatString: "MM")
                        slug
                    }
                    next {
                        title
                        prefix: date(formatString: "/YYYY/MM/")
                        slug
                        id
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
                        id
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
            ownerNodeId: `${edge.node.id}`,
            context: {
                id: edge.node.id,
                next: edge.next,
                prev: edge.previous
            },
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