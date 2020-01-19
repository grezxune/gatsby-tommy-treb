import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import { Location } from "@reach/router"

const Container = styled.div`
  background: var(--accent-color);
  padding: 10px;
  width: 100%;
`

const MenuList = styled.ul`
  list-style: none;
  display: flex;
  margin: 0px;
`

const CustomListItem = styled.li`
  flex: 1;
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  align-items: center;
  margin: 0px;
  transition-property: "border";
  transition-duratoin: 1s;

  & a {
    text-align: center;
    padding: 5px;
    border-radius: 3px;

    color: ${({ currentPage }) =>
      currentPage ? "var(--accent-color)" : "var(--primary-color)"};
    font-weight: ${({ currentPage }) => (currentPage ? "bold" : "normal")};
    background: ${({ currentPage }) =>
      currentPage ? "var(--primary-color)" : "inherit"};

    &:hover {
      background: var(--primary-color);
      color: var(--accent-color);
    }
  }
`

export default props => {
  const menuItems = [
    {
      path: "/",
      title: "Home",
    },
    {
      path: "/projectList",
      title: "Projects",
    },
    {
      path: "/blog",
      title: "Blog",
    },
  ]

  return (
    <Location>
      {({ location }) => (
        <Container>
          <MenuList>
            {menuItems.map(({ path, title }) => (
              <CustomListItem
                key={path}
                currentPage={path === location.pathname}
              >
                <Link to={path}>{title}</Link>
              </CustomListItem>
            ))}
          </MenuList>
        </Container>
      )}
    </Location>
  )
}
