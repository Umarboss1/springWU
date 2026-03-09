const hamburger = document.getElementById("hamburger");
const mobileMenu = document.getElementById("mobileMenu");
const fadeLayer = document.getElementById("fadeLayer");


hamburger.addEventListener("click", showMenu);
fadeLayer.addEventListener("click", showMenu);

function showMenu(){
    mobileMenu.classList.toggle("active");
    fadeLayer.classList.toggle("visible");
}