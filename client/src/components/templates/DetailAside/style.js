import styled from "styled-components";

export const AsideContainer = styled.aside`
  width: 300px;
  height: 640px;
  padding: 10px 20px;
  background-color: #ffffff;
  border-radius: 5px;
  box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.25);

  position: sticky;
  top: 94px;
  z-index: 999;

  form {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 7px;
  }

  @media (max-width: 820px) {
    display: none;
  }
`;
