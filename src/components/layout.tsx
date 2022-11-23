import styled from "@emotion/styled"
import { Slice } from "gatsby"
import "@fontsource/inter/variable.css"
import "../prism-ctp.css"
import "../global.css"

interface LayoutProps {
    pageTitle?: string
    children: any
}

const Container = styled.main({
    maxWidth: "51rem",
    margin: "0 auto",
    padding: "0 1.5rem",
})

const Layout = ({ pageTitle, children }: LayoutProps): any => {
    return (
        <>
            <Slice alias="header" />
            <Container>{children}</Container>
            <Slice alias="footer" />
        </>
    )
}

export default Layout
