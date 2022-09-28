import { createSlice } from "@reduxjs/toolkit";

export const regionSlice = createSlice({
  name: "region",
  initialState: "",
  reducers: {
    checkedRegionHandler: (state, action) => {
      return action.payload;
    },
  },
});

export const { checkedRegionHandler } = regionSlice.actions;
export default regionSlice.reducer;
