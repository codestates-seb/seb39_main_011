import React, { useEffect, useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { useDispatch } from "react-redux";
import { reservation } from "../../../redux/reducers/calendarSlice";

const CalendarTest = () => {
  const [value, onChange] = useState(new Date());
  const dispatch = useDispatch();
  const [reservationDate, setReservationDate] = useState({
    checkIn: null,
    checkOut: null,
  });
  // console.log(value);
  // console.log(value.toLocaleDateString());
  // console.log(value.toDateString());
  // console.log(value.getDate());
  // console.log(new Date(value));

  // const nextDate = new Date(value);
  // nextDate.setDate(value.getDate() + 2);
  // console.log(nextDate);

  // useEffect(() => {
  //   setReservationDate({
  //     ...reservationDate,
  //     checkIn: value.toLocaleDateString(),
  //   });
  // }, [value]);

  console.log(reservationDate);

  const reservationHanlder = (value) => {
    if (reservationDate.checkIn === null) {
      setReservationDate({
        ...reservationDate,
        checkIn: value,
        // checkIn: value.toLocaleDateString(),
      });
      // console.log(value.setDate(value.getDate() + 2));
    } else {
      setReservationDate({
        ...reservationDate,
        checkOut: value,
        // checkOut: value.toLocaleDateString(),
      });
    }
  };

  return (
    <div>
      <Calendar
        onChange={reservationHanlder}
        locale="en-EN"
        minDate={reservationDate.checkIn}
        // maxDate={}
      />
    </div>
  );
};

export default CalendarTest;
