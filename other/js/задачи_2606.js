//от 26.06

//Дана дата в следующем формате:
// '2025-12-31'
// Преобразуйте эту дату в следующий объект:
// {
// 	year: '2025',
// 	month: '12',
// 	day: '31',
// }

let strDate = '2025-12-31';
let date = {
}
let arrDate = strDate.split('-');
console.log(arrDate);

date.year = arrDate[0];
date.month = arrDate[1];
date.day = arrDate[2];

console.log(date);


//Дана некоторая строка с буквами и цифрами. Получите позицию первой цифры в этой строке.
let str = 'dva63f2d0';
let newArr = Array.from(str);


function findFirstNum(array) {
   for (let i = 0; i< array.length; i++) {
       if (isFinite(array[i])) {
           return array[i];
       }
   }
}

console.log(findFirstNum(newArr));


//Дан объект с ключами и значениями. Запишите в первый массив ключи объекта, а во второй - значения.
let user1 = {
    name: 'Masha',
    surname: 'Filippova',
    age: 28,
}
//1 вариант
function createTwoArr(obj) {
    let userArr1 = [];
    let userArr2 = [];
    userArr1 = Object.keys(obj);
    for (let el in obj) {
        userArr2.push(obj[el]);
    }
    console.log(userArr1);
    console.log(userArr2);
}

console.log('1 вариант ',createTwoArr(user1));

//2 вариант
function findTwoArr2(obj) {
    let userArr1 = Object.keys(obj);
    let userArr2 = Object.values(obj);
    console.log(userArr1);
    console.log(userArr2);
}

console.log('2 вариант ', findTwoArr2(user1));

//Дано число. Выведите в консоль количество четных цифр в этом числе.

let num = 496884762;
let arrOfNum = [...num.toString()];
console.log(arrOfNum);

function countEvenNumbers(arr) {
    let count = 0;
    arr.forEach(function (element) {
    if (element % 2 === 0) {
        count++;
    }
    })
return count
}

console.log(countEvenNumbers(arrOfNum));

//Дана некоторая строка:
// 'abcde'
// Переведите в верхний регистр все нечетные буквы этой строки. В нашем случае должно получится следующее:
// 'AbCdE'


//1 вариант
let arrOfStr = Array.from('abcde');

function createBigSmallWord(array) {
    let newArray = [];
    for (let i = 0; i < array.length; i++) {
        if (i % 2 == 0) {
            newArray.push(array[i].toUpperCase());
        } else {
            newArray.push(array[i]);
        }
    }
    return newArray.join('');
}

console.log(createBigSmallWord(arrOfStr));


//2 вариант

function createBigSmallWord2(str) {
 let arrOfStr = Array.from(str);

 let arrayOfBigSmall = arrOfStr.map(function (letter, index) {
  if (index % 2 === 0) {
   return letter.toUpperCase()
  } else {
   return letter
  }
 })

 return arrayOfBigSmall.join('');
}

console.log(createBigSmallWord2('abcde'));






//Дана некоторая строка со словами:
// 'aaa bbb ccc'
// Сделайте заглавным первый символ каждого слова в этой строке. В нашем случае должно получится следующее:
// 'Aaa Bbb Ccc'

function createBigSmallWord3(str) {
 let arrOfStr = Array.from(str);

 let arrayOfBigSmall = arrOfStr.map(function (letter, index) {
  if (index % 4 === 0) {
   return letter.toUpperCase()
  } else {
   return letter
  }
 })
 return arrayOfBigSmall.join('');
}

console.log(createBigSmallWord3('aaa bbb ccc'));


//Дана некоторая строка, например, вот такая:
// '023m0df0dfg0'
// Получите массив позиций всех нулей в этой в строке.

function getArrayOfNull(stringNew, letter) {
    let CurrentArray = Array.from(stringNew);
    let ArrayOfNull = [];

    for (let i = 0; i < CurrentArray.length; i++) {
        if (CurrentArray[i] == letter) {
         ArrayOfNull.push(i);
        }
    }
    return ArrayOfNull;
      }


console.log(getArrayOfNull('023m0df0dfg0', '0'))

//Дана некоторая строка:
// 'abcdefg'
// Удалите из этой строки каждый третий символ. В нашем случае должно получится следующее:
// 'abdeg'

function deleteThirdSymbol(str) {
    let StrWithLetters = Array.from(str);
    let newArray = [];
    for (let i = 0; i < StrWithLetters.length; i++) {
        if (i % 3 !== 2) {
            newArray.push(StrWithLetters[i]);
        }
    }
    return newArray.join('');
}

console.log(deleteThirdSymbol('abcdefg'));


//Дан некоторый массив, например, вот такой:
// [1, 2, 3, 4, 5, 6]
// Поделите сумму элементов, стоящих на четных позициях, на сумму элементов, стоящих на нечетных позициях.
let EvenElements = [1, 2, 3, 4, 5, 6];

//вариант 1

function sumEvenEl(arr) {
    let SumEven = 0;
    let SumOdd = 0;
    for (let i = 0; i < arr.length; i++) {
        if (i % 2 == 0) {
            SumEven += arr[i];
        } else {
            SumOdd += arr[i];
        }
    }
    return SumEven/SumOdd;
}

console.log(sumEvenEl(EvenElements));

//вариант2
function sumEvenEl2(arr) {
    let SumEven = 0;
    let SumOdd = 0;

    arr.forEach(function (el, ind) {
        if (ind % 2 == 0) {
            SumEven += arr[ind];
        } else {
                SumOdd += arr[ind];
            }
        }
    )
    return SumEven / SumOdd;
}

console.log(sumEvenEl2(EvenElements));

//Дана некоторая строка с буквами и цифрами. Получите массив позиций всех цифр из этой строки.
let someStr = '4f2db2l85l';
let fromStrtoArr = someStr.split('');

function createArrOfNumbers(massiv) {
    let ArrOfNumbers = [];
    massiv.forEach(function (element,index) {
        if (isFinite(element)) {
            ArrOfNumbers.push(index);
        }
    })
    return ArrOfNumbers;
}

console.log(createArrOfNumbers(fromStrtoArr));



