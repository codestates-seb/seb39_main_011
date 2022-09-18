import React from "react";
import styled from "styled-components";
import { Link, useLocation } from "react-router-dom";
import SidebarItem from "../molecules/SidebarItem";

const MySideBar = () => {
  const pathName = useLocation().pathname;

  const tabs = [
    { name: "내 정보", path: "/client/mypage/myinfo" },
    { name: "예약 조회", path: "/client/mypage/rez" },
    { name: "이전 예약 조회", path: "/client/mypage/pastrez" },
    { name: "내 리뷰 보기", path: "/client/mypage/review" },
  ];

  return (
    <SideBarContainer>
      {tabs.map((tab, index) => {
        return (
          <Link to={tab.path} key={index}>
            <SidebarItem
              tab={tab}
              isActive={pathName === tab.path ? true : false}
            />
          </Link>
        );
      })}
    </SideBarContainer>
  );
};

export default MySideBar;

const SideBarContainer = styled.div`
  width: 220px;
  height: 570px;
  background-color: #fff;
  margin-right: 20px;
  border-radius: 5px;
`;
