








function getInputValueById(inputId){
    const inputField = document.getElementById(inputId);
    const inputFieldValue = inputField.value;
    const inputFieldString = parseFloat(inputFieldValue);
    inputField.value = ''
    return inputFieldString;
}

function setTextElementById(elementId, value){
    const element = document.getElementById(elementId);
    element.innerText = value;
    return element;
}
