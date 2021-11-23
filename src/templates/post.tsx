import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import Head from "../components/helmet"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import PostNav from "../components/post-nav"

export default function Post({ data, pageContext }) {
    const post = data.post
    const body = post.body.childMarkdownRemark.html
    const coverImg = getImage(post.cover)

    return (
        <Layout>
            <Head title={ post.title + ` :: Lon Sagisawa` } description={ post.description } />
            <GatsbyImage image={ coverImg } alt={ post.cover.title } loading="eager" className="rounded-lg" imgClassName="rounded-lg" />
            <article className="mb-4 mx-auto max-w-3xl">
                <div className="my-4 sm:my-8">
                    <h1 className="mb-2">{ post.title }</h1>
                    <p className="my-0 text-sm">{ post.date }</p>
                </div>
                <div dangerouslySetInnerHTML={{ __html: body }} className="post_body" />
            </article>
            <PostNav next={ pageContext.next } prev={ pageContext.prev } />
        </Layout>
    )
}

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
                    quality: 90
                    placeholder: NONE
                    backgroundColor: "#434c5e"
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