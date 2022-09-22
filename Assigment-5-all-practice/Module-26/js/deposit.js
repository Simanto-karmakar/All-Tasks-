// step-1:add event listner to the deposit button
document.getElementById('btn-deposit').addEventListener('click', function () {
    // step-2:get the deposit ammount from the deposit input field
    // for input field use .value to the value of the input field
    const depositField = document.getElementById('deposit-field');
    const newDepositAmmountString = depositField.value;
    const newDepositAmmount = parseFloat(newDepositAmmountString);

    // step-3:get the current total deposit
    // for non input(element other then input,textarea) use innerText to get the text
    const depositTotalElement = document.getElementById('deposit-total');
    const previousDepositTotalString = depositTotalElement.innerText;
    const previousDepositTotal = parseFloat(previousDepositTotalString);

    // step-4:add number to the total deposit
    const currentDepositTotal = previousDepositTotal + newDepositAmmount;
    // set the deposit total
    depositTotalElement.innerText = currentDepositTotal;

    // step-5:
    const balanceTotalElement = document.getElementById('balance-total');
    const previousBalanceTotalstring = balanceTotalElement.innerText;
    const previousBalanceTotal = parseFloat(previousBalanceTotalstring);

    // step-6:calculate current total balance
    const currentBalanceTotal = previousBalanceTotal + newDepositAmmount;
    // set the total balance amount
    balanceTotalElement.innerText = currentBalanceTotal;



    // step-7:get the value empty
    depositField.value = '';
});