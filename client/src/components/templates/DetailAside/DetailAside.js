import React, { useState, useEffect } from "react";
import * as S from "./style";
import { ButtonPrimary } from "../../../../src/components/atoms/Button";
import { useSelector } from "react-redux";
import CalendarTTest from "../../organisms/CalendarTTest/CalendarTTest.js";

const DetailAside = () => {
  const reservation = useSelector((state) => state.reservationDate);
  const [reservationInput, setReservationInput] = useState({
    name: "",
    phone: "",
    quantity: "",
    price: "",
    request: "",
    checkIn: "",
    checkOut: "",
  });

  console.log(reservationInput);

  useEffect(() => {
    setReservationInput((preState) => {
      return {
        ...preState,
        checkIn: reservation.from?.toLocaleDateString(),
        checkOut: reservation.to?.toLocaleDateString(),
      };
    });
  }, [reservation.from, reservation.to]);

  const nameHandler = (event) => {
    setReservationInput((preState) => {
      return {
        ...preState,
        name: event.target.value,
      };
    });
  };
  const phoneHandler = (event) => {
    setReservationInput((preState) => {
      return {
        ...preState,
        phone: event.target.value,
      };
    });
  };
  const quantityHandler = (event) => {
    setReservationInput((preState) => {
      return {
        ...preState,
        quantity: event.target.value,
      };
    });
  };
  const priceHandler = (event) => {
    setReservationInput((preState) => {
      return {
        ...preState,
        price: event.target.value,
      };
    });
  };
  const requestHandler = (event) => {
    setReservationInput((preState) => {
      return {
        ...preState,
        request: event.target.value,
      };
    });
  };

  const submitHandler = (event) => {
    event.preventDefault();
  };

  return (
    <S.AsideContainer>
      <CalendarTTest />
      <form onSubmit={submitHandler}>
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
          <label htmlFor="name">😎 예약자 이름</label>
          <input id="name" type="text" onChange={nameHandler} required />
        </S.Input>
        <S.Input>
          <label htmlFor="phone">😎 예약자 연락처</label>
          <input id="phone" type="text" onChange={phoneHandler} required />
        </S.Input>
        <S.Input>
          <label htmlFor="quantity">😎 예약 수량</label>
          <input
            id="quantity"
            type="number"
            min="0"
            max="5"
            onChange={quantityHandler}
            required
          />
        </S.Input>
        <S.Input>
          <label htmlFor="price">😎 가격</label>
          <input id="price" type="text" onChange={priceHandler} required />
        </S.Input>
        <S.Input flex={"column"}>
          <label htmlFor="request">😎 요청 사항</label>
          <textarea id="request" onChange={requestHandler} required />
        </S.Input>
        <ButtonPrimary
          bgc={"#AD8B73"}
          color={"#fff"}
          radius={"5px"}
          padding={"10px"}
          fontWeight={"700"}
          fontSize={"14px"}
          type={"submit"}
        >
          예약하기
        </ButtonPrimary>
      </form>
    </S.AsideContainer>
  );
};

export default DetailAside;
