const todayGenerator = () => {
  let todayYear = new Date().getFullYear();
  let todayMonth = new Date().getMonth() + 1;
  let todayDate = new Date().getDate();
  let todayMonthPlusTwo = new Date().getMonth() + 3;

  if (todayMonthPlusTwo > 12) {
    todayMonthPlusTwo = todayMonthPlusTwo - 12;
  }

  todayMonth = ("0" + todayMonth.toString()).slice(-2);
  todayMonthPlusTwo = ("0" + todayMonthPlusTwo.toString()).slice(-2);
  todayDate = ("0" + todayDate.toString()).slice(-2);

  let today = `${todayYear}-${todayMonth}-${todayDate}`;
  let todayPlusTwoMonth = `${todayYear}-${todayMonthPlusTwo}-${todayDate}`;

  return { today, todayPlusTwoMonth };
};

export default todayGenerator;
