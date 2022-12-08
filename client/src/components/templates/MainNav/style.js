import styled from "styled-components";

export const NavContainer = styled.div`
  display: none;
  margin-bottom: 20px;
  border-radius: 5px;
  border: 2px solid var(--main-color-4);
  padding: 10px 5px;

  @media (max-width: 670px) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

export const Filter = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  > div {
    display: flex;
  }
`;
