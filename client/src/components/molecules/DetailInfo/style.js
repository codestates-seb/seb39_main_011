import styled from "styled-components";

export const TabInfoContainer = styled.div`
  padding: 20px;

  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  border: 2px solid var(--main-color-4);
  border-radius: 0 5px 5px 5px;

  .important_img {
    width: 250px;
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
