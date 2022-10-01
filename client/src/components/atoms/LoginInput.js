import React from "react";
import styled from "styled-components";
import { TextField } from "@mui/material";

const LoginInput = ({ id, label, onChange, name, innerRef, valid }) => {
  return (
    <InputContainer>
      <TextFieldStyle
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
    </InputContainer>
  );
};

export default LoginInput;

const InputContainer = styled.div`
  margin-top: 10px;
`;

const TextFieldStyle = styled(TextField)`
  & label.Mui-focused {
    color: var(--main-color-2);
  }

  p {
    font-size: 10px;
  }
`;
