import path from "path"
import type { GatsbyNode } from "gatsby"

export const createPages: GatsbyNode["createPages"] = async ({
    graphql,
    actions,
}) => {
    const { createPage } = actions

    actions.createSlice({
        id: "header",
        component: path.resolve("./src/components/header.tsx"),
    })
    actions.createSlice({
        id: "footer",
        component: path.resolve("./src/components/footer.tsx"),
    })

    const result = await graphql(`
        query CreatePost {
            allContentfulPost(sort: { date: DESC }) {
                edges {
                    node {
                        slug
                        id
                        year: date(formatString: "YYYY")
                        month: date(formatString: "MM")
                    }
                    next {
                        id
                    }
                    previous {
                        id
                    }
                }
            }
        }
    `)

    const { edges } = result.data.allContentfulPost

    edges.forEach((edge) => {
        if (edge.next == null) {
            createPage({
                path: `${edge.node.year}/${edge.node.month}/${edge.node.slug}`,
                component: path.resolve("./src/templates/post.tsx"),
                context: {
                    id: edge.node.id,
                    nextid: null,
                    previd: edge.previous.id,
                },
            })
        } else if (edge.previous == null) {
            createPage({
                path: `${edge.node.year}/${edge.node.month}/${edge.node.slug}`,
                component: path.resolve("./src/templates/post.tsx"),
                context: {
                    id: edge.node.id,
                    nextid: edge.next.id,
                    previd: null,
                },
            })
        } else {
            createPage({
                path: `${edge.node.year}/${edge.node.month}/${edge.node.slug}`,
                component: path.resolve("./src/templates/post.tsx"),
                context: {
                    id: edge.node.id,
                    nextid: edge.next.id,
                    previd: edge.previous.id,
                },
            })
        }
    })
}
