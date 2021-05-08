const burger = document.querySelector(".burger");
const navLinks = document.querySelector(".main-nav-link");
const links = document.querySelectorAll("main-nav-link li");

burger.addEventListener("click", ()=> {
  navLinks.classList.toggle("open");
});