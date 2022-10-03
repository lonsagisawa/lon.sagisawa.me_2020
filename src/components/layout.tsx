import React from "react"
import Header from "./header"
import Bio from "./bio"
import { setup } from 'twind'
import * as colors from 'twind/colors'
import "@fontsource/inter/variable.css"
import "@fontsource/jetbrains-mono"

const Layout = ({ children }) => {
    return (
        <div>
            <Header />
            <main>{children}</main>
        </div>
    )
}

setup({
    theme: {
        fontFamily: {
            sans: ['InterVariable', 'Hiragino Sans', 'BIZ UDPGothic', 'Meiryo', 'sans-serif'],
        },
        extend: {
            colors,
        },
    },
})

export default Layout