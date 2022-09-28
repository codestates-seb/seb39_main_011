import styled from "styled-components";

export const AsideContainer = styled.aside`
  width: 300px;
  /* height: calc(100vh - 94px); */
  height: 660px;
  padding: 20px;
  background-color: #ffffff;
  border-radius: 5px;
  box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.25);

  position: sticky;
  top: 74px;
  z-index: 999;

  form {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  textarea {
    width: 100%;
    height: 80px;
    border: 2px solid #e3caa5;
    border-radius: 5px;

    &:focus {
      outline: none;
      border-color: var(--main-color-1);
    }
  }

  @media (max-width: 820px) {
    display: none;
  }
`;

export const Input = styled.div`
  margin: 5px 0;
  display: flex;
  flex-direction: column;
  flex-direction: ${(props) => props.flex || "row"};
  align-items: ${(props) => (props.flex === "column" ? "none" : "center")};
  gap: 10px;

  > label {
    width: 100px;
    color: #7b6250;
    font-weight: 700;
  }
  > input {
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
`;
