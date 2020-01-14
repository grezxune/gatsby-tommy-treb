import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"

export default ({ data }) => {
  const post = data.markdownRemark
  const image = require(`../images/projects/${post.frontmatter.imageName}`)

  return (
    <Layout>
      <div>
        <h1 style={{ textAlign: "center" }}>{post.frontmatter.title}</h1>
        <img src={image} alt={post.frontmatter.title} height={500} />
        <div dangerouslySetInnerHTML={{ __html: post.html }} />
      </div>
    </Layout>
  )
}

export const postQuery = graphql`
  query projectByPath($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        path
        title
        imageName
      }
    }
  }
`
