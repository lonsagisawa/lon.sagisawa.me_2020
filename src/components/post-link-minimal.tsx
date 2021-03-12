import React from "react"
import { Link } from "gatsby"

export default function PostLinkMinimal({ post }) {
    const { title, date } = post;
    const description = post.description.description;
    const pageLink = `/${post.year}/${post.month}/${post.slug}`

    return (
            <div>
                { date } - <Link to={ pageLink }>{ title }</Link>
                <p>{ description }</p>
            </div>
    )
}