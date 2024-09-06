//Дано число. Получите массив делителей этого числа.
let number = 15;

function findDivider(num) {
    let emptyArr = [];
    for (let n = 1; n <= Math.floor(num / 2); n++) {
        if (num % n === 0) {
            emptyArr.push(n);
        }
    }
    emptyArr.push(num);
    return emptyArr;
}

console.log(findDivider(number));

//Даны два числа. Получите массив общих делителей этих чисел.

function findCommonDiv(num1, num2) {
    let newAr = [];
    let minEl = Math.min(num1, num2);
    let checkAndPush = someNumber => {
        if (num1 % someNumber === 0 && num2 % someNumber === 0) {
            newAr.push(someNumber);
        }
    };
    for (let n = 1; n <= minEl / 2; n++) {
        checkAndPush(n);
    }
    checkAndPush(minEl);
    return newAr;
}

console.log(findCommonDiv(10, 20));

// 2 вариант
// for (let n = 1; n <= Math.floor(minEl / 2); n++) {
//     if (num1 % n === 0 && num2 % n === 0) {
//         newAr.push(n);
//     }
// }
// if (num1 % minEl === 0 && num2 % minEl === 0) {
//     newAr.push(minEl);
// }
// return newAr;
// }
//
// console.log(findCommonDiv(7, 14));


//Дано число. Проверьте, что у этого числа есть только один делитель, кроме него самого и единицы.
let num = 4;

function hasOnlyOneDivider(num3) {
    let count = 0;
    for (let n = 2; n <= Math.floor(num3) / 2; n++) {
        if (num3 % n === 0) {
            count++;
        }
        if (count > 1) {
            return false;
        }
    }
    return count === 1;
}

console.log(hasOnlyOneDivider(num));


//Через запятую написаны числа. Получите максимальное из этих чисел.
let strWithNum = '3, 15, 52, 1';

function findMaxNumb(arr) {
    let arrWithNum = (arr.split(', ')).map(el => {
        return Number(el);
    });

    return Math.max(...arrWithNum);

}

console.log(findMaxNumb(strWithNum));


//Дан массив с числами. После каждого однозначного числа вставьте еще такое же.
let numbArr = [23, 3, 6, 13, 34, 1];

function duplicateAloneNumb(ar) {
    let empty = [];
    for (let i = 0; i < ar.length; i++) {
        empty.push(ar[i]);
        if (String(ar[i]).length === 1) {
            // if (ar[i] < 10 && ar[i] > -10) {
            empty.push(ar[i]);
        }
    }
    return empty;
}

console.log(duplicateAloneNumb(numbArr));


//Дана строка. Удалите из нее все гласные буквы.
let str = 'курица';

function deleteLetters(Str) {
    let lettersToDelete = ['а', 'е', 'ё', 'и', 'о', 'у', 'ы', 'э'];
    return Str.split('').filter(letter => !lettersToDelete.includes(letter)).join('');
}

console.log(deleteLetters(str));


//Дана строка. Сделайте заглавной последнюю букву каждого слова в этой строке.
let stroka = 'мама мыла раму';

function lastLetterUppercase(str) {
    return str.split(' ').map((wrd) => {
        return lastLetterUpper(wrd);
    }).join(' ');

}

console.log(lastLetterUppercase(stroka));


function lastLetterUpper(word) {
    return word.split('').map((letter, index) => {
        if (index === word.length - 1) {
            return letter.toUpperCase();
        } else {
            return letter;
        }
    }).join('');
}


//Дан следующая структура:
let data = [
    {
        1: [1, 2, 3],
        2: [1, 2, 3],
        3: [1, 2, 3],
    },
    {
        1: [1, 2, 3],
        2: [1, 2, 3],
        3: [1, 2, 3],
    },
    {
        1: [1, 2, 3],
        2: [1, 2, 3],
        3: [1, 2, 3],
    },
];

// Найдите сумму элементов этой структуры.

function sumArrs(arr1) {
    let sum = 0;
    let arr2 = arr1.forEach(obj => {
        sum += Object.values(obj).reduce((acc, value) => {
                if (isFinite(value)) {
                    return acc + value;
                } else {
                    return acc + value.reduce((accumul, val) => accumul + val, 0);
                }
            }
            , 0);
    })
    return sum;
}

console.log(sumArrs(data));

//Дан массив со числами. Проверьте, что все числа из этого массива содержат в себе цифру 3.
let arrWithNumbers = [13, 12, 3, 33, 313];

function containThree(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (!(arr[i].toString()).includes(3)) {
            return false;
        }
    }
    return true;
}

console.log(containThree(arrWithNumbers));

//вариант с some
function allNumHasThree(ar) {
    return ar.some(num => {
        return num !== 3;
    })
}

console.log('тру, если какая-то цифра не содержит тройку', allNumHasThree(arrWithNumbers));


//Дана строка в формате:
let str1 = 'kebab-case';
// Преобразуйте ее в формат:
// 'snake_case'

let newwEl = str1.split('-').join('_');
console.log(newwEl);

let variant2 = str1.replace('-', '_');
console.log('способ 2', variant2);


//Дана строка в формате:
let str2 = 'snake_case';
// Преобразуйте ее в формат:
// 'camelCase'

function createNewEl() {
    let var1 = str2.split('_');
    return var1.map((wrd, ind) => {
        if (ind % 2 === 1) {
            return changeOneEl(wrd);
        } else {
            return wrd;
        }
    }).join('');
}

function changeOneEl(el) {
    return el.split('').map((letter, index) => {
        if (index === 0) {
            return letter.toUpperCase();
        } else {
            return letter;
        }
    }).join('');
}

console.log(createNewEl());


//Сформируйте с помощью циклов следующий массив:
// [
// 	[1, 2, 3],
// 	[1, 2, 3],
// 	[1, 2, 3],
// 	[1, 2, 3],
// 	[1, 2, 3],
// ]

function createArrays(n, p) {
    let emptyAr = [];
    let littleAr = [];
    let count = 1;
    for (let j = 1; j <= p; j++) {
        littleAr.push(count++);
    }
    for (let i = 1; i <= n; i++) {
        emptyAr.push(littleAr);
    }

    return emptyAr;
}

console.log(createArrays(5, 3));


//Дана строка. Проверьте, что эта строка состоит только из цифр.













