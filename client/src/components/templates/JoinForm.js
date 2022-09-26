import React, { useState } from "react";
import styled from "styled-components";
import LoginInput from "../atoms/LoginInput";
import ButtonPrimary from "../atoms/Button";
import {
  isIdValid,
  isPwValid,
  ismatch,
  isPhoneValid,
  isEmailValid,
} from "../../utils/validator";

const JoinForm = () => {
  const [inputId, setInputId] = useState("");
  const [validId, setValidId] = useState(false);
  const [inputPw, setInputPw] = useState("");
  const [validPw, setValidPw] = useState(false);
  const [inputPhone, setInputPhone] = useState("");
  const [validPhone, setValidPhone] = useState(false);
  const [inputEmail, setInputEmail] = useState("");
  const [validEmail, setValidEmail] = useState(false);
  const [validMatchPw, setValidMatchPw] = useState(false);

  const idNotValid =
    inputId !== "" && validId === false
      ? "소문자 + 숫자 + 언더바/하이픈 허용 4~20자리"
      : null;
  const pwNotValid =
    inputPw !== "" && validPw === false
      ? "문자, 숫자 1개이상 포함, 8자리 이상"
      : null;
  const matchNotValid =
    inputPw !== "" && validMatchPw === false
      ? "비밀번호가 일치하지 않습니다."
      : null;
  const phoneNotValid =
    inputPhone !== "" && validPhone === false
      ? "- 를 빼고 11자리 입력해주세요"
      : null;
  const emailNotValid =
    inputEmail !== "" && validEmail === false
      ? "이메일이 올바르지 않습니다."
      : null;

  const validHandler = (e) => {
    if (e.target.id === "id") {
      setInputId(e.target.value);
      if (isIdValid(e.target.value)) {
        setValidId(true);
      } else {
        setValidId(false);
      }
    }

    if (e.target.id === "pw") {
      setInputPw(e.target.value);
      if (isPwValid(e.target.value)) {
        setValidPw(true);
      } else {
        setValidPw(false);
      }
    }

    if (e.target.id === "matchPw") {
      if (ismatch(inputPw, e.target.value)) {
        setValidMatchPw(true);
      } else {
        setValidMatchPw(false);
      }
    }

    if (e.target.id === "phone") {
      setInputPhone(e.target.value);
      if (isPhoneValid(e.target.value)) {
        setValidPhone(true);
      } else {
        setValidPhone(false);
      }
    }

    if (e.target.id === "email") {
      setInputEmail(e.target.value);
      if (isEmailValid(e.target.value)) {
        setValidEmail(true);
      } else {
        setValidEmail(false);
      }
    }
  };

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
        <LoginInput
          id="id"
          label="아이디"
          valid={idNotValid}
          onChange={(e) => validHandler(e)}
        />
        <LoginInput
          id="pw"
          label="비밀번호"
          valid={pwNotValid}
          onChange={(e) => validHandler(e)}
        />
        <LoginInput
          id="matchPw"
          label="비밀번호 확인"
          valid={matchNotValid}
          onChange={(e) => validHandler(e)}
        />
        <LoginInput
          id="email"
          label="이메일"
          valid={emailNotValid}
          onChange={(e) => validHandler(e)}
        />
        <LoginInput
          id="phone"
          label="연락처"
          valid={phoneNotValid}
          onChange={(e) => validHandler(e)}
        />
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
  height: 620px;
  background-color: #fff;
  border-radius: 10px;
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
