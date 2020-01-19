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
        <h4>Ginger</h4>
        <h4>Husband</h4>
        <h4>Coder</h4>
        <h4>Pool Player</h4>
        <h4>Entrepreneur</h4>
        <p>
          These are the words I would use to describe my life if I only had 4.28
          seconds to do it.
        </p>
        <img src={moviePoster} alt="About" />
      </Container>
    </Layout>
  )
}
