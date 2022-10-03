import React from "react"
import { Link } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

export default function PostNav({ next, prev }) {
    const prevCover = prev == null ? null : getImage( prev.cover )
    const nextCover = next == null ? null : getImage( next.cover )

    return (
        <nav>
            { prev == null ? null :
                <div>
                    <Link to={ prev.prefix + prev.slug }>
                        <GatsbyImage image={ prevCover } alt={ prev.cover.title } className="" imgClassName="" />
                        <div>
                            <p>前の記事</p>
                            <p>{ prev.title }</p>
                        </div>
                    </Link>
                </div>
            }
            { next == null ? null : 
                <div>
                    <Link to={ next.prefix + next.slug }>
                        <GatsbyImage image={ nextCover } alt={ next.cover.title } className="" imgClassName="" />
                        <div>
                            <p>次の記事</p>
                            <p>{ next.title }</p>
                        </div>
                    </Link>
                </div>
            }
        </nav>
    )
}