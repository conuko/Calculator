const calculatorDisplay = document.querySelector('h1');
const inputBtns = document.querySelectorAll('button');
const clearBtn = document.getElementById('clear-btn');

const sendNumberValue = (number) => { /* send the clicked Button to the calculators display */
    // If current display value is 0, replace it, if not add number
    const displayValue = calculatorDisplay.textContent;
    calculatorDisplay.textContent = displayValue === '0' ? number : displayValue + number;
}

// ========== Add Event Listeners for numbers, operators, decimal buttons ==========
inputBtns.forEach((inputBtn) => {
    if (inputBtn.classList.length === 0) {
        inputBtn.addEventListener('click', () => sendNumberValue(inputBtn.value)); /* add Event Listeners for the numbers */
    } else if (inputBtn.classList.contains('operator')) {
        inputBtn.addEventListener('click', () => sendNumberValue(inputBtn.value)); /* add Event Listeners for the operators */
    } else if (inputBtn.classList.contains('decimal')) {
        inputBtn.addEventListener('click', () => sendNumberValue(inputBtn.value)); /* add Event Listeners for the decimal */
    }
});