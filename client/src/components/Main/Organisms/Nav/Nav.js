import React from "react";
import * as S from "./style";
import { ButtonPrimary } from "../../../../stories/Button";

const Nav = () => {
  return (
    <S.NavContainer>
      <div>
        <ButtonPrimary>가격순</ButtonPrimary>
        <ButtonPrimary>별점순</ButtonPrimary>
        <ButtonPrimary>리뷰순</ButtonPrimary>
        <ButtonPrimary>찜목록</ButtonPrimary>
      </div>
      <div>
        <ButtonPrimary>지역선택</ButtonPrimary>
        <ButtonPrimary>날짜선택</ButtonPrimary>
      </div>
    </S.NavContainer>
  );
};

export default Nav;
