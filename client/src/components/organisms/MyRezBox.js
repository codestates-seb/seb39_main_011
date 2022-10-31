import React from "react";
import RezItem from "../molecules/RezItem";
import styled from "styled-components";

const MyRezBox = ({ reservationList }) => {
  return (
    <Container>
      {reservationList.map((item, idx) => {
        return <RezItem key={idx} item={item} />;
      })}
    </Container>
  );
};

export default MyRezBox;

const Container = styled.div`
  width: 100%;

  hr {
    border: 0;
    height: 1px;
    background: #d9d9d9;
  }
`;
