import React, { useEffect, useState } from "react";
import { CalendarBtn } from "../../atoms/Button";
import * as S from "./style";

const Calendar = () => {
  const [selectYear, setSelectYear] = useState(new Date().getFullYear());
  const [selectMonth, setSelectMonth] = useState(new Date().getMonth() + 1);
  const [renderCalendar, setRenderCalendar] = useState([]);

  useEffect(() => {
    calendarGenerator(selectYear, selectMonth - 1);
  }, [selectYear]);

  useEffect(() => {
    calendarGenerator(selectYear, selectMonth - 1);
  }, [selectMonth]);

  const dayOfTheWeek = ["일", "월", "화", "수", "목", "금", "토"];

  const getFirstDay = (year, month) => {
    let firstDay = new Date(year, month, 1).getDay();
    return firstDay;
  };

  const getLastDay = (year, month) => {
    let selectMonth = month + 1;
    let lastDate = new Date(year, selectMonth, 0).getDate();
    return lastDate;
  };

  const calendarGenerator = (year, month) => {
    let arrCalendar = [];

    let firstDay = getFirstDay(year, month);
    for (let i = 0; i < firstDay; i++) {
      arrCalendar.push("");
    }

    let lastDate = getLastDay(year, month);
    for (let i = 1; i <= lastDate; i++) {
      arrCalendar.push(i);
    }

    let remainDate = arrCalendar.length % 7;
    if (remainDate < 7 && remainDate !== 0) {
      let length = 7 - remainDate;
      for (let i = 0; i < length; i++) {
        arrCalendar.push("");
      }
    }

    let weeklength = arrCalendar.length / 7;
    let result = [];
    for (let i = 0; i < weeklength; i++) {
      result.push(arrCalendar.slice(i * 7, (i + 1) * 7));
    }

    setRenderCalendar(result);
  };

  const handleYear = (e) => {
    setSelectYear(e.target.value);
  };

  const handleMonth = (e) => {
    setSelectMonth(e.target.value);
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
          <CalendarBtn height={"17px"}>오늘</CalendarBtn>
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
                {el.map((item, idx) => {
                  return (
                    <td key={idx} className={item !== "" ? "on" : null}>
                      {item}
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
