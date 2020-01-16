import React from "react"
import styled from "styled-components"
import { FaTwitter, FaFacebookF } from "react-icons/fa"

const Footer = styled.footer`
  text-align: center;
  background: var(--accent-color);
  padding: 10px 30px;
  color: var(--primary-color);
  font-family: var(--secondary-font);

  display: flex;
  justify-content: space-between;
`

const CopyrightText = styled.span``

const SocialsContainer = styled.div`
  display: flex;
  align-items: center;

  & div {
    margin-left: 10px;
  }

  & svg {
    background: var(--primary-color);
    padding: 2px;
    border-radius: 2px;
  }
`

const SocialWrapper = styled.div`
  display: flex;
  align-items: center;

  cursor: pointer;
`

export default () => {
  const socials = [
    {
      url: "https://www.facebook.com/tommy.treb",
      component: FaFacebookF,
    },
    {
      url: "https://twitter.com/TommyTreb1",
      component: FaTwitter,
    },
  ]

  const onSocialClick = url => {
    if (window) {
      window.open(url, "_blank")
    }
  }

  return (
    <Footer>
      <CopyrightText>Tommy Treb {new Date().getFullYear()}</CopyrightText>
      <SocialsContainer>
        {socials.map(social => (
          <SocialWrapper
            key={social.url}
            onClick={() => onSocialClick(social.url)}
          >
            <social.component size={30} />
          </SocialWrapper>
        ))}
      </SocialsContainer>
    </Footer>
  )
}
