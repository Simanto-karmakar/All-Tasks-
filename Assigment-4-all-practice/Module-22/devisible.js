// fixed per item wood requirment 
// 1. chair ----> 3 ctf
// 2. table ----> 10 ctf
// 3. bed -----> 50 ctf

// vary:quantity


function woodCalculate(chairquantity, tablequantity, bedquantity) {
    const perChairWood = 3;
    const perTablewood = 10;
    const perBedWood = 50;

    const chairWood = chairquantity * perChairWood;
    const tableWood = tablequantity * perTablewood;
    const bedWood = bedquantity * perBedWood;

    const totalWood = chairWood + tableWood + bedWood;
    return totalWood;
}

const totalWood = woodCalculate(3, 2, 1);
console.log(totalWood);