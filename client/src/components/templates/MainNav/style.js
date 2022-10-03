import styled from "styled-components";

export const NavContainer = styled.div`
  display: none;
  height: 50px;
  margin-bottom: 20px;
  border-radius: 5px;
  border: 1px solid red;

  @media (max-width: 670px) {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`;
