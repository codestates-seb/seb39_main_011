import React, { useState } from "react";
import * as S from "./style";
import { MainBtn } from "../../atoms/Button";
import RegionFilter from "../../organisms/RegionFilter/RegionFilter";
import InputLabel from "../../atoms/InputLabel";
import { useDispatch } from "react-redux";
import { sortCheck } from "../../../redux/reducers/sortSlice";

const Nav = () => {
  const [selectFilter, setSelectFilter] = useState(false);
  const dispatch = useDispatch();

  const filterHandler = () => {
    setSelectFilter(!selectFilter);
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
      name: "가격순",
      id: "price",
      handler: priceSortHandler,
    },
    {
      name: "별점순",
      id: "vote",
      handler: voteSortHandler,
    },
    {
      name: "리뷰순",
      id: "review",
      handler: reviewSortHandler,
    },
  ];
  return (
    <S.NavContainer>
      <S.Filter>
        <div>
          {sortBtn.map((el, idx) => {
            return (
              <InputLabel
                key={idx}
                type="radio"
                id={el.id}
                name="sorting"
                none
                onChange={el.handler}
              >
                {el.name}
              </InputLabel>
            );
          })}
        </div>
        <MainBtn onClick={filterHandler}>지역/날짜 선택</MainBtn>
      </S.Filter>
      {selectFilter ? <RegionFilter /> : null}
    </S.NavContainer>
  );
};

export default Nav;
