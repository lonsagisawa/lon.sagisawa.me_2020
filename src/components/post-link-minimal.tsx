import React from "react"
import { Link } from "gatsby"

export default function PostLinkMinimal({ post }) {
    const { title, date } = post;
    const description = post.description.description;
    const pageLink = `/${post.year}/${post.month}/${post.slug}`

    return (
            <div className="my-4">
                { date } - <Link to={ pageLink } className="underline transition hover:text-yellow-500">{ title }</Link>
                <p className="my-1">{ description }</p>
            </div>
    )
}