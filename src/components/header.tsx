import React from "react"
import { Link } from "gatsby"

export default function Header() {
    return (
        <header className="py-8 sm:py-20 text-center sm:text-left">
            <h1 className="
                transition text-4xl font-heading hover:underline
            ">
                <Link to="/">Lon Sagisawa</Link>
            </h1>
        </header>
    )
}