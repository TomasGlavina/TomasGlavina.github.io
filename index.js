const menu = document.querySelector(".menu");
const close = document.querySelector(".close");
const nav = document.querySelector("nav");
const hero = document.querySelector("hero");


menu.addEventListener('click', () => {
    nav.classList.add('open-nav');
});

close.addEventListener('click', () =>{
    nav.classList.remove('open-nav');
});

