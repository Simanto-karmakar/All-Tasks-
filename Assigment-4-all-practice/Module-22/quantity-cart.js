const products = [
    { name: 'shirt', price: 1200, quantity: 4 },
    { name: 'pant', price: 2200, quantity: 3 },
    { name: 'shoe', price: 1200, quantity: 2 },
    { name: 'belt', price: 500, quantity: 1 },
    { name: 'ghori', price: 300, quantity: 1 },
];

function totalCost(products) {
    let sum = 0;
    for (let i = 0; i < products.length; i++) {
        const product = products[i];
        const productTotal = product.price * product.quantity;
        sum = sum + productTotal;
        console.log(product);
    }
    return sum;
}

const shoppingCart = totalCost(products);
console.log('My total cost: ', shoppingCart);