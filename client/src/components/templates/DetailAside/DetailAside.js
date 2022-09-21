import React from "react";
import * as S from "./style";
import { ButtonPrimary } from "../../../../src/components/atoms/Button";
import Calendar from "../../organisms/Calendar/Calendar";
import { useSelector } from "react-redux";
import styled from "styled-components";

const DetailAside = () => {
  const { checkIn, checkOut } = useSelector((state) => state.reservationDate);

  return (
    <S.AsideContainer>
      <Calendar />
      <div>
        예약 날짜: {checkIn} ~ {checkOut}
      </div>
      <Input>
        <label>예약자 이름:</label>
        <input type="text"></input>
      </Input>
      <Input>
        <label>예약자 연락처:</label>
        <input type="text"></input>
      </Input>
      <div>가격: 50,000 원</div>
      <div>예약 수량: 1</div>
      <div>요청 사항</div>
      <textarea />
      <ButtonPrimary>예약하기</ButtonPrimary>
    </S.AsideContainer>
  );
};

const Input = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;

  > input {
    border: none;
    border-bottom: 1px solid #e5e5e5;
    width: 100px;
  }
`;

export default DetailAside;
