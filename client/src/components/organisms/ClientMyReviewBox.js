import React from "react";
import styled from "styled-components";
import ClientReviewItem from "../molecules/ClientReviewItem";

const ClientMyReviewBox = ({ data }) => {
  return (
    <Container>
      {data.map((item, idx) => {
        return (
          <ClientReviewItem
            key={idx}
            item={item}
            review={item.review}
            star={item.star}
          />
        );
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
