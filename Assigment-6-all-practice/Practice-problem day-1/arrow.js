// declare 1 perametar array function 3.1
function add(first) {
    const total = first / 5;
    return total;
}

const result = add(105);
// console.log(result);

// simplyfiyed version

const add1 = (first1) => first1 / 5;

// console.log(add1(10));

// declare 2 perameter array function 3.2
function add2(x, y) {
    const totalX = x + 2;
    const totalY = y + 2;
    const totalResult = totalX * totalY;
    return totalResult;
}

const final = add2(2, 4);
// console.log(final);

// simply fiyed version

const add3 = function (x1, y1) {
    r = x1 + 2;
    s = y1 + 2;
    f = r * s;
    return f;
}
// console.log(add3(2, 4));

// declare 3 perameter function 3.3

function add4(x, y, z) {
    const total3 = x * y * z;
    return total3;
}

// console.log(add4(2, 4, 6));