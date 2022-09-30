import styled from "styled-components";

export const AsideContainer = styled.aside`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  width: 300px;
  height: 500px;
  padding: 20px;
  border-radius: 5px;
  background-color: #ffffff;

  position: sticky;
  top: 94px;
  z-index: 999;

  box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.25);

  @media (max-width: 670px) {
    display: none;
  }
`;
