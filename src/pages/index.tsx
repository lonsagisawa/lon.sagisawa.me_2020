import { graphql, PageProps, Link } from "gatsby"
import Layout from "../components/layout"
import Helmet from "../components/helmet"
import Bio from "../components/bio"
import Work from "../components/work"
import PostLink from "../components/post-link"
import styled from "@emotion/styled"

const Headline = styled.h2({
    fontSize: "1.5rem",
    fontWeight: 700,
    margin: "1rem 0",
    display: "inline-flex",
    flexDirection: "column",
    ":after": {
        width: "50%",
        borderBottom: "0.25rem solid",
        content: "''",
    },
})

const Index = ({ data }: PageProps<Queries.IndexQuery>): any => {
    return (
        <Layout>
            <Headline>プロフィール</Headline>
            <Bio />
            <Headline>最新記事</Headline>
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
