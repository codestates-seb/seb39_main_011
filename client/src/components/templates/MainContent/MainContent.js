import React, { useEffect, useState } from "react";
import CampingCard from "../../organisms/CampingCard/CampingCard";
import * as S from "./style";
import axios from "axios";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { sortCheck } from "../../../redux/reducers/sortSlice";
import BlankCard from "../../atoms/BlankCard";
import BlankBox from "../../atoms/BlankBox";
import Loading from "../../atoms/Loading";

const MainContent = () => {
  const [campingList, setCampingList] = useState([]);
  const [renderCampingList, setRenderCampingList] = useState([]);
  const selectRegion = useSelector((state) => state.region);
  const selectSort = useSelector((state) => state.sort);
  const dispatch = useDispatch();

  const [isLoading, setIsLoading] = useState(true);

  const getCampingData = async () => {
    try {
      const { data } = await axios.get(`${process.env.REACT_APP_API_URL}/main`);
      setCampingList(data);
      setRenderCampingList(data);
      setIsLoading(false);
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
      sortArr = campingList.sort((a, b) => {
        return b.starAge - a.starAge;
      });
      setRenderCampingList([...sortArr]);
      dispatch(sortCheck(""));
      return;
    } else if (selectSort === "review") {
      sortArr = campingList.sort((a, b) => {
        return b.reviewCount - a.reviewCount;
      });
      setRenderCampingList([...sortArr]);
      dispatch(sortCheck(""));
      return;
    }
  }, [selectSort]);

  return (
    <S.PostContainer>
      <>
        {isLoading ? (
          <Loading />
        ) : (
          <>
            {renderCampingList.length === 0 ? (
              <BlankBox />
            ) : (
              renderCampingList.map((el) => {
                return <CampingCard key={el.campId} camplist={el} />;
              })
            )}
            {renderCampingList.length % 2 === 1 ? <BlankCard /> : null}
          </>
        )}
      </>
    </S.PostContainer>
  );
};

export default MainContent;
