import React, { useEffect, useState } from "react";
import RezItem from "../molecules/RezItem";
import styled from "styled-components";
import axios from "axios";

const MyRezBox = () => {
  const [myReservation, setMyReservation] = useState([]);
  const userId = localStorage.getItem("userId");

  const getReservationData = async () => {
    try {
      const { data } = await axios.get(
        `${process.env.REACT_APP_API_URL}/client/info/rez/${userId}`
      );
      console.log(data);
      setMyReservation(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getReservationData();
  }, []);

  return (
    <Container>
      {myReservation.map((item, idx) => {
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
