"use strict";
const year = document.querySelector(".year");
const h1 = document.querySelector(".heading-primary");

// Current year

const currentYear = new Date().getFullYear();
year.textContent = currentYear;

// H1 Interval Opacity

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
