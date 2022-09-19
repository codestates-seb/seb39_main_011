import React from "react";
import styled from "styled-components";
import ClientReviewItem from "../molecules/ClientReviewItem";

const ClientMyReviewBox = () => {
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
        return <ClientReviewItem key={idx} item={item} />;
      })}
    </Container>
  );
};

export default ClientMyReviewBox;

const Container = styled.div`
  hr {
    border: 0;
    height: 1px;
    background: #d9d9d9;
  }
`;
