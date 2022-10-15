import * as React from "react"
import Header from "./header"
import Bio from "./bio"
import { setup, tw } from 'twind'
import * as colors from 'twind/colors'
import "@fontsource/inter/variable.css"
import "@fontsource/jetbrains-mono"

const Layout = ({ children }) => {
    return (
        <div className={tw`text-gray-900 bg-gray-100 dark:text-gray-100 dark:bg-gray-900`}>
            <Header />
            <main className={tw`px-4 mx-auto max-w-4xl mb-8`}>{children}</main>
            <Bio />
        </div>
    )
}

setup({
    theme: {
        fontFamily: {
            sans: ['InterVariable', 'Hiragino Sans', 'BIZ UDPGothic', 'Meiryo', 'sans-serif'],
            mono: ['JetBrains Mono', 'monospace'],
        },
        extend: {
            colors,
        },
    },
})

export default Layout