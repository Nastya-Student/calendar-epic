import { getActiveMonth } from "../utils/date/getDate";
import { getActiveYear } from "../utils/date/getDate";
import { setActiveDate } from "../utils/date/setDate";

export const increment = (onSubmit) => {
  let year = getActiveYear();
  let month = getActiveMonth();

  month++;
  if (month == 12) {
    year++;
    month = 0;
  }

  setActiveDate({ year, month });

  onSubmit?.();
};
