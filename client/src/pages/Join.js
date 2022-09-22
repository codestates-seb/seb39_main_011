import React from "react";
import styled from "styled-components";
import JoinForm from "../components/templates/JoinForm";

const Join = () => {
  return (
    <JoinContainer>
      <JoinForm />
    </JoinContainer>
  );
};

export default Join;

const JoinContainer = styled.div`
  width: 940px;
  height: calc(100vh - 54px);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
