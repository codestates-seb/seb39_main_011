import { configureStore } from "@reduxjs/toolkit";
import calendarSlice from "./reducers/calendarSlice";

const store = configureStore({
  reducer: {
    reservationDate: calendarSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export default store;
