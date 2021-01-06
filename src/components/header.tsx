import React from "react"
import { StaticQuery, graphql, Link } from "gatsby"
import Img from "gatsby-image"

export default function Header() {
    return (
        <header>
            <h1 className="title"><Link to="/">Lon Sagisawa</Link></h1>
        </header>
    )
}