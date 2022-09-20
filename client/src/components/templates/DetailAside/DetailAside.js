import React from "react";
import * as S from "./style";
import { ButtonPrimary } from "../../../../src/components/atoms/Button";
import Calendar from "../../organisms/Calendar/Calendar";
import { useSelector } from "react-redux";

const DetailAside = () => {
  const { checkIn, checkOut } = useSelector((state) => state.reservationDate);

  return (
    <S.AsideContainer>
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
    </S.AsideContainer>
  );
};

export default DetailAside;
