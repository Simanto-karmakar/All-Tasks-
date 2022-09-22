

document.getElementById('btn-withdraw').addEventListener('click', function () {
    const newWithdrawAmount = getInputFieldValueById('withdraw-field');
    const PreviousWithdrawTotal = getTextElementValueById('withdraw-total');
    const newWithdrawTotal = PreviousWithdrawTotal + newWithdrawAmount;
    setTextElementvalueById('withdraw-total', newWithdrawTotal);
    const previousBalanceTotal = getTextElementValueById('balance-total');
    const newBalanceTotal = previousBalanceTotal - newWithdrawAmount;
    setTextElementvalueById('balance-total', newBalanceTotal);
})