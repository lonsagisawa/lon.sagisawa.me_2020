import React from "react"
import Header from "./header"
import Bio from "./bio"

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