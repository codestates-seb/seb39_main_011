import styled from "styled-components";

export const ReviewContainer = styled.li`
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 10px;
  border-bottom: 1px solid #e5e5e5;

  flex-grow: 1;

  span:nth-of-type(1) {
    margin-right: 5px;
  }
`;

export const ImgBox = styled.div`
  display: flex;
  gap: 10px;

  > img {
    width: 70px;
    height: 70px;
    margin-top: 10px;
  }
`;
