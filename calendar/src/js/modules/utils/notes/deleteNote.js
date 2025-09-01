import { getNotesFromDate } from "./getNotes";

export const deleteNote = (cell, timestamp) => {
  const existingNotes = [...getNotesFromDate(cell.id)];

  const newNotes = existingNotes.filter((note) => {
    return note.timestamp != timestamp;
  });

  localStorage.setItem(cell.id, JSON.stringify(newNotes));
};
