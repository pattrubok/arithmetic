import React, { useContext } from "react";
import styled from "styled-components";
import { UiButton } from "../Ui";

import { Row, Col as AntCol } from "antd";
import AppContext from "../../assets/func/context";
import { h3, paragraph } from "../../base/mixins/typography";

import { down } from "styled-breakpoints";
import { useBreakpoint } from "styled-breakpoints/react-styled";

import theme from "../../base/theme";

const Exemple = () => {
  const { showResult, data, isResult, showNextEx } = useContext(AppContext);

  const textAlign = data && typeof data.result === "number" ? "center" : "";
  const condition = data && typeof data.result === "number" ? true : false;

  const isSm = useBreakpoint(down("sm"));

  const fontSize = () => {
    if (!isSm && typeof data.result === "number") {
      return theme.fonts.size.h_numbers;
    } else if (!isSm && typeof data.result === "string") {
      return theme.fonts.size.h4;
    } else if (isSm && typeof data.result === "number") {
      return theme.fonts.size.h4;
    } else if (isSm && typeof data.result === "string") {
      return theme.fonts.size.h5;
    }
  };

  return (
    <Wrapper style={{ fontSize: fontSize() }}>
      <Row gutter={[0, 10]}>
        <Col span={24}>
          <Text style={{ textAlign: textAlign }}>
            {condition ? `${data.condition} = ?` : data.condition}
          </Text>
        </Col>
        <Col span={24}>
          {isResult && <Title>Ответ</Title>}
          {isResult && (
            <Text style={{ textAlign: textAlign }}>{data.result}</Text>
          )}
        </Col>
      </Row>
      <Row className='row-btn'>
        <Col span={12}>
          <UiButton onClick={showResult}>Ответ</UiButton>
        </Col>
        <Col span={12} className='col-next-ex'>
          <UiButton onClick={showNextEx}>Далее</UiButton>
        </Col>
      </Row>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  overflow: scroll;
  color: ${(p) => p.theme.color.primary};
  padding: 25px;
  border-radius: 4px;
  background-color: ${(p) => p.theme.color.white};
  width: 80%;
  height: 80%;

  display: flex;
  justify-content: space-between;
  flex-direction: column;

  .row-btn {
    margin-top: 10px;
  }

  .uibutton-wrapper {
    display: flex;
    .ant-btn {
      height: 100%;
      span {
        ${h3}
        font-weight: bold;
        ${down("sm")} {
          ${paragraph};
        }
      }
    }
  }
  .col-next-ex {
    .uibutton-wrapper {
      justify-content: flex-end;
    }
  }
`;

const Col = styled(AntCol)`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Text = styled.div``;

const Title = styled.div`
  align-self: center;
  display: inline-block;
  border-bottom: 4px solid ${(p) => p.theme.color.primary};
`;

export default Exemple;
