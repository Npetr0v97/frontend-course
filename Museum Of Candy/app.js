"use strict";


const navbar = document.getElementById("mainNavbar");
const navHeight = navbar.offsetHeight;

console.log(navbar.offsetHeight);


function scrollFunction() {
    if (document.body.scrollTop > navHeight || document.documentElement.scrollTop > navHeight) {
        navbar.classList.add("scrolled");
    } else {
        navbar.classList.remove("scrolled");
    }
}

window.onscroll = function () { scrollFunction() };