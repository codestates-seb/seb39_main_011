import React from "react";
import * as S from "./style";
import DetailMain from "../../components/templates/DetailMain/DetailMain";
import DetailAside from "../../components/templates/DetailAside/DetailAside";

const Detail = () => {
  return (
    <S.DetailContainer>
      <DetailMain />
      <DetailAside />
    </S.DetailContainer>
  );
};

export default Detail;
