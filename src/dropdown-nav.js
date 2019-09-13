const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");
const links = document.querySelectorAll(".nav-links li");
const hamburgerToggle = document.querySelector(".toggle");

hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("open");
  hamburgerToggle.classList.toggle("active");
  links.forEach(link => {
    link.classList.toggle("fade");
  });
});
