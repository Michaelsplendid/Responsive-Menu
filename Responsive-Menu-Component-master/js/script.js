const hamburger = document.querySelector(".hamburger-icon");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener('click', () => {
    navMenu.classList.toggle("active");
    hamburger.classList.toggle("active");
});