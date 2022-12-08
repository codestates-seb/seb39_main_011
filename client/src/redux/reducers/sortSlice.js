import { createSlice } from "@reduxjs/toolkit";

export const sortSlice = createSlice({
  name: "sort",
  initialState: "",
  reducers: {
    sortCheck: (state, action) => {
      return action.payload;
    },
  },
});

export const { sortCheck } = sortSlice.actions;
export default sortSlice.reducer;
