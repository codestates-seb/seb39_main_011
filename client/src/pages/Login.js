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
