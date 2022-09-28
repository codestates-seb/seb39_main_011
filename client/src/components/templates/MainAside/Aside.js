import React, { useState } from "react";
import RegionFilter from "../../organisms/MainRegionFilter/RegionFilter";
import todayGenerator from "../../../utils/date";
import * as S from "./style";

const Aside = () => {
  let { today, todayPlusTwoMonth } = todayGenerator();
  const [date, setDate] = useState(today);
  const [click, setClick] = useState(false);

  const clickHandler = () => {
    console.log("실행");
    setClick(!click);
  };

  return (
    <S.AsideContainer>
      <fieldset>
        <S.Label>지역 선택</S.Label>
        <RegionFilter />
      </fieldset>

      <fieldset>
        <S.Label htmlFor="date" title="두 달 내로만 선택할 수 있습니다.">
          날짜 선택
        </S.Label>
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
        <S.FlexLayout>
          <S.Label htmlFor="price">가격 정렬</S.Label>
          <input type="radio" id="price" name="sorting" />
        </S.FlexLayout>
        <S.FlexLayout>
          <S.Label htmlFor="vote">별점 정렬</S.Label>
          <input type="radio" id="vote" name="sorting" />
        </S.FlexLayout>
        <S.FlexLayout>
          <S.Label htmlFor="review">리뷰 정렬</S.Label>
          <input type="radio" id="review" name="sorting" />
        </S.FlexLayout>
      </fieldset>
    </S.AsideContainer>
  );
};

export default Aside;
