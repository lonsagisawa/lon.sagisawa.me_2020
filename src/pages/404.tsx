// eslint-disable-next-line @typescript-eslint/no-unused-vars
import * as React from "react"
import Layout from "../components/layout"
import Helmet from "../components/helmet"

const NotFound = (): any => {
    return (
        <Layout pageTitle="404 Not Found">
            <h1>404 Not Found</h1>
            <p>お探しのページは見つかりませんでした。</p>
        </Layout>
    )
}

export const Head = (): any => <Helmet title="404 Not Found | Lon Sagisawa" />

export default NotFound
