import React, { useState } from "react";
import RezItem from "../molecules/RezItem";
import styled from "styled-components";
import PostReview from "../atoms/PostReview";

const MyPastRezBox = () => {
  const rezData = [
    {
      id: 1,
      name: "좋은 캠핑",
      phone: "010-1234-1234",
      date: "22.08.10 ~ 22.08.11",
      price: "50,000 원",
      note: "요청사항 없습니다.",
      photo: "/assets/images/camping.avif",
    },
    {
      id: 2,
      name: "좋은 캠핑쓰",
      phone: "010-1234-5678",
      date: "22.08.10 ~ 22.08.11",
      price: "70,000 원",
      note: "요청사항 없음",
      photo: "/assets/images/camping.avif",
    },
  ];

  const [isOpen, setIsOpen] = useState("");

  const openReviewHandler = (id) => {
    setIsOpen((el) => (el.isOpen !== id ? id : ""));

    if (isOpen === id) {
      setIsOpen(false);
    }
  };

  return (
    <Container>
      {rezData.map((item) => {
        return (
          <div key={item.id}>
            <RezItem item={item} openReviewHandler={openReviewHandler} />
            {isOpen === item.id ? <PostReview /> : null}
          </div>
        );
      })}
    </Container>
  );
};

export default MyPastRezBox;

const Container = styled.div`
  width: 100%;

  hr {
    border: 0;
    height: 1px;
    background: #d9d9d9;
  }
`;
