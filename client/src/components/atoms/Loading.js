import React from "react";
import styled from "styled-components";

const Loading = () => {
  return (
    <LoadingDiv>
      <img src={`${process.env.PUBLIC_URL}/assets/spinner.gif`} alt="" />
    </LoadingDiv>
  );
};

export default Loading;

const LoadingDiv = styled.div`
  width: 100vw;
  height: 60vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;
