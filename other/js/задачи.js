let arr = ['a', 'b', 'c', 'd'];
console.log(arr[arr.length-1]);

arr[1] = 5;
console.log(arr);

//Получите массив букв этой строки. 'abcde'
let str = 'abcde';
let array1 = str.split('');
console.log(array1);

//Получите массив цифр этого числа. 12345
let numbers = 12345;
let arrayOfNumbers = [...numbers.toString()];
console.log('Получите массив цифр этого числа. 12345 ' + arrayOfNumbers);

///2-ой способ как из строки сделать массив
let numbers1 = 'ffffvlvllg';
let arrayOfNumbers1 = Array.from(numbers1);
console.log(arrayOfNumbers1);

///Дано некоторое число: 12345
// сделать по убыванию

let b = 5039418; // ---> 8149305
let arr1 = [...b.toString()];
console.log('было ' + arr1);

for (let i = 0;i < arr1.length - 1;i++) {
  let maxNumber = arr1[i]; //0
    for (let j = i + 1; j <= arr1.length - 1;j++) {
        if (arr1[j] > maxNumber) { //3 > 0??
            maxNumber = arr1[j]; //меняем статус макс числа
            arr1[j] = arr1[i]; //на j теперь соседнее слева число
            arr1[i] = maxNumber;
        }
    }
}
console.log('стало ' + arr1);

//Дано некоторое число:
// 12345
// Найдите сумму цифр этого числа.

let someNumber = 12345;
let dede = someNumber.toString();

let sumofC = 0;

for (let i = 0; i < dede.length; i++) {
  sumofC += Number(dede[i]);
}
console.log(sumofC);

///Дано некоторое число: 12345
// Переверните его: 54321

let d = 123456; //
let arr3 = d.toString();
let resultArr = [];
console.log('было ' + arr3);

for (let i=arr3.length-1; i>=0; i--) {
    resultArr.push(arr3[i]);
}


//превращаем массив в число
let newNumber = +resultArr.join('');
console.log(newNumber);

//Заполните массив целыми числами от 1 до 10.
let drew = [];
for (let i = 1; i < 11; i++) {
    drew.push(i);
}
console.log('Массив целыми числами от 1 до 10: ' + drew);

//Заполните массив четными числами из промежутка от 1 до 100.
let i = 1;
let hoho = [];

for (i = 1; i <= 100; i++) {
    if (i % 2 === 0) {
    hoho.push(i);
    }
}
console.log('массив из четных чисел ' + hoho);

//Дан массив с дробями:
//[1.456, 2.125, 3.32, 4.1, 5.34]
// Округлите эти дроби до одного знака в дробной части.

let arrRound = [1.456, 2.125, 3.32, 4.1, 5.34];
let bad = [];

for (let i = 0; i < arrRound.length; i++) {
    let das = arrRound[i].toFixed(1);
    bad.push(Number(das));
}
console.log(bad);

//Дан массив со строками. Оставьте в этом массиве только те строки, которые начинаются на http://.

let arrayOfSite = ['http://ddddd','eeddddd','http://ddddddvyg', 'http://aaadvik'];
let Site = 'http://';

function FilterSites(elementArray, elementSite) {
  return elementArray.filter(function (element) {
      return element.startsWith(elementSite);
  })
}
console.log(FilterSites(arrayOfSite, Site));

//есть массив [30, 55, 63, 1, 5, 88, 39], отфильтровать по нечетным числам.
let rar = [30, 55, 63, 1, 5, 88, 39];

function filterOddNumbers(arrayOfNum) {
    return arrayOfNum.filter(function (num) {

       return num % 2 === 1;
    })
}

console.log(filterOddNumbers(rar));

//Дан массив со строками. Оставьте в этом массиве только те строки, которые заканчиваются на .html.
let jaws = ['slsllsz.html','dldld,dl','lfllvmms','flflgjjv.html'];
let endSite = '.html';

function FilterEndSite(Links, elementLinks) {
    return Links.filter(function (element) {
       return element.endsWith(elementLinks);
    })
}
console.log(FilterEndSite(jaws, endSite));

//Дан массив с числами. Увеличьте каждое число из массива на 10 процентов.

let gret = [4, 5, 1, 7, 55, 3, 21];
let fer = [];

for (let i = 0; i < gret.length; i++) {
    fer.push(gret[i]*(1+10/100));
}
console.log(fer);

/////
/**
 * Евджиниус показывает
 */
let initialArrEvg = [4, 5, 1, 7, 55, 3, 21];
let finalArrEvg = initialArrEvg.map(function (item) {
    const rounded = (item * (1 + 10/100)).toFixed(2);
    return Number(rounded);
});
console.log(finalArrEvg);

