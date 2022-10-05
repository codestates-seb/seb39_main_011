import React from "react";
import Carousel from "../../organisms/Carousel/Carousel";
import DetailTab from "../../organisms/DetailTab/DetailTab";
import * as S from "./style";

const DetailContent = () => {
  return (
    <S.DetailMainContainer>
      <Carousel />
      <DetailTab />
    </S.DetailMainContainer>
  );
};

export default DetailContent;
