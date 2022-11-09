// eslint-disable-next-line @typescript-eslint/no-unused-vars
import * as React from "react"
import { Link } from "gatsby"
import styled from "@emotion/styled"

interface HeaderProps {
    pageTitle?: string
}

const Background = styled.div``

const Container = styled.header({
    minHeight: "8rem",
    margin: "0 1rem",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    "@media screen and (min-width: 480px)": {
        maxWidth: "48rem",
        margin: "0 auto",
    },
})

const Title = styled.h1({
    fontSize: "2rem",
    fontWeight: 900,
})

const Header = ({ pageTitle }: HeaderProps): any => {
    return (
        <Background>
            <Container>
                <Title>
                    <Link to="/">Lon Sagisawa</Link>
                </Title>
                <p>{pageTitle}</p>
            </Container>
        </Background>
    )
}

export default Header
