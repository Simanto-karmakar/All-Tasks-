class vehicle {
    constructor(make, model, color) {
        this.make = make;
        this.model = model;
        this.color = color;
    }
    getName() {
        return this.make + ' ' + this.model;
    }
}

const carName = new vehicle('toyota', 'colola', 'black');
console.log(carName);