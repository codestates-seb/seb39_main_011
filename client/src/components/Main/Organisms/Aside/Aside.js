import React, { useState } from "react";
import RegionFilter from "../../Molecules/RegionFilter/RegionFilter";
import * as UI from "./style";
import todayGenerator from "../../../../utils/date";

const Aside = () => {
  let { today, todayPlusTwoMonth } = todayGenerator();

  const [regionSelect, setRegionSelect] = useState(false);
  const [date, setDate] = useState(today);

  const handleRegionClick = () => {
    setRegionSelect(!regionSelect);
  };

  return (
    <UI.Container>
      <div onClick={handleRegionClick}>지역선택</div>
      {regionSelect ? <RegionFilter /> : null}
      <label htmlFor="date">날짜 선택</label>
      <input
        type="date"
        value={date}
        min={today}
        max={todayPlusTwoMonth}
        onChange={(e) => setDate(e.target.value)}
        id="date"
        name="date"
      />
      <div>가격순 정렬</div>
      <div>별점순 정렬</div>
      <div>리뷰순 정렬</div>
    </UI.Container>
  );
};

export default Aside;
