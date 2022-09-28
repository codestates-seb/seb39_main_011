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
  width: 70vw;
  height: 570px;
  background-color: #fff;
  border: 3px solid var(--main-color-3);
  border-radius: 0px 20px 20px 0px;
  overflow: auto;
  margin-right: 10px;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;

  @media ${(props) => props.theme.mypageTablet} {
    margin: 0 15px;
    width: 95vw;
    height: 600px;
    border-radius: 5px;
  }
`;
