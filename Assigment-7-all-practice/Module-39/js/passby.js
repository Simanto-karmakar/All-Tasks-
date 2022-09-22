// primitive type are pass by value
let a = 5;
let b = 7;
function multiply(num1, num2) {
    num1 = 27;
    const result = num1 * num2;
    return result;
}

// console.log(a);
multiply(a, b);
// console.log(b);

let student1 = { name: 'jalil', pathner: 'borsha' }
let student2 = { name: 'raj', pathner: 'anika' }

function makeMovie(couple1, couple2) {
    couple1.name = 'Ononto'
    couple2.pathner = 'mim'
}

console.log(student1, student2);
makeMovie(student1, student2);
console.log(student1, student2);