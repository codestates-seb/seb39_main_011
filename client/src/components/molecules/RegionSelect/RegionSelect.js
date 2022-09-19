import React from "react";
import * as S from "./style";

const RegionSelect = ({ region, idx }) => {
  return (
    <S.Container>
      <label htmlFor={`regionChk${idx}`}>{region}</label>
      <input type="checkbox" id={`regionChk${idx}`} name="region" />
    </S.Container>
  );
};

export default RegionSelect;
