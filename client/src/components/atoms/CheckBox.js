import React from "react";
import { Checkbox, FormGroup, FormControlLabel } from "@mui/material";

const CheckBox = ({ label }) => {
  return (
    <FormGroup>
      <FormControlLabel
        control={
          <Checkbox
            size="small"
            sx={{
              color: "var(--main-color-2)",
              "&.Mui-checked": {
                color: "var(--main-color-2)",
              },
              paddingRight: "3px",
            }}
          />
        }
        label={
          <span style={{ fontSize: "12px", color: "#8F8F8F" }}>{label}</span>
        }
        color="red"
      />
    </FormGroup>
  );
};

export default CheckBox;
