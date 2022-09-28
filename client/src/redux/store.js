import { configureStore } from "@reduxjs/toolkit";
import calendarSlice from "./reducers/calendarSlice";
import regionSlice from "./reducers/regionSlice";

const store = configureStore({
  reducer: {
    reservationDate: calendarSlice,
    region: regionSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export default store;
