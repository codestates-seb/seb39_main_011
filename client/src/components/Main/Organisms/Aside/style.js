import styled from "styled-components";

export const AsideContainer = styled.aside`
  width: 300px;
  padding: 30px;
  border-radius: 5px;
  background-color: #ffffff;

  @media (max-width: 670px) {
    display: none;
  }
`;

export const Label = styled.label`
  padding: 15px 0;
  padding-right: 10px;
  display: inline-block;
  cursor: pointer;
`;

export const FlexLayout = styled.div`
  display: flex;
  align-items: center;
`;
