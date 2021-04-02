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
            <Header />
            <main>{children}</main>
            <Bio />
        </div>
    )
}

export default Layout