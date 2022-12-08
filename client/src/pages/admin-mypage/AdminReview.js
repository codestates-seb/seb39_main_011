import React, { useState, useEffect } from "react";
import styled from "styled-components";
import AdminMyReviewBox from "../../components/organisms/AdminMyReviewBox";
import { instance } from "../../apis/instance";
import Swal from "sweetalert2";

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
      Swal.fire({
        icon: "success",
        text: "댓글이 삭제되었습니다.",
        button: "확인",
      }).then(() => {
        window.location.reload();
      });
    } catch (error) {
      console.log(error);
    }
  };

  const onUpdateReview = async (commentId, revId, message) => {
    try {
      const res = await instance.put(`/admin/rev/${commentId}`, {
        commentId,
        revId,
        message,
      });
      Swal.fire({
        icon: "success",
        text: "댓글을 수정하였습니다.",
        button: "확인",
      }).then(() => {
        window.location.reload();
      });
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Container>
      <AdminMyReviewBox
        reviews={reviews}
        onRemoveReview={onRemoveReview}
        onUpdateReview={onUpdateReview}
      />
    </Container>
  );
};

export default AdminReview;

const Container = styled.div``;
