import Layout from "../components/layout"
import Helmet from "../components/helmet"
import styled from "@emotion/styled"

const Title = styled.h1({
    fontSize: "2rem",
    fontWeight: 900,
})

const NotFound = (): any => {
    return (
        <Layout pageTitle="404 Not Found">
            <Title>404 Not Found</Title>
            <p>お探しのページは見つかりませんでした。</p>
        </Layout>
    )
}

export const Head = (): any => <Helmet title="404 Not Found | Lon Sagisawa" />

export default NotFound
