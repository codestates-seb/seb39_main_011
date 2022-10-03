import React, { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";
import ClientMyReviewBox from "../../components/organisms/ClientMyReviewBox";

const ClientReview = () => {
  const [data, setData] = useState([]);

  const getReview = async () => {
    try {
      const res = await axios.get(
        `${process.env.REACT_APP_API_URL}/client/rev`
      );
      setData(res.data);
      console.log("res: ", res.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getReview();
    console.info("data", data);
  }, []);

  const onRemoveReview = async (id) => {
    try {
      const res = await axios.delete(
        `${process.env.REACT_APP_API_URL}/client/rev/${id}`
      );
    } catch (error) {
      console.log(error);
    }
  };

  const onUpdateReview = async (id, review, star) => {
    try {
      const res = await axios.put(
        `${process.env.REACT_APP_API_URL}/client/rev/${id}`,
        {
          id,
          review,
          star,
        }
      );
      window.location.reload();
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Container>
      <ClientMyReviewBox
        data={data}
        onRemoveReview={onRemoveReview}
        onUpdateReview={onUpdateReview}
      />
    </Container>
  );
};

export default ClientReview;

const Container = styled.div``;
