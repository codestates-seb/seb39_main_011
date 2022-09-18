import React from "react";
import Carousel from "../../organisms/DetailCarousel/Carousel";
import DetailTab from "../../organisms/DetailTab/DetailTab";
import { ReservationBtn } from "../../../../src/components/atoms/Button";
import * as S from "./style";

const DetailMain = () => {
  return (
    <S.DetailMainContainer>
      <Carousel />
      <DetailTab />
      <ReservationBtn radius={"none"}>예약하기</ReservationBtn>
    </S.DetailMainContainer>
  );
};

export default DetailMain;
