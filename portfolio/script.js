"use strict";

const h1 = document.querySelector(".heading-primary");

const h1OpacityInterval = function () {
  setInterval(
    () =>
      h1.style.opacity === "0.1"
        ? (h1.style.opacity = "0.3")
        : (h1.style.opacity = "0.1"),
    3000
  );
};

h1OpacityInterval();
