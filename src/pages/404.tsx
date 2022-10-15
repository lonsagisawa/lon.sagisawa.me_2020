import * as React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import Helmet from "../components/helmet"

const NotFound = () => {
  return (
    <Layout>
        <h1>404 Not Found</h1>
        <Link to="/">トップページにもどる</Link>
    </Layout>
  )
}

export default NotFound

export const Head = () => (
  <Helmet title="404 Not Found" description="ページが見つかりません" />
)