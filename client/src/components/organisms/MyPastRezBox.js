import React from "react";
import RezItem from "../molecules/RezItem";
import styled from "styled-components";

const MyPastRezBox = () => {
  const rezData = [
    {
      name: "좋은 캠핑",
      phone: "010-1234-1234",
      date: "22.08.10 ~ 22.08.11",
      price: "50,000 원",
      note: "요청사항 없습니다.",
      photo: "/assets/images/camping.avif",
    },
  ];
  return (
    <Container>
      {rezData.map((item, idx) => {
        return <RezItem key={idx} item={item} />;
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
