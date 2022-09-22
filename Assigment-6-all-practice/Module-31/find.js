const numbers = [12, 25, 28, 25, 3, 97, 5, 1];

const five = numbers.find(number => number % 5 === 0);
const fiveAll = numbers.filter(number => number % 5 === 0);
console.log(five);
console.log(fiveAll);


const products = [
    { id: 1, name: 'laptop', price: 45000 },
    { id: 1, name: 'Mobile', price: 25000 },
    { id: 1, name: 'Watch', price: 5000 },
    { id: 1, name: 'Tablet', price: 15000 }
];

const chep = products.find(product => product.price < 40000);
console.log(chep);