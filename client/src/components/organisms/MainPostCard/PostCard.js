import React from "react";
import { Link } from "react-router-dom";
import * as S from "./style";

const PostCard = ({ camplist }) => {
  return (
    <S.CardContainer>
      <Link to={`/detail/${camplist.camp_id}`}>
        <S.Img src="/assets/images/camping.avif" alt="이미지" />
        <S.FlexLayout>
          <div>
            <div>{camplist.name}</div>
            <div>{camplist.place}</div>
            <div>{camplist.price} 원</div>
          </div>
          <div>
            <div>별점 {camplist.star_total}</div>
            <div>리뷰 11</div>
            <div>찜 12</div>
          </div>
        </S.FlexLayout>
      </Link>
    </S.CardContainer>
  );
};

export default PostCard;
