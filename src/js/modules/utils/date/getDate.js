import { ACTIVE_MONTH, ACTIVE_YEAR } from "../../constants";

export const getActiveYear = () => {
  return localStorage.getItem(ACTIVE_YEAR) ?? new Date().getFullYear();
};

export const getActiveMonth = () => {
  return localStorage.getItem(ACTIVE_MONTH) ?? new Date().getMonth();
};
