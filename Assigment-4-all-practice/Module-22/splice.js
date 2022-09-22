const friends = [12, 13, 15, 22, 44, 69, 55, 64, 24]


// Removes elements from an array and, if necessary, inserts new elements in their place, returning the deleted elements
// will changes the orginal array.

// approch:1
// const partial = friends.splice(2, 5);
// console.log(partial);
// console.log(friends);

// approch:2
// splice array thake remove kora jai abr add kora jai oi jaigai

const partial = friends.splice(2, 5);
console.log(partial);
console.log(friends);
