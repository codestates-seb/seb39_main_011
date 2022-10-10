import React from "react";
import styled from "styled-components";
import { TextField } from "@mui/material";

const LoginInput = ({ id, label, onChange, name, innerRef, valid, type }) => {
  return (
    <>
      <TextFieldStyle
        type={type}
        id={id}
        label={label}
        variant="standard"
        onChange={onChange}
        fullWidth
        autoComplete="off"
        error={valid ? true : false}
        helperText={valid ? valid : " "}
        inputRef={innerRef}
        name={name}
        size="small"
        sx={{
          color: "var(--main-color-1)",
        }}
      />
    </>
  );
};

export default LoginInput;

const TextFieldStyle = styled(TextField)`
  & label.Mui-focused {
    color: var(--main-color-2);
  }

  p {
    font-size: 10px;
  }
`;
