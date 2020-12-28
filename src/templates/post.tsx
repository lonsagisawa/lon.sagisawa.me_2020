import React from "react"
import Layout from "../components/layout"
import Header from "../components/header"
import Head from "../components/helmet"
import Bio from "../components/bio"
import Img from "gatsby-image"

export default function Post({ pageContext }) {
    const { title, date, cover, description } = pageContext.post;
    const body = pageContext.post.body.childMarkdownRemark.html;

    return (
        <Layout>
            <Head title={ title + ` :: Lon Sagisawa` } description={ description } />
            <Header />
            <img src={ cover.file.url } alt="post-cover" className="cover"></img>
            <div>
                <h1>{ title }</h1>
                <p>{ date }</p>
            </div>
            <div dangerouslySetInnerHTML={{ __html: body }} />
            <Bio />
        </Layout>
    )
}