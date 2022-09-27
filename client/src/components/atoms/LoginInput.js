import React from "react";
import styled from "styled-components";
import { TextField } from "@mui/material";

const LoginInput = ({ id, label, onChange, name, value, innerRef }) => {
  return (
    <InputContainer>
      <TextFieldStyle
        id={id}
        label={label}
        variant="standard"
        size="small"
        onChange={onChange}
        fullWidth
        autoComplete="off"
        // error={}
        // helperText={}
        inputRef={innerRef}
        name={name}
      />
    </InputContainer>
  );
};

export default LoginInput;

const InputContainer = styled.div`
  margin-top: 10px;
`;

const TextFieldStyle = styled(TextField)`
  & label.Mui-focused {
    color: var(--main-color-1);
  }
`;
