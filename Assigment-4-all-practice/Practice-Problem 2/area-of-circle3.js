function areaOfCircle(r) {
    const pi = 3.1416;
    const result = pi * r * r;
    return result.toFixed(2);
}

console.log(areaOfCircle(3));