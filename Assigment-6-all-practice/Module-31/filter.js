const numbers = [12, 15, 28, 25, 3, 97, 5, 1];
const bignums = numbers.filter(number => number > 20);
// console.log(bignums);
const tiny = numbers.filter(n => n < 10);
// console.log(tiny);
const even = numbers.filter(n => n % 2 === 0);
// console.log(even);

const products = [
    { id: 1, name: 'laptop', price: 45000 },
    { id: 1, name: 'Mobile', price: 25000 },
    { id: 1, name: 'Watch', price: 500000 },
    { id: 1, name: 'Tablet', price: 150000 }
];

const items = products.filter(x => x.price > 40000);
console.log(items);
// const expensive = products.filter(product => product.price > 100000);
// const expensive = products.filter(product => product.price > 1000);
const expensive = products.filter(product => product.price < 100);
// console.log(expensive);