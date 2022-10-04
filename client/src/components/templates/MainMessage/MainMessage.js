import React from "react";
import * as S from "./style";
import { ReactComponent as CampingIcon } from "./../../../svg/camping.svg";

const MainMessage = () => {
  return (
    <S.Container>
      <CampingIcon viewBox="10 80 350 120" />
      <p>등록된 캠핑장이 없습니다.</p>
    </S.Container>
  );
};

export default MainMessage;
