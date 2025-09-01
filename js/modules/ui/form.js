import { createNote } from "../utils/notes/createNote";
import { addNote } from "../utils/notes/addNote";

export const renderForm = (cellId) => {
  const noteForm = document.getElementById("note-form");

  const formOverlay = document.getElementById("form-overlay");
  const form = document.getElementById("form");
  const closeButton = document.getElementById("close-form");

  const close = () => {
    formOverlay.classList.add("hidden");
    form.classList.add("hidden");
    location.reload();
  };

  closeButton.addEventListener("click", close);

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const formData = new FormData(noteForm);

    const note = createNote(Object.fromEntries(formData.entries()), cellId);

    addNote(note);

    e.target.reset();

    close();

    // onSubmit?.();
    // window.close();
  });
};
