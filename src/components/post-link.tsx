import { Link } from "gatsby"
import styled from "@emotion/styled"

interface PostLinkProps {
    title?: string
    url: string
    date?: string
    description?: string
}

const WrapperLink = styled(Link)({
    display: "block",
    borderWidth: "0.01px 0",
    borderColor: "#8d8d99",
    borderStyle: "solid",
    transition: "all 100ms ease-out",
    ":hover": {
        backgroundColor: "#e6e9f2",
    },
    "@media (prefers-color-scheme: dark)": {
        borderColor: "rgba(172, 176, 191, 0.5)",
        ":hover": {
            backgroundColor: "#2d2d3d",
        },
    },
})

const Container = styled.div({
    margin: "0.5rem",
})

const Date = styled.p({
    fontSize: "0.8rem",
})

const Title = styled.span({
    fontWeight: 700,
    fontSize: "1.1rem",
})

const Description = styled.p({
    fontSize: "0.9rem",
})

const PostLink = ({
    title,
    url,
    date,
    description,
}: PostLinkProps): JSX.Element => {
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
