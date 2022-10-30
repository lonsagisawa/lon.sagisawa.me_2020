import * as React from "react"
import { Link } from "gatsby"
import styled from "@emotion/styled"

const Container = styled.header({
    margin: '0 auto',
    maxWidth: '56rem',
    padding: '0 1rem',
    minHeight: '14rem',
    position: 'relative',
    '@media screen and (min-width: 480px)': {
        minHeight: '16rem',
    },
})

const Title = styled.h1({
    display: 'block',
    position: 'absolute',
    top: '50%',
    transform: 'translateY(-50%)',
    marginBlock: 0,
})

const TitleLink = styled(Link)({
    fontSize: "3.5rem",
    lineHeight: 1,
    fontWeight: 900,
    letterSpacing: "-0.05em",
    color: "#efb864",
    textDecoration: "none",
})

const Header = () => {
    return (
        <Container>
            <Title>
                <TitleLink to="/">Lon<br/>Sagisawa</TitleLink>
            </Title>
        </Container>
    )
}

export default Header