export const createNote = (userInput, cellId) => ({
  ...userInput,
  timestamp: Date.now(),
  id: cellId,
});
