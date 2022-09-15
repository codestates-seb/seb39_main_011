import styled from "styled-components";

export const Container = styled.div`
  width: 300px;
  height: 300px;
  cursor: pointer;
`;

export const Img = styled.img`
  width: 300px;
  height: 200px;
  display: block;
  border-radius: 5px 5px 0 0;
`;

export const FlexLayout = styled.div`
  display: flex;
  justify-content: space-between;
  height: 100px;
  padding: 15px;
  border-radius: 0 0 5px 5px;
  background-color: #ffffff;

  > div {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
`;
