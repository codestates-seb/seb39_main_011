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
// const calendarSlice = createSlice({
//   name: "reservationDate",
//   initialState: { checkIn: "", checkOut: "" },
//   reducers: {
//     checkInHandler: (state, action) => {
//       // return action.payload;
//       state.checkIn = action.payload;
//     },
//     checkOutHandler: (state, action) => {
//       // return action.payload;
//       state.checkOut = action.payload;
//     },
//   },
// });

export const { reservationHandler } = calendarSlice.actions;
export default calendarSlice.reducer;
