const max = Math.max(12, 54, 78, 999);
// console.log(max);


const numbers = [12, 85, 999, 78];
const largest = Math.max(...numbers);
// console.log(...numbers);
// console.log(largest);

const numbers2 = [...numbers];
numbers.push(55);
numbers2.push(7777);
console.log(numbers);
console.log(numbers2);


const numbers3 = [...numbers];

const numbers4 = [444, 98, ...numbers, 38];