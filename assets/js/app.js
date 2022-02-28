const navToggle = document.getElementById("nav-toggle");
const navClose = document.getElementById("nav-close");
const navMenu = document.getElementById("nav-menu");
const navLink = document.querySelectorAll('.nav__link');
const cartToggle = document.getElementById("cart-toggle");
const cartMenu = document.getElementById("cart-menu");
const cartClose = document.getElementById("cart-close");
const cartContent = document.getElementById("cart-content");
const cartClear = document.getElementById("cart-clear");
const cartTotal = document.getElementById("cart-total");
const cartRemove = document.getElementById("cart-remove");


if(navToggle){
    navToggle.addEventListener('click', () =>{
        navMenu.classList.add('show-menu')
    })
}

if(navClose){
    navClose.addEventListener('click', () =>{
        navMenu.classList.remove('show-menu')
    })
}

function linkAction (){
    const navMenu = document.getElementById('nav-menu')

    navMenu.classList.remove('show-menu')
}

navLink.forEach(n => n.addEventListener('click', linkAction))


if(cartToggle){
    cartToggle.addEventListener('click', () =>{
        cartMenu.classList.add('show-cart')
    })
}

if(cartClose){
    cartClose.addEventListener('click', () =>{
        cartMenu.classList.remove('show-cart')
    })
}


