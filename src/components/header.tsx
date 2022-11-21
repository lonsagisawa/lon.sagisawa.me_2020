import { Link } from "gatsby"
import styled from "@emotion/styled"

interface HeaderProps {
    pageTitle?: string
}

const Background = styled.div({
    marginBottom: "1rem",
})

const Container = styled.header({
    minHeight: "12rem",
    margin: "0 2rem",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    "@media screen and (min-width: 769px)": {
        maxWidth: "48rem",
        margin: "0 auto",
    },
})

const Title = styled.h1({
    fontSize: "3rem",
    fontWeight: 900,
    lineHeight: 0.9,
    letterSpacing: "-0.05em",
})

const Header = ({ pageTitle }: HeaderProps): any => {
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
                <p>{pageTitle}</p>
            </Container>
        </Background>
    )
}

export default Header
