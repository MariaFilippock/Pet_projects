//Дано число. Получите первую четную цифру с конца этого числа.

let Number1 = 3409965;


function findFirstNumberFromEnd(numb) {
    let arrWithNumb = Array.from(numb.toString());
    for (let i = arrWithNumb.length - 1; i > 0; i--) {
        if (arrWithNumb[i] % 2 === 0) {
            return Number(arrWithNumb[i]);
        }
    }
}

console.log(findFirstNumberFromEnd(Number1));


//Дана некоторая строка:
// 'abcde abcde abcde'
// Замените в ней первый символ каждого слова на '!':
// '!bcde !bcde !bcde'

let groupOfLet = 'abcde abcde abcde';


function changeEveryWord(array) {
    let arr = array.split(' ');
    let changedEl = arr.map((el) => {
        let arrLetter = Array.from(el);

        arrLetter[0] = '!';
        return arrLetter.join('');
    })
    return changedEl.join(' ');
}

console.log(changeEveryWord(groupOfLet));


//Дан массив с числами:
// [1, 2, 3, 3, 4, 5]
// Проверьте, что в этом массиве есть два одинаковых элемента подряд.

let arrNew = [1, 2, 3, 3, 4, 5];

function findEqualElements(arr) {
    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i] === arr[i + 1]) {
            console.log(`есть одинаковые числа на позиции ${i} и ${i + 1}`);
            return true;
        }
    }
    return false;
}

console.log(findEqualElements(arrNew));

//Дано некоторое число. Проверьте, что цифры этого числа расположены по возрастанию.

let numbers = 56729;

function checkOrderOfNumbers(order) {
    let numers = order.toString();
    for (let i = 0; i < numers.length - 1; i++) {
        if (numers[i] > numers[i + 1]) {
            console.log('числа не по возрастанию');
            return false;
        }
    }
    console.log('числа по возрастанию');
    return true;

}

console.log(checkOrderOfNumbers(numbers));


//Дан массив:
// [1, '', 2, 3, '', 5]
// Удалите из массива все пустые строки.

let arr2 = [1, '', 2, 3, '', 5];
let someEl = '';

function deleteNullEl() {
    return arr2.filter((el) => {
        return el !== '';
    })
}

console.log(deleteNullEl());

//Дан массив:
let bigArr = [
	[2, 1, 4, 3, 5],
	[3, 5, 2, 4, 1],
	[4, 3, 1, 5, 2],
];
// Отсортируйте элементы в каждом подмассиве.


function sortEveryEl() {
    return bigArr.map((el) => {
        return el.sort();
    })
}

console.log(sortEveryEl());

//Даны два массива:
let arr3 = [1, 2, 3, 5, 6, 4];
let arr4 = [1, 2, 3, 4, 5];
// Удалите из большего массива лишние элементы с конца так, чтобы длины массивов стали одинаковыми.

function clearedArray(array3, array4) {
    if (array4.length > array3.length) {
        return array4.splice(0, array3.length);
    } else {
        return array3.splice(0, array4.length);
    }
}

console.log(clearedArray(arr3, arr4));


//Выведите в консоль все числа в промежутке от 10 до 1000, у которых предпоследняя цифра четная.

function createNewArr() {
    let emptyArr1 = [];
    for (let i = 10; i <= 1000; i++) {
        let numAsStr = i.toString();
        if (numAsStr[numAsStr.length - 2] % 2 === 0) {
            emptyArr1.push(Number(numAsStr));
        }
    }
    return emptyArr1;
}

console.log(createNewArr());


//Дан массив. Удалите из него каждый пятый элемент.
let arrWithEl = [3, 1, 5, 8, 2, 67, 8, 53, 7, 6, 12];

function deleteEveryFifthEl(arrey) {
    return arrey.filter((element, index) => {
        // if (index % 5 === 0 && index > 0) {
        //     return false;
        // } else {
        //     return true;
        // }
        return index % 5 !== 0 || index === 0;
    });
}

console.log(deleteEveryFifthEl(arrWithEl));


//Дана некоторая переменная с числом:
let num = 5;
// Сделайте строку, содержащую столько нулей, сколько указано в переменной. В нашем случае получится такая строка:
// '00000'

function createStr(count, el) {
    let emptyArr = [];
    for (let i=0; i<= count; i++) {
     emptyArr.push(el);
    }
    return  emptyArr.join('');
}

console.log(createStr(num, 0));


//Дана некоторая строка со словами:
// 'aaa bbb ccc eee fff'
// Удалите из этой строки каждое второе слово. В нашем случае должно получится следующее:
// 'aaa ccc fff'

let strWithLetters = 'aaa bbb ccc eee fff';


function wdv(elem) {
    let newEl = elem.split(' ');
    return newEl.filter((el, index) => {
        return index % 2 !== 1;
    }).join(' ');
}

console.log(wdv(strWithLetters));







