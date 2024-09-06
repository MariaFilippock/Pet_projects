

//Даны два массива:
let arr1 = [1, 2, 3];
let arr2 = ['a', 'b', 'c'];
// Слейте эти массивы в новый массив следующим образом:
// [1, 2, 'a', 'b', 'c', 3]


let result = [];

arr1.forEach((el, index) => {
    if (index === 2) {
        result.push(...arr2)
    }
    result.push(el);

})

console.log(result)

//Дано некоторое число:
// 123456
// Найдите сумму пар цифр этого числа. В нашем случае имеется ввиду следующее:
// 12 + 34 + 56

let num = 123456;

//разбить на пары

function doSth() {
    let emptyArr = [];
    let arrOfNumb = Array.from(num.toString());
    for (let i = 0; i < arrOfNumb.length; i++) {
        emptyArr.push(arrOfNumb[i]);
        if (i % 2 === 1 && (i !== arrOfNumb.length - 1)) {
            emptyArr.push(' ');
        }
    }
    return emptyArr.join('');
}


//1 способ

let asd = doSth().split(' ');
let Sum = 0;
for (let i = 0; i < asd.length; i++) {
    Sum += Number(asd[i]);

}
console.log('1 способ ',Sum);

//2 способ

let arrNum1 = asd.reduce((acc, val) => acc + Number(val), 0)
console.log('2 способ ', arrNum1);


//Дан массив с числами:
// [1, 2, 3, 4, 5]
// Выведите в консоль элементы этого массива в обратном порядке.

let numbArr = [1, 2, 3, 4, 5].reverse();
console.log(numbArr);


//Дана строка с буквами и цифрами. Проверьте, что в этой строке не более трех букв.
let NumAndLetStr = 'd29sda3x4вc';

function checkCountOfLetter(brr) {
    let newArr = brr.split('');

    let counter = 0;
    newArr.forEach((el) => {
        if (isNaN(el)) {
            counter++;
        }
    })
    if (counter > 3) {
        console.log('больше 3 букв!!!')
    } else {
        console.log('меньше 3 букв')
    }

}

console.log(checkCountOfLetter(NumAndLetStr));


//2 вариант c while
function checkLetter(str, limit) {
    let counterOfLetters = 0;
    let i = 0;

    while (counterOfLetters <= limit && i < str.length -1) {
        let letter = str[i];
        if (isNaN(letter)) {
            counterOfLetters++;
        }
        i++;
    }

    if (counterOfLetters > limit) {
         console.log(`в строке больше ${limit} букв`);
    } else {
         console.log(`в строке не больше ${limit} букв`);
    }
}

checkLetter('ddd1w', 3);













