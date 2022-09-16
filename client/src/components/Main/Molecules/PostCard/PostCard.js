import React from "react";
import { Link } from "react-router-dom";
import * as S from "./style";

const PostCard = () => {
  return (
    <S.CardContainer>
      <Link to="/detail">
        <S.Img src="/assets/images/camping.avif" alt="이미지" />
        <S.FlexLayout>
          <div>
            <div>좋은 캠핑</div>
            <div>경기도 가평군 가평읍 개곡리</div>
            <div>캠핑장 가격</div>
          </div>
          <div>
            <div>별점 4.7</div>
            <div>리뷰 11</div>
            <div>찜 12</div>
          </div>
        </S.FlexLayout>
      </Link>
    </S.CardContainer>
  );
};

export default PostCard;
