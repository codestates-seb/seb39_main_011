import React from "react";
import Nav from "../../components/templates/MainNav/Nav";
import PostList from "../../components/Main/Organisms/PostList/PostList";
import Aside from "../../components/Main/Organisms/Aside/Aside";
import * as S from "./style";

const Main = () => {
  return (
    <S.MainContainer>
      <Nav />
      <S.FlexLayout>
        <PostList />
        <Aside />
      </S.FlexLayout>
    </S.MainContainer>
  );
};

export default Main;
