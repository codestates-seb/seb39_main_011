import React from "react";
import styled from "styled-components";
import { ReactComponent as MyinfoPic } from "../../svg/myinfo.svg";

const SidebarItem = ({ tab, isActive }) => {
  return (
    <Box>
      <div className={isActive ? "clicked" : null}>
        <p>{tab.name}</p>
      </div>
    </Box>
  );
};

export default SidebarItem;

const Box = styled.div`
  margin: 1rem 0;
  font-weight: 700;
  font-size: 15px;
  cursor: pointer;
  margin: 0 5px;

  .clicked {
    background-color: var(--main-color-4);
    padding: 0.9rem 1rem;
    border-radius: 30px;
    margin: 0 5px;
  }

  @media ${(props) => props.theme.tablet} {
    padding: 0;
    margin: 0;
  }

  @media ${(props) => props.theme.mobile} {
    font-size: 13px;
  }
`;
