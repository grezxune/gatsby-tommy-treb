import React, { useEffect } from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import styled from "styled-components"
import { IconContext } from "react-icons"

import Header from "./header"
import "./layout.css"
import "./custom.css"
import Footer from "./footer"

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 100vh;
  background: ${({ primaryContainerBackground }) =>
    primaryContainerBackground
      ? "var(--primary-color)"
      : "var(--secondary-color)"};
`

const Main = styled.main`
  background: ${({ inheritBackground }) =>
    inheritBackground ? "inherit" : "var(--secondary-color)"};
  width: 100%;
  max-width: ${({ capWidth }) => (capWidth ? "800px" : "100%")};
  flex: 1;
  justify-self: center;
  align-self: center;
  padding: 1.0875rem 0px;
  margin: 1rem 0px;

  @media (max-width: 800px) {
    margin: 0px;
    padding: 1.0875rem 1.45rem;
  }
`

const Layout = ({
  children,
  capWidth,
  inheritBackground,
  primaryContainerBackground,
}) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <IconContext.Provider value={{ color: "var(--accent-color)" }}>
      <Container primaryContainerBackground={primaryContainerBackground}>
        <Header siteTitle={data.site.siteMetadata.title} />
        <Main capWidth={capWidth} inheritBackground={inheritBackground}>
          {children}
        </Main>
        <Footer />
      </Container>
    </IconContext.Provider>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
