import { createSlice } from "@reduxjs/toolkit";

const calendarSlice = createSlice({
  name: "reservationDate",
  initialState: {},
  reducers: {
    reservationHandler: (state, action) => {
      return action.payload;
    },
  },
});

export const { reservationHandler } = calendarSlice.actions;
export default calendarSlice.reducer;
