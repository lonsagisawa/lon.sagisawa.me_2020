import * as React from "react"
import styled from "@emotion/styled"
import Header from "./header"
import Footer from "./footer"
import "../global.css"

interface LayoutProps {
    pageTitle?: string
    children: any
}

const Container = styled.main({
    margin: "0 1rem",
    "@media screen and (min-width: 480px)": {
        maxWidth: "48rem",
        margin: "0 auto",
    },
})

const Layout = ({ pageTitle, children }: LayoutProps): any => {
    return (
        <React.Fragment>
            <Header pageTitle={pageTitle} />
            <Container>{children}</Container>
            <Footer />
        </React.Fragment>
    )
}

export default Layout
