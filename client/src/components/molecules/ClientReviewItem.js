import React from "react";
import styled from "styled-components";
import { BasicBtn } from "../atoms/Button";
import StarRender from "../atoms/StarRender";

const ClientReviewItem = ({ item, review, star, onRemoveReview }) => {
  return (
    <>
      <ItemBox>
        <ContentBox>
          <InnerBox>
            <p>{item.name}</p>
            <StarRender rating={star} />
          </InnerBox>

          <p>{item.date}</p>
          <ImgBox>
            <Img src={item.revPhoto} alt="camping" />
            <Img src={item.revPhoto} alt="camping" />
            <Img src={item.revPhoto} alt="camping" />
          </ImgBox>
          <p>{review}</p>
        </ContentBox>
        <ButtonBox>
          <BasicBtn onClick={() => onRemoveReview(item.id)} width="50px">
            삭제
          </BasicBtn>
          <BasicBtn width="50px">수정</BasicBtn>
        </ButtonBox>
      </ItemBox>
      <hr />
    </>
  );
};

export default ClientReviewItem;

const ItemBox = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 1rem;
`;

const ImgBox = styled.div`
  display: flex;
  justify-content: flex-start;
  gap: 20px;
  padding-left: 1rem;
  margin: 1rem 0;
`;

const ContentBox = styled.div`
  flex: 3;
  font-size: 12px;

  p {
    margin: 7px;
    margin-left: 1rem;
  }
`;

const InnerBox = styled.div`
  display: flex;
  align-items: center;

  p {
    font-weight: bold;
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
  gap: 10px;
`;
