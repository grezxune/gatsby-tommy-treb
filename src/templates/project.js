import React from "react"
import { graphql } from "gatsby"
import styled from "styled-components"
import { FaExternalLinkAlt } from "react-icons/fa"

import Layout from "../components/layout"
import SEO from "../components/seo"
import PostHeader from "../components/postHeader"
import PostBody from "../components/postBody"

const ProjectContainer = styled.div`
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;

  @media (min-width: 800px) {
    padding: 0px 1.5rem;
  }
`

const VisitLink = styled.a`
  background: var(--accent-color);
  color: var(--secondary-color);
  text-decoration: underline;
  padding: 5px 10px;
  margin: 10px 0px;
  border-radius: 5px;
  align-self: flex-end;

  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  align-items: center;

  & svg {
    margin-left: 5px;
    color: var(--secondary-color);
  }
`

export default ({ data }) => {
  const post = data.markdownRemark
  const image = require(`../images/projects/${post.frontmatter.imageName}`)

  return (
    <Layout
      capWidth={true}
      primaryContainerBackground={true}
      inheritBackground={false}
    >
      <SEO title={post.frontmatter.title} />
      <ProjectContainer>
        <PostHeader title={post.frontmatter.title} />
        <img
          src={image}
          alt={post.frontmatter.title}
          style={{ width: "100%" }}
        />
        <VisitLink href={post.frontmatter.projectURL} target="_blank">
          Visit {post.frontmatter.title}
          <FaExternalLinkAlt style={{ color: "var(--secondary-color)" }} />
        </VisitLink>
        <PostBody html={{ __html: post.html }} />
        <VisitLink href={post.frontmatter.projectURL} target="_blank">
          Visit {post.frontmatter.title}
          <FaExternalLinkAlt style={{ color: "var(--secondary-color)" }} />
        </VisitLink>
      </ProjectContainer>
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
        projectURL
      }
    }
  }
`
