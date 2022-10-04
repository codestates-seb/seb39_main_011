import { configureStore } from "@reduxjs/toolkit";
import calendarSlice from "./reducers/calendarSlice";
import regionSlice from "./reducers/regionSlice";
import sortSlice from "./reducers/sortSlice";
import authSlice from "./reducers/authSlice";

const store = configureStore({
  reducer: {
    reservationDate: calendarSlice,
    region: regionSlice,
    sort: sortSlice,
    auth: authSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export default store;
