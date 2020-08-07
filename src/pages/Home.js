import React from "react";
import styled from "styled-components";
import { Header, Autocomplete } from "../components";
import { background } from "../assets/images";

const Container = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background: linear-gradient(
      0deg,
      ${(props) => props.theme.background},
      ${(props) => props.theme.background}
    ),
    url(${background}) no-repeat center center fixed;
  background-size: cover;
`;

const Home = () => {
  return (
    <Container>
      <Header />
      <Autocomplete />
    </Container>
  );
};

export default Home;
