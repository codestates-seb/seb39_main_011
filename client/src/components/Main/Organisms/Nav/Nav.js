import React from "react";
import * as UI from "./style";
import { ButtonPrimary } from "../../../../stories/Button";

const Nav = () => {
  return (
    <UI.Container>
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
    </UI.Container>
  );
};

export default Nav;
