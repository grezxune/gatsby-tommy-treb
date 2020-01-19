import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const ProfileImage = styled.img`
  border-radius: 250px;
`

const Container = styled.div`
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
`

const IndexPage = () => {
  const profileImage = require("../images/profile.jpg")

  return (
    <Layout>
      <SEO title="Home" />
      <Container>
        <h1>Hey You</h1>
        <p>
          Welcome to the official Tommy Treb site. Observe me in my deepest
          meditative state:
        </p>
        <ProfileImage src={profileImage} alt="profile image" />
        <p>
          Now that we've got that out of the way, I'd like to invite you to open
          your mind and start by checking out my <Link to="/blog">blog</Link> or{" "}
          <Link to="/projectList">projects</Link>. You will get to know more
          about myself, and may pick up a couple of things you'll find useful in
          your life.
        </p>
      </Container>
    </Layout>
  )
}

export default IndexPage
