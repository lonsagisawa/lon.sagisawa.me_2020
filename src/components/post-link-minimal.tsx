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
        <div className="transition bg-gray-50 shadow rounded-lg hover:shadow-lg hover:bg-gray-100">
            <Link to={ pageLink } className="block min-h-full">
                <GatsbyImage image={ coverImg } alt={ coverTitle } className="rounded-t-lg" imgClassName="block rounded-t-lg" />
                <div className="p-4">
                    <p className="font-heading font-bold text-xl">{ title }</p>
                    <p className="text-xs mb-2">{ date }</p>
                    <p className="text-sm">{ description }</p>
                </div>
            </Link>
        </div>
    )
}