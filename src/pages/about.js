import React from "react"
import Layout from "../components/layout"
import moviePoster from "../images/movie-poster.png"
import SEO from "../components/seo"

export default () => {
  return (
    <Layout>
      <SEO title="About" />
      <div>
        <p>I'm a ginger. I love to code. I love to play pool.</p>
        <img src={moviePoster} alt="About" />
      </div>
    </Layout>
  )
}
