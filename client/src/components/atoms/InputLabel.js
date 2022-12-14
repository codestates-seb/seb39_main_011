import React, { useEffect, useRef } from "react";
import styled from "styled-components";

const InputLabel = (props) => {
  const onInput = props.on;
  const inputRef = useRef(null);

  useEffect(() => {
    if (props.disable === "true") inputRef.current.disabled = true;
  }, [props.disable]);

  return (
    <Container noneInput={props.none} textarea={props.textarea}>
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
          ref={inputRef}
          required
        />
      ) : null}
      {props.textarea ? (
        <textarea
          onChange={props.onChange}
          id={props.id}
          name={props.name}
          required
        />
      ) : null}
    </Container>
  );
};

const Container = styled.fieldset`
  display: flex;
  flex-wrap: ${(props) => (props.textarea ? "wrap" : null)};
  align-items: center;
  gap: 5px;

  > svg {
    width: 20px;
  }

  > label {
    width: ${(props) => (props.noneInput ? "auto" : "80px")};
    color: var(--main-color-1);
    font-weight: 700;
    display: inline-block;
    cursor: pointer;
    padding: ${(props) => (props.noneInput ? "10px" : "auto")};
    border-radius: ${(props) => (props.noneInput ? "30px" : "none")};

    &:hover {
      background-color: ${(props) =>
        props.noneInput ? "var(--main-color-4)" : "none"};
      color: ${(props) => (props.noneInput ? "#fff" : "none")};
    }
  }

  > input {
    display: ${(props) => (props.noneInput ? "none" : "inline")};
  }

  > input[type="date"] {
    border: 2px solid var(--main-color-2);
    border-radius: 5px;
    width: 130px;
    padding: 5px;

    &:focus {
      outline: none;
      border-color: var(--main-color-1);
    }
  }

  > input[type="text"],
  input[type="number"] {
    border: 2px solid var(--main-color-4);
    border-radius: 5px;
    width: 100px;
    padding: 5px;
    flex-grow: 1;

    &:focus {
      outline: none;
      border-color: var(--main-color-3);
    }
  }

  > input[type="radio"]:checked {
    accent-color: var(--main-color-2);
  }

  > textarea {
    width: 100%;
    height: 80px;
    border: 2px solid #e3caa5;
    border-radius: 5px;
    padding: 7px;

    &:focus {
      outline: none;
      border-color: var(--main-color-3);
    }
  }
`;

export default InputLabel;
