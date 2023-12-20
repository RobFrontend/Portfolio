"use strict";
const year = document.querySelector(".year");
const h1 = document.querySelector(".heading-primary");
const header = document.querySelector(".header");
const heroSection = document.querySelector(".section-hero");
const navLinks = document.querySelectorAll(".nav__links");
const reveals = document.querySelectorAll(".reveal");

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

// Sticky Nav

const headerHeight = header.getBoundingClientRect().height;

const stickyNavigation = function (entries) {
  const [entry] = entries;
  if (!entry.isIntersecting) {
    header.classList.add("sticky-nav");
  } else {
    header.classList.remove("sticky-nav");
  }
};

const observer = new IntersectionObserver(stickyNavigation, {
  root: null,
  threshold: 0,
  rootMargin: `-${headerHeight}px`,
});

observer.observe(heroSection);

// Smooth Scrolling

navLinks.forEach((navLink) =>
  navLink.addEventListener("click", function (e) {
    e.preventDefault();
    if (e.target.classList.contains("nav__link")) {
      const id = e.target.getAttribute("href");
      document.querySelector(id).scrollIntoView({ behavior: "smooth" });
    }
  })
);

// Section Smooth Reveal

const revealSection = function (entries, observer) {
  const [entry] = entries;
  if (!entry.isIntersecting) {
    return;
  }
  entry.target.classList.remove("section-hidden");
  observer.unobserve(entry.target);
};

const revealObserver = new IntersectionObserver(revealSection, {
  root: null,
  threshold: 0.05,
});

reveals.forEach(function (reveal) {
  revealObserver.observe(reveal);
  reveal.classList.add("section-hidden");
});

//////////////////////////////////////////
// Mobile navigation

const btnMobile = document.querySelector(".btn-mobile-nav");
const navLink = document.querySelectorAll(".nav-link");

btnMobile.addEventListener("click", function () {
  header.classList.toggle("nav-open");
});
navLink.forEach((navLink) => {
  navLink.addEventListener("click", function () {
    header.classList.remove("nav-open");
  });
});

// ////////////////////////////////////
// const tran = document.querySelector(".tran");
// const btnNav = document.querySelector(".icon-mobile-nav-close");

// if (header.contains("nav-open")) {
//   tran.style.zIndex = "-1";
// }
// if (!header.contains("nav-open")) {
//   tran.style.zIndex = "0";
// }
