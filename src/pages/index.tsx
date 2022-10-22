import * as React from "react"
import { graphql, PageProps, Link } from "gatsby"
import Layout from "../components/layout"
import PostLink from "../components/post-link"
import Helmet from "../components/helmet"
import { css } from "@emotion/react"

const Home = ({ data }: PageProps) => {
    const ArchiveButton = css({
        display: "block",
        color: "#efb864",
        fontSize: "1.25rem",
        textAlign: "center",
        fontWeight: 700,
        borderStyle: "solid",
        borderWidth: "2px",
        borderRadius: "0.5rem",
        borderColor: "#efb864",
        padding: "0.5rem",
        margin: "0 0.5rem",
        transition: "all 100ms ease-out",
        ":hover": {
            color: "#f2f2f0 !important",
            backgroundColor: "#efb864",
        },
        textDecoration: "none",
    })

    return (
        <Layout>
            { data.allContentfulPost.edges.map(edge =>
                <PostLink key={edge.node.slug} post={edge.node} />
            ) }
            <Link to="/archive" css={ ArchiveButton }>すべての記事を見る</Link>
        </Layout>
    )
}

export default Home

export const Head = () => (
    <Helmet />
)

export const query = graphql`
    query Home {
        allContentfulPost(limit: 3, sort: {fields: date, order: DESC}) {
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
            }
        }
        }
    }
`
