import { Link } from "gatsby"
import styled from "@emotion/styled"

const Background = styled.div({
    marginBottom: "1rem",
})

const Container = styled.header({
    minHeight: "12rem",
    maxWidth: "51rem",
    margin: "0 auto",
    padding: "0 1.5rem",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
})

const Title = styled.h1({
    fontSize: "3rem",
    fontWeight: 900,
    lineHeight: 0.9,
    letterSpacing: "-0.0334em",
    textShadow: "0.25rem 0.25rem #f4d059",
    "@media (prefers-color-scheme: dark)": {
        color: "#f4d059",
        textShadow: "none",
    },
})

const Header = (): JSX.Element => {
    return (
        <Background>
            <Container>
                <Title>
                    <Link to="/">
                        Lon
                        <br />
                        Sagisawa
                    </Link>
                </Title>
            </Container>
        </Background>
    )
}

export default Header
