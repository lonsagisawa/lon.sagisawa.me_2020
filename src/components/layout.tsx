import React from "react"
import Header from "./header"
import Bio from "./bio"
import { setup, tw } from 'twind'
import * as colors from 'twind/colors'
import "@fontsource/inter/variable.css"
import "@fontsource/jetbrains-mono"

const Layout = ({ children }) => {
    return (
        <div>
            <Header />
            <main className={tw`container mx-auto`}>{children}</main>
            <Bio />
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