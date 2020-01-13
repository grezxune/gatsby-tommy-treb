import React from "react"
import { graphql, Link } from "gatsby"
import styled from "styled-components"

import Layout from "../components/layout"
import SEO from "../components/seo"

const BlogListItem = styled(Link)`
  min-width: 50vw;
  margin: 10px 0px;
  padding: 10px;

  @media (max-width: 1000px) {
    min-width: 100%;
  }

  &:hover {
    background: var(--secondary-color);
  }

  & h3,
  small {
    color: black;
  }
`

const BlogPage = ({ data }) => {
  return (
    <Layout>
      <SEO title="Blog" />
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        {data.allMarkdownRemark.edges.map(({ node }) => (
          <BlogListItem key={node.id} to={node.frontmatter.path}>
            <h3>{node.frontmatter.title}</h3>
            <small style={{ display: "block" }}>
              Posted by {node.frontmatter.author} on {node.frontmatter.date}
            </small>
          </BlogListItem>
        ))}
      </div>
    </Layout>
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
