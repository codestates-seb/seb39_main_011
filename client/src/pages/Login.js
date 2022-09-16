import React from "react";
import styled from "styled-components";
import LoginForm from "../components/Login/LoginForm";

const Login = () => {
  return (
    <LoginContainer>
      <LoginTitle>로그인</LoginTitle>
      <LoginForm />
    </LoginContainer>
  );
};

export default Login;

const LoginContainer = styled.div`
  width: 940px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 5rem;
`;

const LoginTitle = styled.h1`
  font-size: 40px;
  font-weight: bold;
`;
