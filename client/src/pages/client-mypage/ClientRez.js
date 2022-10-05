import React, { useState, useEffect } from "react";
import styled from "styled-components";
import MyRezBox from "../../components/organisms/MyRezBox";
import axios from "axios";

const ClientRez = () => {
  const [data, setData] = useState([]);

  const headers = {
    "Content-Type": "application/json",
    Authorization: `${sessionStorage.getItem("authorization")}`,
  };

  const getRez = async () => {
    try {
      const res = await axios.get(
        `${process.env.REACT_APP_API_URL}/client/rev`,
        { headers: headers }
      );
      setData(res.data);
      console.log("res: ", res.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getRez();
    console.info("data", data);
  }, []);

  const onCancelRez = async (id) => {
    try {
      const res = await axios.delete(
        `${process.env.REACT_APP_API_URL}/client/info/rez/${id}`
      );
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Container>
      <MyRezBox onCancelRez={onCancelRez} />
    </Container>
  );
};

export default ClientRez;

const Container = styled.div`
  width: 100%;
  height: 100%;
`;
