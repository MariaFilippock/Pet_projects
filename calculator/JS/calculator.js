// let buttonPlus = document.getElementById('buttonPlus');
// let buttonMinus = document.getElementById('buttonMinus');
// let buttonMultiple = document.getElementById('buttonMultiple');
// let buttonDivide = document.getElementById('buttonDivide');
let arrayOfButtons = document.getElementsByClassName('operation-button');

// let arrayOfButtons = [buttonPlus, buttonMinus, buttonMultiple, buttonDivide];

let resultInput = document.getElementById('result');
let value1 = document.getElementById('number-1');
let value2 = document.getElementById('number-2');


// function getInputValue(numberId) {
//    let input = document.getElementById(numberId);
//    return Number(input.value);
// }




function makeOperations(OperationCode) {

    let number1 = Number(value1.value);
    let number2 = Number(value2.value);
    let result = 0;

    if (OperationCode === '+') {
        result = number1 + number2
    } else if (OperationCode === '-') {
       result = number1 - number2;
    } else if (OperationCode === '*') {
        result = number1 * number2;
    } else if (OperationCode === '/') {
        result = number1 / number2;
    } else {
         window.alert('operation is unknown')
    };
    resultInput.value = result;
}

//функция по поиску элемента, выбранного (нажатого) пользователем (т.е. мы заранее
// не можем предугадать какую кнопку выберет пользователь, но хотим прописать
// что будет с таким элементом при его нажатии)
function onOperationButtonClick(eventObject) {
    debugger;
    let clickedElement = eventObject.currentTarget;
    //currentTarget - это элемент, на котором происходит событие
    let operation = clickedElement.innerHTML;
    makeOperations(operation);
}


 for (let i = 0; i < arrayOfButtons.length; i++) {
     //берем конкретную кнопку
     let button = arrayOfButtons[i];
     //присвоили конкретной кнопке ивент листенер
     button.addEventListener('click', onOperationButtonClick);
 }



    const fruits = ['kiwi', 'apple', 'kiwi', 'orange', 'kiwi', 'apple'];
    let quantityOfFruits = 0;
    for (let i = 0; i <= fruits.length - 1; i++) {
    quantityOfFruits += fruits[i];
    }
    console.log(quantityOfFruits);
//
// const todos = [
//     {
//         text: 'Первое дело и хуй бы с ним',
//         done: false,
//     },
//     {
//         text: 'Какое то второе дело и пизда',
//         done: true,
//     },
//     {
//         text: 'Третье дело, Машкинкс в теле',
//         done: true,
//     }
// ]
//
// function onAddClick() {
//      todos.push({
//          text: someInput.text,
//          done: false,
//      });
//
//      someInput.value = '';
//
//
//
// }