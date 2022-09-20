import React, { useState } from "react";
import styled from "styled-components";
import StarClick from "./StarClick";
import { BasicBtn } from "./Button";
import axios from "axios";

const PostReview = () => {
  const [star, setStar] = useState(0);
  const [review, setReview] = useState("");

  const onChangeReview = (e) => {
    setReview(e.target.value);
  };

  const clickStarHandler = (e) => {
    setStar(e);
  };

  const reviewPost = async () => {
    const reviewData = {
      review,
      star,
    };

    try {
      const res = await axios.post("http://localhost:3001/reviews", reviewData);
      console.log(res.data);
    } catch (error) {
      console.log(error.data);
    }
  };

  return (
    <Container>
      <TopBox>
        <p>리뷰 작성</p>
        <div>
          <StarClick clickStarHandler={clickStarHandler} />
        </div>
      </TopBox>
      <ContentBox>
        <textarea value={review} onChange={onChangeReview} />
      </ContentBox>
      <BottomBox>
        <div>
          <p>사진 추가</p>
          <PhotoBox>
            <div />
            <div />
            <div />
          </PhotoBox>
        </div>
        <div>
          <BasicBtn onClick={reviewPost}>리뷰 등록</BasicBtn>
        </div>
      </BottomBox>
    </Container>
  );
};

export default PostReview;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #f7f7f7;
  padding: 0 1.5rem;
  font-size: 15px;
`;

const TopBox = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  display: flex;
  gap: 10px;
  margin: 1rem 0;

  p {
    font-weight: bold;
  }

  div {
    width: auto;
  }
`;

const ContentBox = styled.div`
  textarea {
    width: 100%;
    height: 100px;
    padding: 10px;
    border: 1px solid #d9d9d9;
    border-radius: 5px;
    font-size: 13px;
    resize: none;
  }
`;

const BottomBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  margin: 1rem 0;

  p {
    font-size: 13px;
  }
`;

const PhotoBox = styled.div`
  display: flex;

  div {
    width: 65px;
    height: 65px;
    border: 1px solid #d9d9d9;
    margin: 10px 10px 0 0;
    background-color: #d9d9d9;
  }
`;
