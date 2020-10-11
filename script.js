const calculatorDisplay = document.querySelector('h1');
const inputBtns = document.querySelectorAll('button');
const clearBtn = document.getElementById('clear-btn');

// ========== The initial status for the values we are working with ==========
let firstValue = 0;
let operatorValue = '';
let awaitingNextValue = false;

// ========== Function to send the clicked Button to the calculators display ==========
const sendNumberValue = (number) => {
    // Replace current display value if first value is entered
    if (awaitingNextValue) {
        calculatorDisplay.textContent = number;
        awaitingNextValue = false;
    } else {
        // If current display value is 0, replace it, if not add number
        const displayValue = calculatorDisplay.textContent;
        calculatorDisplay.textContent = displayValue === '0' ? number : displayValue + number;
    }
}

// ========== Function to add the decimal point ==========
const addDecimal = () => {
    // If operator pressed, don't add decimal
    if (awaitingNextValue) return;
    // If no decimal, add one. If there already is one, don't add another:
    if (!calculatorDisplay.textContent.includes('.')) {
        calculatorDisplay.textContent = `${calculatorDisplay.textContent}.`;
    }
}

const useOperator = (operator) => {
    const currentValue = Number(calculatorDisplay.textContent); /* change the string value from the eventListener to a number */
    // Assign firstValue if no value
    if (!firstValue) {
        firstValue = currentValue;
    } else {
        console.log('currentValue', currentValue);
    }
    // Ready for next value, store operator
    awaitingNextValue = true; /* this boolean is triggered after we clicked the operator */
    operatorValue = operator;
    console.log('firstValue', firstValue);
    console.log('operator', operatorValue);
}

// ========== Add Event Listeners for numbers, operators, decimal buttons ==========
inputBtns.forEach((inputBtn) => {
    if (inputBtn.classList.length === 0) {
        inputBtn.addEventListener('click', () => sendNumberValue(inputBtn.value)); /* add Event Listeners for the numbers */
    } else if (inputBtn.classList.contains('operator')) {
        inputBtn.addEventListener('click', () => useOperator(inputBtn.value)); /* add Event Listeners for the operators, send them to useOperator function */
    } else if (inputBtn.classList.contains('decimal')) {
        inputBtn.addEventListener('click', () => addDecimal()); /* add Event Listeners for the decimal */
    }
});

// ========== Reset all values and the display ==========
const resetAll = () => {
    firstValue = 0;
    operatorValue = '';
    awaitingNextValue = false;
    calculatorDisplay.textContent = '0';
}

// Event Listener
clearBtn.addEventListener('click', resetAll);