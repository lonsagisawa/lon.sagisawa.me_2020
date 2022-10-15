import * as React from "react"
import { Link } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { tw } from "twind"

const PostNav = ({ next, prev }) => {
    const prevCover = prev == null ? null : getImage( prev.cover )
    const nextCover = next == null ? null : getImage( next.cover )

    return (
        <nav>
            { prev == null ? null :
                    <Link to={ prev.prefix + prev.slug }>
                        <div className={tw`sm:(grid grid-cols-5 gap-4) p-4 border(y-1 gray-200 dark:gray-700) transition hover:(bg-white dark:bg-black)`}>
                            <GatsbyImage image={ prevCover } alt={ prev.cover.title } className={tw`rounded col-span-1 hidden sm:block`} imgClassName={tw`rounded`} />
                            <div className={tw`col-span-4`}>
                                <p className={tw`text(sm gray-600 dark:gray-400) font-bold`}>前の記事</p>
                                <p>{ prev.title }</p>
                            </div>
                        </div>
                    </Link>
            }
            { next == null ? null : 
                    <Link to={ next.prefix + next.slug }>
                        <div className={tw`sm:(grid grid-cols-5 gap-4) p-4 border(y-1 gray-200 dark:gray-700) transition hover:(bg-white dark:bg-black)`}>
                            <GatsbyImage image={ nextCover } alt={ next.cover.title } className={tw`rounded col-span-1 hidden sm:block`} imgClassName={tw`rounded`} />
                            <div className={tw`col-span-4`}>
                                <p className={tw`text(sm gray-600 dark:gray-400) font-bold`}>次の記事</p>
                                <p>{ next.title }</p>
                            </div>
                        </div>
                    </Link>
            }
        </nav>
    )
}

export default PostNav