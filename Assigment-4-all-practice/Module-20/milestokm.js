function milesToKm(miles) {
    const km = miles * 1.60934;
    return km;
}

const totalMiles = 1;
const totalKm = milesToKm(totalMiles);
console.log(totalKm);