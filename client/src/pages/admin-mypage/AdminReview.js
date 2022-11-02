import React, { useState, useEffect } from "react";
import styled from "styled-components";
import AdminMyReviewBox from "../../components/organisms/AdminMyReviewBox";
import { instance } from "../../apis/instance";

const AdminReview = () => {
  const campId = localStorage.getItem("campId");
  const [reviews, setReviews] = useState([]);

  const getReview = async () => {
    try {
      const { data } = await instance.get(`/admin/rev/${campId}`);
      setReviews(data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getReview();
  }, []);

  const onRemoveReview = async (id) => {
    try {
      const res = await instance.delete(`/admin/rev/${id}`);
      window.location.reload();
    } catch (error) {
      console.log(error);
    }
  };

  // const onUpdateReview = async (
  //   revId,
  //   message
  // ) => {
  //   try {
  //     const res = await instance.put(`/client/rev/${revId}`, {
  //       revId,
  //       message
  //     });
  //     window.location.reload();
  //   } catch (err) {
  //     console.log(err);
  //   }
  // };

  return (
    <Container>
      <AdminMyReviewBox reviews={reviews} onRemoveReview={onRemoveReview} />
    </Container>
  );
};

export default AdminReview;

const Container = styled.div``;
