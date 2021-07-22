import React from "react"
import { Link } from "gatsby"

export default function Header() {
    return (
        <header className="py-8 sm:py-20 text-center sm:text-left">
            <h1 className="text-4xl logo">
                <Link to="/" className="transition border-b border-transparent hover:border-current">Lon Sagisawa</Link>
            </h1>
        </header>
    )
}