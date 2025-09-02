import { getActiveMonth } from "../utils/date/getDate";
import { getActiveYear } from "../utils/date/getDate";

export const getDaysList = () => {
  const year = getActiveYear();
  const month = getActiveMonth();

  const days = [];

  let firstWeekDay = new Date(year, month, 1).getDay();
  let lastDay = new Date(year, +month + 1, 0).getDate();
  let lastDayPrevious = new Date(year, month, 0).getDate();

  for (let i = firstWeekDay - 1; i >= 0; i--) {
    let prevYear = year;
    if (month == 0) {
      prevYear--;
    }
    days[i] = lastDayPrevious + "-" + (month - 1) + "-" + prevYear;
    lastDayPrevious--;
  }

  for (let i = firstWeekDay, date = 1; date <= lastDay; i++, date++) {
    days[i] = date + "-" + month + "-" + year;
  }

  for (let i = lastDay + firstWeekDay, date = 1; i < 42; i++, date++) {
    let nextYear = year;
    if (month == 11) {
      nextYear++;
    }
    days[i] = date + "-" + (+month + 1) + "-" + nextYear;
  }

  return days;
};
