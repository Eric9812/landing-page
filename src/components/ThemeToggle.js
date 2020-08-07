import React from "react";
import styled from "styled-components";
import { SunIcon, MoonIcon } from "../assets/images";
import { ModeContext } from "../context";
import { breakpoints, colors, spacings } from "../theme";

const Wrapper = styled.div`
  position: relative;
  display: inline-block;
  width: 50px;
  height: 24px;
  margin: ${spacings.base};
  @media screen and (max-width: ${breakpoints.medium}px) {
    margin: ${spacings.large};
  }
`;

const Label = styled.label`
  width: 50px;
  height: 24px;
  background: ${colors.darkGray};
  position: relative;
  display: flex;
  justify-content: space-around;
  align-items: center;
  border-radius: 12px;
  transition: 0.4s;
  &::after {
    content: "";
    position: absolute;
    width: 26px;
    height: 26px;
    border-radius: 100%;
    left: 0;
    top: -1px;
    background: ${colors.white};
    transition: 0.4s;
  }
`;

const Input = styled.input`
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: 5;
  opacity: 0;
  margin: 0;
  cursor: pointer;
  &:checked + label {
    &::after {
      left: 25px;
    }
  }
`;

const ThemeToggle = () => {
  const { mode, setMode } = React.useContext(ModeContext);
  const toggle = (event) => {
    const {
      target: { checked },
    } = event;
    if (checked) {
      localStorage.setItem("mode", "dark");
      setMode("dark");
    } else {
      localStorage.setItem("mode", "light");
      setMode("light");
    }
  };
  return (
    <Wrapper>
      <Input
        data-testid="theme-toggle"
        type="checkbox"
        onChange={toggle}
        checked={mode === "dark"}
      />
      <Label>
        <MoonIcon />
        <SunIcon />
      </Label>
    </Wrapper>
  );
};

export default ThemeToggle;
