import styled from "styled-components";

export const AsideContainer = styled.aside`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  width: 300px;
  /* height: calc(100vh - 94px); */
  height: 500px;
  padding: 20px;
  border-radius: 5px;
  background-color: #ffffff;

  position: sticky;
  top: 94px;
  z-index: 999;

  box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.25);

  input[type="date"] {
    font-size: 12px;
    border: 2px solid var(--main-color-3);
    border-radius: 5px;
    width: 100px;
    padding: 5px;
    flex-grow: 1;

    &:focus {
      outline: none;
      border-color: var(--main-color-1);
    }
  }

  input[type="radio"]:checked {
    accent-color: var(--main-color-1);
  }

  @media (max-width: 670px) {
    display: none;
  }
`;

export const Label = styled.label`
  color: var(--main-color-0);
  font-weight: 600;
  padding: 15px 0;
  padding-right: 10px;
  display: inline-block;
  cursor: pointer;
`;

export const FlexLayout = styled.div`
  display: flex;
  align-items: center;
  margin: 5px 0;
`;
