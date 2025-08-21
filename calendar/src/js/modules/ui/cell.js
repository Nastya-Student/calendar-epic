import { deleteNote } from "../utils/notes/deleteNote";
import { getNotesFromDate } from "../utils/notes/getNotes";
import { sortByTimestamp } from "../utils/notes/sortByTimestamp";

export const renderCell = (id) => {
  const cell = document.getElementById(id);

  const notesList = getNotesFromDate(id);
  const sortedNotesList = sortByTimestamp(notesList);
  // console.log(notesList);

  cell.classList.add(
    "p-3",
    "border",
    "border-black",
    "w-50",
    "h-30",
    "align-top"
  );

  cell.innerHTML = `<div class="align-top"> ${id.split("-")[0]}</div>
  ${
    sortedNotesList.length > 0
      ? `<p class="font-thin text-sm text-indigo-900">your notes:</p>`
      : `<p class="font-thin text-sm text-indigo-200">no notes</p>`
  }
  <div>
  ${
    sortedNotesList.length > 0
      ? `<ul id="notes-list" class="max-h-15 overflow-y-auto text-sm text-emerald-800/80">${sortedNotesList.reduce(
          (all, current) => all + renderItem(current),
          ""
        )}</ul>`
      : ""
  }
  </div>
  `;
};

export const renderItem = ({ text, timestamp, id }) => {
  const element = document.createElement("li");
  element.innerHTML = `${text} <button id="${timestamp}">x</button>`;
  const removeButton = document.getElementById(timestamp);
  // removeButton.addEventListener("click", () => deleteNote(timestamp));
  return element.outerHTML;
};
