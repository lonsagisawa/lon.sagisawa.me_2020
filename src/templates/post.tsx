import { graphql, PageProps } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import Layout from "../components/layout"
import PostLink from "../components/post-link"
import Helmet from "../components/helmet"
import styled from "@emotion/styled"

const CoverImg = styled(GatsbyImage)({
    boxShadow: "1rem 1rem 0px 0px #f4d059",
    border: "2px solid #f4d059",
    marginBottom: "2rem",
    marginRight: "1rem",
})

const PostBody = styled.article({
    marginBottom: "2rem",
    h1: {
        fontSize: "2rem",
        fontWeight: 700,
        lineHeight: "1.2",
    },
    h2: {
        fontSize: "1.75rem",
        fontWeight: 700,
        margin: "0.25rem 0",
        lineHeight: "1.2",
    },
    h3: {
        fontSize: "1.675rem",
        fontWeight: 700,
        margin: "0.2rem 0",
        lineHeight: "1.25",
    },
    p: {
        margin: "0.5rem 0",
    },
    strong: {
        fontWeight: 700,
    },
    a: {
        textDecoration: "underline 0.1px",
        transition: "all 100ms ease-out",
        ":hover": {
            color: "rgb(244, 208, 89)",
        },
    },
    ul: {
        marginLeft: "1rem",
        listStyle: "disc",
    },
    table: {
        minWidth: "100%",
    },
})

const PostDate = styled.p({
    fontSize: "0.85rem",
    fontWeight: 700,
})

const Post = ({ data }: PageProps<Queries.PostPageQuery>): any => {
    return (
        <Layout>
            <CoverImg
                image={data?.post?.cover?.gatsbyImageData}
                alt={data?.post?.cover?.title}
                loading="eager"
            />
            <PostBody>
                <h1>{data?.post?.title}</h1>
                <PostDate>{data?.post?.date}</PostDate>
                <div
                    dangerouslySetInnerHTML={{
                        __html: data?.post?.body?.childMarkdownRemark?.html,
                    }}
                />
            </PostBody>

            {data.prev == null ? null : (
                <PostLink
                    title={data.prev.title}
                    url={`/${data.prev.year}/${data.prev.month}/${data.prev.slug}`}
                    date="次の記事"
                />
            )}
            {data.next == null ? null : (
                <PostLink
                    title={data.next.title}
                    url={`/${data.next.year}/${data.next.month}/${data.next.slug}`}
                    date="前の記事"
                />
            )}
        </Layout>
    )
}

export const query = graphql`
    query PostPage($id: String!, $nextid: String, $previd: String) {
        post: contentfulPost(id: { eq: $id }) {
            title
            date(formatString: "YYYY年MM月DD日")
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
            slug
            year: date(formatString: "YYYY")
            month: date(formatString: "MM")
        }
        prev: contentfulPost(id: { eq: $previd }) {
            title
            slug
            year: date(formatString: "YYYY")
            month: date(formatString: "MM")
        }
    }
`

export const Head = ({ data }: PageProps<Queries.PostPageQuery>): any => (
    <Helmet
        title={data.post.title + " | Lon Sagisawa"}
        description={data.post.description.description}
    />
)

export default Post
