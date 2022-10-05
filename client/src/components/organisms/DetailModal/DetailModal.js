import React from "react";
import * as S from "./style";
import DetailAside from "../../templates/DetailAside/DetailAside";

const DetailModal = ({ handleModal }) => {
  return (
    <S.ModalContainer>
      <div className="closeBtn" onClick={handleModal}>
        X
      </div>
      <DetailAside mobile />
    </S.ModalContainer>
  );
};

export default DetailModal;
