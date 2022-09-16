import React, { useState } from "react";
import RegionFilter from "../../Molecules/RegionFilter/RegionFilter";
import * as UI from "./style";
import todayGenerator from "../../../../utils/date";

const Aside = () => {
  let { today, todayPlusTwoMonth } = todayGenerator();
  const [date, setDate] = useState(today);

  // const [regionSelect, setRegionSelect] = useState(false);

  // const handleRegionClick = () => {
  //   setRegionSelect(!regionSelect);
  // };

  return (
    <UI.Container>
      <fieldset>
        <UI.Label>지역 선택</UI.Label>
        <RegionFilter />
      </fieldset>

      <fieldset>
        <UI.Label htmlFor="date" title="두 달 내로만 선택할 수 있습니다.">
          날짜 선택
        </UI.Label>
        <input
          type="date"
          value={date}
          min={today}
          max={todayPlusTwoMonth}
          onChange={(e) => setDate(e.target.value)}
          id="date"
          name="date"
          title="두 달 내로만 선택할 수 있습니다."
        />
      </fieldset>

      <fieldset>
        <UI.FlexLayout>
          <UI.Label htmlFor="price">가격 정렬</UI.Label>
          <input type="radio" id="price" name="sorting" />
        </UI.FlexLayout>
        <UI.FlexLayout>
          <UI.Label htmlFor="vote">별점 정렬</UI.Label>
          <input type="radio" id="vote" name="sorting" />
        </UI.FlexLayout>
        <UI.FlexLayout>
          <UI.Label htmlFor="review">리뷰 정렬</UI.Label>
          <input type="radio" id="review" name="sorting" />
        </UI.FlexLayout>
      </fieldset>
    </UI.Container>
  );
};

export default Aside;
