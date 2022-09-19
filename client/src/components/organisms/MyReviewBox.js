import React from "react";
import styled from "styled-components";
import ReviewItem from "../molecules/ReviewItem";

const MyReviewBox = () => {
  const rezData = [
    {
      name: "좋은 캠핑",
      date: "22.08.10 ~ 22.08.11",
      revPhoto: "/assets/images/camping.avif",
      review: "시설도 깨끗하고 좋네요~! 다음에 또 방문하고 싶어요.",
    },
    {
      name: "좋은 캠핑",
      date: "22.08.10 ~ 22.08.11",
      revPhoto: "/assets/images/camping.avif",
      review: "시설도 깨끗하고 좋네요~! 다음에 또 방문하고 싶어요.",
    },
  ];

  return (
    <Container>
      {rezData.map((item, idx) => {
        return <ReviewItem key={idx} item={item} />;
      })}
    </Container>
  );
};

export default MyReviewBox;

const Container = styled.div`
  hr {
    border: 0;
    height: 1px;
    background: #d9d9d9;
  }
`;
