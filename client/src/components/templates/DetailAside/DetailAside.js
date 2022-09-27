import React from "react";
import * as S from "./style";
import { ButtonPrimary } from "../../../../src/components/atoms/Button";
import Calendar from "../../organisms/Calendar/Calendar";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { changeDate } from "../../../redux/reducers/calendarSlice";
import CalendarTest from "../../organisms/CalendarTest/CalendarTest";

const DetailAside = () => {
  const { checkIn, checkOut } = useSelector((state) => state.reservationDate);
  const dispatch = useDispatch();

  return (
    <S.AsideContainer>
      {/* <Calendar /> */}
      <CalendarTest />
      <S.Input>
        <label>😎 예약 날짜</label>
        <input type="text" value={`${checkIn} ~ ${checkOut}`}></input>
      </S.Input>
      <S.Input>
        <label>😎 예약자 이름</label>
        <input type="text"></input>
      </S.Input>
      <S.Input>
        <label>😎 예약자 연락처</label>
        <input type="text"></input>
      </S.Input>
      <S.Input>
        <label>😎 예약 수량</label>
        <input type="number" min="0" max="5"></input>
      </S.Input>
      <S.Input>
        <label>😎 가격</label>
        <input type="text"></input>
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
