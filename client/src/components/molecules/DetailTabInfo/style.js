import styled from "styled-components";

export const TabInfoContainer = styled.div`
  padding: 20px 20px 60px 20px;

  display: flex;
  flex-wrap: wrap;
  gap: 20px;

  .important_img {
    width: 200px;
    height: 130px;
    border: 1px solid red;
  }
`;

export const Info = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;

  @media (max-width: 670px) {
    gap: 10px;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 10px;
`;
