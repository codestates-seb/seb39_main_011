import React, { useState } from "react";
import styled from "styled-components";

const DetailTab = () => {
  const [tab, setTab] = useState(0);

  return (
    <TabContainer>
      <TabBtn>
        <div>기본정보</div>
        <div>후기</div>
      </TabBtn>
      <div>기본정보 컨텐츠</div>
      <div>후기 컨텐츠</div>
    </TabContainer>
  );
};

const TabContainer = styled.div``;

const TabBtn = styled.div`
  display: flex;

  > div {
    padding: 10px;
    width: 100px;
    border: 1px solid red;
    text-align: center;
  }
`;

const TabContent = styled.div``;

export default DetailTab;
