const header = document.querySelector(".header");
const burger = document.querySelector(".burger");
function remove() {
  header.classList.remove("header--active");
  burger.classList.remove("burger--active");
}
function add() {
  header.classList.add("header--active");
  burger.classList.add("burger--active");
}
burger.addEventListener("click", () => {
  !header.classList.contains("header--active") ? add() : remove();
});
