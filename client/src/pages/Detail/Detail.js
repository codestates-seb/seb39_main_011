import React from "react";
import * as S from "./style";
import DetailContent from "../../components/templates/DetailContent/DetailContent";
import DetailAside from "../../components/templates/DetailAside/DetailAside";
import { useMediaQuery } from "react-responsive";

const Detail = () => {
  const isTabletOrMobile = useMediaQuery({ maxWidth: 820 });

  return (
    <S.DetailContainer>
      <DetailContent />
      {isTabletOrMobile ? null : <DetailAside />}
    </S.DetailContainer>
  );
};

export default Detail;
