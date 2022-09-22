const numbers = [2, 4, 8, 6, 3];
const output = [];
for (const number of numbers) {
    const doubled = number * 2;
    output.push(doubled);
}

// console.log(output);


function getDoubles(numbers) {
    const output = [];
    for (const number of numbers) {
        const doubled = doubleIt(number);
        output.push(doubled);
    }
    return output;
}

function doubleItOld(number) {
    return number * 2;
}

/* 
1.get an array.
2.for every element of the array do something.
3.store the result of the array.
4.return the result array.
*/

// arrow function
const doubleIt = num => num * 2;

const makeDouble = numbers.map(doubleIt);
const makeDoubleDirect = numbers.map(num => num * 2);
const makeDouble2 = numbers.map(x => x * 2);
// console.log(makeDouble2);

const fiveTimes = [1, 2, 3, 4, 5].map(x => x * 5);
console.log(fiveTimes);


const result = getDoubles(numbers);
console.log(result);
console.log(makeDouble);