import React from "react";
import styled from "styled-components";

const SidebarItem = ({ tab, isActive }) => {
  return (
    <Box>
      <div className={isActive ? "clicked" : ""}>
        <p className="hide">{tab.icon}</p>
        <p>{tab.name}</p>
      </div>
    </Box>
  );
};

export default SidebarItem;

const Box = styled.div`
  width: 100%;
  height: 45px;
  font-weight: 700;
  font-size: 15px;
  cursor: pointer;
  display: flex;

  div {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 10px;
    color: var(--main-color-1);
    font-weight: 700;
    font-size: 16px;

    @media ${(props) => props.theme.tablet} {
      font-size: 15px;

      .hide {
        display: none;
      }
    }

    @media ${(props) => props.theme.mypageTablet} {
      gap: 0;
      padding: 0 10px;
      font-size: 13px;
    }
  }

  .clicked {
    margin-left: 0;
    background-color: var(--main-color-5);
    width: 100%;
    padding: 0 1rem;
    border-radius: 30px;

    @media ${(props) => props.theme.tablet} {
      font-size: 15px;
      padding: 0 1rem;
    }

    @media ${(props) => props.theme.mypageTablet} {
      padding: 0 10px;
      font-size: 13px;
    }
  }
`;
