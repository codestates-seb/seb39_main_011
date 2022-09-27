import { createSlice } from "@reduxjs/toolkit";

const calendarSlice = createSlice({
  name: "reservationDate",
  initialState: { checkIn: "", checkOut: "" },
  reducers: {
    reservation: (state, action) => {
      return action.payload;
    },
  },
});

export const { reservation } = calendarSlice.actions;
export default calendarSlice.reducer;
