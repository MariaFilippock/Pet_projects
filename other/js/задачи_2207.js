//Дан массив с числами. Оставьте в нем только те числа, которые делятся на 5.

let arrWithNumbers = [4,25,2,15,35,7];

function deleteFive(arr) {
	return arr.filter((num) => {return num % 5 === 0})
}

console.log(deleteFive(arrWithNumbers));


//Дан массив с числами. Оставьте в нем только те числа, которые содержат цифру ноль.

let  arr1 = [10, 3, 5, 100, 0, 34];

//1 вариант
function containsZero(arrNum) {
	let empty = [];
	for (let i = 0; i < arrNum.length; i++) {
		if ((arrNum[i].toString()).includes(0)) {
			empty.push(arrNum[i]);
		}
	}
	return empty;
}

console.log(containsZero(arr1));

//2 вариант
function containZero(ar) {
	return ar.filter((el) => {return (el.toString()).includes(0)});
}

console.log(containZero(arr1));


//Дан объект:
let obj = {x: 1, y: 2, z: 3};
// Возведите в квадрат каждый элемент этого объекта.

let squareObj = Object.values(obj).map((num) => {
	return num * num;
})

console.log(squareObj);


//Дан массив со числами. Проверьте, что в нем есть число, содержащее в себе цифру 3.
let arrWithNumThree = [3, 355, 2, 133];

function containThree(ar1) {
	return ar1.filter((element) => {return element.toString().includes(3)});
}

console.log(containThree(arrWithNumThree));



//Дано некоторое число:
let numbs = 35142;
// Отсортируйте цифры этого числа. В нашем случае должно получится следующее:
// 12345

//1 способ
function sortFromSmallToBig(numbers) {
	let arr = numbers.toString().split('');

	for (let i = 0; i < arr.length - 1; i++) {
		let saveEl = arr[i]; // arr i = 5
		for (let j = i + 1; j <= arr.length - 1; j++) {
			if (saveEl > arr[j]) {
				saveEl = arr[j];
				arr[j] = arr[i];
				arr[i] = saveEl;
			}
		}
	}
	return Number(arr.join(''));
}

console.log('1 способ', sortFromSmallToBig(numbs));

//2 способ
function sortNumbers(array1) {
	let newEll = array1.toString().split('').sort();
	return Number(newEll.join(''));
}
console.log('2 способ', sortNumbers(numbs));


//Напишите программу, которая сформирует следующую строку:
// '-1-2-3-4-5-'

function createArr(n) {
	let empty = [];
	for (let i = 1; i < n; i++) {
		empty.push('-',i);

	}
	empty.push('-');
	return empty.join('');
}

console.log(createArr(6));


//Дан следующий объект:
//
let obj1 = {
	1: {
		1: {
			1: 111,
			2: 112,
			3: 113,
		},
		2: {
			1: 121,
			2: 122,
			3: 123,
		},
	},
	2: {
		1: {
			1: 211,
			2: 212,
			3: 213,
		},
		2: {
			1: 221,
			2: 222,
			3: 223,
		},
	},
	3: {
		1: {
			1: 311,
			2: 312,
			3: 313,
		},
		2: {
			1: 321,
			2: 322,
			3: 323,
		},
	},
}
// Найдите сумму элементов этого объекта.

function sumObj(obj2) {
	let newOperation = Object.values(obj2).reduce((acc, val) => {
			if (Number.isFinite(val)) {
				return acc + val;
			} else {
				return acc + sumObj(val);
			}
		},
		0)

	return newOperation;
}

console.log(sumObj(obj1));


//Дан массив со числами. Удалите из него числа, состоящие более чем из трех цифр.
let numbArr = [88, 8, 90, 97755, 888, 932];

function deleteNumMoreThanThree(array1) {
	return array1.filter((num) =>
		String(num).length < 4
	)
}

console.log(deleteNumMoreThanThree(numbArr));


//Дано число, например, вот такое:
let num1 = 12345;
// Проверьте, что все цифры этого числа больше нуля.

//1 вариант
function checkNumNotZero(notZero) {
	let newAr = [...String(notZero)];

	for (let i = 0; i < newAr.length; i++) {
		if (Number(newAr[i]) === 0) {
			console.log('есть ноль!');
			return true;
		}
	}
	console.log('нет нулей');
	return false;
}

console.log(checkNumNotZero(num1));

//2 вариант
function hasZeroNum(numbNew) {
	let check = [...String(numbNew)].some(num => num === '0');
	return check;

}

console.log('проверка, 2 способ ', hasZeroNum(num1));



//Дан некоторый массив, например, вот такой:
let massiv = [123, 456, 789];
// Слейте все элементы этого массива в один массив, разбив их посимвольно:
// [1, 2, 3, 4, 5, 6, 7, 8, 9]

let newArr2 = Array.from(massiv.join('')).map(el => Number(el));
console.log(newArr2);


//2 вариант через forEach
function createNewArr() {
	let emptyArr = [];
	 Array.from(massiv.join('')).forEach(elem => emptyArr.push(Number(elem)));
	return emptyArr;
}



console.log(createNewArr());

//Дан следующая структура:
let data = [
	{
		1: 11,
		2: 12,
		3: 13,
	},
	{
		1: 21,
		2: 22,
		3: 23,
	},
	{
		1: 24,
		2: 25,
		3: 26,
	},
];
// Найдите сумму элементов этой структуры.

// function sumObjAndArr() {
// 	let arr = data.map(el => Object.values(el).reduce((acc, val) => acc+val,0));
// 	return arr.reduce((ac,  value) => ac+value,0);
// }


function sumObjAndArr() {
 let sum = 0;
 let arr = data.forEach(el => {
  sum += Object.values(el).reduce((acc, val) => acc + val, 0);
 });
 return sum;
}

console.log(sumObjAndArr());



//Дана строка со словами. Отсортируйте слова в алфавитном порядке.
let expression = 'Масянька любит какать на улице';

function filterWords(words) {
	let newExpr = words.split(' ');
	return newExpr.sort();
}

console.log(filterWords(expression));



