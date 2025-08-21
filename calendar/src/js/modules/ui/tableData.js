import { getDaysList } from "./daysList";
import { renderCell } from "./cell";
import { getActiveMonth } from "../utils/date/getDate";
import { getActiveYear } from "../utils/date/getDate";

export const renderTableData = () => {
  const year = getActiveYear();
  const month = getActiveMonth();

  const days = document.getElementsByTagName("td");

  const daysList = getDaysList();

  const daysArray = [...days];

  for (let i = 0; i < 42; i++) {
    daysArray[i].id = daysList[i];
  }

  daysArray.forEach((element) => {
    renderCell(element.id);
  });

  daysArray.forEach((element) => {
    if (element.id.split("-")[1] != month) {
      element.classList.add("text-gray-400");
    } else {
      element.classList.remove("text-gray-400");
    }
  });
};
