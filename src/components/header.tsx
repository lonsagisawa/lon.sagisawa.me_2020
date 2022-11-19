import { Link } from "gatsby"
import styled from "@emotion/styled"

interface HeaderProps {
    pageTitle?: string
}

const Background = styled.div({
    borderBottom: "0.1px solid #222",
    marginBottom: "1rem",
})

const Container = styled.header({
    minHeight: "10rem",
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
    fontSize: "3rem",
    fontWeight: 900,
    lineHeight: 0.9,
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
