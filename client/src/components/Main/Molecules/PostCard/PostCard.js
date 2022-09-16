import React from "react";
import { Link } from "react-router-dom";
import * as UI from "./style";

const PostCard = () => {
  return (
    <UI.Container>
      <Link to="/detail">
        <UI.Img src="/assets/images/camping.avif" alt="이미지" />
        <UI.FlexLayout>
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
        </UI.FlexLayout>
      </Link>
    </UI.Container>
  );
};

export default PostCard;
