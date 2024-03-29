/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import Helmet from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"

function SEO({ description, lang, meta, title, image }) {
  const { site, imageSharp } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
            homeURL
          }
        }
        imageSharp(fluid: { originalName: { eq: "profile.jpg" } }) {
          fluid {
            originalImg
          }
        }
      }
    `
  )

  const metaDescription = description || site.siteMetadata.description
  const imageSrc =
    (image && `${site.siteMetadata.homeURL}${image.src}`) ||
    `${site.siteMetadata.homeURL}${imageSharp.fluid.originalImg}`

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={title}
      titleTemplate={`%s | ${site.siteMetadata.title}`}
      meta={[
        {
          name: `description`,
          content: metaDescription,
        },
        {
          property: `og:title`,
          content: title,
        },
        {
          property: `og:description`,
          content: metaDescription,
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          property: `og:image`,
          content: imageSrc,
        },
        {
          name: `twitter:card`,
          content: `summary`,
        },
        {
          name: `twitter:creator`,
          content: site.siteMetadata.author,
        },
        {
          name: `twitter:title`,
          content: title,
        },
        {
          name: `twitter:description`,
          content: metaDescription,
        },
        {
          name: "theme-color",
          content: "#3498db",
        },
        {
          name: "msapplication-navbutton-color",
          content: "#3498db",
        },
        {
          name: "apple-mobile-web-app-status-bar-style",
          content: "#3498db",
        },
        {
          name: "viewport",
          content: "width=device-width, initial-scale=1",
        },
      ].concat(meta)}
    />
  )
}

SEO.defaultProps = {
  lang: `en`,
  meta: [],
  description: ``,
}

SEO.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string.isRequired,
}

export default SEO
