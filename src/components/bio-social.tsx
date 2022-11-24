import styled from "@emotion/styled"
import { Github, Twitter, Twitch, Mastodon } from "react-bootstrap-icons"

const Container = styled.div({
    svg: {
        marginRight: "0.75rem",
    },
})

const BioSocial = (): JSX.Element => {
    return (
        <Container>
            <a
                href="https://github.com/lonsagisawa"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
            >
                <Github size="2rem" />
            </a>
            <a
                href="https://social.vivaldi.net/@lonsagisawa"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Vivaldi Social"
            >
                <Mastodon size="2rem" />
            </a>
            <a
                href="https://twitter.com/lsgsw"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Twitter"
            >
                <Twitter size="2rem" />
            </a>
            <a
                href="https://twitch.tv/lonsagisawa"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Twitch"
            >
                <Twitch size="2rem" />
            </a>
        </Container>
    )
}

export default BioSocial
