import { configureStore } from "@reduxjs/toolkit";
import calendarSlice from "./reducers/calendarSlice";
import regionSlice from "./reducers/regionSlice";
import sortSlice from "./reducers/sortSlice";
import authSlice from "./reducers/authSlice";
import postSlice from "./reducers/postSlice";

const store = configureStore({
  reducer: {
    reservationDate: calendarSlice,
    region: regionSlice,
    sort: sortSlice,
    auth: authSlice,
    post: postSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export default store;
