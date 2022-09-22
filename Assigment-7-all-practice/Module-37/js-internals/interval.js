// x++ vs ++x
// i++ vs ++i

console.log('first');
console.log('second');
let second = 0;
// setInterval(res => {
//     console.log(second++);
//     return res;
// }, 1500);
const intervalId = setInterval(() => {
    console.log(++second)
    if (second === 10) {
        clearInterval(intervalId)
    }
}, 500);
console.log('fourth');
console.log('fifth');