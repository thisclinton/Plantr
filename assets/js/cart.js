/* let cartAdd = document.querySelectorAll('.product__button');

let products = [
    {
      name: 'Cacti Plant',
      tag: 'cactiplant',
      price: 19,
      inCart: 0  
    },

    {
        name: 'Aloe-Vera Plant',
        tag: 'aloeveraplant',
        price: 20,
        inCart: 0  
    },

    {
        name: 'Cacti Plant',
        tag: 'cactiplant',
        price: 21,
        inCart: 0  
    },

    {
        name: 'Cacti Plant',
        tag: 'cactiplant',
        price: 22,
        inCart: 0  
    }
]

for(let i = 0; i < cartAdd.length; i++) {
    cartAdd[i].addEventListener('click', () => {
        cartNumbers(products[i]);
        cartTotal(products[i]);
    })
}

const onLoadCartNumbers = () => {
    let productNumbers = localStorage.getItem('cartNumbers');
    
    if(productNumbers) {
        document.querySelector('.cart__count').textContent = productNumbers;
    }
}


const cartNumbers = (product) => {
    console.log('the product clicked is', product);
    let productNumbers = localStorage.getItem('cartNumbers');

    productNumbers = parseInt(productNumbers);

    if(productNumbers){
        localStorage.setItem('cartNumbers', productNumbers + 1);
        document.querySelector('.cart__count').textContent = productNumbers + 1;
    } else {
        localStorage.setItem('cartNumbers', 1);
        document.querySelector('.cart__count').textContent = 1;
    }

    setItems(product); 

    console.log(typeof productNumbers);
    
}


const setItems = (product) => {

    let cartItems = localStorage.getItem("productsInCart"); 
    cartItems = JSON.parse(cartItems);

    if(cartItems != null) {
        if(cartItems[product.tag] == undefined) {
            cartItems = {
                ...cartItems,
                [product.tag]: product
            }
        }

        cartItems[product.tag].inCart += 1;
    }else {
        product.inCart = 1;
        cartItems = {
            [product.tag]: product
        }
    }

    localStorage.setItem("productsInCart", JSON.stringify(cartItems));
}



const cartTotal = (product) => {
    let cartCost = localStorage.getItem("cartTotal");
    
    if(cartCost != null) {
        cartCost = parseInt(cartCost);
        localStorage.setItem("cartTotal", cartCost + product.price);
    }else {
        localStorage.setItem("cartTotal", product.price);
    }
}

const cartDisplay = () => {
    let cartItems = localStorage.getItem("productsInCart");
    cartItems = JSON.parse(cartItems);

    if(cartItems) {
        
    }
}

onLoadCartNumbers(); */

 

const productContainer = document.querySelector(".product__container");
const cartItems = document.querySelector(".cart__content");
const cartTotal = document.querySelector(".cart__total");
const cartCount = document.querySelector(".cart__count");

// RENDER PRODUCTS
const renderProducts = () => {
    products.forEach( (product) => {
        productContainer.innerHTML += `
        <div class="product__card">
            <img src="${product.imgSrc}" alt="${product.tag}" class="product__img">

            <h3 class="product__title">${product.name}</h3>
            <span class="product__price">$${product.price}</span>

            <button class="button--flex product__button" onclick="addToCart(${product.id })">
            <i class="ri-shopping-bag-line"></i>
            </button>

        </div>
        `
    });
};
renderProducts();

// CART ARRAY
let cart = JSON.parse(localStorage.getItem("CART")) || [];

// ADD TO CART

const addToCart = (id) => {
    // check if product already exists in cart
    if(cart.some((item) => item.id === id)) {
        changeNumberOfUnits('increase', id)
    } else {
        const item = products.find((product) => product.id === id);
        cart.push({
            ...item,
            inCart: 1,
        });
    }

    updateCart();
}

// updating the cart
const updateCart = () => {
    renderCartItems();
    renderSubTotal();

    // save cart to local storage
    localStorage.setItem("CART", JSON.stringify(cart));
}



// calculate and render subtotal
const renderSubTotal = () => {
    let totalPrice = 0, totalItem = 0;

    cart.forEach((item) => {
        totalPrice += item.price * item.inCart;
        totalItem += item.inCart;
    });

    cartTotal.innerHTML = `${totalPrice.toFixed(2)}`;
    cartCount.innerHTML = `${totalItem}`;
}

// render cart items
const renderCartItems = () => {
    cartItems.innerHTML = "", // clear cart element
    cart.forEach((item) => {
        cartItems.innerHTML += `
            <div class="cart__item" id="cart-item">
                <img src="${item.imgSrc}" class="cart__img" alt="${item.tag}">
                <div class="cart__info">
                    <h4>${item.name}</h4>
                    <h5 class="cart__price">${item.price}</h5>
                    <button class="cart__remove" id="cart-remove" onclick="removeItemFromCart(${item.id})">remove</button>
                </div>

                <div class="cart__amount">
                    <i class="ri-arrow-up-s-line cart__item-increment" onClick="changeNumberOfUnits('increase', ${item.id})"></i>
                    <p class="cart__quantity">${item.inCart}</p> 
                    <i class="ri-arrow-down-s-line cart__item-decrement" onClick="changeNumberOfUnits('decrease', ${item.id})"></i>
                </div>
            </div>
        `
    })
};

// remove item from cart
const removeItemFromCart = (id) => {
    cart = cart.filter((item) => item.id !== id);

    updateCart();
}


// change number of units of an item
const changeNumberOfUnits = (action, id) => {
    cart = cart.map((item) => {
        let inCart = item.inCart;

        if(item.id === id) {
            if(action === 'increase'){
                inCart++;
            }else if(action === 'decrease' && inCart > 1){
                inCart--;
            }
        }

        return {
            ...item,
            inCart,
        }
    });

    updateCart();
}

updateCart();