import React, { useState } from "react";
import styled from "styled-components";
import StarClick from "./StarClick";
import { FillBtn } from "./Button";
import SingleImageUploader from "./SingleImageUploader";
import { instance } from "../../apis/instance";
import { useNavigate } from "react-router-dom";

const PostReview = ({ item }) => {
  const navigate = useNavigate();

  const [star, setStar] = useState(0);
  const [review, setReview] = useState("");
  const [images, setImages] = useState(null);

  const [isReview, setIsReview] = useState(true);

  const onChangeReview = (e) => {
    setReview(e.target.value);
  };

  const clickStarHandler = (e) => {
    setStar(e);
  };

  const userId = localStorage.getItem("userId");
  const reviewPost = async () => {
    const reviewData = {
      review,
      star,
      file_path: images,
      rezId: item.rezId,
      userId,
      campId: item.campId,
    };

    try {
      const res = await instance.post(`/client/rev`, reviewData);
      alert("리뷰를 등록하였습니다.");
      navigate("/client/mypage/review");
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
            <SingleImageUploader
              className="image_uploader"
              images={images}
              setImages={setImages}
              isReview={isReview}
            />
          </PhotoBox>

          <div className="plus">✋ 사진은 최대 2장까지 업로드 가능합니다.</div>
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
  padding-left: 15px;

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
`;

const ButtonBox = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-right: 1rem;
`;
