import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isShow: false,
};

export const postSlice = createSlice({
  name: "post",
  initialState,

  reducers: {
    postHandler: (state) => {
      state.isShow = true;
    },
  },
});

export const { postHandler } = postSlice.actions;
export default postSlice.reducer;
