import React from "react";
import styled from "styled-components";
import { BasicBtn } from "../atoms/Button";
import StarRender from "../atoms/StarRender";
import CommentItem from "./CommentItem";

const AdminReviewItem = ({ item, openReviewHandler, isOpen }) => {
  const onOpen = () => {
    openReviewHandler(item.id);
  };
  return (
    <>
      <ItemBox>
        <ContentBox>
          <StarBox>
            <StarRender />
          </StarBox>
          <div>
            <p>{item.writer}</p>
            <p>{item.date}</p>
          </div>
          <p>{item.review}</p>
          <ImgBox>
            <Img src={item.revPhoto} alt="camping" />
            <Img src={item.revPhoto} alt="camping" />
            <Img src={item.revPhoto} alt="camping" />
          </ImgBox>
        </ContentBox>
        <ButtonBox>
          <BasicBtn onClick={onOpen}>댓글 달기</BasicBtn>
        </ButtonBox>
      </ItemBox>
      <hr />
      {isOpen && <CommentItem />}
    </>
  );
};

export default AdminReviewItem;

const ItemBox = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 1rem;
`;

const ImgBox = styled.div`
  display: flex;
  justify-content: flex-start;
  gap: 20px;
  margin: 1rem 0;
`;

const ContentBox = styled.div`
  flex: 3;
  font-size: 12px;
  margin-left: 1rem;

  p {
    margin: 7px 10px 0 0;
  }

  div {
    display: flex;
  }
`;

const StarBox = styled.div``;

const Img = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 10px;
`;

const ButtonBox = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  flex: 1;
`;
