import React from "react"
import Layout from "../components/layout"
import Head from "../components/helmet"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import PostNav from "../components/post-nav"

export default function Post({ pageContext }) {
    const { title, date, description } = pageContext.post;
    const coverImg = getImage(pageContext.post.cover);
    const coverTitle = pageContext.post.cover.title;
    const body = pageContext.post.body.childMarkdownRemark.html;

    const next = pageContext.next;
    const prev = pageContext.prev;

    return (
        <Layout>
            <Head title={ title + ` :: Lon Sagisawa` } description={ description } />
            <GatsbyImage image={ coverImg } alt={ coverTitle } className="rounded-lg" />
            <article className="mb-4">
                <div className="my-4">
                    <h1 className="font-bold text-4xl font-heading mb-2">{ title }</h1>
                    <p className="text-sm">{ date }</p>
                </div>
                <div dangerouslySetInnerHTML={{ __html: body }} className="post_body" />
            </article>
            <PostNav next={ next } prev={ prev } />
        </Layout>
    )
}