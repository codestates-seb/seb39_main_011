import styled from "styled-components";

export const ReviewContainer = styled.div`
  padding-top: 10px;
  border: 2px solid var(--main-color-4);
  border-radius: 0 5px 5px 5px;
`;

export const ReviewsInfo = styled.div`
  font-size: 15px;
  font-weight: 800;
  color: var(--main-color-3);
  display: flex;
  gap: 10px;
  padding: 20px;
`;

export const ReviewList = styled.ul`
  display: flex;
  flex-wrap: wrap;
`;
