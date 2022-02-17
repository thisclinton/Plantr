const navToggle = document.getElementById("nav-toggle");
const navClose = document.getElementById("nav-close");
const navShow = document.getElementById("nav-menu");

if(navToggle){
    navToggle.addEventListener('click', () =>{
        navShow.classList.add('show-menu')
    })
}

if(navClose){
    navClose.addEventListener('click', () =>{
        navShow.classList.remove('show-menu')
    })
}