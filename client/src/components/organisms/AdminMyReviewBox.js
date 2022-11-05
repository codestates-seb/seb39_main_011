import React, { useState } from "react";
import styled from "styled-components";
import AdminReviewItem from "../molecules/AdminReviewItem";
import CommentItem from "../molecules/CommentItem";

const AdminMyReviewBox = ({ reviews, onRemoveReview, onUpdateReview }) => {
  const [isOpen, setIsOpen] = useState(false);

  const openReviewHandler = (id) => {
    setIsOpen((el) => (el.isOpen !== id ? id : ""));

    if (isOpen === id) {
      setIsOpen(false);
    }
  };

  return (
    <Container>
      {reviews.map((item) => {
        return (
          <div key={item.revId}>
            <AdminReviewItem
              item={item}
              openReviewHandler={openReviewHandler}
              onRemoveReview={onRemoveReview}
              onUpdateReview={onUpdateReview}
            />
            {isOpen === item.revId ? <CommentItem item={item} /> : null}
            <hr />
          </div>
        );
      })}
    </Container>
  );
};

export default AdminMyReviewBox;

const Container = styled.div`
  hr {
    border: 0;
    height: 1px;
    background: #d9d9d9;
  }
`;
