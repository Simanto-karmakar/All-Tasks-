function radianToDegree(radian) {
    const value = radian * 57.2958;
    if (value > 0) {
        return value.toFixed(2);
    }
    else {
        return "Please enter a valid number: ";
    }
}

const result = radianToDegree(true);
console.log(result);