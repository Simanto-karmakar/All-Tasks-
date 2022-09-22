const country = "bangladesh";
const age = 21;
const independent = true;
const student = { id: 121, class: 11, name: "agun" };
const friends = [13, 15, 21, 16, 20, 18];

function add(num1, num2) {
    return num1 + num2;
}

console.log(typeof country);
console.log(typeof age);
console.log(typeof independent);
console.log(typeof student);
// chack array using Array.isArray--------------
console.log(Array.isArray(friends));
console.log(typeof add);
console.log()
console.log()


// ----------------includes
console.log(friends.includes(21));
console.log(friends.includes(19));

if (friends.indexOf(19) !== -1) {

};

// -------------------concat: add array

const newFriendAge = [11, 13, 12, 15]
const allfriend = newFriendAge.concat(friends);
console.log(allfriend);

