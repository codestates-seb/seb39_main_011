import React from "react";
import Banner from "../../components/Main/Organisms/Banner/Banner";
import PostList from "../../components/Main/Organisms/PostList/PostList";
import Aside from "../../components/Main/Organisms/Aside/Aside";
import * as UI from "./style";

const Main = () => {
  return (
    <UI.MainContainer>
      <Banner />
      <UI.FlexLayout>
        <PostList />
        <Aside />
      </UI.FlexLayout>
    </UI.MainContainer>
  );
};

export default Main;
