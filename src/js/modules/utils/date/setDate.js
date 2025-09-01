import { ACTIVE_MONTH, ACTIVE_YEAR } from "../../constants";

export const setActiveDate = ({ year, month }) => {
  localStorage.setItem(ACTIVE_YEAR, year);
  localStorage.setItem(ACTIVE_MONTH, month);
};
