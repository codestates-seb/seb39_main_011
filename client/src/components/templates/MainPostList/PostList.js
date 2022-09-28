import React, { useEffect, useState } from "react";
import PostCard from "./../../organisms/MainPostCard/PostCard";
import * as S from "./style";
import axios from "axios";
import { useSelector } from "react-redux";

const PostsList = () => {
  const [renderCampingList, setRenderCampingList] = useState([]);
  const [campingList, setCampingList] = useState([]);
  const selectRegion = useSelector((state) => state.region);

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
        return el.place.includes(selectRegion);
      });
      setRenderCampingList(filteredCampingList);
    }
  }, [selectRegion]);

  return (
    <S.PostContainer>
      {renderCampingList.map((el) => {
        return <PostCard key={el.camp_id} camplist={el} />;
      })}
    </S.PostContainer>
  );
};

export default PostsList;
