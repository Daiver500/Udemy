"use strict";

window.addEventListener("DOMContentLoaded", () => {
const openModalButtons = document.querySelectorAll(".btn");
const modal = document.querySelector(".modal");

const openModalWindow = () => {
  modal.style.display = "block";
}

openModalButtons.forEach((item) = () => {
  item.addEventListener("click", openModalWindow);
});
});