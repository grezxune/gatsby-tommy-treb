import React from "react"
import styled from "styled-components"

import Layout from "../components/layout"
import moviePoster from "../images/movie-poster.png"
import SEO from "../components/seo"

const Container = styled.div`
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
`

export default () => {
  return (
    <Layout>
      <SEO title="About" />
      <Container>
        <p>I'm a ginger. I love to code. I love to play pool.</p>
        <img src={moviePoster} alt="About" />
      </Container>
    </Layout>
  )
}
