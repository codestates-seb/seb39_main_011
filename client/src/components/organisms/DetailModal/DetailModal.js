import React from "react";
import * as S from "./style";
import { ButtonPrimary } from "../../atoms/Button";
import Calendar from "../Calendar/Calendar";
import { useSelector } from "react-redux";

const DetailModal = ({ handleModal }) => {
  const { checkIn, checkOut } = useSelector((state) => state.reservationDate);

  return (
    <S.ModalContainer>
      <S.Modal>
        <div className="closeBtn" onClick={handleModal}>
          X
        </div>

        <Calendar />
        <div>
          예약 날짜: {checkIn} ~ {checkOut}
        </div>
        <div>예약자 이름: 김코딩</div>
        <div>예약자 연락처: 01012345678</div>
        <div>가격: 50,000 원</div>
        <div>예약 수량: 1</div>
        <div>요청 사항</div>
        <textarea />
        <ButtonPrimary>예약하기</ButtonPrimary>
      </S.Modal>
    </S.ModalContainer>
  );
};

export default DetailModal;
