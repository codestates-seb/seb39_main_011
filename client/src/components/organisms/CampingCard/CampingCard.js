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
  return (
    <S.CardContainer>
      <Link to={`/detail/${camplist.camp_id}`}>
        <S.Img src="/assets/images/camping.avif" alt="이미지" />
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
              {camplist.price} 원
            </div>
          </div>
          <div>
            <div>
              <StarIcon />
              별점 {camplist.star_total}
            </div>
            <div>
              <ReviewIcon />
              리뷰 11
            </div>
            <div>
              <HeartIcon />찜 12
            </div>
          </div>
        </S.FlexLayout>
      </Link>
    </S.CardContainer>
  );
};

export default CampingCard;
