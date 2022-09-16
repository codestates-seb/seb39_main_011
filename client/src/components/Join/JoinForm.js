import React from "react";
import styled from "styled-components";
import LoginInput from "../../stories/LoginInput";
import ButtonPrimary from "../../stories/Button";

const JoinForm = () => {
  return (
    <FormContainer>
      <LogoBox>
        <LogoTitle>BearMello</LogoTitle>
        <span>가자, 캠핑하러! Let’s Camping! 🏕🐻🍡</span>
      </LogoBox>

      <ChooseBox>
        <ButtonPrimary
          width="100%"
          color="#fffff"
          bgc="#D9D9D9"
          border="#D9D9D9"
          radius="5px"
          padding="10px 0"
          margin="10px 0"
          text="고객"
        />
        <ButtonPrimary
          width="100%"
          color="#fffff"
          bgc="#D9D9D9"
          border="#D9D9D9"
          radius="5px"
          padding="10px 0"
          margin="10px 0"
          text="관리자"
        />
      </ChooseBox>

      <InputBox>
        <LoginInput label="이름" />
        <LoginInput label="아이디" />
        <LoginInput label="비밀번호" />
        <LoginInput label="비밀번호 확인" />
        <LoginInput label="이메일" />
        <LoginInput label="연락처" />
      </InputBox>

      <JoinButtonBox>
        <ButtonPrimary
          width="100%"
          color="#fffff"
          bgc="#D9D9D9"
          border="#D9D9D9"
          radius="5px"
          padding="10px 0"
          margin="10px 0"
          text="회원가입"
        />
      </JoinButtonBox>
    </FormContainer>
  );
};

export default JoinForm;

const FormContainer = styled.div`
  width: 450px;
  height: 620px;
  background-color: #fff;
  border-radius: 10px;
  margin: 2rem;
  padding: 3rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
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

const ChooseBox = styled.div`
  width: 100%;
  display: flex;
  gap: 20px;
  padding: 0 2rem;
`;

const InputBox = styled.div`
  width: 100%;
`;

const JoinButtonBox = styled.div`
  width: 100%;
  margin: 20px 0;
`;
