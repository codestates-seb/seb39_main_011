import React from "react";
import * as S from "./style";
import { ButtonPrimary } from "../../../../src/components/atoms/Button";
import { useSelector } from "react-redux";
import CalendarTTest from "../../organisms/CalendarTTest/CalendarTTest.js";

const DetailAside = () => {
  const reservation = useSelector((state) => state.reservationDate);

  return (
    <S.AsideContainer>
      <CalendarTTest />
      <S.Input>
        <label>😎 예약 날짜</label>
        <input
          type="text"
          disabled
          value={
            reservation.from && reservation.to
              ? `${reservation.from.toLocaleDateString()} - ${reservation.to.toLocaleDateString()}`
              : ""
          }
        />
      </S.Input>
      <S.Input>
        <label>😎 예약자 이름</label>
        <input type="text" />
      </S.Input>
      <S.Input>
        <label>😎 예약자 연락처</label>
        <input type="text" />
      </S.Input>
      <S.Input>
        <label>😎 예약 수량</label>
        <input type="number" min="0" max="5" />
      </S.Input>
      <S.Input>
        <label>😎 가격</label>
        <input type="text" />
      </S.Input>
      <S.Input flex={"column"}>
        <label>😎 요청 사항</label>
        <textarea />
      </S.Input>
      <ButtonPrimary
        bgc={"#AD8B73"}
        color={"#fff"}
        radius={"5px"}
        padding={"10px"}
        fontWeight={"700"}
        fontSize={"14px"}
      >
        예약하기
      </ButtonPrimary>
    </S.AsideContainer>
  );
};

export default DetailAside;
