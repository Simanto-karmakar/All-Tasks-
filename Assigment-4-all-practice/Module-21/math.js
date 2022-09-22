const num1 = 38;
const num2 = 45;

const gap = Math.abs(num1 - num2);
console.log(gap);

if (gap < 5) {
    console.log("you gays stay together");
}
else {
    console.log("you gays stay apart");
}

// ------------------------------
// .round declare

const number = 2.5569;
const fullnumber = Math.round(number);
console.log(fullnumber);

// --------------------------
// .ceil declare

const celing = Math.ceil(3.00002);
console.log(celing);

// ---------------------
// .floor declare

const niche = Math.floor(2.9999990);
console.log(niche);

// ------------------
// .random declare

// console.log(Math.random());

// const random = Math.round(Math.random() * 100);
// console.log(random);

for (let i = 0; i < 20; i++) {
    const random = Math.round(Math.random() * 6);
    console.log(random);
}

