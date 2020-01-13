import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

const Container = styled.div`
  background: var(--accent-color);
  padding-top: 10px;
  width: 100%;
`

const MenuList = styled.ul`
  list-style: none;
  display: flex;
  justify-content: space-evenly;
  margin: 0px;

  li a {
    color: var(--secondary-color);
  }
`

export default () => {
  return (
    <Container>
      <MenuList>
        <li>
          <Link to={"/"}>Home</Link>
        </li>
        <li>
          <Link to={"/about"}>About</Link>
        </li>
        <li>
          <Link to={"/projectList"}>Projects</Link>
        </li>
        <li>
          <Link to={"/blog"}>Blog</Link>
        </li>
      </MenuList>
    </Container>
  )
}
