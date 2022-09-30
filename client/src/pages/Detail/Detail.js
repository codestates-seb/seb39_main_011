import React from "react";
import * as S from "./style";
import DetailContent from "../../components/templates/DetailContent/DetailContent";
import DetailAside from "../../components/templates/DetailAside/DetailAside";

const Detail = () => {
  return (
    <S.DetailContainer>
      <DetailContent />
      <DetailAside />
    </S.DetailContainer>
  );
};

export default Detail;
