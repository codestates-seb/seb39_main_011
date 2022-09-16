import styled from "styled-components";

export const Container = styled.section`
  width: calc(100% - 320px);
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 20px;

  @media (max-width: 670px) {
    width: 100%;
  }
`;
