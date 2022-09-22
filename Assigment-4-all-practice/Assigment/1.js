// problem:1 radianToDegree

function radianToDegree(radian) {
    const value = radian * 57.2958;
    if (value > 0) {
        return value.toFixed(2);
    }
    else {
        return "Please enter a valid number. ";
    }
}

const result = radianToDegree(10);
console.log(result);


// problem:2 isjavaScriptFile

function isJavaScriptFile(file) {
    if (file.slice(-3) == '.js') {
        return true;
    }
    else {
        return false;
    }
}

const myFile = isJavaScriptFile('app.js');
console.log(myFile);


// problem:3 oilPrice

function oilPrice(diesel, petrol, octane) {
    const dieselPrice = diesel * 114;
    const petrolPrice = petrol * 130;
    const octanePrice = octane * 135;
    const totalPrice = dieselPrice + petrolPrice + octanePrice;
    if (totalPrice > 0) {
        return totalPrice;
    }
    else {
        return "enter a valid number. ";
    }
}

const totaloilPrice = oilPrice(1, 1, 1);
console.log(totaloilPrice);


// problem:4 publicBusFare


function publicBusFare(passenger) {
    let busSpace = 50;
    let microSpace = 11;
    let backFromBus = passenger % busSpace;
    let backFromBusAndMicroBus = backFromBus % microSpace;
    let fare = backFromBusAndMicroBus * 250;
    return fare;
}

const restPassenger = publicBusFare(50);
console.log(restPassenger);


// problem:5 isBestFriend

function isBestFriend(manObj1, manObj2) {
    if ((manObj1.name === manObj2.friend) && (manObj2.name === manObj1.friend)) {
        return true;
    }
    else {
        return false;
    }
}

const bestFriend = isBestFriend({ name: "abul", friend: "babul" }, { name: "babul", friend: "abul" });
console.log(bestFriend);