function oilPrice(diesel, petrol, octane) {
    const dieselPrice = diesel * 114;
    const petrolPrice = petrol * 130;
    const octanePrice = octane * 135;
    const totalPrice = dieselPrice + petrolPrice + octanePrice;
    return totalPrice;
}

const totaloilPrice = oilPrice(1, 1, 1);
console.log(totaloilPrice);