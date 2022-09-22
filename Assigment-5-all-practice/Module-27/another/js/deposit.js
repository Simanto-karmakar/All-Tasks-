
document.getElementById('btn-deposit').addEventListener('click', function () {
    const newDepositAmount = getInputFieldValueById('deposit-field');
    const previousDepositTotal = getTextElementValueById('deposit-total');
    const newDepositTotal = previousDepositTotal + newDepositAmount;
    setTextElementvalueById('deposit-total', newDepositTotal);
    const previousBalanceTotal = getTextElementValueById('balance-total');
    const newBalanceTotal = previousBalanceTotal + newDepositAmount;
    setTextElementvalueById('balance-total', newBalanceTotal);
})


    // 1.get the element by id
    // 2.get the value from the element
    // 3.convert string value from a number
    // 1.get previous deposit total by id
    // calculate new deposit total
    // set deposit Total Value
    // get previous balance by using function