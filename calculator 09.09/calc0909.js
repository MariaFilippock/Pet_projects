const inputCalculator = document.querySelector('.input_calculator');
const btnNumber = document.querySelectorAll('.number');
const btnAction = document.querySelectorAll('.button_action');
const btnEqual = document.querySelector('.equal');
const btnReset = document.querySelector('.button_reset');
const btnComma = document.querySelector('.comma');

btnNumber.forEach((el) => el.addEventListener('click', handleNumberClick));
btnAction.forEach((el) => el.addEventListener('click', handleSignClick));
btnEqual.addEventListener('click', handleResultClick);
btnReset.addEventListener('click', handleResetClick);
btnComma.addEventListener('click', handleCommaClick);

let state = {
    firstArg: '',
    secondArg: '',
    operator: '' // '-', '/', '*', '%', '+'
}


//ф-ция, которая должна что-то делать если нажали на ЧИСЛО
function handleNumberClick(event) {

    if (state.operator) {
        state.secondArg += event.target.innerText;
    } else {
        state.firstArg += event.target.innerText;
    }
    renderDisplay();
}

//ф-ция, которая должна что-то делать если нажали на ЗНАК ДЕЙСТВИЯ
function handleSignClick(event) {

    state.operator = event.target.innerText;

    renderDisplay();
}

function renderDisplay() {
    const resultHTML = `${state.firstArg}${state.operator}${state.secondArg}`;
    inputCalculator.value = resultHTML.toString().replace('.',',');
    console.log(state);

}


function handleResultClick() {
    let result = 0;
        result = Number(state.firstArg) - Number(state.secondArg);
    } else if (state.operator === '+') {
        result = Number(state.firstArg) + Number(state.secondArg);
    } else if (state.operator === '×') {
        result = Number(state.firstArg) * Number(state.secondArg);
    } else if (state.operator === '÷') {
        result = Number(state.firstArg) / Number(state.secondArg);
    } else if (state.operator === '%') {
        result = Number(state.firstArg) / 100;
    }

    state.firstArg = result;
    state.secondArg = '';
    state.operator = '';

    renderDisplay();
}


function handleResetClick() {
    state.firstArg = '';
    state.operator = '';
    state.secondArg = '';

    renderDisplay();
}

function handleCommaClick() {

    if (state.operator) {
        state.secondArg += '.';
    } else {
        state.firstArg += '.';
    }
    renderDisplay();

}