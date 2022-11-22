import { Link } from "gatsby"
import styled from "@emotion/styled"

interface PostLinkProps {
    title: string
    url: string
    date: string
    description: string
}

const WrapperLink = styled(Link)({
    display: "block",
    borderWidth: "0.01px 0",
    borderColor: "#ccc",
    borderStyle: "solid",
    transition: "all 100ms ease-out",
    ":hover": {
        backgroundColor: "#f0f0f0",
    },
    "@media (prefers-color-scheme: dark)": {
        ":hover": {
            backgroundColor: "#000",
        },
    },
})

const Container = styled.div({
    margin: "0.5rem 0",
})

const Date = styled.p({
    fontSize: "0.8rem",
})

const Title = styled.span({
    fontWeight: 700,
})

const Description = styled.p({
    fontSize: "0.9rem",
})

const PostLink = ({ title, url, date, description }: PostLinkProps): any => {
    return (
        <WrapperLink to={url}>
            <Container>
                <Date>{date}</Date>
                <Title>{title}</Title>
                <Description>{description}</Description>
            </Container>
        </WrapperLink>
    )
}

export default PostLink
