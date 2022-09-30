import React from "react";
import { Link } from "react-router-dom";
import * as S from "./style";
import { ButtonPrimary } from "../../atoms/Button";
import { ReactComponent as ProfilePic } from "../../../svg/profile.svg";

const Navigation = () => {
  return (
    <S.NaviContainer>
      <S.Nav>
        <Link to="/">
          <ButtonPrimary>베어멜로</ButtonPrimary>
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
        <ProfilePic width="50" height="50" fill="var(--main-color-1)" />
      </S.Nav>
    </S.NaviContainer>
  );
};

export default Navigation;
