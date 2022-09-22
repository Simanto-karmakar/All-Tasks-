const products = [
    { name: 'shirt', price: 1200 },
    { name: 'pant', price: 1000 },
    { name: 'shoe', price: 2200 },
    { name: 'belt', price: 600 },
    { name: 'ghori', price: 300 }
];

function totalCost(products) {
    let sum = 0;
    for (let i = 0; i < products.length; i++) {
        const product = products[i];
        sum = sum + product.price;
        console.log(product);
    }
    return sum;
}

const shoppingCart = totalCost(products);
console.log('Total cost today:', shoppingCart);