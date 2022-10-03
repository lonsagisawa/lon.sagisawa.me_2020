import React from "react"
import { Link } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

export default function PostLink({ post }) {
    const { title, date } = post;
    const description = post.description.description;
    const coverImg = getImage(post.cover);
    const coverTitle = post.cover.title;
    const pageLink = `/${post.year}/${post.month}/${post.slug}`

    return (
        <div>
            <GatsbyImage
                image={ coverImg }
                className=""
                imgClassName=""
                alt={ coverTitle }
            />
            <div>
                <h2><Link to={ pageLink }>{ title }</Link></h2>
                <p>{ date }</p>
                <p>{ description }</p>
            </div>
        </div>
    )
}