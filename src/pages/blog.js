import React from "react"
import { graphql, Link } from "gatsby"
import styled from "styled-components"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Tag from "../components/tag"

const BlogList = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`

const BlogListItem = styled(Link)`
  width: 100%;
  margin: 10px 0px;
  padding: 10px;
  background: var(--accent-color);

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
    <Layout capWidth={true} inheritBackground={true}>
      <SEO title="Blog" />
      <BlogList>
        {data.allMarkdownRemark.edges.map(({ node }) => (
          <BlogListItem
            key={node.id}
            to={node.frontmatter.path}
            className="hover-card"
          >
            <h3>{node.frontmatter.title}</h3>
            {node.frontmatter.tags &&
              node.frontmatter.tags.map(tag => (
                <Tag
                  key={`${node.id}-tag-${tag}`}
                  parent={BlogListItem}
                  primaryFirst={true}
                  marginSide={"right"}
                >
                  {tag}
                </Tag>
              ))}
            <small
              style={{ display: "block", fontFamily: "var(--secondary-font)" }}
            >
              {node.frontmatter.date}
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
            tags
          }
        }
      }
    }
  }
`

export default BlogPage
