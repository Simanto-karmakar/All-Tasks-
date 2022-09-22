const getInputValueById = id => {
    const inputField = document.getElementById(id)
    const inputValue = inputField.value;
    inputField.value = '';
    return inputValue;
}



const addproduct = () => {
    const product = getInputValueById('product-name-field')
    const quantity = getInputValueById('product-quantity-field')
    console.log(product, quantity)

    // display product on ui
    addProductToDisplay(product, quantity);

    // set to local storage
    // simple way
    // localStorage.setItem(product, quantity);

    saveItemToLocalStorage(product, quantity);
}

const getShoppingCartFromLocalStorase = () => {
    let savedCart = localStorage.getItem('cart')
    let cart = {}
    if (savedCart) {
        cart = JSON.parse(savedCart)
    }
    return cart;
}


const saveItemToLocalStorage = (product, quantity) => {
    const cart = getShoppingCartFromLocalStorase();
    // add product to the object as property
    cart[product] = quantity;
    const cartStringfied = JSON.stringify(cart)


    // save to local storage
    localStorage.setItem('cart', cartStringfied);
}


const addProductToDisplay = (product, quantity) => {
    const productContainer = document.getElementById('product-container');
    const li = document.createElement('li');
    li.innerText = `${product}:${quantity}`;
    productContainer.appendChild(li)
}

const displayStoredProducts = () => {
    const cart = getShoppingCartFromLocalStorase();
    for (const product in cart) {
        const quantity = cart[product]
        console.log(product, quantity);

        addProductToDisplay(product, quantity);
    }
}

displayStoredProducts();