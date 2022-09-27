import React, { useState, useEffect } from "react";
import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";
import { useDispatch } from "react-redux";
import { reservationHandler } from "../../../redux/reducers/calendarSlice";

function CalendarTTest() {
  const [range, setRange] = useState();
  const disabledDays = [{ from: new Date(0), to: new Date() }];
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(reservationHandler(range));
  }, [dispatch, range]);

  return (
    <DayPicker
      mode="range"
      min={2}
      max={3}
      selected={range}
      onSelect={setRange}
      disabled={disabledDays}
    />
  );
}

export default CalendarTTest;
