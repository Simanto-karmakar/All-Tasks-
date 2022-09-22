// declaretion function
function add1(first, second) {
    const total = first + second;
    return total;
}

// function expression
function add2(first, second) {
    return first + second;
}

const add3 = function (first, second) {
    return first + second;
}

// arrow function
const add4 = (first, second) => first + second;


const result = add4(25, 20);
console.log(result);

