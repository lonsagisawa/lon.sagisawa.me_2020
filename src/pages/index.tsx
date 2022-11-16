import { graphql, PageProps, Link } from "gatsby"
import Layout from "../components/layout"
import Helmet from "../components/helmet"
import Bio from "../components/bio"
import Work from "../components/work"
import styled from "@emotion/styled"

const Headline = styled.h2({
    fontSize: "1.5rem",
    fontWeight: 700,
    display: "inline-flex",
    flexDirection: "column",
    ":after": {
        width: "50%",
        borderBottom: "0.25rem solid",
        content: "''",
    },
})

const PostListWrapper = styled.div({
    padding: "1rem 0",
})

const Index = ({ data }: PageProps<Queries.IndexQuery>): any => {
    return (
        <Layout>
            <Headline>プロフィール</Headline>
            <Bio />
            <Headline>最新記事</Headline>
            <PostListWrapper>
                {data.allContentfulPost.edges.map((edge) => (
                    <>
                        <Link
                            to={`/${edge.node.year}/${edge.node.month}/${edge.node.slug}`}
                        >
                            {edge.node.title}
                        </Link>
                        <p>{edge.node.date}</p>
                    </>
                ))}
            </PostListWrapper>
            <Headline>制作物</Headline>
            <Work />
        </Layout>
    )
}

export const Head = (): any => <Helmet title="Lon Sagisawa" />

export default Index

export const query = graphql`
    query Index {
        allContentfulPost(limit: 3) {
            edges {
                node {
                    date
                    slug
                    title
                    year: date(formatString: "YYYY")
                    month: date(formatString: "MM")
                }
            }
        }
    }
`
