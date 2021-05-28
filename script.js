const burger = document.querySelector(".burger");
const navLinks = document.querySelector(".main-nav-link");
const links = document.querySelectorAll("main-nav-link li");
const jobTitle = document.querySelector("work-title");

function animateWorkTitle (){
  setTimeout(()=>{ document.querySelector("#work-title").innerHTML = "Social Media Manager"}, 2000);
  setTimeout(()=>{ document.querySelector("#work-title").innerHTML = "Writer"}, 3000);
  setTimeout(()=>{ document.querySelector("#work-title").innerHTML = "Frontend Developer"}, 4000);
}

animateWorkTitle()

setInterval(() => {
  animateWorkTitle()
},5000 );

burger.addEventListener("click", ()=> {
  navLinks.classList.toggle("open");
});