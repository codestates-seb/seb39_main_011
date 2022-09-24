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
  overflow: auto;
  margin-right: 15px;

  @media ${(props) => props.theme.tablet} {
    margin: 0 15px;
    width: 90%;
  }

  @media ${(props) => props.theme.mobile} {
    margin: 0 15px;
    width: 90%;
  }
`;
