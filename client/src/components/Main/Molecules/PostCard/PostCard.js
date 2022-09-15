import React from "react";
import * as UI from "./style";

const PostCard = () => {
  return (
    <UI.Container>
      <UI.Img src="/camping.avif" />
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
    </UI.Container>
  );
};

export default PostCard;
