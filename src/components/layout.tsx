import styled from "@emotion/styled"
import Header from "./header"
import Footer from "./footer"
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
            <Header pageTitle={pageTitle} />
            <Container>{children}</Container>
            <Footer />
        </>
    )
}

export default Layout
