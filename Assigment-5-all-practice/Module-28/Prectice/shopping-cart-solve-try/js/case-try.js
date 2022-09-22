function updateCaseNumber(isIncrease) {
    const caseNumberField = document.getElementById('num-case-field');
    const caseNumberString = caseNumberField.value;
    const previousCaseNumber = parseInt(caseNumberString);

    let newCasenumber;
    if (isIncrease === true) {
        newCasenumber = previousCaseNumber + 1;
    }
    else {
        newCasenumber = previousCaseNumber - 1;
    }
    caseNumberField.value = newCasenumber;

    return newCasenumber;
}

function updateTotalPrice(newCaseNumber) {
    const caseTotalPrice = newCaseNumber * 59;
    const caseTotalElement = document.getElementById('case-total');
    caseTotalElement.innerText = caseTotalPrice;
}


document.getElementById('btn-case-plus').addEventListener('click', function () {
    const newCaseNumber = updateCaseNumber(true);

    updateTotalPrice(newCaseNumber);

})
document.getElementById('btn-case-minus').addEventListener('click', function () {
    const newCaseNumber = updateCaseNumber(false);

    updateTotalPrice(newCaseNumber);

})

