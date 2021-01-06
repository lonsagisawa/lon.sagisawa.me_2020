import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import Head from "../components/helmet"
import Img from "gatsby-image"

export default function Post({ pageContext }) {
    const { title, date, cover, description } = pageContext.post;
    const body = pageContext.post.body.childMarkdownRemark.html;

    return (
        <Layout>
            <Head title={ title + ` :: Lon Sagisawa` } description={ description } />
            <Img key={ cover.fluid.src } alt="post-cover" fluid={ cover.fluid } className="cover" />
            <div>
                <h1>{ title }</h1>
                <p>{ date }</p>
            </div>
            <div dangerouslySetInnerHTML={{ __html: body }} />
            <hr />
            <Link to="/archive">→ 他の記事を見る</Link>
        </Layout>
    )
}