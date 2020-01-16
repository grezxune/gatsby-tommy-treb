import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
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
  font-weight: 900;
  font-size: 3.2rem;
  line-height: 40px;

  animation: titleMovement 10s infinite;
  animation-timing-function: linear;
  animation-direction: alternate;

  // @keyframes titleMovement {
  //   0% {
  //     left: 0px;
  //   }

  //   100% {
  //     ${({ animationValues }) => `left: ${animationValues["100%"]}`}
  //   }
  // }
`

const Header = ({ siteTitle }) => {
  // const titleContainerRef = useRef(null)
  // const movingTitleRef = useRef(null)
  // const [titleContainerWidth, setTitleContainerWidth] = useState(0)
  // const [movingTitleWidth, setMovingTitleWidth] = useState(0)
  // const [maxAnimationLeft, setMaxAnimationLeft] = useState(0)
  // const [animationValues, setAnimationValues] = useState({
  //   "0%": "0%",
  //   "100%": "10%",
  // })

  // const resetWidths = () => {
  //   const newTitleContainerWidth =
  //     titleContainerRef.current && titleContainerRef.current.offsetWidth
  //   const newMovingTitleWidth =
  //     movingTitleRef.current && movingTitleRef.current.offsetWidth

  //   console.log(
  //     "Resetting widths: ",
  //     titleContainerRef.current.offsetWidth,
  //     newTitleContainerWidth,
  //     movingTitleRef.current.offsetWidth,
  //     newMovingTitleWidth
  //   )
  //   if (
  //     newTitleContainerWidth !== titleContainerWidth ||
  //     newMovingTitleWidth !== movingTitleWidth
  //   ) {
  //     setTitleContainerWidth(newTitleContainerWidth - 50)
  //     setMovingTitleWidth(newMovingTitleWidth)
  //   }
  // }

  // useEffect(() => {
  //   console.log(
  //     "In use effect",
  //     animationValues,
  //     maxAnimationLeft,
  //     titleContainerWidth,
  //     movingTitleWidth
  //   )

  //   let newMaxLeftValue = movingTitleWidth / titleContainerWidth
  //   newMaxLeftValue *= 100
  //   newMaxLeftValue = 100 - newMaxLeftValue

  //   if (maxAnimationLeft !== newMaxLeftValue && !isNaN(newMaxLeftValue)) {
  //     setMaxAnimationLeft(newMaxLeftValue)

  //     setAnimationValues({
  //       ...animationValues,
  //       "100%": newMaxLeftValue + "%",
  //     })
  //   }
  // }, [animationValues, maxAnimationLeft, titleContainerWidth, movingTitleWidth])

  // if (window && !window.onresize) {
  //   window.onresize = resetWidths
  // }

  return (
    <HeaderContainer>
      <TitleContainer
        ref={ref => {
          if (ref) {
            // titleContainerRef.current = ref
            // setTitleContainerWidth(ref.offsetWidth - 50)
          }
        }}
      >
        <MovingTitle
          ref={ref => {
            if (ref) {
              // movingTitleRef.current = ref
              // setMovingTitleWidth(ref.offsetWidth)
            }
          }}
          // animationValues={animationValues}
        >
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
