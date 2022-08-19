
function getInputValueById(inputFieldId) {
    const depositAmountText = document.getElementById(inputFieldId).value;
    const depositAmount = parseFloat(depositAmountText);
    document.getElementById(inputFieldId).value = '';
    return depositAmount;
}

function getElementValueById(elemetnId) {
    const elementText = document.getElementById(elemetnId).innerText;
    const elementValue = parseFloat(elementText);
    return elementValue;
}

function setElemnetValueUsingId(elemetnId, newTextValue) {
    document.getElementById(elemetnId).innerText = newTextValue;
}