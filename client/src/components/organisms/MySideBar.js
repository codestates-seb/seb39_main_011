import React from "react";
import styled from "styled-components";
import { NavLink, useLocation } from "react-router-dom";
import SidebarItem from "../molecules/SidebarItem";
import { ReactComponent as MyinfoPic } from "../../svg/myinfo.svg";
import { ReactComponent as RezPic } from "../../svg/rezpen.svg";
import { ReactComponent as PastRezPic } from "../../svg/pastrezbook.svg";
import { ReactComponent as RevPic } from "../../svg/revstar.svg";

const MySideBar = () => {
  const paths = useLocation().pathname;
  const pathName = useLocation().pathname.split("/")[1];

  console.log(pathName);
  const clientTabs = [
    { name: "내 정보", path: "/client/mypage/myinfo", icon: <MyinfoPic /> },
    { name: "예약 조회", path: "/client/mypage/rez", icon: <RezPic /> },
    {
      name: "이전 예약 조회",
      path: "/client/mypage/pastrez",
      icon: <PastRezPic />,
    },
    {
      name: "내 리뷰 보기",
      path: "/client/mypage/review",
      icon: <RevPic />,
    },
  ];

  const adminTabs = [
    { name: "내 정보", path: "/admin/mypage/myinfo", icon: <MyinfoPic /> },
    {
      name: "캠핑장 등록/관리",
      path: "/admin/mypage/post",
      icon: <RezPic />,
    },
    {
      name: "예약 관리",
      path: "/admin/mypage/rez",
      icon: <PastRezPic />,
    },
    {
      name: "리뷰 관리",
      path: "/admin/mypage/review",
      icon: <RevPic />,
    },
  ];

  const Tabs = {
    client: clientTabs,
    admin: adminTabs,
  };

  return (
    <SideBarContainer>
      <Title>마이페이지</Title>
      <TabBox>
        {Tabs[pathName].map((tab, idx) => {
          return (
            <NavLink to={tab.path} key={idx}>
              <SidebarItem
                tab={tab}
                isActive={paths === tab.path ? true : false}
              />
            </NavLink>
          );
        })}
      </TabBox>
    </SideBarContainer>
  );
};

export default MySideBar;

const SideBarContainer = styled.div`
  width: 220px;
  height: 570px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 15px;
  border-radius: 20px 0 0 20px;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;

  @media ${(props) => props.theme.tablet} {
    width: 90%;
    height: 45px;
    margin: 15px 15px 10px 15px;

    display: flex;
    justify-content: space-around;
    align-items: center;
  }
`;

const TabBox = styled.div`
  border: 3px solid var(--main-color-3);
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  padding-top: 1rem;
  border-radius: 0 0 0 20px;
`;

const Title = styled.div`
  width: 100%;
  background-color: var(--main-color-3);
  color: #fff;
  text-align: center;
  padding: 1.2rem;
  border-radius: 20px 0 0 0;
  font-size: 20px;
  font-weight: 700;
`;
