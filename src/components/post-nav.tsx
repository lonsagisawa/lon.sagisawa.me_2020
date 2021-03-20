import React from "react"
import { Link } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

export default function PostNav({ next, prev }) {
    const prevCover = prev == null ? null : getImage( prev.cover )
    const nextCover = next == null ? null : getImage( next.cover )

    return (
        <nav className="post_nav">
            { prev == null ? null :
                <div className="post_nav_item">
                    <Link to={ prev.prefix + prev.slug }>
                        <GatsbyImage image={ prevCover } alt={ prev.cover.title } imgClassName="post_nav_cover" />
                        <div className="post_nav_body">
                            <p className="post_nav_side_prev">前の記事</p>
                            <p className="post_nav_title">{ prev.title }</p>
                        </div>
                    </Link>
                </div>
            }
            { next == null ? null : 
                <div className="post_nav_item">
                    <Link to={ next.prefix + next.slug }>
                        <GatsbyImage image={ nextCover } alt={ next.cover.title } imgClassName="post_nav_cover" />
                        <div className="post_nav_body">
                            <p className="post_nav_side_next">次の記事</p>
                            <p className="post_nav_title">{ next.title }</p>
                        </div>
                    </Link>
                </div>
            }
        </nav>
    )
}