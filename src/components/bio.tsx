import * as React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faGithub } from "@fortawesome/free-brands-svg-icons"
import styled from "@emotion/styled"

const Bio = () => {
    const Footer = styled.footer({
        backgroundColor: '#3f374a',
        color: 'rgba(242, 242, 240, 0.5)',
        padding: '3rem 0',
    })

    const Container = styled.div({
        fontWeight: 500,
        padding: '0 1rem',
        margin: '0 auto',
        maxWidth: '56rem',
        '@media screen and (min-width: 480px)': {
            display: 'grid',
            gridTemplateColumns: 'repeat(2, 1fr)',
            justifyContent: 'space-between',
        },
        a: {
            color: 'inherit',
            textDecoration: 'underline',
            transition: 'all 100ms ease-out',
            ':hover': {
                color: '#f2f2f0',
            }
        },
    })

    const Left = styled.div({
        paddingBottom: '2rem',
        '@media screen and (min-width: 480px)': {
            paddingBottom: 0,
        },
    })

    const Right = styled.div({
        margin: 'auto 0',
        textAlign: 'center',
        fontSize: '2rem',
        lineHeight: 1,
        '@media screen and (min-width: 480px)': {
            textAlign: 'right',
        },
    })

    const BioName = styled.p({
        fontWeight: 900,
        fontSize: '2rem',
        lineHeight: 1,
        letterSpacing: '-0.05em',
        marginBlock: 0,
        marginBottom: '0.5rem',
    })

    const BioText = styled.p({
        fontSize: '0.75rem',
        marginBlock: 0,
    })

    return (
        <Footer>
            <Container>
                <Left>
                    <BioName>Lon<br />Sagisawa</BioName>
                    <BioText>Content All rights reserved. Code is <a href="https://github.com/lonsagisawa/lon.sagisawa.me">available</a> at 0BSD license.<br />Powered by <a href="https://www.gatsbyjs.com">Gatsby</a>. Hosted on <a href="https://vercel.com">Vercel</a>.</BioText>
                </Left>
                <Right>
                    <a href="https://github.com/lonsagisawa"><FontAwesomeIcon icon={ faGithub } /></a>
                </Right>
            </Container>
        </Footer>
    )
}

export default Bio