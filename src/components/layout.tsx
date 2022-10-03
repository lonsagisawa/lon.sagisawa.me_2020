import React from "react"
import Header from "./header"
import Bio from "./bio"
import "@fontsource/rubik/400.css"
import "@fontsource/rubik/700.css"
import "@fontsource/oxanium/800.css"
import "@fontsource/jetbrains-mono"

const Layout = ({ children }) => {
    return (
        <div>
            <div>
                <Header />
                <main>{children}</main>
            </div>
            <div>
                <Bio />
            </div>
        </div>
    )
}

export default Layout