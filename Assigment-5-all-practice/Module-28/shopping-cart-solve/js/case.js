function updateCaseNumber(isIncrease) {
    const caseNumberField = document.getElementById('case-number-field');
    const caseNumberString = caseNumberField.value;
    const previousCasenumber = parseInt(caseNumberString);

    let newcaseNumber;

    if (isIncrease === true) {
        newcaseNumber = previousCasenumber + 1;
    }
    else {
        newcaseNumber = previousCasenumber - 1;
    }
    caseNumberField.value = newcaseNumber;

    return newcaseNumber;
}

function updateCaseTotalPrice(newcaseNumber) {
    const caseTotalPrice = newcaseNumber * 59;
    const caseTotalElement = document.getElementById('case-total');
    caseTotalElement.innerText = caseTotalPrice;
}

document.getElementById('btn-case-plus').addEventListener('click', function () {
    const newcaseNumber = updateCaseNumber(true);

    updateCaseTotalPrice(newcaseNumber);
    calculateSubTotal();
})

document.getElementById('btn-case-minus').addEventListener('click', function () {
    const newcaseNumber = updateCaseNumber(false);

    updateCaseTotalPrice(newcaseNumber);
    calculateSubTotal();
})