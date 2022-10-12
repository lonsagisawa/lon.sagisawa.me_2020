import React from "react"
import { Link } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { tw } from "twind"

export default function PostLinkMinimal({ post }) {
    const { title, date } = post;
    const description = post.description.description;
    const pageLink = `/${post.year}/${post.month}/${post.slug}`
    const coverImg = getImage(post.cover);
    const coverTitle = post.cover.title;

    return (
        <div className={tw`grid grid(cols-1 md:cols-5) gap-4 my-4`}>
            <GatsbyImage image={ coverImg } alt={ coverTitle } className={tw`rounded hidden md:block md:col-span-2`} imgClassName="" />
            <div className={ tw`md:col-span-3` }>
                <Link to={ pageLink } className={ tw`text-xl font-bold border(b-1 gray-500) transition hover:(text-transparent border-amber-400) bg(clip-text gradient-to-r) from-amber-400 to-orange-500` }>{ title }</Link>
                <p className={ tw`text-xs sm:font-bold my-1 opacity-70` }>{ date }</p>
                <p className={ tw`text-sm hidden md:inline` }>{ description }</p>
            </div>
        </div>
    )
}