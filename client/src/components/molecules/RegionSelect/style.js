import styled from "styled-components";

export const Container = styled.li`
  label {
    display: inline-block;
    cursor: pointer;
    background-color: #f0eeee;
    color: var(--main-color-0);
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
    border-radius: 30%;
    padding: 10px 15px;
    margin: 5px;
    font-weight: 600;
  }

  input {
    display: none;
  }

  input:checked + label {
    color: #fff;
    background-color: var(--main-color-1);
  }
`;
