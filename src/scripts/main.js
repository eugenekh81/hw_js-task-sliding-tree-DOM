"use strict";

const headers = document.querySelectorAll("span");

let isClicked = false;

for (let header of headers) {
  header.addEventListener("click", () => {
    isClicked = !isClicked;
    if (isClicked) {
      header.nextElementSibling.style.display = "none";
    } else {
      header.nextElementSibling.style.display = "";
    }
  });
}
