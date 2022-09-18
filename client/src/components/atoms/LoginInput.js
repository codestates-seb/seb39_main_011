import React from "react";
import styled from "styled-components";
import { TextField } from "@mui/material";

const LoginInput = ({ label }) => {
  return (
    <InputContainer>
      <TextFieldStyle
        id="standard-basic"
        label={label}
        variant="standard"
        size="small"
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
