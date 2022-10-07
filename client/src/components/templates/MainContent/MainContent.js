import React, { useEffect, useState } from "react";
import CampingCard from "../../organisms/CampingCard/CampingCard";
import MainMessage from "../MainMessage/MainMessage";
import * as S from "./style";
import axios from "axios";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { sortCheck } from "../../../redux/reducers/sortSlice";

const MainContent = () => {
  const [renderCampingList, setRenderCampingList] = useState([]);
  const [campingList, setCampingList] = useState([]);
  const selectRegion = useSelector((state) => state.region);
  const selectSort = useSelector((state) => state.sort);
  const dispatch = useDispatch();

  const getCampingData = async () => {
    try {
      const { data } = await axios.get(`${process.env.REACT_APP_API_URL}/main`);
      setCampingList(data);
      setRenderCampingList(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getCampingData();
  }, []);

  useEffect(() => {
    if (selectRegion === "전체") {
      setRenderCampingList(campingList);
    } else {
      const filteredCampingList = campingList.filter((el) => {
        return el.place.split(" ")[0].includes(selectRegion);
      });
      setRenderCampingList(filteredCampingList);
    }
  }, [selectRegion]);

  useEffect(() => {
    let sortArr = [];
    if (selectSort === "price") {
      sortArr = campingList.sort((a, b) => {
        return a.price - b.price;
      });
      setRenderCampingList([...sortArr]);
      dispatch(sortCheck(""));
    } else if (selectSort === "vote") {
      alert("서비스 준비중입니다.");
      dispatch(sortCheck(""));
      return;
    } else if (selectSort === "review") {
      alert("서비스 준비중입니다.");
      dispatch(sortCheck(""));
      return;
    }
  }, [selectSort]);

  return (
    <S.PostContainer>
      {renderCampingList.length === 0 ? (
        <MainMessage />
      ) : (
        renderCampingList.map((el) => {
          return <CampingCard key={el.campId} camplist={el} />;
        })
      )}
    </S.PostContainer>
  );
};

export default MainContent;
