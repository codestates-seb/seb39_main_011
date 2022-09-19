import React from "react";
import styled from "styled-components";
import MySideBar from "../organisms/MySideBar";
import MyContent from "../organisms/MyContent";

const MypageLayout = () => {
  return (
    <Layout>
      <MySideBar />
      <MyContent />
    </Layout>
  );
};

export default MypageLayout;

const Layout = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;
