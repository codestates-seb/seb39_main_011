import React, { useState } from "react";
import styled from "styled-components";
import AdminReviewItem from "../molecules/AdminReviewItem";

const AdminMyReviewBox = () => {
  const reviewData = [
    {
      id: "1",
      writer: "김코딩",
      date: "22.09.01",
      revPhoto: "/assets/images/camping.avif",
      review: "시설도 깨끗하고 좋네요~! 다음에 또 방문하고 싶어요.",
    },
  ];

  const [isOpen, setIsOpen] = useState(false);

  const openReviewHandler = (id) => {
    console.log("open!!");
    setIsOpen(!isOpen);
    console.log(isOpen);
    console.log(id);
  };

  return (
    <Container>
      {reviewData.map((item, idx) => {
        return (
          <AdminReviewItem
            key={idx}
            item={item}
            openReviewHandler={(id) => openReviewHandler(id)}
            isOpen={isOpen}
          />
        );
      })}
    </Container>
  );
};

export default AdminMyReviewBox;

const Container = styled.div`
  hr {
    border: 0;
    height: 1px;
    background: #d9d9d9;
  }
`;
