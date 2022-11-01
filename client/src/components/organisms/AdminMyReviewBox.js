import React, { useState } from "react";
import { useEffect } from "react";
import styled from "styled-components";
import { instance } from "../../apis/instance";
import AdminReviewItem from "../molecules/AdminReviewItem";

const AdminMyReviewBox = () => {
  const campId = localStorage.getItem("campId");
  const [reviews, setReviews] = useState([]);

  const getReviewData = async () => {
    try {
      const { data } = await instance.get(
        `${process.env.REACT_APP_API_URL}/admin/rev/${campId}`
      );
      setReviews(data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getReviewData();
  }, []);

  console.log(reviews);

  const reviewData = [
    {
      id: "1",
      writer: "김코딩",
      date: "22.09.01",
      revPhoto: "/assets/images/camping.avif",
      review: "시설도 깨끗하고 좋네요~! 다음에 또 방문하고 싶어요.",
    },
  ];

  const [isOpen, setIsOpen] = useState(false);

  const openReviewHandler = (id) => {
    console.log("open!!");
    setIsOpen(!isOpen);
    console.log(isOpen);
    console.log(id);
  };

  return (
    <Container>
      {reviews.map((review, idx) => {
        return (
          <AdminReviewItem
            key={idx}
            review={review}
            openReviewHandler={(id) => openReviewHandler(id)}
            isOpen={isOpen}
          />
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
