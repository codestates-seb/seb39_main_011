import React from "react";
import styled from "styled-components";
import LoginForm from "../components/templates/LoginForm";

const Login = () => {
  return (
    <LoginContainer>
      <h1>로그인</h1>
      <LoginForm />
    </LoginContainer>
  );
};

export default Login;

const LoginContainer = styled.div`
  max-width: 940px;
  height: calc(100vh - 54px);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  h1 {
    color: var(--main-color-1);
    font-size: 35px;
    font-weight: 800;
    margin-bottom: 1rem;
  }
`;
