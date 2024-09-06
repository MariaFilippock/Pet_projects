//от 15.07

//Дан массив:
let arr1 = [
	[1, 2, 3],
	[4, 5, 6],
	[7, 8, 9],
]
// Найдите сумму элементов этого массива.

function sumElInMatrix(el) {
	let sumOfArr1 = el.reduce((acc, value) => acc + value, 0);
	return sumOfArr1;
}

function sumMatrix(matrix) {
	let simlifiedArr = matrix.map((arr) => {
			return sumElInMatrix(arr);
		}
	);
	return sumElInMatrix(simlifiedArr);
}

console.log('сумма элементов массива ',sumMatrix(arr1));


//Дан массив со словами. Удалите из него слова, состоящие более чем из трех символов.

let Words = ['dlbf', 'ss', 'aaaedss', 'xovmd'];

function clearMoreThanThree(array) {
	return array.filter((element) => {
		return element.length < 3;
	})
}

console.log(clearMoreThanThree(Words));


//Дано некоторое число:
// 1357
// Проверьте, что все цифры этого числа являются нечетными.

let Numb = 13457;

function checkAllNumbEven(evenNum) {
	let newArr = [...evenNum.toString()];
	for (let i = 0; i < newArr.length; i++) {
		if (newArr[i] % 2 === 0) {
			return false;
		}
	}
	return true;
}

console.log('проверка числа ', checkAllNumbEven(Numb));


//Дано некоторое слово:
notReversedStr = 'abcba'
// Проверьте, что это слово читается одинаково с любой стороны.

//1 вариант
function checkEqualOrNot(someArr) {
	let reversedStr = someArr.split('').reverse();
	if (reversedStr.join('') === someArr) {
		return true;
	}
	return false;
}

console.log('1/ это палиндром ', checkEqualOrNot(notReversedStr));

//2 вариант
function compareTwoArr(stroka) {
	for (let i = 0; i < Math.floor(stroka.length / 2); i++) {
		if (stroka[i] !== stroka[stroka.length - 1 - i]) {
			return false;
		}
	}
	return true;
}

console.log('2/ это палиндром ', compareTwoArr(notReversedStr));

//3 вариант
function checkEqualOrNot2(someArr2) {
	let reversedStr = someArr2.split('').reverse().join('');

	return reversedStr === someArr2;
}

console.log('3/ это палиндром ', checkEqualOrNot2(notReversedStr));

//Дан массив: [134, ..., ...]
let bigMatrix =
[
	[
		[11, 12, 13],
		[14, 15, 16],
		[17, 17, 19],
	],
	[
		[21, 22, 23],
		[24, 25, 26],
		[27, 27, 29],
	],
	[
		[31, 32, 33],
		[34, 35, 36],
		[37, 37, 39],
	],
]
// Найдите сумму элементов этого массива.

function sumElInMatrix(element) {
	return element.reduce((acc, val) => acc + val, 0);
}

function sumBigMatrix(Matrix) {
	let arrWithFinalSum = Matrix.map((subMatrix) => {
		if (Number.isFinite(subMatrix[0])) {
			return sumElInMatrix(subMatrix);
		} else {
			return sumBigMatrix(subMatrix);
		}
	});

	return sumElInMatrix(arrWithFinalSum);
}

console.log('recursive', sumBigMatrix(bigMatrix));


//Выведите в консоль все числа в промежутке от 10 до 1000, у которых первая цифра четная.

function firstNumEven() {
	let emptyArr = [];
	for (let i = 10; i <= 1000; i++) {
		let strI = i.toString();
		if (Number(strI[0]) % 2 === 0) {
			emptyArr.push(i);
		}
		else {
			i = i - 1 + 10^(i.length-1);
		}
	}
	return emptyArr;
}

console.log(firstNumEven());

//Дан некоторый массив, например, вот такой:
let kuku = [1, 2, 3, 4, 5, 6]
// Поменяйте местами пары элементов этого массива:
// [2, 1, 4, 3, 6, 5]

//шаг в i+=2

/*let saveEl = kuku[0];
kuku[0] = kuku[1];
kuku[1] = saveEl;
console.log(kuku);

let saveEl1 = kuku[2];
kuku[2] = kuku[2+1];
kuku[2+1] = saveEl1;
console.log(kuku);

let saveEl2 = kuku[4];
kuku[4] = kuku[4+1];
kuku[4+1] = saveEl2;
console.log(kuku);*/

//1 вариант
function changeCouple() {
	for (let i = 0; i < kuku.length; i+=2) {
		let saveEl = kuku[i];
		kuku[i] = kuku[i+1];
		kuku[i+1] = saveEl;
	}
	return kuku;
}

console.log(changeCouple());


//2 вариант
function dfs(arr, groupLength) {
	let result = [];
	let temp = [];
	for (let i=0; i< arr.length; i++) {
		temp.push(arr[i]);

		if (temp.length === groupLength || i === arr.length - 1) {
			result.push(...temp.reverse());
			temp = [];
		}
	}

	return result;

}

console.log(
	dfs([1, 2, 3, 4, 5, 6], 3)
);

//Дан следующий объект:
let obj = {
	1: {
		1: 11,
		2: 12,
		3: 13,
	},
	2: {
		1: 21,
		2: 22,
		3: 23,
	},
	3: {
		1: 24,
		2: 25,
		3: 26,
	},
}


function sumObj(objj) {
	let secondArr = Object.values(objj).reduce((acc, val) => {
		if (Number.isFinite(val)) {
			return acc + val;
		} else {
			return acc + sumObj(val);
		}
	}, 0);
	return secondArr;
}

console.log(sumObj(obj));


//Дан текст со словами. Запишите в массив все слова, начинающиеся на букву 'a'.

let groupOfWords = 'арбуз был не из Астрахани, а из Краснодара';

function startsWithA(arrs) {
	return arrs.split(' ').filter((el) => el.startsWith('а'))
}

console.log(startsWithA(groupOfWords);






