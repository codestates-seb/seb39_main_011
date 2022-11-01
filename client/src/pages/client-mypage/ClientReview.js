import React, { useState, useEffect } from "react";
import styled from "styled-components";
import ClientMyReviewBox from "../../components/organisms/ClientMyReviewBox";
import { instance } from "../../apis/instance";

const ClientReview = () => {
  const [data, setData] = useState([]);
  let userId = localStorage.getItem("userId");

  const getReview = async () => {
    try {
      const res = await instance.get(`/client/rev/${userId}`);
      setData(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getReview();
  }, []);

  const onRemoveReview = async (revId) => {
    try {
      const res = await instance.delete(`/client/rev/${revId}`);
      window.location.reload();
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
      const res = await instance.put(`/client/rev/${revId}`, {
        revId,
        review,
        star,
        file_path,
        userId,
        campId,
        rezId,
      });
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
