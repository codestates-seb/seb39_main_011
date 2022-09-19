import React from "react";
import styled from "styled-components";
import { Outlet } from "react-router-dom";

const MyContent = () => {
  return (
    <Container>
      <Outlet />
    </Container>
  );
};

export default MyContent;

const Container = styled.div`
  width: 700px;
  height: 570px;
  background-color: #fff;
  border-radius: 5px;
`;
