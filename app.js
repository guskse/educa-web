"use strict";

/*NAVBAR FUNCTIONALITY AND HEADER*/
const navOpenBtn = document.querySelector("[data-menu-open-btn]");
const navCloseBtn = document.querySelector("[data-menu-close-btn]");
const navbar = document.querySelector("[data-navbar]");
const overlay = document.querySelector("[data-overlay]");
const navbarLinks = document.querySelectorAll(".navbar-link");
const navElemArr = [navOpenBtn, navCloseBtn, overlay];
const btnTop = document.querySelector(".go-top");

navElemArr.forEach((item) => {
  item.addEventListener("click", () => {
    navbar.classList.toggle("active");
    overlay.classList.toggle("active");
  });
});

navbarLinks.forEach((item) => {
  item.addEventListener("click", () => {
    navbar.classList.toggle("active");
    overlay.classList.toggle("active");
  });
});

/*HEADER STICKY FUNCTIONALITY and BACK TO TOP BTN*/
const header = document.querySelector("[data-header]");

window.addEventListener("scroll", () => {
  if (window.scrollY >= 20) {
    header.classList.add("active");
    btnTop.classList.add("active");
  } else {
    header.classList.remove("active");
    btnTop.classList.remove("active");
  }
});
