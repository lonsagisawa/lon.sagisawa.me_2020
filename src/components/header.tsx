import * as React from "react"
import { Link } from "gatsby"
import styled from "@emotion/styled"
import { css } from "@emotion/react"

const Container = styled.header({
    margin: '0 auto',
    maxWidth: '56rem',
    padding: '2.5rem 1rem',
    '@media screen and (min-width: 480px)': {
        padding: '5rem 1rem',
    },
})

const Title = css({
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
            <h1>
                <Link to="/" css={ Title }>Lon<br/>Sagisawa</Link>
            </h1>
        </Container>
    )
}

export default Header