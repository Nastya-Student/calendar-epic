import { getActiveMonth } from "../utils/date/getDate";
import { getActiveYear } from "../utils/date/getDate";
import { setActiveDate } from "../utils/date/setDate";

export const decrement = (onSubmit) => {
  let year = getActiveYear();
  let month = getActiveMonth();

  month--;
  if (month == -1) {
    year--;
    month = 11;
  }

  setActiveDate({ year, month });

  onSubmit?.();
};
