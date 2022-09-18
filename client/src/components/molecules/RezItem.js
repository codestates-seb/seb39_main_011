import React, { useState } from "react";
import styled from "styled-components";
import ButtonPrimary from "../atoms/Button";
import { useLocation } from "react-router-dom";

const RezItem = ({ item }) => {
  const { pathname } = useLocation();

  const [isOpen, setIsOpen] = useState(false);

  const openReviewHandler = () => {
    setIsOpen(!isOpen);
    alert("open!!");
    console.log(isOpen);
  };

  return (
    <>
      <ItemBox>
        <ImgBox>
          <Img src={item.photo} alt="camping" />
        </ImgBox>
        <ContentBox>
          <p>캠핑장: {item.name}</p>
          <p>연락처: {item.phone}</p>
          <p>이용 날짜: {item.date}</p>
          <p>결제 금액: {item.price}</p>
          <p>요청 사항: {item.note}</p>
        </ContentBox>
        <ButtonBox>
          <ButtonPrimary
            width="85px"
            height="35px"
            bgc="#ADADAD"
            color="#fff"
            border="#ADADAD"
            radius="5px"
            padding="0 10px"
            margin="10px 0"
            fontSize="13px"
            fontWeight="700"
            text={
              pathname === "/client/mypage/rez" ? "예약취소" : "리뷰 남기기"
            }
            hoverbgc="#989898"
            onClick={openReviewHandler}
          />
        </ButtonBox>
      </ItemBox>
      <hr />
    </>
  );
};

export default RezItem;

const ItemBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
`;

const ImgBox = styled.div`
  display: flex;
  justify-content: center;
  flex: 1;
`;

const ContentBox = styled.div`
  flex: 3;
  font-size: 12px;

  p {
    margin: 7px;
    margin-left: 1rem;
  }
`;

const Img = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 10px;
`;

const ButtonBox = styled.div`
  display: flex;
  justify-content: flex-end;
  flex: 1;
  margin-right: 1rem;
`;
