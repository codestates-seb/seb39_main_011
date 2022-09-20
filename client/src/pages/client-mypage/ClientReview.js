import React, { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";
import ClientMyReviewBox from "../../components/organisms/ClientMyReviewBox";

const ClientReview = () => {
  const [data, setData] = useState([]);

  const getReview = async () => {
    try {
      const res = await axios.get("http://localhost:3001/reviews");
      setData(res.data);
      console.log(res.data);
    } catch (error) {
      console.log(error.data);
    }
  };

  useEffect(() => {
    getReview();
  }, []);

  console.log(data);

  return (
    <Container>
      <ClientMyReviewBox data={data} />
    </Container>
  );
};

export default ClientReview;

const Container = styled.div``;
