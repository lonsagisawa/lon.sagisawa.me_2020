import * as React from "react"
import { Link } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import styled from "@emotion/styled"
import { css } from "@emotion/react"

const PostLinkMinimal = ({ post }) => {
    const { title, date } = post;
    const description = post.description.description;
    const pageLink = `/${post.year}/${post.month}/${post.slug}`
    const coverImg = getImage(post.cover);
    const coverTitle = post.cover.title;

    const Container = styled.div({
        display: 'grid',
        gridTemplateColumns: 'repeat(1, 1fr)',
        '@media screen and (min-width: 768px)': {
            gridTemplateColumns: 'repeat(5, 1fr)',
        },
        gap: '1rem',
        margin: '1rem 0',
    })

    const CoverImg = css({
        borderRadius: '0.5rem',
        display: 'none',
        '@media screen and (min-width: 768px)': {
            display: 'block',
            gridColumn: 'span 2 / span 2',
        }
    })

    const PostInfo = styled.div({
        '@media screen and (min-width: 768px)': {
            gridColumn: 'span 3 / span 3',
        }
    })

    const PostDesc = styled.p({
        fontSize: '0.85rem',
        display: 'none',
        '@media screen and (min-width: 768px)': {
            display: 'inline',
        }
    })

    const PostLink = css({
        fontSize: '1.25rem',
        fontWeight: 700,
        textDecoration: 'underline',
        color: 'inherit',
        ':hover': {
            color: '#80a3b0',
            transition: 'all 100ms ease-out',
        }
    })

    const PostDate = styled.p({
        fontSize: '0.85rem',
        fontWeight: 700,
        opacity: 0.75,
        margin: '0.1rem 0',
    })

    return (
        <Container>
            <GatsbyImage image={ coverImg } alt={ coverTitle } css={ CoverImg } />
            <PostInfo>
                <Link to={ pageLink } css={ PostLink } >{ title }</Link>
                <PostDate>{ date }</PostDate>
                <PostDesc>{ description }</PostDesc>
            </PostInfo>
        </Container>
    )
}

export default PostLinkMinimal