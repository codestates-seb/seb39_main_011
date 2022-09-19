import React from "react";
import styled from "styled-components";
import JoinForm from "../components/templates/JoinForm";

const Join = () => {
  return (
    <JoinContainer>
      <JoinTitle>회원가입</JoinTitle>
      <JoinForm />
    </JoinContainer>
  );
};

export default Join;

const JoinContainer = styled.div`
  width: 940px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 2rem;
`;

const JoinTitle = styled.h1`
  font-size: 40px;
  font-weight: bold;
`;
