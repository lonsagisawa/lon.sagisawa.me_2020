import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import Header from "../components/header"
import Head from "../components/helmet"

export default function NotFound() {
  return (
    <Layout>
        <Head title="404 Not Found" description="ページが見つかりません" />
        <Header />
        <h1>404 Not Found</h1>
        <Link to="/">トップページにもどる</Link>
    </Layout>
  )
}