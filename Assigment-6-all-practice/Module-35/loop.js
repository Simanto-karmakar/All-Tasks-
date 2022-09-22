const numbers = [12, 19, 25, 3, 18];
// for (const number of numbers) {
//     console.log(number);
// }

// 1.can't used for loop in object
const bottle = { color: 'yellow', price: 50, isCleaned: true, capacity: 1 };

// first option to use loop through an object[not usable]
const keys = Object.keys(bottle);
// console.log(keys);
/* 
3 ways to read object properties
bottle.color
bottle.['color']
bottle.key
*/
for (const key of keys) {
    // console.log(key, bottle[key]);
}

// for in loop
for (const key in bottle) {
    const value = bottle[key];
    // console.log(key, value);
}

// advanced
const pair = Object.entries(bottle);
// console.log(pair);
for (const [key, value] of Object.entries(bottle)) {
    console.log(key, value);
}