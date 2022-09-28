import React from "react";
import styled from "styled-components";
import JoinForm from "../components/templates/JoinForm";

const Join = () => {
  return (
    <JoinContainer>
      <h1>회원가입</h1>
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

  h1 {
    color: var(--main-color-1);
    font-size: 35px;
    font-weight: 800;
    margin-bottom: 2rem;
  }
`;
