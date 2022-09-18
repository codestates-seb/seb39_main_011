import React from "react";
import DetailTabReview from "../../molecules/DetailTabReview/DetailTabReview";

const DetailReviews = () => {
  const arr = [1, 2, 3];
  return (
    <ul>
      {arr.map((_, idx) => (
        <DetailTabReview key={idx} />
      ))}
    </ul>
  );
};

export default DetailReviews;
