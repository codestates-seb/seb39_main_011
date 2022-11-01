import React, { useState } from "react";
import Carousel from "../../organisms/Carousel/Carousel";
import DetailInfo from "../../molecules/DetailInfo/DetailInfo";
import DetailReviews from "../../organisms/DetailReviews/DetailReviews";
import * as S from "./style";

const DetailContent = ({ campReviews, campInfo, campId }) => {
  const [currentTab, setCurrentTab] = useState(0);

  const tabMenu = [
    {
      title: "기본 정보",
      content: <DetailInfo campInfo={campInfo} campId={campId} />,
    },
    { title: "후기", content: <DetailReviews campReviews={campReviews} /> },
  ];

  const handleTab = (idx) => {
    setCurrentTab(idx);
  };

  return (
    <S.DetailMainContainer>
      <Carousel picture={campInfo.file_path} />
      <S.Tab>
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
      </S.Tab>
    </S.DetailMainContainer>
  );
};

export default DetailContent;
