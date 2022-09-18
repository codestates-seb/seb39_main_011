import React from "react";
import styled from "styled-components";
import { TextField } from "@mui/material";

const ReadTextField = ({ label, value }) => {
  return (
    <InputContainer>
      <TextFieldStyle
        disabled
        id="outlined-disabled"
        label={label}
        value={value}
      />
    </InputContainer>
  );
};

export default ReadTextField;

const InputContainer = styled.div`
  margin: 3rem 0 2rem 4rem;
`;

const TextFieldStyle = styled(TextField)({
  width: "250px",
});
