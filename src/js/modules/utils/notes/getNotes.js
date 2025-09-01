export const getNotesFromDate = (cellId) => {
  return JSON.parse(localStorage.getItem(cellId) ?? "[]");
};
