import * as React from "react"
import Header from "./header"
import Bio from "./bio"
import styled from "@emotion/styled"
import { SanitizeCSS } from "emotion-sanitize"
import "@fontsource/inter/variable.css"
import "@fontsource/jetbrains-mono"

const Wrapper = styled.div({
    fontFamily: '"InterVariable", "BIZ UDPGothic", "Hiragino Sans", "sans-serif"',
    backgroundColor: '#f2f2f0',
    color: '#3f374a',
    /* Dark mode */
    '@media (prefers-color-scheme: dark)': {
        backgroundColor: '#111',
        color: "f2f2f0",
    },
    'code, pre': {
        fontFamily: '"JetBrains Mono", "monospace"',
    },
    'h1, h2, h3, h4, h5, h6': {
        marginBlock: 0,
    }
})

const Container = styled.main({
    padding: '0 1rem',
    margin: '0 auto 2rem',
    maxWidth: '56rem',
})

const Layout = ({ children }) => {
    return (
        <Wrapper>
            <SanitizeCSS sanitize reduceMotion />
            <Header />
            <Container>{children}</Container>
            <Bio />
        </Wrapper>
    )
}

export default Layout