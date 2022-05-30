const navToggle = document.getElementById("nav-toggle");
const navClose = document.getElementById("nav-close");
const navMenu = document.getElementById("nav-menu");
const navLink = document.querySelectorAll(".nav__link");
const cartToggle = document.getElementById("cart-toggle");
const cartMenu = document.getElementById("cart-menu");
const cartClose = document.getElementById("cart-close");
const cartContent = document.getElementById("cart-content");
const cartItem = document.getElementById("cart-item");
const cartClear = document.getElementById("cart-clear");
const cartRemove = document.getElementsByClassName("cart__remove");
const quantityIncrement = document.getElementsByClassName(
  "cart__item-increment"
);
const quantitydecrement = document.getElementsByClassName(
  "cart__item-decrement"
);

if (navToggle) {
  navToggle.addEventListener("click", () => {
    navMenu.classList.add("show-menu");
  });
}

if (navClose) {
  navClose.addEventListener("click", () => {
    navMenu.classList.remove("show-menu");
  });
}

function linkAction() {
  const navMenu = document.getElementById("nav-menu");

  navMenu.classList.remove("show-menu");
}

navLink.forEach((n) => n.addEventListener("click", linkAction));

if (cartToggle) {
  cartToggle.addEventListener("click", () => {
    cartMenu.classList.add("show-cart");
  });
}

if (cartClose) {
  cartClose.addEventListener("click", () => {
    cartMenu.classList.remove("show-cart");
  });
}

const accordionItems = document.querySelectorAll(".questions__item");

accordionItems.forEach((item) => {
  const accordionHeader = item.querySelector(".questions__header");

  accordionHeader.addEventListener("click", () => {
    const openItem = document.querySelector(".accordion-open");

    toggleItem(item);

    if (openItem && openItem !== item) {
      toggleItem(openItem);
    }
  });
});

const toggleItem = (item) => {
  const accordionContent = item.querySelector(".questions__content");

  if (item.classList.contains("accordion-open")) {
    accordionContent.removeAttribute("style");
    item.classList.remove("accordion-open");
  } else {
    accordionContent.style.height = accordionContent.scrollHeight + "px";
    item.classList.add("accordion-open");
  }
};

/* const ready = () => {
    for(let i = 0; i < cartRemove.length; i++) {
        let btnRemove = cartRemove[i];
        btnRemove.addEventListener('click', removeCartItem)
    }

    let quantityInputs = document.getElementsByClassName('cart__quantity')
    for(let i = 0; i < quantityInputs.length; i++) {
        let input = quantityInputs[i]
        input.addEventListener('change', quantityChanged)
    }
}

if(document.readyState == 'loading') {
    document.addEventListener('DOMContentLoaded', ready)
}else{
    ready()
}


const removeCartItem = (e) => {
    let btnClicked = e.target
    btnClicked.parentElement.parentElement.remove()
    updateCartTotal()
}

const quantityChanged = (e) => {
    let input = e.target
    if(isNaN(input.innerText) || input.innerText <= 0) {
        input.innerText = 1
    }

}


const updateCartTotal = () => {
    let cartContainer = document.getElementsByClassName('cart__content')[0]
    let cartRows = cartContainer.getElementsByClassName('cart__item')
    let total = 0
    for(let i = 0; i < cartRows.length; i++) {
        let cartRow = cartRows[i]
        let priceElement = cartRow.getElementsByClassName('cart__price')[0]
        let quantityElement = cartRow.getElementsByClassName('cart__quantity')[0]
        let price = parseFloat(priceElement.innerText.replace('$', ''))
        let quantity = quantityElement.innerText
        total = total + (price * quantity)
    }
    document.getElementsByClassName('cart__total')[0].innerText = total
} */
