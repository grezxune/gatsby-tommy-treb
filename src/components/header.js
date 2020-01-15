import { Link } from "gatsby"
import PropTypes from "prop-types"
import React, { useRef, useEffect, useState } from "react"
import styled from "styled-components"

import Menu from "./menu"

const HeaderContainer = styled.header`
  background: var(--primary-color);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  color: var(--accent-color);

  h1 {
    margin: 0px;
  }

  h1 a {
    color: var(--accent-color);
  }
`

const TitleContainer = styled.div`
  padding: 1.5rem 1.1rem;
  margin-bottom: 20px;
  padding-bottom: 0px;
  width: 100%;
`

const MovingTitle = styled.h1`
  display: inline-block;
  position: relative;

  animation: titleMovement 10s infinite;
  animation-timing-function: linear;
  animation-direction: alternate;

  @keyframes titleMovement {
    0% {
      left: 0px;
    }

    100% {
      ${({ animationValues }) => `left: ${animationValues["100%"]}`}
    }
  }
`

const Header = ({ siteTitle }) => {
  const titleContainerRef = useRef(null)
  const movingTitleRef = useRef(null)
  const [titleContainerWidth, setTitleContainerWidth] = useState(0)
  const [movingTitleWidth, setMovingTitleWidth] = useState(0)
  const [maxAnimationLeft, setMaxAnimationLeft] = useState(0)
  const [animationValues, setAnimationValues] = useState({
    "0%": "0%",
    "100%": "0%",
  })

  useEffect(() => {
    const newMaxLeftValue = 90 - (movingTitleWidth / titleContainerWidth) * 100

    if (maxAnimationLeft !== newMaxLeftValue) {
      setMaxAnimationLeft(newMaxLeftValue)

      setAnimationValues({
        ...animationValues,
        "100%": newMaxLeftValue + "%",
      })
    }
  }, [animationValues, maxAnimationLeft, titleContainerWidth, movingTitleWidth])

  if (titleContainerRef.current) {
    setInterval(() => {
      const newTitleContainerWidth =
        titleContainerRef.current && titleContainerRef.current.offsetWidth
      const newMovingTitleWidth =
        movingTitleRef.current && movingTitleRef.current.offsetWidth

      if (
        newTitleContainerWidth !== titleContainerWidth ||
        newMovingTitleWidth !== movingTitleWidth
      ) {
        setTitleContainerWidth(newTitleContainerWidth)
        setMovingTitleWidth(newMovingTitleWidth)
      }
    }, 2000)
  }
  return (
    <HeaderContainer>
      <TitleContainer ref={titleContainerRef}>
        <MovingTitle ref={movingTitleRef} animationValues={animationValues}>
          <Link
            to="/"
            style={{
              textDecoration: `none`,
            }}
          >
            {siteTitle}
          </Link>
        </MovingTitle>
      </TitleContainer>
      <Menu />
    </HeaderContainer>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
