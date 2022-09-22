import React from "react";
import styled from "styled-components";
import LoginForm from "../components/templates/LoginForm";

const Login = () => {
  return (
    <LoginContainer>
      <LoginForm />
    </LoginContainer>
  );
};

export default Login;

const LoginContainer = styled.div`
  width: 940px;
  height: calc(100vh - 54px);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
