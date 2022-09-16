import React from "react";
import styled from "styled-components";
import { TextField } from "@mui/material";

const LoginInput = ({ label }) => {
  return (
    <InputContainer>
      <TextFieldStyle id="standard-basic" label={label} variant="standard" />
    </InputContainer>
  );
};

export default LoginInput;

const InputContainer = styled.div`
  margin-top: 1rem;
`;

const TextFieldStyle = styled(TextField)({
  width: "100%",
});
