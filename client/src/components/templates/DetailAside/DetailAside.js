import React, { useState, useEffect } from "react";
import * as S from "./style";
import { ButtonPrimary } from "../../../../src/components/atoms/Button";
import { useSelector } from "react-redux";
import Calendar from "../../organisms/Calendar/Calendar.js";
import InputLabel from "../../atoms/InputLabel";

import { ReactComponent as CalendarIcon } from "./../../../svg/calendar.svg";
import { ReactComponent as UserIcon } from "./../../../svg/profile.svg";
import { ReactComponent as PhoneIcon } from "./../../../svg/phone.svg";
import { ReactComponent as CountIcon } from "./../../../svg/revcount.svg";
import { ReactComponent as CoinIcon } from "./../../../svg/coin.svg";
import { ReactComponent as RequestIcon } from "./../../../svg/review.svg";

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
    console.log(reservationInput);
  };

  const errorPrevention = () => {};
  return (
    <S.AsideContainer>
      <Calendar />
      <form onSubmit={submitHandler}>
        <InputLabel
          icon={<CalendarIcon width="20" height="20" />}
          type="text"
          id="reservationDate"
          name="reservationDate"
          value={
            reservation.from && reservation.to
              ? `${reservation.from.toLocaleDateString()} - ${reservation.to.toLocaleDateString()}`
              : ""
          }
          disable="true"
          onChange={errorPrevention}
        >
          예약 날짜
        </InputLabel>
        <InputLabel
          icon={<UserIcon width="20" height="20" fill="var(--main-color-0)" />}
          type="text"
          id="reservationName"
          name="reservationName"
          onChange={nameHandler}
        >
          예약자 이름
        </InputLabel>
        <InputLabel
          icon={<PhoneIcon width="20" height="20" />}
          type="text"
          id="reservationPhone"
          name="reservationPhone"
          onChange={phoneHandler}
        >
          예약자 연락처
        </InputLabel>
        <InputLabel
          icon={<CountIcon width="20" height="20" />}
          type="number"
          id="reservationCount"
          name="reservationCount"
          onChange={quantityHandler}
        >
          예약 수량
        </InputLabel>
        <InputLabel
          icon={<CoinIcon width="20" height="20" />}
          type="number"
          id="reservationPrice"
          name="reservationPrice"
          onChange={priceHandler}
        >
          예약 가격
        </InputLabel>
        <InputLabel
          icon={
            <RequestIcon width="20" height="20" fill="var(--main-color-0)" />
          }
          on="false"
          id="reservationRequest"
          name="reservationRequest"
          textarea
          onChange={requestHandler}
        >
          요청 사항
        </InputLabel>
        <ButtonPrimary
          bgc={"var(--main-color-1)"}
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
