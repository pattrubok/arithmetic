import React from "react";
import styled from "styled-components";
import Exemple from "../Exemple";

const AppContainer = () => {
  return (
    <Wrapper>
      <Exemple />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  font-weight: bold;
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  align-content: center;
  justify-content: center;
  overflow: auto;

  background-image: url("/static/img/background.jpeg");
  background-size: 20%;
  background-repeat: repeat;
`;

export default AppContainer;
