import React from "react";
import { Link } from "react-router-dom";
import * as S from "./style";

import { ReactComponent as LocationIcon } from "./../../../svg/location.svg";
import { ReactComponent as CampIcon } from "./../../../svg/camp.svg";
import { ReactComponent as CoinIcon } from "./../../../svg/coin.svg";
import { ReactComponent as StarIcon } from "./../../../svg/yellowstar.svg";
import { ReactComponent as ReviewIcon } from "./../../../svg/review.svg";
import { ReactComponent as HeartIcon } from "./../../../svg/heart.svg";

const CampingCard = ({ camplist }) => {
  const voteNum = Math.floor(Math.random() * 6);
  const reviewNum = Math.floor(Math.random() * 21);
  const heartNum = Math.floor(Math.random() * 15);
  const price = camplist.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");

  return (
    <S.CardContainer>
      <Link to={`/detail/${camplist.campId}`}>
        <S.Img src={camplist.file_path} alt="이미지" />
        <S.FlexLayout>
          <div>
            <div>
              <CampIcon />
              {camplist.name}
            </div>
            <div>
              <LocationIcon />
              {`${camplist.place.split(" ")[0]} ${
                camplist.place.split(" ")[1]
              }`}
            </div>
            <div>
              <CoinIcon />
              {price} 원
            </div>
          </div>
          <div>
            <div>
              <StarIcon />
              별점 {voteNum}
              {/* 별점 {camplist.star_total} */}
            </div>
            <div>
              <ReviewIcon fill="var(--main-color-3)" />
              리뷰 {reviewNum}
            </div>
            <div>
              <HeartIcon />찜 {heartNum}
            </div>
          </div>
        </S.FlexLayout>
      </Link>
    </S.CardContainer>
  );
};

export default CampingCard;
