import React, { useEffect } from "react";
import DetailReview from "../../molecules/DetailReview/DetailReview";
import * as S from "./style";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import IconText from "../../atoms/IconText";

import { ReactComponent as ReviewIcon } from "./../../../svg/review.svg";

const DetailReviews = () => {
  useEffect(() => {
    // let reviewDate = { review: "안녕", star: 4.5 };
    // axios({
    //   method: "POST",
    //   url: "/custom/rev",
    //   header: { "Content-type": "application/json" },
    //   data: reviewDate,
    // }).then((response) => {
    //   console.log(response);
    // });
    // axios({
    //   method: "GET",
    //   url: "/custom/rev",
    // }).then((response) => {
    //   console.log(response);
    // });
    // axios({
    //   method: "GET",
    //   url: "/admin/rev",
    // }).then((response) => {
    //   console.log(response);
    // });
  }, []);

  const arr = [1, 2, 3, 4];
  return (
    <S.ReviewContainer>
      <S.ReviewsInfo>
        <IconText icon={<ReviewIcon fill="var(--main-color-1)" />}>
          캠핑장 후기 (4)
        </IconText>
        <IconText icon={<FontAwesomeIcon icon={faStar} color={"#f7b603"} />}>
          4.9/5
        </IconText>
      </S.ReviewsInfo>
      <S.ReviewList>
        {arr.map((_, idx) => (
          <DetailReview key={idx} />
        ))}
      </S.ReviewList>
    </S.ReviewContainer>
  );
};

export default DetailReviews;
