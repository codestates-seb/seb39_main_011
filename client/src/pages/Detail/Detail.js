import React from "react";
import * as S from "./style";
import DetailContent from "../../components/templates/DetailContent/DetailContent";
import DetailAside from "../../components/templates/DetailAside/DetailAside";
import { useMediaQuery } from "react-responsive";
import useScrollTop from "../../utils/useScrollTop";

const Detail = () => {
  const isTabletOrMobile = useMediaQuery({ maxWidth: 820 });
  useScrollTop();

  return (
    <S.DetailContainer>
      <DetailContent />
      {!isTabletOrMobile ? <DetailAside /> : null}
    </S.DetailContainer>
  );
};

export default Detail;
