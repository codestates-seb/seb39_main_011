import styled from "styled-components";

export const DetailMainContainer = styled.section`
  width: calc(100% - 320px);
  background-color: #ffffff;
  border-radius: 5px;
  flex-grow: 1;
  position: relative;
`;

export const Tab = styled.div`
  width: 100%;
`;

export const TabBtn = styled.div`
  display: flex;

  > div {
    padding: 10px;
    width: 100px;
    font-size: 13px;
    font-weight: 700;
    text-align: center;
    color: var(--main-color-4);
    border: 2px solid var(--main-color-4);
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
    background-color: var(--main-color-4);
    color: #fff;
  }
`;
