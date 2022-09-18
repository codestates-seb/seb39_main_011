import React from "react";
import styled from "styled-components";
import { NavLink, useLocation } from "react-router-dom";
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
      {tabs.map((tab, idx) => {
        return (
          <NavLink to={tab.path} key={idx}>
            <SidebarItem
              tab={tab}
              isActive={pathName === tab.path ? true : false}
            />
          </NavLink>
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
