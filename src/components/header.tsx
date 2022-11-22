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
    letterSpacing: "-0.05em",
})

const Header = (): any => {
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
