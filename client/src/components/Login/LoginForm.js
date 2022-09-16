import React from "react";
import styled from "styled-components";
import LoginInput from "../Common/ui/LoginInput";
import { LoginButton } from "../Common/ui/Button";

const LoginForm = () => {
  return (
    <FormContainer>
      <LogoBox>
        <LogoTitle>BearMello</LogoTitle>
        <span>가자, 캠핑하러! Let’s Camping! 🏕🐻🍡</span>
      </LogoBox>

      <InputBox>
        <LoginInput label="아이디" />
        <LoginInput label="비밀번호" />
      </InputBox>

      <SubBox>
        <div>로그인 상태 유지</div>
        <div>아이디/비밀번호 찾기</div>
      </SubBox>

      <LoginButtonBox>
        <LoginButton>로그인</LoginButton>
      </LoginButtonBox>

      <JoinBox>
        <span>아직 BearMello 회원이 아니신가요?</span>
        <LoginButton background="#fff">회원가입</LoginButton>
      </JoinBox>
    </FormContainer>
  );
};

export default LoginForm;

const FormContainer = styled.div`
  width: 420px;
  height: 550px;
  background-color: #fff;
  margin: 2rem;
  padding: 3rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const LogoBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 2rem;

  span {
    font-size: 15px;
  }
`;

const LogoTitle = styled.h1`
  font-size: 40px;
  font-weight: bold;
  margin: 10px;
`;
const InputBox = styled.div`
  width: 100%;
`;

const SubBox = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  font-size: 12px;
  margin: 1.5rem 0;
`;

const LoginButtonBox = styled.div`
  width: 100%;
  margin-bottom: 1rem;
`;

const JoinBox = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 1rem;

  span {
    font-size: 12px;
  }
`;
