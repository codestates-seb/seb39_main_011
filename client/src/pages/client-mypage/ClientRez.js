import React, { useEffect, useState } from "react";
import styled from "styled-components";
import MyRezBox from "../../components/organisms/MyRezBox";
import { instance } from "../../apis/instance";

const ClientRez = () => {
  const [reservationList, setReservationList] = useState([]);
  const userId = localStorage.getItem("userId");

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
      const reservation = data.filter((el) => {
        const reservationDate = new Date(el.date);
        const today = new Date();
        return reservationDate > today;
      });
      setReservationList(reservation);
    });
  }, []);

  return (
    <Container>
      <MyRezBox reservationList={reservationList} />
    </Container>
  );
};

export default ClientRez;

const Container = styled.div`
  width: 100%;
  height: 100%;
`;
