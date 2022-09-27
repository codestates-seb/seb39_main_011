import React from "react";
import styled from "styled-components";
import LoginInput from "../atoms/LoginInput";
import { LoginBtn } from "../atoms/Button";
import { ReactComponent as CampingPic } from "../../svg/camping.svg";
const LoginForm = () => {
  return (
    <FormContainer>
      <LogoBox>
        <CampingPic viewBox="0 70 350 150" />
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
        <LoginBtn>로그인</LoginBtn>
      </LoginButtonBox>
      <JoinBox>
        <span>아직 BearMello 회원이 아니신가요?</span>
        <LoginBtn
          bgc="#fff"
          color="var(--main-color-2)"
          hoverBgc="var(--main-color-2)"
        >
          회원가입
        </LoginBtn>
      </JoinBox>
    </FormContainer>
  );
};

export default LoginForm;

const FormContainer = styled.div`
  width: 400px;
  height: 520px;
  background-color: #fff;
  border-radius: 10px;
  padding: 3.5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  margin-bottom: 3rem;

  @media ${(props) => props.theme.loginMobile} {
    width: 90vw;
  }
`;

const LogoBox = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

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
