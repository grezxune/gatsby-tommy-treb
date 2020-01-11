import React from "react"
import { graphql, Link } from "gatsby"

const BlogPage = ({ data }) => {
  return (
    <div>
      <h1>Latest Posts</h1>
      {data.allMarkdownRemark.edges.map(({ node }) => (
        <div key={node.id}>
          <h3>{node.frontmatter.title}</h3>
          <small>
            Posted by {node.frontmatter.author} on {node.frontmatter.date}
          </small>
          <Link to={node.frontmatter.path}>Read More</Link>
          <hr />
        </div>
      ))}
    </div>
  )
}

export const pageQuery = graphql`
  query blogIndexQuery {
    allMarkdownRemark {
      edges {
        node {
          id
          frontmatter {
            title
            path
            date
            author
          }
        }
      }
    }
  }
`

export default BlogPage
