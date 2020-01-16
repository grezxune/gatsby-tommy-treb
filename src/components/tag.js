import React from "react"
import styled from "styled-components"

const Tag = styled.small`
  margin-${({ marginSide }) => marginSide}: 5px;
  padding: 5px;
  background: ${({ primaryFirst }) =>
    primaryFirst ? "var(--primary-color)" : "var(--accent-color)"};
  color: ${({ primaryFirst }) =>
    primaryFirst ? "var(--accent-color)" : "var(--primary-color)"} !important;
  border-radius: 5px;
  font-family: var(--secondary-font);

  ${({ parent }) => parent}:hover & {
    background: ${({ primaryFirst }) =>
      primaryFirst ? "var(--accent-color)" : "var(--primary-color)"};
    color: ${({ primaryFirst }) =>
      primaryFirst ? "var(--primary-color)" : "var(--accent-color)"} !important;
  }
`

export default ({ children, parent, primaryFirst, marginSide }) => (
  <Tag parent={parent} primaryFirst={primaryFirst} marginSide={marginSide}>
    {children}
  </Tag>
)
