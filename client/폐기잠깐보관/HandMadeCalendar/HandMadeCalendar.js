import React, { useEffect, useState } from "react";
import { CalendarBtn } from "../../atoms/Button";
import * as S from "./style";
import { useDispatch } from "react-redux";
// import { reservation } from "../../../redux/reducers/calendarSlice";
import { calendarGenerator } from "../../../utils/calenderCreate";

const HandMadeCalendar = () => {
  const [selectYear, setSelectYear] = useState(new Date().getFullYear());
  const [selectMonth, setSelectMonth] = useState(new Date().getMonth() + 1);
  const [selectDate, setSelectDate] = useState(new Date().getDate());
  const [renderCalendar, setRenderCalendar] = useState(
    calendarGenerator(selectYear, selectMonth)
  );
  // const [checkIn, setCheckIn] = useState(undefined);
  // const [checkOut, setCheckOut] = useState(undefined);
  const [checkInOut, setCheckInOut] = useState({ checkIn: "", checkOut: "" });
  const dayOfTheWeek = ["일", "월", "화", "수", "목", "금", "토"];
  const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(reservation({ checkIn: checkIn, checkOut: checkOut }));
  // }, [checkIn, checkOut, dispatch]);
  // useEffect(() => {
  //   dispatch(reservation(checkInOut));
  // }, [checkInOut, dispatch]);

  useEffect(() => {
    let newCalendar = calendarGenerator(selectYear, selectMonth - 1);
    setRenderCalendar(newCalendar);
  }, [selectMonth, selectYear]);

  const yearHandler = (e) => {
    setSelectYear(e.target.value);
  };

  const monthHandler = (e) => {
    setSelectMonth(e.target.value);
  };

  const clickDateHandler = (date) => {
    setSelectDate(date);
  };

  const checkInOutHandler = (date) => {
    if (checkInOut.checkIn !== "" && checkInOut.checkOut !== "") {
      setCheckInOut((preState) => {
        return { checkIn: "", checkOut: "" };
      });
    }
    if (checkInOut.checkIn === "") {
      setCheckInOut((preState) => {
        return {
          ...preState,
          checkIn: `${selectYear}.${selectMonth}.${date}`,
        };
      });
    } else {
      setCheckInOut((preState) => {
        return {
          ...preState,
          checkOut: `${selectYear}.${selectMonth}.${date}`,
        };
      });
    }
  };
  // const checkInOutHandler = (date) => {
  //   if (checkIn !== undefined && checkOut !== undefined) {
  //     setCheckIn(undefined);
  //     setCheckOut(undefined);
  //     return;
  //   }
  //   if (checkIn === undefined) {
  //     let checkin = `${selectYear}.${selectMonth}.${date}`;
  //     setCheckIn(checkin);
  //   } else {
  //     let checkout = `${selectYear}.${selectMonth}.${date}`;
  //     setCheckOut(checkout);
  //   }
  // };

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
            onChange={yearHandler}
          />
          <select defaultValue={selectMonth} onChange={monthHandler}>
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
                        clickDateHandler(date);
                        checkInOutHandler(date);
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

export default HandMadeCalendar;
