import React, { useState, useEffect } from "react";
import styled from "styled-components";

import { AppContainer } from "./components";

import { exemples } from "./assets/func/const";
import { randomChoice } from "./assets/func/helpers";

import AppContext from "./assets/func/context";

const App = () => {
  const [usedEx, setUsedEx] = useState([]);
  const [data, setData] = useState({});
  const [isResult, setIsResult] = useState(false);

  useEffect(() => {
    showNextEx();
  }, []);

  let selectedEx = randomChoice(exemples);

  const showNextEx = () => {
    setIsResult(false);
    setUsedEx((current) => [...current, selectedEx]);
    const uniqUsedEx = [...new Set(usedEx)];

    let result = [];
    if (uniqUsedEx.length === exemples.length) {
      result = exemples;
      setUsedEx([]);
    } else {
      result = exemples.filter(
        (x) => !uniqUsedEx.some((y) => x.condition === y.condition)
      );
    }

    const obj = randomChoice(result);
    setData(obj);
    selectedEx = obj;
    setUsedEx((current) => [...current, obj]);
  };

  const showResult = () => {
    setIsResult(true);
  };

  const showExAgain = () => {
    setUsedEx([]);
  };

  return (
    <Wrapper>
      <AppContext.Provider
        value={{
          showResult,
          data,
          isResult,
          showNextEx,
          showExAgain,
        }}
      >
        <AppContainer />
      </AppContext.Provider>
    </Wrapper>
  );
};

const Wrapper = styled.div``;

export default App;
