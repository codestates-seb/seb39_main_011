import React, { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";
import PostCamping from "../molecules/PostCamping";
import EditCamping from "../molecules/EditCamping";

const MyPostBox = () => {
  const [camping, setCamping] = useState({});
  const [images, setImages] = useState(null);
  const [place, setPlace] = useState("");

  const handleChange = (e) => {
    let input = {};
    input[e.target.name] = e.target.value;
    let register = { ...camping, ...input };
    setCamping(register);
  };

  const campingData = {
    ...camping,
    file_path: images,
    place,
  };

  // 본인이 작성한 캠핑장 글 조회
  const getPost = async () => {
    const headers = {
      "Content-Type": "application/json",
      Authorization: `${sessionStorage.getItem("Token")}`,
    };

    const userId = localStorage.getItem("userId");

    try {
      const res = await axios.get(`/admin/post/${userId}`, {
        headers: headers,
      });
      setCamping(res.data);

      console.log("res: ", res.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getPost();
  }, []);

  const showHandler = () => {
    if (Object.keys(camping).length === 0) {
      return (
        <PostCamping
          handleChange={handleChange}
          place={place}
          setPlace={setPlace}
          images={images}
          setImages={setImages}
          handleQuit={handleQuit}
          handleSubmit={handleSubmit}
        />
      );
    } else {
      return (
        <EditCamping
          campingData={campingData}
          handleChange={handleChange}
          place={place}
          setPlace={setPlace}
          images={images}
          setImages={setImages}
          handleQuit={handleQuit}
          handleSubmit={handleSubmit}
        />
      );
    }
  };

  // 게시물 등록 버튼 클릭 이벤트
  const handleSubmit = async () => {
    const headers = {
      "Content-Type": "application/json",
      Authorization: `${sessionStorage.getItem("Token")}`,
    };

    try {
      const res = await axios.post(
        `${process.env.REACT_APP_API_URL}/admin/post`,
        campingData,
        {
          headers: headers,
        }
      );
      console.log(res.data);
      alert("캠핑장이 등록되었습니다.");
    } catch (error) {
      console.log(error);
    }
  };

  const handleQuit = () => {
    window.confirm("캠핑장 등록을 취소하시겠습니까?");
    setCamping("");
    setImages("");
    setPlace("");
    window.location.reload();
  };

  return <Container>{showHandler()}</Container>;
};

export default MyPostBox;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1rem 2rem;
`;
