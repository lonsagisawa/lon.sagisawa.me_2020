import BioSocial from "./bio-social"
import styled from "@emotion/styled"

const Background = styled.footer({
    backgroundColor: "#20202c",
    color: "#acb0bf",
    marginTop: "2rem",
    padding: "3rem 0",
    "@media (prefers-color-scheme: dark)": {
        borderTop: "1px solid rgba(172, 176, 191, 0.5)",
    },
})

const Container = styled.div({
    display: "grid",
    gap: "1.5rem",
    gridTemplateColumns: "none",
    maxWidth: "51rem",
    margin: "0 auto",
    padding: "0 1.5rem",
    "@media screen and (min-width: 480px)": {
        gridTemplateColumns: "repeat(2, 1fr)",
        alignContent: "space-between",
    },
    a: {
        textDecoration: "underline",
        transition: "all 100ms ease-out",
        ":hover": {
            color: "#f7f8fc",
        },
    },
})

const FooterText = styled.div({
    h2: {
        fontWeight: 900,
        fontSize: "2rem",
        letterSpacing: "-0.0334em",
        lineHeight: 0.9,
        marginBottom: "0.5rem",
    },
    p: {
        fontSize: "0.8rem",
        fontWeight: 500,
    },
})

const SocialArray = styled.div({
    textAlign: "center",
    margin: "auto 0",
    "@media screen and (min-width: 480px)": {
        textAlign: "right",
    },
})

const Footer = (): any => {
    return (
        <Background>
            <Container>
                <FooterText>
                    <h2>
                        Lon
                        <br />
                        Sagisawa
                    </h2>
                    <p>
                        Content All rights reserved.&nbsp;
                        <a
                            href="https://github.com/lonsagisawa/lon.sagisawa.me"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Source code is available.
                        </a>
                        <br />
                        Powered by Gatsby, Gatsby Cloud and Vercel.
                    </p>
                </FooterText>
                <SocialArray>
                    <BioSocial />
                </SocialArray>
            </Container>
        </Background>
    )
}

export default Footer
