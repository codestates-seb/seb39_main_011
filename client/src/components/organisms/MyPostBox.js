import React, { useState, useEffect } from "react";
import styled from "styled-components";
import EditCamping from "../molecules/MyPostCamping/EditCamping";
import PostCamping from "../molecules/MyPostCamping/PostCamping";
import { instance } from "../../apis/instance";

const MyPostBox = () => {
  const userId = localStorage.getItem("userId");
  let campId = localStorage.getItem("campId");
  const [resData, setResData] = useState([]); // 등록된 글이 있는지 판단하는 변수

  console.log("resData", resData);

  // 캠핑장 글 조회
  const getPost = async () => {
    try {
      const res = await instance.get(`/admin/post/${userId}`);

      // 이미 등록된 글이 있으면 campId 저장
      if (res.data.length !== 0) {
        localStorage.setItem("campId", res.data[0].campId);
      }

      setResData(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getPost();
  }, []);

  // 게시물 등록
  const handleSubmit = async (
    name,
    price,
    phone,
    capacity,
    place,
    note,
    file_path
  ) => {
    let campingData = {
      userId,
      name,
      price,
      phone,
      capacity,
      place,
      note,
      file_path,
    };

    try {
      const res = await instance.post(`/admin/post`, campingData);
      setResData(campingData);
      window.location.reload();
      alert("캠핑장 게시물을 등록하였습니다.");
    } catch (error) {
      console.log(error);
    }
  };

  const handleQuit = () => {
    window.confirm("캠핑장 등록을 취소하시겠습니까?");
    setResData("");
    window.location.reload();
  };

  // 글 삭제
  const onRemovePost = async () => {
    try {
      const res = await instance.delete(`/admin/post/${campId}`);
      localStorage.removeItem("campId");
      setResData("");
      window.location.reload();
    } catch (error) {
      console.log(error);
    }
  };

  // 글 수정
  const onUpdatePost = async (data) => {
    const editData = {
      userId,
      name: data.editName,
      price: data.editPrice,
      phone: data.editPhone,
      capacity: data.editCapacity,
      place: data.editAddress,
      note: data.editNote,
      file_path: data.editImages,
    };

    try {
      const res = await instance.put(`/admin/post/${campId}`, editData);
      setResData(editData);
      window.location.reload();
    } catch (err) {
      console.log(err);
    }
  };

  const showHandler = () => {
    if (resData.length === 0) {
      return (
        <PostCamping handleQuit={handleQuit} handleSubmit={handleSubmit} />
      );
    } else {
      return (
        <EditCamping
          resData={resData}
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
