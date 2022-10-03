import React, { useState, useEffect } from "react";
import * as S from "./style";
import DetailInfo from "../../molecules/DetailInfo/DetailInfo";
import DetailReviews from "../DetailReviews/DetailReviews";

const DetailTab = () => {
  const [currentTab, setCurrentTab] = useState(0);

  const tabMenu = [
    { title: "기본정보", content: <DetailInfo /> },
    { title: "후기", content: <DetailReviews /> },
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
