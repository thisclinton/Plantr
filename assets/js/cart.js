let cartAdd = document.querySelectorAll('.product__button');

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
        cartNumbers();
    })
}

const onLoadCartNumbers = () => {
    let productNumbers = localStorage.getItem('cartNumbers');
    
    if(productNumbers) {
        document.querySelector('.cart__count').textContent = productNumbers;
    }
}


const cartNumbers = () => {
    let productNumbers = localStorage.getItem('cartNumbers');

    productNumbers = parseInt(productNumbers);

    if(productNumbers){
        localStorage.setItem('cartNumbers', productNumbers + 1);
        document.querySelector('.cart__count').textContent = productNumbers + 1;
    } else {
        localStorage.setItem('cartNumbers', 1);
        document.querySelector('.cart__count').textContent = 1;
    }

    console.log(typeof productNumbers);
    
}

onLoadCartNumbers();