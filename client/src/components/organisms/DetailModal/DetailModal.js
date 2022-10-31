import React from "react";
import * as S from "./style";
import DetailAside from "../../templates/DetailAside/DetailAside";

const DetailModal = ({ modalHandler, campId }) => {
  return (
    <S.ModalContainer>
      <DetailAside mobile onModalHandler={modalHandler} campId={campId} />
    </S.ModalContainer>
  );
};

export default DetailModal;
