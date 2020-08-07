import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { ThemeToggle, MenuToggle } from "./";
import { Logo } from "../assets/images";
import {
  breakpoints,
  colors,
  fontSize,
  fontWeight,
  lineHeight,
  spacings,
} from "../theme";

const Navbar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const NavBrand = styled(Link)`
  margin: ${spacings.base};
`;

const Nav = styled.div`
  display: flex;
  transform: translate(0);
  transition: transform 0.7s ease-in-out;
  @media screen and (max-width: ${breakpoints.medium}px) {
    flex-direction: column;
    position: absolute;
    top: 0;
    bottom: 0;
    background: ${colors.darkOpacity};
    width: 100%;
    transform: ${({ active }) =>
      active ? "translate(0%)" : "translate(-100%)"};
  }
`;
const NavItem = styled(Link)`
  font-weight: ${fontWeight.bold};
  font-size: ${fontSize.normal};
  line-height: ${lineHeight.normal};
  color: ${colors.white};
  margin: ${spacings.base};
  transition: color 0.3s ease-out;
  @media screen and (max-width: ${breakpoints.medium}px) {
    padding: 15px;
    &:first-child {
      margin-top: 50px;
    }
  }
`;

const Header = () => {
  const [active, setActive] = React.useState(false);
  return (
    <Navbar>
      <NavBrand to="/">
        <Logo />
      </NavBrand>

      <MenuToggle
        data-testid="menu-toggle"
        active={active}
        setActive={setActive}
      />
      <Nav active={active}>
        <ThemeToggle />
        <NavItem data-testid="nav-item" to="/contact">
          Become a host
        </NavItem>
        <NavItem to="/help">Help</NavItem>
        <NavItem to="/signup">Sign up</NavItem>
        <NavItem to="/login">Log in</NavItem>
      </Nav>
    </Navbar>
  );
};

export default Header;
