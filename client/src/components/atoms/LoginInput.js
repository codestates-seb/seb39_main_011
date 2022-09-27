import React from "react";
import styled from "styled-components";
import { TextField } from "@mui/material";

const LoginInput = ({ id, label, onChange, valid }) => {
  return (
    <InputContainer>
      <TextFieldStyle
        id={id}
        label={label}
        variant="standard"
        size="small"
        onChange={onChange}
        helperText={valid}
      />
    </InputContainer>
  );
};

export default LoginInput;

const InputContainer = styled.div`
  margin-top: 10px;
`;

const TextFieldStyle = styled(TextField)({
  width: "100%",
});
