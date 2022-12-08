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
  max-width: 940px;
  margin: 40px auto 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  h1 {
    color: var(--main-color-2);
    font-size: 35px;
    font-weight: 800;
    margin-bottom: 2rem;
  }
`;
