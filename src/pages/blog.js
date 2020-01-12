import React from "react"
import { graphql, Link } from "gatsby"

const BlogPage = ({ data }) => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <h1>Latest Posts</h1>
      {data.allMarkdownRemark.edges.map(({ node }) => (
        <div key={node.id} style={{ minWidth: "50vw" }}>
          <h3>{node.frontmatter.title}</h3>
          <small style={{ display: "block" }}>
            Posted by {node.frontmatter.author} on {node.frontmatter.date}
          </small>
          <div style={{ textAlign: "right" }}>
            <Link to={node.frontmatter.path}>Read More</Link>
          </div>
          <hr />
        </div>
      ))}
    </div>
  )
}

export const pageQuery = graphql`
  query blogIndexQuery {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
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
