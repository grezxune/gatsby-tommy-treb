import React, { useState } from "react"
import { graphql, Link } from "gatsby"
import styled from "styled-components"
import Select from "react-select"

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
  const [filters, setFilters] = useState([])

  const allTags = data.allMarkdownRemark.edges
    .map(({ node }) => node)
    .reduce((acc, cur) => {
      const tags = cur && cur.frontmatter && cur.frontmatter.tags
      const newTags = []

      if (tags) {
        tags.forEach(tag => {
          if (!acc.some(x => x.value === tag)) {
            newTags.push({ value: tag, label: tag })
          }
        })
      }

      return [...acc, ...newTags]
    }, [])

  const onFilterChanged = updatedFilters => {
    setFilters(updatedFilters || [])
  }

  const filteredPosts = data.allMarkdownRemark.edges.filter(({ node }) => {
    if (filters.length > 0) {
      const nodeTags = node.frontmatter.tags

      return nodeTags && filters.some(filter => nodeTags.includes(filter.value))
    } else {
      return true
    }
  })

  const customStyles = {
    container: provided => ({
      ...provided,
      flex: 1,
    }),
  }

  return (
    <Layout capWidth={true} inheritBackground={true}>
      <SEO title="Blog" />
      {allTags && allTags.length > 0 && (
        <Select
          styles={customStyles}
          value={filters}
          options={allTags}
          onChange={onFilterChanged}
          isMulti={true}
          isSearchable={true}
          hideSelectedOptions={false}
          placeholder={"Tag Filters"}
          closeMenuOnSelect={false}
          close
        />
      )}
      <BlogList>
        {filteredPosts.map(({ node }) => (
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
