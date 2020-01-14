import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import styled from "styled-components"

import Layout from "../components/layout"
import SEO from "../components/seo"

const ProjectTileContainer = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
`

const ProjectTile = styled.div`
  background: var(--accent-color);
  padding: 20px;
  margin: 10px;

  a {
    color: var(--secondary-color);
  }

  @media (max-width: 750px) {
    width: 100%;
  }
`

const ProjectTileInnerContainer = styled.div`
  display: flex;
  flex-flow: column;
  align-items: center;
  justify-content: center;
  width: 100%;
`

const Span = styled.span`
  display: ${props => (props.block ? "block" : "inline-block")};
  font-weight: ${props => (props.bold ? "bold" : "normal")};
`

const InfoContainer = styled.div`
  width: 100%;
  text-align: left;
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
              other
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
            <ProjectTile key={node.id} className="hover-card">
              <Link to={node.frontmatter.path}>
                <ProjectTileInnerContainer>
                  <img
                    src={projectImage}
                    alt={node.frontmatter.title}
                    height={150}
                    width={270}
                  />
                  <h1 style={{ textAlign: "center" }}>
                    {node.frontmatter.title}
                  </h1>
                  <InfoContainer>
                    <Span bold>Front End:</Span>{" "}
                    <Span> {node.frontmatter.frontend}</Span>
                  </InfoContainer>
                  <InfoContainer>
                    <Span bold>Back End:</Span>{" "}
                    <Span>{node.frontmatter.backend}</Span>
                  </InfoContainer>
                  <InfoContainer>
                    <Span bold>Database:</Span>{" "}
                    <Span>{node.frontmatter.database}</Span>
                  </InfoContainer>
                  {node.frontmatter.other && (
                    <InfoContainer>
                      <Span bold>Other:</Span>{" "}
                      <Span>{node.frontmatter.other}</Span>
                    </InfoContainer>
                  )}
                </ProjectTileInnerContainer>
              </Link>
            </ProjectTile>
          )
        })}
      </ProjectTileContainer>
    </Layout>
  )
}
