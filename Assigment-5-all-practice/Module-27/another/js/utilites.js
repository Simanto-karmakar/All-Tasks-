
function getInputFieldValueById(inputFieldId) {
    const inputField = document.getElementById(inputFieldId);
    const inputFieldValueString = inputField.Value;
    const inputFieldvalue = parseFloat(inputFieldValueString);
    inputField.value = '';
    return inputFieldvalue;
}

function getTextElementValueById(elementId) {
    const textElement = document.getElementById(elementId);
    const textElementValueString = textElement.innerText;
    const textElementValue = parseFloat(textElementValueString);
    textElement.innerText = '';
    return textElementValue;
}


function setTextElementvalueById(elementId, newValue) {
    const textElement = document.getElementById(elementId);
    textElement.innerText = newValue;
}