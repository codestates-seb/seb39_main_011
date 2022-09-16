import styled from "styled-components";

export const Container = styled.div`
  display: none;
  height: 50px;
  padding: 0 8px;
  margin-bottom: 20px;
  background-color: #ffffff;
  border-radius: 5px;

  @media (max-width: 670px) {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`;
