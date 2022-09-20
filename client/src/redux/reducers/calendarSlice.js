import { createSlice } from "@reduxjs/toolkit";

const calendarSlice = createSlice({
  name: "reservationDate",
  initialState: { checkIn: undefined, checkOut: undefined },
  reducers: {
    changeDate: (state, action) => {
      return action.payload;
    },
  },
});

export const { changeDate } = calendarSlice.actions;
export default calendarSlice.reducer;
