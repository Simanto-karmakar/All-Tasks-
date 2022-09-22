
// double perametar system
const add = (first, second) => first + second;
const getFullName = (first, last) => first + ' ' + last;
const multiple = (a, b) => a * b;

const result = multiple(7, 8);
// console.log(result);


const many = (a, b, c, d, e, f) => a + b + c + d + e + f;

const result2 = many(1, 3, 5, 6, 5, 9);
// console.log(result2);

// no perameter arrow function
const getPie = () => 3.1416;

// one perameter
const doubleId = (num) => num * 2;

// const result2 = doubleId(5);
// console.log(result2);

// one perameter simple version
const fiveTimes = num => num * 5;

const result3 = fiveTimes(10);
// console.log(result3);

// multi line arrow function
// if you want to return somthing, use return

const doMath = (x, y, z) => {
    const firstSum = x + y;
    const secondSum = y + z;
    const multipleResult = firstSum + secondSum;
    const result = multipleResult / 2;
    return result;
}

const result4 = doMath(10, 4, 8);
console.log(result4);