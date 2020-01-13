import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import styled from "styled-components"

import Menu from "./menu"

const HeaderContainer = styled.header`
  background: var(--primary-color);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  color: var(--accent-color);

  h1 {
    margin: 0px;
  }

  h1 a {
    color: var(--accent-color);
  }
`

const TitleContainer = styled.div`
  padding: 1.5rem 1.1rem;
  margin-bottom: 20px;
  padding-bottom: 0px;
`

const Header = ({ siteTitle }) => (
  <HeaderContainer>
    <TitleContainer>
      <h1>
        <Link
          to="/"
          style={{
            textDecoration: `none`,
          }}
        >
          {siteTitle}
        </Link>
      </h1>
    </TitleContainer>
    <Menu />
  </HeaderContainer>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
