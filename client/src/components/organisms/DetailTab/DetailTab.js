import React, { useState } from "react";
import styled from "styled-components";

const DetailTab = () => {
  const [currentTab, setCurrentTab] = useState(0);

  const tabMenu = [
    { title: "기본정보", content: <div>기본정보 컨텐츠</div> },
    { title: "후기", content: <div>후기 컨텐츠</div> },
  ];

  const handleTab = (idx) => {
    setCurrentTab(idx);
  };

  return (
    <TabContainer>
      <TabBtn>
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
      </TabBtn>
      {tabMenu[currentTab].content}
    </TabContainer>
  );
};

const TabContainer = styled.div``;

const TabBtn = styled.div`
  display: flex;

  > div {
    padding: 10px;
    width: 100px;
    text-align: center;
  }

  > .border {
    border-bottom: 1px solid red;
  }
`;

export default DetailTab;
