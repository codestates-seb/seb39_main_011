import React, { useState } from "react";
import styled from "styled-components";
import { NavLink, useLocation } from "react-router-dom";
import SidebarItem from "../molecules/SidebarItem";

const MySideBar = () => {
  const paths = useLocation().pathname;
  const pathName = useLocation().pathname.split("/")[1];

  console.log(pathName);
  const clientTabs = [
    { name: "내 정보", path: "/client/mypage/myinfo" },
    { name: "예약 조회", path: "/client/mypage/rez" },
    { name: "이전 예약 조회", path: "/client/mypage/pastrez" },
    { name: "내 리뷰 보기", path: "/client/mypage/review" },
  ];

  const adminTabs = [
    { name: "내 정보", path: "/admin/mypage/myinfo" },
    { name: "캠핑장 등록 및 관리", path: "/admin/mypage/post" },
    { name: "캠핑장 예약 관리", path: "/admin/mypage/rez" },
    { name: "캠핑장 리뷰 관리", path: "/admin/mypage/review" },
  ];

  return (
    <SideBarContainer>
      {(pathName === "client" ? clientTabs : adminTabs).map((tab, idx) => {
        return (
          <NavLink to={tab.path} key={idx}>
            <SidebarItem
              tab={tab}
              isActive={paths === tab.path ? true : false}
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
