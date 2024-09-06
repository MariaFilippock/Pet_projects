
//от 19.06
//Заполните массив случайными числами из промежутка от 1 до 100.
// 1 вариант
const length = 5;
const min = 1;
const max = 100;
let arrNumber = [...Array(length)];
for (let i = 0; i < arrNumber.length; i += 1) {
    arrNumber[i] = Math.floor(Math.random(min,max) * 100);
}
console.log('массив из случайных чисел ' + arrNumber);

//Заполните массив случайными числами из промежутка от 1 до 100.
// 2 вариант

function generateRandom(length, max) {
    let RandomNumber = [...Array(length)];
    return RandomNumber.map(function () {
        return Math.round(Math.random() * max);
    })
}

let RandomNumber = generateRandom(8, 100);
console.log('2 способ ' + RandomNumber);

//Дано некоторое число:
// 12345
// Выведите в консоль все его символы с конца.
let arraySymbol = '12345';
let newArraySymbol = [];
console.log(arraySymbol);
for (let i = arraySymbol.length-1; i >= 0; i--) {
    newArraySymbol.push(arraySymbol[i]);
}
console.log(newArraySymbol);

//Дан некоторый массив, например, вот такой: [1, 2, 3, 4, 5, 6]
// По очереди выведите в консоль подмассивы из двух элементов нашего массива:
// [1, 2]
// [3, 4]
// [5, 6]

let massiv = [1, 2, 3, 4, 5, 6];
console.log(massiv.slice(0,-4)); // 1 и 2
console.log(massiv.slice(2,-2)); // 3 и 4
console.log(massiv.slice(4)); // 5 и 6



