import Layout from "../components/layout"
import Helmet from "../components/helmet"
import styled from "@emotion/styled"

const Title = styled.h1({
    fontSize: "2rem",
    fontWeight: 900,
})

const NotFound = (): JSX.Element => {
    return (
        <Layout>
            <Title>404 Not Found</Title>
            <p>お探しのページは見つかりませんでした。</p>
        </Layout>
    )
}

export const Head = (): JSX.Element => (
    <Helmet title="404 Not Found | Lon Sagisawa" />
)

export default NotFound
