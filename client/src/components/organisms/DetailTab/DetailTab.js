import React, { useState, useEffect } from "react";
import * as S from "./style";
import DetailInfo from "../../molecules/DetailInfo/DetailInfo";
import DetailReviews from "../DetailReviews/DetailReviews";
import { useParams } from "react-router-dom";
import { instance } from "../../../apis/instance";

const DetailTab = () => {
  const [currentTab, setCurrentTab] = useState(0);
  const [camp, setCamp] = useState({});
  const campId = useParams();

  const getCampingData = async () => {
    try {
      const { data } = await instance.get(
        `/admin/post/73`
        // `${process.env.REACT_APP_API_URL}/admin/post/${campId.id}`
      );
      setCamp(data[0]);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getCampingData();
  });

  const tabMenu = [
    { title: "기본 정보", content: <DetailInfo camp={camp} /> },
    { title: "후기", content: <DetailReviews camp={camp} /> },
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
