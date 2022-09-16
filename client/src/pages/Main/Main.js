import React from "react";
import Nav from "../../components/Main/Organisms/Nav/Nav";
import PostList from "../../components/Main/Organisms/PostList/PostList";
import Aside from "../../components/Main/Organisms/Aside/Aside";
import * as UI from "./style";

const Main = () => {
  return (
    <UI.MainContainer>
      <Nav />
      <UI.FlexLayout>
        <PostList />
        <Aside />
      </UI.FlexLayout>
    </UI.MainContainer>
  );
};

export default Main;
