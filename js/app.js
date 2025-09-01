import { renderCalendar } from "./modules/ui/calendar";
import { renderCaption } from "./modules/ui/caption";
import { renderTableData } from "./modules/ui/tableData";

const render = () => {
  renderCaption();
  renderTableData(render);
};

document.addEventListener("DOMContentLoaded", () => {
  renderCalendar(render);
  render();
});
