"use strict";

document.addEventListener("DOMContentLoaded", function () {
  const counterDiv = document.createElement("div");
  counterDiv.textContent = "0";
  document.body.appendChild(counterDiv);

  for (let i = 1; i <= 5; i++) {
    const button = document.createElement("button");
    button.textContent = "Нажми меня";
    button.addEventListener("click", function () {
      if (this.textContent === "Нажми меня") {
        this.textContent = "Нажата!";
        const currentCount = parseInt(counterDiv.textContent);
        counterDiv.textContent = (currentCount + 1).toString();
      }
    });
    document.body.appendChild(button);
  }
});
