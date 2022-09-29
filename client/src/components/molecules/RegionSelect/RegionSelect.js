import React from "react";
import { checkedRegionHandler } from "../../../redux/reducers/regionSlice";
import { useDispatch } from "react-redux";
import * as S from "./style";

const RegionSelect = ({ region, idx }) => {
  const dispatch = useDispatch();

  const clickHandler = (event) => {
    dispatch(checkedRegionHandler(event.target.id));
  };

  return (
    <S.Container>
      <input type="radio" id={`regionChk${idx}`} name="region" />
      <label htmlFor={`regionChk${idx}`} onClick={clickHandler} id={region}>
        {region}
      </label>
    </S.Container>
  );
};

export default RegionSelect;
