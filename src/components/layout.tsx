import * as React from 'react'
import styled from 'styled-components'
import Header from '../components/header'
import Footer from '../components/footer'

interface LayoutProps {
    pageTitle: string
    children: any
}

const Container = styled.main`
    max-width: 48rem;
    margin: 0 auto;
`

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
