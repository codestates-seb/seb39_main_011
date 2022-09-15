import styled from "styled-components";

export const Container = styled.div`
  width: 300px;
  height: 300px;
`;

export const Img = styled.img`
  width: 300px;
  height: 200px;
  display: block;
`;

export const FlexLayout = styled.div`
  display: flex;
  justify-content: space-between;
  height: 100px;
  padding: 10px;
  background-color: beige;

  > div {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
`;
