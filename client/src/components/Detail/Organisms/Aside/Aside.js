import React from "react";
import styled from "styled-components";
import { ButtonPrimary } from "../../../../stories/Button";

const Aside = () => {
  return (
    <AsideContainer>
      <Calendar />
      <div>예약 날짜: 22.08.12 ~ 22.08.13</div>
      <div>체크인: 15:00</div>
      <div>체크아웃: 12:00</div>
      <div>가격: 50,000 원</div>
      <div>예약 수량: 1</div>
      <div>요청 사항</div>
      <textarea />
      <ButtonPrimary>예약하기</ButtonPrimary>
    </AsideContainer>
  );
};

const AsideContainer = styled.aside`
  width: 300px;
  padding: 30px;
  background-color: #ffffff;

  display: flex;
  flex-direction: column;
  gap: 30px;

  > textarea {
    width: 100%;
    height: 100px;
    border: 1px solid #e5e5e5;
  }
`;

const Calendar = styled.div`
  width: 300px;
  height: 280px;
  border: 1px solid red;
  margin: -30px -30px 0px -30px;
`;

export default Aside;
