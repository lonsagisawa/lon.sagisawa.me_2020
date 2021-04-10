import React from "react"
import Layout from "../components/layout"
import Head from "../components/helmet"
import { graphql } from "gatsby"
import PostLinkMinimal from "../components/post-link-minimal"

export default function Archive({ data }) {
    return (
    <Layout>
        <Head title="Lon Sagisawa" description="Private website of Lon Sagisawa" />
        <h1 className="text-2xl sm:text-3xl mb-2 sm:mb-4">すべての記事</h1>
        <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {data.allContentfulPost.edges.map(edge =>
            <PostLinkMinimal key={edge.node.slug} post={edge.node} />
          )}
        </div>
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
