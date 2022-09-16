import React from "react";
import Region from "../../../../stories/Region";
import * as UI from "./style";

const RegionFilter = () => {
  const region = [
    "서울",
    "경기",
    "인천",
    "강원",
    "제주",
    "대전",
    "충북",
    "충남/세종",
    "부산",
    "울산",
    "경남",
    "대구",
    "경북",
    "광주",
    "전남",
    "전주/전북",
  ];

  return (
    <UI.Container>
      {region.map((el, idx) => {
        return <Region region={el} key={idx} idx={idx} />;
      })}
    </UI.Container>
  );
};

export default RegionFilter;
