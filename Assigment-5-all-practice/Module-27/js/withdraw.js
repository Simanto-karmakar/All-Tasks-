document.getElementById('btn-WIthdraw').addEventListener('click', function () {
    const withdrawField = document.getElementById('withdraw-field');
    const newWithdrAwAmountString = withdrawField.value;
    const newWithdrawAmount = parseFloat(newWithdrAwAmountString);

    withdrawField.value = '';

    const withdrawTotalElement = document.getElementById('withdraw-total');
    const previousWithdrawTotalString = withdrawTotalElement.innerText;
    const previousWithdrawTotal = parseFloat(previousWithdrawTotalString);

    const newWithdrawTotal = previousWithdrawTotal + newWithdrawAmount;
    withdrawTotalElement.innerText = newWithdrawTotal;

    const balanceTotalElement = document.getElementById('balance-total');
    const previousBalanceTotalString = balanceTotalElement.innerText;
    const previousBalanceTotalAmount = parseFloat(previousBalanceTotalString)

    const newBalanceTotal = previousBalanceTotalAmount - newWithdrawAmount;
    balanceTotalElement.innerText = newBalanceTotal;
})