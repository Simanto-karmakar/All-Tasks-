function inchsToFeet(inchs) {
    const feet = inchs / 12;
    return feet;
}

const dadainchs = 144;
const dadafeet = inchsToFeet(dadainchs);
console.log(dadafeet);

const dadiinches = 168;
const dadifeet = inchsToFeet(dadiinches);
console.log('dadifeet', dadifeet);