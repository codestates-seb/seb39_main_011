import React, { useState } from "react";
import RegionFilter from "../../organisms/RegionFilter/RegionFilter";
import todayGenerator from "../../../utils/date";
import * as S from "./style";
import { useDispatch } from "react-redux";
import { sortCheck } from "../../../redux/reducers/sortSlice";

import InputLabel from "../../atoms/InputLabel";

import { ReactComponent as LocationIcon } from "./../../../svg/location.svg";
import { ReactComponent as StarIcon } from "./../../../svg/revstar.svg";
import { ReactComponent as ReviewIcon } from "./../../../svg/review.svg";
import { ReactComponent as CoinIcon } from "./../../../svg/coin.svg";
import { ReactComponent as CalendarIcon } from "./../../../svg/calendar.svg";

const MainAside = () => {
  let { today, todayPlusTwoMonth } = todayGenerator();
  const [date, setDate] = useState(today);
  const dispatch = useDispatch();

  console.log(date);

  const sortHandler = (e) => {
    dispatch(sortCheck(e.target.id));
  };

  return (
    <S.AsideContainer>
      <InputLabel icon={<LocationIcon />} on="false">
        지역선택
      </InputLabel>
      <RegionFilter />
      <InputLabel
        icon={<CalendarIcon />}
        type="date"
        value={date}
        min={today}
        max={todayPlusTwoMonth}
        onChange={(e) => setDate(e.target.value)}
        id="date"
        name="date"
      >
        날짜 선택
      </InputLabel>
      <InputLabel
        icon={<CoinIcon />}
        type="radio"
        id="price"
        name="sorting"
        onChange={sortHandler}
      >
        가격순 정렬
      </InputLabel>
      <InputLabel
        icon={<StarIcon />}
        type="radio"
        id="vote"
        name="sorting"
        onChange={sortHandler}
      >
        별점순 정렬
      </InputLabel>
      <InputLabel
        icon={<ReviewIcon />}
        type="radio"
        id="review"
        name="sorting"
        onChange={sortHandler}
      >
        리뷰순 정렬
      </InputLabel>
    </S.AsideContainer>
  );
};

export default MainAside;
