import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"

import Layout from "../components/layout"
import SEO from "../components/seo"
import PostHeader from "../components/postHeader"
import PostBody from "../components/postBody"

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
      <div>
        <PostHeader
          title={post.frontmatter.title}
          subtitle={post.frontmatter.date}
          tags={post.frontmatter.tags}
        />
        <Img fluid={featuredImgFluid} />
        <PostBody html={{ __html: post.html }} />
      </div>
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
