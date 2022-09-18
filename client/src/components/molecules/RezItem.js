import React from "react";
import styled from "styled-components";
import ButtonPrimary from "../atoms/Button";

const RezItem = ({ item }) => {
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
            width="70px"
            height="35px"
            bgc="#ADADAD"
            color="#fff"
            border="#ADADAD"
            radius="5px"
            padding="0 10px"
            margin="10px 0"
            fontSize="13px"
            fontWeight="700"
            text="예약취소"
            hoverbgc="#989898"
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
