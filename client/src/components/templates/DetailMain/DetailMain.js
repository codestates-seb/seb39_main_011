import React, { useState } from "react";
import Carousel from "../../organisms/DetailCarousel/Carousel";
import DetailTab from "../../organisms/DetailTab/DetailTab";
import DetailModal from "../../organisms/DetailModal/DetailModal";
import { ReservationBtn } from "../../../../src/components/atoms/Button";
import * as S from "./style";

const DetailMain = () => {
  const [modal, setModal] = useState(false);
  const handleModal = () => {
    setModal(!modal);
  };

  return (
    <S.DetailMainContainer>
      {modal ? <DetailModal handleModal={handleModal} /> : null}
      <Carousel />
      <DetailTab />
      <ReservationBtn radius={"none"} onClick={handleModal}>
        예약하기
      </ReservationBtn>
    </S.DetailMainContainer>
  );
};

export default DetailMain;
