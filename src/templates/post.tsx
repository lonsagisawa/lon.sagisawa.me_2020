import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import Helmet from "../components/helmet"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import PostNav from "../components/post-nav"
import { tw } from "twind"
import { css, apply } from "twind/css"

export default function Post({ data, pageContext }) {
    const post = data.post
    const body = post.body.childMarkdownRemark.html
    const coverImg = getImage(post.cover)

    const postStyle = css( apply`font-sans leading-relaxed`, {
        p: apply`mb-4`,
        h1: apply`text-3xl font-bold mb-1`,
        h2: apply`text-2xl font-bold mb-1`,
        h3: apply`text-xl font-bold mb-1`,
        h4: apply`text-lg font-bold mb-1`,
        ul: apply`list-disc ml-2 mb-4`,
        li: apply`ml-2`,
        ol: apply`list-decimal`,
        table: apply`w-full table-auto my-4`,
        thead: apply`border(b gray-300)`,
        td: apply`px-1`,
        tr: apply`border(b gray-200)`,
        a: apply`underline transition hover:text-transparent bg(clip-text gradient-to-r) from-amber-400 to-orange-500`,
        pre: apply`rounded p-2 sm:p-4 mb-4 overflow-auto text-sm`,
    })

    return (
        <Layout>
            <GatsbyImage image={ coverImg } alt={ post.cover.title } loading="eager" className={tw`rounded`} imgClassName={tw`rounded`} />
            <article className={tw`mb-8`}>
                <div className={tw`my-4`}>
                    <h1 className={tw`font-bold text-3xl mb-1`}>{ post.title }</h1>
                    <p className={tw`font-bold text(sm gray-600 dark:gray-400)`}>{ post.date }</p>
                </div>
                <div className={tw(postStyle)} dangerouslySetInnerHTML={{ __html: body }} />
            </article>
            <PostNav next={ pageContext.next } prev={ pageContext.prev } />
        </Layout>
    )
}

export const Head = ({ data }) => (
    <Helmet title={ data.post.title } description={ data.post.description.description } />
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