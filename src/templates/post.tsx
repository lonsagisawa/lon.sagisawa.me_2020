import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import Helmet from "../components/helmet"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import PostNav from "../components/post-nav"
import styled from "@emotion/styled"
import { css } from "@emotion/react"

export default function Post({ data, pageContext }) {
    const post = data.post
    const body = post.body.childMarkdownRemark.html
    const coverImg = getImage(post.cover)

    const Article = styled.article({
        marginBottom: "2rem",
    })

    const PostHeader = styled.div({
        margin: "1rem 0",
        fontWeight: 700,
    })
    
    const PostTitle = styled.h1({
        fontSize: "1.75rem",
        marginBottom: "0.25rem",
    })

    const PostDate = styled.p({
        marginBlock: 0,
        fontSize: "0.85rem",
        opacity: 0.75,
    })

    const PostText = styled.div({
        lineHeight: "1.75",
        p: {
            marginBlockStart: 0,
            marginBlockEnd: '0.5rem',
        },
        "h1, h2, h3, h4": {
            fontWeight: 700,
            marginBottom: "0.25rem",
        },
        h1: { fontSize: "1.75rem" },
        h2: { fontSize: "1.5rem" },
        h3: { fontSize: "1.25rem" },
        h4: { fontSize: "1.1rem" },
        ul: {
            listStyleType: "disc",
            marginBlockStart: 0,
        },
        ol: { listStyleType: "decimal" },
        table: {
            width: "100%",
            tableLayout: "auto",
            margin: "1rem 0",
        },
        td: { padding: "0.2rem" },
        tr: {
            borderStyle: 'solid',
            borderWidth: "0 0 0.5px 0",
            borderColor: "rgba(63, 55, 74, 0.5)", 
            "@media (prefers-color-scheme: dark)": {
                borderColor: "rgba(242, 242, 240, 0.5)",
            },
        },
        a: {
            textDecoration: "underline",
            transition: "all 100ms ease-out",
            color: "inherit",
            ":hover": {
                color: "#80a3b0",
            },
        },
        pre: {
            borderRadius: "0.5rem",
            padding: "0.5rem",
            marginBottom: "1rem",
            overflow: "auto",
            fontSize: "0.8rem",
        },
        ".shiki-unknown": {
            backgroundColor: "#263238",
            color: "#eeffff",
        },
        '.gatsby-resp-image-wrapper': {
            marginTop: '1rem',
            marginBottom: '1rem',
        }
    })

    const rounded = css({
        borderRadius: "0.5rem",
    })

    return (
        <Layout>
            <Article>
                <GatsbyImage image={ coverImg } alt={ post.cover.title } loading="eager" css={ rounded } />
                <PostHeader>
                    <PostTitle>{ post.title }</PostTitle>
                    <PostDate>{ post.date }</PostDate>
                </PostHeader>
                <PostText dangerouslySetInnerHTML={{ __html: body }} />
            </Article>
            <PostNav next={ pageContext.next } prev={ pageContext.prev } />
        </Layout>
    )
}

export const Head = ({ data }) => (
    <Helmet title={ data.post.title + " | Lon Sagisawa" } description={ data.post.description.description } />
)

export const query = graphql`
    query ($id: String!){
        post: contentfulPost(id: {eq: $id}) {
            title
            date(locale: "ja-JP", formatString: "YYYY年MM月DD日")
            year: date(formatString: "YYYY")
            month: date(formatString: "MM")
            cover {
                gatsbyImageData(
                    layout: FULL_WIDTH
                    aspectRatio: 2.5
                    quality: 90
                    placeholder: NONE
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
    }
    `