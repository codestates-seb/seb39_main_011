import React from "react";
import * as S from "./style";
import DetailMain from "../../components/Detail/Organisms/DetailMain/DetailMain";
import Aside from "../../components/Detail/Organisms/Aside/Aside";

const Detail = () => {
  return (
    <S.DetailContainer>
      <DetailMain />
      <Aside />
    </S.DetailContainer>
  );
};

export default Detail;
