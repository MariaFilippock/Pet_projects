//от 01.07

//Дан массив с некоторыми числами, например, вот такой:
// [123, 456, 789]
// Напишите код, который перевернет числа в этом массиве по следующему принципу:
// [321, 654, 987]

let Arr = [123, 456, 789];

/**
 * Меняем каждое число в массиве наоборот
 * @returns {*[]}
 */
function changeArr() {
    let emptyArr = [];

    for (let i = 0; i < Arr.length; i++) {
        let num = Arr[i];
        let revertedNumber = revertNumber(num);

        emptyArr.push(revertedNumber);
    }
    return emptyArr;
}

/**
 * Функция перестанавливающая все цифры числа наоборот.
 * @param num
 * @returns {number}
 */
function revertNumber(num) {
    let asStr = String(num);
    let lettersReverted = [];

    for (let i = asStr.length - 1; i >= 0; i--) {
        lettersReverted.push(asStr[i]);
    }
    return Number(lettersReverted.join(''));
}


console.log(changeArr());

///Дана некоторая строка с числом:
// '1234567'
// Отделите тройки цифр пробелами, начиная с конца числа. В нашем случае должно получится следующее:
// '1 234 567'

let Str = '1162234567';

let newArr = Str.split('').reverse();
let newArr2 = [];
for (let i = 0; i < newArr.length; i++) {
    newArr2.push(newArr[i]);
    if (i % 3 === 2 && (i !== newArr.length - 1)) {
        newArr2.push(' ');
    }
}
console.log(newArr2.reverse().join(''))

//Дана некоторая строка:
// 'AbCdE'
// Смените регистр букв этой строки на противоположный. В нашем случае должно получится следующее:
// 'aBcDe'

let strLetter = 'AbCdE';
let letterArr = strLetter.split('');

function createStr() {
    let emptyArr = [];
    for (let i = 0; i < letterArr.length; i++) {
        if (letterArr[i] === letterArr[i].toUpperCase()) {
            emptyArr.push(letterArr[i].toLowerCase());
        } else {
            emptyArr.push(letterArr[i].toUpperCase());
        }
    }
    return emptyArr.join('');
}

console.log(createStr());

///Дан некоторый массив с числами, например, вот такой:
// [1, 2, 3, 4, 5, 6]
// Слейте пары элементов вместе:
// [12, 34, 56]

let arr = [1, 2, 3, 4, 5, 6];

function hren(Size) {
    let ZeroArr = [];
    while (arr.length > 0) {

        let Chunk = arr.splice(0, Size).join('');
        let NumbChunk = Number(Chunk);
        ZeroArr.push(NumbChunk);
    }
    return ZeroArr;
}

console.log(hren(2));


//Дана некоторая строка со словами:
// 'aaa bbb ccc eee fff'
// Сделайте заглавным первый символ каждого второго слова в этой строке. В нашем случае должно получится следующее:
// 'aaa Bbb ccc Eee fff'

let strOfLetter = 'aaa bbb ccc eee fff';
let arrOfLetter = strOfLetter.split(' ');
console.log(arrOfLetter);


function ddddf() {
    let newwArr = [];
    for (let i = 0; i < arrOfLetter.length; i++) {
        if (i % 2 === 1) {
            newwArr.push(ddd(arrOfLetter[i]));
        } else {
            newwArr.push(arrOfLetter[i]);
        }
    }
    return newwArr;
}

console.log(ddddf());


function ddd(a) {
    return a.split('').map((letter, index) => {
        if (index === 0) {
            return letter.toUpperCase();
        } else {
            return letter;
        }
    }).join('');
}

// console.log(ddd(a));
