import React from "react";
import styled from "styled-components";

const InputLabel = (props) => {
  const onInput = props.on;

  return (
    <Container>
      {props.icon}
      <label htmlFor={props.id}>{props.children}</label>
      {!onInput ? (
        <input
          type={props.type}
          id={props.id}
          name={props.name}
          onChange={props.onChange}
          value={props.value}
          max={props.max}
          min={props.min}
        ></input>
      ) : null}
    </Container>
  );
};

const Container = styled.fieldset`
  display: flex;
  align-items: center;
  gap: 5px;

  > svg {
    width: 20px;
  }

  > label {
    color: var(--main-color-0);
    font-weight: 600;
    /* padding: 15px 0; */
    padding-right: 10px;
    display: inline-block;
    cursor: pointer;
  }

  > input[type="date"] {
    font-size: 12px;
    border: 2px solid var(--main-color-3);
    border-radius: 5px;
    width: 100px;
    padding: 5px;
    /* flex-grow: 1; */

    &:focus {
      outline: none;
      border-color: var(--main-color-1);
    }
  }

  > input[type="radio"]:checked {
    accent-color: var(--main-color-1);
  }
`;

export default InputLabel;
