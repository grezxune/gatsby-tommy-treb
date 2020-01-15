import React from "react"
import { graphql } from "gatsby"
import styled from "styled-components"
import { FaExternalLinkAlt } from "react-icons/fa"

import Layout from "../components/layout"
import SEO from "../components/seo"

const ProjectContainer = styled.div`
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
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

const ContentContainer = styled.div`
  width: 100%;
`

export default ({ data }) => {
  const post = data.markdownRemark
  const image = require(`../images/projects/${post.frontmatter.imageName}`)

  console.log("HREF: ", post.frontmatter.projectURL)
  return (
    <Layout>
      <SEO title={post.frontmatter.title} />
      <ProjectContainer>
        <h1 style={{ textAlign: "center" }}>{post.frontmatter.title}</h1>
        <img
          src={image}
          alt={post.frontmatter.title}
          style={{ width: "100%" }}
        />
        <VisitLink href={post.frontmatter.projectURL} target="_blank">
          Visit {post.frontmatter.title}
          <FaExternalLinkAlt style={{ color: "var(--secondary-color)" }} />
        </VisitLink>
        <ContentContainer dangerouslySetInnerHTML={{ __html: post.html }} />
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
