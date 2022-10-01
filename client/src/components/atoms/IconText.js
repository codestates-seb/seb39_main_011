import React from "react";
import styled from "styled-components";

const IconText = (props) => {
  return (
    <Container>
      {props.icon}
      <div>{props.children}</div>
    </Container>
  );
};

const Container = styled.fieldset`
  display: flex;
  align-items: center;
  gap: 5px;

  > svg {
    width: 20px;
  }

  > div {
    color: var(--main-color-1);
    font-weight: 700;
  }
`;

export default IconText;
