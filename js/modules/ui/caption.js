import { getActiveMonth, getActiveYear } from "../utils/date/getDate";

export const renderCaption = () => {
  const year = getActiveYear();
  const month = getActiveMonth();

  const caption = document.getElementById("caption-text");

  const monthString = new Date(year, month).toLocaleString("en-GB", {
    month: "long",
  });

  caption.textContent = year + " " + monthString;
};
