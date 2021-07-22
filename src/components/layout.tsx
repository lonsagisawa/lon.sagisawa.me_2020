import React from "react"
import Header from "./header"
import Bio from "./bio"
import "../css/style.css"
import "@fontsource/rubik/400.css"
import "@fontsource/rubik/700.css"
import "@fontsource/noto-sans-jp/400.css"
import "@fontsource/noto-sans-jp/700.css"
import "@fontsource/oxanium/800.css"
import "@fontsource/jetbrains-mono"

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