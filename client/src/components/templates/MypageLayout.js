import React from "react";
import styled from "styled-components";
import MySideBar from "../organisms/MySideBar";
import MyContent from "../organisms/MyContent";

const MypageLayout = () => {
  return (
    <Layout>
      <MySideBar className="hide" />
      <MyContent />
    </Layout>
  );
};

export default MypageLayout;

const Layout = styled.div`
  width: 100vw;
  height: calc(100vh - 54px);
  display: flex;
  justify-content: center;
  align-items: center;

  @media ${(props) => props.theme.tablet} {
    background-color: aliceblue;
  }
`;
