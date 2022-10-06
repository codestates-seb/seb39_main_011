import React from "react";
import * as S from "./style";
import DetailAside from "../../templates/DetailAside/DetailAside";

const DetailModal = ({ modalHandler }) => {
  return (
    <S.ModalContainer>
      <DetailAside mobile onModalHandler={modalHandler} />
    </S.ModalContainer>
  );
};

export default DetailModal;
