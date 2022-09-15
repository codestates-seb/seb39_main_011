import React, { useState } from "react";
import RegionFilter from "../../Molecules/RegionFilter/RegionFilter";
import * as UI from "./style";

const Aside = () => {
  const [regionSelect, setRegionSelect] = useState(false);

  const handleRegionClick = () => {
    setRegionSelect(!regionSelect);
  };

  return (
    <UI.Container>
      <div onClick={handleRegionClick}>지역선택</div>
      {regionSelect ? <RegionFilter /> : null}
      <div>날짜 선택</div>
      <div>가격순 정렬</div>
      <div>별점순 정렬</div>
      <div>리뷰순 정렬</div>
    </UI.Container>
  );
};

export default Aside;
