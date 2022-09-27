import styled from "styled-components";

export const AsideContainer = styled.aside`
  width: 300px;
  height: calc(100vh - 94px);
  padding: 20px;
  border-radius: 5px;
  background-color: #ffffff;

  position: sticky;
  top: 74px;
  z-index: 999;

  @media (max-width: 670px) {
    display: none;
  }
`;

export const Label = styled.label`
  padding: 15px 0;
  padding-right: 10px;
  display: inline-block;
  cursor: pointer;

  &:hover {
    color: red;
  }
`;

export const FlexLayout = styled.div`
  display: flex;
  align-items: center;
`;
