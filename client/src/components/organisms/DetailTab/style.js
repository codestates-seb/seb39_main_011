import styled from "styled-components";

export const TabContainer = styled.div`
  width: 100%;
`;

export const TabBtn = styled.div`
  display: flex;

  > div {
    padding: 10px;
    width: 100px;
    font-weight: 600;
    text-align: center;
    color: var(--main-color-3);
    border: 2px solid var(--main-color-3);
    border-bottom: none;
    cursor: pointer;

    &:nth-child(1) {
      border-top-left-radius: 5px;
    }
    &:nth-child(2) {
      border-top-right-radius: 5px;
    }
  }

  > .border {
    background-color: var(--main-color-3);
    color: #fff;
  }
`;
