import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user_id: null,
  isLogin: false,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,

  reducers: {
    login: (state, action) => {
      state.isLogin = true;
      state.user_id = action.payload;
    },
    logout: (state) => {
      state.isLogin = false;
      state.user_id = null;
    },
  },
});

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;
