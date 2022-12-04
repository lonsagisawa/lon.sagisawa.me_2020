import styled from "@emotion/styled"
import { Slice } from "gatsby"
import "@fontsource/inter/variable.css"
import "../lineseed/100.css"
import "../lineseed/300.css"
import "../lineseed/700.css"
import "../lineseed/900.css"
import "../prism-ctp.css"
import "../global.css"

interface LayoutProps {
    children?: React.ReactNode
}

const Container = styled.main({
    maxWidth: "51rem",
    margin: "0 auto",
    padding: "0 1.5rem",
})

const Layout = ({ children }: LayoutProps): JSX.Element => {
    return (
        <>
            <Slice alias="header" />
            <Container>{children}</Container>
            <Slice alias="footer" />
        </>
    )
}

export default Layout
