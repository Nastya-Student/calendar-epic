import { decrement } from "./decrementButton";
import { increment } from "./incrementButton";
import { renderForm } from "./form";
import { deleteNote } from "../utils/notes/deleteNote";

export const renderCalendar = (onSubmit) => {
  const days = document.getElementsByTagName("td");
  const daysArray = [...days];

  const formOverlay = document.getElementById("form-overlay");
  const form = document.getElementById("form");

  const formOpen = () => {
    formOverlay.classList.remove("hidden");
    form.classList.remove("hidden");
  };

  daysArray.forEach((element) => {
    element.addEventListener("click", (event) => {
      let onButton = false;
      const deleteButtons = [...element.getElementsByTagName("button")];
      deleteButtons.forEach((button1) => {
        if (button1.contains(event.target)) {
          // console.log("onButton: " + element.id + " " + button1.id);
          deleteNote(element, button1.id);
          onSubmit();
          onButton = true;
        }
      });

      if (!onButton) {
        formOpen();
        renderForm(element.id);
      }
    });
  });

  const incrementButton = document.getElementById("increment");
  const decrementButton = document.getElementById("decrement");
  incrementButton.addEventListener("click", () => {
    increment(onSubmit);
  });
  decrementButton.addEventListener("click", () => {
    decrement(onSubmit);
  });
};
