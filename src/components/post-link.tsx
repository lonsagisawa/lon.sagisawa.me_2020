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
        <div className="transition pb-4 rounded-lg sm:hover:shadow-lg sm:hover:bg-gray-50">
            <GatsbyImage
                image={ coverImg }
                className="rounded-lg my-2 sm:my-4"
                imgClassName="rounded-lg"
                alt={ coverTitle }
            />
            <div className="mx-auto max-w-3xl">
                <h2 className="font-heading text-3xl font-bold"><Link to={ pageLink } className="transition text-yellow-500 border-b border-current hover:text-gray-50 hover:bg-yellow-500">{ title }</Link></h2>
                <p className="text-sm my-1 sm:my-2">{ date }</p>
                <p className="leading-relaxed">{ description }</p>
            </div>
        </div>
    )
}