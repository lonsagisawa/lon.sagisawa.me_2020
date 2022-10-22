import * as React from "react"
import { Link } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import styled from "@emotion/styled"
import { css } from "@emotion/react"

const PostNav = ({ next, prev }) => {
    const prevCover = prev == null ? null : getImage( prev.cover )
    const nextCover = next == null ? null : getImage( next.cover )

    const NavContainer = styled.div({
        padding: '0.75rem',
        transition: 'all 100ms ease-out',
        ':hover': {
            backgroundColor: 'white',
        },
        borderStyle: 'solid',
        borderWidth: '0.5px 0 0 0',
        borderColor: 'rgba(63, 55, 74, 0.25)',
        '@media (prefers-color-scheme: dark)': {
            borderColor: 'rgba(63, 55, 74, 1.0)',
            ':hover': {
                backgroundColor: 'black',
            },
        },
        '@media screen and (min-width: 480px)': {
            display: 'grid',
            gap: '1rem',
            gridTemplateColumns: 'repeat(5, 1fr)',
        }
    })

    const NavLink = css({
        textDecoration: "none",
        color: "inherit",
    })

    const NavTitleWrapper = styled.div({
        gridColumn: 'span 4 / span 4',
        margin: 'auto 0',
    })

    const NavTitle = styled.p({
        marginBlock: 0,
    })

    const NavTitleSub = styled.p({
        fontWeight: 700,
        fontSize: '0.75rem',
        marginBlock: 0,
    })

    const NavImg = css({
        borderRadius: '0.5rem',
        gridColumn: 'span 1 / span 1',
        display: 'none',
        '@media screen and (min-width: 480px)': {
            display: 'block',
        },
    })

    const Nav = styled.nav({
        borderWidth: '0 0 0.5px 0',
        borderColor: 'rgba(63, 55, 74, 0.25)',
        borderStyle: 'solid',
        '@media (prefers-color-scheme: dark)': {
            borderColor: 'rgba(63, 55, 74, 1.0)',
        },
    })

    return (
        <Nav>
            { prev == null ? null :
                <Link to={ prev.prefix + prev.slug } css={ NavLink }>
                    <NavContainer>
                        <GatsbyImage image={ prevCover } alt={ prev.cover.title } css={ NavImg } />
                        <NavTitleWrapper>
                            <NavTitleSub>前の記事</NavTitleSub>
                            <NavTitle>{ prev.title }</NavTitle>
                        </NavTitleWrapper>
                    </NavContainer>
                </Link>
            }
            { next == null ? null : 
                <Link to={ next.prefix + next.slug } css={ NavLink }>
                    <NavContainer>
                        <GatsbyImage image={ nextCover } alt={ next.cover.title } css={ NavImg } />
                        <NavTitleWrapper>
                            <NavTitleSub>次の記事</NavTitleSub>
                            <NavTitle>{ next.title }</NavTitle>
                        </NavTitleWrapper>
                    </NavContainer>
                </Link>
            }
        </Nav>
    )
}

export default PostNav