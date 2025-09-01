import { getNotesFromDate } from "./getNotes";

export const addNote = (note) => {
  const existingNotes = getNotesFromDate(note.id);

  console.log(existingNotes);

  localStorage.setItem(note.id, JSON.stringify([...existingNotes, note]));
};
