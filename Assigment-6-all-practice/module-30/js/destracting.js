const fish = {
    name: 'king hilsa',
    address: 'chandpur',
    color: 'silver',
    phone: '01717889922',
    price: 4000
}

// const phone = fish.phone;
// const color = fish.color;
// const price = fish.price;
// const address = fish.address;


const { phone } = fish;
const { color } = fish;
const { price } = fish;
const { name } = fish;
const { address } = fish;

console.log(phone);
console.log(phone);
console.log(name);
console.log(color);
console.log(address);
console.log(price);

// const { address } = fish;
// console.log(address);

const { age, profession } = { name: 'almas', age: 54, profession: 'makeup artist' };
console.log(age, profession);



// array destracturing
const [first, another] = [34, 55, 88, 122];
console.log(another);

const noyoks = ['sakib', 'bappi', 'raj'];
const [mofiz, bodai, kalam] = noyoks;
console.log(kalam);

function getNames() {
    return ['alim', 'halim'];
}

const [mama, chaca] = getNames();
console.log(chaca, mama);