import React from "react"
import Header from "./header"
import Bio from "./bio"
import "../css/style.css"
import "@fontsource/inter/400.css"
import "@fontsource/inter/700.css"
import "@fontsource/montserrat/700.css"
import "@fontsource/fira-code"

const Layout = ({ children }) => {
    return (
        <div>
            <div className="container mx-auto px-4 max-w-4xl">
                <Header />
                <main>{children}</main>
            </div>
            <div className="bg-gray-800 text-gray-300 mt-6 py-12">
                <Bio />
            </div>
        </div>
    )
}

export default Layout