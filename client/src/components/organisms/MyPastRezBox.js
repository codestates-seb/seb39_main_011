import React, { useState } from "react";
import RezItem from "../molecules/RezItem";
import styled from "styled-components";
import PostReview from "../atoms/PostReview";

const MyPastRezBox = () => {
  const rezData = [
    {
      id: 1,
      name: "한라봉 캠핑장",
      phone: "01012345678",
      date: "22.10.01 ~ 22.10.02",
      price: "60,000원",
      note: "요청사항 없습니다.",
      photo:
        "https://bear-mello.s3-ap-northeast-2.amazonaws.com/2813fa0d-a395-4635-a714-cdb042501c50.jpeg",
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
