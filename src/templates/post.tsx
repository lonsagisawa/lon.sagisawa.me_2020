import React from "react"
import { Link } from "gatsby"
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
            <GatsbyImage image={ coverImg } alt={ coverTitle } className="cover" />
            <article>
                <div>
                    <h1>{ title }</h1>
                    <p>{ date }</p>
                </div>
                <div dangerouslySetInnerHTML={{ __html: body }} />
            </article>
            <hr />

            <PostNav next={ next } prev={ prev } />
        </Layout>
    )
}