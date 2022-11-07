import React from "react";
import styled from "styled-components";
import { ReservationBtn } from "./Button";
import IconText from "./IconText";
import { instance } from "../../apis/instance";

const Modoal = (props) => {
  const userId = localStorage.getItem("userId");
  const reservationInfo = { ...props.input };
  reservationInfo.userId = userId;
  reservationInfo.price = props.input.price.toString();
  reservationInfo.date = props.input.checkIn
    .split(" ")
    .join("")
    .replace(/\./g, "-")
    .slice(0, -1);
  delete reservationInfo.checkIn;
  delete reservationInfo.checkOut;
  const test = reservationInfo.date.split("-");
  if (test[2] < 10) {
    test[2] = `0${test[2]}`;
  }
  reservationInfo.date = test.join("-");

  const reservationHandler = async () => {
    try {
      const res = await instance.post(`/detail`, reservationInfo);
      console.log(res.data);
      alert("예약에 성공하였습니다.");
    } catch (error) {
      console.log(error);
      alert("예약 실패하였습니다.");
    }
    window.location.reload();
  };

  return (
    <Background>
      <Modal>
        <IconText>체크인: {props.input.checkIn} 14:00</IconText>
        <IconText>체크아웃: {props.input.checkOut} 12:00</IconText>
        <IconText>이름: {props.input.name}</IconText>
        <IconText>연락처: {props.input.phone}</IconText>
        <IconText>가격: {props.input.price}원</IconText>
        <IconText>예약수량: {props.input.quantity}</IconText>
        <IconText>요청사항: {props.input.note}</IconText>
        <Btns>
          <ReservationBtn width="50%" onClick={reservationHandler}>
            예약하기
          </ReservationBtn>
          <ReservationBtn width="50%" onClick={props.onModalHandler}>
            취소하기
          </ReservationBtn>
        </Btns>
      </Modal>
    </Background>
  );
};

const Background = styled.div`
  position: fixed;
  z-index: 999;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.4);
  display: grid;
  place-items: center;
  line-height: 1.2rem;
`;

const Modal = styled.div`
  width: 300px;
  padding: 10px;
  border-radius: 5px;
  background-color: #fff;
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 5px;

  > span {
    color: var(--main-color-2);
    font-size: 20px;
    font-weight: 700;
    cursor: pointer;
    position: absolute;
    right: 5px;
    top: 5px;
  }
`;

const Btns = styled.div`
  width: 100%;
`;

export default Modoal;
