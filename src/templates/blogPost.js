import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import styled from "styled-components"

import Layout from "../components/layout"
import SEO from "../components/seo"
import PostHeader from "../components/postHeader"
import PostBody from "../components/postBody"

const Container = styled.div`
  @media (min-width: 800px) {
    padding: 0px 1.5rem;
  }
`

const PostImage = styled(Img)`
  margin-bottom: 20px;
`

export default ({ data }) => {
  const post = data.markdownRemark
  const featuredImgFluid =
    post.frontmatter.featuredImage &&
    post.frontmatter.featuredImage.childImageSharp.fluid

  return (
    <Layout capWidth={true} primaryContainerBackground={true}>
      <SEO
        title={post.frontmatter.title}
        descrition={post.frontmatter.description}
        image={featuredImgFluid}
      />
      <Container>
        <PostHeader
          title={post.frontmatter.title}
          subtitle={post.frontmatter.date}
          tags={post.frontmatter.tags}
        />
        <PostImage fluid={featuredImgFluid} />
        <PostBody html={{ __html: post.html }} />
      </Container>
    </Layout>
  )
}

export const postQuery = graphql`
  query blogPostByPath($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        path
        title
        author
        date
        tags
        description
        featuredImage {
          childImageSharp {
            fluid(maxWidth: 800) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`
