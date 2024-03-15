// LAST MODIFIED 
document.getElementById("placeholder").innerHTML = new Date(document.lastModified);

let date = new Date();
let year = date.getFullYear();
document.getElementById("currentYear").innerHTML = year;

// HAMBURGER MENU
const hamburgerElement = document.querySelector('#myButton');
const navElement = document.querySelector('.menuLinks');

hamburgerElement.addEventListener('click', () => {
    navElement.classList.toggle('open');
    hamburgerElement.classList.toggle('open');
});


