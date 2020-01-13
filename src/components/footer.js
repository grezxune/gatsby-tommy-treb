import React from "react"
import styled from "styled-components"

const Footer = styled.footer`
  text-align: center;
  background: var(--accent-color);
  padding: 10px;
  color: var(--secondary-color);
`

export default () => {
  return <Footer>Tommy Treb {new Date().getFullYear()}</Footer>
}
