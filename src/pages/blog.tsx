import Layout from "../components/layout"
import PostLink from "../components/post-link"
import { graphql, PageProps } from "gatsby"

const Blog = ({ data }: PageProps<Queries.BlogQuery>): any => {
    return (
        <Layout pageTitle="すべてのブログ記事">
            {data.allContentfulPost.edges.map((edge) => (
                <>
                    <PostLink
                        title={edge.node.title}
                        url={`/${edge.node.year}/${edge.node.month}/${edge.node.slug}`}
                        description={edge.node.description.description}
                        date={edge.node.date}
                    />
                </>
            ))}
        </Layout>
    )
}

export default Blog

export const query = graphql`
    query Blog {
        allContentfulPost {
            edges {
                node {
                    date(formatString: "YYYY年MM月DD日")
                    slug
                    title
                    year: date(formatString: "YYYY")
                    month: date(formatString: "MM")
                    description {
                        description
                    }
                }
            }
        }
    }
`
