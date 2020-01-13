import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import styled from "styled-components"

import Layout from "../components/layout"
import SEO from "../components/seo"

const ProjectTileContainer = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-evenly;
`

const ProjectTile = styled.div`
  background: var(--accent-color);
  padding: 20px;

  a {
    color: var(--secondary-color);
  }
`

const Span = styled.span`
  display: ${props => (props.block ? "block" : "inline-block")};
  font-weight: ${props => (props.bold ? "bold" : "normal")};
`

export default () => {
  const data = useStaticQuery(graphql`
    query getProjectsList {
      allMarkdownRemark(filter: { frontmatter: { type: { eq: "Project" } } }) {
        edges {
          node {
            id
            html
            frontmatter {
              title
              path
              frontend
              backend
              database
              imageName
            }
          }
        }
      }
    }
  `)

  return (
    <Layout>
      <SEO title="Projects" />
      <ProjectTileContainer>
        {data.allMarkdownRemark.edges.map(({ node }) => {
          console.log("Image path: ", node.frontmatter.imageName)
          const projectImage = require(`../images/projects/${node.frontmatter.imageName}`)

          return (
            <ProjectTile key={node.id}>
              <Link to={node.frontmatter.path}>
                <img
                  src={projectImage}
                  alt={node.frontmatter.title}
                  height={150}
                />
                <h1>{node.frontmatter.title}</h1>
                <div>
                  <Span bold>Front End:</Span>{" "}
                  <Span> {node.frontmatter.frontend}</Span>
                </div>
                <div>
                  <Span bold>Back End:</Span>{" "}
                  <Span>{node.frontmatter.backend}</Span>
                </div>
                <div>
                  <Span bold>Database:</Span>{" "}
                  <Span>{node.frontmatter.database}</Span>
                </div>
              </Link>
            </ProjectTile>
          )
        })}
      </ProjectTileContainer>
    </Layout>
  )
}
