import React from "react";
import * as S from "./style";
import DetailAside from "../../templates/DetailAside/DetailAside";

const DetailModal = ({
  modalHandler,
  campId,
  campPrice,
  capacity,
  maximumAcceptance,
}) => {
  return (
    <S.ModalContainer>
      <DetailAside
        mobile
        onModalHandler={modalHandler}
        campId={campId}
        campPrice={campPrice}
        capacity={capacity}
        maximumAcceptance={maximumAcceptance}
      />
    </S.ModalContainer>
  );
};

export default DetailModal;
