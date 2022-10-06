import React, { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";
import PostCamping from "../molecules/PostCamping";
import EditCamping from "../molecules/EditCamping";

const MyPostBox = () => {
  const [camping, setCamping] = useState({});
  const [images, setImages] = useState(null);
  const [place, setPlace] = useState("");

  const userId = localStorage.getItem("userId");

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
    userId,
  };

  const [resData, setResData] = useState({});

  const headers = {
    "Content-Type": "application/json",
    Authorization: `${sessionStorage.getItem("Token")}`,
  };

  // 본인이 작성한 캠핑장 글 조회
  const getPost = async () => {
    const userId = localStorage.getItem("userId");

    try {
      const res = await axios.get(
        `${process.env.REACT_APP_API_URL}/admin/post/${userId}`,
        {
          headers: headers,
        }
      );

      if (res.data.length !== 0) {
        localStorage.setItem("campId", res.data[0].campId);
      }
      setCamping(res.data);
      setResData(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getPost();
  }, []);

  // 게시물 등록 이벤트
  const handleSubmit = async () => {
    try {
      const res = await axios.post(
        `${process.env.REACT_APP_API_URL}/admin/post`,
        campingData,
        {
          headers: headers,
        }
      );
      setCamping(res.data);
      window.location.reload();
      alert("캠핑장 게시물을 등록하였습니다.");
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

  let campIdx = localStorage.getItem("campId");

  // 글 삭제
  const onRemovePost = async () => {
    try {
      const res = await axios.delete(
        `${process.env.REACT_APP_API_URL}/admin/post/${campIdx}`,
        { headers: headers }
      );
      localStorage.removeItem("campId");
      alert("삭제 완료");
      window.location.reload();
    } catch (error) {
      console.log(error);
    }
  };

  const onUpdatePost = async () => {
    try {
      const res = await axios.put(
        `${process.env.REACT_APP_API_URL}/admin/post/${campIdx}`,
        {
          campingData,
        },
        { headers: headers }
      );
      alert("수정 클릭");
      window.location.reload();
    } catch (err) {
      console.log(err);
    }
  };

  const showHandler = () => {
    if (resData.length === 0) {
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
          onRemovePost={onRemovePost}
          onUpdatePost={onUpdatePost}
        />
      );
    }
  };

  return <Container>{showHandler()}</Container>;
};

export default MyPostBox;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1rem 2rem;
`;
