import React from "react";
import DetailReview from "../../molecules/DetailReview/DetailReview";
import * as S from "./style";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import IconText from "../../atoms/IconText";

import { ReactComponent as ReviewIcon } from "./../../../svg/review.svg";

const DetailReviews = ({ campReviews }) => {
  return (
    <S.ReviewContainer>
      <S.ReviewsInfo>
        <IconText icon={<ReviewIcon fill="var(--main-color-1)" />}>
          캠핑장 후기 ({campReviews.length})
        </IconText>
        <IconText icon={<FontAwesomeIcon icon={faStar} color={"#f7b603"} />}>
          4.9/5
        </IconText>
      </S.ReviewsInfo>
      <S.ReviewList>
        {campReviews.map((review, idx) => (
          <DetailReview key={idx} review={review} />
        ))}
      </S.ReviewList>
    </S.ReviewContainer>
  );
};

export default DetailReviews;
