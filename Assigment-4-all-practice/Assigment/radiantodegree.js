function radianToDegree(radian) {
    const value = radian * 57.2958;
    return value.toFixed(2);
}

const result = radianToDegree("name");
console.log(result);