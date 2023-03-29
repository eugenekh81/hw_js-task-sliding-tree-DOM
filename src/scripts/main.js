"use strict";

const list = document.querySelector(".tree");

for (const li of list.querySelectorAll("li")) {
  const span = document.createElement("span");

  li.prepend(span);
  span.append(span.nextSibling);
}

list.addEventListener("click", function (e) {
  if (e.target.tagName !== "SPAN") {
    return;
  }

  const childrenContainer = event.target.parentElement.querySelector("ul");

  if (!childrenContainer) {
    return;
  }

  childrenContainer.hidden = !childrenContainer.hidden;
});
