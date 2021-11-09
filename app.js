const numberButton = document.querySelectorAll('[data-number-button]');
const operatorButton = document.querySelectorAll('[data-operator-button]');
const clearButton = document.querySelector('[data-clear-button]');
const equalsButton = document.querySelector('[data-equals-button]');
const display = document.getElementById('display-value');
const deleteButton = document.querySelector('[data-delete-button]');

function deleteLast() {
    let displayValue = display.textContent;
    display.textContent = displayValue.substring(0, displayValue.length - 1);
}
deleteButton.addEventListener('click', deleteLast);

function clearDisplay() {
    display.textContent = "";
}

clearButton.addEventListener('click', clearDisplay);

numberButton.forEach(button => {
    button.addEventListener('click', () => {
        display.textContent = display.textContent + button.textContent;
    });
});

operatorButton.forEach(button => {
    button.addEventListener('click', () => {
        display.textContent = display.textContent + button.textContent;
    });
});

equalsButton.addEventListener('click', () => {
    display.textContent = eval(display.textContent);
});