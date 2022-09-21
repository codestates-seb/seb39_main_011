import React, { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";
import ClientMyReviewBox from "../../components/organisms/ClientMyReviewBox";

const ClientReview = () => {
  const [data, setData] = useState([]);
  const [isEdit, setIsEdit] = useState(false);

  const getReview = async () => {
    try {
      const res = await axios.get(`/client/rev`);
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
      const res = await axios.delete(`/client/rev/${id}`);
      window.location.reload();
      alert("리뷰가 삭제되었습니다.");
    } catch (error) {
      console.log(error);
    }
  };

  const onUpdateReview = async (review, star, id) => {
    try {
      const res = await axios.put(`/client/rev/${id}`, { review, star, id });
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
