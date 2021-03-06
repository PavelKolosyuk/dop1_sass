"use strict";

var header = document.querySelector(".header");
var burger = document.querySelector(".burger");

function remove() {
  header.classList.remove("header--active");
  burger.classList.remove("burger--active");
}

function add() {
  header.classList.add("header--active");
  burger.classList.add("burger--active");
}

burger.addEventListener("click", function () {
  !header.classList.contains("header--active") ? add() : remove();
});