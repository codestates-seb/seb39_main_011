import React from "react";
import styled from "styled-components";
import { TextField } from "@mui/material";

const RequiredInput = ({ type, label, value, placeholder, onChange, name }) => {
  return (
    <Layout>
      <TextField
        id="standard"
        label={label}
        type={type}
        InputLabelProps={{
          shrink: true,
        }}
        inputProps={{ style: { fontSize: 13 } }}
        variant="standard"
        onChange={onChange}
        name={name}
        value={value}
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
    font-size: 17px;
    font-weight: bold;
  }
`;
