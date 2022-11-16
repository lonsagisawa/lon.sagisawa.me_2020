import { graphql, PageProps } from "gatsby"
import Layout from "../components/layout"

const Post = ({ data, pageContext }: PageProps): any => {
    return (
        <Layout>
            <h1>{data.post.title}</h1>
            <p>{data.post.date}</p>
        </Layout>
    )
}

export const query = graphql`
    query ($id: String!) {
        post: contentfulPost(id: { eq: $id }) {
            title
            date
        }
    }
`

export default Post
