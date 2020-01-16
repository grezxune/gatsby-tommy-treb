import React from "react"
import styled from "styled-components"

const PostHeader = styled.div`
  font-family: var(--secondary-font);
  width: 100%;
`

export default ({ children, html }) => (
  <PostHeader dangerouslySetInnerHTML={html} />
)
