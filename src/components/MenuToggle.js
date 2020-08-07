import React from "react";
import styled from "styled-components";
import { breakpoints, colors } from "../theme";

const Line = styled.div`
  width: 25px;
  height: 3px;
  background: ${colors.white};
  margin: 5px auto;
  transition: all 0.3s ease-in-out;
`;

const Wrapper = styled.div`
  margin-right: 25px;
  display: none;
  &:hover {
    cursor: pointer;
  }
  ${Line} {
    &:nth-child(1) {
      transform: ${({ active }) =>
        active ? "translateY(8px) rotate(45deg)" : "rotate(0)"};
    }
    &:nth-child(2) {
      opacity: ${({ active }) => (active ? 0 : 1)};
    }
    &:nth-child(3) {
      transform: ${({ active }) =>
        active ? "translateY(-8px) rotate(-45deg)" : "rotate(0)"};
    }
  }
  @media screen and (max-width: ${breakpoints.medium}px) {
    display: block;
    cursor: pointer;
    z-index: 1000;
  }
`;

const MenuToggle = ({ active, setActive }) => {
  return (
    <Wrapper active={active} onClick={() => setActive(!active)}>
      <Line />
      <Line />
      <Line />
    </Wrapper>
  );
};

export default MenuToggle;
