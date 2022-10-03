import React, { useState } from "react";
import styled from "styled-components";
import StarClick from "./StarClick";
import { FillBtn } from "./Button";
import axios from "axios";
import ImageUploader from "./ImageUploader";

const PostReview = () => {
  const [star, setStar] = useState(0);
  const [review, setReview] = useState("");
  const [images, setImages] = useState([]);

  const [isReview, setIsReview] = useState(true);

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
      const res = await axios.post(
        `${process.env.REACT_APP_API_URL}/client/rev`,
        reviewData
      );
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
        <div className="left_box">
          <ButtonBox>
            <PhotoTitle>Photo</PhotoTitle>
            <div>
              <FillBtn width="50px" onClick={reviewPost}>
                등록
              </FillBtn>
            </div>
          </ButtonBox>
          <PhotoBox>
            <ImageUploader
              className="image_uploader"
              images={images}
              setImages={setImages}
              isReview={isReview}
            />
          </PhotoBox>

          <div className="plus">※ 사진은 최대 2장까지 업로드 가능합니다.</div>
        </div>
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
    color: var(--main-color-1);
  }

  span {
    font-size: 10px;
    color: #8f8f8f;
  }
`;

const ContentBox = styled.div`
  display: flex;

  textarea {
    width: 60%;
    height: 150px;
    padding: 10px;
    border: 2px solid var(--main-color-4);
    border-radius: 5px;
    font-size: 13px;
    resize: none;

    @media ${(props) => props.theme.postMobile} {
      width: 55%;
    }
  }

  .left_box {
    width: 40%;
  }

  .plus {
    color: #8f8f8f;
    font-size: 11px;
    margin: 1rem 0 0 1rem;
  }
`;

const PhotoBox = styled.div`
  width: 100%;
  margin-top: 1rem;
  padding-left: 7px;

  .image_uploader {
    margin-left: 10px;
  }

  @media ${(props) => props.theme.postMobile} {
    padding-left: 0;
  }
`;

const PhotoTitle = styled.div`
  width: 65px;
  height: auto;
  padding: 5px 9px;
  color: #fff;
  font-size: 15px;
  font-weight: 700;
  text-align: center;
  background-color: var(--main-color-4);
  border: 1px solid var(--main-color-4);
  border-radius: 20px;
  margin-left: 1rem;
  margin-right: 5px;

  @media ${(props) => props.theme.postMobile} {
    margin-left: 5px;
  }
`;

const ButtonBox = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-right: 1rem;
`;
