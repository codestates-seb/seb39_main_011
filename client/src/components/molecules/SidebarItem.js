import React from "react";
import styled from "styled-components";

const SidebarItem = ({ tab, isActive }) => {
  return (
    <Box>
      <div className={isActive && "clicked"}>
        <p>{tab.icon}</p>
        <p>{tab.name}</p>
      </div>
    </Box>
  );
};

export default SidebarItem;

const Box = styled.div`
  height: 45px;
  font-weight: 700;
  font-size: 15px;
  cursor: pointer;
  display: flex;

  div {
    margin-left: 15px;
    width: 170px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 10px;
    color: var(--main-color-5);
    font-weight: 700;
    font-size: 17px;
  }

  .clicked {
    margin-left: 0;
    background-color: var(--main-color-4);
    width: 200px;
    padding-left: 1.4rem;
    border-radius: 30px;
  }

  @media ${(props) => props.theme.tablet} {
    padding: 0;
    margin: 0;
  }

  @media ${(props) => props.theme.mobile} {
    font-size: 13px;
  }
`;
