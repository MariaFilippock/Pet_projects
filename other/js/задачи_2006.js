//от 20.06
//Даны два массива:
// let arr1 = [1, 2, 3];
// let arr2 = [4, 5, 6];
// Слейте эти массивы в новый массив:
// [1, 2, 3, 4, 5, 6]

let arr1 = [1, 2, 3];
let arr2 = [4, 5, 16];
let allArr = [...arr1,...arr2];
console.log('слили два массива в один: ' + allArr);

// 2 способ: склеиваем 2 массива и превращаем в строку
let g = ['s','o','b'];
let f = ['a','k','a'];
let gf = g.join('') + f.join('');
console.log(gf);

//3 способ
/**
 * EWGENIUS
 */
let arri1 = [1, 2, 3];
let arri2 = [4, 5, 16];
let arri3 = [4, 5, 16];
let twoDimensionArr = [arri1, arri2, arri3];
let resultArr = [];

twoDimensionArr.forEach(function(arr) {
    arr.forEach(function(item) {
        resultArr.push(item);
    })
});
console.log(resultArr);

// Уровень 2.1 задачника JavaScript
//1 Дана некоторая строка. Найдите позицию первого нуля в строке.
//1 способ

let someString = 'dvllsldla0';

function findIndexOfZero(str) {
    for (let i = 0; i < str.length; i++) {
        if (str[i] === '0') {
            return i;
        }
    }
}

let ResultOfFindings = findIndexOfZero(someString);
console.log('позиция первого нуля ' + ResultOfFindings);

//2 способ, Дана некоторая строка. Найдите позицию первого нуля в строке.
let someString1 = 'dvll0sldl00a0';
let findedElement1 = someString1.indexOf(0);
console.log('2 способ по поиску позиции первого нуля ' + findedElement1);


//дана строка. Найти позицию последнего нуля в строке.
let StringWithNull = 'dvllsl0d00l0a';

function findLastZero(el) {
    for (let i = el.length - 1; i >= 0; i--) {
        if (el[i] === '0') {
            return i;
        }
    }
}

console.log('позиция последнего нуля ' + findLastZero(StringWithNull));

//от 21.06
//вывести все индексы нуля из массива
let StringWithNull1 = 'dvllsl0d00l0a';

function findLastZero1(el) {
    let ArrWithZeroIndex = [];
    for (let i = 0; i < StringWithNull1.length; i++) {
        if (el[i] === '0') {
            ArrWithZeroIndex.push(i);
        }
    }
    return ArrWithZeroIndex;
}
console.log('вывести все индексы нуля из массива ' + findLastZero1(StringWithNull1));

//N2. Выведите в консоль все числа в промежутке от 1 до 1000, сумма первой и второй цифры которых равна пяти.
let newArr = [];
for (let i = 1;i < 1002; i++) {
    newArr.push(i)
}
 console.log(newArr);

//N3. Дан массив. Удалите из него элементы с заданным значением.
let ArrNeedCut = [34, 21, 56, 6, 13];
let Cut = 6;
let indexCut = ArrNeedCut.indexOf(Cut);
let ArrAfterCut = ArrNeedCut.splice(indexCut, 1);
console.log('удаленная часть массива ' +  ArrAfterCut);
console.log('массив после удаления элемента ' + ArrNeedCut);

//это про то что нужно делать функцию, которая принимает в себя 1ым аргументом массив, а вторым - удаляемое значения
