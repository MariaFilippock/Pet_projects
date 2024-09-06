//от 24.06

//N3. Дан массив. Удалите из него элементы с заданным значением.
let ArrNeedCut = [34, 21, 56, 6, 13, 6, 6];
let Cut = 6;

let indexOfCut = ArrNeedCut.indexOf(Cut)
while (indexOfCut >= 0) {
    ArrNeedCut.splice(indexOfCut, 1);
    indexOfCut = ArrNeedCut.indexOf(Cut)
}
console.log(ArrNeedCut);



//Дан некоторый массив, например, вот такой:
// [1, 2, 3, 4, 5, 6]
// Найдите сумму первой половины элементов этого массива.

let alfa = [1, 2, 3, 4, 5, 6];

function sumFirstHalfArray(arr) {
    let halfSumArr = 0;
    let beta = arr.length / 2;
    for (let i = 0; i < beta; i++) {
        halfSumArr += arr[i];
    }
    return halfSumArr;
}

console.log('сумма первой половины элементов массива ', sumFirstHalfArray(alfa));


//Дан массив с числами. Оставьте в нем только положительные числа.
//1 способ
let arrayOfPosNum = [-3, -4, 5, 12, 65, -43, 0];

function sumPositiveNum(ArrNum) {
    let positiveNum = [];
    for (let i = 0; i < ArrNum.length; i++) {
        if (ArrNum[i] >= 0) {
            positiveNum.push(ArrNum[i]);
        }
    }
    return positiveNum;
}

console.log('массив, в котором только положит числа ',sumPositiveNum(arrayOfPosNum));


//2 способ

function sumPositiveNum_2(ArrNum) {
    let positiveNum = [];
    ArrNum.forEach(function (number) {
        if (number > 0) {
            positiveNum.push(number);
        }
    });
    return positiveNum;
}

console.log('массив из положит значений массива ', sumPositiveNum(arrayOfPosNum));
console.log('2/ массив, в котором только положит числа ', sumPositiveNum_2(arrayOfPosNum));

//Дана строка. Удалите предпоследний символ из этой строки.

let name = 'clldaxsd';
let someEl = name.split('');

someEl.splice(name.length-2,1);
//преобразовать к строчке
let newStr = someEl.join('');
console.log(newStr);


//Дан некоторый массив, например, вот такой: [1, 2, 3, 4, 5, 6]
// Поделите сумму первой половины элементов этого массива на сумму второй половины элементов.
let allArr = [1, 2, 3, 4, 5, 6];

let newArray1 = allArr.slice(0, allArr.length/2);
console.log('массив 1 ' , newArray1);

let newArray2 = allArr.slice(allArr.length/2);
console.log('массив 2 ' , newArray2);

//функция по поиску суммы значений массива
function sumOfArr(someArray) {
    let newNewArr = 0;
    someArray.forEach(function (number) {
            newNewArr += number;

    })
    return newNewArr;
}

let ResultSum = sumOfArr(newArray1) / sumOfArr(newArray2);
console.log(ResultSum);

