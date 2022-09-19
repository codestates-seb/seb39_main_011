import React from "react";
import StarRender from "../../atoms/StarRender";
import * as S from "./style";

const DetailTabReview = () => {
  return (
    <S.ReviewContainer>
      <StarRender rating={4.5} />
      <div>
        <span>김코딩</span>
        <span>2022.09.01</span>
      </div>
      <div>
        캠핑장이 너무 좋아요~~ 다음에 또 올게요~~! 너무너무 좋아요 베어멜로 최고
      </div>
      <S.ImgBox>
        <img
          src={process.env.PUBLIC_URL + "/assets/images/camping1.jpg"}
          alt="img"
        />
        <img
          src={process.env.PUBLIC_URL + "/assets/images/camping3.jpg"}
          alt="img"
        />
        <img
          src={process.env.PUBLIC_URL + "/assets/images/camping4.jpg"}
          alt="img"
        />
      </S.ImgBox>
    </S.ReviewContainer>
  );
};

export default DetailTabReview;