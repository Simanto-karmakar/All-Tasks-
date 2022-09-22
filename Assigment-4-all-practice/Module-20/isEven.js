function isEven(number) {
    const reminder = number % 2;
    if (reminder === 0) {
        return true;
    }
    else {
        return false;
    }
}

const myNumberIsEven = isEven(303);
console.log(myNumberIsEven);
const herNumberIsEven = isEven(1280);
console.log(herNumberIsEven);