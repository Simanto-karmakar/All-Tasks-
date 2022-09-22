function getPin() {
    const pin = genaretePin();
    const pinString = pin + '';
    if (pinString.length === 4) {
        return pin;
    }
    else {
        // console.log('get 3 digit pin found', pin);
        return getPin();
    }
}


function genaretePin() {
    const random = Math.round(Math.random() * 10000);
    return random;
}

document.getElementById('genarete-pin').addEventListener('click', function () {
    const pin = getPin();
    // display pin
    const displayPinField = document.getElementById('display-pin');
    displayPinField.value = pin;
})

document.getElementById('calculetor').addEventListener('click', function (event) {
    const number = event.target.innerText;

    const typedNumberField = document.getElementById('typed-numbers');
    const previousTypedNumber = typedNumberField.value;
    if (isNaN(number)) {
        if (number === 'C') {
            typedNumberField.value = '';
        }
        else if (number === '<') {
            const digits = previousTypedNumber.split('');
            digits.pop();
            const remainingDigits = digits.join('');
            typedNumberField.value = remainingDigits;
        }
    }
    else {
        const newTypedNumber = previousTypedNumber + number;
        typedNumberField.value = newTypedNumber;
    }

})

document.getElementById('verify-btn').addEventListener('click', function () {
    const displayPinField = document.getElementById('display-pin');
    const currentPin = displayPinField.value;

    const typedNumberField = document.getElementById('typed-numbers');
    const typedNumber = typedNumberField.value;

    const pinSuccessMassage = document.getElementById('pin-success');
    const pinFailureMassage = document.getElementById('pin-failure');

    if (currentPin === typedNumber) {
        pinSuccessMassage.style.display = 'block';
        pinFailureMassage.style.display = 'none';
    }
    else {
        pinFailureMassage.style.display = 'block';
        pinSuccessMassage.style.display = 'none';
    }
})