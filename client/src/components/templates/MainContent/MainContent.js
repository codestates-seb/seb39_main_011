import React, { useEffect, useState } from "react";
import CampingCard from "../../organisms/CampingCard/CampingCard";
import MainMessage from "../MainMessage/MainMessage";
import * as S from "./style";
import axios from "axios";
import { useSelector } from "react-redux";

const MainContent = () => {
  const [renderCampingList, setRenderCampingList] = useState([]);
  const [campingList, setCampingList] = useState([]);
  const selectRegion = useSelector((state) => state.region);
  const selectSort = useSelector((state) => state.sort);

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
    } else if (selectSort === "vote") {
      alert("서비스 준비중입니다.");
      return;
    } else if (selectSort === "review") {
      alert("서비스 준비중입니다.");
      return;
    }
  }, [selectSort]);

  return (
    <S.PostContainer>
      {renderCampingList.length === 0 ? (
        <MainMessage />
      ) : (
        renderCampingList.map((el) => {
          return <CampingCard key={el.camp_id} camplist={el} />;
        })
      )}
    </S.PostContainer>
  );
};

export default MainContent;
