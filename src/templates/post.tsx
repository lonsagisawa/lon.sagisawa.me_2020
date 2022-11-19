import { graphql, PageProps } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import Layout from "../components/layout"
import Helmet from "../components/helmet"

const Post = ({ data }: PageProps): any => {
    return (
        <Layout>
            <GatsbyImage
                image={data.post.cover.gatsbyImageData}
                alt={data.post.cover.title}
                loading="eager"
            />
            <h1>{data.post.title}</h1>
            <p>{data.post.date}</p>
            <div
                dangerouslySetInnerHTML={{
                    __html: data.post.body.childMarkdownRemark.html,
                }}
            />
            <p>{data.next.title}</p>
            <p>{data.prev.title}</p>
        </Layout>
    )
}

export const query = graphql`
    query ($id: String!, $nextid: String, $previd: String) {
        post: contentfulPost(id: { eq: $id }) {
            title
            date
            description {
                description
            }
            cover {
                gatsbyImageData(width: 768, aspectRatio: 2.5)
                title
            }
            body {
                childMarkdownRemark {
                    html
                }
            }
        }
        next: contentfulPost(id: { eq: $nextid }) {
            title
        }
        prev: contentfulPost(id: { eq: $previd }) {
            title
        }
    }
`

export const Head = ({ data }): any => (
    <Helmet
        title={data.post.title + " | Lon Sagisawa"}
        description={data.post.description.description}
    />
)

export default Post
