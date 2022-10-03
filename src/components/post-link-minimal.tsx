import React from "react"
import { Link } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

export default function PostLinkMinimal({ post }) {
    const { title, date } = post;
    const description = post.description.description;
    const pageLink = `/${post.year}/${post.month}/${post.slug}`
    const coverImg = getImage(post.cover);
    const coverTitle = post.cover.title;

    return (
        <div>
            <Link to={ pageLink }>
                <GatsbyImage image={ coverImg } alt={ coverTitle } className="" imgClassName="" />
                <div>
                    <p>{ title }</p>
                    <p>{ date }</p>
                    <p>{ description }</p>
                </div>
            </Link>
        </div>
    )
}