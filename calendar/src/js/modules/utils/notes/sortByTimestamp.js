export const sortByTimestamp = (notesList) => {
  return notesList.sort((first, second) => second.timestamp - first.timestamp);
};
