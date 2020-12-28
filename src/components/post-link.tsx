import React from "react"
import { Link } from "gatsby"
import Img from "gatsby-image"

export default function PostLink({ post }) {
    const { title, date, cover } = post;
    const description = post.description.description;
    const pageLink = `/${post.year}/${post.month}/${post.slug}`

    return (
        <div className="postlist_item">
            <Img fluid={ cover.fluid } key={ cover.fluid.src } alt={ cover.fluid.title } className="cover"></Img>
            <h2><Link to={ pageLink }>{ title }</Link></h2>
            <p>{ description }</p>
            <p>{ date }</p>
        </div>
    )
}