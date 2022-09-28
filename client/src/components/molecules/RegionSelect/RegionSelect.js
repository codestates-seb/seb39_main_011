import React from "react";
import * as S from "./style";

const RegionSelect = ({ region, idx }) => {
  const clickHandler = (event) => {
    console.log(event.target.id);
  };
  return (
    <S.Container>
      <input type="radio" id={`regionChk${idx}`} name="region" />
      <label htmlFor={`regionChk${idx}`} onClick={clickHandler} id={region}>
        {region}
      </label>
    </S.Container>
  );
};

export default RegionSelect;
