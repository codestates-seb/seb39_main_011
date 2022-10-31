import React, { useEffect, useState } from "react";
import styled from "styled-components";
import MyRezBox from "../../components/organisms/MyRezBox";
import { instance } from "../../apis/instance";

const AdminRez = () => {
  const campId = localStorage.getItem("campId");
  const [reservationList, setReservationList] = useState([]);

  const getReservationData = async () => {
    try {
      const { data } = await instance.get(
        `${process.env.REACT_APP_API_URL}/admin/rez/${campId}`
      );
      console.log(data);
      setReservationList(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getReservationData();
  }, []);

  return (
    <Container>
      <MyRezBox reservationList={reservationList} />
    </Container>
  );
};

export default AdminRez;

const Container = styled.div``;
