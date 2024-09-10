const inputCalculator = document.querySelector('.input_calculator');
const equalBtn = document.querySelector('.equal');
const Btns = document.querySelector('.calculator_buttons');


Btns.addEventListener('click', chooseNumber);


let data = {
    numbers: [],
    operator: '+' // '-', '/', '*', '%'
}

function chooseNumber(event) {
    event.preventDefault();

    const chosenSign = event.target.closest('.button');

    inputCalculator.value += chosenSign.innerText;

    let input = inputCalculator.value;

    data.numbers.push(input);
}

