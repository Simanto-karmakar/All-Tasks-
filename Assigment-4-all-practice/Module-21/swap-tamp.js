let first = 5;
let second = 7;


// approch: 1
// const temp = first;
// first = second;
// second = temp;
// console.log(first, second);

// approch:2
[first, second] = [second, first];
console.log(first, second);



// wrong approch
// // first = second;
// // second = first;
// console.log(first, second);