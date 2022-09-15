import React from "react";
import RegionFilter from "../../Molecules/RegionFilter/RegionFilter";
import * as UI from "./style";

const Aside = () => {
  return (
    <UI.Container>
      <div>지역선택</div>
      <RegionFilter />
      <div>날짜 선택</div>
      <div>가격순 정렬</div>
      <div>별점순 정렬</div>
      <div>리뷰순 정렬</div>
    </UI.Container>
  );
};

export default Aside;
