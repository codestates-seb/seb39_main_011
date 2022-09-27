import React, { useState } from "react";
import styled from "styled-components";
import LoginInput from "../atoms/LoginInput";
import { LoginBtn } from "../atoms/Button";
import {
  isIdValid,
  isPwValid,
  isPhoneValid,
  isEmailValid,
} from "../../utils/validator";

const JoinForm = () => {
  const [isTab, setIsTab] = useState(0);
  const [inputId, setInputId] = useState("");
  const [validId, setValidId] = useState(false);
  const [inputPw, setInputPw] = useState("");
  const [validPw, setValidPw] = useState(false);
  const [inputPhone, setInputPhone] = useState("");
  const [validPhone, setValidPhone] = useState(false);
  const [inputEmail, setInputEmail] = useState("");
  const [validEmail, setValidEmail] = useState(false);

  const tabArr = [{ name: "client" }, { name: "admin" }];

  const selectTabHandler = (index) => {
    setIsTab(index);
  };

  const idNotValid =
    inputId !== "" && validId === false
      ? "소문자 + 숫자 + 언더바/하이픈 허용 4~20자리"
      : null;
  const pwNotValid =
    inputPw !== "" && validPw === false
      ? "문자, 숫자 1개이상 포함, 8자리 이상"
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
      <ChooseBox>
        {tabArr.map((item, idx) => (
          <LoginBtn
            key={idx}
            className={`${isTab === idx ? "focused" : ""} `}
            radius={item.name === "client" ? "7px 0 0 0" : "0 7px 0 0"}
            color="var(--main-color-1)"
            bgc="#fff"
            border="var(--main-color-1)"
            onClick={() => selectTabHandler(idx)}
          >
            {item.name === "client" ? "고객" : "관리자"}
          </LoginBtn>
        ))}
      </ChooseBox>

      <ContentBox>
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
          <LoginBtn>회원가입</LoginBtn>
        </JoinButtonBox>
      </ContentBox>
    </FormContainer>
  );
};

export default JoinForm;

const FormContainer = styled.div`
  width: 400px;
  height: 520px;
  background-color: #fff;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px;
  margin-bottom: 3rem;

  @media ${(props) => props.theme.loginMobile} {
    width: 90vw;
  }
`;

const ChooseBox = styled.div`
  width: 100%;
  display: flex;
  background-color: aliceblue;

  .focused {
    background-color: var(--main-color-1);
    color: #fff;
  }
`;

const ContentBox = styled.div`
  width: 100%;
  padding: 1rem 3.5rem;
`;

const InputBox = styled.div``;

const JoinButtonBox = styled.div`
  width: 100%;
  margin-top: 0.5rem;
  margin-bottom: 1.5rem;
`;
