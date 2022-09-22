// arrow function 


// 1.no perameter return 89;
const add = function () {
    return 89;
}

// add();
// console.log(add());

// 2 number as perameter and retur it by devaiding 17;

const add2 = function (first) {
    const total = first / 17;
    return total;
}

const result = add2(100);
// console.log(result);

// add two perameter:first one is 7 and second is 5 then equal them and then devided them then the result if even then return true otherwise reeturn false..

const add3 = function (first, second) {
    const final = first + second;
    // const final = total1 / 2;
    if (final % 2 === 0) {
        return true;
    }
    else {
        return false;
    }
}

const result3 = add3(7, 2)
console.log(result3);