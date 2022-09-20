export const getFirstDay = (year, month) => {
  let firstDay = new Date(year, month, 1).getDay();
  return firstDay;
};

export const getLastDay = (year, month) => {
  let selectMonth = month + 1;
  let lastDate = new Date(year, selectMonth, 0).getDate();
  return lastDate;
};

export const calendarGenerator = (year, month) => {
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

  return result;
};
