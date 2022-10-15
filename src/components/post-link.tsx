import * as React from "react"
import { Link } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { tw } from "twind"

const PostLink = ({ post }) => {
    const { title, date } = post;
    const description = post.description.description;
    const coverImg = getImage(post.cover);
    const coverTitle = post.cover.title;
    const pageLink = `/${post.year}/${post.month}/${post.slug}`

    return (
        <div>
            <GatsbyImage
                image={ coverImg }
                className={ tw`rounded` }
                imgClassName={ tw`rounded` }
                alt={ coverTitle }
            />
            <div className={tw`my-4`}>
                <h2 className={tw`text-2xl font-bold mb-1`}><Link to={ pageLink } className={tw`border(b-1 gray-500) transition hover:(text-transparent border-amber-400) bg(clip-text gradient-to-r) from-amber-400 to-orange-500`}>{ title }</Link></h2>
                <p className={tw`text(sm gray-600 dark:gray-400) font-bold mb-1`}>{ date }</p>
                <p>{ description }</p>
            </div>
        </div>
    )
}

export default PostLink