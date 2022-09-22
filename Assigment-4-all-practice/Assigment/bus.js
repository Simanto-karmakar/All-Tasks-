
function publicBusFare(passenger) {
    let busSpace = 50;
    let microSpace = 11;
    let backFromBus = passenger % busSpace;
    let backFromBusAndMicroBus = backFromBus % microSpace;
    let fare = backFromBusAndMicroBus * 250;
    return fare;
}

const restPassenger = publicBusFare(235);
console.log(restPassenger);