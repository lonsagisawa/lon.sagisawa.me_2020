import React from "react"
import { Link } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

export default function PostNav({ next, prev }) {
    const prevCover = prev == null ? null : getImage( prev.cover )
    const nextCover = next == null ? null : getImage( next.cover )

    return (
        <nav className="flex flex-col sm:flex-row">
            { prev == null ? null :
                <div className="transition transform-gpu hover:scale-105 flex-1 rounded-lg bg-gray-50 m-3 shadow hover:shadow-xl">
                    <Link to={ prev.prefix + prev.slug }>
                        <GatsbyImage image={ prevCover } alt={ prev.cover.title } className="rounded-t-lg" imgClassName="rounded-t-lg" />
                        <div className="p-4">
                            <p className="text-sm">前の記事</p>
                            <p>{ prev.title }</p>
                        </div>
                    </Link>
                </div>
            }
            { next == null ? null : 
                <div className="transition transform-gpu flex-1 rounded-lg bg-gray-50 m-3 shadow hover:shadow-xl hover:scale-105">
                    <Link to={ next.prefix + next.slug }>
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