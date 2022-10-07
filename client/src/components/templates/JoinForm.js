import React, { useState, useRef } from "react";
import styled from "styled-components";
import LoginInput from "../atoms/LoginInput";
import { LoginBtn, LoginTabBtn } from "../atoms/Button";
import { useNavigate } from "react-router-dom";
import {
  isIdValid,
  isPwValid,
  isPhoneValid,
  isEmailValid,
} from "../../utils/validator";
import axios from "axios";

const JoinForm = () => {
  const navigate = useNavigate();

  const nameRef = useRef();
  const idRef = useRef();
  const pwdRef = useRef();
  const emailRef = useRef();
  const phoneRef = useRef();

  const [isTab, setIsTab] = useState(0);
  const tabArr = [{ name: "USER" }, { name: "ADMIN" }];

  const [name, setName] = useState("");
  const [id, setId] = useState("");
  const [validId, setValidId] = useState(false);
  const [pwd, setPwd] = useState("");
  const [validPwd, setValidPwd] = useState(false);
  const [email, setEmail] = useState("");
  const [validEmail, setValidEmail] = useState(false);
  const [phone, setPhone] = useState("");
  const [validPhone, setValidPhone] = useState(false);
  const [role, setRole] = useState("USER");

  const selectTabHandler = (index) => {
    setIsTab(index);
    if (index === 0) {
      setRole("USER");
    } else if (index === 1) {
      setRole("ADMIN");
    }
  };

  const idNotValid =
    id !== "" && !validId
      ? "소문자 + 숫자 + 언더바/하이픈 허용 4~20자리"
      : null;

  const pwNotValid =
    pwd !== "" && !validPwd && "문자, 숫자 1개이상 포함, 8자리 이상";

  const emailNotValid =
    email !== "" && !validEmail && "이메일 형식이 올바르지 않습니다.";

  const phoneNotValid =
    phone !== "" && !validPhone && "- 를 빼고 숫자 11자리 입력해주세요";

  const validHandler = (e) => {
    const { name, value } = e.target;

    if (name === "id") {
      setId(e.target.value);
      if (isIdValid(e.target.value)) {
        setValidId(true);
      } else {
        setValidId(false);
      }
    }

    if (name === "pwd") {
      setPwd(value);
      isPwValid(value) && setValidPwd(true);
    }

    if (name === "email") {
      setEmail(value);
      isEmailValid(value) && setValidEmail(true);
    }

    if (name === "phone") {
      setPhone(value);
      isPhoneValid(value) && setValidPhone(true);
    }
  };

  const handleSubmit = async (e) => {
    if (name.length < 1) {
      nameRef.current.focus();
      return;
    }

    if (id.length < 1) {
      idRef.current.focus();
      return;
    }

    if (pwd.length < 1) {
      pwdRef.current.focus();
      return;
    }

    if (email.length < 1) {
      emailRef.current.focus();
      return;
    }

    if (phone.length < 1) {
      phoneRef.current.focus();
      return;
    }

    e.preventDefault();

    try {
      const response = await axios.post(
        `${process.env.REACT_APP_API_URL}/user/join`,
        {
          username: id,
          name,
          password: pwd,
          email,
          phone,
          role,
        }
      );
      navigate("/login");
      alert("베어멜로의 회원이 되신 것을 환영합니다!");

      window.location.reload();
    } catch (error) {
      if ((res) => res.data.status === 500) {
        alert("회원가입에 실패하셨습니다.");
      }
    }

    setName("");
    setId("");
    setPwd("");
    setEmail("");
    setPhone("");
  };

  return (
    <FormContainer>
      <ChooseBox>
        {tabArr.map((item, idx) => (
          <LoginTabBtn
            key={idx}
            className={`${isTab === idx ? "focused" : ""} `}
            radius={item.name === "USER" ? "7px 0 0 0" : "0 7px 0 0"}
            onClick={() => selectTabHandler(idx)}
          >
            {item.name === "USER" ? "고객" : "관리자"}
          </LoginTabBtn>
        ))}
      </ChooseBox>

      <ContentBox>
        <InputBox>
          <LoginInput
            label="이름"
            name="name"
            innerRef={nameRef}
            onChange={(e) => setName(e.target.value)}
          />
          <LoginInput
            label="아이디"
            name="id"
            innerRef={idRef}
            onChange={validHandler}
            valid={idNotValid}
          />
          <LoginInput
            label="비밀번호"
            type="password"
            name="pwd"
            innerRef={pwdRef}
            onChange={validHandler}
            valid={pwNotValid}
          />
          <LoginInput
            label="이메일"
            name="email"
            innerRef={emailRef}
            onChange={validHandler}
            valid={emailNotValid}
          />
          <LoginInput
            label="연락처"
            name="phone"
            innerRef={phoneRef}
            onChange={validHandler}
            valid={phoneNotValid}
          />
        </InputBox>

        <JoinButtonBox>
          <LoginBtn onClick={handleSubmit}>회원가입</LoginBtn>
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
    background-color: var(--main-color-2);
    color: #fff;
  }
`;

const ContentBox = styled.div`
  width: 100%;
  padding: 1rem 3.5rem;

  @media ${(props) => props.theme.loginMobile} {
    padding: 1rem 2rem;
  }
`;

const InputBox = styled.div``;

const JoinButtonBox = styled.div`
  width: 100%;
  margin-top: 0.5rem;
  margin-bottom: 1.5rem;
`;
