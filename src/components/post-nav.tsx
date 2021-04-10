import React from "react"
import { Link } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

export default function PostNav({ next, prev }) {
    const prevCover = prev == null ? null : getImage( prev.cover )
    const nextCover = next == null ? null : getImage( next.cover )

    return (
        <nav className="flex flex-col sm:flex-row justify-center">
            { prev == null ? null :
                <div className="transition flex-1 rounded-lg bg-gray-50 sm:max-w-sm my-2 sm:mx-2 shadow hover:shadow-lg hover:bg-gray-100">
                    <Link to={ prev.prefix + prev.slug } className="block min-h-full">
                        <GatsbyImage image={ prevCover } alt={ prev.cover.title } className="rounded-t-lg" imgClassName="rounded-t-lg" />
                        <div className="p-4">
                            <p className="text-sm">前の記事</p>
                            <p>{ prev.title }</p>
                        </div>
                    </Link>
                </div>
            }
            { next == null ? null : 
                <div className="transition flex-1 rounded-lg bg-gray-50 sm:max-w-sm my-2 sm:m-2 shadow hover:shadow-lg hover:bg-gray-100">
                    <Link to={ next.prefix + next.slug } className="block min-h-full">
                        <GatsbyImage image={ nextCover } alt={ next.cover.title } className="rounded-t-lg" imgClassName="rounded-t-lg" />
                        <div className="p-4">
                            <p className="text-sm">次の記事</p>
                            <p>{ next.title }</p>
                        </div>
                    </Link>
                </div>
            }
        </nav>
    )
}