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
      name: "좋은 캠핑",
      phone: "010-1234-1234",
      date: "22.08.10 ~ 22.08.11",
      price: "50,000 원",
      note: "요청사항 없습니다.",
      photo: "/assets/images/camping.avif",
    },
  ];

  const [isOpen, setIsOpen] = useState(false);

  const openReviewHandler = (id) => {
    console.log("open!!");
    const filtered = rezData.filter((el) => el.id === id);
    console.info("filtered", filtered);
    setIsOpen(!isOpen);
    console.log("id", id);
  };

  return (
    <Container>
      {rezData.map((item, idx) => {
        return (
          <>
            <RezItem
              key={idx}
              item={item}
              openReviewHandler={(id) => openReviewHandler(id)}
              isOpen={isOpen}
              idx={idx + 1}
            />
            {item.id === idx + 1 ? (
              isOpen ? (
                <PostReview key={idx} />
              ) : null
            ) : null}
          </>
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
