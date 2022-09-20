import React, { useEffect, useState } from "react";
import { CalendarBtn } from "../../atoms/Button";
import * as S from "./style";
import { useDispatch } from "react-redux";
import { changeDate } from "../../../redux/reducers/calendarSlice";
import { calendarGenerator } from "../../../utils/calenderCreate";

const Calendar = () => {
  const [selectYear, setSelectYear] = useState(new Date().getFullYear());
  const [selectMonth, setSelectMonth] = useState(new Date().getMonth() + 1);
  const [selectDate, setSelectDate] = useState(new Date().getDate());
  const [renderCalendar, setRenderCalendar] = useState(
    calendarGenerator(selectYear, selectMonth)
  );
  const [checkIn, setCheckIn] = useState(undefined);
  const [checkOut, setCheckOut] = useState(undefined);
  const dayOfTheWeek = ["일", "월", "화", "수", "목", "금", "토"];
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(changeDate({ checkIn: checkIn, checkOut: checkOut }));
  }, [checkIn, checkOut, dispatch]);

  useEffect(() => {
    let newCalendar = calendarGenerator(selectYear, selectMonth - 1);
    setRenderCalendar(newCalendar);
  }, [selectMonth, selectYear]);

  const handleYear = (e) => {
    setSelectYear(e.target.value);
  };

  const handleMonth = (e) => {
    setSelectMonth(e.target.value);
  };

  const handleClickDate = (date) => {
    setSelectDate(date);
  };

  const handleCheckInOut = (date) => {
    if (checkIn !== undefined && checkOut !== undefined) {
      setCheckIn(undefined);
      setCheckOut(undefined);
      return;
    }
    if (checkIn === undefined) {
      let checkin = `${selectYear}.${selectMonth}.${date}`;
      setCheckIn(checkin);
    } else {
      let checkout = `${selectYear}.${selectMonth}.${date}`;
      setCheckOut(checkout);
    }
  };

  const cellClass = (date) => {
    let result = [];
    if (date === selectDate && date !== "") {
      result.push("click");
    }
    if (date !== "") {
      result.push("on");
    }
    return result.join(" ");
  };

  return (
    <S.CalendarContainer>
      <S.Header>
        <div>
          <input
            type="number"
            min="1991"
            defaultValue={selectYear}
            onChange={handleYear}
          />
          <select defaultValue={selectMonth} onChange={handleMonth}>
            {Array.from(new Array(12), (_, i) => i + 1).map((el) => (
              <option key={el} value={el}>
                {el}
              </option>
            ))}
          </select>
        </div>
        <div>
          <CalendarBtn
            height={"17px"}
            onClick={() => {
              setSelectYear(new Date().getFullYear());
              setSelectMonth(new Date().getMonth() + 1);
              setSelectDate(new Date().getDate());
            }}
          >
            오늘
          </CalendarBtn>
        </div>
      </S.Header>
      <S.Table>
        <thead>
          <tr>
            {dayOfTheWeek.map((el, idx) => (
              <th key={idx}>{el}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {renderCalendar.map((el, idx) => {
            return (
              <tr key={idx}>
                {el.map((date, idx) => {
                  return (
                    <td
                      key={idx}
                      className={cellClass(date)}
                      onClick={() => {
                        handleClickDate(date);
                        handleCheckInOut(date);
                      }}
                    >
                      {date}
                    </td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </S.Table>
    </S.CalendarContainer>
  );
};

export default Calendar;
