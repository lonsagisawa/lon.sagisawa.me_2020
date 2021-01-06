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
      <Link to="/archive">→ すべての記事を見る</Link>
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
          title
          fluid(maxWidth: 750) {
            ...GatsbyContentfulFluid_withWebp
          }
          file {
            url
          }
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
