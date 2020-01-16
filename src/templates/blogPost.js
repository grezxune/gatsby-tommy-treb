import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import PostHeader from "../components/postHeader"
import PostBody from "../components/postBody"

export default ({ data }) => {
  const post = data.markdownRemark

  return (
    <Layout capWidth={true} primaryContainerBackground={true}>
      <SEO title={post.frontmatter.title} />
      <div>
        <PostHeader
          title={post.frontmatter.title}
          subtitle={post.frontmatter.date}
          tags={post.frontmatter.tags}
        />
        <PostBody html={{ __html: post.html }} />
      </div>
    </Layout>
  )
}

export const postQuery = graphql`
  query blogPostByPath($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        path
        title
        author
        date
        tags
      }
    }
  }
`
