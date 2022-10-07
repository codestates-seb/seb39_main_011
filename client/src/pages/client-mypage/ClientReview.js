import React, { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";
import ClientMyReviewBox from "../../components/organisms/ClientMyReviewBox";

const ClientReview = () => {
  const [data, setData] = useState([]);

  const headers = {
    "Content-Type": "application/json",
    Authorization: `${sessionStorage.getItem("Token")}`,
  };

  const getReview = async () => {
    let userId = localStorage.getItem("userId");
    try {
      const res = await axios.get(
        `${process.env.REACT_APP_API_URL}/client/rev/${userId}`,
        { headers: headers }
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
        `${process.env.REACT_APP_API_URL}/client/rev/${id}`,
        { headers: headers }
      );
    } catch (error) {
      console.log(error);
    }
  };

  const onUpdateReview = async (
    revId,
    review,
    star,
    file_path,
    userId,
    campId,
    rezId
  ) => {
    try {
      const res = await axios.put(
        `${process.env.REACT_APP_API_URL}/client/rev/${revId}`,
        {
          revId,
          review,
          star,
          file_path,
          userId,
          campId,
          rezId,
        },
        { headers: headers }
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
