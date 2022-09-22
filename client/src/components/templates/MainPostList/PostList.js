import React, { useEffect, useState } from "react";
import PostCard from "./../../organisms/MainPostCard/PostCard";
import * as S from "./style";
import axios from "axios";

const PostsList = () => {
  const [campingList, setCampingList] = useState([]);
  // const campingList = [];
  console.log(campingList);

  const getCampingData = async () => {
    try {
      const { data } = await axios.get("/main");
      console.log(data);
      setCampingList(data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getCampingData();
  }, []);

  return (
    <S.PostContainer>
      {campingList.map((el) => {
        return <PostCard key={el.camp_id} camplist={el} />;
      })}
    </S.PostContainer>
  );
};

export default PostsList;
