// declere find 7
const products = [
    { id: 1, name: 'laptop', price: 45000 },
    { id: 1, name: 'Mobile', price: 25000 },
    { id: 1, name: 'Watch', price: 5000 },
    { id: 1, name: 'Tablet', price: 15000 }
];

const result = products.find(n => n.price === 5000);
console.log(result);