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
  const dayOfTheWeek = ["일", "월", "화", "수", "목", "금", "토"];
  const dispatch = useDispatch();

  useEffect(() => {
    let hi = { name: "kim", age: 20 };
    dispatch(changeDate(hi));
  }, []);

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
                    <td
                      key={idx}
                      className={item !== "" ? "on" : null}
                      onClick={() => {
                        handleClickDate(item);
                      }}
                    >
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
