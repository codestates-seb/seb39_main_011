import React from "react";
import DetailTabReview from "../../molecules/DetailTabReview/DetailTabReview";
import * as S from "./style";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

const DetailReviews = () => {
  const arr = [1, 2, 3];
  return (
    <S.ReviewContainer>
      <S.ReviewsInfo>
        <div>후기 (3)</div>
        <div>
          <FontAwesomeIcon icon={faStar} color={"#f7b603"} /> 4.9/5
        </div>
      </S.ReviewsInfo>
      <S.ReviewList>
        {arr.map((_, idx) => (
          <DetailTabReview key={idx} />
        ))}
      </S.ReviewList>
    </S.ReviewContainer>
  );
};

export default DetailReviews;
