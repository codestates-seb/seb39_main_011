import React, { useEffect, useState } from "react";
import styled from "styled-components";
import MyInfoBox from "../components/organisms/MyInfoBox";
import axios from "axios";

const MyInfo = () => {
  const userData = [
    {
      id: "luvcamp123",
      name: "김코딩",
      email: "luv123@gmail.com",
      phone: "010-1234-5678",
    },
  ];

  // const [user, setUser] = useState([]);

  // const getInfo = async () => {
  //   try {
  //     const res = await axios.get(`/user/info`);
  //     setUser(res.data);
  //     console.log("res: ", res.data);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  // useEffect(() => {
  //   getInfo();
  //   console.info("user", user);
  // }, []);

  // const onEditInfo = async (id, name, email, phone) => {
  //   try {
  //     const res = await axios.put(`/user/edit`, {
  //       id,
  //       name,
  //       email,
  //       phone,
  //     });
  //   } catch (err) {
  //     console.log(err);
  //   }
  // };

  return (
    <Container>
      <MyInfoBox user={userData} />
    </Container>
  );
};

export default MyInfo;

const Container = styled.div`
  width: 100%;
  height: 100%;
`;
