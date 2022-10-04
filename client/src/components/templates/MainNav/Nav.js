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

  const filterBtn = [
    {
      name: "가격순",
      handler: priceSortHandler,
    },
    {
      name: "별점순",
      handler: voteSortHandler,
    },
    {
      name: "리뷰순",
      handler: reviewSortHandler,
    },
  ];
  return (
    <S.NavContainer>
      <S.Filter>
        <div>
          {filterBtn.map((el, idx) => {
            return (
              <InputLabel
                key={idx}
                type="radio"
                id="price"
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
