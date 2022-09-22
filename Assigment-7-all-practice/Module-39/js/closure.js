function kitchen() {
    let roast = 0;
    return function () {
        roast++;
        return roast;
    }
}

const firstsarve = kitchen();
console.log(firstsarve());
console.log(firstsarve());
console.log(firstsarve());
console.log(firstsarve());
console.log(firstsarve());