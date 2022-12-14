import React from "react";
import styled from "styled-components";
import { TextField } from "@mui/material";

const RequiredInput = ({
  type,
  label,
  value,
  placeholder,
  onChange,
  name,
  min,
  max,
}) => {
  return (
    <Layout>
      <TextField
        id="standard"
        label={label}
        type={type}
        InputLabelProps={{
          shrink: true,
        }}
        inputProps={{
          style: { fontSize: 13, fontFamily: "Cafe24Oneprettynight" },
          min,
          max,
        }}
        variant="standard"
        onChange={onChange}
        name={name}
        value={value}
        placeholder={placeholder}
        fullWidth
      />
    </Layout>
  );
};

export default RequiredInput;

const Layout = styled.div`
  display: flex;
  flex-direction: column;
  margin: 10px 0;

  label {
    font-family: "Cafe24Oneprettynight";
    font-size: 17px;
    font-weight: bold;
    color: var(--main-color-1);
  }

  & label.Mui-focused {
    color: var(--main-color-2);
  }

  & input::placeholder {
    font-size: 10px;
  }
`;
