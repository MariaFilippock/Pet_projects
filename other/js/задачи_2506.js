//от 25.06

//Даны два слова. Проверьте, что последняя буква первого слова совпадает с первой буквой второго слова.
let word1 = 'rediska';
let word2 = 'apelsin';

if (word1[word1.length-1] = word2[0]) {
    console.log('условие выполнено');
} else {
    console.log('условие НЕ выполнено!!');
}

//2 способ
function checkLetter(wor1, wor2) {
 // тут код с проверкой
 if (wor1[wor1.length-1] = wor2[0]) {
    return true;
} else {
    return false;
}
}

let Word1 = 'rediska';
let Word2 = 'apelsin';
console.log(checkLetter(Word1, Word1)); // или checkLetter('rediska', 'apelsin');


//Дана некоторая строка. Найдите позицию третьего нуля в строке.
let someString = '490202104300';
let El = '0';
let arrWithZero = someString.split('');


function findThirdZero(arr) {
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === El) {
            count++;
        }
        if (count === 3) {
            return i;
        }
    }
    return null;
}

console.log(findThirdZero(arrWithZero));

//Даны числа, разделенные запятыми:
// '12,34,56'
// Найдите сумму этих чисел.

let String = '12,34,56';
let arr = String.split(',') ;
console.log(arr);

// function sumElements(array) {
//     let newArray = 0;
//     array.forEach(function (number) {
//         newArray += Number(number);
//     })
//     return newArray;
// }

function sumElements(array) {
    return array.reduce(function(accumulator, currentValue) {
        return accumulator + Number(currentValue)
    }, 0);
}

console.log(sumElements(arr));
