import React from "react"
import Layout from "../components/layout"
import PostLink from "../components/post-link"
import { Link, graphql } from "gatsby"
import Head from "../components/helmet"

export default function Home({ data }) {
  return (
  <Layout>
      <Head title="Lon Sagisawa" description="Private website of Lon Sagisawa" />
      {data.allContentfulPost.edges.map(edge =>
        <PostLink key={edge.node.slug} post={edge.node} />
      )}
      <Link to="/archive" className="block transition transform-gpu min-w-full rounded-lg my-4 bg-gray-50 py-4 text-center shadow hover:shadow-xl hover:scale-105">すべての記事を見る</Link>
  </Layout>
  )
}

export const query = graphql`
{
  allContentfulPost(limit: 3, sort: {fields: date, order: DESC}) {
    edges {
      node {
        title
        date(locale: "ja-JP", formatString: "YYYY年MM月DD日")
        year: date(formatString: "YYYY")
        month: date(formatString: "MM")
        cover {
          gatsbyImageData(
            layout: FULL_WIDTH,
            quality: 90,
            placeholder: NONE,
            backgroundColor: "#434c5e"
          )
          title
        }
        description {
          description
        }
        slug
      }
    }
  }
}
`
