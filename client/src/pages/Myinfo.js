import React, { useEffect, useState } from "react";
import styled from "styled-components";
import MyInfoBox from "../components/organisms/MyInfoBox";
import { instance } from "../apis/instance";

const MyInfo = () => {
  const userId = localStorage.getItem("userId");
  const [user, setUser] = useState([]);

  const getInfo = async () => {
    try {
      const res = await instance.get(`/user/info/${userId}`);
      setUser(res.data[0]);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getInfo();
  }, []);

  const onEditInfo = async (data) => {
    const editData = {
      name: data.editName,
      email: data.editEmail,
      phone: data.editPhone,
    };
    try {
      const res = await instance.put(`/user/info/${userId}`, editData);
      window.location.reload();
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Container>
      <MyInfoBox user={user} onEditInfo={onEditInfo} />
    </Container>
  );
};

export default MyInfo;

const Container = styled.div`
  width: 100%;
  height: 100%;
`;
