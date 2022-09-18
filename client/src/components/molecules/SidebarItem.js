import React from "react";
import styled from "styled-components";

const SidebarItem = ({ tab, isActive }) => {
  return isActive === true ? (
    <Box className="active">
      <p>{tab.name}</p>
    </Box>
  ) : (
    <div>
      <p>{tab.name}</p>
    </div>
  );
};

export default SidebarItem;

const Box = styled.div``;
