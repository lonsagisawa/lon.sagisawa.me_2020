import * as React from "react"
import { Link } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import styled from "@emotion/styled"
import { css } from "@emotion/react"

const PostLink = ({ post }) => {
    const { title, date } = post;
    const description = post.description.description;
    const coverImg = getImage(post.cover);
    const coverTitle = post.cover.title;
    const pageLink = `/${post.year}/${post.month}/${post.slug}`

    const PostDesc = styled.div({
        marginTop: '0.5rem',
        marginBottom: '1.5rem',
    })

    const PostTitle = styled.h2({
        fontSize: '1.5rem',
        fontWeight: 700,
        marginBottom: '0.25rem',
    })

    const PostTitleLink = css({
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
        marginBlock: '0.25rem',
    })

    const PostImage = css({
        borderRadius: '0.5rem',
    })

    const PostExcerpt = styled.p({
        marginBlock: 0,
    })

    return (
        <div>
            <GatsbyImage
                image = { coverImg }
                alt = { coverTitle }
                css = { PostImage }
                loading = 'eager'
            />
            <PostDesc>
                <PostTitle><Link to={ pageLink } css={ PostTitleLink }>{ title }</Link></PostTitle>
                <PostDate>{ date }</PostDate>
                <PostExcerpt>{ description }</PostExcerpt>
            </PostDesc>
        </div>
    )
}

export default PostLink