import React from "react";
import styled from "styled-components";
import ButtonPrimary from "../atoms/Button";
import StarRender from "../atoms/StarRender";

const ReviewItem = ({ item, onClick }) => {
  return (
    <>
      <ItemBox>
        <ContentBox>
          <InnerBox>
            <p>{item.name}</p>
            <StarRender />
          </InnerBox>

          <p>{item.date}</p>
          <ImgBox>
            <Img src={item.revPhoto} alt="camping" />
            <Img src={item.revPhoto} alt="camping" />
            <Img src={item.revPhoto} alt="camping" />
          </ImgBox>
          <p>{item.review}</p>
        </ContentBox>
        <ButtonBox>
          <ButtonPrimary
            width="50px"
            height="35px"
            bgc="#ADADAD"
            color="#fff"
            border="#ADADAD"
            radius="5px"
            padding="0 10px"
            margin="10px"
            fontSize="13px"
            fontWeight="700"
            text="삭제"
            hoverbgc="#989898"
          />
          <ButtonPrimary
            width="50px"
            height="35px"
            bgc="#ADADAD"
            color="#fff"
            border="#ADADAD"
            radius="5px"
            padding="0 10px"
            margin="10px 0"
            fontSize="13px"
            fontWeight="700"
            text="수정"
            hoverbgc="#989898"
          />
        </ButtonBox>
      </ItemBox>
      <hr />
    </>
  );
};

export default ReviewItem;

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
`;
