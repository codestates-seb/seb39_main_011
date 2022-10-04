import React, { useState } from "react";
import { Link } from "react-router-dom";
import * as S from "./style";
import styled from "styled-components";
import { ButtonPrimary } from "../../atoms/Button";
import { ReactComponent as ProfilePic } from "../../../svg/profile.svg";
import { ReactComponent as Logo } from "../../../svg/logo.svg";
import NavDropdown from "../../atoms/NavDropdown";
import { useSelector } from "react-redux";

const Navigation = () => {
  const isLogin = useSelector((state) => state.auth.isLogin);

  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <S.NaviContainer>
      <S.Nav>
        <Link to="/">
          <div>
            <Logo width="180" height="50" viewBox="150 70 190 80" />
          </div>
        </Link>
        <div>
          <Link to="/client/mypage/myinfo">
            <ButtonPrimary>테스트(고객)</ButtonPrimary>
          </Link>
          <Link to="/admin/mypage/myinfo">
            <ButtonPrimary>테스트(관리)</ButtonPrimary>
          </Link>
          <Link to="/login">
            <ButtonPrimary>로그인</ButtonPrimary>
          </Link>
          <Link to="/join">
            <ButtonPrimary>회원가입</ButtonPrimary>
          </Link>
        </div>

        <Box>
          <ProfilePic
            width="50"
            height="50"
            fill={isLogin ? "var(--main-color-1)" : "var(--main-color-2)"}
            onClick={toggleDropdown}
          />
          {isOpen && <NavDropdown isOpen={isOpen} isLogin={isLogin} />}
        </Box>
      </S.Nav>
    </S.NaviContainer>
  );
};

export default Navigation;

const Box = styled.div`
  position: relative;
`;
