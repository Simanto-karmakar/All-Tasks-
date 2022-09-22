function isLeapYear(year) {
    const reminder = year % 4;
    if (reminder === 0) {
        return true;
    }
    else {
        return false;
    }
}

const isMyLeapYear = isLeapYear(2001);
console.log(isMyLeapYear);
const isHerLeapYear = isLeapYear(2004);
console.log(isHerLeapYear);