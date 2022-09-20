import React from "react";
import styled from "styled-components";
import { BasicBtn } from "../atoms/Button";
import { useLocation } from "react-router-dom";
import PostReview from "../atoms/PostReview";

const RezItem = ({ item, openReviewHandler, isOpen, idx }) => {
  const { pathname } = useLocation();
  console.info("idx", idx);

  const onOpen = () => {
    openReviewHandler(item.id);
  };

  return (
    <div>
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
          <BasicBtn onClick={pathname === "/client/mypage/rez" ? null : onOpen}>
            {pathname === "/client/mypage/pastrez"
              ? "리뷰 남기기"
              : "예약 취소"}
          </BasicBtn>
        </ButtonBox>
      </ItemBox>

      <hr />

      {/* {isOpen && <PostReview />} */}
    </div>
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
