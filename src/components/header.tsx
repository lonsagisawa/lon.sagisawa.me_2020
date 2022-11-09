// eslint-disable-next-line @typescript-eslint/no-unused-vars
import * as React from 'react'
import { Link, useStaticQuery, graphql } from 'gatsby'
import styled from 'styled-components'

interface HeaderProps {
    pageTitle?: string
}

const Background = styled.div`
    background-color: #000;
    color: #fff;
`

const Container = styled.header`
    max-width: 40rem;
    min-height: 8rem;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
`

const Title = styled.h1`
    font-size: 2rem;
`

const Header = ({ pageTitle }: HeaderProps): any => {
    /* Pulls site title from siteMetadata */
    const data = useStaticQuery(graphql`
        query {
            site {
                siteMetadata {
                    title
                }
            }
        }
    `)

    return (
        <Background>
            <Container>
                <Title>
                    <Link to="/">{data.site.siteMetadata.title}</Link>
                </Title>
                <p>{pageTitle}</p>
            </Container>
        </Background>
    )
}

export default Header
