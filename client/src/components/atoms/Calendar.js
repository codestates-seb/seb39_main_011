import React, { useState, useEffect } from "react";
import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";
import { useDispatch } from "react-redux";
import { reservationHandler } from "../../redux/reducers/calendarSlice";
import { addMonths, isSameMonth } from "date-fns";

function Calendar({ maximumAcceptance }) {
  const [range, setRange] = useState();
  const [disable, setDisable] = useState([]);
  const disabledDays = [...disable, { from: new Date(0), to: new Date() }];
  const dispatch = useDispatch();
  const today = new Date();
  const nextMonth = addMonths(new Date(), 1);
  const [month, setMonth] = useState(today);
  const twoMonthLater = new Date(
    new Date().setMonth(new Date().getMonth() + 2)
  );
  useEffect(() => {
    let disable = [];
    for (let key in maximumAcceptance) {
      const value = maximumAcceptance[key];
      if (value < 1) {
        disable.push(new Date(key));
      }
      setDisable([...disable]);
    }
  }, [maximumAcceptance]);

  const footer = (
    <button
      disabled={isSameMonth(today, month)}
      onClick={() => setMonth(today)}
    >
      Today
    </button>
  );

  useEffect(() => {
    dispatch(reservationHandler(range));
  }, [dispatch, range]);

  return (
    <DayPicker
      mode="range"
      min={1}
      max={2}
      selected={range}
      onSelect={setRange}
      disabled={disabledDays}
      month={month}
      onMonthChange={setMonth}
      footer={footer}
      fromMonth={today}
      toDate={twoMonthLater}
    />
  );
}

export default Calendar;
