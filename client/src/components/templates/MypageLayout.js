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
  max-width: 940px;
  margin: 40px auto 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;

  @media ${(props) => props.theme.mypageTablet} {
    flex-direction: column;
  }
`;
