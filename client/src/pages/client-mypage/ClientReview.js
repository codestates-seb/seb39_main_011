import React, { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";
import ClientMyReviewBox from "../../components/organisms/ClientMyReviewBox";
import { useNavigate } from "react-router-dom";

const ClientReview = () => {
  const [data, setData] = useState([]);
  const navigate = useNavigate();

  const getReview = async () => {
    try {
      const res = await axios.get(`${process.env.REACT_APP_API_URL}/reviews`);
      setData(res.data);
      console.log(res.data);
    } catch (error) {
      console.log(error.data);
    }
  };

  useEffect(() => {
    getReview();
  }, []);

  const onRemoveReview = async (id) => {
    try {
      const res = await axios.delete(
        `${process.env.REACT_APP_API_URL}/reviews/${id}`
      );
      window.location.reload();
    } catch (error) {
      console.log(error);
    }
  };

  console.info("data: ", data);

  return (
    <Container>
      <ClientMyReviewBox data={data} onRemoveReview={onRemoveReview} />
    </Container>
  );
};

export default ClientReview;

const Container = styled.div``;
