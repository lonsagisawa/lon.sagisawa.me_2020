// eslint-disable-next-line @typescript-eslint/no-unused-vars
import * as React from "react"
import Layout from "../components/layout"
import Helmet from "../components/helmet"
import Bio from "../components/bio"
import Work from "../components/work"
import styled from "@emotion/styled"

const Headline = styled.h2({
    fontSize: "1.5rem",
    fontWeight: 700,
    display: "inline-flex",
    flexDirection: "column",
    ":after": {
        width: "50%",
        borderBottom: "0.25rem solid",
        content: "''",
    },
})

const PostListWrapper = styled.div({
    padding: "1rem 0",
})

const Index = (): any => {
    return (
        <Layout>
            <Headline>プロフィール</Headline>
            <Bio />
            <Headline>最新記事</Headline>
            <PostListWrapper>
                <ul>
                    <li>記事</li>
                    <li>記事</li>
                    <li>記事</li>
                </ul>
            </PostListWrapper>
            <Headline>制作物</Headline>
            <Work />
        </Layout>
    )
}

export const Head = (): any => <Helmet title="Lon Sagisawa" />

export default Index
