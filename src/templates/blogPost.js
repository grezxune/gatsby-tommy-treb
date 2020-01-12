import React from "react"
import { Link, graphql } from "gatsby"

export default ({ data }) => {
  const post = data.markdownRemark

  return (
    <div>
      <Link to={"/blog"}>Go Back</Link>
      <hr />
      <h1>{post.frontmatter.title}</h1>
      <h4>Posted by {post.frontmatter.author}</h4>
      <div dangerouslySetInnerHTML={{ __html: post.html }} />
    </div>
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
      }
    }
  }
`
