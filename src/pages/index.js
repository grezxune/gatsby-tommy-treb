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
        <h4>Ginger</h4>
        <h4>Husband</h4>
        <h4>Coder</h4>
        <h4>Pool Player</h4>
        <h4>Entrepreneur</h4>
        <p>
          These are the words I would use to describe my life if I only had 4.28
          seconds to do it. I had more time than that while making this
          document, but I think they do a pretty good job.
        </p>
        <p>
          So you're here to get your eyes on some content. Start by observing me
          in my deepest meditative state:
        </p>
        <ProfileImage src={profileImage} alt="profile image" />
        <p>
          Now that we've got that out of the way, you can get on to the probably
          more interesting stuff, so I invite you to open your mind and start by
          checking out my <Link to="/blog">blog</Link> or{" "}
          <Link to="/projectList">projects</Link>. You will get to know more
          about myself (if that's not something you're interested in, turn back
          now!), and may pick up a couple of things you'll find useful in your
          life.
        </p>
      </Container>
    </Layout>
  )
}

export default IndexPage
