import React from "react";
import styled from "styled-components";
import { Button } from "antd";

const UiButton = ({ children, ...props }) => {
  return (
    <Wrapper className='uibutton-wrapper'>
      <Button type='primary' {...props}>
        {children}
      </Button>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  &.uibutton-wrapper {
    .ant-btn {
      border-radius: 4px;
    }
    .ant-btn-primary {
      color: ${(p) => p.theme.color.secondary};
    }
  }
`;

export default UiButton;
