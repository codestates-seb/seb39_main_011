import React from "react";
import * as UI from "./style";
import DetailMain from "../../components/Detail/Organisms/DetailMain/DetailMain";
import Aside from "../../components/Detail/Organisms/Aside/Aside";

const Detail = () => {
  return (
    <UI.DetailContainer>
      <DetailMain />
      <Aside />
    </UI.DetailContainer>
  );
};

export default Detail;
