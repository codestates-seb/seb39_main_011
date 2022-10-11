import React, { useState, useRef } from "react";
import styled from "styled-components";
import LoginInput from "../atoms/LoginInput";
import { LoginBtn, StrButton } from "../atoms/Button";
import { ReactComponent as CampingPic } from "../../svg/camping.svg";
import CheckBox from "../atoms/CheckBox";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { login } from "../../redux/reducers/authSlice";

const LoginForm = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const idRef = useRef();
  const pwdRef = useRef();

  const [user, setUser] = useState({
    id: "",
    pwd: "",
  });

  const { id, pwd } = user;

  const handleChangeUser = (e) => {
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        `${process.env.REACT_APP_API_URL}/user/login`,
        {
          username: id,
          password: pwd,
        }
      );

      localStorage.setItem("userId", response.data.userId);
      localStorage.setItem("role", response.data.role);
      sessionStorage.setItem("Token", response.headers.authorization);
      dispatch(login());
      navigate("/");
      alert("로그인에 성공하셨습니다.");
    } catch (error) {
      if ((res) => res.data.status === 500 || res.data.status === 404) {
        alert("로그인에 실패하셨습니다.");
        window.location.reload();
      }
    }

    if (id.length < 1) {
      idRef.current.focus();
      return;
    }

    if (pwd.length < 1) {
      pwdRef.current.focus();
      return;
    }

    setUser({ id: "", pwd: "" });
  };

  const handleAdminSubmit = async () => {
    const response = await axios.post(
      `${process.env.REACT_APP_API_URL}/user/login`,
      {
        username: "admintest",
        password: "admintest123",
      }
    );

    localStorage.setItem("userId", response.data.userId);
    localStorage.setItem("role", response.data.role);
    sessionStorage.setItem("Token", response.headers.authorization);
    dispatch(login());
    navigate("/");
    alert("관리자용 게스트 모드로 로그인에 성공하셨습니다.");
  };

  const handleClientSubmit = async () => {
    const response = await axios.post(
      `${process.env.REACT_APP_API_URL}/user/login`,
      {
        username: "customtest123",
        password: "customtest123",
      }
    );

    localStorage.setItem("userId", response.data.userId);
    localStorage.setItem("role", response.data.role);
    sessionStorage.setItem("Token", response.headers.authorization);
    dispatch(login());
    navigate("/");
    alert("고객용 게스트 모드로 로그인에 성공하셨습니다.");
  };

  return (
    <FormContainer>
      <LogoBox>
        <CampingPic viewBox="10 80 350 120" />
      </LogoBox>
      <InputBox>
        <LoginInput
          label="아이디"
          name="id"
          innerRef={idRef}
          onChange={handleChangeUser}
        />
        <LoginInput
          type="password"
          label="비밀번호"
          innerRef={pwdRef}
          name="pwd"
          value={pwd}
          onChange={handleChangeUser}
        />
      </InputBox>
      <SubBox>
        <CheckBox label="로그인 상태 유지" />
        <div onClick={() => alert("서비스 준비 중입니다.")}>
          아이디/비밀번호 찾기
        </div>
      </SubBox>
      <LoginButtonBox>
        <LoginBtn onClick={handleSubmit}>로그인</LoginBtn>
      </LoginButtonBox>
      <JoinBox>
        <span>아직 BearMello 회원이 아니신가요?</span>
        <LoginBtn
          bgc="#fff"
          color="var(--main-color-3)"
          onClick={() => navigate("/join")}
        >
          회원가입
        </LoginBtn>
      </JoinBox>

      <GuestBox>
        <StrButton onClick={handleAdminSubmit} fontSize="12px" height="35px">
          관리자용 Guest Login
        </StrButton>
        <StrButton onClick={handleClientSubmit} fontSize="12px" height="35px">
          고객용 Guest Login
        </StrButton>
      </GuestBox>
    </FormContainer>
  );
};

export default LoginForm;

const FormContainer = styled.div`
  width: 380px;
  height: 505px;
  background-color: #fff;
  border-radius: 10px;
  padding: 3rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  box-shadow: rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px;
  margin-bottom: 3rem;

  @media ${(props) => props.theme.loginMobile} {
    width: 90vw;
    padding: 2rem;
  }
`;

const LogoBox = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const InputBox = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-top: 10px;
`;

const SubBox = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 12px;
  margin-bottom: 1rem;
  color: #8f8f8f;
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
  margin-top: 0.5rem;
  margin-bottom: 0.4rem;

  span {
    font-size: 12px;
    color: var(--main-color-2);
    margin-bottom: 10px;
  }
`;

const GuestBox = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
  gap: 5px;
  margin: 10px 0;
`;
