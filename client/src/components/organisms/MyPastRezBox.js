import React, { useState, useEffect } from "react";
import RezItem from "../molecules/RezItem";
import styled from "styled-components";
import PostReview from "../atoms/PostReview";
import { instance } from "../../apis/instance";

const MyPastRezBox = () => {
  const [reservationList, setReservationList] = useState([]);
  const userId = localStorage.getItem("userId");
  const [isOpen, setIsOpen] = useState("");

  const getReservationData = async () => {
    try {
      const { data } = await instance.get(
        `${process.env.REACT_APP_API_URL}/client/info/rez/${userId}`
      );
      return data;
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getReservationData().then((data) => {
      const pastReservation = data.filter((el) => {
        const reservationDate = new Date(el.date);
        const today = new Date();
        return reservationDate < today;
      });
      setReservationList(pastReservation);
    });
  }, []);

  const openReviewHandler = (id) => {
    setIsOpen((el) => (el.isOpen !== id ? id : ""));

    if (isOpen === id) {
      setIsOpen(false);
    }
  };

  return (
    <Container>
      {reservationList.map((item) => {
        return (
          <div key={item.rezId}>
            <RezItem item={item} openReviewHandler={openReviewHandler} />
            {isOpen === item.rezId ? <PostReview /> : null}
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
