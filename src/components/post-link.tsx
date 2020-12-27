import React from "react"
import { Link } from "gatsby"

export default function PostLink({ post }) {
    const { title, date, cover } = post;
    const description = post.description.description;
    const pageLink = `/${post.year}/${post.month}/${post.slug}`

    return (
        <div className="postlist_item">
            <div>
                <img src={ cover.file.url } alt="post-cover" className="cover"></img>
            </div>
            <div>
                <h2><Link to={ pageLink }>{ title }</Link></h2>
                <p>{ description }</p>
                <p>{ date }</p>
            </div>
        </div>
    )
}