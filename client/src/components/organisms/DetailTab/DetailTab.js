import React, { useState, useEffect } from "react";
import * as S from "./style";
import DetailInfo from "../../molecules/DetailInfo/DetailInfo";
import DetailReviews from "../DetailReviews/DetailReviews";
import { useParams } from "react-router-dom";
import { instance } from "../../../apis/instance";

const DetailTab = () => {
  const [currentTab, setCurrentTab] = useState(0);
  const [campInfo, setCamp] = useState({});
  const [campReviews, setCampReviews] = useState([]);
  const campId = useParams();

  const getCampingData = async () => {
    try {
      const { data } = await instance.get(`/detail/${campId.id}`);
      setCamp(data.dto);
      setCampReviews(data.reviews);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getCampingData();
  }, []);

  const tabMenu = [
    { title: "기본 정보", content: <DetailInfo campInfo={campInfo} /> },
    { title: "후기", content: <DetailReviews campReviews={campReviews} /> },
  ];

  const handleTab = (idx) => {
    setCurrentTab(idx);
  };

  return (
    <S.TabContainer>
      <S.TabBtn>
        {tabMenu.map((el, idx) => {
          return (
            <div
              key={idx}
              onClick={() => handleTab(idx)}
              className={currentTab === idx ? "border" : null}
            >
              {el.title}
            </div>
          );
        })}
      </S.TabBtn>
      {tabMenu[currentTab].content}
    </S.TabContainer>
  );
};

export default DetailTab;
