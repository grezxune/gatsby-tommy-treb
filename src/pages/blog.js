import React from "react"
import { graphql, Link } from "gatsby"
import styled from "styled-components"

import Layout from "../components/layout"
import SEO from "../components/seo"

const BlogList = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`

const BlogListItem = styled(Link)`
  min-width: 50vw;
  margin: 10px 0px;
  padding: 10px;
  background: var(--accent-color);

  @media (max-width: 1000px) {
    min-width: 100%;
  }

  & h3,
  small {
    transition-property: "color";
    transition-duration: 0.5s;
    color: var(--primary-color);
  }

  &:hover {
    background: var(--primary-color);
    box-shadow: 2px 2px 4px 0.5px var(--accent-color);

    h3,
    small {
      color: var(--accent-color);
    }
  }
`

const BlogPage = ({ data }) => {
  return (
    <Layout>
      <SEO title="Blog" />
      <BlogList>
        {data.allMarkdownRemark.edges.map(({ node }) => (
          <BlogListItem
            key={node.id}
            to={node.frontmatter.path}
            className="hover-card"
          >
            <h3>{node.frontmatter.title}</h3>
            <small style={{ display: "block" }}>
              Posted by {node.frontmatter.author} on {node.frontmatter.date}
            </small>
          </BlogListItem>
        ))}
      </BlogList>
    </Layout>
  )
}

export const pageQuery = graphql`
  query blogIndexQuery {
    allMarkdownRemark(
      filter: { frontmatter: { type: { eq: "Blog" } } }
      sort: { fields: [frontmatter___date], order: DESC }
    ) {
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
