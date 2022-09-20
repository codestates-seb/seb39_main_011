import React, { useEffect } from "react";
import DetailTabReview from "../../molecules/DetailTabReview/DetailTabReview";
import * as S from "./style";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";

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
