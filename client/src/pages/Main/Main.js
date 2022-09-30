import React from "react";
import Nav from "../../components/templates/MainNav/Nav";
import MainContent from "../../components/templates/MainContent/MainContent";
import MainAside from "../../components/templates/MainAside/MainAside";
import * as S from "./style";

const Main = () => {
  return (
    <S.MainContainer>
      <Nav />
      <S.FlexLayout>
        <MainContent />
        <MainAside />
      </S.FlexLayout>
    </S.MainContainer>
  );
};

export default Main;
