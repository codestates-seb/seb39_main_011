import React, { useState } from "react";
import RegionFilter from "../../organisms/RegionFilter/RegionFilter";
import todayGenerator from "../../../utils/date";
import * as S from "./style";
import { useDispatch } from "react-redux";
import { sortCheck } from "../../../redux/reducers/sortSlice";
import InputLabel from "../../atoms/InputLabel";
import Toast from "../../atoms/Toast";

import { ReactComponent as LocationIcon } from "./../../../svg/location.svg";
import { ReactComponent as StarIcon } from "./../../../svg/revstar.svg";
import { ReactComponent as ReviewIcon } from "./../../../svg/review.svg";
import { ReactComponent as CoinIcon } from "./../../../svg/coin.svg";
import { ReactComponent as CalendarIcon } from "./../../../svg/calendar.svg";

const MainAside = () => {
  let { today, todayPlusTwoMonth } = todayGenerator();
  const [date, setDate] = useState(today);
  const dispatch = useDispatch();

  const dateHandler = (e) => {
    setDate(e.target.value);
    Toast.fire({
      icon: "info",
      title: "서비스 준비중입니다.",
    });
  };
  const priceSortHandler = (e) => {
    dispatch(sortCheck(e.target.id));
  };
  const voteSortHandler = (e) => {
    dispatch(sortCheck(e.target.id));
  };
  const reviewSortHandler = (e) => {
    dispatch(sortCheck(e.target.id));
  };

  const sortBtn = [
    {
      name: "가격순 정렬",
      id: "price",
      icon: <CoinIcon />,
      handler: priceSortHandler,
    },
    {
      name: "별점순 정렬",
      id: "vote",
      icon: <StarIcon />,
      handler: voteSortHandler,
    },
    {
      name: "리뷰순 정렬",
      id: "review",
      icon: <ReviewIcon fill="var(--main-color-1)" />,
      handler: reviewSortHandler,
    },
  ];

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
        onChange={dateHandler}
        id="date"
        name="date"
      >
        날짜 선택
      </InputLabel>
      {sortBtn.map((el, idx) => {
        return (
          <InputLabel
            icon={el.icon}
            key={idx}
            type="radio"
            id={el.id}
            name="sorting"
            onChange={el.handler}
          >
            {el.name}
          </InputLabel>
        );
      })}
    </S.AsideContainer>
  );
};

export default MainAside;
