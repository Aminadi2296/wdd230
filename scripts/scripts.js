const hamburgerElement = document.querySelector('#myButton');
const navElement = document.querySelector('.menuLinks');

hamburgerElement.addEventListener('click', () => {
    navElement.classList.toggle('open');
    hamburgerElement.classList.toggle('open');
});


const myBtn = document.querySelector('#darkBtn');
const main = document.querySelector('main');


myBtn.addEventListener('click', () => {
    main.classList.toggle('dark');
});