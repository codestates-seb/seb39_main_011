import React from "react";
import styled from "styled-components";

const SidebarItem = ({ tab, isActive }) => {
  return isActive === true ? (
    <ActiveBox>
      <p>{tab.name}</p>
    </ActiveBox>
  ) : (
    <Box>
      <p>{tab.name}</p>
    </Box>
  );
};
export default SidebarItem;

const ActiveBox = styled.div`
  background-color: #f3f3f3;
  color: #ea5b5b;
  margin: 1rem 0;
  padding: 1rem 0 1rem 2rem;
  font-weight: 700;
  font-size: 15px;
`;

const Box = styled.div`
  margin: 1rem 0;
  padding: 1rem 0 1rem 2rem;
  font-weight: 700;
  font-size: 15px;
`;
