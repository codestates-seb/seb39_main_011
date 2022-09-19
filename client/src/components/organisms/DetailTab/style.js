import styled from "styled-components";

export const TabContainer = styled.div`
  width: 100%;
`;

export const TabBtn = styled.div`
  display: flex;

  > div {
    padding: 10px;
    width: 100px;
    text-align: center;
    cursor: pointer;
  }

  > .border {
    border-bottom: 1px solid red;
  }
`;
