import React from "react";
import Carousel from "../../organisms/DetailCarousel/Carousel";
import DetailTab from "../../organisms/DetailTab/DetailTab";
import * as S from "./style";

const DetailMain = () => {
  return (
    <S.DetailMainContainer>
      <Carousel />
      <DetailTab />
    </S.DetailMainContainer>
  );
};

export default DetailMain;
