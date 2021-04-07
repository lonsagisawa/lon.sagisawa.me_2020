import React from "react"
import Layout from "../components/layout"
import Head from "../components/helmet"
import { graphql } from "gatsby"
import PostLinkMinimal from "../components/post-link-minimal"

export default function Archive({ data }) {
    return (
    <Layout>
        <Head title="Lon Sagisawa" description="Private website of Lon Sagisawa" />
        <h1 className="text-3xl">すべての記事</h1>
          {data.allContentfulPost.edges.map(edge =>
            <PostLinkMinimal key={edge.node.slug} post={edge.node} />
          )}
        
    </Layout>
    )
}

export const query = graphql`
{
  allContentfulPost(sort: {fields: date, order: DESC}) {
    edges {
      node {
        title
        date(locale: "ja-JP", formatString: "YYYY年MM月DD日")
        year: date(formatString: "YYYY")
        month: date(formatString: "MM")
        cover {
          title
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
