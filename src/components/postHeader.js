import React from "react"
import styled from "styled-components"

import Tag from "../components/tag"

const PostHeader = styled.div`
  width: 100%;
  border-bottom: 1px solid var(--primary-color);
  padding-bottom: 10px;
  margin-bottom: 20px;
`

const TitleLine = styled.div`
  width: 100%;
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  align-items: center;

  & h1 {
    margin: 0px;
    color: var(--primary-color);
  }

  & small {
    color: var(--muted-color);
  }
`

const TagLine = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
`

const Subtitle = styled.small`
  font-family: var(--secondary-font);
`

export default ({ title, subtitle, tags }) => (
  <PostHeader>
    <TitleLine>
      <h1>{title}</h1>
      <Subtitle>{subtitle}</Subtitle>
    </TitleLine>
    <TagLine>
      {tags &&
        tags.map(tag => (
          <Tag primaryFirst={false} marginSide={"left"} key={`tag-${tag}`}>
            {tag}
          </Tag>
        ))}
    </TagLine>
  </PostHeader>
)
