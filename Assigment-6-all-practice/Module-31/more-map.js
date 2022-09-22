const numbers = [12, 56, 87, 44]

const half = numbers.map(n => n / 2);
// console.log(half);

const thirds = numbers.map(x => x / 3);
// console.log(thirds);

const friends = ['Tom Hanks', 'Tom Curise', 'Tom solaiman'];
const firstLatters = friends.map(friend => friend[0]);
// console.log(firstLatters);
const nameLengths = friends.map(friend => friend.length);
// console.log(nameLengths);

const products = [
    { id: 1, name: 'laptop', price: 45000 },
    { id: 1, name: 'Mobile', price: 25000 },
    { id: 1, name: 'Watch', price: 5000 },
    { id: 1, name: 'Tablet', price: 15000 }
];

const items = products.map(products => products.name);
console.log(items);