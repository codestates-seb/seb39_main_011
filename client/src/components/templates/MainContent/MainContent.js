import React, { useEffect, useState } from "react";
import CampingCard from "../../organisms/CampingCard/CampingCard";
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
      const { data } = await axios.get("/main");
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

  // useEffect(() => {
  //   if (selectSort === "price") {
  //     const sortArr = campingList.sort((a, b) => {
  //       if (a.price > b.price) {
  //         return -1;
  //       } else if (a.price < b.price) {
  //         return 1;
  //       } else {
  //         return 0;
  //       }
  //     });
  //     setRenderCampingList(sortArr);
  //   } else if (selectSort === "vote") {
  //     const sortArr = campingList.sort((a, b) => {
  //       if (a.vote > b.vote) {
  //         return -1;
  //       } else if (a.vote < b.vote) {
  //         return 1;
  //       } else {
  //         return 0;
  //       }
  //     });
  //     setRenderCampingList(sortArr);
  //   } else if (selectSort === "review") {
  //     const sortArr = campingList.sort((a, b) => {
  //       if (a.review > b.review) {
  //         return -1;
  //       } else if (a.review < b.review) {
  //         return 1;
  //       } else {
  //         return 0;
  //       }
  //     });
  //     setRenderCampingList(sortArr);
  //   }
  // }, [selectSort]);

  return (
    <S.PostContainer>
      {renderCampingList.map((el) => {
        return <CampingCard key={el.camp_id} camplist={el} />;
      })}
    </S.PostContainer>
  );
};

export default MainContent;
