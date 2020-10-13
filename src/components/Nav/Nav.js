import React from "react";
import styled from "styled-components";

const Logo = styled.h1`
  font-family: "Abril Fatface", cursive;
`;

const NavBar = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: #000;
  color: #fff;
  padding: 0.3rem 2rem;
`;

const NavLinks = styled.ul`
  display: flex;
`;

const NavLink = styled.li`
  text-decoration: none;
  list-style: none;
  margin-right: 0.5rem;
  font-family: "Raleway", sans-serif;
`;

function Nav() {
  return (
    <NavBar>
      <Logo>Famous Quotes</Logo>
      <NavLinks className="links">
        <NavLink>Top Quotes</NavLink>
        <NavLink>Autores</NavLink>
      </NavLinks>
    </NavBar>
  );
}

export default Nav;
