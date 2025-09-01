import { decrement } from "./decrementButton";
import { increment } from "./incrementButton";
import { renderForm } from "./form";

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
      const deleteButtons = [...element.getElementsByTagName("button")];
      if (!deleteButtons.forEach((button) => button.contains(event.target))) {
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
