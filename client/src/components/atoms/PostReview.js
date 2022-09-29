import React, { useState } from "react";
import styled from "styled-components";
import StarClick from "./StarClick";
import { OutlineBtn } from "./Button";
import axios from "axios";
import ImageUpload from "./ImageUpload";

const PostReview = () => {
  const [star, setStar] = useState(0);
  const [review, setReview] = useState("");
  const [photo, setPhoto] = useState("");

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
      const res = await axios.post(`/client/rev`, reviewData);
      console.log(res.data);
      alert("리뷰가 등록되었습니다.");
      window.location.reload();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Container>
      <TopBox>
        <p>Review</p>
        <div>
          <StarClick clickStarHandler={clickStarHandler} />
        </div>
        <span>※ 별을 클릭하여 별점을 매겨보세요.</span>
      </TopBox>
      <ContentBox>
        <textarea value={review} onChange={onChangeReview} />
        <div>
          <ButtonBox>
            <PhotoTitle>Photo</PhotoTitle>
            <div>
              <OutlineBtn width="50px" onClick={reviewPost}>
                등록
              </OutlineBtn>
            </div>
          </ButtonBox>
          <PhotoBox>
            <ImageUpload photo={photo} setPhoto={setPhoto} />
            <ImageUpload photo={photo} setPhoto={setPhoto} />
          </PhotoBox>

          <div className="plus">※ 사진은 최대 2장까지 업로드 가능합니다.</div>
        </div>

        <RightBox></RightBox>
      </ContentBox>
    </Container>
  );
};

export default PostReview;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #f7f7f7;
  padding: 0 0 1.5rem 1.5rem;
  font-size: 15px;
`;

const TopBox = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  margin: 1rem 0;

  p {
    font-weight: 800;
    font-size: 18px;
    color: var(--main-color-5);
  }

  span {
    font-size: 10px;
    color: #8f8f8f;
  }
`;

const ContentBox = styled.div`
  display: flex;

  textarea {
    width: 68%;
    height: 150px;
    padding: 10px;
    border: 2px solid var(--main-color-3);
    border-radius: 5px;
    font-size: 13px;
    resize: none;
  }

  div {
    .plus {
      color: #8f8f8f;
      font-size: 11px;
      margin: 1rem 0 0 1rem;
    }
  }
`;

const RightBox = styled.div`
  display: flex;
  flex-direction: column;
`;

const PhotoBox = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-left: 1rem;
  margin-top: 8px;
`;

const PhotoTitle = styled.div`
  width: 65px;
  height: auto;
  padding: 5px 9px;
  color: #fff;
  font-size: 15px;
  font-weight: 700;
  text-align: center;
  background-color: var(--main-color-3);
  border: 1px solid var(--main-color-3);
  border-radius: 20px;
  margin-left: 1rem;
`;

const ButtonBox = styled.div`
  background-color: yellow;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-right: 5px;
`;
