const bottle = { color: 'yellow', price: 50, isCleaned: true, capacity: 1 };
const keys = Object.keys(bottle);
// console.log(keys);
const value = Object.values(bottle);
// console.log(value);
const pair = Object.entries(bottle);
// console.log(pair);
// const twoDymensonal = [
//     ['color', 'yellow'],
//     ['price', 50],
//     ['isCleaned', true],
//     ['capacity', 1]
// ]

console.log(bottle);
// Object.seal(bottle);
// Object.freeze(bottle);
// delete bottle.isCleaned;
bottle.price = 1000;
bottle.height = 12;
console.log(bottle);